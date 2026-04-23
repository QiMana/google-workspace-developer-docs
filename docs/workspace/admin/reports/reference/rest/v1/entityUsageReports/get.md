---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/entityUsageReports/get
root: workspace
fetched_at: 2026-04-23T15:24:01.675Z
---

# Method: entityUsageReports.get

Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the [Entities Usage Report guide](https://developers.google.com/admin-sdk/reports/v1/guides/manage-usage-entities). For more information about the entities report's parameters, see the [Entities Usage parameters](https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/entities) reference guides.

### HTTP request

`GET https://admin.googleapis.com/admin/reports/v1/usage/{entityType}/{entityKey or all}/dates/{date}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>entityType</code></td><td><p><code>enum (<code>EntityType</code>)</code></p><p>Represents the type of entity for the report.</p></td></tr><tr><td><code>entityKey or all</code></td><td><p><code>string</code></p><p>Represents the key of the object to filter the data with. It is a string which can take the value <code>all</code> to get activity events for all users, or any other value for an app-specific entity. For details on how to obtain the <code>entityKey</code> for a particular <code>entityType</code>, see the <a href="https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/entities">Entities Usage parameters</a> reference guides.</p></td></tr><tr><td><code>date</code></td><td><p><code>string</code></p><p>Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>, <code>yyyy-mm-dd</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID of the customer to retrieve data for.</p></td></tr><tr><td><code>filters</code></td><td><p><code>string</code></p><p>The <code>filters</code> query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The <code>filters</code> query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include <code>accounts</code>, <code>docs</code>, and <code>gmail</code>.</p><p>Filters are in the form <code>[application name]:[parameter
                  name][relational operator][parameter value],...</code>.</p><p>In this example, the <code><></code> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E):</p><div><pre><code>GET
https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01
?parameters=gplus:community_name,gplus:num_total_members
&filters=gplus:num_total_members%3C%3E0</code></pre></div><p>The relational operators include:</p><ul><li><code>==</code> - 'equal to'.</li><li><code><></code> - 'not equal to'. It is URL-encoded (%3C%3E).</li><li><code><</code> - 'less than'. It is URL-encoded (%3C).</li><li><code><=</code> - 'less than or equal to'. It is URL-encoded (%3C=).</li><li><code>></code> - 'greater than'. It is URL-encoded (%3E).</li><li><code>>=</code> - 'greater than or equal to'. It is URL-encoded (%3E=).</li></ul>Filters can only be applied to numeric parameters.</td></tr><tr><td><code>maxResults</code></td><td><p><code>integer (uint32 format)</code></p><p>Determines how many activity records are shown on each response page. For example, if the request sets <code><span>maxResults=1</span></code> and the report has two activities, the report has two pages. The response's <code><span>nextPageToken</span></code> property has the token to the second page.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page. A report with multiple pages has a <code>nextPageToken</code> property in the response. In your follow-on request getting the next page of the report, enter the <code>nextPageToken</code> value in the <code>pageToken</code> query string.</p></td></tr><tr><td><code>parameters</code></td><td><p><code>string</code></p><p>The <code>parameters</code> query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only <code>gplus</code>.<br>A <code>parameter</code> query string is in the CSV form of <code>[app_name1:param_name1],
                  [app_name2:param_name2]...</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `UsageReports`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.reports.usage.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## EntityType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>gplus_communities</code></td><td>Returns a report on Google+ communities.</td></tr></tbody></table>
