---
source: https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions
root: workspace
fetched_at: 2026-04-23T15:25:13.459Z
---

# Manage granular OAuth permissions for Google Chat apps

Chat apps that use user authentication must support [granular OAuth permissions](https://developers.google.com/identity/protocols/oauth2/resources/granular-permissions) to allow users to grant a subset of requested scopes. For example, a user might grant access to their name but decline access to their calendar.

Handling granular OAuth permissions depends on how you build your Chat app:

## Apps Script

If you build your Chat app using [Apps Script](./quickstart/apps-script-app.md), Apps Script handles granular OAuth permissions automatically. However, ensure your code handles cases where a user doesn't grant all requested scopes. The method depends on whether your Apps Script is an Google Workspace add-on that extends Google Chat using Apps Script or a stand-alone Chat app built with Apps Script and interaction events.

### Google Workspace add-ons that extend Chat

If you build your Chat app as a [Google Workspace add-on that extends Google Chat using Apps Script](../add-ons/chat/quickstart-apps-script.md), follow the instructions in [Handle granular OAuth permissions in Apps Script](../../apps-script/concepts/scopes.md#handle-granular).

### Standalone Apps Script Chat apps

If you build your Chat app using [Apps Script and interaction events](./quickstart/apps-script-app.md), the instructions in [Handle granular OAuth permissions in Apps Script](../../apps-script/concepts/scopes.md#handle-granular) work with one consideration:

[`ScriptApp.requireScopes`](../../apps-script/reference/script/script-app.md#requireScopes(AuthMode,String)) stops script execution if the specified scopes aren't granted, but the user sees a configuration card in Chat instead of the OAuth Consent Screen. The configuration card always prompts the user to grant all requested scopes instead of just the ungranted ones.

To provide individual authorization scope-level checks, use [`ScriptApp.getAuthorizationInfo`](../../apps-script/reference/script/script-app.md#getAuthorizationInfo(AuthMode,String)) to check for authorization and if necessary request authorization using a [private message](./create-messages.md#private).

The following example shows how to check for a specific permission (like calendar access) and if missing, return a private message with the required authorization URL.

### Apps Script

```
/**
* Responds to a MESSAGE event in Google Chat.
* Checks for required permissions and if missing asks for them.
*
* @param {Object} event the event object from Chat
* @return {Object} JSON response
*/
function onMessage(event) {
  // Check if the script has the necessary permissions.
  // In this example, the script checks for the "calendar.events" scope.
  var requiredScopes = ['https://www.googleapis.com/auth/calendar.events'];
  var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL, requiredScopes);

  // If permissions are missing, return a message with the authorization URL.
  if (authInfo.getAuthorizationStatus() === ScriptApp.AuthorizationStatus.REQUIRED) {
    var authUrl = authInfo.getAuthorizationUrl();
    return {
      "text": "This action requires authorization. Please <" + authUrl + "|click here to authorize>.",
      "privateMessageViewer": {
        "name": event.user.name
      }
    };
  }

  // Permission granted; proceed with the application logic.
  // ...
}
```

## HTTP endpoints

If you build your Chat app using [HTTP endpoints](./quickstart/gcf-app.md), your Chat app should support granular OAuth permissions.

### Google Workspace add-ons that extend Chat

If you build your Chat app as a [Google Workspace add-on](../add-ons/overview.md), configure your code to handle granular OAuth permissions. Check which authorization scopes the user granted, and if necessary, request authorization for missing scopes or all scopes.

1. In your add-on's [manifest file](../add-ons/concepts/workspace-manifests.md), specify the required authorization scopes in the `oauthScopes` field. This field is part of the [`projects.deployments`](../add-ons/reference/rest/v1/projects.deployments.md) resource.
	The following example requires the `chat.messages` and `calendar.events` authorization scopes:
	### JSON
	```
	{
	  "oauthScopes": [
	    "https://www.googleapis.com/auth/chat.messages",
	    "https://www.googleapis.com/auth/calendar.events"
	  ],
	  "addOns": {
	    "common": {
	      "name": "My Chat App",
	      "logoUrl": "https://lh3.googleusercontent.com/..."
	    },
	    "chat": {},
	    "calendar": {},
	    "httpOptions": {}
	  }
	}
	```
2. To see which scopes the user has granted, check the `authorizationEventObject.authorizedScopes` field. If a required scope is missing, return a [`requesting_google_scopes`](../add-ons/guides/alternate-runtimes.md#manage-granular) action to prompt the user for the missing scopes.
	### Node.js
	```
	// Check for authorized scopes.
	const authorizedScopes = req.body.authorizationEventObject?.authorizedScopes || [];
	if (!authorizedScopes.includes('https://www.googleapis.com/auth/chat.messages')) {
	  // Respond with a request for the missing scope.
	  res.send({
	    'requesting_google_scopes': {
	      'scopes': ['https://www.googleapis.com/auth/chat.messages']
	    }
	  });
	  return;
	}
	```
	### Python
	```
	from flask import jsonify, request
	# Check for authorized scopes.
	event_data = request.get_json()
	authorized_scopes = event_data.get('authorizationEventObject', {}).get('authorizedScopes', [])
	if 'https://www.googleapis.com/auth/chat.messages' not in authorized_scopes:
	    # Respond with a request for the missing scope.
	    return jsonify({
	        'requesting_google_scopes': {
	            'scopes': ['https://www.googleapis.com/auth/chat.messages']
	        }
	    })
	```
	### Java
	```
	import com.google.gson.JsonArray;
	import com.google.gson.JsonObject;
	import java.util.List;
	// Check for authorized scopes.
	List<String> authorizedScopes = event.getAuthorizationEventObject() != null
	    ? event.getAuthorizationEventObject().getAuthorizedScopes()
	    : null;
	if (authorizedScopes == null || !authorizedScopes.contains("https://www.googleapis.com/auth/chat.messages")) {
	  // Respond with a request for the missing scope.
	  JsonObject requestingGoogleScopes = new JsonObject();
	  JsonArray scopes = new JsonArray();
	  scopes.add("https://www.googleapis.com/auth/chat.messages");
	  requestingGoogleScopes.add("scopes", scopes);
	  JsonObject response = new JsonObject();
	  response.add("requesting_google_scopes", requestingGoogleScopes);
	  return response.toString();
	}
	```
	To request all scopes associated with the add-on, set `all_scopes` to `true`:
	### Node.js
	```
	res.send({
	  'requesting_google_scopes': { 'all_scopes': true }
	});
	```
	### Python
	```
	from flask import jsonify
	return jsonify({
	    'requesting_google_scopes': { 'all_scopes': True }
	})
	```
	### Java
	```
	import com.google.gson.JsonObject;
	JsonObject requestingGoogleScopes = new JsonObject();
	requestingGoogleScopes.addProperty("all_scopes", true);
	JsonObject response = new JsonObject();
	response.add("requesting_google_scopes", requestingGoogleScopes);
	return response.toString();
	```

For detailed instructions, see [Manage granular permissions for HTTP Google Workspace add-ons](../add-ons/guides/alternate-runtimes.md#manage-granular).

### Standalone HTTP Chat apps

If your Chat app is a standalone HTTP service (not a Google Workspace add-on), you manage the OAuth 2.0 flow yourself.

When you retrieve a stored token or exchange an authorization code, check which scopes were granted. If required scopes are missing, prompt the user to authorize them.

### Node.js

```
// 1. List authorized scopes.
const fs = require('fs');
const tokens = JSON.parse(fs.readFileSync('token.json'));
const grantedScopes = tokens.scope.split(' ');

// 2. Detect missing scopes.
const requiredScopes = ['https://www.googleapis.com/auth/chat.messages'];
const missingScopes = requiredScopes.filter(scope => !grantedScopes.includes(scope));

if (missingScopes.length > 0) {
  // 3. Request missing scopes.
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: missingScopes,
    include_granted_scopes: true
  });
  res.redirect(authUrl);
}

// To request all scopes instead of just the missing ones:
const allScopesAuthUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: requiredScopes,
  include_granted_scopes: true
});
```

### Python

```
from flask import redirect
from google.oauth2.credentials import Credentials

# 1. List authorized scopes.
credentials = Credentials.from_authorized_user_file('token.json')
granted_scopes = set(credentials.scopes)

# 2. Detect missing scopes.
required_scopes = {'https://www.googleapis.com/auth/chat.messages'}
missing_scopes = required_scopes - granted_scopes

if missing_scopes:
    # 3. Request missing scopes.
    flow.scope = list(missing_scopes)
    auth_url, _ = flow.authorization_url(
        access_type='offline',
        include_granted_scopes=True
    )
    return redirect(auth_url)

# To request all scopes instead of just the missing ones:
flow.scope = list(required_scopes)
all_scopes_auth_url, _ = flow.authorization_url(
    access_type='offline',
    include_granted_scopes='true'
)
```

### Java

```
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeRequestUrl;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

// 1. List authorized scopes.
// The "user" string is the user ID for which to load credentials.
Credential credential = flow.loadCredential("user");
Collection<String> grantedScopes = credential.getScopes();

// 2. Detect missing scopes.
// The \`requiredScopes\` variable contains a list of the OAuth scopes
// that your app requires to function. Define this variable with the
// scopes needed by your application.
List<String> requiredScopes = Arrays.asList("https://www.googleapis.com/auth/chat.messages");
List<String> missingScopes = new ArrayList<>();
for (String scope : requiredScopes) {
  if (!grantedScopes.contains(scope)) {
    missingScopes.add(scope);
  }
}

if (!missingScopes.isEmpty()) {
  // 3. Request missing scopes.
  GoogleAuthorizationCodeRequestUrl urlBuilder = new GoogleAuthorizationCodeRequestUrl(
      clientId, redirectUri, missingScopes)
      .setAccessType("offline")
      .set("include_granted_scopes", "true");
  String authUrl = urlBuilder.build();
  response.sendRedirect(authUrl);
}

// To request all scopes instead of just the missing ones:
GoogleAuthorizationCodeRequestUrl allScopesUrlBuilder = new GoogleAuthorizationCodeRequestUrl(
    clientId, redirectUri, requiredScopes)
    .setAccessType("offline")
    .set("include_granted_scopes", "true");
String allScopesAuthUrl = allScopesUrlBuilder.build();
```

For more information, see [Granular OAuth permissions](https://developers.google.com/identity/protocols/oauth2/resources/granular-permissions).

## Related topics

- For an overview of authentication and authorization in Google Chat, see [Learn about authentication & authorization](./authenticate-authorize.md).
- To set up user authentication, see [Authenticate and authorize as a Google Chat user](./authenticate-authorize-chat-user.md).
- For help setting up granular OAuth permissions in Apps Script or for HTTP Google Workspace add-ons, see:
- To learn more about Granular OAuth permissions, see [Granular OAuth permissions](https://developers.google.com/identity/protocols/oauth2/resources/granular-permissions).
