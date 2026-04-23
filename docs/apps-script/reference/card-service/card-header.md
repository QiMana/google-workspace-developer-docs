---
source: https://developers.google.com/apps-script/reference/card-service/card-header
root: apps-script
fetched_at: 2026-04-23T15:18:58.265Z
---

# Class CardHeader

## Page Summary

- `CardHeader` represents the header for a `Card` in Google Workspace add-ons and Google Chat apps.
- You can set the title, subtitle, image URL, image style, and image alt text for a `CardHeader` using its methods.
- The `setImageUrl` method accepts either a publicly accessible URL or a base64 encoded image string.
- Methods like `setTitle` and `setSubtitle` are used to define the text content of the header.

Available for Google Workspace add-ons and Google Chat apps.

```
const cardHeader = CardService.newCardHeader()
                       .setTitle('Card header title')
                       .setSubtitle('Card header subtitle')
                       .setImageStyle(CardService.ImageStyle.CIRCLE)
                       .setImageUrl('https://image.png');
```

## Detailed documentation

### setImageAltText(imageAltText)

Sets the alternative text for the header image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageAltText` | `String` | The alternative text for the header image. |

#### Return

`CardHeader` — This object, for chaining.

---

### setImageStyle(imageStyle)

Sets the cropping of the icon in the card header. Defaults to no crop. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageStyle` | `ImageStyle` | The style setting. |

#### Return

`CardHeader` — This object, for chaining.

---

### setImageUrl(imageUrl)

Sets the image to use in the header by providing its URL or data string.

The provided URL can either be a publicly accessible URL or a base64 encoded image string. To obtain the latter, you can use the following code to create an encoded image string from an image in your Google Drive, then store that string for later use with `setImageUrl(imageUrl)`. This method prevents the need for your add-on to access a publicly available image URL:

```
// The following assumes you have the image to use in Google Drive and have its
// ID.
const imageBytes = DriveApp.getFileById('123abc').getBlob().getBytes();
const encodedImageURL =
    \`data:image/jpeg;base64,${Utilities.base64Encode(imageBytes)}\`;

// You can store encodeImageURL and use it as a parameter to
// CardHeader.setImageUrl(imageUrl).
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageUrl` | `String` | The URL address of a hosted image to use, or an encoded image string. |

#### Return

`CardHeader` — This object, for chaining.

---

### setSubtitle(subtitle)

Sets the subtitle of the card header. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `subtitle` | `String` | The header subtitle text. |

#### Return

`CardHeader` — This object, for chaining.

---

### setTitle(title)

Sets the title of the card header. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The header text. |

#### Return

`CardHeader` — This object, for chaining.
