---
source: https://developers.google.com/apps-script/reference/content/text-output
root: apps-script
fetched_at: 2026-04-23T15:19:26.865Z
---

# Class TextOutput

## Page Summary

- TextOutput is an object served from a script that displays content on googleusercontent.com due to security limitations, rather than directly returning text to the browser.
- You can create a TextOutput with simple text content using ContentService.createTextOutput() in a function like doGet().
- TextOutput supports serving various content types including JSON, RSS, and XML through methods on ContentService.
- Key methods include appending, clearing, downloading as a file, getting/setting content, and getting/setting the mime type of the served content.

A TextOutput object that can be served from a script.

Due to security considerations, scripts cannot directly return text content to a browser. Instead, the browser is redirected to googleusercontent.com, which will display it without any further sanitization or manipulation.

You can return text content like this:

```
function doGet() {
  return ContentService.createTextOutput('hello world!');
}
```

There are also methods to serve JSON, RSS, and XML as TextOutputs; see the corresponding methods on `ContentService`.

## Detailed documentation

### append(addedContent)

Appends new content to the content that will be served.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `addedContent` | `String` | the content to append |

#### Return

`TextOutput` — this TextOutput itself, useful for chaining

---

### clear()

Clears the current content.

#### Return

`TextOutput` — this TextOutput itself, useful for chaining

---

### downloadAsFile(filename)

Tells browsers to download rather than display this content.

Some browsers will ignore this setting. Setting this to null will clear it back to the default behavior of displaying rather than downloading.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `filename` | `String` | the filename to tell the browser to use |

#### Return

`TextOutput` — the TextOutput object, useful for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the filename contains illegal characters

---

### getContent()

Gets the content that will be served.

#### Return

`String` — the content that will be served

---

### getFileName()

Returns the file name to download this file as, or null if it should be displayed rather than downloaded.

#### Return

`String` — the file name

---

### getMimeType()

Get the mime type this content will be served with.

#### Return

`MimeType` — the mime type this will be served with

---

### setContent(content)

Sets the content that will be served.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `String` | the content to serve |

#### Return

`TextOutput` — this TextOutput itself, useful for chaining

---

### setMimeType(mimeType)

Sets the mime type for content that will be served. The default is plain text.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mimeType` | `MimeType` | the mime type |

#### Return

`TextOutput` — this TextOutput itself, useful for chaining
