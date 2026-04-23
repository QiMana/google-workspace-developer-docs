---
source: https://developers.google.com/apps-script/reference/card-service/chat-action-response
root: apps-script
fetched_at: 2026-04-23T15:19:01.113Z
---

# Class ChatActionResponse

## Page Summary

- ChatActionResponse is a class used by Google Chat apps to configure how their responses are posted.
- This class is exclusively available for Google Chat apps and not for Google Workspace add-ons.
- Key methods include setting a dialog action, the response type, an updated widget for autocomplete, or a URL for authentication or configuration.
- Each method returns the ChatActionResponse object for method chaining.

A class that represents the parameters that a Chat app can use to configure how its response is posted.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();
const dialog = CardService.newDialog().setBody(card);

const dialogAction = CardService.newDialogAction().setDialog(dialog);

const chatActionResponse = CardService.newChatActionResponse()
                               .setResponseType(CardService.Type.DIALOG)
                               .setDialogAction(dialogAction);
```

## Detailed documentation

### setDialogAction(dialogAction)

Sets the dialog action to an event related to a dialog.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();
const dialog = CardService.newDialog().setBody(card);

const dialogAction = CardService.newDialogAction().setDialog(dialog);

const chatActionResponse = CardService.newChatActionResponse()
                               .setResponseType(CardService.Type.DIALOG)
                               .setDialogAction(dialogAction);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dialogAction` | `DialogAction` | The dialog action to set. |

#### Return

`ChatActionResponse` — This object, for chaining.

---

### setResponseType(responseType)

The type of Chat app response.

```
const chatActionResponse = CardService.newChatActionResponse().setResponseType(
    CardService.Type.DIALOG,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `responseType` | `ResponseType` | The response type. |

#### Return

`ChatActionResponse` — This object, for chaining.

---

### setUpdatedWidget(updatedWidget)

Sets the updated widget, used to provide autocomplete options for a widget.

```
const updatedWidget =
    CardService.newUpdatedWidget()
        .addItem(
            'Contact 1',
            'contact-1',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact one description',
            )
        .addItem(
            'Contact 2',
            'contact-2',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact two description',
            )
        .addItem(
            'Contact 3',
            'contact-3',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact three description',
            )
        .addItem(
            'Contact 4',
            'contact-4',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact four description',
            )
        .addItem(
            'Contact 5',
            'contact-5',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact five description',
        );

const actionResponse =
    CardService.newChatActionResponse()
        .setUpdatedWidget(updatedWidget)
        .setResponseType(CardService.ResponseType.UPDATE_WIDGET);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updatedWidget` | `UpdatedWidget` | The updated widget to be set. |

#### Return

`ChatActionResponse` — This object, for chaining.

---

### setUrl(url)

The URL for users to authenticate or configure. Only for the `REQUEST_CONFIG` response type.

```
const chatActionResponse = CardService.newChatActionResponse()
                               .setResponseType(CardService.Type.REQUEST_CONFIG)
                               .setUrl('https://www.google.com');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL to send. |

#### Return

`ChatActionResponse` — This object, for chaining.
