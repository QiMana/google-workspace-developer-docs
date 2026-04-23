---
source: https://developers.google.com/workspace/calendar/api/v3/reference/settings/list
root: workspace
fetched_at: 2026-04-23T15:24:57.884Z
---

# Settings: list

Returns all user settings for the authenticated user. [Try it now](#try-it).

## Request

### HTTP request

```
GET https://www.googleapis.com/calendar/v3/users/me/settings
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>maxResults</code></td><td><code>integer</code></td><td>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</td></tr><tr><td><code>pageToken</code></td><td><code>string</code></td><td>Token specifying which result page to return. Optional.</td></tr><tr><td><code>syncToken</code></td><td><code>string</code></td><td>Token obtained from the <code>nextSyncToken</code> field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.<br>If the <code>syncToken</code> expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any <code>syncToken</code>.<br><a href="https://developers.google.com/workspace/calendar/api/guides/sync">Learn more</a> about incremental synchronization.<br>Optional. The default is to return all entries.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar.readonly``https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.settings.readonly`

For more information, see the [authentication and authorization](https://developers.google.com/workspace/guides/configure-oauth-consent) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns a response body with the following structure:

```
{
  "kind": "calendar#settings",
  "etag": etag,
  "nextPageToken": string,
  "nextSyncToken": string,
  "items": [
    settings Resource
  ]
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `kind` | `string` | Type of the collection (" `calendar#settings` "). |  |
| `etag` | `etag` | Etag of the collection. |  |
| `items[]` | `list` | List of user settings. |  |
| `nextPageToken` | `string` | Token used to access the next page of this result. Omitted if no further results are available, in which case `nextSyncToken` is provided. |  |
| `nextSyncToken` | `string` | Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case `nextPageToken` is provided. |  |

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
