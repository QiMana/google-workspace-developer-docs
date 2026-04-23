---
source: https://developers.google.com/apps-script/reference/html/html-service
root: apps-script
fetched_at: 2026-04-23T15:20:38.653Z
---

# Class HtmlService

## Page Summary

- HtmlService allows scripts to return HTML and other text content to a browser safely through sanitization.
- Security measures are in place to prevent scripts from directly returning malicious content.
- The service includes properties like `SandboxMode` and `XFrameOptionsMode` for controlling client-side script behavior and security.
- Methods are available to create `HtmlOutput` objects from various sources, including strings, blobs, and files.
- The service also provides methods for creating `HtmlTemplate` objects for dynamic content generation.

Service for returning HTML and other text content from a script.

Due to security considerations, scripts cannot directly return content to a browser. Instead, they must sanitize the HTML so that it cannot perform malicious actions. See the description of `HtmlOutput` for what limitations this implies on what can be returned.

## Detailed documentation

### createHtmlOutput()

Creates a new `HtmlOutput` object that can be returned from the script.

```
const output = HtmlService.createHtmlOutput();
```

#### Return

`HtmlOutput` — the new HtmlOutput object

---

### createHtmlOutput(blob)

Creates a new `HtmlOutput` object from a `BlobSource` resource.

```
function createFromBlob(blob) {
  const output = HtmlService.createHtmlOutput(blob);
  return output;
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | the object to get HTML out of |

#### Return

`HtmlOutput` — the new `HtmlOutput` object

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the blob doesn't contain HTML or the HTML is malformed

---

### createHtmlOutput(html)

Creates a new `HtmlOutput` object that can be returned from the script.

```
const output = HtmlService.createHtmlOutput('<b>Hello world!</b>');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `html` | `String` | the content to serve |

#### Return

`HtmlOutput` — the new HtmlOutput object

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the html is malformed

---

### createHtmlOutputFromFile(filename)

Creates a new `HtmlOutput` object from a file in the code editor.

```
const output = HtmlService.createHtmlOutputFromFile('myPage');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `filename` | `String` | the name of the file to use |

#### Return

`HtmlOutput` — the new `HtmlOutput` object

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the file wasn't found or the HTML in it is malformed

---

### createTemplate(blob)

Creates a new `HtmlTemplate` object from a `BlobSource` resource.

```
function createFromBlob(blob) {
  const template = HtmlService.createTemplate(blob);
  const output = template.evaluate();
  return output;
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | The object to get HTML out of. |

#### Return

`HtmlTemplate` — the new `HtmlTemplate` object

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the blob doesn't contain HTML

---

### createTemplate(html)

Creates a new `HtmlTemplate` object that can be returned from the script.

```
const template = HtmlService.createTemplate(
    '<b>The time is &lt;?= new Date() ?&gt;</b>',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `html` | `String` | the content of the template |

#### Return

`HtmlTemplate` — the new `HtmlTemplate` object

---

### createTemplateFromFile(filename)

Creates a new `HtmlTemplate` object from a file in the code editor.

```
const template = HtmlService.createTemplateFromFile('myTemplate');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `filename` | `String` | the name of the file to use |

#### Return

`HtmlTemplate` — the new `HtmlTemplate` object

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the file wasn't found

---

### getUserAgent()

Gets the user-agent string for the current browser. Returns `null` for most script executions if not used in a web app's `doGet()` or `doPost()` function.

#### Return

`String` — the user-agent string
