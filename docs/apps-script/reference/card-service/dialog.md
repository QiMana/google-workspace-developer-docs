---
source: https://developers.google.com/apps-script/reference/card-service/dialog
root: apps-script
fetched_at: 2026-04-23T15:19:04.472Z
---

# Class Dialog

## Page Summary

- Dialog is a builder for Dialog objects.
- Dialogs are only available for Google Chat apps, not Google Workspace add-ons.
- The `setBody(card)` method sets the card of the Dialog object.

For details, see [Open interactive dialogs](../../../workspace/chat/dialogs.md) in the Google Chat documentation.

A builder for `Dialog` objects.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();

// Sets the card of the dialog.
const dialog = CardService.newDialog().setBody(card);
```

## Detailed documentation

### setBody(card)

Sets the card of the `Dialog`.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();

// Sets the card of the dialog.
const dialog = CardService.newDialog().setBody(card);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `card` | `Card` | The `Card` to use. |

#### Return

`Dialog` — This object, for chaining.
