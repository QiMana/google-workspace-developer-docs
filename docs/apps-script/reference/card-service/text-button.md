---
source: https://developers.google.com/apps-script/reference/card-service/text-button
root: apps-script
fetched_at: 2026-04-23T15:19:12.715Z
---

# Class TextButton

## Page Summary

- A TextButton is a button with a text label used in Google Workspace add-ons and Google Chat apps, which can have its background color set and be disabled.
- You can set various actions for a TextButton upon clicking, including opening a link, executing a specific action, composing an email, or initiating an authorization flow.
- Accessibility features like alternative text and visual elements such as icons or overflow menus can be added to a TextButton.
- TextButton appearance can be customized by setting the text displayed, background color (for FILLED style), and the overall button style.

A `TextButton` with a text label. You can set the background color and deactivate the button when needed.

Available for Google Workspace add-ons and Google Chat apps.

```
const textButton = CardService.newTextButton()
                       .setText('Open Link')
                       .setOpenLink(CardService.newOpenLink().setUrl(
                           'https://www.google.com'));
```

## Detailed documentation

### setAltText(altText)

Sets the alternative text of the button for accessibility. If unset, defaults to the text that displays on the button.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `altText` | `String` | The alternative text to assign to this button. |

#### Return

`TextButton` — This object, for chaining.

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

`TextButton` — This object, for chaining.

---

### setBackgroundColor(backgroundColor)

Sets the background color for `TextButtonStyle.FILLED` button. If unset for a `TextButtonStyle.FILLED` button, the button uses the secondary color defined in the add-on [manifest](https://developers.google.com/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons). This method is a no-op for `TextButtonStyle.OUTLINED` buttons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `backgroundColor` | `String` | The color in #rgb format. |

#### Return

`TextButton` — This object, for chaining.

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

`TextButton` — This object, for chaining.

---

### setDisabled(disabled)

Sets whether the button is disabled. A disabled button is greyed out and cannot be clicked.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `disabled` | `Boolean` | The disabled state. |

#### Return

`TextButton` — This object, for chaining.

---

### setIcon(icon)

Sets a predefined `Icon` to display on the button. Either this or `setIconUrl(url)` must be used to define the button image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `Icon` | One of the predefined `Icon` values. |

#### Return

`TextButton` — This object, for chaining.

---

### setIconUrl(url)

Sets the URL of an image to use as this button's icon. Either this or `setIcon(icon)` must be used to define the button image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL address of a hosted image to use as this button's icon. |

#### Return

`TextButton` — This object, for chaining.

---

### setMaterialIcon(icon)

Sets the material design icon.

```
const textButton = CardService.newTextButton().setMaterialIcon(
    CardService.newMaterialIcon().setName('search'),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `MaterialIcon` | The material design icon. |

#### Return

`TextButton` — This object, for chaining.

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

`TextButton` — This object, for chaining.

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

`TextButton` — This object, for chaining.

---

### setOpenLink(openLink)

Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openLink` | `OpenLink` | An `OpenLink` object describing the URL to open. |

#### Return

`TextButton` — This object, for chaining.

---

### setOverflowMenu(menu)

Sets a pop-up menu to be opened when the object is clicked. Each item in the menu can specify an action to be triggered when clicked. Nested menus are not supported, actions for menu items should not specify an overflow menu.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const overflowMenuItem =
    CardService.newOverflowMenuItem()
        .setStartIcon(
            CardService.newIconImage().setIconUrl(
                'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
                ),
            )
        .setText('Open Link')
        .setOpenLink(
            CardService.newOpenLink().setUrl('https://www.google.com'));

const overflowMenu =
    CardService.newOverflowMenu().addMenuItem(overflowMenuItem).build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `menu` | `OverflowMenu` | The object that specifies the overflow menu to display when this element is clicked. |

#### Return

`TextButton` — This object, for chaining.

---

### setText(text)

Sets the text that displays on the button.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text that appears on the button. |

#### Return

`TextButton` — This object, for chaining.

---

### setTextButtonStyle(textButtonStyle)

Sets the button style. If unset, it defaults to `TextButtonStyle.OUTLINED` button.

```
const button =
    CardService.newTextButton()
        .setText('Filled')
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
        .setOpenLink(CardService.newOpenLink().setUrl('www.google.com'));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textButtonStyle` | `TextButtonStyle` | The button style. |

#### Return

`TextButton` — This object, for chaining.
