---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.buildings/list
root: workspace
fetched_at: 2026-04-23T15:23:40.606Z
---

# Method: resources.buildings.list

Retrieves a list of buildings for an account.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customer}/resources/buildings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's customer ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify the next page in the list.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Public API: Resources.buildings

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "buildings": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>buildings[]</code></td><td><p>The Buildings in this page of results.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/calendar/resource/`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
