---
source: https://developers.google.com/workspace/tasks/oauth-authorization-callback-handler
root: workspace
fetched_at: 2026-04-23T15:31:59.327Z
---

# Build Authorization Callback Handler

This document explains how to implement an OAuth 2.0 authorization callback handler using Java servlets through a sample web application that displays the user's tasks using the [Google Tasks API](../tasks.md). The sample application first requests authorization to access the user's Google Tasks and then displays the user's tasks in the default tasks list.

## Audience

This document is tailored to people who are familiar with Java and J2EE web application architecture. Some knowledge of the [OAuth 2.0](https://developers.google.com/accounts/docs/OAuth2) authorization flow is recommended.

## Contents

In order to have such fully working sample several steps are necessary, you need to:

## Declare servlet mappings in the web.xml file

This application uses the following two servlets:

- **PrintTasksTitlesServlet** (mapped to `/`): The entry point of the application that will handle user authentication, and will display the user's tasks
- **OAuthCodeCallbackHandlerServlet** (mapped to `/oauth2callback`): The OAuth 2.0 callback which handles the response from the OAuth authorization endpoint

The following *web.xml* file which maps these 2 servlets to URLs in our application:

```
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">

 <servlet>
   <servlet-name>PrintTasksTitles</servlet-name>
   <servlet-class>com.google.oauthsample.PrintTasksTitlesServlet</servlet-class>
 </servlet>

 <servlet-mapping>
   <servlet-name>PrintTasksTitles</servlet-name>
   <url-pattern>/</url-pattern>
 </servlet-mapping>

 <servlet>
   <servlet-name>OAuthCodeCallbackHandlerServlet</servlet-name>
   <servlet-class>com.google.oauthsample.OAuthCodeCallbackHandlerServlet</servlet-class>
 </servlet>

 <servlet-mapping>
   <servlet-name>OAuthCodeCallbackHandlerServlet</servlet-name>
   <url-pattern>/oauth2callback</url-pattern>
 </servlet-mapping>

</web-app>
```

/WEB-INF/web.xml file

## Authenticate users on their system and request authorization to access their tasks

The user enters the application through the root '/' URL that is mapped to the `PrintTaskListsTitlesServlet` servlet. In that servlet, the following tasks are performed:

- Checks if the user is authenticated on the system.
- If the user is not authenticated, the user is redirected to the authentication page.
- If the user is authenticated, a check is performed for a refresh token already in data storage, which is handled by the `OAuthTokenDao` below. If tokens are not available in storage for the user, this means the user has not yet granted the application authorization to access their tasks. The user is then redirected to Google's OAuth 2.0 Authorization endpoint.

The following shows a way to implement this:

```
package com.google.oauthsample;

import ...

/**
 * Simple sample Servlet which will display the tasks in the default task list of the user.
 */
@SuppressWarnings("serial")
public class PrintTasksTitlesServlet extends HttpServlet {

  /**
   * The OAuth Token DAO implementation, used to persist the OAuth refresh token.
   * Consider injecting it instead of using a static initialization. Additionally, a
   * simple memory implementation is used as a mock. Change the implementation to
   * using the user's own user/login implementation.
   */
  public static OAuthTokenDao oauthTokenDao = new OAuthTokenDaoMemoryImpl();

  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    // Getting the current user
    // This is using App Engine's User Service but you should replace this to
    // your own user/login implementation
    UserService userService = UserServiceFactory.getUserService();
    User user = userService.getCurrentUser();

    // If the user is not logged-in it is redirected to the login service, then back to this page
    if (user == null) {
      resp.sendRedirect(userService.createLoginURL(getFullRequestUrl(req)));
      return;
    }

    // Checking if we already have tokens for this user in store
    AccessTokenResponse accessTokenResponse = oauthTokenDao.getKeys(user.getEmail());

    // If tokens are not available for this user
    if (accessTokenResponse == null) {
      OAuthProperties oauthProperties = new OAuthProperties();
      // Redirects to the Google OAuth 2.0 authorization endpoint
      resp.sendRedirect(new GoogleAuthorizationRequestUrl(oauthProperties.getClientId(),
          OAuthCodeCallbackHandlerServlet.getOAuthCodeCallbackHandlerUrl(req), oauthProperties
              .getScopesAsString()).build());
      return;
    }
  }

  /**
   * Construct the request's URL without the parameter part.
   *
   * @param req the HttpRequest object
   * @return The constructed request's URL
   */
  public static String getFullRequestUrl(HttpServletRequest req) {
    String scheme = req.getScheme() + "://";
    String serverName = req.getServerName();
    String serverPort = (req.getServerPort() == 80) ? "" : ":" + req.getServerPort();
    String contextPath = req.getContextPath();
    String servletPath = req.getServletPath();
    String pathInfo = (req.getPathInfo() == null) ? "" : req.getPathInfo();
    String queryString = (req.getQueryString() == null) ? "" : "?" + req.getQueryString();
    return scheme + serverName + serverPort + contextPath + servletPath + pathInfo + queryString;
  }
}
```

Note: The preceding implementation uses some App Engine libraries. These are used as a matter of simplification. If you are developing for another platform, re-implement the `UserService` interface that handles user authentication.

The application uses a DAO to persist and access user's authorization tokens. The `OAuthTokenDao` interface, and a mock (in-memory) implementation - `OAuthTokenDaoMemoryImpl` - that are used in this sample, are shown in the following examples:

```
package com.google.oauthsample;

import com.google.api.client.auth.oauth2.draft10.AccessTokenResponse;

/**
 * Allows easy storage and access of authorization tokens.
 */
public interface OAuthTokenDao {

  /**
   * Stores the given AccessTokenResponse using the {@code username}, the OAuth
   * {@code clientID} and the tokens scopes as keys.
   *
   * @param tokens The AccessTokenResponse to store
   * @param userName The userName associated wit the token
   */
  public void saveKeys(AccessTokenResponse tokens, String userName);

  /**
   * Returns the AccessTokenResponse stored for the given username, clientId and
   * scopes. Returns {@code null} if there is no AccessTokenResponse for this
   * user and scopes.
   *
   * @param userName The username of which to get the stored AccessTokenResponse
   * @return The AccessTokenResponse of the given username
   */
  public AccessTokenResponse getKeys(String userName);
}
```

OAuthTokenDao.java file

```
package com.google.oauthsample;

import com.google.api.client.auth.oauth2.draft10.AccessTokenResponse;
...

/**
 * Quick and Dirty memory implementation of {@link OAuthTokenDao} based on
 * HashMaps.
 */
public class OAuthTokenDaoMemoryImpl implements OAuthTokenDao {

  /** Object where all the Tokens will be stored */
  private static Map<String, AccessTokenResponse> tokenPersistance = new HashMap<String, AccessTokenResponse>();

  public void saveKeys(AccessTokenResponse tokens, String userName) {
    tokenPersistance.put(userName, tokens);
  }

  public AccessTokenResponse getKeys(String userName) {
    return tokenPersistance.get(userName);
  }
}
```

OAuthTokenDaoMemoryImpl.java file

The OAuth 2.0 credentials for the application are stored in a properties file. Alternatively, you could store them as a constant somewhere in one of your java classes. Here is the `OAuthProperties` class and the *oauth.properties* file that is being used in the sample:

```
package com.google.oauthsample;

import ...

/**
 * Object representation of an OAuth properties file.
 */
public class OAuthProperties {

  public static final String DEFAULT_OAUTH_PROPERTIES_FILE_NAME = "oauth.properties";

  /** The OAuth 2.0 Client ID */
  private String clientId;

  /** The OAuth 2.0 Client Secret */
  private String clientSecret;

  /** The Google APIs scopes to access */
  private String scopes;

  /**
   * Instantiates a new OauthProperties object reading its values from the
   * {@code OAUTH_PROPERTIES_FILE_NAME} properties file.
   *
   * @throws IOException IF there is an issue reading the {@code propertiesFile}
   * @throws OauthPropertiesFormatException If the given {@code propertiesFile}
   *           is not of the right format (does not contains the keys {@code
   *           clientId}, {@code clientSecret} and {@code scopes})
   */
  public OAuthProperties() throws IOException {
    this(OAuthProperties.class.getResourceAsStream(DEFAULT_OAUTH_PROPERTIES_FILE_NAME));
  }

  /**
   * Instantiates a new OAuthProperties object, reading its values from the given
   * properties file.
   *
   * @param propertiesFile the InputStream to read an OAuth Properties file. The
   *          file should contain the keys {@code clientId}, {@code
   *          clientSecret} and {@code scopes}
   * @throws IOException if there is an issue reading the {@code propertiesFile}
   * @throws OAuthPropertiesFormatException If the given {@code propertiesFile}
   *           is not in the correct format (does not contain the keys {@code
   *           clientId}, {@code clientSecret} and {@code scopes})
   */
  public OAuthProperties(InputStream propertiesFile) throws IOException {
    Properties oauthProperties = new Properties();
    oauthProperties.load(propertiesFile);
    clientId = oauthProperties.getProperty("clientId");
    clientSecret = oauthProperties.getProperty("clientSecret");
    scopes = oauthProperties.getProperty("scopes");
    if ((clientId == null) || (clientSecret == null) || (scopes == null)) {
      throw new OAuthPropertiesFormatException();
    }
  }

  /**
   * @return the clientId
   */
  public String getClientId() {
    return clientId;
  }

  /**
   * @return the clientSecret
   */
  public String getClientSecret() {
    return clientSecret;
  }

  /**
   * @return the scopes
   */
  public String getScopesAsString() {
    return scopes;
  }

  /**
   * Thrown when the OAuth properties file was not at the right format, i.e not
   * having the right properties names.
   */
  @SuppressWarnings("serial")
  public class OAuthPropertiesFormatException extends RuntimeException {
  }
}
```

OAuthProperties.java file

The `oauth.properties` file, which contains the OAuth 2.0 credentials for your application, is shown in the following example. You need to change the values in this file.

```
# Client ID and secret. They can be found in the APIs console.
clientId=1234567890.apps.googleusercontent.com
clientSecret=aBcDeFgHiJkLmNoPqRsTuVwXyZ
# API scopes. Space separated.
scopes=https://www.googleapis.com/auth/tasks
```

oauth.properties file

The OAuth 2.0 Client ID and Client secret identifies the application and allows the Tasks API to apply filters and quota rules that are defined for the application. The client ID and secret can be found in the [Google APIs Console](https://code.google.com/apis/console). Once on the console, the user must:

- Create or select a project.
- Enable the Tasks API by setting the Tasks API status to **ON** in the list of services.
- Under **API Access** create an OAuth 2.0 Client ID if one hasn't been created yet.
- Ensure that the project's OAuth 2.0 code callback handler URL is registered/allowlisted in the **Redirect URIs**. For example, in this sample project, the user would have to register `https://www.example.com/oauth2callback` if the web application is served from the `https://www.example.com` domain.
![Redirect URI in the APIs Console](https://developers.google.com/static/workspace/tasks/images/Google_APIs_Console_Redirect_URI.png)

Redirect URI in the APIs Console

## Handle the Authorization code from the Google Authorization endpoint

In the case where the user has not yet authorized the application to access their tasks and is therefore redirected to Google's OAuth 2.0 Authorization endpoint, the user is shown an authorization dialog from Google prompting the user to grant the application access to their tasks:

![Google's authorization Dialog](https://developers.google.com/static/workspace/tasks/images/Google_Auth_Dialog.png)

Google's authorization Dialog

After granting or denying access, the user is redirected back to the OAuth 2.0 code callback handler that was specified as a redirect/callback when constructing the Google authorization URL:

```
new GoogleAuthorizationRequestUrl(oauthProperties.getClientId(),
      OAuthCodeCallbackHandlerServlet.getOAuthCodeCallbackHandlerUrl(req), oauthProperties
          .getScopesAsString()).build()
```

The OAuth 2.0 code callback handler - `OAuthCodeCallbackHandlerServlet` - handles the redirect from the Google OAuth 2.0 endpoint. There are 2 cases to handle:

- The user has granted access: the request is parsed to obtain the OAuth 2.0 code from the URL parameters.
- The user has denied access: a message is displayed to the user.

```
package com.google.oauthsample;

import ...

/**
 * Servlet handling the OAuth callback from the authentication service. We are
 * retrieving the OAuth code, then exchanging it for a refresh and an access
 * token and saving it.
 */
@SuppressWarnings("serial")
public class OAuthCodeCallbackHandlerServlet extends HttpServlet {

  /** The name of the Oauth code URL parameter */
  public static final String CODE_URL_PARAM_NAME = "code";

  /** The name of the OAuth error URL parameter */
  public static final String ERROR_URL_PARAM_NAME = "error";

  /** The URL suffix of the servlet */
  public static final String URL_MAPPING = "/oauth2callback";

  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    // Getting the "error" URL parameter
    String[] error = req.getParameterValues(ERROR_URL_PARAM_NAME);

    // Checking if there was an error such as the user denied access
    if (error != null && error.length > 0) {
      resp.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE, "There was an error: \""+error[0]+"\".");
      return;
    }
    // Getting the "code" URL parameter
    String[] code = req.getParameterValues(CODE_URL_PARAM_NAME);

    // Checking conditions on the "code" URL parameter
    if (code == null || code.length == 0) {
      resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "The \"code\" URL parameter is missing");
      return;
    }
  }

  /**
   * Construct the OAuth code callback handler URL.
   *
   * @param req the HttpRequest object
   * @return The constructed request's URL
   */
  public static String getOAuthCodeCallbackHandlerUrl(HttpServletRequest req) {
    String scheme = req.getScheme() + "://";
    String serverName = req.getServerName();
    String serverPort = (req.getServerPort() == 80) ? "" : ":" + req.getServerPort();
    String contextPath = req.getContextPath();
    String servletPath = URL_MAPPING;
    String pathInfo = (req.getPathInfo() == null) ? "" : req.getPathInfo();
    return scheme + serverName + serverPort + contextPath + servletPath + pathInfo;
  }
}
```

OAuthCodeCallbackHandlerServlet.java file

## Exchange the authorization code for a refresh and access token

Then, the `OAuthCodeCallbackHandlerServlet` exchanges the Auth 2.0 code for a refresh and access tokens, persists it in the datastore and redirects the user back to the `PrintTaskListsTitlesServlet` URL:

Code added to the file is highlighted.

```
package com.google.oauthsample;

import ...

/**
 * Servlet handling the OAuth callback from the authentication service. We are
 * retrieving the OAuth code, then exchanging it for a refresh and an access
 * token and saving it.
 */
@SuppressWarnings("serial")
public class OAuthCodeCallbackHandlerServlet extends HttpServlet {

  /** The name of the Oauth code URL parameter */
  public static final String CODE_URL_PARAM_NAME = "code";

  /** The name of the OAuth error URL parameter */
  public static final String ERROR_URL_PARAM_NAME = "error";

  /** The URL suffix of the servlet */
  public static final String URL_MAPPING = "/oauth2callback";
  /** The URL to redirect the user to after handling the callback. Consider
   * saving this in a cookie before redirecting users to the Google
   * authorization URL if you have multiple possible URL to redirect people to. */
  public static final String REDIRECT_URL = "/";

  /** The OAuth Token DAO implementation. Consider injecting it instead of using
   * a static initialization. Also we are using a simple memory implementation
   * as a mock. Change the implementation to using your database system. */
  public static OAuthTokenDao oauthTokenDao = new OAuthTokenDaoMemoryImpl();

  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    // Getting the "error" URL parameter
    String[] error = req.getParameterValues(ERROR_URL_PARAM_NAME);

    // Checking if there was an error such as the user denied access
    if (error != null && error.length > 0) {
      resp.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE, "There was an error: \""+error[0]+"\".");
      return;
    }

    // Getting the "code" URL parameter
    String[] code = req.getParameterValues(CODE_URL_PARAM_NAME);

    // Checking conditions on the "code" URL parameter
    if (code == null || code.length == 0) {
      resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "The \"code\" URL parameter is missing");
      return;
    }
    // Construct incoming request URL
    String requestUrl = getOAuthCodeCallbackHandlerUrl(req);

    // Exchange the code for OAuth tokens
    AccessTokenResponse accessTokenResponse = exchangeCodeForAccessAndRefreshTokens(code[0],
        requestUrl);

    // Getting the current user
    // This is using App Engine's User Service, but the user should replace this
    // with their own user/login implementation
    UserService userService = UserServiceFactory.getUserService();
    String email = userService.getCurrentUser().getEmail();

    // Save the tokens
    oauthTokenDao.saveKeys(accessTokenResponse, email);

    resp.sendRedirect(REDIRECT_URL);
  }

  /**
   * Construct the OAuth code callback handler URL.
   *
   * @param req the HttpRequest object
   * @return The constructed request's URL
   */
  public static String getOAuthCodeCallbackHandlerUrl(HttpServletRequest req) {
    String scheme = req.getScheme() + "://";
    String serverName = req.getServerName();
    String serverPort = (req.getServerPort() == 80) ? "" : ":" + req.getServerPort();
    String contextPath = req.getContextPath();
    String servletPath = URL_MAPPING;
    String pathInfo = (req.getPathInfo() == null) ? "" : req.getPathInfo();
    return scheme + serverName + serverPort + contextPath + servletPath + pathInfo;
  }
  /**
   * Exchanges the given code for an exchange and a refresh token.
   *
   * @param code The code gotten back from the authorization service
   * @param currentUrl The URL of the callback
   * @param oauthProperties The object containing the OAuth configuration
   * @return The object containing both an access and refresh token
   * @throws IOException
   */
  public AccessTokenResponse exchangeCodeForAccessAndRefreshTokens(String code, String currentUrl)
      throws IOException {

    HttpTransport httpTransport = new NetHttpTransport();
    JacksonFactory jsonFactory = new JacksonFactory();

    // Loading the oauth config file
    OAuthProperties oauthProperties = new OAuthProperties();

    return new GoogleAuthorizationCodeGrant(httpTransport, jsonFactory, oauthProperties
        .getClientId(), oauthProperties.getClientSecret(), code, currentUrl).execute();
  }
}
```

OAuthCodeCallbackHandlerServlet.java file

Note: The preceding implementation uses some App Engine libraries, which are used as a matter of simplification. If you are developing for another platform, re-implement the `UserService` interface that handles user authentication.

## Read the user's tasks and display them

The user has granted the application access to its tasks. The application has a refresh token that is saved in the datastore accessible through the `OAuthTokenDao`. The `PrintTaskListsTitlesServlet` servlet can now use these tokens to access the user's tasks and display them:

Code added to the file is highlighted.

```
package com.google.oauthsample;

import ...

/**
 * Simple sample Servlet which will display the tasks in the default task list of the user.
 */
@SuppressWarnings("serial")
public class PrintTasksTitlesServlet extends HttpServlet {

  /**
   * The OAuth Token DAO implementation, used to persist the OAuth refresh token.
   * Consider injecting it instead of using a static initialization. Additionally, a
   * simple memory implementation is used as a mock. Change the implementation to
   * use your own database system.
   */
  public static OAuthTokenDao oauthTokenDao = new OAuthTokenDaoMemoryImpl();

  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    // Getting the current user
    // This is using App Engine's User Service but you should replace this to
    // your own user/login implementation
    UserService userService = UserServiceFactory.getUserService();
    User user = userService.getCurrentUser();

    // If the user is not logged-in it is redirected to the login service, then back to this page
    if (user == null) {
      resp.sendRedirect(userService.createLoginURL(getFullRequestUrl(req)));
      return;
    }

    // Checking if we already have tokens for this user in store
    AccessTokenResponse accessTokenResponse = oauthTokenDao.getKeys(user.getEmail());

    // If we don't have tokens for this user
    if (accessTokenResponse == null) {
      OAuthProperties oauthProperties = new OAuthProperties();
      // Redirect to the Google OAuth 2.0 authorization endpoint
      resp.sendRedirect(new GoogleAuthorizationRequestUrl(oauthProperties.getClientId(),
          OAuthCodeCallbackHandlerServlet.getOAuthCodeCallbackHandlerUrl(req), oauthProperties
              .getScopesAsString()).build());
      return;
    }
// Prints the user's task list titles in the response
    resp.setContentType("text/plain");
    resp.getWriter().append("Task Lists titles for user " + user.getEmail() + ":\n\n");
    printTasksTitles(accessTokenResponse, resp.getWriter());
  }

  /**
   * Construct the request's URL without the parameter part.
   *
   * @param req the HttpRequest object
   * @return The constructed request's URL
   */
  public static String getFullRequestUrl(HttpServletRequest req) {
    String scheme = req.getScheme() + "://";
    String serverName = req.getServerName();
    String serverPort = (req.getServerPort() == 80) ? "" : ":" + req.getServerPort();
    String contextPath = req.getContextPath();
    String servletPath = req.getServletPath();
    String pathInfo = (req.getPathInfo() == null) ? "" : req.getPathInfo();
    String queryString = (req.getQueryString() == null) ? "" : "?" + req.getQueryString();
    return scheme + serverName + serverPort + contextPath + servletPath + pathInfo + queryString;
  }
  /**
   * Uses the Google Tasks API to retrieve a list of the user's tasks in the default
   * tasks list.
   *
   * @param accessTokenResponse The OAuth 2.0 AccessTokenResponse object
   *          containing the access token and a refresh token.
   * @param output The output stream writer to write the task list titles to.
   * @return A list of the user's task titles in the default task list.
   * @throws IOException
   */
  public void printTasksTitles(AccessTokenResponse accessTokenResponse, Writer output) throws IOException {

    // Initializing the Tasks service
    HttpTransport transport = new NetHttpTransport();
    JsonFactory jsonFactory = new JacksonFactory();
    OAuthProperties oauthProperties = new OAuthProperties();

    GoogleAccessProtectedResource accessProtectedResource = new GoogleAccessProtectedResource(
        accessTokenResponse.accessToken, transport, jsonFactory, oauthProperties.getClientId(),
        oauthProperties.getClientSecret(), accessTokenResponse.refreshToken);

    Tasks service = new Tasks(transport, accessProtectedResource, jsonFactory);

    // Using the initialized Tasks API service to query the list of tasks lists
    com.google.api.services.tasks.model.Tasks tasks = service.tasks.list("@default").execute();

    for (Task task : tasks.items) {
      output.append(task.title + "\n");
    }
  }
}
```

PrintTasksTitlesServlet.java file

The user's tasks are displayed:

![A list of the user's tasks'](https://developers.google.com/static/workspace/tasks/images/User_Tasks_Display.png)

The user's tasks

## Sample application

You can download [the code for this sample application](https://developers.google.com/static/workspace/tasks/tasks-oauth2-webserver-sample.zip).
