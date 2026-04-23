---
source: https://developers.google.com/apps-script/reference/url-fetch/http-response
root: apps-script
fetched_at: 2026-04-23T15:22:07.843Z
---

# Class HTTPResponse

## Page Summary

- The HTTPResponse class provides methods to access specific information from HTTP responses.
- You can retrieve headers in different formats, get the response body as a blob or byte array, and get the content as a string with or without specifying a charset.
- The response code can also be retrieved to check the HTTP status of the response.
- The UrlFetchApp is related to the HTTPResponse class.

This class allows users to access specific information on HTTP responses.

#### See also

- `UrlFetchApp`

## Detailed documentation

### getAllHeaders()

Returns an attribute/value map of headers for the HTTP response, with headers that have multiple values returned as arrays.

```
// The code below logs the HTTP headers from the response
// received when fetching the Google home page.
const response = UrlFetchApp.fetch('http://www.google.com/');
Logger.log(response.getAllHeaders());
```

#### Return

`Object` — A JavaScript key/value map of HTTP headers.

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

### getBlob()

Return the data inside this object as a blob.

#### Return

`Blob` — The data as a blob.

---

### getContent()

Gets the raw binary content of an HTTP response.

```
// The code below logs the value of the first byte of the Google home page.
const response = UrlFetchApp.fetch('http://www.google.com/');
Logger.log(response.getContent()[0]);
```

#### Return

`Byte[]` — The content as a raw binary array.

---

### getContentText()

Gets the content of an HTTP response encoded as a string.

```
// The code below logs the HTML code of the Google home page.
const response = UrlFetchApp.fetch('http://www.google.com/');
Logger.log(response.getContentText());
```

#### Return

`String` — The content of the HTTP response, as a string.

---

### getContentText(charset)

Returns the content of an HTTP response encoded as a string of the given charset.

```
// The code below logs the HTML code of the Google home page with the UTF-8
// charset.
const response = UrlFetchApp.fetch('http://www.google.com/');
Logger.log(response.getContentText('UTF-8'));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `charset` | `String` | A string representing the charset to be used for encoding the HTTP response content. |

#### Return

`String` — The content of the HTTP response, encoded using the given charset.

---

### getHeaders()

Returns an attribute/value map of headers for the HTTP response.

```
// The code below logs the HTTP headers from the response
// received when fetching the Google home page.
const response = UrlFetchApp.fetch('http://www.google.com/');
Logger.log(response.getHeaders());
```

#### Return

`Object` — A JavaScript key/value map of HTTP headers.

---

### getResponseCode()

Get the HTTP status code (200 for OK, etc.) of an HTTP response.

```
// The code below logs the HTTP status code from the response received
// when fetching the Google home page.
// It should be 200 if the request succeeded.
const response = UrlFetchApp.fetch('http://www.google.com/');
Logger.log(response.getResponseCode());
```

#### Return

`Integer` — The HTTP response code (for example, 200 for OK).
