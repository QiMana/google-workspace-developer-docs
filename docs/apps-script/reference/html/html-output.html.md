---
source: https://developers.google.com/apps-script/reference/html/html-output.html
root: apps-script
fetched_at: 2026-04-23T15:20:38.317Z
---

# Class HtmlOutput

## Page Summary

- HtmlOutput is an object used to serve sanitized HTML content from Apps Script, including embedded JavaScript and CSS, with content sandboxed using iframe sandboxing for security.
- Scripts must sanitize HTML due to security considerations and cannot return it directly to a browser, using HtmlService.createHtmlOutput for this purpose.
- The `append` method is used for adding trusted content to an HtmlOutput object, while `appendUntrusted` uses contextual escaping to safely add content from untrusted sources and prevent XSS vulnerabilities.
- HtmlOutput objects offer methods for managing content, meta tags, favicon URLs, and initial dimensions of custom dialogs in Google Docs, Sheets, or Forms.
- The `setSandboxMode` method no longer has an effect as all scripts now use `IFRAME` mode for security regardless of the setting.

An `HtmlOutput` object that can be served from a script. Due to security considerations, scripts cannot directly return HTML to a browser. Instead, they must sanitize it so that it cannot perform malicious actions. You can return sanitized HTML like this:

```
function doGet() {
  return HtmlService.createHtmlOutput('<b>Hello, world!</b>');
}
```

The code in the `HtmlOutput` can include embedded JavaScript and CSS. (This is standard client-side JavaScript that manipulates the DOM, not Apps Script). All of this content is sandboxed using [iframe sandboxing](https://html.spec.whatwg.org/#attr-iframe-sandbox). For more information, see the [guide to restrictions in HTML service](https://developers.google.com/apps-script/guides/html/restrictions).

## Detailed documentation

### addMetaTag(name, content)

Adds a meta tag to the page. Meta tags included directly in an Apps Script HTML file are ignored. Only the following meta tags are allowed:

```
<meta name="apple-mobile-web-app-capable" content="..."/>
<meta name="google-site-verification" content="..."/>
<meta name="mobile-web-app-capable" content="..."/>
<meta name="viewport" content="..."/>
```

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The value of the meta tag's name attribute. |
| `content` | `String` | The value of the meta tag's content attribute. |

#### Return

`HtmlOutput` — This output, for chaining.

---

### append(addedContent)

Appends new content to the content of this `HtmlOutput`. Use this only for content from a trusted source, because it is not escaped.

```
// Log "<b>Hello, world!</b><p>Hello again, world.</p>"
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.append('<p>Hello again, world.</p>');
Logger.log(output.getContent());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `addedContent` | `String` | The content to append. |

#### Return

`HtmlOutput` — This output, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the HTML is malformed

#### See also

- `appendUntrusted(addedContent)`

---

### appendUntrusted(addedContent)

Appends new content to the content of this `HtmlOutput`, using contextual escaping.

This method correctly escapes content based on the current state of the `HtmlOutput`, so that the result is a safe string with no markup or side affects. Use this instead of using append whenever you are adding content from an untrusted source, such as from a user, to avoid accidentally allowing a cross site scripting (XSS) bug where content or markup that you append causes unexpected code execution.

```
// Log "<b>Hello, world!</b>&lt;p&gt;Hello again, world.&lt;/p&gt;"
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.appendUntrusted('<p>Hello again, world.</p>');
Logger.log(output.getContent());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `addedContent` | `String` | The content to append. |

#### Return

`HtmlOutput` — This output, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the HTML is very malformed

#### See also

- `append(addedContent)`

---

### asTemplate()

Returns an `HtmlTemplate` backed by this `HtmlOutput`. This method can be used to build up a template incrementally. Future changes to `HtmlOutput` affect the contents of the `HtmlTemplate` as well.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
const template = output.asTemplate();
```

#### Return

`HtmlTemplate` — The new `HtmlTemplate`.

---

### clear()

Clears the current content.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.clear();
```

#### Return

`HtmlOutput` — This output, for chaining.

---

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google Services](https://developers.google.com/apps-script/guides/services/quotas). Newly created Google Workspace domains might be temporarily subject to stricter quotas.

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

Gets the content of this `HtmlOutput`.

```
// Log "<b>Hello, world!</b>"
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
Logger.log(output.getContent());
```

#### Return

`String` — The content that is served.

---

### getFaviconUrl()

Gets the URL for a favicon link tag added to the page by calling `setFaviconUrl(iconUrl)`. Favicon link tags included directly in an Apps Script HTML file are ignored.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setFaviconUrl('http://www.example.com/image.png');
Logger.log(output.getFaviconUrl());
```

#### Return

`String` — The URL of the favicon image.

---

### getHeight()

Gets the initial height of the [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this method returns `null`. To resize a dialog that is already open, call [`google.script.host.setHeight(height)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setHeight(200);
Logger.log(output.getHeight());
```

#### Return

`Integer` — The height, in pixels.

---

### getMetaTags()

Gets an array of objects that represent meta tags added to the page by calling `addMetaTag(name, content)`. Meta tags included directly in an Apps Script HTML file are ignored.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.addMetaTag('viewport', 'width=device-width, initial-scale=1');

const tags = output.getMetaTags();
Logger.log(
    '<meta name="%s" content="%s"/>',
    tags[0].getName(),
    tags[0].getContent(),
);
```

#### Return

`HtmlOutputMetaTag[]` — An array of objects that represent meta tags added to the page by calling `addMetaTag(name, content)`.

---

### getTitle()

Gets the title of the output page. Note that the <title> HTML element is ignored.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
Logger.log(output.getTitle());
```

#### Return

`String` — The title of the page.

---

### getWidth()

Gets the initial width of the [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this method returns `null`. To resize a dialog that is already open, call [`google.script.host.setWidth(width)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setWidth(200);
Logger.log(output.getWidth());
```

#### Return

`Integer` — The width in pixels.

---

### setContent(content)

Sets the content of this `HtmlOutput`.

```
const output = HtmlService.createHtmlOutput();
output.setContent('<b>Hello, world!</b>');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `String` | The content to serve. |

#### Return

`HtmlOutput` — This output, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the HTML is malformed

---

### setFaviconUrl(iconUrl)

Adds a link tag for a favicon to the page. Favicon link tags included directly in an Apps Script HTML file are ignored.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setFaviconUrl('http://www.example.com/image.png');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `iconUrl` | `String` | The URL of the favicon image, with the image extension indicating the image type. |

#### Return

`HtmlOutput` — This output, for chaining.

---

### setHeight(height)

Sets the initial height of the [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this method has no effect. To resize a dialog that is already open, call [`google.script.host.setHeight(height)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setHeight(200);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `height` | `Integer` | The new height in pixels; `null` results in a default value. |

#### Return

`HtmlOutput` — This output, for chaining.

---

### setSandboxMode(mode)

This method now has no effect — previously it set the `sandbox mode` used for client-side scripts. To protect users from being served malicious HTML or JavaScript, client-side code served from HTML service executes in a security sandbox that imposes restrictions on the code. Originally this method allowed script authors to choose between different versions of the sandbox, but now all scripts now use `IFRAME` mode regardless of what sandbox mode is set. For more information, see the [guide to restrictions in HTML service](https://developers.google.com/apps-script/guides/html/restrictions).

The `IFRAME` mode imposes many fewer restrictions than the other sandbox modes and runs fastest, but does not work at all in certain older browsers, including Internet Explorer 9. The sandbox mode can be read in a client-side script by inspecting `google.script.sandbox.mode`. Note that this property returns the actual mode on the client, which may differ from the mode requested on the server if the requested mode is not supported in the user's browser.

```
<!-- Read the sandbox mode (in a client-side script). -->
<script>
  alert(google.script.sandbox.mode);
</script>
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mode` | `SandboxMode` | The sandbox mode to use. |

#### Return

`HtmlOutput` — This output, for chaining.

---

### setTitle(title)

Sets the title of the output page. For web apps, this is the title of the entire page, while for `HtmlOutput` shown in Google Sheets, this is the dialog title.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setTitle('My First Page');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The new title. |

#### Return

`HtmlOutput` — This output, for chaining.

---

### setWidth(width)

Sets the initial width of a [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this method has no effect. To resize a dialog that is already open, call [`google.script.host.setWidth(width)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setWidth(200);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | The new width in pixels; `null` results in a default value. |

#### Return

`HtmlOutput` — This output, for chaining.

---

### setXFrameOptionsMode(mode)

Sets the state of the page's `X-Frame-Options` header, which controls clickjacking prevention.

Setting `XFrameOptionsMode.ALLOWALL` lets any site iframe the page, so the developer should implement their own protection against clickjacking.

If a script does not set an `X-Frame-Options` mode, Apps Script uses `XFrameOptionsMode.DEFAULT` mode as the default.

```
// Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mode` | `XFrameOptionsMode` | The XFrame options mode to set. |

#### Return

`HtmlOutput` — This output, for chaining.
