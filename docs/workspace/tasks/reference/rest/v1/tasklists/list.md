---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/list
root: workspace
fetched_at: 2026-04-23T15:32:00.607Z
---

# Method: tasklists.list

Returns all the authenticated user's task lists. A user can have up to 2000 lists at a time.

### HTTP request

`GET https://tasks.googleapis.com/tasks/v1/users/@me/lists`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of task lists returned on one page. Optional. The default is 1000 (max allowed: 1000).</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token specifying the result page to return. Optional.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "nextPageToken": string,
  "items": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Type of the resource. This is always "tasks#taskLists".</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token that can be used to request the next page of this result.</p></td></tr><tr><td><code>items[]</code></td><td><p>Collection of task lists.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/tasks`
- `https://www.googleapis.com/auth/tasks.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## TaskLists

JSON representation

```
{
  "kind": string,
  "etag": string,
  "nextPageToken": string,
  "items": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Type of the resource. This is always "tasks#taskLists".</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token that can be used to request the next page of this result.</p></td></tr><tr><td><code>items[]</code></td><td><p>Collection of task lists.</p></td></tr></tbody></table>
