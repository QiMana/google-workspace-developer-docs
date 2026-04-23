---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/AppSettingsChanged
root: workspace
fetched_at: 2026-04-23T15:23:23.006Z
---

# AppSettingsChanged

Alerts from AppSettingsChanged bucket Rules configured by Admin which contain the following rules:

- Calendar settings changed
- Drive settings changed
- Email settings changed
- Mobile settings changed

JSON representation

```
{
  "alertDetails": string,
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>alertDetails</code></td><td><p><code>string (bytes format)</code></p><p>Any other associated alert details, for example, AlertConfiguration.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Rule name</p></td></tr></tbody></table>
