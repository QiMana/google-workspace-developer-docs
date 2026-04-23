---
source: https://developers.google.com/apps-script/reference/base/mime-type
root: apps-script
fetched_at: 2026-04-23T15:18:45.706Z
---

# Enum MimeType

## Page Summary

- The MimeType enumeration provides access to MIME-type declarations without explicit string typing.
- Methods expecting a MIME type as a string also accept values from the MimeType enumeration if the underlying MIME type is supported.
- MimeType includes properties for various file types such as Google Docs, Images (PNG, JPEG), PDFs, Text files, and Microsoft Office files.

An enumeration that provides access to MIME-type declarations without typing the strings explicitly. Methods that expect a MIME type rendered as a string (for example, ` 'image/png'`) also accept any of the values below, so long as the method supports the underlying MIME type.

```
// Use MimeType enum to log the name of every Google Doc in the user's Drive.
const docs = DriveApp.getFilesByType(MimeType.GOOGLE_DOCS);
while (docs.hasNext()) {
  const doc = docs.next();
  Logger.log(doc.getName());
}

// Use plain string to log the size of every PNG in the user's Drive.
const pngs = DriveApp.getFilesByType('image/png');
while (pngs.hasNext()) {
  const png = pngs.next();
  Logger.log(png.getSize());
}
```
