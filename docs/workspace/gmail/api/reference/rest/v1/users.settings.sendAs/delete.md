---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs/delete
root: workspace
fetched_at: 2026-04-23T15:29:04.175Z
---

# Method: users.settings.sendAs.delete

Deletes the specified send-as alias. Revokes any verification that may have been required for using it. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).

This method is only available to service account clients that have been delegated domain-wide authority.

### HTTP request

`DELETE https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr><tr><td><code>sendAsEmail</code></td><td><p><code>string</code></p><p>The send-as alias to be deleted.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
