---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/Form
root: workspace
fetched_at: 2026-04-23T15:25:52.637Z
---

# Form

Google Forms item.

JSON representation

```
{
  "formUrl": string,
  "responseUrl": string,
  "title": string,
  "thumbnailUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>formUrl</code></td><td><p><code>string</code></p><p>URL of the form.</p></td></tr><tr><td><code>responseUrl</code></td><td><p><code>string</code></p><p>URL of the form responses document. Only set if responses have been recorded and only when the requesting user is an editor of the form.</p><p>Read-only.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the Form.</p><p>Read-only.</p></td></tr><tr><td><code>thumbnailUrl</code></td><td><p><code>string</code></p><p>URL of a thumbnail image of the Form.</p><p>Read-only.</p></td></tr></tbody></table>
