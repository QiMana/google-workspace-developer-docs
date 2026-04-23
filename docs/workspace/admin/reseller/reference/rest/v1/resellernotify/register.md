---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/resellernotify/register
root: workspace
fetched_at: 2026-04-23T15:24:41.046Z
---

# Method: resellernotify.register

## Method: resellernotify.register

Registers a Reseller for receiving notifications.

### HTTP request

`POST https://reseller.googleapis.com/apps/reseller/v1/resellernotify/register`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>serviceAccountEmailAddress</code></td><td><p><code>string</code></p><p>The service account which will own the created Cloud-PubSub topic.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `ResellernotifyResource`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
