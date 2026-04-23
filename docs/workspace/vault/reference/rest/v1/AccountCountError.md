---
source: https://developers.google.com/workspace/vault/reference/rest/v1/AccountCountError
root: workspace
fetched_at: 2026-04-23T15:32:04.433Z
---

# AccountCountError

## AccountCountError

An error that occurred when querying a specific account

JSON representation

```
{
  "account": {
    object (UserInfo)
  },
  "errorType": enum (ErrorType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>account</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Account owner.</p></td></tr><tr><td><code>errorType</code></td><td><p><code>enum (<code>ErrorType</code>)</code></p><p>Account query error.</p></td></tr></tbody></table>
