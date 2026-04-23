---
source: https://developers.google.com/apps-script/reference/forms/checkbox-grid-validation
root: apps-script
fetched_at: 2026-04-23T15:20:10.651Z
---

# Class CheckboxGridValidation

## Page Summary

- CheckboxGridValidation is a DataValidation specifically for CheckboxGridItems.
- It allows setting validation rules like requiring one response per column in a checkbox grid item.
- You can create a CheckboxGridValidation using `FormApp.createCheckboxGridValidation()` and apply it to a CheckboxGridItem.

A DataValidation for a `CheckboxGridItem`.

```
// Add a checkbox grid item to a form and require one response per column.
const form = FormApp.openById('123abc');
const checkboxGridItem = form.addCheckboxGridItem();
checkboxGridItem.setTitle('Where did you celebrate New Years?')
    .setRows(['New York', 'San Francisco', 'London'])
    .setColumns(['2014', '2015', '2016', '2017']);
const checkboxGridValidation = FormApp.createCheckboxGridValidation()
                                   .setHelpText('Select one item per column.')
                                   .requireLimitOneResponsePerColumn()
                                   .build();
checkboxGridItem.setValidation(checkboxGridValidation);
```
