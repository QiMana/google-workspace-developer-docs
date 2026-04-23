---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/delete
root: apps-script
fetched_at: 2026-04-23T15:18:12.870Z
---

# Method: projects.deployments.delete

## Page Summary

- This page details how to delete a deployment of an Apps Script project using a DELETE HTTP request.
- The DELETE request requires both a scriptId and a deploymentId as path parameters.
- The request body for this DELETE operation must be empty.
- A successful response body is also empty.
- Deleting a deployment requires authorization using the `https://www.googleapis.com/auth/script.deployments` OAuth scope.

Deletes a deployment of an Apps Script project.

### HTTP request

`DELETE https://script.googleapis.com/v1/projects/{scriptId}/deployments/{deploymentId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>The deployment ID to be undeployed.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is empty.

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.deployments`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
