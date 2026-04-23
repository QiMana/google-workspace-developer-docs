---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/update-message-action
root: apps-script
fetched_at: 2026-04-23T15:18:43.756Z
---

# Class UpdateMessageAction

The Chat app updates text or cards in a message. For details, see [Send Google Chat messages](../../../workspace/add-ons/chat/send-messages.md).

Available for Google Workspace add-ons that extend Google Chat.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setUpdateChatMessageAction(AddOnsResponseService.newUpdateMessageAction()
    .setMessage(message))
    .build();
```

## Detailed documentation

### setMessage(message)

Sets the message for this action.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setUpdateChatMessageAction(AddOnsResponseService.newUpdateMessageAction()
    .setMessage(message))
    .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `ChatMessage` | The chat message to update. |

#### Return

`UpdateMessageAction` — This object, for chaining.
