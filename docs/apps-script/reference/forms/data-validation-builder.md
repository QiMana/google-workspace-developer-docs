---
source: https://developers.google.com/apps-script/reference/forms/data-validation-builder
root: apps-script
fetched_at: 2026-04-23T15:20:12.174Z
---

# Class DataValidationBuilder

## Page Summary

- DataValidationBuilder is the base builder for creating DataValidation objects, containing common properties like help text.
- The `build()` method finalizes the DataValidation object from the builder.
- The `copy()` method provides a duplicate of the current DataValidationBuilder instance.
- The `setHelpText(text)` method allows you to set the help text displayed when validation fails.

The base DataValidationBuilder that contains setters for properties common to all validations, such as help text. Used to build DataValadation objects.

```
// Add a text item to a form and require it to be a number within a range.
var textItem = form.addTextItem().setTitle('Pick a number between 1 and 100?');
var textValidation = FormApp.createTextValidation()
  .setHelpText(“Input was not a number between 1 and 100.”)
  .requireNumberBetween(1, 100)
  .build();
textItem.setValidation(textValidation);
```

## Detailed documentation

### build()

Builds a DataValidation of the corresponding type for this builder.

#### Return

---

### copy()

Returns a copy of this builder.

#### Return

`DataValidationBuilder` — `DataValidationBuilder`

---

### setHelpText(text)

Sets the item's help text. This text is shown to the user if the input fails validation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`DataValidationBuilder` — this , for chaining
