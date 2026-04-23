---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list
root: apps-script
fetched_at: 2026-04-23T15:18:13.452Z
---

# Method: projects.versions.list

## Page Summary

- You can list the versions of a script project using a GET request to the specified URL.
- The only required path parameter is `scriptId`, which is the script project's Drive ID.
- Optional query parameters include `pageToken` for pagination and `pageSize` to limit the number of versions per page.
- The request body should be empty.
- The response body contains a list of `versions` and an optional `nextPageToken` for further pagination.

List the versions of a script project.

### HTTP request

`GET https://script.googleapis.com/v1/projects/{scriptId}/versions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of <code>nextPageToken</code> from a previous response.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of versions on each returned page. Defaults to 50.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

Response with the list of the versions for the specified script project.

JSON representation

```
{
  "versions": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>versions[]</code></td><td><p>The list of versions.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.</p></td></tr></tbody></table>

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/script.projects`
- `https://www.googleapis.com/auth/script.projects.readonly`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
