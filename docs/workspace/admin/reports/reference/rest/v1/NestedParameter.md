---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/NestedParameter
root: workspace
fetched_at: 2026-04-23T15:23:59.646Z
---

# NestedParameter

JSON template for a parameter used in various reports.

JSON representation

```
{
  "name": string,
  "value": string,
  "multiValue": [
    string
  ],
  "intValue": string,
  "multiIntValue": [
    string
  ],
  "boolValue": boolean,
  "multiBoolValue": [
    boolean
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the parameter.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>String value of the parameter.</p></td></tr><tr><td><code>multiValue[]</code></td><td><p><code>string</code></p><p>Multiple string values of the parameter.</p></td></tr><tr><td><code>intValue</code></td><td><p><code>string (int64 format)</code></p><p>Integer value of the parameter.</p></td></tr><tr><td><code>multiIntValue[]</code></td><td><p><code>string (int64 format)</code></p><p>Multiple integer values of the parameter.</p></td></tr><tr><td><code>boolValue</code></td><td><p><code>boolean</code></p><p>Boolean value of the parameter.</p></td></tr><tr><td><code>multiBoolValue[]</code></td><td><p><code>boolean</code></p><p>Multiple boolean values of the parameter.</p></td></tr></tbody></table>
