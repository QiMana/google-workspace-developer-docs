---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink
root: apps-script
fetched_at: 2026-04-23T15:18:39.290Z
---

# Class Hyperlink

A Hyperlink element used in `TextFormatElement`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const hyperLink = AddOnsResponseService.newHyperlink()
      .setText("Hyperlink_text")
      .setLink("https://www.google.com");
```

## Detailed documentation

### setLink(link)

Sets the destination URL of the hyperlink.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `link` | `String` | The destination URL of the hyperlink. |

#### Return

`Hyperlink` — This hyperlink object, for chaining.

---

### setText(text)

Sets the text of the hyperlink.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text of the hyperlink. |

#### Return

`Hyperlink` — This hyperlink object, for chaining.
