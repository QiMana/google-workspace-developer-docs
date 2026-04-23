---
source: https://developers.google.com/apps-script/reference/forms/text-validation
root: apps-script
fetched_at: 2026-04-23T15:20:30.785Z
---

# Class TextValidation

## Page Summary

- TextValidation is a DataValidation specifically for TextItems in Google Forms.
- It can be used to set validation rules for text input, such as requiring a number within a specific range.
- You can customize the help text shown to the user when the input is invalid.
- TextValidation objects are created using `FormApp.createTextValidation()` and applied to a TextItem using `setValidation()`.

A DataValidation for a `TextItem`.

```
// Add a text item to a form and require it to be a number within a range.
const form = FormApp.create('My form');
const textItem =
    form.addTextItem().setTitle('Pick a number between 1 and 100?');
const textValidation =
    FormApp.createTextValidation()
        .setHelpText('Input was not a number between 1 and 100.')
        .requireNumberBetween(1, 100)
        .build();
textItem.setValidation(textValidation);
```
