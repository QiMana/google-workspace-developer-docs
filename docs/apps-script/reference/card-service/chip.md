---
source: https://developers.google.com/apps-script/reference/card-service/chip
root: apps-script
fetched_at: 2026-04-23T15:19:03.385Z
---

# Class Chip

## Page Summary

- A Chip is a UI element with an icon and text label that can be deactivated.
- Chips are available for Google Chat apps and are in developer preview for Google Workspace add-ons.
- Various methods are available to configure Chip behavior, such as setting alternative text, disabling the chip, setting an icon or label, and defining click actions.
- Chip click actions can include opening a link, triggering an authorization flow, composing an email, or executing a custom action.
- A UI object can only have one type of click action set among setOpenLink, setOnClickAction, setOnClickOpenLinkAction, setAuthorizationAction, or setComposeAction.

A `Chip` with an icon and text label. You can deactivate the chip when needed.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const chip = CardService.newChip()
                 .setLabel('Open Link')
                 .setOpenLink(CardService.newOpenLink().setUrl(
                     'https://www.google.com'));
```

## Detailed documentation

### setAltText(altText)

Sets the alternative text of the chip for accessibility. If unset, defaults to the text that displays on the chip.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `altText` | `String` | The alternative text to assign to this chip. |

#### Return

`Chip` — This object, for chaining.

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

`Chip` — This object, for chaining.

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

`Chip` — This object, for chaining.

---

### setDisabled(disabled)

Sets whether the chip is disabled. A disabled chip is greyed out and cannot be clicked.

```
const chip = CardService.newChip().setLabel('bug Report').setDisabled(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `disabled` | `Boolean` | The disabled state. |

#### Return

`Chip` — This object, for chaining.

---

### setIcon(icon)

Sets the icon to be used as the chip.

```
const chip = CardService.newChip().setIcon(
    CardService.newIconImage().setMaterialIcon(
        CardService.newMaterialIcon().setName('bug_report'),
        ),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `IconImage` | One of the predefined `IconImage` values. |

#### Return

`Chip` — This object, for chaining.

---

### setLabel(label)

Sets the title of the chip. Required.

```
const chip = CardService.newChip().setLabel('bug Report');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `String` | The text to display. |

#### Return

`Chip` — This object, for chaining.

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

`Chip` — This object, for chaining.

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

`Chip` — This object, for chaining.

---

### setOpenLink(openLink)

Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openLink` | `OpenLink` | An `OpenLink` object describing the URL to open. |

#### Return

`Chip` — This object, for chaining.
