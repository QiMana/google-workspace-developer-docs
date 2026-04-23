---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/userUsageReport/get
root: workspace
fetched_at: 2026-04-23T15:24:01.870Z
---

# Method: userUsageReport.get

Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the [User Usage Report guide](../../../../v1/guides/manage-usage-users.md). For more information about the user report's parameters, see the [Users Usage parameters](../../../../v1/appendix/usage/user.md) reference guides.

### HTTP request

`GET https://admin.googleapis.com/admin/reports/v1/usage/users/{userKey or all}/dates/{date}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey or all</code></td><td><p><code>string</code></p><p>Represents the profile ID or the user email for which the data should be filtered. Can be <code>all</code> for all information, or <code>userKey</code> for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call <code>users.list</code> in Directory API with <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/list#body.QUERY_PARAMETERS.show_deleted"><code>showDeleted=true</code></a>, then use the returned <code>ID</code> as the <code>userKey</code>.</p></td></tr><tr><td><code>date</code></td><td><p><code>string</code></p><p>Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>, <code>yyyy-mm-dd</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID of the customer to retrieve data for.</p></td></tr><tr><td><code>filters</code></td><td><p><code>string</code></p><p>The <code>filters</code> query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The <code>filters</code> query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include <code>accounts</code>, <code>chat</code>, <code>docs</code>, and <code>gmail</code>.</p><p>Filters are in the form <code>[application name]:[parameter
                  name][relational operator][parameter value],...</code>.</p><p>In this example, the <code><></code> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E):</p><div><pre><code>GET
https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03
?parameters=accounts:last_login_time
&filters=accounts:last_login_time%3C%3E2010-10-28T10:26:35.000Z</code></pre></div><p>The relational operators include:</p><ul><li><code>==</code> - 'equal to'.</li><li><code><></code> - 'not equal to'. It is URL-encoded (%3C%3E).</li><li><code><</code> - 'less than'. It is URL-encoded (%3C).</li><li><code><=</code> - 'less than or equal to'. It is URL-encoded (%3C=).</li><li><code>></code> - 'greater than'. It is URL-encoded (%3E).</li><li><code>>=</code> - 'greater than or equal to'. It is URL-encoded (%3E=).</li></ul></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer (uint32 format)</code></p><p>Determines how many activity records are shown on each response page. For example, if the request sets <code>maxResults=1</code> and the report has two activities, the report has two pages. The response's <code>nextPageToken</code> property has the token to the second page.<br>The <code>maxResults</code> query string is optional.</p></td></tr><tr><td><code>orgUnitID</code></td><td><p><code>string</code></p><p>ID of the <a href="https://developers.google.com/admin-sdk/directory/v1/guides/manage-org-units">organizational unit</a> to report on. User activity will be shown only for users who belong to the specified organizational unit.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page. A report with multiple pages has a <code>nextPageToken</code> property in the response. In your follow-on request getting the next page of the report, enter the <code>nextPageToken</code> value in the <code>pageToken</code> query string.</p></td></tr><tr><td><code>parameters</code></td><td><p><code>string</code></p><p>The <code>parameters</code> query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers Usage report include <code>accounts</code>, <code>app_maker</code>, <code>apps_scripts</code>, <code>calendar</code>, <code>chat</code>, <code>classroom</code>, <code>cros</code>, <code>docs</code>, <code>gmail</code>, <code>gplus</code>, <code>device_management</code>, <code>meet</code>, and <code>sites</code>.<br>A <code>parameters</code> query string is in the CSV form of <code>app_name1:param_name1, app_name2:param_name2</code>.</p></td></tr><tr><td><code>groupIdFilter</code></td><td><p><code>string</code></p><p>Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456"</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `UsageReports`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.reports.usage.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
