---
source: https://developers.google.com/apps-script/reference/content/content-service
root: apps-script
fetched_at: 2026-04-23T15:19:27.119Z
---

# Class ContentService

## Page Summary

- ContentService allows you to serve text content from a script, for example, by publishing the script as a web app.
- When serving content through a web app, the browser URL will differ from the original script URL for security reasons.
- The `createTextOutput()` method is used to create a `TextOutput` object which can serve text content.
- The `createTextOutput(content)` method allows you to create a `TextOutput` object with initial content.

Service for returning text content from a script.

You can serve up text in various forms. For example, publish this script as a web app.

```
function doGet() {
  return ContentService.createTextOutput('Hello World');
}
```

When visiting the web app URL you will see "Hello World" in the browser. Due to security considerations, scripts cannot directly return content to a browser. Instead, they must serve the content from a different URL. This is why the URL in the browser for output created via this web app will be different than the original script URL.

## Detailed documentation

### createTextOutput()

Create a new `TextOutput` object.

```
function doGet() {
  const output = ContentService.createTextOutput();
  output.append('Hello world!');
  return output;
}
```

#### Return

`TextOutput` — the new TextOutput object.

---

### createTextOutput(content)

Create a new `TextOutput` object that can serve the given content.

```
function doGet() {
  const output = ContentService.createTextOutput('Hello world!');
  return output;
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `String` | the content to serve. |

#### Return

`TextOutput` — the new TextOutput object.
