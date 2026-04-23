---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/tokens/delete
root: workspace
fetched_at: 2026-04-23T15:23:44.961Z
---

# Method: tokens.delete

Deletes all access tokens issued by a user for an application.

### HTTP request

`DELETE https://admin.googleapis.com/admin/directory/v1/users/{userKey}/tokens/{clientId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.</p></td></tr><tr><td><code>clientId</code></td><td><p><code>string</code></p><p>The Client ID of the application the token is issued to.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.user.security`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
