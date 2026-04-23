---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/ModifiedDateBehavior
root: workspace
fetched_at: 2026-04-23T15:27:47.488Z
---

# ModifiedDateBehavior

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>fromBody</code></td><td>Set <code>modifiedDate</code> to the value provided in the body of the request. No change if no value was provided.</td></tr><tr><td><code>fromBodyIfNeeded</code></td><td>Set <code>modifiedDate</code> to the value provided in the body of the request depending on other contents of the update.</td></tr><tr><td><code>fromBodyOrNow</code></td><td>Set modifiedDate to the value provided in the body of the request, or to the current time if no value was provided.</td></tr><tr><td><code>noChange</code></td><td>Maintain the previous value of <code>modifiedDate</code>.</td></tr><tr><td><code>now</code></td><td>Set <code>modifiedDate</code> to the current time.</td></tr><tr><td><code>nowIfNeeded</code></td><td>Set <code>modifiedDate</code> to the current time depending on contents of the update.</td></tr></tbody></table>
