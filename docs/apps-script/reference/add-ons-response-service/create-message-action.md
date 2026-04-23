---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/create-message-action
root: apps-script
fetched_at: 2026-04-23T15:18:38.287Z
---

# Class CreateMessageAction

A builder for Chat `CreateMessageAction` objects.

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
    .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
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
    .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
    .setMessage(message))
    .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `ChatMessage` | The chat message to create. |

#### Return

`CreateMessageAction` — This object, for chaining.
