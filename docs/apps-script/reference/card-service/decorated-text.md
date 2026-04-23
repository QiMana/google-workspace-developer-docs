---
source: https://developers.google.com/apps-script/reference/card-service/decorated-text
root: apps-script
fetched_at: 2026-04-23T15:19:05.201Z
---

# Class DecoratedText

## Page Summary

- DecoratedText is a widget for displaying text with optional icons, and labels above or below.
- Setting the text content and either a top label, bottom label, or icon is required for this widget.
- DecoratedText is designed to replace the KeyValue widget and is available for Google Workspace add-ons and Google Chat apps.

A widget that displays text with optional decorations. Possible keys include an icon, a label above and a label below. Setting the text content and one of the keys is required using `setText(text)` and one of `DecoratedText`, `DecoratedText`, `setTopLabel(text)`, or `setBottomLabel(text)`. This class is intended to replace `~~KeyValue~~`.

Available for Google Workspace add-ons and Google Chat apps.

```
const decoratedText =
    CardService.newDecoratedText().setText('Text').setTopLabel('TopLabel');

const multilineDecoratedText = CardService.newDecoratedText()
                                   .setText('Text')
                                   .setTopLabel('TopLabel')
                                   .setWrapText(true)
                                   .setBottomLabel('BottomLabel');
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

`DecoratedText` — This object, for chaining.

---

### setBottomLabel(text)

Sets the label text to be used as the key and is displayed below the text content.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The label text. |

#### Return

`DecoratedText` — This object, for chaining.

---

### setButton(button)

Sets the `Button` that is displayed to the right of the text. A `DecoratedText` can only support one button or one switch.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `button` | `Button` | The button to add. |

#### Return

`DecoratedText` — This object, for chaining.

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

`DecoratedText` — This object, for chaining.

---

### setEndIcon(endIcon)

Sets the optional `IconImage` that is displayed to the right of the content. A `DecoratedText` can only support one button, one switch or one icon.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `endIcon` | `IconImage` | The icon to add. |

#### Return

`DecoratedText` — This object, for chaining.

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

`DecoratedText` — This object, for chaining.

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

`DecoratedText` — This object, for chaining.

---

### setOpenLink(openLink)

Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openLink` | `OpenLink` | An `OpenLink` object describing the URL to open. |

#### Return

`DecoratedText` — This object, for chaining.

---

### setStartIcon(startIcon)

Sets the optional `IconImage` to display before the text content.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startIcon` | `IconImage` | The icon to display. |

#### Return

`DecoratedText` — This object, for chaining.

---

### setSwitchControl(switchToSet)

Sets the `Switch` that is displayed to the right of the content. A `DecoratedText` can only support one button or one switch.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `switchToSet` | `Switch` | The switch to add. |

#### Return

`DecoratedText` — This object, for chaining.

---

### setText(text)

Sets the text to be used as the value. Supports [basic HTML formatting](../../../workspace/add-ons/concepts/widgets.md#text_formatting). Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text content for this widget. |

#### Return

`DecoratedText` — This object, for chaining.

---

### setTopLabel(text)

Sets the label text to be used as the key and is displayed above the text content.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The label text. |

#### Return

`DecoratedText` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.

---

### setWrapText(wrapText)

Sets whether the value text should be displayed on a single line or multiple lines.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `wrapText` | `Boolean` | If `true`, the text is wrapped and displayed on multiple lines. Otherwise the text is truncated. |

#### Return

`DecoratedText` — This object, for chaining.
