---
source: https://developers.google.com/apps-script/reference/forms/item-response
root: apps-script
fetched_at: 2026-04-23T15:20:22.694Z
---

# Class ItemResponse

## Page Summary

- ItemResponse represents a response to a single question item within a form.
- Item responses can be accessed from a FormResponse and created from an Item that asks for a response.
- Methods are available to get and set feedback, the associated item, the respondent's answer, and the score for an item response.
- The getResponse() method can return different types of data depending on the type of question item.
- Setting feedback or score does not save the changes until Form.submitGrades() is called.

A response to one question item within a form. Item responses can be accessed from `FormResponse` and created from any that asks the respondent to answer a question.

```
// Open a form by ID and log the responses to each question.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const formResponses = form.getResponses();
for (let i = 0; i < formResponses.length; i++) {
  const formResponse = formResponses[i];
  const itemResponses = formResponse.getItemResponses();
  for (let j = 0; j < itemResponses.length; j++) {
    const itemResponse = itemResponses[j];
    Logger.log(
        'Response #%s to the question "%s" was "%s"',
        (i + 1).toString(),
        itemResponse.getItem().getTitle(),
        itemResponse.getResponse(),
    );
  }
}
```

## Detailed documentation

---

### getItem()

Gets the question item that this response answers.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getResponse()

Gets the answer that the respondent submitted. For most types of question items, this returns a `String`.

For `CheckboxItem` questions, this returns a `String[]` array containing the responder's choices. The order of the strings in the array may vary.

For `GridItem` questions, this returns a `String[]` array in which the answer at index `n` corresponds to the question at row `n + 1` in the grid. If a respondent did not answer a question in the grid, that answer is returned as `''`.

For `CheckboxGridItem` questions, this returns a `String[][]` array in which the answers at row index `n` corresponds to the question at row `n + 1` in the checkbox grid. If a respondent did not answer a question in the grid, that answer is returned as `''`.

#### Return

`Object` — a `String` or `String[]` or `String[][]` of answers to the question item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getScore()

Gets the score for the respondent's submitted answer.

#### Return

`Object` — a `Double` representing the score for the question item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setScore(score)

Sets the score for the respondent's submitted answer. A null value will clear the existing score.

This method does not actually save the score in Forms until `Form.submitGrades(responses)` is called with the updated FormResponses.

```
// For a multiple choice question with options: "Always true", "Sometimes true",
// and "Never", award half credit for responses that answered "Sometimes true".
const formResponses = FormApp.getActiveForm().getResponses();
// Go through each form response
for (let i = 0; i < formResponses.length; i++) {
  const response = formResponses[i];
  const items = FormApp.getActiveForm().getItems();
  // Assume it's the first item
  const item = items[0];
  const itemResponse = response.getGradableResponseForItem(item);
  // Give half credit for "Sometimes true".
  if (itemResponse != null && itemResponse.getResponse() === 'Sometimes true') {
    const points = item.asMultipleChoiceItem().getPoints();
    itemResponse.setScore(points * 0.5);
    // This saves the grade, but does not submit to Forms yet.
    response.withItemGrade(itemResponse);
  }
}
// Grades are actually submitted to Forms here.
FormApp.getActiveForm().submitGrades(formResponses);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `score` | `Object` |  |

#### Return

`ItemResponse` — a `ItemResponse` for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
