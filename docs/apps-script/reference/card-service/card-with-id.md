---
source: https://developers.google.com/apps-script/reference/card-service/card-with-id
root: apps-script
fetched_at: 2026-04-23T15:19:00.189Z
---

# Class CardWithId

## Page Summary

- `CardWithId` is a builder for objects that provide a unique identifier for a card when sending multiple cards.
- `CardWithId` is only available for Google Chat apps.
- The `setCard(card)` method sets the card of the `cardWithId`.
- The `setCardId(id)` method sets the unique card ID of the `cardWithId`.

A builder for `CardWithId` objects. This class is a unique identifier for a card in a message when sending multiple cards.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newTextParagraph().setText('This is a text paragraph widget.'),
);

const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .addSection(cardSection)
                 .build();

const cardWithId =
    CardService.newCardWithId().setCardId('card_id').setCard(card);
```

## Detailed documentation

### setCard(card)

Sets the card of the `cardWithId`.

```
const cardHeader = CardService.newCardHeader()
                       .setTitle('Card Header Title')
                       .setSubtitle('Card Header Subtitle');

const card = CardService.newCardBuilder().setHeader(cardHeader).build();

const cardWithId = CardService.newCardWithId().setCard(card);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `card` |  | The to use. |

#### Return

`CardWithId` — This object, for chaining.

---

### setCardId(id)

Sets the unique card ID of the `cardWithId`.

```
const cardWithId = CardService.newCardWithId();

// Sets the card ID of the cardWithId.
cardWithId.setCardId('card_id');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The text to use. |

#### Return

`CardWithId` — This object, for chaining.
