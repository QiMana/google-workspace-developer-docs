---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/QueryDomainStatsResponse
root: workspace
fetched_at: 2026-04-23T15:30:02.402Z
---

# QueryDomainStatsResponse

Response message for QueryDomainStats.

JSON representation

```
{
  "domainStats": [
    {
      object (DomainStat)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

## DomainStat

Email statistics for a domain for a specified time period or date.

JSON representation

```
{
  "name": string,
  "value": {
    object (StatisticValue)
  },
  "date": {
    object (Date)
  },
  "metric": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. The resource name of the DomainStat resource. Format: domains/{domain}/domainStats/{domain_stat} The <code>{domain_stat}</code> segment is an opaque, server-generated ID. We recommend using the <code>metric</code> field to identify queried metrics instead of parsing the name.</p></td></tr><tr><td><code>value</code></td><td><p><code>object (<code>StatisticValue</code>)</code></p><p>The value of the corresponding metric.</p></td></tr><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Optional. The specific date for these stats, if granularity is DAILY. This field is populated if the QueryDomainStatsRequest specified a DAILY aggregation granularity.</p></td></tr><tr><td><code>metric</code></td><td><p><code>string</code></p><p>The user-defined name from MetricDefinition.name in the request, used to correlate this result with the requested metric.</p></td></tr></tbody></table>

## StatisticValue

The actual value of a statistic.

JSON representation

```
{

  "intValue": string,
  "doubleValue": number,
  "stringValue": string,
  "floatValue": number,
  "stringList": {
    object (StringList)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>value</code>. The specific value of the statistic. <code>value</code> can be only one of the following:</td></tr><tr><td><code>intValue</code></td><td><p><code>string (int64 format)</code></p><p>Integer value.</p></td></tr><tr><td><code>doubleValue</code></td><td><p><code>number</code></p><p>Double value.</p></td></tr><tr><td><code>stringValue</code></td><td><p><code>string</code></p><p>String value.</p></td></tr><tr><td><code>floatValue</code></td><td><p><code>number</code></p><p>Float value.</p></td></tr><tr><td><code>stringList</code></td><td><p><code>object (<code>StringList</code>)</code></p><p>List of string values.</p></td></tr></tbody></table>

## StringList

Represents a list of strings.

JSON representation

```
{
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>string</code></p><p>The string values.</p></td></tr></tbody></table>
