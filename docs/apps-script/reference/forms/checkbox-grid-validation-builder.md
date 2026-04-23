---
source: https://developers.google.com/apps-script/reference/forms/checkbox-grid-validation-builder
root: apps-script
fetched_at: 2026-04-23T15:20:12.672Z
---

# Class CheckboxGridValidationBuilder

## Page Summary

- CheckboxGridValidationBuilder is used to create validation rules for Checkbox Grid items in Google Forms.
- The `requireLimitOneResponsePerColumn()` method is used to ensure that users select only one response per column in a Checkbox Grid item.
- The example demonstrates how to add a Checkbox Grid item to a form and apply validation to limit responses per column.

```
// Add a checkbox grid item to a form and restrict it to one response per
// column.
const form = FormApp.openById('123abc');
const checkboxGridItem = form.addCheckboxGridItem();
checkboxGridItem.setTitle('Where did you celebrate New Years?')
    .setRows(['New York', 'San Francisco', 'London'])
    .setColumns(['2014', '2015', '2016', '2017']);
const checkboxGridValidation = FormApp.createcheckboxGridValidation()
                                   .setHelpText('Select one item per column.')
                                   .requireLimitOneResponsePerColumn()
                                   .build();
checkboxGridItem.setValidation(checkboxGridValidation);
```

## Detailed documentation

### requireLimitOneResponsePerColumn()

Requires limit of one response per column for a grid item.

#### Return

`CheckboxGridValidationBuilder` — this validation builder, for chaining
