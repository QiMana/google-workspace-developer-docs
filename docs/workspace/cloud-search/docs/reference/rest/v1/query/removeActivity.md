---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/query/removeActivity
root: workspace
fetched_at: 2026-04-23T15:26:16.367Z
---

# Method: query.removeActivity

Provides functionality to remove logged activity for a user.

**Note:** This API requires a standard end user account to execute. A service account can't perform Remove Activity requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](../../../../guides/delegation.md).

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/query:removeActivity`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "userActivity": {
    object (UserActivity)
  },
  "requestOptions": {
    object (RequestOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>userActivity</code></td><td><p><code>object (<code>UserActivity</code>)</code></p><p>User Activity containing the data to be deleted.</p></td></tr><tr><td><code>requestOptions</code></td><td><p><code>object (<code>RequestOptions</code>)</code></p><p>Request options, such as the search application and clientId.</p></td></tr></tbody></table>

### Response body

If successful, the response body is empty.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.query`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## UserActivity

User's single or bulk query activity. This can be a logging query or deletion query.

JSON representation

```
{

  "queryActivity": {
    object (QueryActivity)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>activity</code>.</p><p><code>activity</code> can be only one of the following:</p></td></tr><tr><td><code>queryActivity</code></td><td><p><code>object (<code>QueryActivity</code>)</code></p><p>Contains data which needs to be logged/removed.</p></td></tr></tbody></table>

## QueryActivity

Details about a user's query activity.

JSON representation

```
{
  "query": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>query</code></td><td><p><code>string</code></p><p>User input query to be logged/removed.</p></td></tr></tbody></table>
