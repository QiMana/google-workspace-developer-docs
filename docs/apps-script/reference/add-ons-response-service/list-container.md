---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/list-container
root: apps-script
fetched_at: 2026-04-23T15:18:39.389Z
---

# Class ListContainer

Container for list items, where each list item can contain multiple `TextFormatElement`. \*

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const listContainer = AddOnsResponseService.newListContainer()
      .setListType(AddOnsResponseService.ListType.UNORDERED)
      .addListItem(
        AddOnsResponseService.newListItem()
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setStyledText(sampleStyledText)
          ));
```

## Detailed documentation

### addListItem(listItem)

Adds a list item to the list container.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `listItem` | `ListItem` | The `ListItem` to be added to the list container. |

#### Return

`ListContainer` — This list container object, for chaining.

---

### setListNestLevel(listLevel)

Sets the level of the list, starts from 0 for the top level, and increases by 1 for each nested list.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `listLevel` | `Integer` | The number of nest levels of the list. |

#### Return

`ListContainer` — This list container object, for chaining.

---

### setListType(listType)

Sets the type of the list to be ordered or unordered.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `listType` | `ListType` | The `ListType` of the list. |

#### Return

`ListContainer` — This list container object, for chaining.
