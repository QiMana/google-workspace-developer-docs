---
source: https://developers.google.com/apps-script/reference/card-service/compose-action-response
root: apps-script
fetched_at: 2026-04-23T15:19:03.545Z
---

# Class ComposeActionResponse

## Page Summary

- ComposeActionResponse is a response object for callback methods in Gmail add-ons that compose draft messages when a UI element is selected.
- This object is distinct from the compose actions used to extend the compose UI.
- The `printJson()` method is available for debugging, returning a String representation of the object.

The response object that may be returned from a callback method for compose action in a [Gmail add-on](https://developers.google.com/gmail/add-ons).

```
const composeActionResponse =
    CardService.newComposeActionResponseBuilder()
        .setGmailDraft(GmailApp.createDraft('recipient', 'subject', 'body'))
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
