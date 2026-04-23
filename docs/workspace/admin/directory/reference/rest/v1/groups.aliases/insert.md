---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups.aliases/insert
root: workspace
fetched_at: 2026-04-23T15:23:37.957Z
---

# Method: groups.aliases.insert

Adds an alias for the group.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/groups/{groupKey}/aliases`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>groupKey</code></td><td><p><code>string</code></p><p>Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.group`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
