---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/get
root: apps-script
fetched_at: 2026-04-23T15:18:13.681Z
---

# Method: projects.deployments.get

## Page Summary

- This page details how to get a deployment of an Apps Script project using a GET HTTP request.
- The request requires both the script project's Drive ID and the deployment ID as path parameters.
- The request body must be empty, and a successful response contains an instance of Deployment.
- Authorization is required using specific OAuth scopes related to script deployments.

Gets a deployment of an Apps Script project.

### HTTP request

`GET https://script.googleapis.com/v1/projects/{scriptId}/deployments/{deploymentId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>The deployment ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/script.deployments`
- `https://www.googleapis.com/auth/script.deployments.readonly`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
