---
source: https://developers.google.com/apps-script/reference/card-service/navigation
root: apps-script
fetched_at: 2026-04-23T15:19:09.505Z
---

# Class Navigation

## Page Summary

- The `Navigation` object controls card navigation and can be used to manage a stack of cards.
- Key methods include `popCard()`, `popToNamedCard()`, `popToRoot()` for removing cards, `pushCard()` for adding cards, and `updateCard()` for replacing the current card.
- Most navigation methods return the `Navigation` object itself, allowing for method chaining.
- The `printJson()` method is available for debugging purposes, providing the JSON representation of the object.

A helper object that controls card navigation. See the [card navigation guide](../../../workspace/add-ons/how-tos/navigation.md) for more details.

## Detailed documentation

### popCard()

Pops a card from the navigation stack. Can be chained with other card navigation actions.

#### Return

`Navigation` — This object, for chaining.

---

### popToNamedCard(cardName)

Pops to the specified card by its card name. Can be chained with other card navigation actions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cardName` | `String` | The name of the card to navigate to. |

#### Return

`Navigation` — This object, for chaining.

---

### popToRoot()

Pops the card stack to the root card. Can be chained with other card navigation actions.

#### Return

`Navigation` — This object, for chaining.

---

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### pushCard(card)

Pushes the given card onto the stack. Can be chained with other card navigation actions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `card` | `Card` | A card to add to the stack. |

#### Return

`Navigation` — This object, for chaining.

---

### updateCard(card)

Does an in-place replacement of the current card. Can be chained with other card navigation actions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `card` | `Card` | A card to replace the current card with. |

#### Return

`Navigation` — This object, for chaining.
