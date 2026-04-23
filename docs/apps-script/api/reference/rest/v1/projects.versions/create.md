---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create
root: apps-script
fetched_at: 2026-04-23T15:18:13.602Z
---

# Method: projects.versions.create

## Page Summary

- A new immutable version of a script project is created using a POST request to a specific URL.
- The request requires a `scriptId` as a path parameter to identify the project.
- The request body is a JSON object containing optional fields like `versionNumber`, `description`, and `createTime` for the new version.
- A successful response returns a newly created Version object.
- Authorization requires the `https://www.googleapis.com/auth/script.projects` OAuth scope.

Creates a new immutable version using the current code, with a unique version number.

### HTTP request

`POST https://script.googleapis.com/v1/projects/{scriptId}/versions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "versionNumber": integer,
  "description": string,
  "createTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>versionNumber</code></td><td><p><code>integer</code></p><p>The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description for this version.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>When the version was created.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains a newly created instance of .

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.projects`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
