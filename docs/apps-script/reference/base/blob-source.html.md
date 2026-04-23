---
source: https://developers.google.com/apps-script/reference/base/blob-source.html
root: apps-script
fetched_at: 2026-04-23T15:18:46.354Z
---

# Interface BlobSource

## Page Summary

- The `BlobSource` interface is for objects that can export their data as a `Blob`.
- Numerous Apps Script classes implement the `BlobSource` interface, including `Blob`, `Chart`, `File`, and `Spreadsheet`.
- The `BlobSource` interface includes methods like `getAs(contentType)` to get data as a blob with a specified content type and `getBlob()` to get the data as a blob.
- The `getAs(contentType)` method allows converting data to different MIME types, such as `application/pdf` or various image formats, with filename extension handling.

Interface for objects that can export their data as a .

### Implementing classes

## Detailed documentation

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google Services](../../guides/services/quotas.md). Newly created Google Workspace domains might be temporarily subject to stricter quotas.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to. For most blobs, `'application/pdf'` is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of `'image/bmp'`, `'image/gif'`, `'image/jpeg'`, or `'image/png'` are also valid. For a Google Docs document, `'text/markdown'` is also valid. |

#### Return

---

### getBlob()

Return the data inside this object as a blob.
