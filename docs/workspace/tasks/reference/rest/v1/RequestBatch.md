---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/RequestBatch
root: workspace
fetched_at: 2026-04-23T15:32:00.162Z
---

# RequestBatch

A batch of requests to Execute.

JSON representation

```
{
  "name": string,
  "requests": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the resource this request is for. Some Batch implementations may require a batch to be for only a single resource, for example a single database.</p></td></tr><tr><td><code>requests[]</code></td><td><p>The requests contained in this batch.</p></td></tr></tbody></table>
