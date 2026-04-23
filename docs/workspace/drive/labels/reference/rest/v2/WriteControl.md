---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/WriteControl
root: workspace
fetched_at: 2026-04-23T15:28:08.846Z
---

# WriteControl

Provides control over how write requests are executed. When not specified, the last write wins.

JSON representation

```
{

  "requiredRevisionId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>control</code>. Determines the revision of the label to write to and how the request should behave if that revision isn't the current revision of the label. <code>control</code> can be only one of the following:</td></tr><tr><td><code>requiredRevisionId</code></td><td><p><code>string</code></p><p>The revision ID of the label that the write request will be applied to. If this isn't the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.</p></td></tr></tbody></table>
