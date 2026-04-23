---
source: https://developers.google.com/apps-script/reference/card-service/card.html
root: apps-script
fetched_at: 2026-04-23T15:19:01.185Z
---

# Class Card

## Page Summary

- A Card is a UI view in the Gmail add-ons context.
- Cards are built using the CardService.newCardBuilder() method.
- Cards can have sections added to them using addSection().
- The printJson() method is available for debugging the JSON representation of the Card object.

A context [card](../../../workspace/add-ons/concepts/cards.md) that represents a single view in the UI.

```
const cardSection = CardService.newCardSection();
// Finish building the card section ...

const card = CardService.newCardBuilder()
                 .setName('Card name')
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .addSection(cardSection)
                 .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
