---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/drivereference
root: workspace
fetched_at: 2026-04-23T15:27:32.149Z
---

# DriveReference

## DriveReference

A lightweight reference to a shared drive.

JSON representation

```
{
  "name": string,
  "title": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource name of the shared drive. The format is <code>COLLECTION_ID/DRIVE_ID</code>. Clients should not assume a specific collection ID for this resource name.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the shared drive.</p></td></tr></tbody></table>
