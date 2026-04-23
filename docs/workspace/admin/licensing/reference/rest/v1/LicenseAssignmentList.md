---
source: https://developers.google.com/workspace/admin/licensing/reference/rest/v1/LicenseAssignmentList
root: workspace
fetched_at: 2026-04-23T15:23:58.100Z
---

# LicenseAssignmentList

JSON representation

```
{
  "kind": string,
  "etag": string,
  "items": [
    {
      object (LicenseAssignment)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a collection of LicenseAssignments.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>LicenseAssignment</code>)</code></p><p>The LicenseAssignments in this page of results.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The <code>maxResults</code> query string is related to the <code>nextPageToken</code> since <code>maxResults</code> determines how many entries are returned on each next page.</p></td></tr></tbody></table>
