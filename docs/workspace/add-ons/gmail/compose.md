---
source: https://developers.google.com/workspace/add-ons/gmail/compose
root: workspace
fetched_at: 2026-04-23T15:22:45.269Z
---

# Compose draft messages

## Page Summary

- This guide explains how to use Google Workspace add-ons to create new email drafts prefilled with information from the add-on or the currently open message.
- Add-ons achieve this functionality by using actions associated with widgets like buttons, triggering callback functions to build and return drafts.
- To implement this, you need to include a specific scope in your manifest, create an action object with a callback function, and configure the widget to trigger the action.
- The callback function creates a GmailDraft object, builds a ComposeActionResponse, and can prefill the draft with data from various sources.
- Drafts can be created as standalone messages or replies (single or reply-all) using corresponding Gmail service functions.

In a add-on you can create [widgets](https://developers.google.com/workspace/add-ons/concepts/widgets) that have linked [actions](https://developers.google.com/workspace/add-ons/concepts/actions). You can use an action to compose new email drafts, optionally filling them using information entered into the add-on UI or information from an open message. For example, you can have a button in your [add-on's message UI](https://developers.google.com/workspace/add-ons/gmail/extending-message-ui) that creates a reply to the currently opened message prepopulated with information from the add-on.

When an action that builds messages is triggered, Gmail executes a callback function to build and return the draft. Gmail then displays that draft in its UI in a standard email compose window, which the user can then edit and send as needed.

## Configure an action to build a draft message

To configure a widget to start a draft-building action when selected, you must do the following:

1. Make sure your [manifest](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests#manifest_structure_for_g_suite_add-ons) includes the [`action.compose` scope](https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#gmail_add-on_scopes):
	`https://www.googleapis.com/auth/gmail.addons.current.action.compose`
	You can use more a permissive scope instead, but should only do so if that scope is absolutely necessary.
2. Create an [`Action`](https://developers.google.com/apps-script/reference/card-service/action) object and associate it with a [callback function](https://developers.google.com/workspace/add-ons/concepts/actions#callback_functions) you define.
3. Call the widget's [`setComposeAction`](https://developers.google.com/apps-script/reference/card-service/button#setComposeAction\(Action,ComposedEmailType\)) [widget handler function](https://developers.google.com/workspace/add-ons/concepts/actions#widget_handler_functions), providing it the [`Action`](https://developers.google.com/apps-script/reference/card-service/action) object and specifying the [`ComposeEmailType`](https://developers.google.com/apps-script/reference/card-service/composed-email-type).
4. Implement the callback function that executes the draft-building action. This function is given an [event object](https://developers.google.com/workspace/add-ons/concepts/actions#action_event_objects) as an argument. The callback function must do the following:
	1. Create a [`GmailDraft`](https://developers.google.com/apps-script/reference/gmail/gmail-draft) object.
		2. Build a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response) object using the [`ComposeActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder) class and the [`GmailDraft`](https://developers.google.com/apps-script/reference/gmail/gmail-draft) object.
		3. Return the built [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response).

You can prefill the [`GmailDraft`](https://developers.google.com/apps-script/reference/gmail/gmail-draft) you create in the callback function with recipients, a subject, a message body, and attachments. To fill in the draft, data can come from any source, but typically it derives from information provided to the add-on itself, information in the open message, or information gathered from a third-party service. The [event object](https://developers.google.com/workspace/add-ons/concepts/event-objects) passed to the callback function contains the open message ID and other add-on information you can use to prefill the draft.

You can create the draft as a new standalone message or a reply to an existing message. This is controlled by the [`ComposeEmailType`](https://developers.google.com/apps-script/reference/card-service/composed-email-type) enum given to the [`setComposeAction`](https://developers.google.com/apps-script/reference/card-service/button#setComposeAction\(Action,ComposedEmailType\)). You can create reply drafts as single replies or 'reply-all' messages.

### Standalone drafts

A standalone draft starts a new thread and isn't a reply to any existing message. You can create a standalone draft with one of the following [Gmail service](https://developers.google.com/apps-script/reference/gmail) functions:

- [`GmailApp.createDraft(recipient, subject, body)`](https://developers.google.com/apps-script/reference/gmail/gmail-app#createDraft\(String,String,String\))
- [`GmailApp.createDraft(recipient, subject, body, options)`](https://developers.google.com/apps-script/reference/gmail/gmail-app#createdraftrecipient-subject-body-options)

### Reply drafts

A reply draft is part of an existing message thread. Reply drafts are either single replies that only get sent to the sender of a message or "reply all" drafts that get sent to everyone who received that message. You can create a reply draft with one of these [Gmail service](https://developers.google.com/apps-script/reference/gmail) functions:

- [`GmailMessage.createDraftReply(body)`](https://developers.google.com/apps-script/reference/gmail/gmail-message#createdraftreplybody)
- [`GmailMessage.createDraftReply(body, options)`](https://developers.google.com/apps-script/reference/gmail/gmail-message#createdraftreplybody-options)
- [`GmailMessage.createDraftReplyAll(body)`](https://developers.google.com/apps-script/reference/gmail/gmail-message#createdraftreplyallbody)
- [`GmailMessage.createDraftReplyAll(body, options)`](https://developers.google.com/apps-script/reference/gmail/gmail-message#createdraftreplyallbody-options)
- [`GmailThread.createDraftReply(body)`](https://developers.google.com/apps-script/reference/gmail/gmail-thread#createdraftreplybody)
- [`GmailThread.createDraftReply(body, options)`](https://developers.google.com/apps-script/reference/gmail/gmail-thread#createdraftreplybody-options)
- [`GmailThread.createDraftReplyAll(body)`](https://developers.google.com/apps-script/reference/gmail/gmail-thread#createdraftreplyallbody)
- [`GmailThread.createDraftReplyAll(body, options)`](https://developers.google.com/apps-script/reference/gmail/gmail-thread#createdraftreplyallbody-options)

## Example

The following code snippet shows how to assign an action that builds a reply draft to a button.

```
var composeAction = CardService.newAction()
    .setFunctionName('createReplyDraft');
var composeButton = CardService.newTextButton()
    .setText('Compose Reply')
    .setComposeAction(
        composeAction,
        CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

/**
 *  Creates a draft email (with an attachment and inline image)
 *  as a reply to an existing message.
 *  @param {Object} e An event object passed by the action.
 *  @return {ComposeActionResponse}
 */
function createReplyDraft(e) {
  // Activate temporary Gmail scopes, in this case to allow
  // a reply to be drafted.
  var accessToken = e.gmail.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);

  // Creates a draft reply.
  var messageId = e.gmail.messageId;
  var message = GmailApp.getMessageById(messageId);
  var draft = message.createDraftReply('',
      {
          htmlBody: "Kitten! <img src='cid:kitten'/>",
          attachments: [
            UrlFetchApp.fetch('https://example.com/images/myDog.jpg')
                .getBlob()
          ],
          inlineImages: {
            "kitten": UrlFetchApp.fetch('https://example.com/images/myKitten.jpg')
                          .getBlob()
          }
      }
  );

  // Return a built draft response. This causes Gmail to present a
  // compose window to the user, pre-filled with the content previously
  // specified.
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft).build();
}
```
