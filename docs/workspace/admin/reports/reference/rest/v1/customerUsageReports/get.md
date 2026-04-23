---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/customerUsageReports/get
root: workspace
fetched_at: 2026-04-23T15:24:01.788Z
---

# Method: customerUsageReports.get

Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the [Customers Usage Report guide](../../../../v1/guides/manage-usage-customers.md). For more information about the customer report's parameters, see the [Customers Usage parameters](../../../../v1/appendix/usage/customer.md) reference guides.

### HTTP request

`GET https://admin.googleapis.com/admin/reports/v1/usage/dates/{date}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>string</code></p><p>Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>, <code>yyyy-mm-dd</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID of the customer to retrieve data for.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page. A report with multiple pages has a <code>nextPageToken</code> property in the response. For your follow-on requests getting all of the report's pages, enter the <code>nextPageToken</code> value in the <code>pageToken</code> query string.</p></td></tr><tr><td><code>parameters</code></td><td><p><code>string</code></p><p>The <code>parameters</code> query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include <code>accounts</code>, <code>app_maker</code>, <code>apps_scripts</code>, <code>calendar</code>, <code>chat</code>, <code>classroom</code>, <code>cros</code>, <code>docs</code>, <code>gmail</code>, <code>gplus</code>, <code>device_management</code>, <code>meet</code>, and <code>sites</code>.<br>A <code>parameters</code> query string is in the CSV form of <code>app_name1:param_name1, app_name2:param_name2</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.reports.usage.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
