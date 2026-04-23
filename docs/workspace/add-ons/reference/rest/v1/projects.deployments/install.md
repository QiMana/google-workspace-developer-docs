---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/install
root: workspace
fetched_at: 2026-04-23T15:23:04.034Z
---

# Method: projects.deployments.install

## Page Summary

- Installs a specified add-on deployment to your account for testing purposes.
- Utilizes an HTTP POST request to the designated endpoint with the deployment's resource name.
- Requires an empty request body and returns an empty JSON object upon successful installation.
- Needs authorization with the `https://www.googleapis.com/auth/cloud-platform` scope.
- Grants permission through specific IAM roles for deployment installation.

Installs a deployment to your account for testing. For more information, see [Test your add-on](../../../../guides/alternate-runtimes.md#test_your_add-on)

### HTTP request

`POST https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}:install`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to install.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.install</code></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
