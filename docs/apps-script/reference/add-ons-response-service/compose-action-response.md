---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/compose-action-response
root: apps-script
fetched_at: 2026-04-23T15:18:35.707Z
---

# Class ComposeActionResponse

## Class ComposeActionResponse

The response object that may be returned from a callback method for compose action in a [Gmail add-on](../../../workspace/add-ons/overview.md).

```
const composeActionResponse =
    AddOnsResponseService.newComposeActionResponseBuilder()
        .setGmailDraft(GmailApp.createDraft('recipient', 'subject', 'body'))
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
