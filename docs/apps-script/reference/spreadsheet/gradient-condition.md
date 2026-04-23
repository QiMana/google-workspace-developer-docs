---
source: https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition
root: apps-script
fetched_at: 2026-04-23T15:21:41.440Z
---

# Class GradientCondition

## Page Summary

- GradientCondition is used to access gradient color conditions in ConditionalFormatRuleApis.
- A gradient condition is defined by three points (min, mid, max), each with a color, value, and InterpolationType.
- Cell colors are interpolated based on their content's proximity to the min, mid, and max points of the gradient condition.
- Methods are available to get the color object, interpolation type, and value for the min, mid, and max points.
- Some methods for getting color as a string are deprecated and replaced by methods returning Color objects.

Access gradient (color) conditions in `ConditionalFormatRuleApis`. Each conditional format rule may contain a single gradient condition. A gradient condition is defined by three points along a number scale (min, mid, and max), each of which has a color, a value, and a `InterpolationType`. The content of a cell is compared to the values in the number scale and the color applied to the cell is interpolated based on the cell content's proximity to the gradient condition min, mid, and max points.

```
// Logs all the information inside gradient conditional format rules on a sheet.
// The below snippet assumes all colors have ColorType.RGB.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (let i = 0; i < rules.length; i++) {
  const gradient = rules[i].getGradientCondition();

  const minColor = gradient.getMinColorObject().asRgbColor().asHexString();
  const minType = gradient.getMinType();
  const minValue = gradient.getMinValue();
  const midColor = gradient.getMidColorObject().asRgbColor().asHexString();
  const midType = gradient.getMidType();
  const midValue = gradient.getMidValue();
  const maxColor = gradient.getMaxColorObject().asRgbColor().asHexString();
  const maxType = gradient.getMaxType();
  const maxValue = gradient.getMaxValue();

  Logger.log(\`The conditional format gradient information for rule ${i}:
    MinColor ${minColor}, MinType ${minType}, MinValue ${minValue},
    MidColor ${midColor}, MidType ${midType}, MidValue ${midValue},
    MaxColor ${maxColor}, MaxType ${maxType}, MaxValue ${maxValue}\`);
}
```

## Detailed documentation

### getMaxColorObject()

Gets the color set for the maximum value of this gradient condition. Returns `null` if the color hasn't been set.

#### Return

`Color|null` — The color set for the maximum value of this gradient condition or `null`.

---

### getMaxType()

Gets the interpolation type for the maximum value of this gradient condition. Returns `null` if the gradient max type hasn't been set.

#### Return

`InterpolationType|null` — The interpolation type for the maximum value of this gradient condition or `null`.

---

### getMaxValue()

Gets the max value of this gradient condition. Returns an empty string if the `InterpolationType` is `MAX` or if the max value hasn't been set.

#### Return

`String` — The maximum value if specified or an empty string.

---

### getMidColorObject()

Gets the color set for the midpoint value of this gradient condition. Returns `null` if the color hasn't been set.

#### Return

`Color|null` — The color set for the midpoint value of this gradient condition or `null`.

---

### getMidType()

Gets the interpolation type for the midpoint value of this gradient condition. Returns `null` if the gradient mid type hasn't been set.

#### Return

`InterpolationType|null` — The interpolation type for the midpoint value of this gradient condition or `null`.

---

### getMidValue()

Gets the midpoint value of this gradient condition. Returns an empty string if the gradient mid value hasn't been set.

#### Return

`String` — The midpoint value or an empty string.

---

### getMinColorObject()

Gets the color set for the minimum value of this gradient condition. Returns `null` if the color hasn't been set.

#### Return

`Color|null` — The color set for the minimum value of this gradient condition or `null`.

---

### getMinType()

Gets the interpolation type for the minimum value of this gradient condition. Returns `null` if the gradient min type hasn't been set.

#### Return

`InterpolationType|null` — The interpolation type for the minimum value of this gradient condition or `null`.

---

### getMinValue()

Gets the minimum value of this gradient condition. Returns an empty string if the `InterpolationType` is `MIN` or if the min value hasn't been set.

#### Return

`String` — The minimum value if specified or an empty string.

## Deprecated methods

### getMaxColor()

**Deprecated.** Replaced by `getMaxColorObject()`

Gets the color set for the maximum value of this gradient condition. Returns an empty string if the color hasn't been set.

#### Return

`String` — The color set for the maximum value of this gradient condition or an empty string.

---

### getMidColor()

**Deprecated.** Replaced by `getMidColorObject()`

Gets the color set for the midpoint value of this gradient condition. Returns an empty string if the color hasn't been set.

#### Return

`String` — The color set for the midpoint value of this gradient condition or an empty string.

---

### getMinColor()

**Deprecated.** Replaced by `getMinColorObject()`

Gets the color set for the minimum value of this gradient condition. Returns an empty string if the color hasn't been set.

#### Return

`String` — The color set for the minimum value of this gradient condition or an empty string.
