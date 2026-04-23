---
source: https://developers.google.com/workspace/chat/read-form-data
root: workspace
fetched_at: 2026-04-23T15:25:31.480Z
---

# Collect and process information from Google Chat users

## Page Summary

- Google Chat apps utilize cards with form input widgets (`textInput`, `selectionInput`, `dateTimePicker`) and buttons to collect user information.
- Form data is submitted via the `CARD_CLICKED` event and accessed using the `common.formInputs` object and widget names.
- Apps can transfer data between cards using `actionParameters`, allowing for multi-step forms and dynamic content.
- Upon submission, apps should acknowledge receipt or display errors using messages or card updates.
- Code examples in Node.js, Python, Java, and Apps Script demonstrate form implementation and data handling.

This guide describes how Google Chat apps can collect and process information from users by building form inputs in card-based interfaces.

![A dialog featuring a variety of different widgets.](https://developers.google.com/static/workspace/chat/images/dialogs-card-1.png)

Figure 1: A sample Chat app that opens a dialog to collect contact information.

Chat apps request information from users to perform actions in or outside of Chat, including in the following ways:

- Configure settings. For example, to let users customize notification settings or configure and add the Chat app to one or more spaces.
- Create or update information in other Google Workspace applications. For example, let users create a Google Calendar event.
- Let users access and update resources in other apps or web services. For example, a Chat app can help users update the status of a support ticket directly from a Chat space.

## Prerequisites

### Node.js

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).

### Python

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).

### Java

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).

### Apps Script

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app in Apps Script, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/apps-script-app).

## Build forms using cards

To collect information, Chat apps design forms and their inputs, and build them into cards. To display cards to users, Chat apps can use the following Chat interfaces:

- [Messages](https://developers.google.com/workspace/chat/messages-overview#anatomy-card) that contain one or more cards.
- [Homepages](https://developers.google.com/workspace/chat/send-app-home-card-message), which is a card that appears from the **Home** tab in direct messages with the Chat app.
- [Dialogs](https://developers.google.com/workspace/chat/dialogs), which are cards that open in a new window from messages and homepages.

Chat apps can build the cards using the following widgets:

- Form input widgets that request information from users. Optionally, you can add [validation](https://developers.google.com/workspace/chat/design-interactive-card-dialog#card-validation) to form input widgets, to ensure that users input and format information correctly. Chat apps can use the following form input widgets:
	- [Text inputs](https://developers.google.com/workspace/chat/design-interactive-card-dialog#collect-text) (`textInput`) for free-form or suggested text.
		- [Selection inputs](https://developers.google.com/workspace/chat/design-interactive-card-dialog#let-users-select) (`selectionInput`) are selectable UI elements such as checkboxes, radio buttons, and drop-down menus. Selection input widgets can also populate items from static or dynamic data sources. For example, users can select from a list of Chat spaces that they're a member of.
		- [Date time pickers](https://developers.google.com/workspace/chat/design-interactive-card-dialog#collect-dates) (`dateTimePicker`) for date and time entries.
- A [button](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add-button) widget so that users can submit values that they've input in the card. After a user clicks the button, the Chat app can then [process the information that it receives](#receive-data).

In the following example, a card collects contact information using a text input, date time picker, and selection input:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=contact-form&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Form that collects text, a date, and a selection."></iframe>

For an example of a Chat app that uses this contact form, see the following code:

### Node.js

```
/**
 * The section of the contact card that contains the form input widgets. Used in a dialog and card message.
 * To add and preview widgets, use the Card Builder: https://addons.gsuite.google.com/uikit/builder
 */
const CONTACT_FORM_WIDGETS = [
  {
    "textInput": {
      "name": "contactName",
      "label": "First and last name",
      "type": "SINGLE_LINE"
    }
  },
  {
    "dateTimePicker": {
      "name": "contactBirthdate",
      "label": "Birthdate",
      "type": "DATE_ONLY"
    }
  },
  {
    "selectionInput": {
      "name": "contactType",
      "label": "Contact type",
      "type": "RADIO_BUTTON",
      "items": [
        {
          "text": "Work",
          "value": "Work",
          "selected": false
        },
        {
          "text": "Personal",
          "value": "Personal",
          "selected": false
        }
      ]
    }
  }
];
```

### Python

```
# The section of the contact card that contains the form input widgets. Used in a dialog and card message.
# To add and preview widgets, use the Card Builder: https://addons.gsuite.google.com/uikit/builder
CONTACT_FORM_WIDGETS = [
  {
    "textInput": {
      "name": "contactName",
      "label": "First and last name",
      "type": "SINGLE_LINE"
    }
  },
  {
    "dateTimePicker": {
      "name": "contactBirthdate",
      "label": "Birthdate",
      "type": "DATE_ONLY"
    }
  },
  {
    "selectionInput": {
      "name": "contactType",
      "label": "Contact type",
      "type": "RADIO_BUTTON",
      "items": [
        {
          "text": "Work",
          "value": "Work",
          "selected": False
        },
        {
          "text": "Personal",
          "value": "Personal",
          "selected": False
        }
      ]
    }
  }
]
```

### Java

```
// The section of the contact card that contains the form input widgets. Used in a dialog and card message.
// To add and preview widgets, use the Card Builder: https://addons.gsuite.google.com/uikit/builder
final static private List<GoogleAppsCardV1Widget> CONTACT_FORM_WIDGETS = List.of(
  new GoogleAppsCardV1Widget().setTextInput(new GoogleAppsCardV1TextInput()
    .setName("contactName")
    .setLabel("First and last name")
    .setType("SINGLE_LINE")),
  new GoogleAppsCardV1Widget().setDateTimePicker(new GoogleAppsCardV1DateTimePicker()
    .setName("contactBirthdate")
    .setLabel("Birthdate")
    .setType("DATE_ONLY")),
  new GoogleAppsCardV1Widget().setSelectionInput(new GoogleAppsCardV1SelectionInput()
    .setName("contactType")
    .setLabel("Contact type")
    .setType("RADIO_BUTTON")
    .setItems(List.of(
      new GoogleAppsCardV1SelectionItem()
        .setText("Work")
        .setValue("Work")
        .setSelected(false),
      new GoogleAppsCardV1SelectionItem()
        .setText("Personal")
        .setValue("Personal")
        .setSelected(false)))));
```

### Apps Script

```
/**
 * The section of the contact card that contains the form input widgets. Used in a dialog and card message.
 * To add and preview widgets, use the Card Builder: https://addons.gsuite.google.com/uikit/builder
 */
const CONTACT_FORM_WIDGETS = [
  {
    "textInput": {
      "name": "contactName",
      "label": "First and last name",
      "type": "SINGLE_LINE"
    }
  },
  {
    "dateTimePicker": {
      "name": "contactBirthdate",
      "label": "Birthdate",
      "type": "DATE_ONLY"
    }
  },
  {
    "selectionInput": {
      "name": "contactType",
      "label": "Contact type",
      "type": "RADIO_BUTTON",
      "items": [
        {
          "text": "Work",
          "value": "Work",
          "selected": false
        },
        {
          "text": "Personal",
          "value": "Personal",
          "selected": false
        }
      ]
    }
  }
];
```

For more examples of interactive widgets that you can use to collect information, see [Design an interactive card or dialog](https://developers.google.com/workspace/chat/design-interactive-card-dialog).

## Receive data from interactive widgets

Whenever users click a button, Chat apps receive an interaction event dependent on the location of the button:

- If the button is in a message or dialog, Chat apps receive a [`CARD_CLICKED` interaction event](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event) that contains information about the interaction. The payload of `CARD_CLICKED` interaction events contains a [`common.formInputs`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#CommonEventObject) object with any values that the user inputs.
	You can retrieve the values from the object `common.formInputs.WIDGET_NAME`, where WIDGET\_NAME is the `name` field that you specified for the widget. The values are returned as a specific data type for the widget (represented as an [`Inputs`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#inputs) object).
	The following shows a portion of a `CARD_CLICKED` interaction event where a user inputted values for each widget:
	### HTTP
	```
	{
	  "type": "CARD_CLICKED",
	  "common": { "formInputs": {
	    "contactName": { "stringInputs": {
	      "value": ["Kai 0"]
	    }},
	    "contactBirthdate": { "dateInput": {
	      "msSinceEpoch": 1000425600000
	    }},
	    "contactType": { "stringInputs": {
	      "value": ["Personal"]
	    }}
	  }}
	}
	```
	### Apps Script
	```
	{
	  "type": "CARD_CLICKED",
	  "common": { "formInputs": {
	    "contactName": { "": { "stringInputs": {
	      "value": ["Kai 0"]
	    }}},
	    "contactBirthdate": { "": { "dateInput": {
	      "msSinceEpoch": 1000425600000
	    }}},
	      "contactType": { "": { "stringInputs": {
	      "value": ["Personal"]
	    }}}
	  }}
	}
	```
- If the button is on a [homepage](https://developers.google.com/workspace/chat/send-app-home-card-message), Chat apps receive a [`SUBMIT_FORM` interaction event](https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType). The payload of the interaction event contains a [`commonEventObject.formInputs`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#commoneventobject) object with any values that the user inputs.
	You can retrieve the values from the object `commonEventObject.formInputs.WIDGET_NAME`, where WIDGET\_NAME is the `name` field that you specified for the widget. The values are returned as a specific data type for the widget (represented as an [`Inputs`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#inputs) object).
	The following shows a portion of a `SUBMIT_FORM` interaction event where a user inputted values for each widget:
	### HTTP
	```
	{
	  "type": "SUBMIT_FORM",
	  "commonEventObject": { "formInputs": {
	    "contactName": { "stringInputs": {
	      "value": ["Kai 0"]
	    }},
	    "contactBirthdate": { "dateInput": {
	      "msSinceEpoch": 1000425600000
	    }},
	    "contactType": { "stringInputs": {
	      "value": ["Personal"]
	    }}
	  }}
	}
	```
	### Apps Script
	```
	{
	  "type": "SUBMIT_FORM",
	  "commonEventObject": { "formInputs": {
	    "contactName": { "": { "stringInputs": {
	      "value": ["Kai 0"]
	    }}},
	    "contactBirthdate": { "": { "dateInput": {
	      "msSinceEpoch": 1000425600000
	    }}},
	      "contactType": { "": { "stringInputs": {
	      "value": ["Personal"]
	    }}}
	  }}
	}
	```

To receive the data, your Chat app handles the interaction event to get the values that users input into widgets. The following table shows how to get the value for a given form input widget. For each widget, the table shows the data type that the widget accepts, where the value is stored in the interaction event, and an example value.

| Form input widget | Type of input data | Input value from the interaction event | Example value |
| --- | --- | --- | --- |
| `textInput` | [`stringInputs`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#stringinputs) | `event.common.formInputs.contactName.stringInputs.value[0]` | `Kai O` |
| `selectionInput` | [`stringInputs`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#stringinputs) | To get the first or only value, `event.common.formInputs.contactType.stringInputs.value[0]` | `Personal` |
| `dateTimePicker` that only accepts dates. | [`dateInput`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#dateinput) | `event.common.formInputs.contactBirthdate.dateInput.msSinceEpoch`. | `1000425600000` |

### Transfer data to another card

After a user submits information from a card, you might need to return additional cards to do any of the following:

- Help users to complete longer forms by creating distinct sections.
- Let users preview and confirm information from the initial card, so that they can review their answers before submitting.
- Dynamically populate the remaining parts of the form. For example, to prompt users to create an appointment, a Chat app could display an initial card that requests the reason for the appointment, and then populates another card that provides available times based on the appointment type.

To transfer the data input from the initial card, you can build the `button` widget with [`actionParameters`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Message.ActionParameter_1) that contain the widget's `name` and the value the user inputs, as shown in the following example:

### Node.js

```
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
```

### Python

```
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
```

### Java

```
new GoogleAppsCardV1Widget().setButtonList(new GoogleAppsCardV1ButtonList().setButtons(List.of(new GoogleAppsCardV1Button()
  .setText("Submit")
  .setOnClick(new GoogleAppsCardV1OnClick().setAction(new GoogleAppsCardV1Action()
    .setFunction("submitForm")
    .setParameters(List.of(
      new GoogleAppsCardV1ActionParameter().setKey("contactName").setValue(name),
      new GoogleAppsCardV1ActionParameter().setKey("contactBirthdate").setValue(birthdate),
      new GoogleAppsCardV1ActionParameter().setKey("contactType").setValue(type))))))))));
```

### Apps Script

```
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
```

When a user clicks the button, your Chat app receives a `CARD_CLICKED` interaction event from which you can [receive data](#receive-data).

## Respond to a form submission

After receiving the data from a card message or dialog, the Chat app responds by either acknowledging receipt or returning an error.

In the following example, a Chat app sends a text message to confirm that it has successfully received a form submitted from a dialog or card message.

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

To process and close a dialog, you return an [`ActionResponse`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#ActionResponse) object that specifies whether you want to send a confirmation message, update the original message or card, or just close the dialog. For steps, see [Close a dialog](https://developers.google.com/workspace/chat/dialogs#close).

## Troubleshoot

When a Google Chat app or [card](https://developers.google.com/workspace/chat/create-messages#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](https://developers.google.com/workspace/chat/troubleshoot).

## Related topics

- [View the Contact Manager sample](https://developers.google.com/workspace/chat/tutorial-contact-app), which is a Chat app that prompts users to complete a contact form from card messages and dialogs.
- [Open interactive dialogs](https://developers.google.com/workspace/chat/dialogs)
