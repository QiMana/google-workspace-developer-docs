---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects/get
root: apps-script
fetched_at: 2026-04-23T15:18:13.873Z
---

# Method: projects.get

## Page Summary

- Gets a script project's metadata using a GET request to `https://script.googleapis.com/v1/projects/{scriptId}`.
- Requires a `scriptId` path parameter, which is the script project's Drive ID.
- The request body must be empty.
- The response body contains a Project instance if successful.
- Requires one of the specified OAuth scopes for authorization.

Gets a script project's metadata.

### HTTP request

`GET https://script.googleapis.com/v1/projects/{scriptId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/script.projects`
- `https://www.googleapis.com/auth/script.projects.readonly`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
