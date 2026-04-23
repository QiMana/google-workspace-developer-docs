---
source: https://developers.google.com/apps-script/reference/forms/feedback-type
root: apps-script
fetched_at: 2026-04-23T15:20:21.271Z
---

# Enum FeedbackType

## Page Summary

- FeedbackType is an enum in Google Apps Script representing supported feedback types that can be accessed from FormApp.FeedbackType.
- You access a FeedbackType enum property by calling its parent class, name, and property, like `FormApp.FeedbackType.CORRECT`.
- The provided code example demonstrates how to use FeedbackType when adding feedback for correct answers to a list item in a form.
- FeedbackType includes properties like CORRECT, INCORRECT, and GENERAL, which are used to display feedback based on answer correctness or submission.
- DIFFERENT feedback types (CORRECT, INCORRECT, and GENERAL) are applicable to specific question types based on whether they support autograding or are gradeable.

An enum representing the supported types of feedback. Feedback types can be accessed from `FormApp.FeedbackType`.

To call an enum, you call its parent class, name, and property. For example, ` FormApp.FeedbackType.CORRECT`.

```
// Open a form by ID and add a new list item.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
// Set "Dogs" as the correct answer to this question.
item.setChoices([
  item.createChoice('Dogs', true),
  item.createChoice('Cats', false),
]);
// Add feedback which will be shown for correct responses; ie "Dogs".
item.setFeedbackForCorrect(
    FormApp.createFeedback().setDisplayText('Dogs rule, cats drool.').build(),
);
```
