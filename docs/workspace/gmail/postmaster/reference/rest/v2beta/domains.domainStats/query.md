---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2beta/domains.domainStats/query
root: workspace
fetched_at: 2026-04-23T15:30:04.734Z
---

# Method: domains.domainStats.query

Retrieves a list of domain statistics for a given domain and time period. Returns statistics only for dates where data is available. Returns PERMISSION\_DENIED if you don't have permission to access DomainStats for the domain.

### HTTP request

`POST https://gmailpostmastertools.googleapis.com/v2beta/{parent=domains/*}/domainStats:query`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent resource name where the stats are queried. Format: domains/{domain}</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "metricDefinitions": [
    {
      object (MetricDefinition)
    }
  ],
  "timeQuery": {
    object (TimeQuery)
  },
  "pageSize": integer,
  "pageToken": string,
  "aggregationGranularity": enum (AggregationGranularity)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>metricDefinitions[]</code></td><td><p><code>object (<code>MetricDefinition</code>)</code></p><p>Required. The specific metrics to query. You can define a custom name for each metric, which will be used in the response.</p></td></tr><tr><td><code>timeQuery</code></td><td><p><code>object (<code>TimeQuery</code>)</code></p><p>Required. The time range or specific dates for which to retrieve the metrics.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of DomainStats resources to return in the response. The server may return fewer than this value. If unspecified, a default value of 10 will be used. The maximum value is 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. The nextPageToken value returned from a previous List request, if any. If the aggregation granularity is DAILY, the page token will be the encoded date + "/" + metric name. If the aggregation granularity is OVERALL, the page token will be the encoded metric name.</p></td></tr><tr><td><code>aggregationGranularity</code></td><td><p><code>enum (<code>AggregationGranularity</code>)</code></p><p>Optional. The granularity at which to aggregate the statistics. If unspecified, defaults to DAILY.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `QueryDomainStatsResponse`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/postmaster`
- `           https://www.googleapis.com/auth/postmaster.traffic.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
