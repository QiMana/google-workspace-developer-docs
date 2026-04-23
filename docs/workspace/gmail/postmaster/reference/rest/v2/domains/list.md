---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/domains/list
root: workspace
fetched_at: 2026-04-23T15:30:03.648Z
---

# Method: domains.list

Retrieves a list of all domains registered by you, along with their corresponding metadata. The order of domains in the response is unspecified and non-deterministic. Newly registered domains will not necessarily be added to the end of this list.

### HTTP request

`GET https://gmailpostmastertools.googleapis.com/v2/domains`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. Requested page size. Server may return fewer domains than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. The nextPageToken value returned from a previous List request, if any.</p></td></tr></tbody></table>

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domains[]</code></td><td><p>The domains that have been registered by the user.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/postmaster`
- `           https://www.googleapis.com/auth/postmaster.domain`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
