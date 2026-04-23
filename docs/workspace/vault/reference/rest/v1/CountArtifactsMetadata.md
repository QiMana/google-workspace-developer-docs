---
source: https://developers.google.com/workspace/vault/reference/rest/v1/CountArtifactsMetadata
root: workspace
fetched_at: 2026-04-23T15:32:04.782Z
---

# CountArtifactsMetadata

Long running operation metadata for matters.count.

JSON representation

```
{
  "startTime": string,
  "endTime": string,
  "matterId": string,
  "query": {
    object (Query)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Creation time of count operation.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>End time of count operation. Available when operation is done.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID of the associated matter.</p></td></tr><tr><td><code>query</code></td><td><p><code>object (<code>Query</code>)</code></p><p>The search query from the request.</p></td></tr></tbody></table>
