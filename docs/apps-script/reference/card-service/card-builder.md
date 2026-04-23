---
source: https://developers.google.com/apps-script/reference/card-service/card-builder
root: apps-script
fetched_at: 2026-04-23T15:18:58.472Z
---

# Class CardBuilder

## Page Summary

- CardBuilder is used to build Card objects.
- You can add card actions and sections to a Card using the builder.
- The build() method finalizes and validates the Card object.
- Various methods allow setting the card's display style, footer, header, name, and peek card header.

## Detailed documentation

### addCardAction(cardAction)

Adds a `CardAction` to this Card.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cardAction` | `CardAction` | The `CardAction` to use. |

#### Return

`CardBuilder` — This object, for chaining.

---

### addExpressionData(expressionData)

Adds an expression data to this card.

The ExpressionData defines the CEL logic and condition as well as what event to trigger when a condition is satisfied.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `expressionData` | `ExpressionData` | The `ExpressionData` to use. |

#### Return

`CardBuilder` — This object, for chaining.

---

### addSection(section)

Adds a section to this card. You can't add more than 100 sections to a card.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `section` | `CardSection` | The `CardSection` to use. |

#### Return

`CardBuilder` — This object, for chaining.

---

### build()

Builds the current card and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed card isn't valid.

---

### setDisplayStyle(displayStyle)

Sets the display style for this card.

If the display style is set to `DisplayStyle.REPLACE`, the card is shown by replacing the view of top card in the card stack.

If the display style is set to `DisplayStyle.PEEK`, the header of the card appears at the bottom of the sidebar, partially covering the current top card of the stack. Clicking the header pops the card into the card stack. If the card has no header, a generated header is used instead.

`DisplayStyle` only works for card returned from contextual trigger function.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `displayStyle` | `DisplayStyle` | The `DisplayStyle` to set. |

#### Return

`CardBuilder` — This object, for chaining.

---

### setHeader(cardHeader)

Sets the header for this card.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cardHeader` | `CardHeader` | The `CardHeader` to use. |

#### Return

`CardBuilder` — This object, for chaining.

---

### setName(name)

Sets the name for this card. The name can be used for [navigation](https://developers.google.com/gmail/add-ons/how-tos/navigation).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name. |

#### Return

`CardBuilder` — This object, for chaining.

---

### setPeekCardHeader(peekCardHeader)

Sets the peek card header.

The peek card is set on the first card returned from a contextual trigger function. It is used as a descriptive placeholder widget so that users can navigate from a homepage stack to the contextual stack.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `peekCardHeader` | `CardHeader` | The `CardHeader` to set. |

#### Return

`CardBuilder` — This object, for chaining.
