---
source: https://developers.google.com/apps-script/reference/card-service/icon-image
root: apps-script
fetched_at: 2026-04-23T15:19:06.998Z
---

# Class IconImage

## Page Summary

- IconImage allows you to use a predefined icon, a material design icon, or an icon from a URL with customizable crop style.
- You can set alternative text for accessibility, choose from predefined icons, specify an icon URL, set the image crop type, and set a material design icon.
- Methods like `setAltText`, `setIcon`, `setIconUrl`, `setImageCropType`, and `setMaterialIcon` are available to configure the IconImage.

A predefined icon, a material design icon, or an icon from a URL with a customizable crop style.

## Detailed documentation

### setAltText(altText)

Sets the alternative text of the URL which is used for accessibility.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `altText` | `String` | The alternative text. |

#### Return

`IconImage` — This object, for chaining.

---

### setIcon(icon)

Sets the predefined icon if the URL is not set. Default is NONE.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` |  | One of the predefined values. |

#### Return

`IconImage` — This object, for chaining.

---

### setIconUrl(url)

Sets the URL of the icon if the icon is not set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL address of a hosted image to use as an icon. |

#### Return

`IconImage` — This object, for chaining.

---

### setImageCropType(imageCropType)

Sets the crop style for the image. The crop type options you can use for icons are `SQUARE ` and `CIRCLE`. Default is `SQUARE`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageCropType` | `ImageCropType` | The ImageCropType option to apply. |

#### Return

`IconImage` — This object, for chaining.

---

### setMaterialIcon(icon)

Sets the material design icon.

```
const iconImage = CardService.newIconImage().setMaterialIcon(
    CardService.newMaterialIcon().setName('search'),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `MaterialIcon` | The material icon. |

#### Return

`IconImage` — This object, for chaining.
