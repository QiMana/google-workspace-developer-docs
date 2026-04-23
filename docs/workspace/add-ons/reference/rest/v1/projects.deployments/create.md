---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/create
root: workspace
fetched_at: 2026-04-23T15:23:01.301Z
---

# Method: projects.deployments.create

## Page Summary

- Creates a deployment with a specified name and configuration using an HTTP POST request.
- Requires `gsuiteaddons.deployments.create` IAM permission and `https://www.googleapis.com/auth/cloud-platform` OAuth scope.
- Utilizes path parameters for project specification and query parameters for deployment ID.
- Request and response bodies contain instances of the `Deployment` resource, allowing configuration and retrieval of deployment details.

Creates a deployment with the specified name and configuration.

### HTTP request

`POST https://gsuiteaddons.googleapis.com/v1/{parent=projects/*}/deployments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Name of the project in which to create the deployment.</p><p>Example: <code>projects/my_project</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>parent</code>:</p><ul><li><code>gsuiteaddons.deployments.create</code></li></ul></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>Required. The ID to use for this deployment. The full name of the created resource will be <code>projects/<projectNumber>/deployments/<deploymentId></code>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
