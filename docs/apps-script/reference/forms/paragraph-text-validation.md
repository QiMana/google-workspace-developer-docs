---
source: https://developers.google.com/apps-script/reference/forms/paragraph-text-validation
root: apps-script
fetched_at: 2026-04-23T15:20:22.245Z
---

# Class ParagraphTextValidation

## Page Summary

- ParagraphTextValidation is a DataValidation specifically for a ParagraphTextItem in Google Forms.
- It allows you to set validation rules, such as requiring a minimum text length.
- The example demonstrates how to create a form, add a paragraph text item, set a validation requiring at least 100 characters, and assign the validation to the item.

A DataValidation for a `ParagraphTextItem`.

```
// Add a paragraph text item to a form and require the answer to be at least 100
// characters.
const form = FormApp.create('My Form');
const paragraphTextItem =
    form.addParagraphTextItem().setTitle('Describe yourself:');
const paragraphtextValidation =
    FormApp.createParagraphTextValidation()
        .setHelpText('Answer must be more than 100 characters.')
        .requireTextLengthGreaterThanOrEqualTo(100)
        .build();
paragraphTextItem.setValidation(paragraphtextValidation);
```
