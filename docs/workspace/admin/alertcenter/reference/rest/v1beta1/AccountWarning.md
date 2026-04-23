---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/AccountWarning
root: workspace
fetched_at: 2026-04-23T15:23:23.085Z
---

# AccountWarning

Alerts for user account warning events.

JSON representation

```
{
  "email": string,
  "loginDetails": {
    object (LoginDetails)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>Required. The email of the user that this event belongs to.</p></td></tr><tr><td><code>loginDetails</code></td><td><p><code>object (<code>LoginDetails</code>)</code></p><p>Optional. Details of the login action associated with the warning event. This is only available for:</p><ul><li>Suspicious login</li><li>Suspicious login (less secure app)</li><li>Suspicious programmatic login</li><li>User suspended (suspicious activity)</li></ul></td></tr></tbody></table>

## LoginDetails

JSON representation

```
{
  "loginTime": string,
  "ipAddress": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>loginTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts.</p></td></tr><tr><td><code>ipAddress</code></td><td><p><code>string</code></p><p>Optional. The human-readable IP address (for example, <code>11.22.33.44</code>) that is associated with the warning event.</p></td></tr></tbody></table>
