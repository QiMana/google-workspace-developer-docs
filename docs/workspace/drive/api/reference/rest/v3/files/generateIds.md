---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/generateIds
root: workspace
fetched_at: 2026-04-23T15:28:03.965Z
---

# Method: files.generateIds

Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](../../../../guides/create-file.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/files/generateIds`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>count</code></td><td><p><code>integer</code></p><p>The number of IDs to return.</p></td></tr><tr><td><code>space</code></td><td><p><code>string</code></p><p>The space in which the IDs can be used to create files. Supported values are <code>drive</code> and <code>appDataFolder</code>. (Default: <code>drive</code>.) For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/about-files#file-organization">File organization</a>.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The type of items which the IDs can be used for. Supported values are <code>files</code> and <code>shortcuts</code>. Note that <code>shortcuts</code> are only supported in the <code>drive</code> <code>space</code>. (Default: <code>files</code>.) For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/about-files#file-organization">File organization</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of generated file IDs which can be provided in create requests.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "ids": [
    string
  ],
  "space": string,
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ids[]</code></td><td><p><code>string</code></p><p>The IDs generated for the requesting user in the specified space.</p></td></tr><tr><td><code>space</code></td><td><p><code>string</code></p><p>The type of file that can be created with these IDs.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies what kind of resource this is. Value: the fixed string <code>"drive#generatedIds"</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
