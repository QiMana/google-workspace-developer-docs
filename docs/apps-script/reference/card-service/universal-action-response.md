---
source: https://developers.google.com/apps-script/reference/card-service/universal-action-response
root: apps-script
fetched_at: 2026-04-23T15:19:12.415Z
---

# Class UniversalActionResponse

## Page Summary

- UniversalActionResponse is a response object used for creating universal actions.
- Universal actions can open links or display add-on cards.
- The `printJson()` method provides a JSON representation of the UniversalActionResponse object for debugging purposes.

The response object that may be returned from a method that creates universal action.

```
// A universal action that opens a link.
const openLinkUniversalAction =
    CardService.newUniversalActionResponseBuilder()
        .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
        .build();

const cardBuilder1 = CardService.newCardBuilder();
const cardBuilder2 = CardService.newCardBuilder();
// Finish building the cards ...

// A universal action that shows two static cards.
const cardsUniversalAction =
    CardService.newUniversalActionResponseBuilder()
        .displayAddOnCards([cardBuilder1.build(), cardBuilder2.build()])
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
