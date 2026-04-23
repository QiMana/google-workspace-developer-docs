---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/charts
root: workspace
fetched_at: 2026-04-23T15:31:50.902Z
---

# Charts

### SheetsChart

A kind representing a linked chart embedded from Google Sheets.

JSON representation

```
{
  "spreadsheetId": string,
  "chartId": integer,
  "contentUrl": string,
  "sheetsChartProperties": {
    object (SheetsChartProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the Google Sheets spreadsheet that contains the source chart.</p></td></tr><tr><td><code>chartId</code></td><td><p><code>integer</code></p><p>The ID of the specific chart in the Google Sheets spreadsheet that is embedded.</p></td></tr><tr><td><code>contentUrl</code></td><td><p><code>string</code></p><p>The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.</p></td></tr><tr><td><code>sheetsChartProperties</code></td><td><p><code>object (<code>SheetsChartProperties</code>)</code></p><p>The properties of the Sheets chart.</p></td></tr></tbody></table>

### SheetsChartProperties

The properties of the `SheetsChart`.

JSON representation

```
{

  "chartImageProperties": {
    object (ImageProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of Sheets chart properties. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>chartImageProperties</code></td><td><p><code>object (<code>ImageProperties</code>)</code></p><p>The properties of the embedded chart image.</p></td></tr></tbody></table>
