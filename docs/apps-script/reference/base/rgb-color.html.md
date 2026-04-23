---
source: https://developers.google.com/apps-script/reference/base/rgb-color.html
root: apps-script
fetched_at: 2026-04-23T15:18:48.419Z
---

# Class RgbColor

## Page Summary

- RgbColor defines a color using red, green, and blue channels.
- You can get the hexadecimal string representation of the color using asHexString().
- You can retrieve the individual red, green, and blue channel values (0-255) using getRed(), getGreen(), and getBlue().
- The type of the color can be obtained using getColorType().

A color defined by red, green, blue color channels.

## Detailed documentation

### asHexString()

Returns the color as a CSS-style 7 character hexadecimal string (#rrggbb) or 9 character hexadecimal string (#aarrggbb).

#### Return

`String` — The hex representation of color.

---

### getBlue()

The blue channel of this color, as a number from 0 to 255.

#### Return

`Integer` — The value of blue channel.

---

### getColorType()

Get the type of this color.

#### Return

`ColorType` — The color type.

---

### getGreen()

The green channel of this color, as a number from 0 to 255.

#### Return

`Integer` — The value of green channel.

---

### getRed()

The red channel of this color, as a number from 0 to 255.

#### Return

`Integer` — The value of red channel.
