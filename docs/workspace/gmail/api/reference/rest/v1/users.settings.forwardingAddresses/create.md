---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.forwardingAddresses/create
root: workspace
fetched_at: 2026-04-23T15:29:02.830Z
---

# Method: users.settings.forwardingAddresses.create

Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. For more information, see [Manage email forwarding](../../../../guides/forwarding_settings.md).

This method is only available to service account clients that have been delegated domain-wide authority.

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/forwardingAddresses`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
