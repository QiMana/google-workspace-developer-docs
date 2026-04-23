---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects/getContent
root: apps-script
fetched_at: 2026-04-23T15:18:13.268Z
---

# Method: projects.getContent

## Page Summary

- This method gets the content of a script project, including the code source and metadata for each script file.
- The HTTP request uses a GET method with the URL `https://script.googleapis.com/v1/projects/{scriptId}/content`.
- The `scriptId` is a required path parameter, representing the script project's Drive ID.
- An optional query parameter `versionNumber` can be used to retrieve a specific version of the project.
- The response body, if successful, contains the script project's Drive ID and a list of script project files.

Gets the content of the script project, including the code source and metadata for each script file.

### HTTP request

`GET https://script.googleapis.com/v1/projects/{scriptId}/content`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>versionNumber</code></td><td><p><code>integer</code></p><p>The version number of the project to retrieve. If not provided, the project's HEAD version is returned.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

The Content resource.

JSON representation

```
{
  "scriptId": string,
  "files": [
    {
      object (File)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>files[]</code></td><td><p><code>object (<code>File</code>)</code></p><p>The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.</p></td></tr></tbody></table>

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/script.projects`
- `https://www.googleapis.com/auth/script.projects.readonly`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
