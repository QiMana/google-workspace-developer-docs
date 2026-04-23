---
source: https://developers.google.com/apps-script/reference/charts/chart
root: apps-script
fetched_at: 2026-04-23T15:19:16.473Z
---

# Class Chart

## Page Summary

- A Chart object can be converted to a static image.
- The `getAs(contentType)` method returns the chart data as a blob converted to a specified content type, adding the appropriate file extension.
- The `getBlob()` method returns the chart data as a blob.
- The `getOptions()` method returns the immutable options for the chart, such as height, colors, and axes.

A Chart object, which can be converted to a static image. For charts embedded in spreadsheets, see `EmbeddedChart`.

## Detailed documentation

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google Services](../../guides/services/quotas.md). Newly created Google Workspace domains might be temporarily subject to stricter quotas.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to. For most blobs, `'application/pdf'` is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of `'image/bmp'`, `'image/gif'`, `'image/jpeg'`, or `'image/png'` are also valid. For a Google Docs document, `'text/markdown'` is also valid. |

#### Return

`Blob` — The data as a blob.

---

### getBlob()

Return the data inside this object as a blob.

#### Return

`Blob` — The data as a blob.

---

### getOptions()

Returns the options for this chart, such as height, colors, and axes.

The returned options are immutable.

#### Return

`ChartOptions` — The options for this chart, such as height, colors, and axes.
