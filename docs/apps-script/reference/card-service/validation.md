---
source: https://developers.google.com/apps-script/reference/card-service/validation
root: apps-script
fetched_at: 2026-04-23T15:19:14.564Z
---

# Class Validation

## Page Summary

- A Validation object defines the validation rule for an attached widget.
- Validation is available for Google Chat apps and Google Workspace add-ons.
- The `setCharacterLimit` method sets the maximum number of characters allowed in a widget.
- The `setInputType` method sets the type of input expected for a widget.

An object that defines the validation rule for the widget that it is attached to.

Available for Google Chat apps and Google Workspace add-ons.

```
const validation = CardService.newValidation().setCharacterLimit('10').setInputType(
    CardService.InputType.TEXT);
```

## Detailed documentation

### setCharacterLimit(characterLimit)

Sets the character limit of the widget.

Available for Google Chat apps and Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `characterLimit` | `Integer` | The character limit to set. Note that this restriction is only effective for `TextInput` and is ignored for other widgets. |

#### Return

`Validation` — This object, for chaining.

---

### setInputType(inputType)

Sets the input type of the widget.

Available for Google Chat apps and Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `inputType` | `InputType` | The `InputType` to set. |

#### Return

`Validation` — This object, for chaining.
