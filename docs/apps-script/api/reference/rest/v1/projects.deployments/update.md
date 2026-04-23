---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/update
root: apps-script
fetched_at: 2026-04-23T15:18:13.039Z
---

# Method: projects.deployments.update

## Page Summary

- This document details how to update a deployment of an Apps Script project using a PUT request.
- The API endpoint requires the script project's Drive ID and the specific deployment ID as path parameters.
- The request body uses a JSON structure to specify the deployment configuration, including the version number, manifest file name, and description.
- A successful response returns an instance of the Deployment object.
- Updating deployments requires the `https://www.googleapis.com/auth/script.deployments` OAuth scope for authorization.

Updates a deployment of an Apps Script project.

### HTTP request

`PUT https://script.googleapis.com/v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>deploymentConfig.scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>The deployment ID for this deployment.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "deploymentConfig": {
    "scriptId": string,
    "versionNumber": integer,
    "manifestFileName": string,
    "description": string
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deploymentConfig.versionNumber</code></td><td><p><code>integer</code></p><p>The version number on which this deployment is based.</p></td></tr><tr><td><code>deploymentConfig.manifestFileName</code></td><td><p><code>string</code></p><p>The manifest file name for this deployment.</p></td></tr><tr><td><code>deploymentConfig.description</code></td><td><p><code>string</code></p><p>The description for this deployment.</p></td></tr></tbody></table>

### Response body

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.deployments`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
