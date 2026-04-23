---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/drives/delete
root: workspace
fetched_at: 2026-04-23T15:28:02.269Z
---

# Method: drives.delete

Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](../../../../guides/manage-shareddrives.md).

### HTTP request

`DELETE https://www.googleapis.com/drive/v3/drives/{driveId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>The ID of the shared drive.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useDomainAdminAccess</code></td><td><p><code>boolean</code></p><p>Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.</p></td></tr><tr><td><code>allowItemDeletion</code></td><td><p><code>boolean</code></p><p>Whether any items inside the shared drive should also be deleted. This option is only supported when <code>useDomainAdminAccess</code> is also set to <code>true</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/drive`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
