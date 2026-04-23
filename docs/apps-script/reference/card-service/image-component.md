---
source: https://developers.google.com/apps-script/reference/card-service/image-component
root: apps-script
fetched_at: 2026-04-23T15:19:07.435Z
---

# Class ImageComponent

## Page Summary

- The ImageComponent is an image component that can be added to grid items.
- This component is available for Google Workspace add-ons and Google Chat apps.
- Key methods for the ImageComponent include setting alt text, border style, crop style, and image URL.

An image component that can be added to grid items.

Available for Google Workspace add-ons and Google Chat apps.

```
const ImageComponent = CardService.newImageComponent()
                           .setImageUrl('http://imageurl.ca')
                           .setAltText('YOUR ALT TEXT')
                           .setCropStyle(CardService.newImageCropStyle())
                           .setBorderStyle(CardService.newBorderStyle());
```

## Detailed documentation

### setAltText(altText)

Sets the alternative text of the image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `altText` | `String` | The alt\_text to set for the image. |

#### Return

`ImageComponent` — This object, for chaining.

---

### setBorderStyle(borderStyle)

Sets the border style applied to the image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `borderStyle` | `BorderStyle` | The BorderStyle object to apply. |

#### Return

`ImageComponent` — This object, for chaining.

---

### setCropStyle(imageCropStyle)

Sets the crop style for the image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageCropStyle` | `ImageCropStyle` | The ImageCropStyle object to apply. |

#### Return

`ImageComponent` — This object, for chaining.

---

### setImageUrl(url)

Sets the URL of the image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL. |

#### Return

`ImageComponent` — This object, for chaining.
