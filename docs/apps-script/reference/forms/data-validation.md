---
source: https://developers.google.com/apps-script/reference/forms/data-validation
root: apps-script
fetched_at: 2026-04-23T15:20:11.264Z
---

# Class DataValidation

## Page Summary

- DataValidation is a base class with properties common to all validations, including help text.
- Validations can be applied to certain form items.
- The help text is displayed to the user if their input fails validation.
- The `getHelpText()` method is used to retrieve the DataValidation's help text.

The base DataValidation that contains properties common to all validations, such as help text. Validations can be added to certain `Form` items.

```
// Add a text item to a form and require it to be a number within a range.
var textItem = form.addTextItem().setTitle('Pick a number between 1 and 100?');
var textValidation = FormApp.createTextValidation()
  .setHelpText(“Input was not a number between 1 and 100.”)
  .requireNumberBetween(1, 100);
textItem.setValidation(textValidation);
```

## Detailed documentation

### getHelpText()

Gets the DataValidation's help text. This text is shown to the user if the input fails validation.

#### Return

`String` — the DataValidation's help text
