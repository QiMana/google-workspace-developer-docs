---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/replaceDeployment
root: workspace
fetched_at: 2026-04-23T15:23:01.194Z
---

# Method: projects.deployments.replaceDeployment

## Page Summary

- Creates or replaces a Google Workspace Add-on deployment with a specific name.
- Utilizes an HTTP PUT request with path parameters to identify the target deployment.
- Requires a request body containing the deployment details and an authorization scope for cloud platform access.
- Returns the updated deployment details in the response body upon successful execution.

Creates or replaces a deployment with the specified name.

### HTTP request

`PUT https://gsuiteaddons.googleapis.com/v1/{deployment.name=projects/*/deployments/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>deployment.name</code></td><td><p><code>string</code></p><p>The deployment resource name. Example: <code>projects/123/deployments/my_deployment</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
