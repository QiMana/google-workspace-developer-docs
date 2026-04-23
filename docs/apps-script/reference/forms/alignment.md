---
source: https://developers.google.com/apps-script/reference/forms/alignment
root: apps-script
fetched_at: 2026-04-23T15:20:10.886Z
---

# Enum Alignment

## Page Summary

- Alignment is an enum in Google Apps Script's FormApp representing supported image alignment types.
- Alignment types can be accessed through `FormApp.Alignment`.
- Specific alignment options include LEFT, CENTER, and RIGHT, each used to position images accordingly within a form.
- The provided code example demonstrates how to open a form, fetch an image, and set its alignment to CENTER using the `setAlignment` method.

An enum representing the supported types of image alignment. Alignment types can be accessed from `FormApp.Alignment`.

To call an enum, you call its parent class, name, and property. For example, ` FormApp.Alignment.LEFT`.

```
// Open a form by ID and add a new image item with alignment
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
form.addImageItem().setImage(img).setAlignment(FormApp.Alignment.CENTER);
```
