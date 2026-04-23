---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/verificationCodes/generate
root: workspace
fetched_at: 2026-04-23T15:23:46.947Z
---

# Method: verificationCodes.generate

Generates new backup verification codes for the user.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/users/{userKey}/verificationCodes/generate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Email or immutable ID of the user</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.user.security`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
