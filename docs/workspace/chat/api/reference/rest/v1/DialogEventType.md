---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/DialogEventType
root: workspace
fetched_at: 2026-04-23T15:25:01.631Z
---

# DialogEventType

## Page Summary

- `CARD_CLICKED` and `MESSAGE` events provide insights into user interactions with dialogs in Google Chat apps.
- These events utilize specific enums like `REQUEST_DIALOG`, `SUBMIT_DIALOG`, and `CANCEL_DIALOG` to indicate user actions within the dialog.
- `REQUEST_DIALOG` signifies opening a dialog, `SUBMIT_DIALOG` represents submitting information, and `CANCEL_DIALOG` denotes closing without submission.
- The `CANCEL_DIALOG` event is only triggered when the user explicitly closes the dialog using the close icon, not through other methods like refreshing or clicking outside.
- For further information on Google Chat app interactions, refer to the provided documentation link: [Receive and respond to interactions with your Google Chat app](../../../../read-form-data.md).

For `CARD_CLICKED` and `MESSAGE` interaction events, the types of interactions with [dialogs](../../../../dialogs.md).

To learn more about Google Chat app interaction events, see [Receive and respond to interactions with your Google Chat app](../../../../read-form-data.md).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default value. Unspecified.</td></tr><tr><td><code>REQUEST_DIALOG</code></td><td>A user opens a dialog.</td></tr><tr><td><code>SUBMIT_DIALOG</code></td><td>A user clicks an interactive element of a dialog. For example, a user fills out information in a dialog and clicks a button to submit the information.</td></tr><tr><td><code>CANCEL_DIALOG</code></td><td>A user closes a dialog without submitting information. The Chat app only receives this interaction event when users click the close icon in the top right corner of the dialog. When the user closes the dialog by other means (such as refreshing the browser, clicking outside the dialog box, or pressing the escape key), no event is sent.</td></tr></tbody></table>
