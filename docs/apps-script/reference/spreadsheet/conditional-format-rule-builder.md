---
source: https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder
root: apps-script
fetched_at: 2026-04-23T15:21:24.835Z
---

# Class ConditionalFormatRuleBuilder

## Page Summary

- The `ConditionalFormatRuleBuilder` class in Google Apps Script provides methods to set conditional formatting rules based on date, formula, number, and text conditions.
- Date-based methods like `whenDateBefore` and `whenDateEqualTo` can use either specific dates or relative dates such as `RelativeDate.TODAY`.
- `whenFormulaSatisfied` allows applying formatting based on a custom formula that evaluates to true.
- A comprehensive set of methods starting with `whenNumber` enables formatting based on numerical comparisons like equality, inequality, greater than/less than, and being within or outside a range.
- Text-based conditions using methods like `whenTextContains` and `whenTextEqualTo` allow formatting based on whether cells contain, do not contain, start with, end with, or are exactly equal to a specific text string.

Builder for conditional format rules.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a number between 1 and 10.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberBetween(1, 10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

## Detailed documentation

### build()

Constructs a conditional format rule from the settings applied to the builder.

#### Return

---

### copy()

Returns a rule builder preset with this rule's settings.

#### Return

`ConditionalFormatRuleBuilder` — A builder based on this rule's settings.

---

### getBooleanCondition()

Retrieves the rule's `BooleanCondition` information if this rule uses boolean condition criteria. Otherwise returns `null`. Boolean conditions contain formatting settings such as font weight, font color, and background color.

```
// Log the boolean criteria type of the first conditional format rules of a
// sheet.
const rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
const booleanCondition = rule.getBooleanCondition();
if (booleanCondition != null) {
  Logger.log(booleanCondition.getCriteriaType());
}
```

#### Return

`BooleanCondition|null` — The boolean condition object, or `null` if the rule does not use a boolean condition.

---

### getGradientCondition()

Retrieves the rule's `GradientCondition` information, if this rule uses gradient condition criteria. Otherwise returns `null`.

```
// Log the gradient minimum color of the first conditional format rule of a
// sheet.
const rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
const gradientCondition = rule.getGradientCondition();
if (gradientCondition != null) {
  // Assume the color has ColorType.RGB.
  Logger.log(gradientCondition.getMinColorObject().asRgbColor().asHexString());
}
```

#### Return

`GradientCondition|null` — The gradient condition object, or `null` if the rule does not use a gradient condition.

---

### getRanges()

Retrieves the ranges to which this conditional format rule is applied.

```
// Log each range of the first conditional format rule of a sheet.
const rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
const ranges = rule.getRanges();
for (let i = 0; i < ranges.length; i++) {
  Logger.log(ranges[i].getA1Notation());
}
```

#### Return

`Range[]` — The ranges to which this conditional format rule is applied.

---

### setBackground(color)

Sets the background color for the conditional format rule's format. Passing in `null` removes the background color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color to red if the cell has text equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The desired color or `null` to clear. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setBackgroundObject(color)

Sets the background color for the conditional format rule's format. Passing in `null` removes the background color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color to theme background color if the cell has text
// equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const color = SpreadsheetApp.newColor()
                  .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
                  .build();
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setBackground(color)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The desired color object or `null` to clear. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setBold(bold)

Sets text bolding for the conditional format rule's format. If `bold` is `true`, the rule bolds text if the condition is met; if `false`, the rule removes any existing bolding if the condition is met. Passing in `null` removes the bold format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn their text bold if the cell has text equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setBold(true)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `bold` | `Boolean` | Whether or not the text should be bolded if the format condition is met; `null` removes this setting. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setFontColor(color)

Sets the font color for the conditional format rule's format. Passing in `null` removes the font color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their font color to red if the cell has text equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setFontColor('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The desired color or `null` to clear. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setFontColorObject(color)

Sets the font color for the conditional format rule's format. Passing in `null` removes the font color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their font color to theme text color if the cell has text equal to
// "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const color = SpreadsheetApp.newColor()
                  .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
                  .build();
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setFontColor(color)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The desired color object or `null` to clear. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMaxpoint(color)

Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere between white and red, based on their
// values in comparison to the ranges minimum and maximum values.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpoint('#FF0000')
                 .setGradientMinpoint('#FFFFFF')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The maxpoint color to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMaxpointObject(color)

Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere between theme text and background
// colors, based on their values in comparison to the ranges minimum and maximum
// values.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const textColor = SpreadsheetApp.newColor()
                      .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
                      .build();
const backgroundColor =
    SpreadsheetApp.newColor()
        .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
        .build();
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpoint(textColor)
                 .setGradientMinpoint(backgroundColor)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The maxpoint color object to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMaxpointObjectWithValue(color, type, value)

Sets the conditional format rule's gradient maxpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere from theme accent 1, accent 2 to accent
// 3 colors, based on their values in comparison to the values 0, 50, and 100.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const color1 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
                   .build();
const color2 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
                   .build();
const color3 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
                   .build();
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpointWithValue(
                     color1,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '100',
                     )
                 .setGradientMidpointWithValue(
                     color2,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '50',
                     )
                 .setGradientMinpointWithValue(
                     color3,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '0',
                     )
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The maxpoint color to set. |
| `type` | `InterpolationType` | The maxpoint interpolation type to set. |
| `value` | `String` | The maxpoint value to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMaxpointWithValue(color, type, value)

Sets the conditional format rule's gradient maxpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere from red green to blue, based on their
// values in comparison to the values 0, 50, and 100.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpointWithValue(
                     '#0000FF',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '100',
                     )
                 .setGradientMidpointWithValue(
                     '#00FF00',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '50',
                     )
                 .setGradientMinpointWithValue(
                     '#FF0000',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '0',
                     )
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The maxpoint color to set. |
| `type` | `InterpolationType` | The maxpoint interpolation type to set. |
| `value` | `String` | The maxpoint value to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMidpointObjectWithValue(color, type, value)

Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields if the passed in interpolation type is `null`.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere from theme accent 1 to accent 2 to
// accent 3 colors, based on their values in comparison to the values 0, 50, and
// 100.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const color1 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
                   .build();
const color2 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
                   .build();
const color3 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
                   .build();
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpointWithValue(
                     color1,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '100',
                     )
                 .setGradientMidpointWithValue(
                     color2,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '50',
                     )
                 .setGradientMinpointWithValue(
                     color3,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '0',
                     )
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The midpoint color to set. |
| `type` | `InterpolationType` | The midpoint interpolation type to set or `null` to clear. |
| `value` | `String` | The midpoint value to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMidpointWithValue(color, type, value)

Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields if the passed in interpolation type is `null`.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere from red green to blue, based on their
// values in comparison to the values 0, 50, and 100.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpointWithValue(
                     '#0000FF',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '100',
                     )
                 .setGradientMidpointWithValue(
                     '#00FF00',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '50',
                     )
                 .setGradientMinpointWithValue(
                     '#FF0000',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '0',
                     )
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The midpoint color to set. |
| `type` | `InterpolationType` | The midpoint interpolation type to set or `null` to clear. |
| `value` | `String` | The midpoint value to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMinpoint(color)

Clears the conditional format rule's gradient minpoint value, and instead uses the minimum value in the rule's ranges. Also sets the gradient's minpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere between white and red, based on their
// values in comparison to the ranges minimum and maximum values.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpoint('#FF0000')
                 .setGradientMinpoint('#FFFFFF')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The minpoint color to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMinpointObject(color)

Clears the conditional format rule's gradient minpoint value, and instead uses the minimum value in the rule's ranges. Also sets the gradient's minpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere between theme text and background
// colors, based on their values in comparison to the ranges minimum and maximum
// values.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const textColor = SpreadsheetApp.newColor()
                      .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
                      .build();
const backgroundColor =
    SpreadsheetApp.newColor()
        .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
        .build();
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpoint(textColor)
                 .setGradientMinpoint(backgroundColor)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The minpoint color object to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMinpointObjectWithValue(color, type, value)

Sets the conditional format rule's gradient minpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere from theme accent 1 to accent 2 to
// accent 3 colors, based on their values in comparison to the values 0, 50, and
// 100.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const color1 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
                   .build();
const color2 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
                   .build();
const color3 = SpreadsheetApp.newColor()
                   .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
                   .build();
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpointWithValue(
                     color1,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '100',
                     )
                 .setGradientMidpointWithValue(
                     color2,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '50',
                     )
                 .setGradientMinpointWithValue(
                     color3,
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '0',
                     )
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The minpoint color to set. |
| `type` | `InterpolationType` | The minpoint interpolation type to set. |
| `value` | `String` | The minpoint value to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setGradientMinpointWithValue(color, type, value)

Sets the conditional format rule's gradient minpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// set their background color somewhere from red to green to blue, based on
// their values in comparison to the values 0, 50, and 100.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .setGradientMaxpointWithValue(
                     '#0000FF',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '100',
                     )
                 .setGradientMidpointWithValue(
                     '#00FF00',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '50',
                     )
                 .setGradientMinpointWithValue(
                     '#FF0000',
                     SpreadsheetApp.InterpolationType.NUMBER,
                     '0',
                     )
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The minpoint color to set. |
| `type` | `InterpolationType` | The minpoint interpolation type to set. |
| `value` | `String` | The minpoint value to set. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setItalic(italic)

Sets text italics for the conditional format rule's format. If `italic` is `true`, the rule italicises text if the condition is met; if `false`, the rule removes any existing italicization if the condition is met. Passing in `null` removes the italic format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn their text italic if the cell has text equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setItalic(true)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `italic` | `Boolean` | Whether or not the text should be italicised if the format condition is met; `null` removes this setting. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setRanges(ranges)

Sets one or more ranges to which this conditional format rule is applied. This operation replaces any existing ranges. Setting an empty array clears any existing ranges. A rule must have at least one range.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3
// and range D4:F6 to turn red if they contain a number between 1 and 10.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeOne = sheet.getRange('A1:B3');
const rangeTwo = sheet.getRange('D4:F6');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberBetween(1, 10)
                 .setBackground('#FF0000')
                 .setRanges([rangeOne, rangeTwo])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ranges` | `Range[]` | The ranges to which this conditional format rule is applied. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setStrikethrough(strikethrough)

Sets text strikethrough for the conditional format rule's format. If `strikethrough` is `true`, the rule strikesthrough text if the condition is met; if `false`, the rule removes any existing strikethrough formatting if the condition is met. Passing in `null` removes the strikethrough format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// strikethrough their text if the cell has text equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setStrikethrough(true)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `strikethrough` | `Boolean` | Whether or not the text should be struckthrough if the format condition is met; `null` removes this setting. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### setUnderline(underline)

Sets text underlining for the conditional format rule's format. If `underline` is `true`, the rule underlines text if the condition is met; if `false`, the rule removes any existing underlines if the condition is met. Passing in `null` removes the underline format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// underline their text if the cell has text equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setUnderline(true)
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `underline` | `Boolean` | Whether or not the text should be underlined if the format condition is met; `null` removes this setting. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenCellEmpty()

Sets the conditional format rule to trigger when the cell is empty.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they are empty.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenCellEmpty()
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenCellNotEmpty()

Sets the conditional format rule to trigger when the cell is not empty.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they are not empty.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenCellNotEmpty()
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenDateAfter(date)

Sets the conditional format rule to trigger when a date is after the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a date after 11/4/1993.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenDateAfter(new Date('11/4/1993'))
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The latest date. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenDateAfter(date)

Sets the conditional format rule to trigger when a date is after the given relative date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a date after today.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenDateAfter(SpreadsheetApp.RelativeDate.TODAY)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `RelativeDate` | The latest date relative to the date type selected. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenDateBefore(date)

Sets the conditional format rule to trigger when a date is before the given date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a date before 11/4/1993.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenDateBefore(new Date('11/4/1993'))
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The earliest unacceptable date. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenDateBefore(date)

Sets the conditional format rule to trigger when a date is before the given relative date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a date before today.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenDateBefore(SpreadsheetApp.RelativeDate.TODAY)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `RelativeDate` | The latest date relative to the date type selected. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenDateEqualTo(date)

Sets the conditional format rule to trigger when a date is equal to the given date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain the date 11/4/1993.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenDateEqualTo(new Date('11/4/1993'))
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The sole acceptable date. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenDateEqualTo(date)

Sets the conditional format rule to trigger when a date is equal to the given relative date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain todays date.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenDateEqualTo(SpreadsheetApp.RelativeDate.TODAY)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `RelativeDate` | The latest date relative to the date type selected. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenFormulaSatisfied(formula)

Sets the conditional format rule to trigger when that the given formula evaluates to `true`.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they satisfy the condition "=EQ(B4, C3)".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenFormulaSatisfied('=EQ(B4, C3)')
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | A custom formula that evaluates to `true` if the input is valid. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberBetween(start, end)

Sets the conditional format rule to trigger when a number falls between, or is either of, two specified values.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a number between 1 and 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberBetween(1, 10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The lowest acceptable value. |
| `end` | `Number` | The highest acceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberEqualTo(number)

Sets the conditional format rule to trigger when a number is equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain the number 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberEqualTo(10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The sole acceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberGreaterThan(number)

Sets the conditional format rule to trigger when a number is greater than the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a number greater than 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberGreaterThan(10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The highest unacceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberGreaterThanOrEqualTo(number)

Sets the conditional format rule to trigger when a number is greater than or equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a number greater than or equal to 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberGreaterThanOrEqualTo(10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The lowest acceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberLessThan(number)

Sets the conditional conditional format rule to trigger when a number less than the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a number less than 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberLessThan(10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The lowest unacceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberLessThanOrEqualTo(number)

Sets the conditional format rule to trigger when a number less than or equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a number less than or equal to 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberLessThanOrEqualTo(10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The highest acceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberNotBetween(start, end)

Sets the conditional format rule to trigger when a number does not fall between, and is neither of, two specified values.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain a number not between 1 and 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberNotBetween(1, 10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The lowest unacceptable value. |
| `end` | `Number` | The highest unacceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenNumberNotEqualTo(number)

Sets the conditional format rule to trigger when a number is not equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they don't contain the number 10.

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberNotEqualTo(10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The sole unacceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenTextContains(text)

Sets the conditional format rule to trigger when that the input contains the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they contain the text "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextContains('hello')
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The value that the input must contain. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenTextDoesNotContain(text)

Sets the conditional format rule to trigger when that the input does not contain the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they don't contain the text "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextDoesNotContain('hello')
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The value that the input must not contain. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenTextEndsWith(text)

Sets the conditional format rule to trigger when that the input ends with the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they end with the text "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEndsWith('hello')
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | Text to compare against the end of the string. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenTextEqualTo(text)

Sets the conditional format rule to trigger when that the input is equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they have text equal to "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextEqualTo('hello')
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The sole acceptable value. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### whenTextStartsWith(text)

Sets the conditional format rule to trigger when that the input starts with the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to
// turn red if they start with the text "hello".

const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenTextStartsWith('hello')
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | Text to compare against the beginning of the string. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.

---

### withCriteria(criteria, args)

Sets the conditional format rule to criteria defined by `BooleanCriteria` values, typically taken from the `criteria` and `arguments` of an existing rule.

```
// Adds a new conditional format rule that is a copy of the first active
// conditional format rule, except it instead sets its cells to have a black
// background color.

const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
const booleanCondition = rules[0].getBooleanCondition();
if (booleanCondition != null) {
  const rule = SpreadsheetApp.newConditionalFormatRule()
                   .withCriteria(
                       booleanCondition.getCriteriaType(),
                       booleanCondition.getCriteriaValues(),
                       )
                   .setBackground('#000000')
                   .setRanges(rules[0].getRanges())
                   .build();
  rules.push(rule);
}
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `criteria` | `BooleanCriteria` | The type of conditional format criteria. |
| `args` | `Object[]` | An array of arguments appropriate to the criteria type; the number of arguments and their type match the corresponding `when...()` method above. |

#### Return

`ConditionalFormatRuleBuilder` — The builder, for chaining.
