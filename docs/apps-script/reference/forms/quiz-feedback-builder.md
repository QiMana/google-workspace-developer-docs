---
source: https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder
root: apps-script
fetched_at: 2026-04-23T15:20:24.766Z
---

# Class QuizFeedbackBuilder

## Page Summary

- QuizFeedbackBuilder is used to build Feedback objects and set common properties like display text.
- It provides methods to add links, set text, build the feedback object, and create a copy.
- The addLink method can include a display text for the link.
- The build method finalizes the feedback object.

The base FeedbackBuilder that contains setters for properties common to all feedback, such as display text. Used to build Feedback objects.

```
// Open a form by ID and add a new list item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
item.setChoices([
  item.createChoice('Dogs', true),
  item.createChoice('Cats', false),
]);
// Add feedback which will be shown for correct responses; ie "Dogs".
item.setFeedbackForCorrect(
    FormApp.createFeedback().setText('Dogs rule, cats drool.').build(),
);
```

## Detailed documentation

### addLink(url)

Adds a link to the feedback's supplemental material.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | the link to display under the display text |

#### Return

`QuizFeedbackBuilder` — this `QuizFeedbackBuilder`, for chaining

---

### addLink(url, displayText)

Adds a link to the feedback's supplemental material.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | the link to display under the display text |
| `displayText` | `String` | the text to display for the link |

#### Return

`QuizFeedbackBuilder` — this `QuizFeedbackBuilder`, for chaining

---

### build()

Builds a Feedback of the corresponding type for this builder.

#### Return

---

### copy()

Returns a copy of this builder.

#### Return

`QuizFeedbackBuilder` — `QuizFeedbackBuilder`

---

### setText(text)

Sets the feedback text.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new text |

#### Return

`QuizFeedbackBuilder` — this `QuizFeedbackBuilder`, for chaining
