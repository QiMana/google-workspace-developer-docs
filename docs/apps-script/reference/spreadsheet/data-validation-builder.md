---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
root: apps-script
fetched_at: 2026-04-23T15:21:29.397Z
---

# Class DataValidationBuilder

## Page Summary

- The DataValidationBuilder is used to construct data validation rules in a spreadsheet.
- You can define rules to require specific data types like dates, numbers, text, or values from a list or range.
- Builders can be copied to easily modify existing data validation rules.
- You can configure whether invalid input results in a warning or is rejected entirely.
- Help text can be set to appear when a user hovers over a cell with data validation.

Builder for data validation rules.

```
// Set the data validation for cell A1 to require a value from B1:B10.
const cell = SpreadsheetApp.getActive().getRange('A1');
const range = SpreadsheetApp.getActive().getRange('B1:B10');
const rule =
    SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
cell.setDataValidation(rule);
```

## Detailed documentation

### build()

Constructs a data validation rule from the settings applied to the builder.

#### Return

---

### copy()

Creates a builder for a data validation rule based on this rule's settings.

```
// Change existing data validation rules that require a date in 2013 to require
// a date in 2014.
const oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
const newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
const rules = range.getDataValidations();

for (let i = 0; i < rules.length; i++) {
  for (let j = 0; j < rules[i].length; j++) {
    const rule = rules[i][j];

    if (rule != null) {
      const criteria = rule.getCriteriaType();
      const args = rule.getCriteriaValues();

      if (criteria === SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN &&
          args[0].getTime() === oldDates[0].getTime() &&
          args[1].getTime() === oldDates[1].getTime()) {
        // Create a builder from the existing rule, then change the dates.
        rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
      }
    }
  }
}
range.setDataValidations(rules);
```

#### Return

`DataValidationBuilder` — a builder based on this rule's settings

---

### getAllowInvalid()

Returns `true` if the rule shows a warning when input fails data validation, or `false` if it rejects the input entirely. The default for new data validation rules is `true`.

#### Return

`Boolean` — `true` if the rule allows input that fails data validation; `false` if not

---

### getCriteriaType()

Gets the rule's criteria type as defined in the `DataValidationCriteria` enum. To get the arguments for the criteria, use `getCriteriaValues()`. To use these values to create or modify a data validation rule, see `withCriteria(criteria, args)`.

```
// Log information about the data validation rule for cell A1.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = cell.getDataValidation();
if (rule != null) {
  const criteria = rule.getCriteriaType();
  const args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.');
}
```

#### Return

`DataValidationCriteria` — the type of data validation criteria

---

### getCriteriaValues()

Gets an array of arguments for the rule's criteria. To get the criteria type, use `getCriteriaType()`. To use these values to create or modify a data validation rule, see `withCriteria(criteria, args)`.

```
// Log information about the data validation rule for cell A1.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = cell.getDataValidation();
if (rule != null) {
  const criteria = rule.getCriteriaType();
  const args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.');
}
```

#### Return

`Object[]` — an array of arguments appropriate to the rule's criteria type; the number of arguments and their type match the corresponding `require...()` method of the `DataValidationBuilder` class

---

### getHelpText()

Gets the rule's help text, or `null` if no help text is set.

#### Return

`String` — the rule's help text, or `null` if no help text is set

---

### requireCheckbox()

Sets the data validation rule to require that the input is a boolean value; this value is rendered as a checkbox.

```
// Set the data validation for cell A1 to require a boolean value; the value is
// rendered as a checkbox.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
cell.setDataValidation(rule);
```

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireCheckbox(checkedValue)

Sets the data validation rule to require that the input is the specified value or blank. When the input matches the specified value the cell is rendered as a checked checkbox. When the input is blank the cell is rendered as an unchecked checkbox.

```
// Set the data validation for cell A1 to require a custom checked value that is
// rendered as a checkbox.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED').build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `checkedValue` | `Object` | The value assigned to a checked box. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireCheckbox(checkedValue, uncheckedValue)

Sets the data validation rule to require that the input is one of the specified values. When the input is `checkedValue` the cell is rendered as a checked checkbox. When the input is `uncheckedValue` the cell is rendered as an unchecked checkbox.

```
// Set the data validation for cell A1 to require custom checked values that are
// rendered as a checkbox.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireCheckbox('APPROVED', 'PENDING')
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `checkedValue` | `Object` | The value assigned to a checked box. |
| `uncheckedValue` | `Object` | The value assigned to an unchecked box. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDate()

Sets the data validation rule to require a date.

```
// Set the data validation for cell A1 to require a date.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation().requireDate().build();
cell.setDataValidation(rule);
```

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDateAfter(date)

Sets the data validation rule to require a date after the given value. The time fields of the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date after January 1, 2013.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireDateAfter(new Date('1/1/2013'))
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The latest unacceptable date. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDateBefore(date)

Sets the data validation rule to require a date before the given value. The time fields of the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date before January 1, 2013.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireDateBefore(new Date('1/1/2013'))
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The earliest unacceptable date. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDateBetween(start, end)

Sets the data validation rule to require a date that falls between, or is either of, two specified dates. The time fields of the `Date` objects are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date in 2013.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation()
        .requireDateBetween(new Date('1/1/2013'), new Date('12/31/2013'))
        .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Date` | The earliest acceptable date. |
| `end` | `Date` | The latest acceptable date. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDateEqualTo(date)

Sets the data validation rule to require a date equal to the given value. The time fields of the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date equal to January 1,
// 2013.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireDateEqualTo(new Date('1/1/2013'))
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The sole acceptable date. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDateNotBetween(start, end)

Sets the data validation rule to require a date that does not fall between, and is neither of, two specified dates. The time fields of the `Date` objects are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date not in 2013.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation()
        .requireDateNotBetween(new Date('1/1/2013'), new Date('12/31/2013'))
        .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Date` | The earliest unacceptable date. |
| `end` | `Date` | The latest unacceptable date. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDateOnOrAfter(date)

Sets the data validation rule to require a date on or after the given value. The time fields of the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date on or after January 1,
// 2013.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireDateOnOrAfter(new Date('1/1/2013'))
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The earliest acceptable date. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireDateOnOrBefore(date)

Sets the data validation rule to require a date on or before the given value. The time fields of the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date on or before January 1,
// 2013.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireDateOnOrBefore(new Date('1/1/2013'))
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | The latest acceptable date. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireFormulaSatisfied(formula)

Sets the data validation rule to require that the given formula evaluates to `true`.

```
// Set the data validation for cell A1 to equal B1 with a custom formula.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireFormulaSatisfied('=EQ(A1,B1)')
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | A custom formula that evaluates to `true` if the input is valid. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberBetween(start, end)

Sets the data validation rule to require a number that falls between, or is either of, two specified numbers.

```
// Set the data validation for cell A1 to require a number between 1 and 10.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireNumberBetween(1, 10).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The lowest acceptable value. |
| `end` | `Number` | The highest acceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberEqualTo(number)

Sets the data validation rule to require a number equal to the given value.

```
// Set the data validation for cell A1 to require a number equal
// to 3.1415926536.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireNumberEqualTo(Math.PI).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The sole acceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberGreaterThan(number)

Sets the data validation rule to require a number greater than the given value.

```
// Set the data validation for cell A1 to require a number greater than 0.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The highest unacceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberGreaterThanOrEqualTo(number)

Sets the data validation rule to require a number greater than or equal to the given value.

```
// Set the data validation for cell A1 to require a number greater than or equal
// to 0.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireNumberGreaterThanOrEqualTo(0)
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The lowest acceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberLessThan(number)

Sets the data validation rule to require a number less than the given value.

```
// Set the data validation for cell A1 to require a number less than 0.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireNumberLessThan(0).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The lowest unacceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberLessThanOrEqualTo(number)

Sets the data validation rule to require a number less than or equal to the given value.

```
// Set the data validation for cell A1 to require a number less than or equal to
// 0.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireNumberLessThanOrEqualTo(0)
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The highest acceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberNotBetween(start, end)

Sets the data validation rule to require a number that does not fall between, and is neither of, two specified numbers.

```
// Set the data validation for cell A1 to require a number not between 1 and 10.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireNumberNotBetween(1, 10).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | The lowest unacceptable value. |
| `end` | `Number` | The highest unacceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireNumberNotEqualTo(number)

Sets the data validation rule to require a number not equal to the given value.

```
// Set the data validation for cell A1 to require a number not equal to 0.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireNumberNotEqualTo(0).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | The sole unacceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireTextContains(text)

Sets the data validation rule to require that the input contains the given value.

```
// Set the data validation for cell A1 to require any value that includes
// "Google".
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireTextContains('Google').build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The value that the input must contain. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireTextDoesNotContain(text)

Sets the data validation rule to require that the input does not contain the given value.

```
// Set the data validation for cell A1 to require any value that does not
// include "@".
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireTextDoesNotContain('@').build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The value that the input must not contain. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireTextEqualTo(text)

Sets the data validation rule to require that the input is equal to the given value.

```
// Set the data validation for cell A1 to require "Yes".
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule =
    SpreadsheetApp.newDataValidation().requireTextEqualTo('Yes').build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The sole acceptable value. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireTextIsEmail()

Sets the data validation rule to require that the input is in the form of an email address.

```
// Set the data validation for cell A1 to require text in the form of an email
// address.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation().requireTextIsEmail().build();
cell.setDataValidation(rule);
```

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireTextIsUrl()

Sets the data validation rule to require that the input is in the form of a URL.

```
// Set the data validation for cell A1 to require text in the form of a URL.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation().requireTextIsUrl().build();
cell.setDataValidation(rule);
```

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireValueInList(values)

Sets the data validation rule to require that the input is equal to one of the given values.

```
// Set the data validation for cell A1 to require "Yes" or "No", with a dropdown
// menu.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireValueInList(['Yes', 'No'])
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `String[]` | An array of acceptable values. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireValueInList(values, showDropdown)

Sets the data validation rule to require that the input is equal to one of the given values, with an option to hide the dropdown menu.

```
// Set the data validation for cell A1 to require "Yes" or "No", with no
// dropdown menu.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireValueInList(['Yes', 'No'], false)
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `String[]` | An array of acceptable values. |
| `showDropdown` | `Boolean` | `true` if the spreadsheet should show a dropdown menu for the values; `false` if not. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireValueInRange(range)

Sets the data validation rule to require that the input is equal to a value in the given range.

```
// Set the data validation for cell A1 to require a value from B1:B10, with a
// dropdown menu.
const cell = SpreadsheetApp.getActive().getRange('A1');
const range = SpreadsheetApp.getActive().getRange('B1:B10');
const rule =
    SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | A range that contains the acceptable values. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### requireValueInRange(range, showDropdown)

Sets the data validation rule to require that the input is equal to a value in the given range, with an option to hide the dropdown menu.

```
// Set the data validation for cell A1 to require value from B1:B10, with no
// dropdown menu.
const cell = SpreadsheetApp.getActive().getRange('A1');
const range = SpreadsheetApp.getActive().getRange('B1:B10');
const rule = SpreadsheetApp.newDataValidation()
                 .requireValueInRange(range, false)
                 .build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | A range that contains the acceptable values. |
| `showDropdown` | `Boolean` | `true` if the spreadsheet should show a dropdown menu for the values; `false` if not. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### setAllowInvalid(allowInvalidData)

Sets whether to show a warning when input fails data validation or whether to reject the input entirely. The default for new data validation rules is `true`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `allowInvalidData` | `Boolean` | `true` if the rule should allow input that fails data validation; `false` if not. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### setHelpText(helpText)

Sets the help text that appears when the user hovers over the cell on which data validation is set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `helpText` | `String` | The help text to set. |

#### Return

`DataValidationBuilder` — this builder, for chaining

---

### withCriteria(criteria, args)

Sets the data validation rule to criteria defined by `DataValidationCriteria` values, typically taken from the `criteria` and `arguments` of an existing rule.

```
// Change existing data validation rules that require a date in 2013 to require
// a date in 2014.
const oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
const newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
const rules = range.getDataValidations();

for (let i = 0; i < rules.length; i++) {
  for (let j = 0; j < rules[i].length; j++) {
    const rule = rules[i][j];

    if (rule != null) {
      const criteria = rule.getCriteriaType();
      const args = rule.getCriteriaValues();

      if (criteria === SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN &&
          args[0].getTime() === oldDates[0].getTime() &&
          args[1].getTime() === oldDates[1].getTime()) {
        // Create a builder from the existing rule, then change the dates.
        rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
      }
    }
  }
}
range.setDataValidations(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `criteria` | `DataValidationCriteria` | The type of data validation criteria. |
| `args` | `Object[]` | An array of arguments appropriate to the criteria type; the number of arguments and their type match the corresponding `require...()` method above. |

#### Return

`DataValidationBuilder` — this builder, for chaining
