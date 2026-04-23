---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.cse.identities/delete
root: workspace
fetched_at: 2026-04-23T15:29:00.538Z
---

# Method: users.settings.cse.identities.delete

Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages.

You cannot restore the identity after you delete it. Instead, use the `identities.create` method to create another identity with the same configuration.

For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope.

For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

### HTTP request

`DELETE https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The requester's primary email address. To indicate the authenticated user, you can use the special value <code>me</code>.</p></td></tr><tr><td><code>cseEmailAddress</code></td><td><p><code>string</code></p><p>The primary email address associated with the client-side encryption identity configuration that's removed.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
