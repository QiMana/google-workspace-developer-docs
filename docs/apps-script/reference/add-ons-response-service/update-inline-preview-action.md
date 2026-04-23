---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/update-inline-preview-action
root: apps-script
fetched_at: 2026-04-23T15:18:44.387Z
---

# Class UpdateInlinePreviewAction

The Chat app previews a link in a message by adding or updating one or more cards. For details, see [Preview links in Google Chat messages](../../../workspace/add-ons/chat/preview-links.md).

Available for Google Workspace add-ons that extend Google Chat.

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
    .addCardWithId(cardWithId)).build();
```

## Detailed documentation

### addCardWithId(cardWithId)

Adds the card for this action.

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
    .addCardWithId(cardWithId)).build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cardWithId` | `CardWithId` | The card to be set. |

#### Return

`UpdateInlinePreviewAction` — This object, for chaining.

---

### addExpiration(ttl)

Adds the expiration for this action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ttl` | `Integer` | The duration of expiration to be set. |

#### Return

`UpdateInlinePreviewAction` — This object, for chaining.
