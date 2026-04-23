---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/domainStats/batchQuery
root: workspace
fetched_at: 2026-04-23T15:30:02.734Z
---

# Method: domainStats.batchQuery

Executes a batch of QueryDomainStats requests for multiple domains. Returns PERMISSION\_DENIED if you don't have permission to access DomainStats for any of the requested domains.

### HTTP request

`POST https://gmailpostmastertools.googleapis.com/v2/domainStats:batchQuery`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (QueryDomainStatsRequest)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>QueryDomainStatsRequest</code>)</code></p><p>Required. A list of individual query requests. Each request can be for a different domain. A maximum of 100 requests can be included in a single batch.</p></td></tr></tbody></table>

### Response body

Response message for domainStats.batchQuery.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "results": [
    {
      object (BatchQueryDomainStatsResult)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>results[]</code></td><td><p><code>object (<code>BatchQueryDomainStatsResult</code>)</code></p><p>A list of responses, one for each query in the BatchQueryDomainStatsRequest. The order of responses will correspond to the order of requests.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/postmaster`
- `           https://www.googleapis.com/auth/postmaster.traffic.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## QueryDomainStatsRequest

Request message for QueryDomainStats.

JSON representation

```
{
  "parent": string,
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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent resource name where the stats are queried. Format: domains/{domain}</p></td></tr><tr><td><code>metricDefinitions[]</code></td><td><p><code>object (<code>MetricDefinition</code>)</code></p><p>Required. The specific metrics to query. You can define a custom name for each metric, which will be used in the response.</p></td></tr><tr><td><code>timeQuery</code></td><td><p><code>object (<code>TimeQuery</code>)</code></p><p>Required. The time range or specific dates for which to retrieve the metrics.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of DomainStats resources to return in the response. The server may return fewer than this value. If unspecified, a default value of 10 will be used. The maximum value is 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. The nextPageToken value returned from a previous List request, if any. If the aggregation granularity is DAILY, the page token will be the encoded date + "/" + metric name. If the aggregation granularity is OVERALL, the page token will be the encoded metric name.</p></td></tr><tr><td><code>aggregationGranularity</code></td><td><p><code>enum (<code>AggregationGranularity</code>)</code></p><p>Optional. The granularity at which to aggregate the statistics. If unspecified, defaults to DAILY.</p></td></tr></tbody></table>

## BatchQueryDomainStatsResult

Represents the result of a single QueryDomainStatsRequest within a batch.

JSON representation

```
{

  "response": {
    object (QueryDomainStatsResponse)
  },
  "error": {
    object (Status)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>result</code>. The result of the individual query. <code>result</code> can be only one of the following:</td></tr><tr><td><code>response</code></td><td><p><code>object (<code>QueryDomainStatsResponse</code>)</code></p><p>The successful response for the individual query.</p></td></tr><tr><td><code>error</code></td><td><p><code>object (<code>Status</code>)</code></p><p>The error status if the individual query failed.</p></td></tr></tbody></table>

## Status

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

JSON representation

```
{
  "code": integer,
  "message": string,
  "details": [
    {
      "@type": string,
      field1: ...,
      ...
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>integer</code></p><p>The status code, which should be an enum value of <code>google.rpc.Code</code>.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the <code>google.rpc.Status.details</code> field, or localized by the client.</p></td></tr><tr><td><code>details[]</code></td><td><p><code>object</code></p><p>A list of messages that carry the error details. There is a common set of message types for APIs to use.</p></td></tr></tbody></table>
