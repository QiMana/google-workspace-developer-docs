---
source: https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder
root: apps-script
fetched_at: 2026-04-23T15:20:11.156Z
---

# Class CheckboxValidationBuilder

## Page Summary

- CheckboxValidationBuilder is used to create validation rules for checkbox items in a form.
- It allows you to require a specific number of choices to be selected using methods like `requireSelectAtLeast`, `requireSelectAtMost`, and `requireSelectExactly`.
- These methods take an integer as a parameter to specify the required number of selections.

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

## Detailed documentation

### requireSelectAtLeast(number)

Require at least this many choices to be selected.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` |  |

#### Return

`CheckboxValidationBuilder` — this `CheckboxValidationBuilder`, for chaining

---

### requireSelectAtMost(number)

Require at most this many choices to be selected.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` |  |

#### Return

`CheckboxValidationBuilder` — this `CheckboxValidationBuilder`, for chaining

---

### requireSelectExactly(number)

Require exactly this many choices to be selected.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` |  |

#### Return

`CheckboxValidationBuilder` — this `CheckboxValidationBuilder`, for chaining
