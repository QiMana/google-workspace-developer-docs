---
source: https://developers.google.com/apps-script/reference/script/document-trigger-builder
root: apps-script
fetched_at: 2026-04-23T15:20:57.963Z
---

# Class DocumentTriggerBuilder

## Page Summary

- DocumentTriggerBuilder is used to build document triggers.
- The `create()` method creates and returns the new trigger.
- The `onOpen()` method specifies a trigger that fires when a document is opened.

A builder for document triggers.

## Detailed documentation

### create()

Creates and returns the new trigger.

#### Return

`Trigger` — The new trigger.

---

### onOpen()

Specifies a trigger that fires when the document is opened.

```
const document = DocumentApp.getActiveDocument();
ScriptApp.newTrigger('myFunction').forDocument(document).onOpen().create();
```

#### Return

`DocumentTriggerBuilder` — This `DocumentTriggerBuilder`, for chaining.
