---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/delete
root: workspace
fetched_at: 2026-04-23T15:23:03.753Z
---

# Method: projects.deployments.delete

## Page Summary

- This document details how to delete a Google Workspace Add-on deployment using the `DELETE` HTTP request method.
- The request requires specifying the deployment's name as a path parameter and optionally an etag as a query parameter for concurrency control.
- Successful deletion results in an empty JSON response body, indicating the deployment has been removed.
- Authorization for this operation necessitates the `cloud-platform` OAuth scope and the `gsuiteaddons.deployments.delete` IAM permission.
- The request body should be empty when sending the delete request.

Deletes the deployment with the given name.

### HTTP request

`DELETE https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to delete.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.delete</code></li></ul></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>etag</code></td><td><p><code>string</code></p><p>The etag of the deployment to delete. If this is provided, it must match the server's etag.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
