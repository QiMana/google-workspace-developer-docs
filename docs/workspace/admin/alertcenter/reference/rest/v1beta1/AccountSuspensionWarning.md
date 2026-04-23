---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/AccountSuspensionWarning
root: workspace
fetched_at: 2026-04-23T15:23:22.585Z
---

# AccountSuspensionWarning

A warning that the customer's account is about to be suspended.

JSON representation

```
{
  "state": enum (AccountSuspensionWarningState),
  "suspensionDetails": [
    {
      object (AccountSuspensionDetails)
    }
  ],
  "appealWindow": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>state</code></td><td><p><code>enum (<code>AccountSuspensionWarningState</code>)</code></p><p>Account suspension warning state.</p></td></tr><tr><td><code>suspensionDetails[]</code></td><td><p><code>object (<code>AccountSuspensionDetails</code>)</code></p><p>Details about why an account is being suspended.</p></td></tr><tr><td><code>appealWindow</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state.</p></td></tr></tbody></table>

## AccountSuspensionDetails

Details about why an account is receiving an account suspension warning.

JSON representation

```
{
  "abuseReason": enum (AccountSuspensionAbuseReason),
  "productName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>abuseReason</code></td><td><p><code>enum (<code>AccountSuspensionAbuseReason</code>)</code></p><p>The reason why this account is receiving an account suspension warning.</p></td></tr><tr><td><code>productName</code></td><td><p><code>string</code></p><p>The name of the product being abused.</p><p>This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other"</p></td></tr></tbody></table>
