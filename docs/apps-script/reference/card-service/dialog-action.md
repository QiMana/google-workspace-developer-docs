---
source: https://developers.google.com/apps-script/reference/card-service/dialog-action
root: apps-script
fetched_at: 2026-04-23T15:19:04.853Z
---

# Class DialogAction

## Page Summary

- DialogAction is a builder for DialogAction objects and is only available for Google Chat apps, not Google Workspace add-ons.
- The `setActionStatus()` method sets the action status of a DialogAction.
- The `setDialog()` method sets the dialog of a DialogAction.

A builder for `DialogAction` objects.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();
const dialog = CardService.newDialog().setBody(card);

const dialogAction = CardService.newDialogAction().setDialog(dialog);
```

## Detailed documentation

### setActionStatus(actionStatus)

Sets the action status of `DialogAction`.

```
const actionStatus = CardService.newActionStatus().setStatusCode(
    CardService.Status.OK,
);

const dialogAction =
    CardService.newDialogAction().setActionStatus(actionStatus);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `actionStatus` | `ActionStatus` | The `ActionStatus` to use. |

#### Return

`DialogAction` — This object, for chaining.

---

### setDialog(dialog)

Sets the dialog of the `DialogAction`.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('card title'))
                 .build();

// Sets the card of the dialog.
const dialog = CardService.newDialog().setBody(card);

const dialogAction = CardService.newDialogAction().setDialog(dialog);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dialog` |  | The to use. |

#### Return

`DialogAction` — This object, for chaining.
