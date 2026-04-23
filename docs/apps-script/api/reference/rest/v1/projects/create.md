---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects/create
root: apps-script
fetched_at: 2026-04-23T15:18:13.792Z
---

# Method: projects.create

## Page Summary

- This page details how to create a new, empty script project using the Apps Script API.
- The creation is done via an HTTP POST request to `https://script.googleapis.com/v1/projects`.
- The request body can include a `title` for the project and an optional `parentId` to bind the script to a specific Google Drive file.
- A successful response will return a newly created `Project` instance.
- This operation requires the `https://www.googleapis.com/auth/script.projects` authorization scope.

Creates a new, empty script project with no script files and a base manifest file.

### HTTP request

`POST https://script.googleapis.com/v1/projects`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "title": string,
  "parentId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title for the project.</p></td></tr><tr><td><code>parentId</code></td><td><p><code>string</code></p><p>The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains a newly created instance of .

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.projects`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
