---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create
root: apps-script
fetched_at: 2026-04-23T15:18:12.766Z
---

# Method: projects.deployments.create

## Page Summary

- This content describes how to create a deployment of an Apps Script project using an HTTP POST request to the specified URL.
- The request requires a `scriptId` as a path parameter, which is the Drive ID of the script project.
- The request body is a JSON object containing optional fields for `versionNumber`, `manifestFileName`, and `description`.
- A successful request returns a `Deployment` object in the response body.
- Creating a deployment requires the `https://www.googleapis.com/auth/script.deployments` OAuth scope for authorization.

Creates a deployment of an Apps Script project.

### HTTP request

`POST https://script.googleapis.com/v1/projects/{scriptId}/deployments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "versionNumber": integer,
  "manifestFileName": string,
  "description": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>versionNumber</code></td><td><p><code>integer</code></p><p>The version number on which this deployment is based.</p></td></tr><tr><td><code>manifestFileName</code></td><td><p><code>string</code></p><p>The manifest file name for this deployment.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description for this deployment.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains a newly created instance of .

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.deployments`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
