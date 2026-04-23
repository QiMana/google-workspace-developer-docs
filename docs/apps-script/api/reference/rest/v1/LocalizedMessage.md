---
source: https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage
root: apps-script
fetched_at: 2026-04-23T15:18:11.281Z
---

# LocalizedMessage

## Page Summary

- Apps Script API errors include a `LocalizedMessage` with translated error text if the `Accept-Language` header is not "English".
- The `LocalizedMessage` is represented in JSON with fields for the `locale` and the translated `message`.
- The `locale` field uses the specification defined in BCP 47.

If the `Accept-Language` header in the incoming request is not "English", then errors returned by the Apps Script API include this message. It contains the same error text translated to the requested locale.

JSON representation

```
{
  "locale": string,
  "message": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>locale</code></td><td><p><code>string</code></p><p>The locale used following the specification defined at <a href="https://www.rfc-editor.org/rfc/bcp/bcp47.txt">https://www.rfc-editor.org/rfc/bcp/bcp47.txt</a>. Examples are: "en-US", "fr-CH", "es-MX"</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>The localized error message in the above locale.</p></td></tr></tbody></table>
