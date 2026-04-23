---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.calendars/update
root: workspace
fetched_at: 2026-04-23T15:23:41.702Z
---

# Method: resources.calendars.update

Updates a calendar resource.  
  
This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.

### HTTP request

`PUT https://admin.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's customer ID.</p></td></tr><tr><td><code>calendarResourceId</code></td><td><p><code>string</code></p><p>The unique ID of the calendar resource to update.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/calendar/resource/`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
