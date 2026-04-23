---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/getInstallStatus
root: workspace
fetched_at: 2026-04-23T15:23:01.126Z
---

# Method: projects.deployments.getInstallStatus

## Page Summary

- Retrieves the installation status of a specific Google Workspace Add-on deployment.
- Requires the deployment's full resource name as a path parameter and an empty request body.
- Returns a JSON response indicating whether the deployment is installed for the user along with the deployment's full resource name.
- Needs authorization with the `https://www.googleapis.com/auth/cloud-platform` scope for access.

Gets the install status of a test deployment.

### HTTP request

`GET https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*/installStatus}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment.</p><p>Example: <code>projects/my_project/deployments/my_deployment/installStatus</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.installStatus</code></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Install status of a test deployment.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "name": string,
  "installed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The canonical full resource name of the deployment install status.</p><p>Example: <code>projects/123/deployments/my_deployment/installStatus</code>.</p></td></tr><tr><td><code>installed</code></td><td><p><code>boolean</code></p><p>True if the deployment is installed for the user.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
