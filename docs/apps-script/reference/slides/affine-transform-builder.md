---
source: https://developers.google.com/apps-script/reference/slides/affine-transform-builder
root: apps-script
fetched_at: 2026-04-23T15:21:01.458Z
---

# Class AffineTransformBuilder

## Page Summary

- AffineTransformBuilder is used to build AffineTransform objects and defaults to the identity transform.
- Call the `build()` method to get the AffineTransform object.
- Methods are available to set scaling, shearing, and translation elements for both X and Y coordinates.

```
const transform =
    SlidesApp.newAffineTransformBuilder().setScaleX(2.0).setShearY(1.1).build();

// The resulting transform matrix is
//  [ 2.0   0.0   0.0 ]
//  [ 1.1   1.0   0.0 ]
//  [  0     0     1  ]
}
```

## Detailed documentation

### build()

Creates an object initialized with the elements set in the builder.

#### Return

---

### setScaleX(scaleX)

Sets the X coordinate scaling element and returns the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `scaleX` | `Number` | The X scaling. |

#### Return

`AffineTransformBuilder` — This builder, for chaining.

---

### setScaleY(scaleY)

Sets the Y coordinate scaling element and returns the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `scaleY` | `Number` | The Y scaling. |

#### Return

`AffineTransformBuilder` — This builder, for chaining.

---

### setShearX(shearX)

Sets the X coordinate shearing element and returns the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `shearX` | `Number` | The X shearing. |

#### Return

`AffineTransformBuilder` — This builder, for chaining.

---

### setShearY(shearY)

Sets the Y coordinate shearing element and returns the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `shearY` | `Number` | The Y shearing. |

#### Return

`AffineTransformBuilder` — This builder, for chaining.

---

### setTranslateX(translateX)

Sets the X coordinate translation element in points, and returns the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `translateX` | `Number` | The X translation in points. |

#### Return

`AffineTransformBuilder` — This builder, for chaining.

---

### setTranslateY(translateY)

Sets the Y coordinate translation element in points, and returns the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `translateY` | `Number` | The Y translation in points. |

#### Return

`AffineTransformBuilder` — This builder, for chaining.
