---
source: https://developers.google.com/apps-script/reference/forms/text-validation-builder
root: apps-script
fetched_at: 2026-04-23T15:20:26.423Z
---

# Class TextValidationBuilder

## Page Summary

- TextValidationBuilder is a DataValidationBuilder used for creating text validation rules in forms.
- It provides methods to require text items to be numbers, within specific ranges, or matching/not matching patterns.
- You can also require text items to be email addresses, URLs, or have a specific length.
- The builder allows chaining methods to apply multiple validation rules.

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

## Detailed documentation

### requireNumber()

Requires text item to be a number.

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberBetween(start, end)

Requires text item to be a number between start and end, inclusive.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | the lower bounds of the inclusive range |
| `end` | `Number` | the upper bounds of the inclusive range |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberEqualTo(number)

Requires text item to be a number equal to value specified.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | the value which the item must be equal to. |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberGreaterThan(number)

Requires text item to be a number greater than the value specified.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | the value which the item must be greater than. |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberGreaterThanOrEqualTo(number)

Requires text item to be a number greater than or equal to the value specified.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | the value which the item must be greater than or equal to. |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberLessThan(number)

Requires text item to be a number less than the value specified.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | the value which the item must be greater than. |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberLessThanOrEqualTo(number)

Requires text item to be a number less than or equal to the value specified.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | the value which the item must be less than or equal to. |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberNotBetween(start, end)

Requires text item to be a number not between start and end, inclusive.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Number` | the lower bounds of the inclusive range |
| `end` | `Number` | the upper bounds of the inclusive range |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireNumberNotEqualTo(number)

Requires text item to be a number not equal to the value specified.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Number` | the value which the item must not be equal to. |

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireTextContainsPattern(pattern)

Requires response to contain pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must contain pattern |

#### Return

`TextValidationBuilder` — this for chaining

---

### requireTextDoesNotContainPattern(pattern)

Requires response to not contain pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must not contain pattern |

#### Return

`TextValidationBuilder` — this for chaining

---

### requireTextDoesNotMatchPattern(pattern)

Requires response to not match pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must not match pattern |

#### Return

`TextValidationBuilder` — this for chaining

---

### requireTextIsEmail()

Requires text item to be an email address.

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireTextIsUrl()

Requires text item to be a URL.

#### Return

`TextValidationBuilder` — this , for chaining

---

### requireTextLengthGreaterThanOrEqualTo(number)

Requires response length to be greater than or equal to value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` | paragraph text length must be greater than this value |

#### Return

`TextValidationBuilder` — this for chaining

---

### requireTextLengthLessThanOrEqualTo(number)

Requires response length to be less than value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` | paragraph text length must be less than or equal to this value |

#### Return

`TextValidationBuilder` — this for chaining

---

### requireTextMatchesPattern(pattern)

Requires response to match pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must match pattern |

#### Return

`TextValidationBuilder` — this for chaining

---

### requireWholeNumber()

Requires text item to be a whole number.

#### Return

`TextValidationBuilder` — this , for chaining
