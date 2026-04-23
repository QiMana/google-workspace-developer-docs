---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.cse.identities/patch
root: workspace
fetched_at: 2026-04-23T15:29:01.166Z
---

# Method: users.settings.cse.identities.patch

Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887).

For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope.

For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

### HTTP request

`PATCH https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The requester's primary email address. To indicate the authenticated user, you can use the special value <code>me</code>.</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>The email address of the client-side encryption identity to update.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
