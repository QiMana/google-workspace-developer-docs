---
source: https://developers.google.com/workspace/chat/dialogs
root: workspace
fetched_at: 2026-04-23T15:25:25.789Z
---

# Support interactive dialogs

## Page Summary

- Google Chat apps use dialogs, card-based interfaces, to collect information from users in a multi-step process, triggered by user interactions like button clicks.
- Dialogs are built using cards with sections for headers, widgets (like text fields and buttons), and actions, allowing for dynamic content and user input.
- Data is transferred between dialog steps using parameters, enabling the app to maintain context and user progress.
- Upon submission, the app processes the data, potentially sending a confirmation message and closing the dialog, or presenting another dialog for further interaction.
- Developers can use provided code snippets in Node.js, Python, Java, and Apps Script to implement dialog functionality and handle user interactions within their Google Chat apps.

This page describes how your Chat app can open dialogs to respond to users.

*Dialogs* are windowed, card-based interfaces that open from a Chat space or message. The dialog and its contents are only visible to the user that opened it.

Chat apps can use dialogs to request and collect information from Chat users, including multi-step forms. For more details on building form inputs, see [Collect and process information from users](./read-form-data.md#build-cards).

## Prerequisites

### Node.js

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app using an HTTP service, complete this [quickstart](./quickstart/gcf-app.md).

### Python

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app using an HTTP service, complete this [quickstart](./quickstart/gcf-app.md).

### Java

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app using an HTTP service, complete this [quickstart](./quickstart/gcf-app.md).

### Apps Script

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app in Apps Script, complete this [quickstart](./quickstart/apps-script-app.md).

## Open a dialog

![A dialog featuring a variety of different widgets.](https://developers.google.com/static/workspace/chat/images/dialogs-card-1.png)

Figure 1: A sample Chat app that opens a dialog to collect contact information.

This section explains how to respond and set up a dialog by doing the following:

1. Trigger the dialog request from a user interaction.
2. Handle the request by returning and opening a dialog.
3. After users submit information, process the submission by either closing the dialog or returning another dialog.

### Trigger a dialog request

A Chat app can only open dialogs to respond to a user interaction, such as a command or a button click from a message in a card.

To respond to users with a dialog, a Chat app must build an interaction that triggers the dialog request, such as the following:

- **Respond to a command.** To trigger the request from a command, you must check the **Opens a dialog** checkbox when [configuring the command](./commands.md#configure).
- **Respond to a button click in a [message](./messages-overview.md)**, either as part of a card or at the bottom of the message. To trigger the request from a button in a message, you configure the button's [`onClick`](./api/reference/rest/v1/cards.md#action) action by setting its `interaction` to `OPEN_DIALOG`.
- **Respond to a button click in a Chat app homepage**. To learn about opening dialogs from homepages, see [Build a homepage for your Google Chat app](./send-app-home-card-message.md).
![Button that triggers a dialog](https://developers.google.com/static/workspace/chat/images/dialogs-open-card-click.png)

Figure 2: A Chat app sends a message that prompts users to use the /addContact slash command. The message also includes a button that users can click to trigger the command.

The following code sample shows how to trigger a dialog request from a button in a card message. To open the dialog, the [`button.interaction`](./api/reference/rest/v1/cards.md#Message.Button_1) field is set to `OPEN_DIALOG`:

### Node.js

```
buttonList: { buttons: [{
  text: "Add Contact",
  onClick: { action: {
    function: "openInitialDialog",
    interaction: "OPEN_DIALOG"
  }}
}]}
```

### Python

```
'buttonList': { 'buttons': [{
  'text': "Add Contact",
  'onClick': { 'action': {
    'function': "openInitialDialog",
    'interaction': "OPEN_DIALOG"
  }}
}]}
```

### Java

```
.setButtonList(new GoogleAppsCardV1ButtonList().setButtons(List.of(new GoogleAppsCardV1Button()
  .setText("Add Contact")
  .setOnClick(new GoogleAppsCardV1OnClick().setAction(new GoogleAppsCardV1Action()
    .setFunction("openInitialDialog")
    .setInteraction("OPEN_DIALOG"))))))));
```

### Apps Script

This example sends a card message by returning [card JSON](./api/reference/rest/v1/cards.md). You can also use the [Apps Script card service](../../apps-script/reference/card-service.md).

```
buttonList: { buttons: [{
  text: "Add Contact",
  onClick: { action: {
    function: "openInitialDialog",
    interaction: "OPEN_DIALOG"
  }}
}]}
```

### Open the initial dialog

When a user triggers a dialog request, your Chat app receives an interaction event, represented as an [`event`](./api/reference/rest/v1/Event.md) type in the Chat API. If the interaction triggers a dialog request, the event's `dialogEventType` field is set to `REQUEST_DIALOG`.

To open a dialog, your Chat app can respond to the request by returning an [`actionResponse`](./api/reference/rest/v1/spaces.messages.md#actionresponse) object with the `type` set to `DIALOG` and [`Message`](./api/reference/rest/v1/spaces.messages.md#Message) object. To specify the contents of the dialog, you include the following objects:

- An [`actionResponse`](./api/reference/rest/v1/spaces.messages.md#ActionResponse) object, with its `type` set to `DIALOG`.
- A [`dialogAction`](./api/reference/rest/v1/spaces.messages.md#DialogAction) object. The `body` field contains the user interface (UI) elements to display in the card, including one or more [`sections`](./api/reference/rest/v1/cards.md#section) of widgets. To collect information from users, you can specify form input widgets and a button widget. To learn more about designing form inputs, see [Collect and process information from users](./read-form-data.md#build-cards).

The following code sample shows how a Chat app returns a response that opens a dialog:

### Node.js

```
/**
 * Opens the initial step of the dialog that lets users add contact details.
 *
 * @return {Object} a message with an action response to open a dialog.
 */
function openInitialDialog() {
  return { actionResponse: {
    type: "DIALOG",
    dialogAction: { dialog: { body: { sections: [{
      header: "Add new contact",
      widgets: CONTACT_FORM_WIDGETS.concat([{
        buttonList: { buttons: [{
          text: "Review and submit",
          onClick: { action: { function: "openConfirmation" }}
        }]}
      }])
    }]}}}
  }};
}
```

### Python

```
def open_initial_dialog() -> dict:
  """Opens the initial step of the dialog that lets users add contact details."""
  return { 'actionResponse': {
    'type': "DIALOG",
    'dialogAction': { 'dialog': { 'body': { 'sections': [{
      'header': "Add new contact",
      'widgets': CONTACT_FORM_WIDGETS + [{
        'buttonList': { 'buttons': [{
          'text': "Review and submit",
          'onClick': { 'action': { 'function': "openConfirmation" }}
        }]}
      }]
    }]}}}
  }}
```

### Java

```
// Opens the initial step of the dialog that lets users add contact details.
Message openInitialDialog() {
  return new Message().setActionResponse(new ActionResponse()
    .setType("DIALOG")
    .setDialogAction(new DialogAction().setDialog(new Dialog().setBody(new GoogleAppsCardV1Card()
      .setSections(List.of(new GoogleAppsCardV1Section()
        .setHeader("Add new contact")
        .setWidgets(Stream.concat(
          CONTACT_FORM_WIDGETS.stream(),
          List.of(new GoogleAppsCardV1Widget()
            .setButtonList(new GoogleAppsCardV1ButtonList().setButtons(List.of(new GoogleAppsCardV1Button()
            .setText("Review and submit")
            .setOnClick(new GoogleAppsCardV1OnClick().setAction(new GoogleAppsCardV1Action()
              .setFunction("openConfirmation"))))))).stream()).collect(Collectors.toList()))))))));
}
```

### Apps Script

This example sends a card message by returning [card JSON](./api/reference/rest/v1/cards.md). You can also use the [Apps Script card service](../../apps-script/reference/card-service.md).

```
/**
 * Opens the initial step of the dialog that lets users add contact details.
 *
 * @return {Object} a message with an action response to open a dialog.
 */
function openInitialDialog() {
  return { actionResponse: {
    type: "DIALOG",
    dialogAction: { dialog: { body: { sections: [{
      header: "Add new contact",
      widgets: CONTACT_FORM_WIDGETS.concat([{
        buttonList: { buttons: [{
          text: "Review and submit",
          onClick: { action: { function: "openConfirmation" }}
        }]}
      }])
    }]}}}
  }};
}
```

## Handle the dialog submission

When users click a button that submits a dialog, your Chat app receives a [`CARD_CLICKED`](./api/reference/rest/v1/EventType.md) interaction event where the [`dialogEventType`](./api/reference/rest/v1/DialogEventType.md) is `SUBMIT_DIALOG`. To understand how to collect and process the information in the dialog, see [Collect and process information from Chat users](./read-form-data.md).

Your Chat app must respond to the interaction event by doing one of the following:

- [Return another dialog](#return-another-dialog) to populate another card or form.
- [Close the dialog](#close) after validating the data the user submitted, and optionally, send a confirmation message.

### Optional: Return another dialog

After users submit the initial dialog, Chat apps can return one or more additional dialogs to help users review information before submitting, complete multi-step forms, or populate form content dynamically.

To process the data that users input, the Chat app uses the [`event.common.formInputs`](./api/reference/rest/v1/Event.md#CommonEventObject) object. To learn more about retrieving values from input widgets, see [Collect and process information from users](./read-form-data.md).

To keep track of any data that users input from the initial dialog, you must add parameters to the button that opens the next dialog. For details, see [Transfer data to another card](./read-form-data.md#transfer).

In this example, a Chat app opens an initial dialog that leads to a second dialog for confirmation before submitting:

### Node.js

```
/**
 * Responds to CARD_CLICKED interaction events in Google Chat.
 *
 * @param {Object} event the CARD_CLICKED interaction event from Google Chat.
 * @return {Object} message responses specific to the dialog handling.
 */
function onCardClick(event) {
  // Initial dialog form page
  if (event.common.invokedFunction === "openInitialDialog") {
    return openInitialDialog();
  // Confirmation dialog form page
  } else if (event.common.invokedFunction === "openConfirmation") {
    return openConfirmation(event);
  // Submission dialog form page
  } else if (event.common.invokedFunction === "submitForm") {
    return submitForm(event);
  }
}

/**
 * Opens the initial step of the dialog that lets users add contact details.
 *
 * @return {Object} a message with an action response to open a dialog.
 */
function openInitialDialog() {
  return { actionResponse: {
    type: "DIALOG",
    dialogAction: { dialog: { body: { sections: [{
      header: "Add new contact",
      widgets: CONTACT_FORM_WIDGETS.concat([{
        buttonList: { buttons: [{
          text: "Review and submit",
          onClick: { action: { function: "openConfirmation" }}
        }]}
      }])
    }]}}}
  }};
}

/**
 * Returns the second step as a dialog or card message that lets users confirm details.
 *
 * @param {Object} event the interactive event with form inputs.
 * @return {Object} returns a dialog or private card message.
 */
function openConfirmation(event) {
  const name = fetchFormValue(event, "contactName") ?? "";
  const birthdate = fetchFormValue(event, "contactBirthdate") ?? "";
  const type = fetchFormValue(event, "contactType") ?? "";
  const cardConfirmation = {
    header: "Your contact",
    widgets: [{
      textParagraph: { text: "Confirm contact information and submit:" }}, {
      textParagraph: { text: "<b>Name:</b> " + name }}, {
      textParagraph: {
        text: "<b>Birthday:</b> " + convertMillisToDateString(birthdate)
      }}, {
      textParagraph: { text: "<b>Type:</b> " + type }}, {
      buttonList: { buttons: [{
        text: "Submit",
        onClick: { action: {
          function: "submitForm",
          parameters: [{
            key: "contactName", value: name }, {
            key: "contactBirthdate", value: birthdate }, {
            key: "contactType", value: type
          }]
        }}
      }]}
    }]
  };

  // Returns a dialog with contact information that the user input.
  if (event.isDialogEvent) {
    return { action_response: {
      type: "DIALOG",
      dialogAction: { dialog: { body: { sections: [ cardConfirmation ]}}}
    }};
  }

  // Updates existing card message with contact information that the user input.
  return {
    actionResponse: { type: "UPDATE_MESSAGE" },
    privateMessageViewer: event.user,
    cardsV2: [{
      card: { sections: [cardConfirmation]}
    }]
  }
}
```

### Python

```
def on_card_click(event: dict) -> dict:
  """Responds to CARD_CLICKED interaction events in Google Chat."""
  # Initial dialog form page
  if "openInitialDialog" == event.get('common').get('invokedFunction'):
    return open_initial_dialog()
  # Confirmation dialog form page
  elif "openConfirmation" == event.get('common').get('invokedFunction'):
    return open_confirmation(event)
  # Submission dialog form page
  elif "submitForm" == event.get('common').get('invokedFunction'):
    return submit_form(event)

def open_initial_dialog() -> dict:
  """Opens the initial step of the dialog that lets users add contact details."""
  return { 'actionResponse': {
    'type': "DIALOG",
    'dialogAction': { 'dialog': { 'body': { 'sections': [{
      'header': "Add new contact",
      'widgets': CONTACT_FORM_WIDGETS + [{
        'buttonList': { 'buttons': [{
          'text': "Review and submit",
          'onClick': { 'action': { 'function': "openConfirmation" }}
        }]}
      }]
    }]}}}
  }}

def open_confirmation(event: dict) -> dict:
  """Returns the second step as a dialog or card message that lets users confirm details."""
  name = fetch_form_value(event, "contactName") or ""
  birthdate = fetch_form_value(event, "contactBirthdate") or ""
  type = fetch_form_value(event, "contactType") or ""
  card_confirmation = {
    'header': "Your contact",
    'widgets': [{
      'textParagraph': { 'text': "Confirm contact information and submit:" }}, {
      'textParagraph': { 'text': "<b>Name:</b> " + name }}, {
      'textParagraph': {
        'text': "<b>Birthday:</b> " + convert_millis_to_date_string(birthdate)
      }}, {
      'textParagraph': { 'text': "<b>Type:</b> " + type }}, {
      'buttonList': { 'buttons': [{
        'text': "Submit",
        'onClick': { 'action': {
          'function': "submitForm",
          'parameters': [{
            'key': "contactName", 'value': name }, {
            'key': "contactBirthdate", 'value': birthdate }, {
            'key': "contactType", 'value': type
          }]
        }}
      }]}
    }]
  }

  # Returns a dialog with contact information that the user input.
  if event.get('isDialogEvent'): 
    return { 'action_response': {
      'type': "DIALOG",
      'dialogAction': { 'dialog': { 'body': { 'sections': [card_confirmation] }}}
    }}

  # Updates existing card message with contact information that the user input.
  return {
    'actionResponse': { 'type': "UPDATE_MESSAGE" },
    'privateMessageViewer': event.get('user'),
    'cardsV2': [{
      'card': { 'sections': [card_confirmation] }
    }]
  }
```

### Java

```
// Responds to CARD_CLICKED interaction events in Google Chat.
Message onCardClick(JsonNode event) {
  String invokedFunction = event.at("/common/invokedFunction").asText();
  // Initial dialog form page
  if ("openInitialDialog".equals(invokedFunction)) {
    return openInitialDialog();
  // Confirmation dialog form page
  } else if ("openConfirmation".equals(invokedFunction)) {
    return openConfirmation(event);
  // Submission dialog form page
  } else if ("submitForm".equals(invokedFunction)) {
    return submitForm(event);
  }
  return null; 
}

// Opens the initial step of the dialog that lets users add contact details.
Message openInitialDialog() {
  return new Message().setActionResponse(new ActionResponse()
    .setType("DIALOG")
    .setDialogAction(new DialogAction().setDialog(new Dialog().setBody(new GoogleAppsCardV1Card()
      .setSections(List.of(new GoogleAppsCardV1Section()
        .setHeader("Add new contact")
        .setWidgets(Stream.concat(
          CONTACT_FORM_WIDGETS.stream(),
          List.of(new GoogleAppsCardV1Widget()
            .setButtonList(new GoogleAppsCardV1ButtonList().setButtons(List.of(new GoogleAppsCardV1Button()
            .setText("Review and submit")
            .setOnClick(new GoogleAppsCardV1OnClick().setAction(new GoogleAppsCardV1Action()
              .setFunction("openConfirmation"))))))).stream()).collect(Collectors.toList()))))))));
}

// Returns the second step as a dialog or card message that lets users confirm details.
Message openConfirmation(JsonNode event) {
  String name = fetchFormValue(event, "contactName") != null ?
    fetchFormValue(event, "contactName") : "";
  String birthdate = fetchFormValue(event, "contactBirthdate") != null ?
    fetchFormValue(event, "contactBirthdate") : "";
  String type = fetchFormValue(event, "contactType") != null ?
    fetchFormValue(event, "contactType") : "";
  GoogleAppsCardV1Section cardConfirmationSection = new GoogleAppsCardV1Section()
    .setHeader("Your contact")
    .setWidgets(List.of(
      new GoogleAppsCardV1Widget().setTextParagraph(new GoogleAppsCardV1TextParagraph()
        .setText("Confirm contact information and submit:")),
      new GoogleAppsCardV1Widget().setTextParagraph(new GoogleAppsCardV1TextParagraph()
        .setText("<b>Name:</b> " + name)),
      new GoogleAppsCardV1Widget().setTextParagraph(new GoogleAppsCardV1TextParagraph()
        .setText("<b>Birthday:</b> " + convertMillisToDateString(birthdate))),
      new GoogleAppsCardV1Widget().setTextParagraph(new GoogleAppsCardV1TextParagraph()
        .setText("<b>Type:</b> " + type)),
      new GoogleAppsCardV1Widget().setButtonList(new GoogleAppsCardV1ButtonList().setButtons(List.of(new GoogleAppsCardV1Button()
        .setText("Submit")
        .setOnClick(new GoogleAppsCardV1OnClick().setAction(new GoogleAppsCardV1Action()
          .setFunction("submitForm")
          .setParameters(List.of(
            new GoogleAppsCardV1ActionParameter().setKey("contactName").setValue(name),
            new GoogleAppsCardV1ActionParameter().setKey("contactBirthdate").setValue(birthdate),
            new GoogleAppsCardV1ActionParameter().setKey("contactType").setValue(type))))))))));

  // Returns a dialog with contact information that the user input.
  if (event.at("/isDialogEvent") != null && event.at("/isDialogEvent").asBoolean()) {
    return new Message().setActionResponse(new ActionResponse()
      .setType("DIALOG")
      .setDialogAction(new DialogAction().setDialog(new Dialog().setBody(new GoogleAppsCardV1Card()
        .setSections(List.of(cardConfirmationSection))))));
  }

  // Updates existing card message with contact information that the user input.
  return new Message()
    .setActionResponse(new ActionResponse()
      .setType("UPDATE_MESSAGE"))
    .setPrivateMessageViewer(new User().setName(event.at("/user/name").asText()))
    .setCardsV2(List.of(new CardWithId().setCard(new GoogleAppsCardV1Card()
      .setSections(List.of(cardConfirmationSection)))));
}
```

### Apps Script

This example sends a card message by returning [card JSON](./api/reference/rest/v1/cards.md). You can also use the [Apps Script card service](../../apps-script/reference/card-service.md).

```
/**
 * Responds to CARD_CLICKED interaction events in Google Chat.
 *
 * @param {Object} event the CARD_CLICKED interaction event from Google Chat.
 * @return {Object} message responses specific to the dialog handling.
 */
function onCardClick(event) {
  // Initial dialog form page
  if (event.common.invokedFunction === "openInitialDialog") {
    return openInitialDialog();
  // Confirmation dialog form page
  } else if (event.common.invokedFunction === "openConfirmation") {
    return openConfirmation(event);
  // Submission dialog form page
  } else if (event.common.invokedFunction === "submitForm") {
    return submitForm(event);
  }
}

/**
 * Opens the initial step of the dialog that lets users add contact details.
 *
 * @return {Object} a message with an action response to open a dialog.
 */
function openInitialDialog() {
  return { actionResponse: {
    type: "DIALOG",
    dialogAction: { dialog: { body: { sections: [{
      header: "Add new contact",
      widgets: CONTACT_FORM_WIDGETS.concat([{
        buttonList: { buttons: [{
          text: "Review and submit",
          onClick: { action: { function: "openConfirmation" }}
        }]}
      }])
    }]}}}
  }};
}

/**
 * Returns the second step as a dialog or card message that lets users confirm details.
 *
 * @param {Object} event the interactive event with form inputs.
 * @return {Object} returns a dialog or private card message.
 */
function openConfirmation(event) {
  const name = fetchFormValue(event, "contactName") ?? "";
  const birthdate = fetchFormValue(event, "contactBirthdate") ?? "";
  const type = fetchFormValue(event, "contactType") ?? "";
  const cardConfirmation = {
    header: "Your contact",
    widgets: [{
      textParagraph: { text: "Confirm contact information and submit:" }}, {
      textParagraph: { text: "<b>Name:</b> " + name }}, {
      textParagraph: {
        text: "<b>Birthday:</b> " + convertMillisToDateString(birthdate)
      }}, {
      textParagraph: { text: "<b>Type:</b> " + type }}, {
      buttonList: { buttons: [{
        text: "Submit",
        onClick: { action: {
          function: "submitForm",
          parameters: [{
            key: "contactName", value: name }, {
            key: "contactBirthdate", value: birthdate }, {
            key: "contactType", value: type
          }]
        }}
      }]}
    }]
  };

  // Returns a dialog with contact information that the user input.
  if (event.isDialogEvent) {
    return { action_response: {
      type: "DIALOG",
      dialogAction: { dialog: { body: { sections: [ cardConfirmation ]}}}
    }};
  }

  // Updates existing card message with contact information that the user input.
  return {
    actionResponse: { type: "UPDATE_MESSAGE" },
    privateMessageViewer: event.user,
    cardsV2: [{
      card: { sections: [cardConfirmation]}
    }]
  }
}
```

### Close the dialog

When users click a button on a dialog, your Chat app executes its associated action and provides the event object with the following information:

- [`eventType`](./api/reference/rest/v1/EventType.md) is `CARD_CLICKED`.
- [`dialogEventType`](./api/reference/rest/v1/DialogEventType.md) is `SUBMIT_DIALOG`.

The Chat app should return an [`ActionResponse`](./api/reference/rest/v1/spaces.messages.md#ActionResponse) object with its `type` set to `DIALOG`, and `dialogAction` populated. If the action did not fail then the `dialogAction.actionStatus` should be `OK` like in the following example:

### Node.js

```
// The Chat app indicates that it received form data from the dialog or card.
// Sends private text message that confirms submission.
const confirmationMessage = "✅ " + contactName + " has been added to your contacts.";
if (event.dialogEventType === "SUBMIT_DIALOG") {
  return {
    actionResponse: {
      type: "DIALOG",
      dialogAction: { actionStatus: {
        statusCode: "OK",
        userFacingMessage: "Success " + contactName
      }}
    }
  };
}
```

### Python

```
# The Chat app indicates that it received form data from the dialog or card.
# Sends private text message that confirms submission.
confirmation_message = "✅ " + contact_name + " has been added to your contacts.";
if "SUBMIT_DIALOG" == event.get('dialogEventType'):
  return {
    'actionResponse': {
      'type': "DIALOG",
      'dialogAction': { 'actionStatus': {
        'statusCode': "OK",
        'userFacingMessage': "Success " + contact_name
      }}
    }
  }
```

### Java

```
// The Chat app indicates that it received form data from the dialog or card.
// Sends private text message that confirms submission.
String confirmationMessage = "✅ " + contactName + " has been added to your contacts.";
if (event.at("/dialogEventType") != null && "SUBMIT_DIALOG".equals(event.at("/dialogEventType").asText())) {
  return new Message().setActionResponse(new ActionResponse()
    .setType("DIALOG")
    .setDialogAction(new DialogAction().setActionStatus(new ActionStatus()
      .setStatusCode("OK")
      .setUserFacingMessage("Success " + contactName))));
}
```

### Apps Script

This example sends a card message by returning [card JSON](./api/reference/rest/v1/cards.md). You can also use the [Apps Script card service](../../apps-script/reference/card-service.md).

```
// The Chat app indicates that it received form data from the dialog or card.
// Sends private text message that confirms submission.
const confirmationMessage = "✅ " + contactName + " has been added to your contacts.";
if (event.dialogEventType === "SUBMIT_DIALOG") {
  return {
    actionResponse: {
      type: "DIALOG",
      dialogAction: { actionStatus: {
        statusCode: "OK",
        userFacingMessage: "Success " + contactName
      }}
    }
  };
}
```

#### Optional: Display a temporary notification

When you close the dialog, you can also display a temporary text notification to the user that is interacting with the app.

The Chat app can respond with a success or error notification by returning an [`ActionResponse`](./api/reference/rest/v1/spaces.messages.md#ActionResponse) with `actionStatus` set.

The following example checks that parameters are valid and closes the dialog with text notification when invalid:

### Node.js

```
const contactName = event.common.parameters["contactName"];
// Checks to make sure the user entered a contact name.
// If no name value detected, returns an error message.
const errorMessage = "Don't forget to name your new contact!";
if (!contactName && event.dialogEventType === "SUBMIT_DIALOG") {
  return { actionResponse: {
    type: "DIALOG",
    dialogAction: { actionStatus: {
      statusCode: "INVALID_ARGUMENT",
      userFacingMessage: errorMessage
    }}
  }};
}
```

### Python

```
contact_name = event.get('common').get('parameters')["contactName"]
# Checks to make sure the user entered a contact name.
# If no name value detected, returns an error message.
error_message = "Don't forget to name your new contact!"
if contact_name == "" and "SUBMIT_DIALOG" == event.get('dialogEventType'):
  return { 'actionResponse': {
    'type': "DIALOG",
    'dialogAction': { 'actionStatus': {
      'statusCode': "INVALID_ARGUMENT",
      'userFacingMessage': error_message
    }}
  }}
```

### Java

```
String contactName = event.at("/common/parameters/contactName").asText();
// Checks to make sure the user entered a contact name.
// If no name value detected, returns an error message.
String errorMessage = "Don't forget to name your new contact!";
if (contactName.isEmpty() && event.at("/dialogEventType") != null && "SUBMIT_DIALOG".equals(event.at("/dialogEventType").asText())) {
  return new Message().setActionResponse(new ActionResponse()
    .setType("DIALOG")
    .setDialogAction(new DialogAction().setActionStatus(new ActionStatus()
      .setStatusCode("INVALID_ARGUMENT")
      .setUserFacingMessage(errorMessage))));
}
```

### Apps Script

This example sends a card message by returning [card JSON](./api/reference/rest/v1/cards.md). You can also use the [Apps Script card service](../../apps-script/reference/card-service.md).

```
const contactName = event.common.parameters["contactName"];
// Checks to make sure the user entered a contact name.
// If no name value detected, returns an error message.
const errorMessage = "Don't forget to name your new contact!";
if (!contactName && event.dialogEventType === "SUBMIT_DIALOG") {
  return { actionResponse: {
    type: "DIALOG",
    dialogAction: { actionStatus: {
      statusCode: "INVALID_ARGUMENT",
      userFacingMessage: errorMessage
    }}
  }};
}
```

For details about passing parameters between dialogs, see [Transfer data to another card](./read-form-data.md#transfer).

#### Optional: Send a confirmation Chat message

When you close the dialog, you can also send a new Chat message, or update an existing one.

To send a new message, return an [`ActionResponse`](./api/reference/rest/v1/spaces.messages.md#actionresponse) object with the `type` set to `NEW_MESSAGE`. The following example closes the dialog with confirmation text message:

### Node.js

```
return {
  actionResponse: { type: "NEW_MESSAGE" },
  privateMessageViewer: event.user,
  text: confirmationMessage
};
```

### Python

```
return {
  'actionResponse': { 'type': "NEW_MESSAGE" },
  'privateMessageViewer': event.get('user'),
  'text': confirmation_message
}
```

### Java

```
return new Message()
  .setActionResponse(new ActionResponse().setType("NEW_MESSAGE"))
  .setPrivateMessageViewer(new User().setName(event.at("/user/name").asText()))
  .setText(confirmationMessage);
```

### Apps Script

This example sends a card message by returning [card JSON](./api/reference/rest/v1/cards.md). You can also use the [Apps Script card service](../../apps-script/reference/card-service.md).

```
return {
  actionResponse: { type: "NEW_MESSAGE" },
  privateMessageViewer: event.user,
  text: confirmationMessage
};
```

To update a message, return an `actionResponse` object that contains the updated message and sets the `type` to one of the following:

- `UPDATE_MESSAGE`: Updates the message that [triggered the dialog request](#request).
- `UPDATE_USER_MESSAGE_CARDS`: Updates the card from a [link preview](./preview-links.md).

## Troubleshoot

When a Google Chat app or [card](./create-messages.md#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](./troubleshoot-fix-chat-errors.md).

## Related topics

- [View the Contact Manager sample](./tutorial-contact-app.md), which is a Chat app that uses dialogs to collect contact information.
- [Open dialogs from a Google Chat app homepage](./send-app-home-card-message.md#dialogs).
- [Respond to Google Chat app commands](./commands.md)
- [Process information inputted by users](./read-form-data.md)
