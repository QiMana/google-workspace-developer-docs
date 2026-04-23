---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/get
root: workspace
fetched_at: 2026-04-23T15:23:03.840Z
---

# Method: projects.deployments.get

## Page Summary

- Retrieves a specific Google Workspace Add-on deployment using its resource name.
- Requires the `cloud-platform` OAuth scope for authorization and the `gsuiteaddons.deployments.get` IAM permission on the deployment.
- The request should be a `GET` request to the specified URL with the deployment name as a path parameter and an empty request body.
- A successful response returns a `Deployment` object containing information about the requested deployment.

Gets the deployment with the specified name.

### HTTP request

`GET https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to get.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.get</code></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
