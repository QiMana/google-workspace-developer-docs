---
source: https://developers.google.com/workspace/vault/reference/rest/v1/WaitOperationRequest
root: workspace
fetched_at: 2026-04-23T15:32:05.945Z
---

# WaitOperationRequest

The request message for `Operations.WaitOperation`.

JSON representation

```
{
  "name": string,
  "timeout": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the operation resource to wait on.</p></td></tr><tr><td><code>timeout</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.</p><p>A duration in seconds with up to nine fractional digits, ending with ' <code>s</code> '. Example: <code>"3.5s"</code>.</p></td></tr></tbody></table>
