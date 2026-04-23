---
source: https://developers.google.com/apps-script/reference/forms/page-navigation-type
root: apps-script
fetched_at: 2026-04-23T15:20:22.477Z
---

# Enum PageNavigationType

## Page Summary

- PageNavigationType is an enum representing supported types of page navigation in forms.
- Page navigation occurs after completing a page with a chosen option containing a navigation instruction, with only the last instruction taking effect if multiple are chosen on the same page.
- Choices using page navigation cannot be combined in the same item with choices that do not.
- Page navigation has no effect on the last page of a form.
- You call an enum like `FormApp.PageNavigationType.CONTINUE` to use it.

An enum representing the supported types of page navigation. Page navigation types can be accessed from `FormApp.PageNavigationType`.

The page navigation occurs after the respondent completes a page that contains the option, and only if the respondent chose that option. If the respondent chose multiple options with page-navigation instructions on the same page, only the last navigation option has any effect. Page navigation also has no effect on the last page of a form.

Choices that use page navigation cannot be combined in the same item with choices that do not use page navigation.

To call an enum, you call its parent class, name, and property. For example, ` FormApp.PageNavigationType.CONTINUE`.

```
// Create a form and add a new multiple-choice item and a page-break item.
const form = FormApp.create('Form Name');
const item = form.addMultipleChoiceItem();
const pageBreak = form.addPageBreakItem();

// Set some choices with go-to-page logic.
const rightChoice = item.createChoice(
    'Vanilla',
    FormApp.PageNavigationType.SUBMIT,
);
const wrongChoice = item.createChoice(
    'Chocolate',
    FormApp.PageNavigationType.RESTART,
);

// For GO_TO_PAGE, just pass in the page break item. For CONTINUE (normally the
// default), pass in CONTINUE explicitly because page navigation cannot be mixed
// with non-navigation choices.
const iffyChoice = item.createChoice('Peanut', pageBreak);
const otherChoice = item.createChoice(
    'Strawberry',
    FormApp.PageNavigationType.CONTINUE,
);
item.setChoices([rightChoice, wrongChoice, iffyChoice, otherChoice]);
```
