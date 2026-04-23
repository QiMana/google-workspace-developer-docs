---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/patch
root: workspace
fetched_at: 2026-04-23T15:23:38.626Z
---

# Method: groups.patch

Updates a group's properties. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

### HTTP request

`PATCH https://admin.googleapis.com/admin/directory/v1/groups/{groupKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>groupKey</code></td><td><p><code>string</code></p><p>Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/groups/`
- `           https://www.googleapis.com/auth/admin.directory.group`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
