---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/users/getCapabilities
root: workspace
fetched_at: 2026-04-23T15:28:18.494Z
---

# Method: users.getCapabilities

Gets the user capabilities.

### HTTP request

`GET https://drivelabels.googleapis.com/v2beta/{name=users/*/capabilities}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the user. Only "users/me/capabilities" is supported.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The capabilities of a user.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "name": string,
  "canAccessLabelManager": boolean,
  "canAdministrateLabels": boolean,
  "canCreateSharedLabels": boolean,
  "canCreateAdminLabels": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Resource name for the user capabilities.</p></td></tr><tr><td><code>canAccessLabelManager</code></td><td><p><code>boolean</code></p><p>Output only. Whether the user is allowed access to the label manager.</p></td></tr><tr><td><code>canAdministrateLabels</code></td><td><p><code>boolean</code></p><p>Output only. Whether the user is an administrator for the shared labels feature.</p></td></tr><tr><td><code>canCreateSharedLabels</code></td><td><p><code>boolean</code></p><p>Output only. Whether the user is allowed to create new shared labels.</p></td></tr><tr><td><code>canCreateAdminLabels</code></td><td><p><code>boolean</code></p><p>Output only. Whether the user is allowed to create new admin labels.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.labels.readonly`
- `           https://www.googleapis.com/auth/drive.admin.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
