---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/permissions/insert
root: workspace
fetched_at: 2026-04-23T15:27:55.420Z
---

# Method: permissions.insert

Inserts a permission for a file or shared drive.

**Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

### HTTP request

`POST https://www.googleapis.com/drive/v2/files/{fileId}/permissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID for the file or shared drive.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>emailMessage</code></td><td><p><code>string</code></p><p>A plain text custom message to include in notification emails.</p></td></tr><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: See <code>moveToNewOwnersRoot</code> for details.</p></td></tr><tr><td><code>moveToNewOwnersRoot</code></td><td><p><code>boolean</code></p><p>This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to <code>true</code>, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to <code>false</code>, parents are not changed.</p></td></tr><tr><td><code>sendNotificationEmails</code></td><td><p><code>boolean</code></p><p>Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the <code>role</code> is <code>owner</code>.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>useDomainAdminAccess</code></td><td><p><code>boolean</code></p><p>Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.</p></td></tr><tr><td><code>enforceExpansiveAccess<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: All requests use the expansive access rules.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
