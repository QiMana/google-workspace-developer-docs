---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get
root: apps-script
fetched_at: 2026-04-23T15:18:13.123Z
---

# Method: projects.versions.get

## Page Summary

- This page details how to get a specific version of an Apps Script project using a REST API request.
- The request requires the script project's Drive ID (`scriptId`) and the desired `versionNumber` as path parameters.
- The request body must be empty, and a successful response returns a `Version` object.
- Accessing this functionality requires specific OAuth scopes related to script projects.

Gets a version of a script project.

### HTTP request

`GET https://script.googleapis.com/v1/projects/{scriptId}/versions/{versionNumber}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>versionNumber</code></td><td><p><code>integer</code></p><p>The version number.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/script.projects`
- `https://www.googleapis.com/auth/script.projects.readonly`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
