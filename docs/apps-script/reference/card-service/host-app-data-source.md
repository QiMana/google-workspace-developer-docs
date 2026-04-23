---
source: https://developers.google.com/apps-script/reference/card-service/host-app-data-source
root: apps-script
fetched_at: 2026-04-23T15:19:08.318Z
---

# Class HostAppDataSource

## Page Summary

- HostAppDataSource is used with SelectionInput widgets in multiselect menus to populate items from a Google Workspace application data source.
- This feature is exclusively available for Google Chat apps and cannot be used with Google Workspace add-ons.
- The `setChatDataSource` method allows setting the data source from Google Chat.

For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu.

```
const chatSpaceDataSource =
    CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);

const chatClientDataSource =
    CardService.newChatClientDataSource().setSpaceDataSource(
        chatSpaceDataSource);

const hostAppDataSource =
    CardService.newHostAppDataSource().setChatDataSource(chatClientDataSource);
```

Only available for Google Chat apps and Google Workspace add-ons that extend flows. Not available for other Google Workspace add-ons.

## Detailed documentation

### setChatDataSource(chatClientDataSource)

Sets the data source from Google Chat.

```
const chatSpaceDataSource =
    CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);

const chatClientDataSource =
    CardService.newChatClientDataSource().setSpaceDataSource(
        chatSpaceDataSource);

const hostAppDataSource =
    CardService.newHostAppDataSource().setChatDataSource(chatClientDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `chatClientDataSource` | `ChatClientDataSource` | The data source to be set. |

#### Return

`HostAppDataSource` — This object, for chaining.

---

### setWorkflowDataSource(workflowDataSource)

Sets the data source from Google Workspace Flows.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const workflowDataSource =
    CardService.newWorkflowDataSource().setIncludeVariables(true);

const hostAppDataSource =
    CardService.newHostAppDataSource().setWorkflowDataSource(workflowDataSource);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `workflowDataSource` | `WorkflowDataSource` | The data source to be set. |

#### Return

`HostAppDataSource` — This object, for chaining.
