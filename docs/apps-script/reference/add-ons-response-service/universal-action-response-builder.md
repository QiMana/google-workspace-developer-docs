---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/universal-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:42.849Z
---

# Class UniversalActionResponseBuilder

## Detailed documentation

### build()

Builds the current universal action response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed universal action response isn't valid.

---

### displayAddOnCards(cardObjects)

Displays the add-on with the specified cards.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cardObjects` | `Object[]` | An array of `Card` s to display. |

#### Return

`UniversalActionResponseBuilder` — This object, for chaining.

---

### setOpenLink(openLink)

Sets the URL to open when the universal action is selected.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openLink` | `OpenLink` | The link object to use. |

#### Return

`UniversalActionResponseBuilder` — This object, for chaining.
