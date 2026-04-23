---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
root: apps-script
fetched_at: 2026-04-23T15:21:32.825Z
---

# Enum DataValidationCriteria

## Page Summary

- DataValidationCriteria is an enumeration used to define data validation rules for a range in a spreadsheet.
- Enum properties are accessed by calling the parent class, name, and property, such as SpreadsheetApp.DataValidationCriteria.DATE\_IS\_VALID\_DATE.
- The provided code example demonstrates how to iterate through existing data validation rules on a range and modify them based on specific criteria.
- Data validation criteria cover various types including dates, numbers, text, values from lists or ranges, custom formulas, and checkboxes.

An enumeration representing the data validation criteria that can be set on a range.

To call an enum, you call its parent class, name, and property. For example, ` SpreadsheetApp.DataValidationCriteria.DATE_IS_VALID_DATE`.

```
// Change existing data-validation rules that require a date in 2013 to require
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
