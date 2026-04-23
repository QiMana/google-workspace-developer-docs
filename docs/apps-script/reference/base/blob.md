---
source: https://developers.google.com/apps-script/reference/base/blob
root: apps-script
fetched_at: 2026-04-23T15:18:44.614Z
---

# Class Blob

## Page Summary

- A Blob is a data interchange object used in Apps Script services.
- Blobs have methods for copying, converting, and retrieving data in various formats.
- You can get and set the byte data, content type, and name of a Blob.
- There are methods to handle data as strings with specified encoding and check if the Blob is a Google Workspace file.

A data interchange object for Apps Script services.

## Detailed documentation

### copyBlob()

Returns a copy of this blob.

#### Return

`Blob` — The new copy.

---

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

### getBytes()

Gets the data stored in this blob.

#### Return

`Byte[]` — The stored bytes.

---

### getContentType()

Gets the content type of the bytes in this blob.

#### Return

`String|null` — The content type of this data, if known, or `null`.

---

### getDataAsString()

Gets the data of this blob as a String with UTF-8 encoding.

#### Return

`String` — The data as a string.

---

### getDataAsString(charset)

Gets the data of this blob as a string with the specified encoding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `charset` | `String` | The charset to use in encoding the data in this blob as a string. |

#### Return

`String` — The data as a string.

---

### getName()

Gets the name of this blob.

#### Return

`String|null` — The name of this data, if known, or `null`.

---

### isGoogleType()

Returns whether this blob is a Google Workspace file (Sheets, Docs, etc.).

#### Return

`Boolean` — `true` if this blob is a Google Workspace file; `false` if not.

---

### setBytes(data)

Sets the data stored in this blob.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `Byte[]` | The new data. |

#### Return

`Blob` — This blob, for chaining.

---

### setContentType(contentType)

Sets the content type of the bytes in this blob.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The new contentType. |

#### Return

`Blob` — This blob, for chaining.

---

### setContentTypeFromExtension()

Sets the content type of the bytes in this blob based on the file extension. The contentType is `null` if it cannot be guessed from its extension.

#### Return

`Blob` — This blob, for chaining.

---

### setDataFromString(string)

Sets the data of this blob from a string with UTF-8 encoding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `string` | `String` | The string data. |

#### Return

`Blob` — This blob, for chaining.

---

### setDataFromString(string, charset)

Sets the data of this blob from a string with the specified encoding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `string` | `String` | The string data. |
| `charset` | `String` | The charset to use in interpreting the string as bytes. |

#### Return

`Blob` — This blob, for chaining.

---

### setName(name)

Sets the name of this blob.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The new name. |

#### Return

`Blob` — This blob, for chaining.

## Deprecated methods

### getAllBlobs()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the blobs that are contained within this (possibly composite) blob.

#### Return

`Blob[]` — The blobs contained within the blob.
