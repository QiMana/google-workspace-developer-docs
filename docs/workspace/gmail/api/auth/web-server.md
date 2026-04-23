---
source: https://developers.google.com/workspace/gmail/api/auth/web-server
root: workspace
fetched_at: 2026-04-23T15:28:49.802Z
---

# Implement server-side authorization

Requests to the Gmail API must be authorized using OAuth 2.0 credentials. You should use server-side flow when your application needs to access Google APIs on behalf of the user, for example when the user is offline. This approach requires passing a one-time authorization code from your client to your server; this code is used to acquire an access token and refresh tokens for your server.

To learn more about server-side Google OAuth 2.0 implementation, see [Using OAuth 2.0 for Web Server Applications](https://developers.google.com/identity/protocols/oauth2/web-server).

## Contents

## Create a client ID and client secret

To get started using Gmail API, you need to first [use the setup tool](https://console.cloud.google.com/start/api?id=gmail&credential=client_key), which guides you through creating a project in the Google API Console and enabling the API.

1. From the Credentials page, click **Create credentials > OAuth client ID** to create your OAuth 2.0 credentials or **Create credentials > Service account key** to create a service account.
2. If you created an OAuth client ID, then select your application type.
3. Fill in the form and click **Create**.

Your application's client IDs and service account keys are now listed on the Credentials page. For details, click a client ID; parameters vary depending on the ID type, but might include email address, client secret, JavaScript origins, or redirect URIs.

Take note of the Client ID as you'll need to add it to your code later.

## Handling authorization requests

When a user loads your application for the first time, they are presented with a dialog to grant permission for your application to access their Gmail account with the requested [permission scopes](https://developers.google.com/workspace/gmail/api/auth/scopes). After this initial authorization, the user is only presented with the permission dialog if your app's client ID changes or the requested scopes have changed.

### Authenticate the user

This initial sign-in returns an authorization result object that contains an *authorization code* if successful.

### Exchange the authorization code for an access token

The authorization code is a one-time code that your server can exchange for an *access token*. This access token is passed to the Gmail API to grant your application access to user data for a limited time.

If your application requires `offline` access, the first time your app exchanges the authorization code, it also receives a *refresh token* that it uses to receive a new access token after a previous token has expired. Your application stores this refresh token (generally in a database on your server) for later use.

The following code samples demonstrate exchanging an authorization code for an access token with `offline` access and storing the refresh token.

### Python

Replace `CLIENTSECRETS_LOCATION` value with the location of your `credentials.json` file.

```
import logging
from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
from oauth2client.client import Credentials # Needed for type hinting/usage in comments
from googleapiclient.discovery import build
from googleapiclient import errors as google_api_errors
import httplib2

# Path to credentials.json which should contain a JSON document such as:
#   {
#     "web": {
#       "client_id": "[[YOUR_CLIENT_ID]]",
#       "client_secret": "[[YOUR_CLIENT_SECRET]]",
#       "redirect_uris": [],
#       "auth_uri": "https://accounts.google.com/o/oauth2/auth",
#       "token_uri": "https://accounts.google.com/o/oauth2/token"
#     }
#   }
CLIENTSECRETS_LOCATION = '<PATH/TO/CLIENT_SECRETS.JSON>'
REDIRECT_URI = '<YOUR_REGISTERED_REDIRECT_URI>'
SCOPES = [
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    # Add other requested scopes.
]

class GetCredentialsException(Exception):
  """Error raised when an error occurred while retrieving credentials.

  Attributes:
    authorization_url: Authorization URL to redirect the user to in order to
                      request offline access.
  """
  def __init__(self, authorization_url):
    """Construct a GetCredentialsException."""
    super().__init__(f"Authorization URL: {authorization_url}")
    self.authorization_url = authorization_url

class CodeExchangeException(GetCredentialsException):
  """Error raised when a code exchange has failed."""
  pass

class NoRefreshTokenException(GetCredentialsException):
  """Error raised when no refresh token has been found."""
  pass

class NoUserIdException(Exception):
  """Error raised when no user ID could be retrieved."""
  pass

def get_stored_credentials(user_id):
  """Retrieved stored credentials for the provided user ID.

  Args:
    user_id: User's ID.

  Returns:
    Stored oauth2client.client.OAuth2Credentials if found, None otherwise.

  Raises:
    NotImplementedError: This function has not been implemented.
  """
  # TODO: Implement this function to work with your database.
  #       To instantiate an OAuth2Credentials instance from a Json
  #       representation, use the oauth2client.client.Credentials.new_from_json
  #       class method. (oauth2client.client.Credentials needs to be imported)
  #       Example:
  #       from oauth2client.client import Credentials
  #       json_creds = load_from_db(user_id)
  #       if json_creds:
  #           return Credentials.new_from_json(json_creds)
  #       return None
  raise NotImplementedError()

def store_credentials(user_id, credentials):
  """Store OAuth 2.0 credentials in the application's database.

  This function stores the provided OAuth 2.0 credentials using the user ID as
  key.

  Args:
    user_id: User's ID.
    credentials: OAuth 2.0 credentials to store.

  Raises:
    NotImplementedError: This function has not been implemented.
  """
  # TODO: Implement this function to work with your database.
  #       To retrieve a Json representation of the credentials instance, call the
  #       credentials.to_json() method.
  #       Example:
  #       save_to_db(user_id, credentials.to_json())
  raise NotImplementedError()

def exchange_code(authorization_code):
  """Exchange an authorization code for OAuth 2.0 credentials.

  Args:
    authorization_code: Authorization code to exchange for OAuth 2.0
                        credentials.

  Returns:
    oauth2client.client.OAuth2Credentials instance.

  Raises:
    CodeExchangeException: an error occurred.
  """
  flow = flow_from_clientsecrets(CLIENTSECRETS_LOCATION, ' '.join(SCOPES))
  flow.redirect_uri = REDIRECT_URI
  try:
    credentials = flow.step2_exchange(authorization_code)
    return credentials
  except FlowExchangeError as error:
    logging.error('An error occurred: %s', error)
    raise CodeExchangeException(None)

def get_user_info(credentials):
  """Send a request to the UserInfo API to retrieve the user's information.

  Args:
    credentials: oauth2client.client.OAuth2Credentials instance to authorize the
              request.

  Returns:
    User information as a dict.
  """
  user_info_service = build(
      serviceName='oauth2', version='v2',
      http=credentials.authorize(httplib2.Http()))
  user_info = None
  try:
    user_info = user_info_service.userinfo().get().execute()
  except google_api_errors.HttpError as e:
    logging.error('An error occurred: %s', e)
  if user_info and user_info.get('id'):
    return user_info
  else:
    raise NoUserIdException()

def get_authorization_url(email_address, state):
  """Retrieve the authorization URL.

  Args:
    email_address: User's e-mail address.
    state: State for the authorization URL.

  Returns:
    Authorization URL to redirect the user to.
  """
  flow = flow_from_clientsecrets(CLIENTSECRETS_LOCATION, ' '.join(SCOPES))
  flow.params['access_type'] = 'offline'
  flow.params['approval_prompt'] = 'force'
  flow.params['user_id'] = email_address
  flow.params['state'] = state
  # The step1_get_authorize_url method uses the flow.redirect_uri attribute.
  flow.redirect_uri = REDIRECT_URI
  return flow.step1_get_authorize_url()

def get_credentials(authorization_code, state):
  """Retrieve credentials using the provided authorization code.

  This function exchanges the authorization code for an access token and queries
  the UserInfo API to retrieve the user's e-mail address.

  If a refresh token has been retrieved along with an access token, it is stored
  in the application database using the user's e-mail address as key.

  If no refresh token has been retrieved, the function checks in the application
  database for one and returns it if found or raises a NoRefreshTokenException
  with the authorization URL to redirect the user to.

  Args:
    authorization_code: Authorization code to use to retrieve an access token.
    state: State to set to the authorization URL in case of error.

  Returns:
    oauth2client.client.OAuth2Credentials instance containing an access and
    refresh token.

  Raises:
    CodeExchangeError: Could not exchange the authorization code.
    NoRefreshTokenException: No refresh token could be retrieved from the
                          available sources.
  """
  email_address = ''
  try:
    credentials = exchange_code(authorization_code)
    user_info = get_user_info(credentials) # Can raise NoUserIdException or google_api_errors.HttpError
    email_address = user_info.get('email')
    user_id = user_info.get('id')
    if credentials.refresh_token is not None:
      store_credentials(user_id, credentials)
      return credentials
    else:
      credentials = get_stored_credentials(user_id)
      if credentials and credentials.refresh_token is not None:
        return credentials
  except CodeExchangeException as error:
    logging.error('An error occurred during code exchange.')
    # Drive apps should try to retrieve the user and credentials for the current
    # session.
    # If none is available, redirect the user to the authorization URL.
    error.authorization_url = get_authorization_url(email_address, state)
    raise error
  except NoUserIdException:
    logging.error('No user ID could be retrieved.')
  # No refresh token has been retrieved.
  authorization_url = get_authorization_url(email_address, state)
  raise NoRefreshTokenException(authorization_url)
```

### Authorizing with stored credentials

When users visit your app after a successful first-time authorization flow, your application can use a stored refresh token to authorize requests without prompting the user again.

If you have already authenticated the user, your application can retrieve the refresh token from its database and store the token in a server-side session. If the refresh token is revoked or is otherwise invalid, you'll need to catch this and take appropriate action.

## Using OAuth 2.0 credentials

Once OAuth 2.0 credentials have been retrieved as shown in the previous section, they can be used to authorize a Gmail service object and send requests to the API.

### Instantiate a service object

This code sample shows how to instantiate a service object and then authorize it to make API requests.

### Python

```
from apiclient.discovery import build
# ...

def build_service(credentials):
  """Build a Gmail service object.

  Args:
    credentials: OAuth 2.0 credentials.

  Returns:
    Gmail service object.
  """
  http = httplib2.Http()
  http = credentials.authorize(http)
  return build('gmail', 'v1', http=http)
```

### Send authorized requests and check for revoked credentials

The following code snippet uses an authorized Gmail service instance to retrieve a list of messages.

If an error occurs, the code checks for an HTTP `401` status code, which should be handled by redirecting the user to the authorization URL.

More Gmail API operations are documented in the [API Reference](https://developers.google.com/workspace/gmail/api/v1/reference).

### Python

```
from googleapiclient import errors

# ...

def ListMessages(service, user, query=''):
  """Gets a list of messages.

  Args:
    service: Authorized Gmail API service instance.
    user: The email address of the account.
    query: String used to filter messages returned.
          Eg.- 'label:UNREAD' for unread Messages only.

  Returns:
    List of messages that match the criteria of the query. Note that the
    returned list contains Message IDs, you must use get with the
    appropriate id to get the details of a Message.
  """
  try:
    response = service.users().messages().list(userId=user, q=query).execute()
    messages = []
    if 'messages' in response:
      messages.extend(response['messages'])

    while 'nextPageToken' in response:
      page_token = response['nextPageToken']
      response = service.users().messages().list(userId=user, q=query,
                                        pageToken=page_token).execute()
      if 'messages' in response:
        messages.extend(response['messages'])

    return messages
  except errors.HttpError as error:
    print('An error occurred: %s' % error)
    if error.resp.status == 401:
      # Credentials have been revoked.
      # TODO: Redirect the user to the authorization URL.
      raise NotImplementedError()
```

## Next steps

Once you are comfortable authorizing Gmail API requests, you're ready to start handling messages, threads, and labels, as described in the Developers Guides sections.

You can learn more about the available API methods in the [API Reference](https://developers.google.com/workspace/gmail/api/v1/reference).
