---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/permissions/create
root: workspace
fetched_at: 2026-04-23T15:28:05.733Z
---

# Method: permissions.create

Creates a permission for a file or shared drive. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

**Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/permissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file or shared drive.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>emailMessage</code></td><td><p><code>string</code></p><p>A plain text custom message to include in the notification email.</p></td></tr><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: See <code>moveToNewOwnersRoot</code> for details.</p></td></tr><tr><td><code>moveToNewOwnersRoot</code></td><td><p><code>boolean</code></p><p>This parameter only takes effect if the item isn't in a shared drive and the request is attempting to transfer the ownership of the item. If set to <code>true</code>, the item is moved to the new owner's My Drive root folder and all prior parents removed. If set to <code>false</code>, parents aren't changed.</p></td></tr><tr><td><code>sendNotificationEmail</code></td><td><p><code>boolean</code></p><p>Whether to send a notification email when sharing to users or groups. This defaults to <code>true</code> for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>transferOwnership</code></td><td><p><code>boolean</code></p><p>Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/transfer-file">Transfer file ownership</a>.</p></td></tr><tr><td><code>useDomainAdminAccess</code></td><td><p><code>boolean</code></p><p>Issue the request as a domain administrator.</p><p>If set to <code>true</code>, and if the following additional conditions are met, the requester is granted access:</p><ol><li>The file ID parameter refers to a shared drive.</li><li>The requester is an administrator of the domain to which the shared drive belongs.</li></ol><p>For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators">Manage shared drives as domain administrators</a>.</p></td></tr><tr><td><code>enforceExpansiveAccess<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: All requests use the expansive access rules.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
