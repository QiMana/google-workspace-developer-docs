---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/permissions/delete
root: workspace
fetched_at: 2026-04-23T15:28:05.795Z
---

# Method: permissions.delete

Deletes a permission. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

**Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

### HTTP request

`DELETE https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file or shared drive.</p></td></tr><tr><td><code>permissionId</code></td><td><p><code>string</code></p><p>The ID of the permission.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>useDomainAdminAccess</code></td><td><p><code>boolean</code></p><p>Issue the request as a domain administrator.</p><p>If set to <code>true</code>, and if the following additional conditions are met, the requester is granted access:</p><ol><li>The file ID parameter refers to a shared drive.</li><li>The requester is an administrator of the domain to which the shared drive belongs.</li></ol><p>For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators">Manage shared drives as domain administrators</a>.</p></td></tr><tr><td><code>enforceExpansiveAccess<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: All requests use the expansive access rules.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
