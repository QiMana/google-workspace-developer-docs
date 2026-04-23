---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/permissions/list
root: workspace
fetched_at: 2026-04-23T15:27:55.126Z
---

# Method: permissions.list

Lists a file's or shared drive's permissions.

### HTTP request

`GET https://www.googleapis.com/drive/v2/files/{fileId}/permissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID for the file or shared drive.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of <code>nextPageToken</code> from the previous response.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>useDomainAdminAccess</code></td><td><p><code>boolean</code></p><p>Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only <code>published</code> is supported.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of permissions associated with a file.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "items": [
    {
      
    }
  ],
  "nextPageToken": string,
  "kind": string,
  "etag": string,
  "selfLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p>The list of permissions.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>drive#permissionList</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>The ETag of the list.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>A link back to this list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
