---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics
root: apps-script
fetched_at: 2026-04-23T15:18:18.610Z
---

# Method: projects.getMetrics

## Page Summary

- This page describes how to get metrics data for scripts, such as number of executions and active users.
- Metrics data is retrieved using a GET request to the provided URL, specifying the script ID in the path parameters.
- Query parameters allow for specifying the granularity of metrics and applying filters.
- The response body contains usage stats, including the number of active users, total executions, and failed executions, represented as a JSON object.
- Authorization requires the `https://www.googleapis.com/auth/script.metrics` OAuth scope.

Get metrics data for scripts, such as number of executions and active users.

### HTTP request

`GET https://script.googleapis.com/v1/projects/{scriptId}/metrics`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>Required field indicating the script to get metrics for.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>metricsGranularity</code></td><td><p><code>enum (<code>MetricsGranularity</code>)</code></p><p>Required field indicating what granularity of metrics are returned.</p></td></tr><tr><td><code>metricsFilter</code></td><td><p><code>object (<code>MetricsFilter</code>)</code></p><p>Optional field containing filters to apply to the request. This limits the scope of the metrics returned to those specified in the filter.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.

JSON representation

```
{
  "activeUsers": [
    {
      object (MetricsValue)
    }
  ],
  "totalExecutions": [
    {
      object (MetricsValue)
    }
  ],
  "failedExecutions": [
    {
      object (MetricsValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>activeUsers[]</code></td><td><p><code>object (<code>MetricsValue</code>)</code></p><p>Number of active users.</p></td></tr><tr><td><code>totalExecutions[]</code></td><td><p><code>object (<code>MetricsValue</code>)</code></p><p>Number of total executions.</p></td></tr><tr><td><code>failedExecutions[]</code></td><td><p><code>object (<code>MetricsValue</code>)</code></p><p>Number of failed executions.</p></td></tr></tbody></table>

### Authorization Scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/script.metrics`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).

## MetricsGranularity

The granularity of metric to return data for.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED_GRANULARITY</code></td><td>Default metric granularity used to query no metrics.</td></tr><tr><td><code>WEEKLY</code></td><td>Represents weekly metrics.</td></tr><tr><td><code>DAILY</code></td><td>Represents daily metrics over a period of 7 days.</td></tr></tbody></table>

## MetricsFilter

Filter used to reduce the scope of the request.

JSON representation

```
{
  "deploymentId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>Optional field indicating a specific deployment to retrieve metrics from.</p></td></tr></tbody></table>

## MetricsValue

Metrics value that holds number of executions counted.

JSON representation

```
{
  "value": string,
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string</code></p><p>Indicates the number of executions counted.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Required field indicating the start time of the interval.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Required field indicating the end time of the interval.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr></tbody></table>
