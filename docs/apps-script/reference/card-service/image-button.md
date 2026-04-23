---
source: https://developers.google.com/apps-script/reference/card-service/image-button
root: apps-script
fetched_at: 2026-04-23T15:19:08.054Z
---

# Class ImageButton

## Page Summary

- ImageButton is a CardService element for displaying an image button in Google Workspace add-ons and Google Chat apps.
- Key methods allow setting alternative text, icon or icon URL, button style, and various actions upon clicking like opening a link, triggering an authorization flow, composing an email, or executing a custom action.
- Multiple action types (setOpenLink, setOnClickAction, setOnClickOpenLinkAction, setAuthorizationAction, setComposeAction) are mutually exclusive on a single ImageButton.
- The `setMaterialIcon` and `setImageButtonStyle` methods are available for Google Chat apps and in developer preview for Google Workspace add-ons.
- The `setOverflowMenu` method allows displaying a pop-up menu with clickable items.

A `ImageButton` with an image displayed on it.

Available for Google Workspace add-ons and Google Chat apps.

```
const imageButton =
    CardService.newImageButton()
        .setAltText('An image button with an airplane icon.')
        .setIcon(CardService.Icon.AIRPLANE)
        .setOpenLink(CardService.newOpenLink().setUrl('https://airplane.com'));
```

## Detailed documentation

### setAltText(altText)

Sets the alternative text of the button for accessibility. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `altText` | `String` | The alternative text to assign to this button. |

#### Return

`ImageButton` — This object, for chaining.

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

`ImageButton` — This object, for chaining.

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

`ImageButton` — This object, for chaining.

---

### setIcon(icon)

Sets a predefined `Icon` to display on the button. Either this or `setIconUrl(url)` must be used to define the button image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `Icon` | One of the predefined `Icon` values. |

#### Return

`ImageButton` — This object, for chaining.

---

### setIconUrl(url)

Sets the URL of an image to use as this button's icon. Either this or `setIcon(icon)` must be used to define the button image.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL address of a hosted image to use as this button's icon. |

#### Return

`ImageButton` — This object, for chaining.

---

### setImageButtonStyle(imageButtonStyle)

Sets the button style. If unset, it defaults to `ImageButtonStyle.BORDERLESS` button.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const imageButton = CardService.newImageButton().setImageButtonStyle(
    CardService.ImageButtonStyle.BORDERLESS,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageButtonStyle` | `ImageButtonStyle` | The button style. |

#### Return

`ImageButton` — This object, for chaining.

---

### setMaterialIcon(icon)

Sets the material design icon.

```
const imageButton = CardService.newImageButton().setMaterialIcon(
    CardService.newMaterialIcon().setName('search'),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `MaterialIcon` | The material design icon. |

#### Return

`ImageButton` — This object, for chaining.

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

`ImageButton` — This object, for chaining.

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

`ImageButton` — This object, for chaining.

---

### setOpenLink(openLink)

Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of `setOpenLink(openLink)`, `setOnClickAction(action)`, `setOnClickOpenLinkAction(action)`, `setAuthorizationAction(action)`, or `setComposeAction(action, composedEmailType)` set.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openLink` | `OpenLink` | An `OpenLink` object describing the URL to open. |

#### Return

`ImageButton` — This object, for chaining.

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

`ImageButton` — This object, for chaining.
