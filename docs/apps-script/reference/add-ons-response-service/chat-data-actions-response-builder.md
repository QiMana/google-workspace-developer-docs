---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:36.460Z
---

# Class ChatDataActionsResponseBuilder

A builder for Chat `DataAction` objects.

Available for Google Workspace add-ons that extend Google Chat.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build()

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card)

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId)

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
    .setMessage(message))
    .build()
```

## Detailed documentation

### build()

Builds the current action response.

#### Return

`DataActionsResponse` — A `DataActionResponse`.

---

### setCreateChatMessageAction(createMessageAction)

Sets the `CreateMessageAction` for this `DataActionsResponse`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build()

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card)

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId)

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
    .setMessage(message))
    .build()
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `createMessageAction` | `CreateMessageAction` | The create message action to use. |

#### Return

`ChatDataActionsResponseBuilder` — This object, for chaining.

---

### setUpdateChatMessageAction(updateMessageAction)

Sets the `UpdateMessageAction` for this `DataActionsResponse`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build()

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card)

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId)

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setUpdateChatMessageAction(AddOnsResponseService.newUpdateMessageAction()
    .setMessage(message))
    .build()
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateMessageAction` | `UpdateMessageAction` | The update message action to use. |

#### Return

`ChatDataActionsResponseBuilder` — This object, for chaining.

---

### setUpdateInlinePreviewAction(updateInlinePreviewAction)

Sets the `UpdateInlinePreviewAction` for this `DataActionsResponse`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Unfurl Card!"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("url"))
      .addWidget(CardService.newButtonSet()
        .addButton(CardService.newTextButton()
          .setText("Open URL!")
          .setOpenLink(CardService.newOpenLink().setUrl("https://www.google.com")))))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setUpdateInlinePreviewAction(AddOnsResponseService.newUpdateInlinePreviewAction()
    .addCardWithId(cardWithId))
    .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateInlinePreviewAction` | `UpdateInlinePreviewAction` | The update inline preview to use. |

#### Return

`ChatDataActionsResponseBuilder` — This object, for chaining.
