---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.calendars/list
root: workspace
fetched_at: 2026-04-23T15:23:42.104Z
---

# Method: resources.calendars.list

Retrieves a list of calendar resources for an account.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's customer ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Field(s) to sort results by in either ascending or descending order. Supported fields include <code>resourceId</code>, <code>resourceName</code>, <code>capacity</code>, <code>buildingId</code>, and <code>floorName</code>. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc],...". For example <code>buildingId,
                  capacity desc</code> would return results sorted first by <code>buildingId</code> in ascending order then by <code>capacity</code> in descending order.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify the next page in the list.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>String query used to filter results. Contains one or more search clauses, each with a field, operator, and value. A field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include <code>generatedResourceName</code>, <code>name</code>, <code>buildingId</code>, <code>floorName</code>, <code>capacity</code>, <code>featureInstances.feature.name</code>, <code>resourceEmail</code>, <code>resourceCategory</code>. For example <code>buildingId=US-NYC-9TH AND
                  featureInstances.feature.name:Phone</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Public API: Resources.calendars

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "items": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies this as a collection of CalendarResources. This is always <code>admin#directory#resources#calendars#calendarResourcesList</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>items[]</code></td><td><p>The CalendarResources in this page of results.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/calendar/resource/`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
