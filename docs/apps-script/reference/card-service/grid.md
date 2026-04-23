---
source: https://developers.google.com/apps-script/reference/card-service/grid
root: apps-script
fetched_at: 2026-04-23T15:19:06.053Z
---

# Class Grid

## Page Summary

- A Grid is an organized grid used to display a collection of grid items.
- The Grid is available for Google Workspace add-ons and Google Chat apps.
- Grids support methods to add items, set authorization, border, compose, click, and open link actions, define the number of columns, and set a title.
- A UI object can only have one click or action method set at a time.

An organized grid to display a collection of grid items.

Available for Google Workspace add-ons and Google Chat apps.

```
const grid = CardService.newGrid().setTitle('My Grid').setNumColumns(2).addItem(
    CardService.newGridItem().setTitle('My item'));
```

## Detailed documentation

### addEventAction(eventAction)

Adds the event action that can be performed on the widget.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eventAction` | `EventAction` | The `EventAction` to be added. |

#### Return

`Widget` — The Object, for chaining.

---

### addItem(gridItem)

Adds a new grid item to the grid.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `gridItem` | `GridItem` | The grid item to add. |

#### Return

`Grid` — This object, for chaining.

---

### setAuthorizationAction(action)

Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.

A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

```
// ...

const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `AuthorizationAction` | The object that specifies the authorization action to take when this element is clicked. |

#### Return

`Grid` — This object, for chaining.

---

### setBorderStyle(borderStyle)

Sets the border style applied to each grid item. Default is NO\_BORDER.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `borderStyle` | `BorderStyle` | The border style to apply. |

#### Return

`Grid` — This object, for chaining.

---

### setComposeAction(action, composedEmailType)

Sets an action that composes a draft email when the object is clicked. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

The `Action` parameter must specify a callback function that returns a `ComposeActionResponse` object configured using `ComposeActionResponseBuilder.setGmailDraft(draft)`.

```
// ...

const action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback(e) {
  const thread = GmailApp.getThreadById(e.threadId);
  const draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The object that specifies the compose action to take when this element is clicked. |
| `composedEmailType` | `ComposedEmailType` | An enum value that specifies whether the composed draft is a standalone or reply draft. |

#### Return

`Grid` — This object, for chaining.

---

### setId(id)

Sets the unique ID assigned that's used to identify the widget to be mutated. Widget mutation is only supported in Add-Ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The id of the widget, with a limit of 64 characters and in format of \`\[a-zA-Z0-9-\]+\`. |

#### Return

`Widget` — This object, for chaining.

---

### setNumColumns(numColumns)

The number of columns to display in the grid. If shown in the right side panel, you can display 1-2 columns and the default value is 1. If shown in a dialog, you can display 2-3 columns and the default value is 2.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `numColumns` | `Integer` | The number of columns. |

#### Return

`Grid` — This object, for chaining.

---

### setOnClickAction(action)

Sets an action that executes when the object is clicked. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

The `Action` parameter must specify a callback function that returns a `ActionResponse` object.

```
// ...

const action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton()
    .setText('Create notification')
    .setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(
          CardService.newNotification().setText('Some info to display to user'),
          )
      .build();
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The action to take when this element is clicked. |

#### Return

`Grid` — This object, for chaining.

---

### setOnClickOpenLinkAction(action)

Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the `OpenLink` object. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

The `Action` parameter must specify a callback function that returns a `ActionResponse` object configured using `ActionResponseBuilder.setOpenLink(openLink)`.

```
// ...

const action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton()
    .setText('Open Link')
    .setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
      .build();
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The object that specifies the open link action to take when this element is clicked. |

#### Return

`Grid` — This object, for chaining.

---

### setOpenLink(openLink)

Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openLink` | `OpenLink` | An `OpenLink` object describing the URL to open. |

#### Return

`Grid` — This object, for chaining.

---

### setTitle(title)

Sets the title text of the grid. The text must be a plain string with no formatting.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title text. |

#### Return

`Grid` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
