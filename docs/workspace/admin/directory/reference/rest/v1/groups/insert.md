---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/insert
root: workspace
fetched_at: 2026-04-23T15:23:38.563Z
---

# Method: groups.insert

## Method: groups.insert

Creates a group.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/groups`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains an instance of `Group`.

### Response body

If successful, the response body contains a newly created instance of `Group`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/groups/`
- `           https://www.googleapis.com/auth/admin.directory.group`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
