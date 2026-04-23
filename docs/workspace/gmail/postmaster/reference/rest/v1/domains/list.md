---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v1/domains/list
root: workspace
fetched_at: 2026-04-23T15:30:01.444Z
---

# Method: domains.list

Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.

### HTTP request

`GET https://gmailpostmastertools.googleapis.com/v1/domains`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous List request, if any. This is the value of <code>ListDomainsResponse.next_page_token</code> returned from the previous call to <code>domains.list</code> method.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for domains.list.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "domains": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domains[]</code></td><td><p>The list of domains.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/postmaster.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
