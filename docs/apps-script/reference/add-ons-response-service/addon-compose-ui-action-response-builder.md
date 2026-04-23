---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/addon-compose-ui-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:35.885Z
---

# Class AddonComposeUiActionResponseBuilder

## Detailed documentation

### build()

Builds the current addon compose ui action response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed AddonComposeUiActionResponse isn't valid.

---

### setType(type)

Sets the enum field that determines the addon compose ui action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `AddonComposeUiActionType` | The enum that indicates the addon compose ui action to take. |

#### Return

`AddonComposeUiActionResponseBuilder` — This object, for chaining.
