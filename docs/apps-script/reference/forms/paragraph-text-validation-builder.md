---
source: https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder
root: apps-script
fetched_at: 2026-04-23T15:20:24.406Z
---

# Class ParagraphTextValidationBuilder

## Page Summary

- ParagraphTextValidationBuilder is used to create validation rules for ParagraphTextValidation in Google Forms.
- It offers methods to require or disallow specific text patterns within a response.
- It can also enforce minimum or maximum text length requirements for responses.
- The builder methods return the builder object, allowing for chaining multiple validation rules.

```
// Add a paragraph text item to a form and require the answer to be at least 100
// characters.
const form = FormApp.create('My Form');
const paragraphTextItem =
    form.addParagraphTextItem().setTitle('Describe yourself:');
const paragraphtextValidation =
    FormApp.createParagraphTextValidation()
        .setHelpText('Answer must be more than 100 characters.')
        .requireTextLengthGreaterThan(100);
paragraphTextItem.setValidation(paragraphtextValidation);
```

## Detailed documentation

### requireTextContainsPattern(pattern)

Requires response to contain pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must contain pattern |

#### Return

`ParagraphTextValidationBuilder` — this for chaining

---

### requireTextDoesNotContainPattern(pattern)

Requires response to not contain pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must not contain pattern |

#### Return

`ParagraphTextValidationBuilder` — this for chaining

---

### requireTextDoesNotMatchPattern(pattern)

Requires response to not match pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must not match pattern |

#### Return

`ParagraphTextValidationBuilder` — this for chaining

---

### requireTextLengthGreaterThanOrEqualTo(number)

Requires response length to be greater than or equal to value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` | paragraph text length must be greater than this value |

#### Return

`ParagraphTextValidationBuilder` — this for chaining

---

### requireTextLengthLessThanOrEqualTo(number)

Requires response length to be less than value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `Integer` | paragraph text length must be less than or equal to this value |

#### Return

`ParagraphTextValidationBuilder` — this for chaining

---

### requireTextMatchesPattern(pattern)

Requires response to match pattern.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | `String` | text must match pattern |

#### Return

`ParagraphTextValidationBuilder` — this for chaining
