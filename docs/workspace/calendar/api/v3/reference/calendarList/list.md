---
source: https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list
root: workspace
fetched_at: 2026-04-23T15:24:52.769Z
---

# CalendarList: list

Returns the calendars on the user's calendar list. [Try it now](#try-it).

## Request

### HTTP request

```
GET https://www.googleapis.com/calendar/v3/users/me/calendarList
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>maxResults</code></td><td><code>integer</code></td><td>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</td></tr><tr><td><code>minAccessRole</code></td><td><code>string</code></td><td>The minimum access role for the user in the returned entries. Optional. The default is no restriction.<br><br>Acceptable values are:<ul><li>" <code>freeBusyReader</code> ": The user can read free/busy information.</li><li>" <code>owner</code> ": The user can read and modify events and access control lists.</li><li>" <code>reader</code> ": The user can read events that are not private.</li><li>" <code>writer</code> ": The user can read and modify events.</li></ul></td></tr><tr><td><code>pageToken</code></td><td><code>string</code></td><td>Token specifying which result page to return. Optional.</td></tr><tr><td><code>showDeleted</code></td><td><code>boolean</code></td><td>Whether to include deleted calendar list entries in the result. Optional. The default is False.</td></tr><tr><td><code>showHidden</code></td><td><code>boolean</code></td><td>Whether to show hidden entries. Optional. The default is False.</td></tr><tr><td><code>syncToken</code></td><td><code>string</code></td><td>Token obtained from the <code>nextSyncToken</code> field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set <code>showDeleted</code> neither <code>showHidden</code> to False.<br>To ensure client state consistency <code>minAccessRole</code> query parameter cannot be specified together with <code>nextSyncToken</code>.<br>If the <code>syncToken</code> expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any <code>syncToken</code>.<br><a href="https://developers.google.com/workspace/calendar/api/guides/sync">Learn more</a> about incremental synchronization.<br>Optional. The default is to return all entries.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar.readonly``https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.calendarlist``https://www.googleapis.com/auth/calendar.calendarlist.readonly`

For more information, see the [authentication and authorization](https://developers.google.com/workspace/guides/configure-oauth-consent) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns a response body with the following structure:

```
{
  "kind": "calendar#calendarList",
  "etag": etag,
  "nextPageToken": string,
  "nextSyncToken": string,
  "items": [
    calendarList Resource
  ]
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `kind` | `string` | Type of the collection (" `calendar#calendarList` "). |  |
| `etag` | `etag` | ETag of the collection. |  |
| `nextPageToken` | `string` | Token used to access the next page of this result. Omitted if no further results are available, in which case `nextSyncToken` is provided. |  |
| `items[]` | `list` | Calendars that are present on the user's calendar list. |  |
| `nextSyncToken` | `string` | Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case `nextPageToken` is provided. |  |

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
