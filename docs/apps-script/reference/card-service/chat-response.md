---
source: https://developers.google.com/apps-script/reference/card-service/chat-response
root: apps-script
fetched_at: 2026-04-23T15:18:59.864Z
---

# Class ChatResponse

## Page Summary

- ChatResponse is the response object for a card message in Google Chat, available only for Google Chat apps.
- You can create a ChatResponse using `CardService.newChatResponseBuilder()`, adding text and cards using `setText()` and `addCardsV2()`.
- The `printJson()` method is available for debugging and prints the JSON representation of the ChatResponse object.

The response object for a card message in Google Chat.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
// Creates a card message in Chat.
const cardHeader = CardService.newCardHeader()
                       .setTitle('Card Header Title')
                       .setSubtitle('Card Header Subtitle');

const card = CardService.newCardBuilder().setHeader(cardHeader).build();

const chatResponse =
    CardService.newChatResponseBuilder()
        .setText('Example text')
        .addCardsV2(
            CardService.newCardWithId().setCardId('card_id').setCard(card))
        .build();

console.log(chatResponse.printJson());
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
