---
source: https://developers.google.com/apps-script/reference/card-service/image-crop-style
root: apps-script
fetched_at: 2026-04-23T15:19:07.274Z
---

# Class ImageCropStyle

## Page Summary

- ImageCropStyle is a class used to apply crop styles to image components in Apps Script, as images cannot be sized or resized directly.
- The class provides methods to set the aspect ratio and the crop type of an image.
- The `setAspectRatio(ratio)` method sets the aspect ratio when using the `RECTANGLE_CUSTOM` crop type, requiring a positive numerical value.
- The `setImageCropType(type)` method sets the crop type for the image, defaulting to `SQUARE`.

A class that represents a crop style that can be applied to image components. You can't set the size of an image or resize it, but you can crop the image.

## Detailed documentation

### setAspectRatio(ratio)

Sets the aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. The ratio must be a positive value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ratio` | `Number` | The ratio to apply. |

#### Return

`ImageCropStyle` — This object, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the input is negative or zero.

---

### setImageCropType(type)

Sets the crop type for the image. Default is SQUARE.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ImageCropType` | The crop type. |

#### Return

`ImageCropStyle` — This object, for chaining.
