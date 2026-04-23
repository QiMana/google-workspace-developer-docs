---
source: https://developers.google.com/apps-script/reference/card-service/text-paragraph
root: apps-script
fetched_at: 2026-04-23T15:19:13.005Z
---

# Class TextParagraph

## Page Summary

- A TextParagraph is a widget that displays text and supports basic HTML formatting.
- It is available for Google Workspace add-ons and Google Chat apps.
- Key methods include `setMaxLines()` to set the maximum lines displayed and `setText()` to set the paragraph's text.
- The `setMaxLines()` method can hide excess content behind a "show more" button if the text exceeds the limit.

A widget that displays text and supports [basic HTML formatting](https://developers.google.com/gmail/add-ons/concepts/widgets#text_formatting).

Available for Google Workspace add-ons and Google Chat apps.

```
const textParagraph = CardService.newTextParagraph().setText(
    'This is a text paragraph widget. Multiple lines are allowed if needed.',
);
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

### setMaxLines(maxLines)

Sets the maximum number of lines of text that are displayed in the widget. If the text exceeds the specified maximum number of lines, the excess content is concealed behind a "show more" button. If the text is equal or shorter than the specified maximum number of lines, a "show more" button isn't displayed.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const textParagraph =
    CardService.newTextParagraph()
        .setText(
            'This is a text paragraph widget. Multiple lines are allowed if needed.',
            )
        .setMaxLines(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `maxLines` | `Integer` | The maximum number of lines of text that are displayed. |

#### Return

`TextParagraph` — This object, for chaining.

---

### setText(text)

Sets the text of the paragraph. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text to display. |

#### Return

`TextParagraph` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
