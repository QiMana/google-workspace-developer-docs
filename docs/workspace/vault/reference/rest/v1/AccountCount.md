---
source: https://developers.google.com/workspace/vault/reference/rest/v1/AccountCount
root: workspace
fetched_at: 2026-04-23T15:32:04.257Z
---

# AccountCount

## AccountCount

The results count for each account.

JSON representation

```
{
  "account": {
    object (UserInfo)
  },
  "count": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>account</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Account owner.</p></td></tr><tr><td><code>count</code></td><td><p><code>string (int64 format)</code></p><p>The number of results (messages or files) found for this account.</p></td></tr></tbody></table>
