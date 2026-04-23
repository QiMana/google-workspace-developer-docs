---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/filecomment
root: workspace
fetched_at: 2026-04-23T15:27:31.728Z
---

# FileComment

## FileComment

A comment on a file.

JSON representation

```
{
  "legacyCommentId": string,
  "legacyDiscussionId": string,
  "linkToDiscussion": string,
  "parent": {
    object (DriveItem)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>legacyCommentId</code></td><td><p><code>string</code></p><p>The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see <a href="https://developers.google.com/workspace/drive/v3/reference/comments/get">https://developers.google.com/workspace/drive/v3/reference/comments/get</a></p></td></tr><tr><td><code>parent</code></td><td><p><code>object (<code>DriveItem</code>)</code></p><p>The Drive item containing this comment.</p></td></tr></tbody></table>
