---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/uninstall
root: workspace
fetched_at: 2026-04-23T15:23:04.175Z
---

# Method: projects.deployments.uninstall

## Page Summary

- Uninstalls a specified test deployment from a user's account.
- Requires an empty request body and returns an empty JSON object upon successful completion.
- Uses the `POST` method with the URL `https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}:uninstall`, where `{name}` represents the deployment's full resource name.
- Needs the `gsuiteaddons.deployments.execute` IAM permission and the `https://www.googleapis.com/auth/cloud-platform` OAuth scope for authorization.

Uninstalls a test deployment from the user’s account. For more information, see [Test your add-on](../../../../guides/alternate-runtimes.md#test_your_add-on).

### HTTP request

`POST https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}:uninstall`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to install.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.execute</code></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
