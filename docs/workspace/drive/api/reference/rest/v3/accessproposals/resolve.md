---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/accessproposals/resolve
root: workspace
fetched_at: 2026-04-23T15:27:59.719Z
---

# Method: accessproposals.resolve

Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/accessproposals/{proposalId}:resolve`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the item the request is on.</p></td></tr><tr><td><code>proposalId</code></td><td><p><code>string</code></p><p>Required. The ID of the access proposal to resolve.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "role": [
    string
  ],
  "view": string,
  "action": enum (Action),
  "sendNotification": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>role[]</code></td><td><p><code>string</code></p><p>Optional. The roles that the approver has allowed, if any. For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/ref-roles">Roles and permissions</a>.</p><p>Note: This field is required for the <code>ACCEPT</code> action.</p></td></tr><tr><td><code>view</code></td><td><p><code>string</code></p><p>Optional. Indicates the view for this access proposal. This should only be set when the proposal belongs to a view. Only <code>published</code> is supported.</p></td></tr><tr><td><code>action</code></td><td><p><code>enum (<code>Action</code>)</code></p><p>Required. The action to take on the access proposal.</p></td></tr><tr><td><code>sendNotification</code></td><td><p><code>boolean</code></p><p>Optional. Whether to send an email to the requester when the access proposal is denied or accepted.</p></td></tr></tbody></table>

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## Action

The state change of the access proposal.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ACTION_UNSPECIFIED</code></td><td>Unspecified action</td></tr><tr><td><code>ACCEPT</code></td><td><p>The user accepts the access proposal.</p><p>Note: If this action is used, the <code>role</code> field must have at least one value.</p></td></tr><tr><td><code>DENY</code></td><td>The user denies the access proposal.</td></tr></tbody></table>
