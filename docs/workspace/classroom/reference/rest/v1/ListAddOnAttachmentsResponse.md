---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/ListAddOnAttachmentsResponse
root: workspace
fetched_at: 2026-04-23T15:25:52.880Z
---

# ListAddOnAttachmentsResponse

Response when listing add-on attachments.

JSON representation

```
{
  "addOnAttachments": [
    {
      object (AddOnAttachment)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addOnAttachments[]</code></td><td><p><code>object (<code>AddOnAttachment</code>)</code></p><p>Attachments under the given post.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code><code>pageToken</code></code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>
