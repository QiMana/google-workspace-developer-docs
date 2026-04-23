---
source: https://developers.google.com/workspace/classroom/add-ons/walkthroughs/repeat-login
root: workspace
fetched_at: 2026-04-23T15:25:43.368Z
---

# Handle repeat logins

This is the **third** walkthrough in the Classroom add-ons walkthrough series.

In this walkthrough, you handle repeat visits to our add-on by automatically retrieving a user's previously granted credentials. You then route users to pages from which they can immediately issue API requests. This is a required behavior for Classroom add-ons.

In the course of this walkthrough, you complete the following:

- Implement persistent storage for our user credentials.
- Retrieve and evaluate the `login_hint` add-on query parameter. This is a unique Google ID number of the signed-in user.

Once finished, you can fully authorize users in your web app and issue calls to Google APIs.

## Understand iframe query parameters

Classroom loads your add-on's **Attachment Setup URI** upon opening. Classroom appends several `GET` query parameters to the URI; these contain useful contextual information. If, for example, your Attachment Discovery URI is `https://example.com/addon`, Classroom creates the iframe with the source URL set to `https://example.com/addon?courseId=XXX&itemId=YYY&itemType=courseWork&addOnToken=ZZZ`, where `XXX`, `YYY`, and `ZZZ` are string IDs. See the [iframes guide](https://developers.google.com/workspace/classroom/add-ons/developer-guides/iframes#example_attachment_discovery_scenario) for a detailed description of this scenario.

There are five possible query parameters for the discovery URL:

- `courseId`: The ID of the current Classroom course.
- `itemId`: The ID of the stream item that the user is editing or creating.
- `itemType`: The kind of stream item the user is creating or editing, one of `courseWork`, `courseWorkMaterial`, or `announcement`.
- `addOnToken`: A token used to authorize certain Classroom add-on actions.
- `login_hint`: The Google ID of the current user.

This walkthrough addresses `login_hint`. Users are routed based on whether this query parameter is provided, either to the authorization flow if missing, or to the add-on discovery page if present.

### Access the query parameters

The query parameters are passed to your web application in the URI string. Store these values in your session; they're used in the authorization flow and to store and retrieve information about the user. These query parameters are only passed when the add-on is first opened.

### Python

Navigate to the definitions of your Flask routes (`routes.py` if you're following our provided example). At the top of your add-on landing route (`/classroom-addon` in our provided example), retrieve and store the `login_hint` query parameter:

```
# If the login_hint query parameter is available, we'll store it in the session.
if flask.request.args.get("login_hint"):
    flask.session["login_hint"] = flask.request.args.get("login_hint")
```

Ensure that `login_hint` (if present) is stored in the session. This is an appropriate place to store these values; they're ephemeral and you receive new values when the add-on is opened.

```
# It's possible that we might return to this route later, in which case the
# parameters will not be passed in. Instead, use the values cached in the
# session.
login_hint = flask.session.get("login_hint")

# If there's still no login_hint query parameter, this must be their first
# time signing in, so send the user to the sign in page.
if login_hint is None:
    return start_auth_flow()
```

### Java

Navigate to the add-on landing route in your controller class (`/addon-discovery` in `AuthController.java` in the provided example). At the beginning of this route, retrieve and store the `login_hint` query parameter.

```
/** Retrieve the login_hint query parameter from the request URL if present. */
String login_hint = request.getParameter("login_hint");
```

Ensure that `login_hint` (if present) is stored in the session. This is an appropriate place to store these values; they're ephemeral and you receive new values when the add-on is opened.

```
/** If login_hint wasn't sent, use the values in the session. */
if (login_hint == null) {
    login_hint = (String) session.getAttribute("login_hint");
}

/** If the there is still no login_hint, route the user to the authorization
 *  page. */
if (login_hint == null) {
    return startAuthFlow(model);
}

/** If the login_hint query parameter is provided, add it to the session. */
else if (login_hint != null) {
    session.setAttribute("login_hint", login_hint);
}
```

### Add the query parameters to the authorization flow

The `login_hint` parameter should be passed to Google's authentication servers as well. This facilitates the authentication process; if your application knows which user is trying to authenticate, the server uses the hint to simplify the login flow by prefilling the email field in the sign-in form.

### Python

Navigate to the authorization route in your Flask server file (`/authorize` in our provided example). Add the `login_hint` argument to the call to `flow.authorization_url`.

```
authorization_url, state = flow.authorization_url(
    # Enable offline access so that you can refresh an access token without
    # re-prompting the user for permission. Recommended for web server apps.
    access_type="offline",
    # Enable incremental authorization. Recommended as a best practice.
    include_granted_scopes="true",
    # The user will automatically be selected if we have the login_hint.
    login_hint=flask.session.get("login_hint"),
```

### Java

Navigate to the `authorize()` method in the `AuthService.java` class. Add `login_hint` as a parameter to the method, and add the `login_hint` and argument to the authorization URL builder.

```
String authUrl = flow
    .newAuthorizationUrl()
    .setState(state)
    .set("login_hint", login_hint)
    .setRedirectUri(REDIRECT_URI)
    .build();
```

## Add persistent storage for user credentials

If you receive `login_hint` as a query parameter when the add-on loads, it's an indication that the user has already completed the authorization flow for our application. You should retrieve their previous credentials instead of forcing them to sign in again.

Recall that you received a **refresh token** upon the completion of the authorization flow. Save this token; it be reused to obtain an **access token**, which is short-lived and necessary to use Google APIs. You previously saved these credentials in the session, but you need to store the credentials to handle repeat visits.

### Define the User schema and set up the database

Set up a database schema for a `User`.

### Python

#### Define the User schema

A `User` contains the following attributes:

- `id`: The user's Google ID. This should match values provided in the `login_hint` query parameter.
- `display_name`: The user's first and last name, such as "Alex Smith".
- `email`: The user's email address.
- `portrait_url`: The URL of the user's profile picture.
- `refresh_token`: The previously acquired refresh token.

This example implements storage using SQLite, which is natively supported by Python. It uses the `flask_sqlalchemy` module to facilitate our database management.

#### Set up the database

First, specify a file location for our database. Navigate to your server configuration file (`config.py` in our provided example) and add the following.

```
import os

# Point to a database file in the project root.
DATABASE_FILE_NAME = os.path.join(
    os.path.abspath(os.path.dirname(__file__)), 'data.sqlite')

class Config(object):
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{DATABASE_FILE_NAME}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

This points Flask to the file `data.sqlite` in the same directory as your `main.py` file.

Next, navigate to your module directory and create a new `models.py` file. This is `webapp/models.py` if you're following our provided example. Add the following to the new file to define the `User` table, substituting your module name for `webapp` if different.

```
from webapp import db

# Database model to represent a user.
class User(db.Model):
    # The user's identifying information:
    id = db.Column(db.String(120), primary_key=True)
    display_name = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True)
    portrait_url = db.Column(db.Text())

    # The user's refresh token, which will be used to obtain an access token.
    # Note that refresh tokens will become invalid if:
    # - The refresh token has not been used for six months.
    # - The user revokes your app's access permissions.
    # - The user changes passwords.
    # - The user belongs to a Google Cloud organization
    #   that has session control policies in effect.
    refresh_token = db.Column(db.Text())
```

Finally, in your module's `__init__.py` file, add the following to import the new models and create the database.

```
from webapp import models
from os import path
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)

# Initialize the database file if not created.
if not path.exists(config.DATABASE_FILE_NAME):
    db.create_all()
```

### Java

#### Define the User schema

A `User` contains the following attributes:

- `id`: The user's Google ID. This should match value provided in the `login_hint` query parameter.
- `email`: The user's email address.

Create a `schema.sql` file in the module's `resources` directory. Spring reads this file and generates a schema for the database accordingly. Define the table with a table name, `users`, and columns to represent the `User` attributes, `id` and `email`.

```
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY, -- user's unique Google ID
    email VARCHAR(255), -- user's email address
);
```

Create a Java class to define the `User` model for the database. This is `User.java` in the provided example.

Add the `@Entity` annotation to indicate that this is a POJO that can be saved to the database. Add the `@Table` annotation with the corresponding table name that you configured in `schema.sql`.

Note that the code example includes constructors and setters for the two attributes. The constructor and setters are used in `AuthController.java` to create or update a user in the database. You may also include getters and a `toString` method as you see fit, but for this particular walkthrough, these methods are not used and are omitted from the code example on this page for brevity.

```
/** An entity class that provides a model to store user information. */
@Entity
@Table(name = "users")
public class User {
    /** The user's unique Google ID. The @Id annotation specifies that this
     *   is the primary key. */
    @Id
    @Column
    private String id;

    /** The user's email address. */
    @Column
    private String email;

    /** Required User class no args constructor. */
    public User() {
    }

    /** The User class constructor that creates a User object with the
    *   specified parameters.
    *   @param id the user's unique Google ID
    *   @param email the user's email address
    */
    public User(String id, String email) {
        this.id = id;
        this.email = email;
    }

    public void setId(String id) { this.id = id; }

    public void setEmail(String email) { this.email = email; }
}
```

Create an interface called `UserRepository.java` to handle CRUD operations to the database. This interface extends the `CrudRepository` interface.

```
/** Provides CRUD operations for the User class by extending the
 *   CrudRepository interface. */
@Repository
public interface UserRepository extends CrudRepository<User, String> {
}
```

The controller class facilitates communication between the client and the repository. Therefore, update the controller class constructor to inject the `UserRepository` class.

```
/** Declare UserRepository to be used in the Controller class constructor. */
private final UserRepository userRepository;

/**
*   ...
*   @param userRepository the class that interacts with User objects stored in
*   persistent storage.
*/
public AuthController(AuthService authService, UserRepository userRepository) {
    this.authService = authService;
    this.userRepository = userRepository;
}
```

#### Set up the database

To store User-related information, use an H2 database that's intrinsically supported in Spring Boot. This database is also used in subsequent walkthroughs to store other Classroom-related information. Setting up the H2 database requires adding the following configuration to `application.properties`.

```
# Enable configuration for persistent storage using an H2 database
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.url=jdbc:h2:file:./h2/userdb
spring.datasource.username=<USERNAME>
spring.datasource.password=<PASSWORD>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.open-in-view=false
```

The `spring.datasource.url` config creates a directory, called `h2`, with the file `userdb` stored inside it. Add the path to the H2 database to the `.gitignore`. You must update the `spring.datasource.username` and `spring.datasource.password` before you run the application to set the database with a username and password of your choice. To update the username and password for the database after running the application, delete the generated `h2` directory, update the configuration, and re-run the application.

Setting the `spring.jpa.hibernate.ddl-auto` config to `update` ensures that data stored in the database is preserved when the application is restarted. To clear the database every time the application is restarted, set this config to `create`.

Set the `spring.jpa.open-in-view` config to `false`. This config is enabled by default and can be known to result in performance issues that are difficult to diagnose in production.

As described previously, you must be able to retrieve the credentials of a repeat user. This is facilitated by the built-in credential store support offered by the `GoogleAuthorizationCodeFlow`.

In the `AuthService.java` class, define a path to the file where the credential class is stored. In this example, the file is created in the `/credentialStore` directory. Add the path to the credential store to the `.gitignore`. This directory is generated once the user begins the authorization flow.

```
private static final File dataDirectory = new File("credentialStore");
```

Next, create a method in the `AuthService.java` file that creates and returns a `FileDataStoreFactory` object. This is the datastore that stores credentials.

```
/** Creates and returns FileDataStoreFactory object to store credentials.
 *   @return FileDataStoreFactory dataStore used to save and obtain users ids
 *   mapped to Credentials.
 *   @throws IOException if creating the dataStore is unsuccessful.
 */
public FileDataStoreFactory getCredentialDataStore() throws IOException {
    FileDataStoreFactory dataStore = new FileDataStoreFactory(dataDirectory);
    return dataStore;
}
```

Update the `getFlow()` method in `AuthService.java` to include `setDataStoreFactory` in the `GoogleAuthorizationCodeFlow Builder()` method and call `getCredentialDataStore()` to set the datastore.

```
GoogleAuthorizationCodeFlow authorizationCodeFlow =
    new GoogleAuthorizationCodeFlow.Builder(
        HTTP_TRANSPORT,
        JSON_FACTORY,
        getClientSecrets(),
        getScopes())
    .setAccessType("offline")
    .setDataStoreFactory(getCredentialDataStore())
    .build();
```

Next, update the `getAndSaveCredentials(String authorizationCode)` method. Previously, this method obtained credentials without storing them anywhere. Update the method to store the credentials in the datastore indexed by the user ID.

The user ID can be obtained from the `TokenResponse` object using the `id_token`, but it *must* be verified first. Otherwise, client applications may be able to impersonate users by sending modified user ids to the server. it's recommended that you use the Google API Client libraries to validate the `id_token`. See the \[Google Identity page on verifying the Google ID token\] for more information.

```
// Obtaining the id_token will help determine which user signed in to the application.
String idTokenString = tokenResponse.get("id_token").toString();

// Validate the id_token using the GoogleIdTokenVerifier object.
GoogleIdTokenVerifier googleIdTokenVerifier = new GoogleIdTokenVerifier.Builder(
        HTTP_TRANSPORT,
        JSON_FACTORY)
    .setAudience(Collections.singletonList(
        googleClientSecrets.getWeb().getClientId()))
    .build();

GoogleIdToken idToken = googleIdTokenVerifier.verify(idTokenString);

if (idToken == null) {
    throw new Exception("Invalid ID token.");
}
```

Once the `id_token` has been verified, obtain the `userId` to store along with the obtained credentials.

```
// Obtain the user id from the id_token.
Payload payload = idToken.getPayload();
String userId = payload.getSubject();
```

Update the call to `flow.createAndStoreCredential` to include the `userId`.

```
// Save the user id and credentials to the configured FileDataStoreFactory.
Credential credential = flow.createAndStoreCredential(tokenResponse, userId);
```

Add a method to the `AuthService.java` class that returns the credentials for a specific user if it exists in the datastore.

```
/** Find credentials in the datastore based on a specific user id.
*   @param userId key to find in the file datastore.
*   @return Credential object to be returned if a matching key is found in the datastore. Null if
*   the key doesn't exist.
*   @throws Exception if building flow object or checking for userId key is unsuccessful. */
public Credential loadFromCredentialDataStore(String userId) throws Exception {
    try {
        GoogleAuthorizationCodeFlow flow = getFlow();
        Credential credential = flow.loadCredential(userId);
        return credential;
    } catch (Exception e) {
        e.printStackTrace();
        throw e;
    }
}
```

### Retrieve credentials

Define a method for fetching `Users`. You're provided an `id` in the `login_hint` query parameter, which you can use to retrieve a specific user record.

### Python

```
def get_credentials_from_storage(id):
    """
    Retrieves credentials from the storage and returns them as a dictionary.
    """
    return User.query.get(id)
```

### Java

In the `AuthController.java` class, define a method to retrieve a user from the database based on their user ID.

```
/** Retrieves stored credentials based on the user id.
*   @param id the id of the current user
*   @return User the database entry corresponding to the current user or null
*   if the user doesn't exist in the database.
*/
public User getUser(String id) {
    if (id != null) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
    }
    return null;
}
```

### Store credentials

There are two scenarios when storing credentials. If the user's `id` is already in the database, then update the existing record with any new values. Otherwise, create a new `User` record and add it to the database.

### Python

First define a utility method that implements the storage or update behavior.

```
def save_user_credentials(credentials=None, user_info=None):
    """
    Updates or adds a User to the database. A new user is added only if both
    credentials and user_info are provided.

    Args:
        credentials: An optional Credentials object.
        user_info: An optional dict containing user info returned by the
            OAuth 2.0 API.
    """

    existing_user = get_credentials_from_storage(
        flask.session.get("login_hint"))

    if existing_user:
        if user_info:
            existing_user.id = user_info.get("id")
            existing_user.display_name = user_info.get("name")
            existing_user.email = user_info.get("email")
            existing_user.portrait_url = user_info.get("picture")

        if credentials and credentials.refresh_token is not None:
            existing_user.refresh_token = credentials.refresh_token

    elif credentials and user_info:
        new_user = User(id=user_info.get("id"),
                        display_name=user_info.get("name"),
                        email=user_info.get("email"),
                        portrait_url=user_info.get("picture"),
                        refresh_token=credentials.refresh_token)

        db.session.add(new_user)

    db.session.commit()
```

There are two instances in which you might save credentials to your database: when the user returns to your application at the end of the authorization flow and when issuing an API call. These are where we previously set the session `credentials` key.

Call `save_user_credentials` at the end of your `callback` route. Keep the `user_info` object instead of just extracting the user's name.

```
# The flow is complete! We'll use the credentials to fetch the user's info.
user_info_service = googleapiclient.discovery.build(
    serviceName="oauth2", version="v2", credentials=credentials)

user_info = user_info_service.userinfo().get().execute()

flask.session["username"] = user_info.get("name")

save_user_credentials(credentials, user_info)
```

You should also update the credentials following calls to the API. In this case you can provide the updated credentials as arguments to the `save_user_credentials` method.

```
# Save credentials in case access token was refreshed.
flask.session["credentials"] = credentials_to_dict(credentials)
save_user_credentials(credentials)
```

### Java

First define a method that stores or updates a `User` object in the H2 database.

```
/** Adds or updates a user in the database.
*   @param credential the credentials object to save or update in the database.
*   @param userinfo the userinfo object to save or update in the database.
*   @param session the current session.
*/
public void saveUser(Credential credential, Userinfo userinfo, HttpSession session) {
    User storedUser = null;
    if (session != null && session.getAttribute("login_hint") != null) {
        storedUser = getUser(session.getAttribute("login_hint").toString());
    }

    if (storedUser != null) {
        if (userinfo != null) {
            storedUser.setId(userinfo.getId());
            storedUser.setEmail(userinfo.getEmail());
        }
        userRepository.save(storedUser);
    } else if (credential != null && userinfo != null) {
        User newUser = new User(
            userinfo.getId(),
            userinfo.getEmail(),
        );
        userRepository.save(newUser);
    }
}
```

There are two instances in which you might save credentials to your database: when the user returns to your application at the end of the authorization flow and when issuing an API call. These are where we previously set the session `credentials` key.

Call `saveUser` at the end of the `/callback` route. You should keep the `user_info` object instead of just extracting the user's email.

```
/** This is the end of the auth flow. We should save user info to the database. */
Userinfo userinfo = authService.getUserInfo(credentials);
saveUser(credentials, userinfo, session);
```

You should also update the credentials following calls to the API. In this case, you can provide the updated credentials as arguments to the `saveUser` method.

```
/** Save credentials in case access token was refreshed. */
saveUser(credentials, null, session);
```

### Expired credentials

Note that there are a few reasons that refresh tokens may become invalid. These include:

- The refresh token has not been used for six months.
- The user revokes your app's access permissions.
- The user changes passwords.
- The user belongs to a Google Cloud organization that has session control policies in effect.

Acquire new tokens by sending the user through the authorization flow again if their credentials happen to become invalid.

## Automatically route the user

Modify the add-on landing route to detect if the user has previously authorized our application. If so, route them to our main add-on page. Otherwise, prompt them to sign in.

### Python

Ensure that the database file has been created when the application launches. Insert the following into a module initializer (such as `webapp/__init__.py` in our provided example) or in the main method that launches the server.

```
# Initialize the database file if not created.
if not os.path.exists(DATABASE_FILE_NAME):
    db.create_all()
```

Your method should then handle the `login_hint` query parameter as [discussed above](#access_the_query_parameters). Then load the store credentials *if this is a repeat visitor*. You know it's a repeat visitor if you received `login_hint`. Retrieve any stored credentials for this user and load them into the session.

```
stored_credentials = get_credentials_from_storage(login_hint)

# If we have stored credentials, store them in the session.
if stored_credentials:
    # Load the client secrets file contents.
    client_secrets_dict = json.load(
        open(CLIENT_SECRETS_FILE)).get("web")

    # Update the credentials in the session.
    if not flask.session.get("credentials"):
        flask.session["credentials"] = {}

    flask.session["credentials"] = {
        "token": stored_credentials.access_token,
        "refresh_token": stored_credentials.refresh_token,
        "token_uri": client_secrets_dict["token_uri"],
        "client_id": client_secrets_dict["client_id"],
        "client_secret": client_secrets_dict["client_secret"],
        "scopes": SCOPES
    }

    # Set the username in the session.
    flask.session["username"] = stored_credentials.display_name
```

Finally, route the user to the sign in page if we don't have their credentials. If we do, route them to the main add-on page.

```
if "credentials" not in flask.session or \
    flask.session["credentials"]["refresh_token"] is None:
    return flask.render_template("authorization.html")

return flask.render_template(
    "addon-discovery.html",
    message="You've reached the addon discovery page.")
```

### Java

Navigate to your add-on landing route (`/addon-discovery` in the provided example). As [discussed above](#access_the_query_parameters), this is where you handled the `login_hint` query parameter.

First, check if credentials exist in the session. If they don't, route the user through the auth flow by calling the `startAuthFlow` method.

```
/** Check if the credentials exist in the session. The session could have
 *   been cleared when the user clicked the Sign-Out button, and the expected
 *   behavior after sign-out would be to display the sign-in page when the
 *   iframe is opened again. */
if (session.getAttribute("credentials") == null) {
    return startAuthFlow(model);
}
```

Then, load the user from the H2 database *if this is a repeat visitor*. It's a repeat visitor if you receive the `login_hint` query parameter. If the user exists in the H2 database, load the credentials from the [credential datastore set up previously](#add_persistent_storage_for_user_credentials), and set the credentials in the session. If the credentials were not obtained from the credential datastore, route the user through the auth flow by calling `startAuthFlow`.

```
/** At this point, we know that credentials exist in the session, but we
 *   should update the session credentials with the credentials in persistent
 *   storage in case they were refreshed. If the credentials in persistent
 *   storage are null, we should navigate the user to the authorization flow
 *   to obtain persisted credentials. */

User storedUser = getUser(login_hint);

if (storedUser != null) {
    Credential credential = authService.loadFromCredentialDataStore(login_hint);
    if (credential != null) {
        session.setAttribute("credentials", credential);
    } else {
        return startAuthFlow(model);
    }
}
```

Finally, route the user to the add-on landing page.

```
/** Finally, if there are credentials in the session and in persistent
 *   storage, direct the user to the addon-discovery page. */
return "addon-discovery";
```

## Test the add-on

Sign in to [Google Classroom](https://classroom.google.com/) as one of your *Teacher* test users. Navigate to the **Classwork** tab and create a new **Assignment**. Click the **Add-ons** button below the text area, then select your add-on. The iframe opens and the add-on loads the **Attachment Setup URI** that you specified in the Google Workspace Marketplace SDK's [App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk) page.

Congratulations! You're ready to proceed to the next step: [creating attachments and identifying the user's role](https://developers.google.com/workspace/classroom/add-ons/walkthroughs/content-attachments).
