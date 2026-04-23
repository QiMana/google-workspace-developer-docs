---
source: https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:19:05.685Z
---

# Class DriveItemsSelectedActionResponseBuilder

## Page Summary

- The DriveItemsSelectedActionResponseBuilder is used to create DriveItemsSelectedActionResponse objects.
- The `build()` method finalizes and returns the Drive action response object.
- The `requestFileScope(itemId)` method allows the response to request file scope for a specific Drive item.

## Detailed documentation

### build()

Builds the current Drive action response.

#### Return

---

### requestFileScope(itemId)

Specifies that the response requests file scope for the contextually-relevant item in Drive.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `itemId` | `String` | ID of the Drive item to request file scope for. |

#### Return

`DriveItemsSelectedActionResponseBuilder` — This object, for chaining.
