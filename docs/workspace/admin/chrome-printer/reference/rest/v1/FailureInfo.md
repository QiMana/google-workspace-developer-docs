---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/FailureInfo
root: workspace
fetched_at: 2026-04-23T15:23:28.930Z
---

# FailureInfo

Info about failures

JSON representation

```
{
  "errorCode": enum (Code),
  "errorMessage": string,

  "printerId": string,
  "printer": {
    object (Printer)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>errorCode</code></td><td><p><code>enum (<code>Code</code>)</code></p><p>Canonical code for why the update failed to apply.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>Failure reason message.</p></td></tr><tr><td colspan="2"><p>Union field <code>failed_entity</code>.</p><p><code>failed_entity</code> can be only one of the following:</p></td></tr><tr><td><code>printerId</code></td><td><p><code>string</code></p><p>Id of a failed printer.</p></td></tr><tr><td><code>printer</code></td><td><p><code>object (<code>Printer</code>)</code></p><p>Failed printer.</p></td></tr></tbody></table>
