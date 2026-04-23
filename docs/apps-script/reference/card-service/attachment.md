---
source: https://developers.google.com/apps-script/reference/card-service/attachment
root: apps-script
fetched_at: 2026-04-23T15:18:57.942Z
---

# Class Attachment

## Page Summary

- The `Attachment` object represents an attachment created by an add-on for use in Google extensibility products.
- You can create a new attachment using `CardService.newAttachment()`.
- The `Attachment` object provides methods to set the resource URL, title, MIME type, and icon URL.
- Methods like `setIconUrl`, `setMimeType`, `setResourceUrl`, and `setTitle` are available to configure the attachment.

Represents an attachment created by an add-on. This can be used within the context of different Google extensibility products to generate new attachments, such as for Calendar events.

```
const attachment = CardService.newAttachment()
                       .setResourceUrl('https://fakeresourceurl.com')
                       .setTitle('Attachment title')
                       .setMimeType('text/html')
                       .setIconUrl('https://fakeresourceurl.com/iconurl.png');
```

## Detailed documentation

### setIconUrl(iconUrl)

Sets the icon URL for the attachment.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `iconUrl` | `String` | The URL address of the attachment icon. |

#### Return

`Attachment` — This object, for chaining.

---

### setMimeType(mimeType)

Sets the MIME type for the attachment.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mimeType` | `String` | The MIME type of the content in the attachment resource. |

#### Return

`Attachment` — This object, for chaining.

---

### setResourceUrl(resourceUrl)

Sets the resource URL for the attachment.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceUrl` | `String` | The URL address of a resource. |

#### Return

`Attachment` — This object, for chaining.

---

### setTitle(title)

Sets the title for the attachment.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the attachment. |

#### Return

`Attachment` — This object, for chaining.
