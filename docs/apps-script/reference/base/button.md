---
source: https://developers.google.com/apps-script/reference/base/button
root: apps-script
fetched_at: 2026-04-23T15:18:45.810Z
---

# Enum Button

## Page Summary

- The `Button` enum represents predetermined, localized dialog buttons returned by `alert` or `PromptResponse.getSelectedButton()` to indicate which button a user clicked.
- These button values cannot be set directly; use `ButtonSet` to add buttons to an alert or prompt.
- To call an enum, you use its parent class, name, and property, such as `Base.Button.CLOSE`.

An enum representing predetermined, localized dialog buttons returned by an `alert` or `PromptResponse.getSelectedButton()` to indicate which button in a dialog the user clicked. These values cannot be set; to add buttons to an `alert` or `prompt`, use `ButtonSet` instead.

To call an enum, you call its parent class, name, and property. For example, ` Base.Button.CLOSE`.

```
// Display a dialog box with a message and "Yes" and "No" buttons.
const ui = DocumentApp.getUi();
const response = ui.alert(
    'Are you sure you want to continue?',
    ui.ButtonSet.YES_NO,
);

// Process the user's response.
if (response === ui.Button.YES) {
  Logger.log('The user clicked "Yes."');
} else {
  Logger.log('The user clicked "No" or the dialog\'s close button.');
}
```
