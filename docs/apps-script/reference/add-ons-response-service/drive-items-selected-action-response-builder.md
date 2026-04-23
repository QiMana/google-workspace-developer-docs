---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:38.008Z
---

# Class DriveItemsSelectedActionResponseBuilder

## Class DriveItemsSelectedActionResponseBuilder

A builder for `DriveItemsSelectedActionResponse` objects.

## Detailed documentation

### build()

Builds the current Drive action response.

#### Return

`DriveItemsSelectedActionResponse` — A validated `DriveItemsSelectedActionResponse`.

---

### requestFileScope(itemId)

Specifies that the response requests file scope for the contextually-relevant item in Drive.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `itemId` | `String` | ID of the Drive item to request file scope for. |

#### Return

`DriveItemsSelectedActionResponseBuilder` — This object, for chaining.
