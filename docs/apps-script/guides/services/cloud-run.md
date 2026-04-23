---
source: https://developers.google.com/apps-script/guides/services/cloud-run
root: apps-script
fetched_at: 2026-04-23T15:18:26.002Z
---

# Connect to Google Cloud services

You can use the [`ScriptApp.getIdentityToken()`](../../reference/script/script-app.md#getidentitytoken) method to get an [OpenID Connect](https://developers.google.com/identity/openid-connect/openid-connect) identity token (a [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) or JWT) for the effective user. You can use this token to authenticate with Google Cloud services, such as Cloud Run, that are configured to accept it.

## Enable the openid scope

The `openid` scope is required to generate an OpenID Connect ID token. You must also list any other scopes your script uses, such as `https://www.googleapis.com/auth/script.external_request` for the [`UrlFetch`](../../reference/url-fetch.md) service. The `https://www.googleapis.com/auth/userinfo.email` scope is included in this example to add the user's email address to the identity token.

In your script project's [manifest file](../../concepts/manifests.md) (`appsscript.json`), add the `openid` scope and any other required scopes to the `oauthScopes` array:

```
{
  "timeZone": "America/New_York",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "openid",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/userinfo.email"
  ]
}
```

## Configure the Google Cloud service

You must configure the Google Cloud service to accept the identity token issued to your script. This typically involves adding the script's client ID as an allowed audience.

To find your script's client ID, you can decode an identity token:

```
function logClientId() {
  const idToken = ScriptApp.getIdentityToken();
  const body = idToken.split('.')[1];
  const decoded = Utilities.newBlob(Utilities.base64Decode(body)).getDataAsString();
  const payload = JSON.parse(decoded);
  Logger.log('Client ID: ' + payload.aud);
}
```

For Cloud Run, you can [configure custom audiences](https://developers.google.com/run/docs/configuring/custom-audiences) to allow this client ID.

## Make an authenticated request

Once configured, you can include the identity token in the `Authorization` header of your requests:

```
function callCloudRunService() {
  const idToken = ScriptApp.getIdentityToken();
  const url = 'https://your-service-url.a.run.app';

  const response = UrlFetchApp.fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + idToken
    }
  });

  Logger.log(response.getContentText());
}
```
