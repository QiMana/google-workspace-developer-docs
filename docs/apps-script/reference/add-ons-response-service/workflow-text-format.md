---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/workflow-text-format
root: apps-script
fetched_at: 2026-04-23T15:18:44.683Z
---

# Class WorkflowTextFormat

A block of text with rich formatting options including styles, hyperlinks, and interactive elements defined in `TextFormatElement`. A WorkflowTextFormat can contain one or more `TextFormatElement` s.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const workflowTextFormat = AddOnsResponseService.newWorkflowTextFormat()
  .addTextFormatElement(
    AddOnsResponseService.newTextFormatElement()
      .setText("example_text")
  );
```

## Detailed documentation

### addTextFormatElement(textFormatElement)

Adds a `TextFormatElement` to the workflow text format.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textFormatElement` | `TextFormatElement` | The text format element to be added. |

#### Return

`WorkflowTextFormat` — This workflow text format object, for chaining.
