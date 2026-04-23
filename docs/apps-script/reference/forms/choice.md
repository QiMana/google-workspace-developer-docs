---
source: https://developers.google.com/apps-script/reference/forms/choice
root: apps-script
fetched_at: 2026-04-23T15:20:08.768Z
---

# Class Choice

## Page Summary

- A Choice represents a single option within form items like CheckboxItem, ListItem, or MultipleChoiceItem.
- The `getGotoPage()` method retrieves the PageBreakItem set as a GO\_TO\_PAGE destination for a choice in a MultipleChoiceItem.
- The `getPageNavigationType()` method gets the PageNavigationType associated with a choice in a MultipleChoiceItem.
- The `getValue()` method returns the string label that respondents see for a choice.
- The `isCorrectAnswer()` method indicates if a choice is marked as a correct answer in a quiz form.

A single choice associated with a type of `Item` that supports choices, like `CheckboxItem`, `ListItem`, or `MultipleChoiceItem`.

```
// Create a new form and add a multiple-choice item.
const form = FormApp.create('Form Name');
const item = form.addMultipleChoiceItem();
item.setTitle('Do you prefer cats or dogs?').setChoices([
  item.createChoice('Cats', FormApp.PageNavigationType.CONTINUE),
  item.createChoice('Dogs', FormApp.PageNavigationType.RESTART),
]);

// Add another page because navigation has no effect on the last page.
form.addPageBreakItem().setTitle('You chose well!');

// Log the navigation types that each choice results in.
const choices = item.getChoices();
for (let i = 0; i < choices.length; i++) {
  Logger.log(
      'If the respondent chooses "%s", the form will %s.',
      choices[i].getValue(),
      choices[i].getPageNavigationType(),
  );
}
```

## Detailed documentation

### getGotoPage()

Gets the `PageBreakItem` set as a `GO_TO_PAGE` destination if the responder selects this choice and completes the current page. This method applies only to choices associated with `MultipleChoiceItems`; for other choices, it returns `null`.

#### Return

`PageBreakItem` — the `GO_TO_PAGE` destination for this choice, or `null` if there is none

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getValue()

Gets the choice's value, which respondents see as a label when viewing the form.

#### Return

`String` — the choice's value

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### isCorrectAnswer()

Gets whether the choice is a correct answer for the question. This method only applies to questions that are part of a quiz; for non-quiz forms, it returns false.

#### Return

`Boolean` — Whether the choice is a correct answer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
