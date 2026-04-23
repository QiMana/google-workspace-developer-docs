---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/universal-action-response
root: apps-script
fetched_at: 2026-04-23T15:18:42.652Z
---

# Class UniversalActionResponse

The response object that may be returned from a method that creates universal action.

```
// A universal action that opens a link.
const openLinkUniversalAction =
    AddOnsResponseService.newUniversalActionResponseBuilder()
        .setOpenLink(AddOnsResponseService.newOpenLink().setUrl('https://www.google.com'))
        .build();

const cardBuilder1 = CardService.newCardBuilder();
const cardBuilder2 = CardService.newCardBuilder();
// Finish building the cards ...

// A universal action that shows two static cards.
const cardsUniversalAction =
    AddOnsResponseService.newUniversalActionResponseBuilder()
        .displayAddOnCards([cardBuilder1.build(), cardBuilder2.build()])
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
