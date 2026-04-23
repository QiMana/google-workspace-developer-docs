---
source: https://developers.google.com/workspace/chat/verify-requests-from-chat
root: workspace
fetched_at: 2026-04-23T15:25:39.710Z
---

# Verify requests from Google Chat

## Page Summary

- Google Chat sends a bearer token in the `Authorization` header of HTTPS requests to verify that the request originates from Google.
- Cloud Functions and Cloud Run automatically handle token verification when you add the Google Chat service account as an authorized invoker.
- For apps with their own HTTP server, you can verify the bearer token using a Google API client library or by validating the ID token or JWT based on the authentication audience configuration.
- If token verification fails, your service should respond with an HTTPS `401 (Unauthorized)` response code.
- The authentication audience determines whether the bearer token is an ID token (for HTTP endpoint URLs) or a JWT (for Project Numbers), impacting the verification process.

For Google Chat apps built on HTTP endpoints, this section explains how to verify that the requests to your endpoint come from Chat.

To dispatch interaction events to your Chat app's endpoint, Google makes requests to your service. To verify that the request is coming from Google, Chat includes a [bearer token](https://cloud.google.com/docs/authentication/token-types#bearer) in the `Authorization` header of every HTTPS request to your endpoint. For example:

```
POST
Host: yourappurl.com
Authorization: Bearer AbCdEf123456
Content-Type: application/json
User-Agent: Google-Dynamite
```

The string `AbCdEf123456` in the preceding example is the bearer authorization token. This is a cryptographic token produced by Google. The type of the bearer token and the value of the `audience` field depend on the type of authentication audience you selected when [configuring the Chat app](./configure-chat-api.md).

If you've implemented your Chat app using Cloud Run functions, Cloud IAM handles token verification automatically. You must add the Google Chat service account as an authorized invoker. If your app implements its own HTTP server, you can verify your bearer token using an open source [Google API client library](./libraries.md):

- **Java**: [https://github.com/google/google-api-java-client](https://github.com/google/google-api-java-client)
- **Python**: [https://github.com/google/google-api-python-client](https://github.com/google/google-api-python-client)
- **Node.js**: [https://github.com/google/google-api-nodejs-client](https://github.com/google/google-api-nodejs-client)
- **.NET**: [https://github.com/google/google-api-dotnet-client](https://github.com/google/google-api-dotnet-client)

If the token doesn't verify for the Chat app, your service should respond to the request with an HTTPS response code `401 (Unauthorized)`.

## Authenticate requests using Cloud Run functions

If your function logic is implemented using Cloud Run functions, you must select **HTTP endpoint URL** in the **Authentication Audience** field of the Chat app [connection setting](./configure-chat-api.md) and make sure that the HTTP endpoint URL in the configuration corresponds to the URL of the Cloud Run function endpoint.

Then, you need to authorize the Google Chat service account `chat@system.gserviceaccount.com` as an invoker using the following steps:

### Console

After deploying your function or service to Google Cloud:

1. In the Google Cloud console, go to the Cloud Run page:
	[Go to Cloud Run](https://console.cloud.google.com/run)
2. In the Cloud Run services list, click the checkbox next to the receiving function. (Don't click the function itself.)
3. Click **Permissions** at the top of the screen. The **Permissions** panel opens.
4. Click **Add principal**.
5. In the **New principals** field, enter `chat@system.gserviceaccount.com`.
6. From the **Select a role** menu, select the role **Cloud Run**
	> **Cloud Run Invoker**.
7. Click **Save**.

### gcloud

Use the `gcloud functions add-invoker-policy-binding` command:

```
gcloud functions add-invoker-policy-binding RECEIVING_FUNCTION \
  --member='serviceAccount:chat@system.gserviceaccount.com'
```

Replace `RECEIVING_FUNCTION` with the name of your Chat app's function.

## Authenticate HTTP requests with an ID Token

If the Authentication Audience field of the Chat app [connection setting](./configure-chat-api.md) is set to **HTTP endpoint URL**, the bearer authorization token in the request is a Google-signed OpenID Connect (OIDC) [ID token](https://cloud.google.comdocs/authentication/token-types#identity-tokens). The `email` field is set to `chat@system.gserviceaccount.com`. The **Authentication Audience** field is set to the URL you configured Google Chat to send requests to your Chat app. For example, if the configured endpoint of your Chat app is `https://example.com/app/`, then the **Authentication Audience** field in the ID token is `https://example.com/app/`.

This is the recommended authentication method if your HTTP endpoint isn't hosted on a service that supports IAM-based authentication (such as Cloud Run). Using this method, your HTTP service needs information about the URL of the endpoint where it's running, but doesn't need information about the Cloud project number.

The following samples show how to verify that the bearer token was issued by Google Chat and targeted at your app using the Google OAuth client library.

### Java

```
String CHAT_ISSUER = "chat@system.gserviceaccount.com";
JsonFactory factory = JacksonFactory.getDefaultInstance();

GoogleIdTokenVerifier verifier =
    new GoogleIdTokenVerifier.Builder(new ApacheHttpTransport(), factory)
        .setAudience(Collections.singletonList(AUDIENCE))
        .build();

GoogleIdToken idToken = GoogleIdToken.parse(factory, bearer);
return idToken != null
    && verifier.verify(idToken)
    && idToken.getPayload().getEmailVerified()
    && idToken.getPayload().getEmail().equals(CHAT_ISSUER);
```

### Python

```
# Bearer Tokens received by apps will always specify this issuer.
CHAT_ISSUER = 'chat@system.gserviceaccount.com'

try:
    # Verify valid token, signed by CHAT_ISSUER, intended for a third party.
    request = requests.Request()
    token = id_token.verify_oauth2_token(bearer, request, AUDIENCE)
    return token['email'] == CHAT_ISSUER

except:
    return False
```

### Node.js

```
// Bearer Tokens received by apps will always specify this issuer.
const chatIssuer = 'chat@system.gserviceaccount.com';

// Verify valid token, signed by chatIssuer, intended for a third party.
try {
  const ticket = await client.verifyIdToken({
    idToken: bearer,
    audience: audience
  });
  return ticket.getPayload().email_verified
      && ticket.getPayload().email === chatIssuer;
} catch (unused) {
  return false;
}
```

## Authenticate requests with a Project Number JWT

If the Authentication Audience field of the Chat app [connection setting](./configure-chat-api.md) is set to `Project Number`, the bearer authorization token in the request is a self-signed [JSON Web Token (JWT)](https://cloud.google.com/docs/authentication/token-types#sa-jwts), issued and signed by `chat@system.gserviceaccount.com`. The `audience` field is set to the Google Cloud project number that you used to build your Chat app. For example, if your Chat app's Cloud project number is `1234567890`, then the `audience` field in the JWT is `1234567890`.

This authentication method is only recommended if you prefer to use the Cloud project number to verify requests instead of the HTTP endpoint URL. For example, if you want to change the endpoint URL over time while keeping the same Cloud project number, or if you want to use the same endpoint for multiple Cloud project numbers and want to compare the `audience` field with a list of Cloud project numbers.

The following samples show how to verify that the bearer token was issued by Google Chat and targeted at your project using the Google OAuth client library.

### Java

```
String CHAT_ISSUER = "chat@system.gserviceaccount.com";
JsonFactory factory = JacksonFactory.getDefaultInstance();

GooglePublicKeysManager keyManagerBuilder =
    new GooglePublicKeysManager.Builder(new ApacheHttpTransport(), factory)
        .setPublicCertsEncodedUrl(
            "https://www.googleapis.com/service_accounts/v1/metadata/x509/" + CHAT_ISSUER)
        .build();

GoogleIdTokenVerifier verifier =
    new GoogleIdTokenVerifier.Builder(keyManagerBuilder).setIssuer(CHAT_ISSUER).build();

GoogleIdToken idToken = GoogleIdToken.parse(factory, bearer);
return idToken != null
    && verifier.verify(idToken)
    && idToken.verifyAudience(Collections.singletonList(AUDIENCE))
    && idToken.verifyIssuer(CHAT_ISSUER);
```

### Python

```
# Bearer Tokens received by apps will always specify this issuer.
CHAT_ISSUER = 'chat@system.gserviceaccount.com'

try:
    # Verify valid token, signed by CHAT_ISSUER, intended for a third party.
    request = requests.Request()
    certs_url = 'https://www.googleapis.com/service_accounts/v1/metadata/x509/' + CHAT_ISSUER
    token = id_token.verify_token(bearer, request, AUDIENCE, certs_url)
    return token['iss'] == CHAT_ISSUER

except:
    return False
```

### Node.js

```
// Bearer Tokens received by apps will always specify this issuer.
const chatIssuer = 'chat@system.gserviceaccount.com';

// Verify valid token, signed by CHAT_ISSUER, intended for a third party.
try {
  const response = await fetch('https://www.googleapis.com/service_accounts/v1/metadata/x509/' + chatIssuer);
  const certs = await response.json();
  await client.verifySignedJwtWithCertsAsync(
    bearer, certs, audience, [chatIssuer]);
  return true;
} catch (unused) {
  return false;
}
```

## Related topics

- For an overview of authentication and authorization in Google Workspace, see [Learn about authentication and authorization](../guides/auth-overview.md).
- For an overview of authentication and authorization in Chat, see [Authentication overview](./authenticate-authorize.md).
- Set up authentication and authorization with [user credentials](./authenticate-authorize-chat-user.md) or a [service account](./authenticate-authorize-chat-app.md).
