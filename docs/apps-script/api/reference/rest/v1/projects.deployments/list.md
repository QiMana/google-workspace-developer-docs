---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list
root: apps-script
fetched_at: 2026-04-23T15:18:14.021Z
---

# Method: projects.deployments.list

## Page Summary

- This page describes how to list the deployments of an Apps Script project using a GET HTTP request.
- The request requires a `scriptId` path parameter and can optionally include `pageToken` and `pageSize` query parameters.
- The request body must be empty.
- The response body contains a list of deployments and a `nextPageToken` for pagination.
- Authorization requires specific OAuth scopes for script deployments.

Lists the deployments of an Apps Script project.

### HTTP request

`GET https://script.googleapis.com/v1/projects/{scriptId}/deployments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of <code>nextPageToken</code> from a previous response.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of deployments on each returned page. Defaults to 50.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

Response with the list of deployments for the specified Apps Script project.

JSON representation

```
{
  "deployments": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deployments[]</code></td><td><p>The list of deployments.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The token that can be used in the next call to get the next page of results.</p></td></tr></tbody></table>

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/script.deployments`
- `https://www.googleapis.com/auth/script.deployments.readonly`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).
