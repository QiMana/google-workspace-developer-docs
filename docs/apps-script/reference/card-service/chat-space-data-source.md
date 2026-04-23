---
source: https://developers.google.com/apps-script/reference/card-service/chat-space-data-source
root: apps-script
fetched_at: 2026-04-23T15:19:00.860Z
---

# Class ChatSpaceDataSource

## Page Summary

- ChatSpaceDataSource populates Google Chat spaces as selection items for a multiselect menu, only including spaces the user is a member of.
- This data source is exclusively for Google Chat apps and is not available for Google Workspace add-ons.
- The `setDefaultToCurrentSpace` method allows the current Google Chat space to be selected as an item by default in the multiselect menu when set to `true`.

A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.

```
const chatSpaceDataSource =
    CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

## Detailed documentation

### setDefaultToCurrentSpace(defaultToCurrentSpace)

If set to `true`, the multi select menu selects the current Google Chat space as an item by default.

```
const chatSpaceDataSource =
    CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `defaultToCurrentSpace` | `Boolean` | The boolean to be set. |

#### Return

`ChatSpaceDataSource` — This object, for chaining.
