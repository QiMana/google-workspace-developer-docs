---
source: https://developers.google.com/apps-script/reference/base/button-set
root: apps-script
fetched_at: 2026-04-23T15:18:46.083Z
---

# Enum ButtonSet

## Page Summary

- ButtonSet is an enum in Apps Script for creating predetermined, localized sets of dialog buttons for alerts and prompts.
- You can determine which button a user clicks by using the Button class in conjunction with ButtonSet.
- Enum properties are accessed by calling the parent class, name, and property, such as `Base.ButtonSet.OK`.
- Common ButtonSet properties include OK, OK\_CANCEL, YES\_NO, and YES\_NO\_CANCEL, each offering different combinations of buttons for various dialog scenarios.

An enum representing predetermined, localized sets of one or more dialog buttons that can be added to an `alert` or a `prompt`. To determine which button the user clicked, use .

To call an enum, you call its parent class, name, and property. For example, ` Base.ButtonSet.OK`.

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
