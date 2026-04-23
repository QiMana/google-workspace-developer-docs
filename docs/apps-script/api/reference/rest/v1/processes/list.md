---
source: https://developers.google.com/apps-script/api/reference/rest/v1/processes/list
root: apps-script
fetched_at: 2026-04-23T15:18:12.135Z
---

# Method: processes.list

## Page Summary

- This document details how to list processes made by or on behalf of a user, including information like process type and current status.
- The request method is a GET request to `https://script.googleapis.com/v1/processes`.
- You can filter the results using query parameters such as `userProcessFilter`, `pageSize`, and `pageToken`.
- The response body contains a list of `Process` resources and a `nextPageToken` for pagination.
- The `ListUserProcessesFilter` object allows for detailed filtering based on criteria like script ID, deployment ID, project name, function name, time range, process types, statuses, and user access levels.

List information about processes made by or on behalf of a user, such as process type and current status.

### HTTP request

`GET https://script.googleapis.com/v1/processes`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userProcessFilter</code></td><td><p><code>object (<code>ListUserProcessesFilter</code>)</code></p><p>A filter used to limit the list results; only processes matching the filter criteria are returned.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of returned processes per page of results. Defaults to 50.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token for continuing a previous list request on the next page. This should be set to the value of <code>nextPageToken</code> from a previous response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "processes": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>processes[]</code></td><td><p>List of processes matching request parameters.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token for the next page of results. If empty, there are no more pages remaining.</p></td></tr></tbody></table>

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.processes`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).

## ListUserProcessesFilter

Filter used to further specify which processes to list. Only processes that match all the specified conditions are returned.

JSON representation

```
{
  "scriptId": string,
  "deploymentId": string,
  "projectName": string,
  "functionName": string,
  "startTime": string,
  "endTime": string,
  "types": [
    
  ],
  "statuses": [
    
  ],
  "userAccessLevels": [
    
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>Optional field used to limit returned processes to those originating from projects with a specific script ID.</p></td></tr><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>Optional field used to limit returned processes to those originating from projects with a specific deployment ID.</p></td></tr><tr><td><code>projectName</code></td><td><p><code>string</code></p><p>Optional field used to limit returned processes to those originating from projects with project names containing a specific string.</p></td></tr><tr><td><code>functionName</code></td><td><p><code>string</code></p><p>Optional field used to limit returned processes to those originating from a script function with the given function name.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional field used to limit returned processes to those that were started on or after the given timestamp.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional field used to limit returned processes to those that completed on or before the given timestamp.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>types[]</code></td><td><p>Optional field used to limit returned processes to those having one of the specified process types.</p></td></tr><tr><td><code>statuses[]</code></td><td><p>Optional field used to limit returned processes to those having one of the specified process statuses.</p></td></tr><tr><td><code>userAccessLevels[]</code></td><td><p>Optional field used to limit returned processes to those having one of the specified user access levels.</p></td></tr></tbody></table>
