---
source: https://developers.google.com/apps-script/reference/slides/affine-transform
root: apps-script
fetched_at: 2026-04-23T15:21:01.610Z
---

# Class AffineTransform

## Page Summary

- AffineTransform uses a 3x3 matrix to transform source coordinates into destination coordinates.
- The transformation involves scaling, shearing, and translation of coordinates.
- The class provides methods to retrieve the individual scaling, shearing, and translation elements.
- An AffineTransform object can be used to create a new AffineTransformBuilder.

A 3x3 matrix used to transform source coordinates (x1, y1) into destination coordinates (x2, y2) according to matrix multiplication:

```
[ x2 ]   [ scaleX shearX translateX ] [ x1 ]
[ y2 ] = [ shearY scaleY translateY ] [ y1 ]
[ 1  ]   [   0      0        1      ] [ 1  ]
```

After transformation,

```
x2 = scaleX * x1 + shearX * y1 + translateX;
y2 = scaleY * y1 + shearY * x1 + translateY;
```

## Detailed documentation

### getScaleX()

Gets the X coordinate scaling element.

#### Return

`Number`

---

### getScaleY()

Gets the Y coordinate scaling element.

#### Return

`Number`

---

### getShearX()

Gets the X coordinate shearing element.

#### Return

`Number`

---

### getShearY()

Gets the Y coordinate shearing element.

#### Return

`Number`

---

### getTranslateX()

Gets the X coordinate translation element in points.

#### Return

`Number`

---

### getTranslateY()

Gets the Y coordinate translation element in points.

#### Return

`Number`

---

### toBuilder()

Returns a new `AffineTransformBuilder` based on this transform.

#### Return

`AffineTransformBuilder` — A builder for `AffineTransform`.
