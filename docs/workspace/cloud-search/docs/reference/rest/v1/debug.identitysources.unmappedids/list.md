---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/debug.identitysources.unmappedids/list
root: workspace
fetched_at: 2026-04-23T15:26:13.958Z
---

# Method: debug.identitysources.unmappedids.list

## Method: debug.identitysources.unmappedids.list

Lists unmapped user identities for an identity source.

**Note:** This API requires an admin account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/debug/{parent=identitysources/*}/unmappedids`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>The name of the identity source, in the following format: identitysources/{sourceId}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>resolutionStatusCode</code></td><td><p><code>enum (<code>ExternalIdentityResolutionStatus.Code</code>)</code></p><p>Limit users selection to this status.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous List request, if any.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to fetch in a request. Defaults to 100.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `ListUnmappedIdentitiesResponse`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.debug`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
