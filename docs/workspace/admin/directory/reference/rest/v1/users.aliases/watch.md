---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users.aliases/watch
root: workspace
fetched_at: 2026-04-23T15:23:45.435Z
---

# Method: users.aliases.watch

Watches for changes in users list.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/users/{userKey}/aliases/watch`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Email or immutable ID of the user</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>event</code></td><td><p><code>enum (<code>Event</code>)</code></p><p>Events to watch for.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `SubscriptionChannel`.

### Response body

If successful, the response body contains an instance of `SubscriptionChannel`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/alias/`
- `           https://www.googleapis.com/auth/admin.directory.user`
- `           https://www.googleapis.com/auth/admin.directory.user.readonly`
- `           https://www.googleapis.com/auth/admin.directory.user.alias`
- `           https://www.googleapis.com/auth/admin.directory.user.alias.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## Event

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ADD</code></td><td>Alias Created Event</td></tr><tr><td><code>DELETE</code></td><td>Alias Deleted Event</td></tr></tbody></table>
