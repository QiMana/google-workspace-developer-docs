---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html
root: apps-script
fetched_at: 2026-04-23T15:20:48.451Z
---

# Class JdbcClob

## Page Summary

- The `JdbcClob` class represents a JDBC Clob and provides methods for working with large character data.
- Methods are available to retrieve the Clob content as an Apps Script Blob or a substring.
- You can get the length of the Clob and find the position of a substring or another Clob within it.
- Methods are provided to write strings or BlobSource data to the Clob at a specified position.
- The Clob can be truncated to a specified length, and resources associated with it can be freed.

A JDBC `Clob`. For documentation of this class, see [`java.sql.Clob`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html) .

## Detailed documentation

### free()

For documentation of this method, see [` java.sql.Clob#truncate(long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#free\(\)).

---

### getAppsScriptBlob()

Gets the content of this JdbcClob as an Apps Script blob.

#### Return

`Blob` — A `Blob` that can be used directly by other Apps Script APIs.

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

### getSubString(position, length)

For documentation of this method, see [`java.sql.Clob#getSubString(long, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#getSubString\(long,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Integer` | The index of the first character of the substring to extract. The first character is at index 1. |
| `length` | `Integer` | The number of consecutive characters to copy (must be 0 or greater). |

#### Return

`String` — The retrieved substring.

---

### length()

For documentation of this method, see [` java.sql.Clob#length()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#length\(\)).

#### Return

`Integer` — The length (in characters) of this clob.

---

### position(search, start)

For documentation of this method, see [`java.sql.Clob#position(Clob, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position\(java.sql.Clob,%20long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `search` | `JdbcClob` | The clob object to search for. |
| `start` | `Integer` | The position at which to begin searching; the first position is 1. |

#### Return

`Integer` — The position at which the specifed clob appears, or -1 if it is not present.

---

### position(search, start)

For documentation of this method, see [`java.sql.Clob#position(String, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position\(java.lang.String,%20long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `search` | `String` | The substring to search for. |
| `start` | `Integer` | The position at which to begin searching; the first position is 1. |

#### Return

`Integer` — The position at which the specifed substring appears, or -1 if it is not present.

---

### setString(position, blobSource)

Convenience method for writing a `JdbcClob` to a clob.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Integer` | The position at which writing to the clob starts; the first position is 1. |
| `blobSource` | `BlobSource` | The blob source to write. |

#### Return

`Integer` — The number of characters written.

---

### setString(position, blobSource, offset, len)

Convenience method for writing a `JdbcClob` to a clob.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Integer` | The position at which writing to the clob starts; the first position is 1. |
| `blobSource` | `BlobSource` | The blob source to write. |
| `offset` | `Integer` | The offset into the provided string where reading characters to write starts. |
| `len` | `Integer` | The number of characters to write. |

#### Return

`Integer` — The number of characters written.

---

### setString(position, value)

For documentation of this method, see [`java.sql.Clob#setString(long, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString\(long,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Integer` | The position at which writing to the clob starts; the first position is 1. |
| `value` | `String` | The string to write. |

#### Return

`Integer` — The number of characters written.

---

### setString(position, value, offset, len)

For documentation of this method, see [`java.sql.Clob#setString(long, String, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString\(long,%20java.lang.String,%20int,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `Integer` | The position at which writing to the clob starts; the first position is 1. |
| `value` | `String` | The string to write. |
| `offset` | `Integer` | The offset into the provided string where reading characters to write starts. |
| `len` | `Integer` | The number of characters to write. |

#### Return

`Integer` — The number of characters written.

---

### truncate(length)

For documentation of this method, see [` java.sql.Clob#truncate(long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#truncate\(long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `length` | `Integer` | The size (in bytes) of this clob after truncation. |
