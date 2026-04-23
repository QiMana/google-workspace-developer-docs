---
source: https://developers.google.com/apps-script/reference/card-service/chat-client-data-source
root: apps-script
fetched_at: 2026-04-23T15:18:59.955Z
---

# Class ChatClientDataSource

## Page Summary

- ChatClientDataSource is a data source for a multiselect menu in a SelectionInput widget, specifically for Google Chat.
- It populates selection items, for example, Google Chat spaces the user is a member of.
- This feature is exclusively available for Google Chat apps and not for Google Workspace add-ons.
- The setSpaceDataSource method populates Google Chat spaces as selection items for a multiselect menu.

For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of.

```
const chatSpaceDataSource =
    CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);

const chatClientDataSource =
    CardService.newChatClientDataSource().setSpaceDataSource(
        chatSpaceDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

## Detailed documentation

### setSpaceDataSource(spaceDataSource)

A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.

```
const chatSpaceDataSource =
    CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);

const chatClientDataSource =
    CardService.newChatClientDataSource().setSpaceDataSource(
        chatSpaceDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `spaceDataSource` | `ChatSpaceDataSource` | The data source to be set. |

#### Return

`ChatClientDataSource` — This object, for chaining.
