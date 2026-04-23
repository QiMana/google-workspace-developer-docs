---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/count
root: workspace
fetched_at: 2026-04-23T15:32:07.737Z
---

# Method: matters.count

Counts the accounts processed by the specified query.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}:count`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "query": {
    object (Query)
  },
  "view": enum (CountResultView)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>query</code></td><td><p><code>object (<code>Query</code>)</code></p><p>The search query.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>CountResultView</code>)</code></p><p>Sets the granularity of the count results.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## CountResultView

The possible granularity level of a count result.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COUNT_RESULT_VIEW_UNSPECIFIED</code></td><td>Default. Same as <strong>TOTAL_COUNT</strong>.</td></tr><tr><td><code>TOTAL_COUNT</code></td><td>Response includes counts of the total accounts, queried accounts, matching accounts, non-queryable accounts, and queried account errors.</td></tr><tr><td><code>ALL</code></td><td>Response includes the same details as <strong>TOTAL_COUNT</strong>, plus additional account breakdown.</td></tr></tbody></table>
