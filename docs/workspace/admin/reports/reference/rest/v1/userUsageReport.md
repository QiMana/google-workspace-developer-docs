---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/userUsageReport
root: workspace
fetched_at: 2026-04-23T15:24:02.214Z
---

# REST Resource: userUsageReport

## Resource: UsageReports

JSON representation

```
{
  "kind": string,
  "etag": string,
  "warnings": [
    {
      "code": string,
      "message": string,
      "data": [
        {
          "key": string,
          "value": string
        }
      ]
    }
  ],
  "usageReports": [
    {
      object (UsageReport)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of API resource. For a usage report, the value is <code>admin#reports#usageReports</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>warnings[]</code></td><td><p><code>object</code></p><p>Warnings, if any.</p></td></tr><tr><td><code>warnings[].code</code></td><td><p><code>string</code></p><p>Machine readable code or warning type. The warning code value is <code>200</code>.</p></td></tr><tr><td><code>warnings[].message</code></td><td><p><code>string</code></p><p>The human readable messages for a warning are:</p><ul><li>Data is not available warning - Sorry, data for date yyyy-mm-dd for application " <code>application
                  name</code> " is not available.</li><li>Partial data is available warning - Data for date yyyy-mm-dd for application " <code>application name</code> " is not available right now, please try again after a few hours.</li></ul></td></tr><tr><td><code>warnings[].data[]</code></td><td><p><code>object</code></p><p>Key-value pairs to give detailed information on the warning.</p></td></tr><tr><td><code>warnings[].data[].key</code></td><td><p><code>string</code></p><p>Key associated with a key-value pair to give detailed information on the warning.</p></td></tr><tr><td><code>warnings[].data[].value</code></td><td><p><code>string</code></p><p>Value associated with a key-value pair to give detailed information on the warning.</p></td></tr><tr><td><code>usageReports[]</code></td><td><p><code>object (<code>UsageReport</code>)</code></p><p>Various application parameter records.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to specify next page. A report with multiple pages has a <code>nextPageToken</code> property in the response. For your follow-on requests getting all of the report's pages, enter the <code>nextPageToken</code> value in the <code>pageToken</code> query string.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Retrieves a report which is a collection of properties and statistics for a set of users with the account.</td></tr></tbody></table>
