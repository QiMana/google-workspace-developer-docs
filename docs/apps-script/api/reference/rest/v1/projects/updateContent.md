---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects/updateContent
root: apps-script
fetched_at: 2026-04-23T15:18:14.488Z
---

# Method: projects.updateContent

## Page Summary

- This API updates the content of a specified script project, overwriting existing files and storing the new content as the HEAD version used for various execution contexts.
- The request uses a PUT HTTP method to the specified endpoint including the `scriptId` as a path parameter.
- The request body must contain a JSON object with a `files` array, where each object represents a script project file including a required manifest file named "appsscript".
- A successful response returns an instance of `Content`.
- Authorization requires the `https://www.googleapis.com/auth/script.projects` OAuth scope.

Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.

### HTTP request

`PUT https://script.googleapis.com/v1/projects/{scriptId}/content`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "files": [
    {
      object (File)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>files[]</code></td><td><p><code>object (<code>File</code>)</code></p><p>The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `Content`.

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.projects`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
