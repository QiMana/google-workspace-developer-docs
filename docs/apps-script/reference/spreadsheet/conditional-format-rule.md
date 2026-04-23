---
source: https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule
root: apps-script
fetched_at: 2026-04-23T15:21:25.449Z
---

# Class ConditionalFormatRule

## Page Summary

- Use `SpreadsheetApp.newConditionalFormatRule()` and `ConditionalFormatRuleBuilder` to create new conditional formatting rules.
- You can set conditional format rules for a sheet using `Sheet.setConditionalFormatRules()`.
- Methods available for `ConditionalFormatRule` include `copy()`, `getBooleanCondition()`, `getGradientCondition()`, and `getRanges()`.
- `copy()` returns a builder preset with the current rule's settings.
- `getBooleanCondition()` and `getGradientCondition()` retrieve condition details if applicable, otherwise return `null`.
- `getRanges()` returns the ranges where the conditional format rule is applied.

Access conditional formatting rules. To create a new rule, use `SpreadsheetApp.newConditionalFormatRule()` and `ConditionalFormatRuleBuilder`. You can use `Sheet.setConditionalFormatRules(rules)` to set the rules for a given sheet.

For rules that use boolean condition criteria, you can access the formatting settings by calling `getBooleanCondition()` and using the methods on the returned `BooleanCondition` object.

## Detailed documentation

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
