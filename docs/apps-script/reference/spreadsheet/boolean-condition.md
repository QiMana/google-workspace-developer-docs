---
source: https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition
root: apps-script
fetched_at: 2026-04-23T15:21:25.883Z
---

# Class BooleanCondition

## Page Summary

- A `BooleanCondition` is accessed within `ConditionalFormatRules` and each rule can have one boolean condition.
- A boolean condition contains a boolean criteria and formatting settings that are applied if the criteria evaluates to true for a cell.
- Methods are available to retrieve the background color, font color, bold, italic, strikethrough, and underline settings of a boolean condition.
- Methods also exist to retrieve the criteria type and criteria values of a boolean condition.
- Some methods for getting background and font color strings are deprecated and replaced by methods that return `Color` objects.

Access boolean conditions in `ConditionalFormatRules`. Each conditional format rule may contain a single boolean condition. The boolean condition itself contains a boolean criteria (with values) and formatting settings. The criteria is evaluated against the content of a cell resulting in either a `true` or `false` value. If the criteria evaluates to `true`, the condition's formatting settings are applied to the cell.

## Detailed documentation

### getBackgroundObject()

Gets the background color for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition background color for each conditional format rule
// on a sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  const color = rule.getBooleanCondition().getBackgroundObject();
  Logger.log(\`Background color: ${color.asRgbColor().asHexString()}\`);
}
```

#### Return

`Color|null` — The background color, or `null` if not set for this condition.

---

### getBold()

Returns `true` if this boolean condition bolds the text and returns `false` if this boolean condition removes bolding from the text. Returns `null` if bolding is unaffected.

```
// Logs the boolean condition font weight for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  const bold = rule.getBooleanCondition().getBold();
  Logger.log(\`Bold: ${bold}\`);
}
```

#### Return

`Boolean|null` — whether or not the boolean condition bolds the text, or `null` if bolding is unaffected

---

### getCriteriaType()

Gets the rule's criteria type as defined in the `BooleanCriteria` enum. To get the arguments for the criteria, use `getCriteriaValues()`. To use these values to create or modify a conditional formatting rule, see `ConditionalFormatRuleBuilder.withCriteria(criteria, args)`.

```
// Log information about the conditional formats on the active sheet that use
// boolean conditions.

const formats = SpreadsheetApp.getActiveSheet.getConditionalFormats();
SpreadsheetApp.getActiveSheet.getConditionalFormats().forEach((format) => {
  const booleanCondition = format.getBooleanCondition();
  if (booleanCondition) {
    const criteria = booleanCondition.getCriteriaType();
    const args = booleanCondition.getCriteriaValues();
    Logger.log(\`The conditional format rule is ${criteria} ${args}\`);
  }
});
```

#### Return

`BooleanCriteria` — The type of conditional formatting criteria.

---

### getCriteriaValues()

Gets an array of arguments for the rule's criteria. To get the criteria type, use `getCriteriaType()`. To use these values to create or modify a conditional formatting rule, see `ConditionalFormatRuleBuilder.withCriteria(criteria, args)`.

```
// Log information about the conditional formats on the active sheet that use
// boolean conditions.

const formats = SpreadsheetApp.getActiveSheet.getConditionalFormats();
SpreadsheetApp.getActiveSheet.getConditionalFormats().forEach((format) => {
  const booleanCondition = format.getBooleanCondition();
  if (booleanCondition) {
    const criteria = booleanCondition.getCriteriaType();
    const args = booleanCondition.getCriteriaValues();
    Logger.log(\`The conditional format rule is ${criteria} ${args}\`);
  }
});
```

#### Return

`Object[]` — An array of arguments appropriate to the rule's criteria type; the number of arguments and their type match the corresponding `when...()` method of the `ConditionalFormatRuleBuilder` class.

---

### getFontColorObject()

Gets the font color for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition font color for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  const color = rule.getBooleanCondition().getFontColorObject();
  Logger.log(\`Font color: ${color.asRgbColor().asHexString()}\`);
}
```

#### Return

`Color|null` — The font color, or `null` if not set for this condition.

---

### getItalic()

Returns `true` if this boolean condition italicises the text and returns `false` if this boolean condition removes italics from the text. Returns `null` if italics are unaffected.

```
// Logs the boolean condition font style for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  const italic = rule.getBooleanCondition().getItalic();
  Logger.log(\`Italic: ${italic}\`);
}
```

#### Return

`Boolean|null` — whether or not the boolean condition italicises the text, or `null` if italicising is unaffected

---

### getStrikethrough()

Returns `true` if this boolean condition strikes through the text and returns `false` if this boolean condition removes strikethrough from the text. Returns `null` if strikethrough is unaffected.

```
// Logs the boolean condition strikethrough setting for each conditional format
// rule on a sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  const strikethrough = rule.getBooleanCondition().getStrikethrough();
  Logger.log(\`Strikethrough: ${strikethrough}\`);
}
```

#### Return

`Boolean|null` — whether or not the boolean condition strikes through the text, or `null` if strikethrough is unaffected

---

### getUnderline()

Returns `true` if this boolean condition underlines the text and returns `false` if this boolean condition removes underlining from the text. Returns `null` if underlining is unaffected.

```
// Logs the boolean condition underline setting for each conditional format rule
// on a sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  const underline = rule.getBooleanCondition().getUnderline();
  Logger.log(\`Underline: ${underline}\`);
}
```

#### Return

`Boolean|null` — whether or not the boolean condition underlines the text, or `null` if underlining is unaffected

## Deprecated methods

### getBackground()

**Deprecated.** Replaced by `getBackgroundObject()`

Gets the background color string for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition background color for each conditional format rule
// on a sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  const color = rule.getBooleanCondition().getBackground();
  Logger.log(\`Background color: ${color}\`);
}
```

#### Return

`String|null` — The background color string, or `null` if not set for this condition.

---

### getFontColor()

**Deprecated.** Replaced by `getFontColorObject()`

Gets the font color string for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition font color for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
for (const rule of rules) {
  Logger.log(\`Font color: ${rule.getBooleanCondition().getFontColor()}\`);
}
```

#### Return

`String|null` — The font color string, or `null` if not set for this condition.
