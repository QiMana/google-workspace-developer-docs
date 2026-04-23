---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/navigation
root: apps-script
fetched_at: 2026-04-23T15:18:40.222Z
---

# Class Navigation

A helper object that controls card navigation. See the [card navigation guide](../../../workspace/add-ons/how-tos/navigation.md) for more details.

Sample usage:

```
function myFunction() {
  return AddOnsResponseService.newChatDataActionBuilder();
}
```

## Detailed documentation

### popCard()

Available for Google Workspace add-ons that extend Google Chat.

Pops a card from the navigation stack. Can be chained with other card navigation actions.

#### Return

`Navigation` — This object, for chaining.

---

### popToNamedCard(cardName)

Available for Google Workspace add-ons that extend Google Chat.

Pops to the specified card by its card name. Can be chained with other card navigation actions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cardName` | `String` | The name of the card to navigate to. |

#### Return

`Navigation` — This object, for chaining.

---

### popToRoot()

Available for Google Workspace add-ons that extend Google Chat.

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

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title'))
    .addSection(cardSection)
    .build();

const navigation = AddOnsResponseService.newNavigation()
    .pushCard(card);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `card` | `Card` | A card to add to the stack. |

#### Return

`Navigation` — This object, for chaining.

---

### setEndNavigation(endNavigation)

Sets the end navigation action.

```
const navigation = AddOnsResponseService.newNavigation()
    .setEndNavigation(AddOnsResponseService.EndNavigation.CLOSE_DIALOG);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `endNavigation` | `EndNavigation` | The `EndNavigation` to use. |

#### Return

`Navigation` — This object, for chaining.

---

### updateCard(card)

Does an in-place replacement of the current card. Can be chained with other card navigation actions.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title'))
    .addSection(cardSection)
    .build();

const navigation = AddOnsResponseService.newNavigation()
    .updateCard(card);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `card` | `Card` | A card to replace the current card with. |

#### Return

`Navigation` — This object, for chaining.
