---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v1/domains.trafficStats/list
root: workspace
fetched_at: 2026-04-23T15:30:02.151Z
---

# Method: domains.trafficStats.list

List traffic statistics for all available days. Returns PERMISSION\_DENIED if user does not have permission to access TrafficStats for the domain.

### HTTP request

`GET https://gmailpostmastertools.googleapis.com/v1/{parent=domains/*}/trafficStats`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>The resource name of the domain whose traffic statistics we'd like to list. It should have the form <code>domains/{domain_name}</code>, where domain_name is the fully qualified domain name.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>startDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The earliest day of the metrics to retrieve inclusive. startDate and endDate must both be specified or both left unspecified. If only one is specified, or endDate is earlier in time than startDate, then INVALID_ARGUMENT is returned.</p></td></tr><tr><td><code>endDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The most recent day of the metrics to retrieve exclusive. startDate and endDate must both be specified or both left unspecified. If only one is specified, or endDate is earlier in time than startDate, then INVALID_ARGUMENT is returned.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous List request, if any. This is the value of <code>ListTrafficStatsResponse.next_page_token</code> returned from the previous call to <code>trafficStats.list</code> method.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for trafficStats.list.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "trafficStats": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/postmaster.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:

- A full date, with non-zero year, month, and day values.
- A month and day, with a zero year (for example, an anniversary).
- A year on its own, with a zero month and a zero day.
- A year and month, with a zero day (for example, a credit card expiration date).

Related types:

- `google.type.TimeOfDay`
- `google.type.DateTime`
- `google.protobuf.Timestamp`

JSON representation

```
{
  "year": integer,
  "month": integer,
  "day": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>year</code></td><td><p><code>integer</code></p><p>Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.</p></td></tr><tr><td><code>month</code></td><td><p><code>integer</code></p><p>Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.</p></td></tr><tr><td><code>day</code></td><td><p><code>integer</code></p><p>Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.</p></td></tr></tbody></table>
