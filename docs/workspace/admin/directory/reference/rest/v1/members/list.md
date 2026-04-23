---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/members/list
root: workspace
fetched_at: 2026-04-23T15:23:39.826Z
---

# Method: members.list

Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](../../../../v1/guides/troubleshoot-error-codes.md).

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/groups/{groupKey}/members`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>groupKey</code></td><td><p><code>string</code></p><p>Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>includeDerivedMembership</code></td><td><p><code>boolean</code></p><p>Whether to list indirect memberships. Default: false.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return. Max allowed value is 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page in the list.</p></td></tr><tr><td><code>roles</code></td><td><p><code>string</code></p><p>The <code>roles</code> query parameter allows you to retrieve group members by role. Allowed values are <code>OWNER</code>, <code>MANAGER</code>, and <code>MEMBER</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "members": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>members[]</code></td><td><p>A list of member objects.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access next page of this result.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/groups/`
- `           https://www.googleapis.com/auth/admin.directory.group`
- `           https://www.googleapis.com/auth/admin.directory.group.member`
- `           https://www.googleapis.com/auth/admin.directory.group.member.readonly`
- `           https://www.googleapis.com/auth/admin.directory.group.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
