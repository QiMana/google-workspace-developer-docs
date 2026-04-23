---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/Attachment
root: workspace
fetched_at: 2026-04-23T15:23:22.834Z
---

# Attachment

Attachment with application-specific information about an alert.

JSON representation

```
{

  "csv": {
    object (Csv)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>data</code>. Data type of the attachment. <code>data</code> can be only one of the following:</td></tr><tr><td><code>csv</code></td><td><p><code>object (<code>Csv</code>)</code></p><p>A CSV file attachment.</p></td></tr></tbody></table>

## Csv

A representation of a CSV file attachment, as a list of column headers and a list of data rows.

JSON representation

```
{
  "headers": [
    string
  ],
  "dataRows": [
    {
      object (CsvRow)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>headers[]</code></td><td><p><code>string</code></p><p>The list of headers for data columns in a CSV file.</p></td></tr><tr><td><code>dataRows[]</code></td><td><p><code>object (<code>CsvRow</code>)</code></p><p>The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.</p></td></tr></tbody></table>

## CsvRow

A representation of a single data row in a CSV file.

JSON representation

```
{
  "entries": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>entries[]</code></td><td><p><code>string</code></p><p>The data entries in a CSV file row, as a string array rather than a single comma-separated string.</p></td></tr></tbody></table>
