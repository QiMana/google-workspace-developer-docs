---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message
root: apps-script
fetched_at: 2026-04-23T15:18:36.148Z
---

# Class ChatMessage

A Google Chat [message](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages).

Available for Google Workspace add-ons that extend Google Chat.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);
```

## Detailed documentation

### addAccessoryWidget(accessoryWidget)

Sets the accessoryWidget for this action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `accessoryWidget` | `AccessoryWidget` | The accessoryWidget to set. |

#### Return

`ChatMessage` — This object, for chaining.

---

### addCardWithId(cardWithId)

Sets the card of the message.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cardWithId` | `CardWithId` | The cardWithId to set. |

#### Return

`ChatMessage` — This object, for chaining.

---

### setText(text)

Sets the text of the message.

```
const message = AddOnsResponseService.newChatMessage().setText("Example text");
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text part of a message. |

#### Return

`ChatMessage` — This object, for chaining.
