---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/get
root: workspace
fetched_at: 2026-04-23T15:23:38.019Z
---

# Method: groups.get

Retrieves a group's properties.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/groups/{groupKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>groupKey</code></td><td><p><code>string</code></p><p>Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/groups/`
- `           https://www.googleapis.com/auth/admin.directory.group`
- `           https://www.googleapis.com/auth/admin.directory.group.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
