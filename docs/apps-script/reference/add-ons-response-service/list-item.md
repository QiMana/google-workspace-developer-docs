---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/list-item
root: apps-script
fetched_at: 2026-04-23T15:18:39.812Z
---

# Class ListItem

A list item, where each list item can contain multiple `TextFormatElement`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const listItem = AddOnsResponseService.newListItem()
      .addTextFormatElements(AddOnsResponseService.newStyledText());
```

## Detailed documentation

### addTextFormatElement(textFormatElement)

Adds a `TextFormatElement` to the list item.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textFormatElement` | `TextFormatElement` | The `TextFormatElement` to add to the list item. |

#### Return

`ListItem` — This list item object, for chaining.
