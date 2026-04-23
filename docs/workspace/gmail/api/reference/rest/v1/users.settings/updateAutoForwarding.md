---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings/updateAutoForwarding
root: workspace
fetched_at: 2026-04-23T15:29:05.837Z
---

# Method: users.settings.updateAutoForwarding

Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings).

This method is only available to service account clients that have been delegated domain-wide authority.

### HTTP request

`PUT https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/autoForwarding`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `AutoForwarding`.

### Response body

If successful, the response body contains an instance of `AutoForwarding`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
