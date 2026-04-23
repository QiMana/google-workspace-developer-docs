---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/ListUnmappedIdentitiesResponse
root: workspace
fetched_at: 2026-04-23T15:26:13.228Z
---

# ListUnmappedIdentitiesResponse

JSON representation

```
{
  "unmappedIdentities": [
    {
      object (UnmappedIdentity)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>unmappedIdentities[]</code></td><td><p><code>object (<code>UnmappedIdentity</code>)</code></p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

## UnmappedIdentity

JSON representation

```
{
  "externalIdentity": {
    object (Principal)
  },
  "resolutionStatusCode": enum (ExternalIdentityResolutionStatus.Code)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>externalIdentity</code></td><td><p><code>object (<code>Principal</code>)</code></p><p>The resource name for an external user.</p></td></tr><tr><td><code>resolutionStatusCode</code></td><td><p><code>enum (<code>ExternalIdentityResolutionStatus.Code</code>)</code></p><p>The resolution status for the external identity.</p></td></tr></tbody></table>
