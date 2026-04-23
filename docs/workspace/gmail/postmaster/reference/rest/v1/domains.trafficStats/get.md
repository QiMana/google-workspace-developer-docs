---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v1/domains.trafficStats/get
root: workspace
fetched_at: 2026-04-23T15:30:00.727Z
---

# Method: domains.trafficStats.get

Get traffic statistics for a domain on a specific date. Returns PERMISSION\_DENIED if user does not have permission to access TrafficStats for the domain.

### HTTP request

`GET https://gmailpostmastertools.googleapis.com/v1/{name=domains/*/trafficStats/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/postmaster.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
