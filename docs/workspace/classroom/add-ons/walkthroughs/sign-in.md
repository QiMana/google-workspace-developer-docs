---
source: https://developers.google.com/workspace/classroom/add-ons/walkthroughs/sign-in
root: workspace
fetched_at: 2026-04-23T15:25:44.494Z
---

# Sign the user in

This is the **second** walkthrough in the Classroom add-ons walkthrough series.

In this walkthrough, you add Google Sign-in to the web application. This is a required behavior for Classroom add-ons. Use the credentials from this authorization flow for all future calls to the API.

In the course of this walkthrough, you complete the following:

- Configure your web app to maintain session data within an iframe.
- Implement Google OAuth 2.0 server-to-server sign in flow.
- Issue a call to the OAuth 2.0 API.
- Create additional routes to support authorizing, signing out, and testing API calls.

Once finished, you can fully authorize users in your web app and issue calls to Google APIs.

## Understand the authorization flow

Google APIs use the [OAuth 2.0 protocol](https://tools.ietf.org/html/rfc6749) for authentication and authorization. The full description of Google's OAuth implementation is available in the [Google Identity OAuth guide](https://developers.google.com/identity/protocols/oauth2).

Your application's credentials are managed in Google Cloud. Once these have been created, implement a four-step process to authenticate and authorize a user:

1. Request authorization. Provide a **callback URL** as part of this request. When complete, you receive an **authorization URL**.
2. Redirect the user to the authorization URL. The resulting page informs the user of the permissions your app requires, and prompts them to allow access. When complete, the user is routed to the callback URL.
3. Receive an **authorization code** at your callback route. Exchange the authorization code for an **[access token](https://developers.google.com/identity/protocols/oauth2#2.-obtain-an-access-token-from-the-google-authorization-server)** and a **[refresh token](https://developers.google.com/identity/protocols/oauth2#5.-refresh-the-access-token,-if-necessary.)**.
4. Make calls to a Google API using the tokens.

## Obtain OAuth 2.0 credentials

Ensure that you have created and downloaded OAuth credentials [as described in the Overview page](./walkthroughs-overview.md#oauth_credentials). Your project must use these credentials to sign in the user.

## Implement the authorization flow

Add logic and routes to our web app to realize the described flow, including these features:

- Initiate the authorization flow upon reaching the landing page.
- Request authorization and handle the authorization server response.
- Clear the stored credentials.
- Revoke the app's permissions.
- Test an API call.

### Initiate authorization

Modify your landing page to initiate the authorization flow if necessary. The add-on can be in two possible states; either there are saved tokens in the current session, or you need to obtain tokens from the OAuth 2.0 server. Perform a test API call if there are tokens in the session, or otherwise prompt the user to sign in.

### Python

Open your `routes.py` file. First set a couple of constants and our cookie configuration per the [iframe security recommendations](../developer-guides/iframes.md#iframe_security_guidelines).

```
# The file that contains the OAuth 2.0 client_id and client_secret.
CLIENT_SECRETS_FILE = "client_secret.json"

# The OAuth 2.0 access scopes to request.
# These scopes must match the scopes in your Google Cloud project's OAuth Consent
# Screen: https://console.cloud.google.com/apis/credentials/consent
SCOPES = [
    "openid",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/classroom.addons.teacher",
    "https://www.googleapis.com/auth/classroom.addons.student"
]

# Flask cookie configurations.
app.config.update(
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="None",
)
```

Move to your add-on landing route (this is `/classroom-addon` in the example file). Add logic to render a sign-in page if the session *doesn't* contain the "credentials" key.

```
@app.route("/classroom-addon")
def classroom_addon():
    if "credentials" not in flask.session:
        return flask.render_template("authorization.html")

    return flask.render_template(
        "addon-discovery.html",
        message="You've reached the addon discovery page.")
```

### Java

The code for this walkthrough can be found in the `step_02_sign_in` module.

Open the `application.properties` file, and add session configuration that follows the [iframe security recommendations](../developer-guides/iframes.md#iframe_security_guidelines).

```
# iFrame security recommendations call for cookies to have the HttpOnly and
# secure attribute set
server.servlet.session.cookie.http-only=true
server.servlet.session.cookie.secure=true

# Ensures that the session is maintained across the iframe and sign-in pop-up.
server.servlet.session.cookie.same-site=none
```

Create a service class (`AuthService.java` in the `step_02_sign_in` module) to handle the logic behind the endpoints in the controller file and set up the redirect URI, client secrets file location, and scopes that your add-on requires. The redirect URI is used to reroute your users to a specific URI after they authorize your app. See the Project Set Up section of the `README.md` in the source code for information on where to place your `client_secret.json` file.

```
@Service
public class AuthService {
    private static final String REDIRECT_URI = "https://localhost:5000/callback";
    private static final String CLIENT_SECRET_FILE = "client_secret.json";
    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();

    private static final String[] REQUIRED_SCOPES = {
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/classroom.addons.teacher",
        "https://www.googleapis.com/auth/classroom.addons.student"
    };

    /** Creates and returns a Collection object with all requested scopes.
    *   @return Collection of scopes requested by the application.
    */
    public static Collection<String> getScopes() {
        return new ArrayList<>(Arrays.asList(REQUIRED_SCOPES));
    }
}
```

Open the controller file (`AuthController.java` in the `step_02_sign_in` module) and add logic to the landing route to render the sign-in page if the session *doesn't* contain the `credentials` key.

```
@GetMapping(value = {"/start-auth-flow"})
public String startAuthFlow(Model model) {
    try {
        return "authorization";
    } catch (Exception e) {
        return onError(e.getMessage(), model);
    }
}

@GetMapping(value = {"/addon-discovery"})
public String addon_discovery(HttpSession session, Model model) {
    try {
        if (session == null || session.getAttribute("credentials") == null) {
            return startAuthFlow(model);
        }
        return "addon-discovery";
    } catch (Exception e) {
        return onError(e.getMessage(), model);
    }
}
```

Your authorization page should contain a link or button for the user to "sign in". Clicking this should redirect the user to the `authorize` route.

### Request authorization

To request authorization, construct and redirect the user to an authentication URL. This URL includes several pieces of information, such as the scopes requested, the destination route for *after* authorization, and the web app's client ID. You can see these in [this sample authorization URL](https://developers.google.com/identity/protocols/oauth2/web-server#sample-oauth-2.0-server-response).

### Python

Add the following import to your `routes.py` file.

```
import google_auth_oauthlib.flow
```

Create a new route `/authorize`. Create an instance of `google_auth_oauthlib.flow.Flow`; we strongly recommend using the included `from_client_secrets_file` method to do so.

```
@app.route("/authorize")
def authorize():
    # Create flow instance to manage the OAuth 2.0 Authorization Grant Flow
    # steps.
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE, scopes=SCOPES)
```

Set the `flow` 's `redirect_uri`; this is the route to which you intend users to return *after authorizing your app*. This is `/callback` in the following example.

```
# The URI created here must exactly match one of the authorized redirect
# URIs for the OAuth 2.0 client, which you configured in the API Console. If
# this value doesn't match an authorized URI, you will get a
# "redirect_uri_mismatch" error.
flow.redirect_uri = flask.url_for("callback", _external=True)
```

Use the flow object to construct the `authorization_url` and `state`. Store the `state` in the session; it's used to verify the authenticity of the server response later. Finally, redirect the user to the `authorization_url`.

```
authorization_url, state = flow.authorization_url(
    # Enable offline access so that you can refresh an access token without
    # re-prompting the user for permission. Recommended for web server apps.
    access_type="offline",
    # Enable incremental authorization. Recommended as a best practice.
    include_granted_scopes="true")

# Store the state so the callback can verify the auth server response.
flask.session["state"] = state

# Redirect the user to the OAuth authorization URL.
return flask.redirect(authorization_url)
```

### Java

Add the following methods to the `AuthService.java` file to instantiate the flow object and then use it to retrieve the authorization URL:

- `getClientSecrets()` method reads the client secret file and constructs a `GoogleClientSecrets` object.
- `getFlow()` method creates an instance of `GoogleAuthorizationCodeFlow`.
- `authorize()` method uses the `GoogleAuthorizationCodeFlow` object, the `state` parameter, and the redirect URI to retrieve the authorization URL. The `state` parameter is used to verify the authenticity of the response from the authorization server. The method then returns a map with the authorization URL and the `state` parameter.

```
/** Reads the client secret file downloaded from Google Cloud.
 *   @return GoogleClientSecrets read in from client secret file. */
public GoogleClientSecrets getClientSecrets() throws Exception {
    try {
        InputStream in = SignInApplication.class.getClassLoader()
            .getResourceAsStream(CLIENT_SECRET_FILE);
        if (in == null) {
            throw new FileNotFoundException("Client secret file not found: "
                +   CLIENT_SECRET_FILE);
        }
        GoogleClientSecrets clientSecrets = GoogleClientSecrets
            .load(JSON_FACTORY, new InputStreamReader(in));
        return clientSecrets;
    } catch (Exception e) {
        throw e;
    }
}

/** Builds and returns authorization code flow.
*   @return GoogleAuthorizationCodeFlow object used to retrieve an access
*   token and refresh token for the application.
*   @throws Exception if reading client secrets or building code flow object
*   is unsuccessful.
*/
public GoogleAuthorizationCodeFlow getFlow() throws Exception {
    try {
        GoogleAuthorizationCodeFlow authorizationCodeFlow =
            new GoogleAuthorizationCodeFlow.Builder(
                HTTP_TRANSPORT,
                JSON_FACTORY,
                getClientSecrets(),
                getScopes())
                .setAccessType("offline")
                .build();
        return authorizationCodeFlow;
    } catch (Exception e) {
        throw e;
    }
}

/** Builds and returns a map with the authorization URL, which allows the
*   user to give the app permission to their account, and the state parameter,
*   which is used to prevent cross site request forgery.
*   @return map with authorization URL and state parameter.
*   @throws Exception if building the authorization URL is unsuccessful.
*/
public HashMap authorize() throws Exception {
    HashMap<String, String> authDataMap = new HashMap<>();
    try {
        String state = new BigInteger(130, new SecureRandom()).toString(32);
        authDataMap.put("state", state);

        GoogleAuthorizationCodeFlow flow = getFlow();
        String authUrl = flow
            .newAuthorizationUrl()
            .setState(state)
            .setRedirectUri(REDIRECT_URI)
            .build();
        String url = authUrl;
        authDataMap.put("url", url);

        return authDataMap;
    } catch (Exception e) {
        throw e;
    }
}
```

Use constructor injection to create an instance of the service class in the controller class.

```
/** Declare AuthService to be used in the Controller class constructor. */
private final AuthService authService;

/** AuthController constructor. Uses constructor injection to instantiate
*   the AuthService and UserRepository classes.
*   @param authService the service class that handles the implementation logic
*   of requests.
*/
public AuthController(AuthService authService) {
    this.authService = authService;
}
```

Add the `/authorize` endpoint to the controller class. This endpoint calls the AuthService `authorize()` method to retrieve the `state` parameter and the authorization URL. Then, the endpoint stores the `state` parameter in the session and redirects users to the authorization URL.

```
/** Redirects the sign-in pop-up to the authorization URL.
*   @param response the current response to pass information to.
*   @param session the current session.
*   @throws Exception if redirection to the authorization URL is unsuccessful.
*/
@GetMapping(value = {"/authorize"})
public void authorize(HttpServletResponse response, HttpSession session)
    throws Exception {
    try {
        HashMap authDataMap = authService.authorize();
        String authUrl = authDataMap.get("url").toString();
        String state = authDataMap.get("state").toString();
        session.setAttribute("state", state);
        response.sendRedirect(authUrl);
    } catch (Exception e) {
        throw e;
    }
}
```

### Handle the server response

After authorizing, the user returns to the `redirect_uri` route from the previous step. In the preceding example, this route is `/callback`.

You receive a `code` in the response when the user returns from the authorization page. Then exchange the code for access and refresh tokens:

### Python

Add the following imports to your Flask server file.

```
import google.oauth2.credentials
import googleapiclient.discovery
```

Add the route to your server. Construct another instance of `google_auth_oauthlib.flow.Flow`, but this time reuse the state saved in the previous step.

```
@app.route("/callback")
def callback():
    state = flask.session["state"]

    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE, scopes=SCOPES, state=state)
    flow.redirect_uri = flask.url_for("callback", _external=True)
```

Next, request access and refresh tokens. Fortunately, the `flow` object also contains the `fetch_token` method to accomplish this. The method expects either the `code` or `authorization_response` arguments. Use the `authorization_response`, as it's the full URL from the request.

```
authorization_response = flask.request.url
flow.fetch_token(authorization_response=authorization_response)
```

You now have complete credentials! Store them in the session so that they can be retrieved in other methods or routes, then redirect to an add-on landing page.

```
credentials = flow.credentials
flask.session["credentials"] = {
    "token": credentials.token,
    "refresh_token": credentials.refresh_token,
    "token_uri": credentials.token_uri,
    "client_id": credentials.client_id,
    "client_secret": credentials.client_secret,
    "scopes": credentials.scopes
}

# Close the pop-up by rendering an HTML page with a script that redirects
# the owner and closes itself. This can be done with a bit of JavaScript:
# <script>
#     window.opener.location.href = "{{ url_for('classroom_addon') }}";
#     window.close();
# </script>
return flask.render_template("close-me.html")
```

### Java

Add a method to your service class that returns the `Credentials` object by passing in the authorization code retrieved from the redirect performed by the authorization URL. This `Credentials` object is used later to retrieve the access token and refresh token.

```
/** Returns the required credentials to access Google APIs.
*   @param authorizationCode the authorization code provided by the
*   authorization URL that's used to obtain credentials.
*   @return the credentials that were retrieved from the authorization flow.
*   @throws Exception if retrieving credentials is unsuccessful.
*/
public Credential getAndSaveCredentials(String authorizationCode) throws Exception {
    try {
        GoogleAuthorizationCodeFlow flow = getFlow();
        GoogleClientSecrets googleClientSecrets = getClientSecrets();
        TokenResponse tokenResponse = flow.newTokenRequest(authorizationCode)
            .setClientAuthentication(new ClientParametersAuthentication(
                googleClientSecrets.getWeb().getClientId(),
                googleClientSecrets.getWeb().getClientSecret()))
            .setRedirectUri(REDIRECT_URI)
            .execute();
        Credential credential = flow.createAndStoreCredential(tokenResponse, null);
        return credential;
    } catch (Exception e) {
        throw e;
    }
}
```

Add an endpoint for your redirect URI to the controller. Retrieve the authorization code and `state` parameter from the request. Compare this `state` parameter to the `state` attribute stored in the session. If they match, then continue with the authorization flow. If they don't match, return an error.

Then, call the `AuthService` `getAndSaveCredentials` method and pass in the authorization code as a parameter. After retrieving the `Credentials` object, store it in the session. Then, close the dialog and redirect the user to the add-on landing page.

```
/** Handles the redirect URL to grant the application access to the user's
*   account.
*   @param request the current request used to obtain the authorization code
*   and state parameter from.
*   @param session the current session.
*   @param response the current response to pass information to.
*   @param model the Model interface to pass error information that's
*   displayed on the error page.
*   @return the close-pop-up template if authorization is successful, or the
*   onError method to handle and display the error message.
*/
@GetMapping(value = {"/callback"})
public String callback(HttpServletRequest request, HttpSession session,
    HttpServletResponse response, Model model) {
    try {
        String authCode = request.getParameter("code");
        String requestState = request.getParameter("state");
        String sessionState = session.getAttribute("state").toString();
        if (!requestState.equals(sessionState)) {
            response.setStatus(401);
            return onError("Invalid state parameter.", model);
        }
        Credential credentials = authService.getAndSaveCredentials(authCode);
        session.setAttribute("credentials", credentials);
        return "close-pop-up";
    } catch (Exception e) {
        return onError(e.getMessage(), model);
    }
}
```

### Test an API call

With the flow complete, you can now issue calls to Google APIs!

As an example, request the user's profile information. You can request the user's information from the OAuth 2.0 API.

### Python

Read the documentation for the [OAuth 2.0 discovery API](https://googleapis.github.io/google-api-python-client/docs/dyn/oauth2_v2.html) Use it to get a populated [UserInfo](https://googleapis.github.io/google-api-python-client/docs/dyn/oauth2_v2.userinfo.html) object.

```
# Retrieve the credentials from the session data and construct a
# Credentials instance.
credentials = google.oauth2.credentials.Credentials(
    **flask.session["credentials"])

# Construct the OAuth 2.0 v2 discovery API library.
user_info_service = googleapiclient.discovery.build(
    serviceName="oauth2", version="v2", credentials=credentials)

# Request and store the username in the session.
# This allows it to be used in other methods or in an HTML template.
flask.session["username"] = (
    user_info_service.userinfo().get().execute().get("name"))
```

### Java

Create a method in the service class that builds a `UserInfo` object using the `Credentials` as a parameter.

```
/** Obtains the Userinfo object by passing in the required credentials.
*   @param credentials retrieved from the authorization flow.
*   @return the Userinfo object for the currently signed-in user.
*   @throws IOException if creating UserInfo service or obtaining the
*   Userinfo object is unsuccessful.
*/
public Userinfo getUserInfo(Credential credentials) throws IOException {
    try {
        Oauth2 userInfoService = new Oauth2.Builder(
            new NetHttpTransport(),
            new GsonFactory(),
            credentials).build();
        Userinfo userinfo = userInfoService.userinfo().get().execute();
        return userinfo;
    } catch (Exception e) {
        throw e;
    }
}
```

Add the `/test` endpoint to the controller that displays the user's email.

```
/** Returns the test request page with the user's email.
*   @param session the current session.
*   @param model the Model interface to pass error information that's
*   displayed on the error page.
*   @return the test page that displays the current user's email or the
*   onError method to handle and display the error message.
*/
@GetMapping(value = {"/test"})
public String test(HttpSession session, Model model) {
    try {
        Credential credentials = (Credential) session.getAttribute("credentials");
        Userinfo userInfo = authService.getUserInfo(credentials);
        String userInfoEmail = userInfo.getEmail();
        if (userInfoEmail != null) {
            model.addAttribute("userEmail", userInfoEmail);
        } else {
            return onError("Could not get user email.", model);
        }
        return "test";
    } catch (Exception e) {
        return onError(e.getMessage(), model);
    }
}
```

### Clear credentials

You can "clear" a user's credentials by removing them from the current session. This lets you test the routing on the add-on landing page.

We recommend showing an indication that the user has signed out before redirecting them to the add-on landing page. Your app should go through the authorization flow to obtain new credentials, but users are not prompted to re-authorize your app.

### Python

```
@app.route("/clear")
def clear_credentials():
    if "credentials" in flask.session:
        del flask.session["credentials"]
        del flask.session["username"]

    return flask.render_template("signed-out.html")
```

Alternatively, use `flask.session.clear()`, but this may have unintended effects if you have other values stored in the session.

### Java

In the controller, add a `/clear` endpoint.

```
/** Clears the credentials in the session and returns the sign-out
*   confirmation page.
*   @param session the current session.
*   @return the sign-out confirmation page.
*/
@GetMapping(value = {"/clear"})
public String clear(HttpSession session) {
    try {
        if (session != null && session.getAttribute("credentials") != null) {
            session.removeAttribute("credentials");
        }
        return "sign-out";
    } catch (Exception e) {
        return onError(e.getMessage(), model);
    }
}
```

### Revoke the app's permission

A user can revoke your app's permission by sending a `POST` request to `https://oauth2.googleapis.com/revoke`. The request should contain the user's access token.

### Python

```
import requests

@app.route("/revoke")
def revoke():
    if "credentials" not in flask.session:
        return flask.render_template("addon-discovery.html",
                            message="You need to authorize before " +
                            "attempting to revoke credentials.")

    credentials = google.oauth2.credentials.Credentials(
        **flask.session["credentials"])

    revoke = requests.post(
        "https://oauth2.googleapis.com/revoke",
        params={"token": credentials.token},
        headers={"content-type": "application/x-www-form-urlencoded"})

    if "credentials" in flask.session:
        del flask.session["credentials"]
        del flask.session["username"]

    status_code = getattr(revoke, "status_code")
    if status_code == 200:
        return flask.render_template("authorization.html")
    else:
        return flask.render_template(
            "index.html", message="An error occurred during revocation!")
```

### Java

Add a method to the service class that makes a call to the revoke endpoint.

```
/** Revokes the app's permissions to the user's account.
*   @param credentials retrieved from the authorization flow.
*   @return response entity returned from the HTTP call to obtain response
*   information.
*   @throws RestClientException if the POST request to the revoke endpoint is
*   unsuccessful.
*/
public ResponseEntity<String> revokeCredentials(Credential credentials) throws RestClientException {
    try {
        String accessToken = credentials.getAccessToken();
        String url = "https://oauth2.googleapis.com/revoke?token=" + accessToken;

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED_VALUE);
        HttpEntity<Object> httpEntity = new HttpEntity<Object>(httpHeaders);
        ResponseEntity<String> responseEntity = new RestTemplate().exchange(
            url,
            HttpMethod.POST,
            httpEntity,
            String.class);
        return responseEntity;
    } catch (RestClientException e) {
        throw e;
    }
}
```

Add an endpoint, `/revoke`, to the controller that clears the session and redirects the user to the authorization page if the revocation was successful.

```
/** Revokes the app's permissions and returns the authorization page.
*   @param session the current session.
*   @return the authorization page.
*   @throws Exception if revoking access is unsuccessful.
*/
@GetMapping(value = {"/revoke"})
public String revoke(HttpSession session) throws Exception {
    try {
        if (session != null && session.getAttribute("credentials") != null) {
            Credential credentials = (Credential) session.getAttribute("credentials");
            ResponseEntity responseEntity = authService.revokeCredentials(credentials);
            Integer httpStatusCode = responseEntity.getStatusCodeValue();

            if (httpStatusCode != 200) {
                return onError("There was an issue revoking access: " +
                    responseEntity.getStatusCode(), model);
            }
            session.removeAttribute("credentials");
        }
        return startAuthFlow(model);
    } catch (Exception e) {
        return onError(e.getMessage(), model);
    }
}
```

## Test the add-on

Sign in to [Google Classroom](https://classroom.google.com/) as one of your *Teacher* test users. Navigate to the **Classwork** tab and create a new **Assignment**. Click the **Add-ons** button below the text area, then select your add-on. The iframe opens and the add-on loads the **Attachment Setup URI** that you specified in the GWM SDK's [App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk) page.

Congratulations! You're ready to proceed to the next step: [handling repeat visits to your add-on](./repeat-login.md).
