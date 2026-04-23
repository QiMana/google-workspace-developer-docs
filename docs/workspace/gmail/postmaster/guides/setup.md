---
source: https://developers.google.com/workspace/gmail/postmaster/guides/setup
root: workspace
fetched_at: 2026-04-23T15:30:00.026Z
---

# Set up the API

Every request your application sends to the Postmaster Tools API must include an authorization token. The token also identifies your application to Google.

## About authorization protocols

Your application must use [OAuth 2.0](https://developers.google.com/identity/protocols/OAuth2) to authorize requests. No other authorization protocols are supported. If your application uses [Sign In With Google](https://developers.google.com/identity/gsi/web), some aspects of authorization are handled for you.

## Authorizing requests with OAuth 2.0

All requests to the Postmaster Tools API must be authorized by an authenticated user.

The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on what kind of application you're writing. The following general process applies to all application types:

1. When you create your application, you register it using the [Google API Console](https://console.cloud.google.com/). Google then provides information you'll need later, such as a client ID and a client secret.
2. Activate the Postmaster Tools API in the Google API Console. (If the API isn't listed in the API Console, then skip this step.)
3. When your application needs access to user data, it asks Google for a particular **scope** of access.
4. Google displays a **consent screen** to the user, asking them to authorize your application to request some of their data.
5. If the user approves, then Google gives your application a short-lived **access token**.
6. Your application requests user data, attaching the access token to the request.
7. If Google determines that your request and the token are valid, it returns the requested data.

Some flows include additional steps, such as using **refresh tokens** to acquire new access tokens. For detailed information about flows for various types of applications, see Google's [OAuth 2.0 documentation](https://developers.google.com/identity/protocols/OAuth2).

Here's the OAuth 2.0 scope information for the Postmaster Tools API:

| Scope | Meaning |
| --- | --- |
| `https://www.googleapis.com/auth/postmaster` | Allows read/write access to Postmaster Tools data. |
| `https://www.googleapis.com/auth/postmaster.domain` | Allows read-only access to domain information. |
| `https://www.googleapis.com/auth/postmaster.traffic.readonly` | Allows read-only access to Postmaster Tools traffic statistics. |

To request access using OAuth 2.0, your application needs the scope information, as well as information that Google supplies when you register your application (such as the client ID and the client secret).
