---
source: https://developers.google.com/workspace/chat/receive-respond-interactions
root: workspace
fetched_at: 2026-04-23T15:25:32.198Z
---

# Receive and respond to interaction events

## Page Summary

- Google Chat apps respond to user interactions, like @mentions or button clicks, called interaction events (`ADDED_TO_SPACE`, `CARD_CLICKED`, etc.).
- Configure your app to receive these events and define how it should respond (sending messages, updating data).
- Responses can be immediate (synchronous) or delayed (asynchronous), depending on the task.
- Dialogs within Chat apps have their own set of events for interactions like opening, submitting, or canceling.
- Refer to the provided resources and examples to learn how to build interactive Google Chat apps.

This page describes how your Google Chat app can receive and respond to user interactions, also known as *Google Chat app interaction events*.

This page describes how to do the following:

- Configure your Chat app to receive interaction events.
- Process the interaction event on your infrastructure.
- If appropriate, respond to interaction events.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
- [Enable the Google Chat API](https://developers.google.com/workspace/guides/enable-apis).

## Types of interaction events

A *Google Chat app interaction event* represents any action that a user takes to invoke or interact with a Chat app, such as @mentioning a Chat app or adding it to a space.

When users interact with a Chat app, Google Chat sends the Chat app an interaction event, represented as an [`Event`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event) type in the Chat API. The Chat app can use the event to process the interaction, and optionally, respond with a message.

For each type of user interaction, Google Chat sends a different type of interaction event which helps your Chat app handle each event type accordingly. The type of interaction event is represented using the [`eventType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType) object.

For example, Google Chat uses the event type `ADDED_TO_SPACE` for any interaction where a user adds the Chat app to a space, so that the Chat app can immediately [respond with a welcome message in the space](#reply-message).

![Chat app posts a welcome message.](https://developers.google.com/static/workspace/chat/images/design-principles-onboarding-example-scheduler.png)

Figure 1: When a user adds a Chat app to a space, the Chat app receives an ADDED\_TO\_SPACE interaction event that the Chat app handles to send a welcome message in the space.

The following table shows common user interactions, the type of interaction event that the Chat apps receive, and how Chat apps typically respond:

| User interaction | `eventType` | Typical response from a Chat app |
| --- | --- | --- |
| A user messages a Chat app. For example, @mentions the Chat app or uses a slash command. | `MESSAGE` | The Chat app responds based on the content of the message. For example, a Chat app replies to the slash command `/about` with a message that explains the tasks that the Chat app can do. |
| A user adds a Chat app to a space. | `ADDED_TO_SPACE` | The Chat app sends an [onboarding message](#reply-message) that explains what it does and how users in the space can interact with it. |
| A user removes a Chat app from a space. | `REMOVED_FROM_SPACE` | The Chat app removes any incoming notifications configured for the space (such as deleting a [webhook](https://developers.google.com/chat/how-tos/webhooks)) and clears up any internal storage. |
| A user clicks a button on a card from a Chat app message, dialog, or homepage. | `CARD_CLICKED` | The Chat app either processes and stores any data that the user submitted, or returns another card. |
| A user opens the [homepage](https://developers.google.com/workspace/chat/send-app-home-card-message) of the Chat app by clicking on the **Home** tab in a 1:1 message. | `APP_HOME` | The Chat app returns a static or interactive card from the homepage. |
| A user submits a form from the homepage of the Chat app. | `SUBMIT_FORM` | The Chat app either processes and stores any data that the user submitted, or returns another card. |
| A user invokes a command by using a quick command. | `APP_COMMAND` | The Chat app responds based on the command that was invoked. For example, a Chat app replies to the **About** command with a message that explains the tasks that the Chat app can do. |

To see all supported interaction events, see the [`EventType` reference documentation](https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType).

### Interaction events from dialogs

If your Chat app opens [dialogs](https://developers.google.com/workspace/chat/dialogs), the interaction event contains the following additional information that you can use to process a response:

- The `isDialogEvent` is set to `true`.
- The [`DialogEventType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/DialogEventType) clarifies whether the interaction triggers a dialog to open, submits information from a dialog, or closes a dialog.

The following table shows the common interactions with dialogs, the corresponding dialog event types, and a description of how Chat apps typically respond:

| User interaction with a dialog | Dialog event type | Typical response |
| --- | --- | --- |
| A user triggers a dialog request. For example, they use a slash command or click a button from a message. | `REQUEST_DIALOG` | The Chat app opens the dialog. |
| A user submits information in the dialog by clicking a button. | `SUBMIT_DIALOG` | The Chat app either navigates to another dialog or closes the dialog to complete the interaction. |
| A user exits or closes the dialog before submitting information. | `CANCEL_DIALOG` | Optionally, the Chat app can respond with a new message, or update the message or card from which the user opened the dialog. |

For more information, see [Open interactive dialogs](https://developers.google.com/workspace/chat/dialogs).

## Receive Chat app interaction events

This section describes how to receive and process interaction events for your Chat app.

### Configure your Chat app to receive interaction events

Not all Chat apps are interactive. For example, [incoming webhooks](https://developers.google.com/workspace/chat/quickstart/webhooks) can only send outgoing messages and can't respond to users. If you're building an interactive Chat app, you must choose an endpoint that lets your Chat app receive, process, and respond to interaction events. To learn more about designing your Chat app, see [Chat apps implementation architectures](https://developers.google.com/workspace/chat/structure).

For each of the interactive features that you want to build, you must update your configuration in the Chat API so that Google Chat can send related interaction events to your Chat app:

1. In the Google Cloud console, go to the Chat API page and click the **Configuration** page:
	[Go to Chat API Configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under **Interactive features**, review the settings and update based on the features that you want to build:
	| Field | Description |
	| --- | --- |
	| Functionality | Required. A set of fields that determine how Chat app can interact with users. By default, users can find and message the Chat app directly in Google Chat.   - **Join spaces and group conversations**: Users can add the Chat app to spaces and group conversations. |
	| Connection settings | Required. The endpoint for the Chat app, which is one of the following:   - **HTTP endpoint URL**: An HTTPS endpoint that hosts the Chat app implementation. - **Apps Script**: A deployment ID for an Apps Script project that implements a Chat app. - **Cloud Pub/Sub topic name**: A Pub/Sub topic that the Chat app subscribes to as an endpoint. - **Dialogflow**: Registers the Chat app with a Dialogflow integration. For more information, see [Build a DialogflowGoogle Chat app that understands natural language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language). |
	| Commands | Optional. Slash commands and quick commands for the Chat app. Commands let users request an action or use a specific feature of your Chat app. For more information, see [Respond to Google Chat app commands](https://developers.google.com/workspace/chat/commands). |
	| Link previews | Optional. URL patterns that the Chat app recognizes and provides additional content for when users send links. For more information, see [Preview links](https://developers.google.com/workspace/chat/preview-links). |
	| Visibility | Optional. Up to five individuals, or one or more Google Groups that can view and install your Chat app. Use this field to test your Chat app, or to share the Chat app with your team. For more information, see [Test interactive features](https://developers.google.com/workspace/chat/test-interactive-features). |
3. Click **Save**. When you save the Chat app configuration, your Chat app is available to the specified users in your Google Workspace organization.

Your Chat app is now configured to receive interaction events from Google Chat.

### Handle HTTP call retries to your service

If an HTTPS request to your service fails (such as a timeout, temporary network failure, or non-2xx HTTPS status code), Google Chat might retry delivery a few times within a few minutes (but this isn't guaranteed). As a result, a Chat app might receive the same message a few times in certain situations. If the request completes successfully but returns an invalid message payload, Google Chat doesn't retry the request.

## Process or respond to interaction events

This section explains how Google Chat apps can process and respond to interaction events.

After your Chat app receives an interaction event from Google Chat, they can respond in many ways. In many cases, interactive Chat apps reply to the user with a message. Google Chat app can also look up some information from a data source, record the interaction event information, or just about anything else. This processing behavior is essentially what defines the Google Chat app.

To respond synchronously, a Chat app must respond within 30 seconds, and the response must be posted in the space where the interaction occurred. Otherwise, the Chat app can respond asynchronously.

For each interaction event, Chat apps receive a *request body*, which is the JSON payload that represents the event. You can use the information to process a response. For examples of event payloads, see [Types of Chat app interaction events](https://developers.google.com/workspace/chat/events).

The following diagram demonstrates how Google Chat app typically process or respond to different types of interaction events:

![Architecture of how Google Chat apps process interaction events.](https://developers.google.com/static/workspace/chat/images/bot-room-seq.svg)

### Respond in real time

Interaction events let Chat apps respond in real time, or *synchronously*. Synchronous responses don't require [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).

To respond in real time, the Chat app must return a [`Message`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages) object. To [reply with a message](#reply-message) in the space, the `Message` object can contain `text`, `cardsV2`, and `accessoryWidgets` objects. To use with other types of responses, see the following guides:

- [Open interactive dialogs](https://developers.google.com/workspace/chat/dialogs)
- [Preview links](https://developers.google.com/workspace/chat/preview-links)
- [Process information submitted by users](https://developers.google.com/workspace/chat/read-form-data)

#### Reply with a message

In this example, your Chat app creates and sends a text message whenever it's added to a space. To learn about best practices for onboarding users, see [Introduce users to your Chat app](https://developers.google.com/workspace/chat/interactivity#introduce-users).

To send a text message when a user adds your Chat app to a space, your Chat app responds to an `ADDED_TO_SPACE` [interaction event](https://developers.google.com/workspace/chat/receive-respond-interactions). To respond to `ADDED_TO_SPACE` interaction events with a text message, use the following code:

### Node.js

```
/**
 * Sends an onboarding message when the Chat app is added to a space.
 *
 * @param {Object} req The event object from Chat API.
 * @param {Object} res The response object from the Chat app.
 */
exports.cymbalApp = function cymbalApp(req, res) {
  // Send an onboarding message when added to a Chat space
  if (req.body.type === 'ADDED_TO_SPACE') {
    res.json({
      'text': 'Hi, Cymbal at your service. I help you manage your calendar
      from Google Chat. Take a look at your schedule today by typing
      \`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`. To
      learn what else I can do, type \`/help\`.'
    });
  }
};
```

### Python

```
from flask import Flask, request, json
app = Flask(__name__)

@app.route('/', methods=['POST'])
def cymbal_app():
  """Sends an onboarding message when the Chat app is added to a space.

  Returns:
    Mapping[str, Any]: The response object from the Chat app.
  """
  event = request.get_json()
  if event['type'] == 'ADDED_TO_SPACE':
    return json.jsonify({
      'text': 'Hi, Cymbal at your service. I help you manage your calendar' +
      'from Google Chat. Take a look at your schedule today by typing' +
      '\`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`. To' +
      'learn what else I can do, type \`/help\`.'
    })
  return json.jsonify({})
```

### Java

```
@SpringBootApplication
@RestController
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }

  /*
   * Sends an onboarding message when the Chat app is added to a space.
   *
   * @return The response object from the Chat app.
   */
  @PostMapping("/")
  @ResponseBody
  public Message onEvent(@RequestBody JsonNode event) {
    switch (event.get("type").asText()) {
      case "ADDED_TO_SPACE":
        return new Message().setText(
          "Hi, Cymbal at your service. I help you manage your calendar" +
          "from Google Chat. Take a look at your schedule today by typing" +
          "\`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`." +
          "To learn what else I can do, type \`/help\`.");
      default:
        return new Message();
    }
  }
}
```

### Apps Script

```
/**
 * Sends an onboarding message when the Chat app is added to a space.
 *
 * @param {Object} event The event object from Chat API.
 * @return {Object} Response from the Chat app.
 */
function onAddToSpace(event) {
  return {
    'text': 'Hi, Cymbal at your service. I help you manage your calendar
    from Google Chat. Take a look at your schedule today by typing
    \`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`. To learn
    what else I can do, type \`/help\`.'
  }
}
```

The code sample returns the following text message:

![Example onboarding message.](https://developers.google.com/static/workspace/chat/images/design-principles-onboarding-example-scheduler.png)

### Respond asynchronously

Sometimes Chat apps must respond to an interaction event after 30 seconds or perform tasks outside of the space where the interaction event was generated. For example, a Chat app might need to respond to the user after completing a long-running task. In this case, Chat apps can respond asynchronously by calling the Google Chat API.

To create a message using the Chat API, see [Create a message](https://developers.google.com/workspace/chat/create-messages). For guides on using additional Chat API methods, see the [Chat API overview](https://developers.google.com/workspace/chat/overview).

## Related topics

- [Send a message](https://developers.google.com/workspace/chat/create-messages)
- [Open interactive dialogs](https://developers.google.com/workspace/chat/dialogs)
- [Preview links](https://developers.google.com/workspace/chat/preview-links)
- [Read form data input by users on cards](https://developers.google.com/workspace/chat/read-form-data)
- [Respond to commands](https://developers.google.com/workspace/chat/commands)
- [Build a homepage for a Chat app](https://developers.google.com/workspace/chat/send-app-home-card-message)
- [Verify requests from Chat](https://developers.google.com/workspace/chat/verify-requests-from-chat)
- [Test interactive features for Google Chat apps](https://developers.google.com/workspace/chat/test-interactive-features)
