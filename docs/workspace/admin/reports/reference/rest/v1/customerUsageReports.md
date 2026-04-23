---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/customerUsageReports
root: workspace
fetched_at: 2026-04-23T15:24:01.512Z
---

# REST Resource: customerUsageReports

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

### UsageReport

JSON template for a usage report.

JSON representation

```
{
  "kind": string,
  "date": string,
  "parameters": [
    {
      "intValue": string,
      "name": string,
      "stringValue": string,
      "datetimeValue": string,
      "boolValue": boolean,
      "msgValue": [
        {
          object
        }
      ]
    }
  ],
  "etag": string,
  "entity": {
    "customerId": string,
    "userEmail": string,
    "profileId": string,
    "entityId": string,
    "type": string
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of API resource. For a usage report, the value is <code>admin#reports#usageReport</code>.</p></td></tr><tr><td><code>date</code></td><td><p><code>string</code></p><p>Output only. The date of the report request.</p></td></tr><tr><td><code>parameters[]</code></td><td><p><code>object</code></p><p>Output only. Parameter value pairs for various applications. For the Entity Usage Report parameters and values, see <a href="https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/entities">the Entity Usage parameters reference</a>.</p></td></tr><tr><td><code>parameters[].intValue</code></td><td><p><code>string (int64 format)</code></p><p>Output only. Integer value of the parameter.</p></td></tr><tr><td><code>parameters[].name</code></td><td><p><code>string</code></p><p>The name of the parameter. For the User Usage Report parameter names, see the <a href="https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/customers">User Usage parameters reference</a>.</p></td></tr><tr><td><code>parameters[].stringValue</code></td><td><p><code>string</code></p><p>Output only. String value of the parameter.</p></td></tr><tr><td><code>parameters[].datetimeValue</code></td><td><p><code>string</code></p><p>The <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> formatted value of the parameter, for example <code>2010-10-28T10:26:35.000Z</code>.</p></td></tr><tr><td><code>parameters[].boolValue</code></td><td><p><code>boolean</code></p><p>Output only. Boolean value of the parameter.</p></td></tr><tr><td><code>parameters[].msgValue[]</code></td><td><p><code>object (<code>Struct</code> format)</code></p><p>Output only. Nested message value of the parameter.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>entity</code></td><td><p><code>object</code></p><p>Output only. Information about the type of the item.</p></td></tr><tr><td><code>entity.customerId</code></td><td><p><code>string</code></p><p>Output only. The unique identifier of the customer's account.</p></td></tr><tr><td><code>entity.userEmail</code></td><td><p><code>string</code></p><p>Output only. The user's email address. Only relevant if entity.type = "USER"</p></td></tr><tr><td><code>entity.profileId</code></td><td><p><code>string</code></p><p>Output only. The user's immutable Google Workspace profile identifier.</p></td></tr><tr><td><code>entity.entityId</code></td><td><p><code>string</code></p><p>Output only. Object key. Only relevant if entity.type = "OBJECT" Note: external-facing name of report is "Entities" rather than "Objects".</p></td></tr><tr><td><code>entity.type</code></td><td><p><code>string</code></p><p>Output only. The type of item. The value is <code>user</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Retrieves a report which is a collection of properties and statistics for a specific customer's account.</td></tr></tbody></table>
