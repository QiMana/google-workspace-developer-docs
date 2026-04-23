---
source: https://developers.google.com/apps-script/reference/forms/checkbox-validation
root: apps-script
fetched_at: 2026-04-23T15:20:10.774Z
---

# Class CheckboxValidation

## Page Summary

- CheckboxValidation is a DataValidation specifically for CheckboxItems in Google Forms.
- It allows you to set requirements for the number of choices a user must select from a checkbox item.
- You can customize the help text displayed to the user when the validation is not met.
- The provided code example demonstrates how to create a CheckboxValidation that requires exactly two selections.

A DataValidation for a `CheckboxItem`.

```
// Add a checkBox item to a form and require exactly two selections.
const form = FormApp.create('My Form');
const checkBoxItem = form.addCheckboxItem();
checkBoxItem.setTitle('What two condiments would you like on your hot dog?');
checkBoxItem.setChoices([
  checkBoxItem.createChoice('Ketchup'),
  checkBoxItem.createChoice('Mustard'),
  checkBoxItem.createChoice('Relish'),
]);
const checkBoxValidation = FormApp.createCheckboxValidation()
                               .setHelpText('Select two condiments.')
                               .requireSelectExactly(2)
                               .build();
checkBoxItem.setValidation(checkBoxValidation);
```
