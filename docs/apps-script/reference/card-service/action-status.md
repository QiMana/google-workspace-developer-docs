---
source: https://developers.google.com/apps-script/reference/card-service/action-status
root: apps-script
fetched_at: 2026-04-23T15:18:55.258Z
---

# Class ActionStatus

## Page Summary

- The `ActionStatus` class represents the status for a request to invoke or submit a dialog in Google Chat apps.
- It is only available for Google Chat apps and not for Google Workspace add-ons.
- Key methods include `setStatusCode()` to set the status code and `setUserFacingMessage()` to set a user-facing message about the request status.

A class that represents the status for a request to either invoke or submit a dialog.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const actionStatus = CardService.newActionStatus()
                         .setStatusCode(CardService.Status.OK)
                         .setUserFacingMessage('Success');
```

## Detailed documentation

### setStatusCode(statusCode)

Represents the status for a request to either open or submit a dialog.

```
const actionStatus = CardService.newActionStatus().setStatusCode(
    CardService.Status.OK,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `statusCode` | `Status` | The status code. |

#### Return

`ActionStatus` — This object, for chaining.

---

### setUserFacingMessage(message)

The message to send users about the status of their request. If unset, a generic message based on the `Status` is sent.

```
const actionStatus =
    CardService.newActionStatus().setUserFacingMessage('Success');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `message` | `String` | The message to send. |

#### Return

`ActionStatus` — This object, for chaining.
