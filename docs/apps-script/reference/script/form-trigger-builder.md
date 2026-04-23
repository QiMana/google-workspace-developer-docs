---
source: https://developers.google.com/apps-script/reference/script/form-trigger-builder
root: apps-script
fetched_at: 2026-04-23T15:20:57.782Z
---

# Class FormTriggerBuilder

## Page Summary

- FormTriggerBuilder is used to build form triggers.
- The `create()` method creates and returns a new trigger.
- The `onFormSubmit()` method specifies a trigger that fires when a form response is submitted.
- The `onOpen()` method specifies a trigger that fires when the form's edit view is opened.

A builder for form triggers.

## Detailed documentation

### create()

Creates and returns the new trigger.

#### Return

`Trigger` — The new trigger.

---

### onFormSubmit()

Specifies a trigger that fires when a response is submitted to the form.

```
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
ScriptApp.newTrigger('myFunction').forForm(form).onFormSubmit().create();
```

#### Return

`FormTriggerBuilder` — This `FormTriggerBuilder`, for chaining.

---

### onOpen()

Specifies a trigger that fires when the form's edit view is opened.

```
const form = FormApp.getActiveForm();
ScriptApp.newTrigger('myFunction').forForm(form).onOpen().create();
```

#### Return

`FormTriggerBuilder` — This `FormTriggerBuilder`, for chaining.
