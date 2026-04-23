---
source: https://developers.google.com/apps-script/reference/card-service/divider
root: apps-script
fetched_at: 2026-04-23T15:19:04.383Z
---

# Class Divider

## Page Summary

- A divider creates a horizontal line in an add-on card.
- Use the `newDivider()` method from `CardService` to add a divider.
- The provided code sample demonstrates how to build a card with paragraphs separated by a divider.

A horizontal divider. To add a divider to your add-on card, use the `newDivider()` method within `CardService`. For example, the following sample builds a simple card with 2 paragraphs separated by a divider.

```
function buildCard() {
  const cardSection1TextParagraph1 =
      CardService.newTextParagraph().setText('Hello world!');

  const cardSection1Divider1 = CardService.newDivider();

  const cardSection1TextParagraph2 =
      CardService.newTextParagraph().setText('Hello world!');

  const cardSection1 = CardService.newCardSection()
                           .addWidget(cardSection1TextParagraph1)
                           .addWidget(cardSection1Divider1)
                           .addWidget(cardSection1TextParagraph2);

  const card = CardService.newCardBuilder().addSection(cardSection1).build();

  return card;
}
```

## Detailed documentation

### addEventAction(eventAction)

Adds the event action that can be performed on the widget.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eventAction` | `EventAction` | The `EventAction` to be added. |

#### Return

`Widget` — The Object, for chaining.

---

### setId(id)

Sets the unique ID assigned that's used to identify the widget to be mutated. Widget mutation is only supported in Add-Ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The id of the widget, with a limit of 64 characters and in format of \`\[a-zA-Z0-9-\]+\`. |

#### Return

`Widget` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
