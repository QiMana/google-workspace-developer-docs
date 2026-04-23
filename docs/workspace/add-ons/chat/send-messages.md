---
source: https://developers.google.com/workspace/add-ons/chat/send-messages
root: workspace
fetched_at: 2026-04-23T15:22:40.455Z
---

# Send Google Chat messages

## Page Summary

- This guide explains how Google Chat apps can send and update messages in response to user interactions like slash commands, button clicks, or added to space triggers.
- Google Chat apps can include text, cards, and widgets in their messages and can reply using actions or the Google Chat API.
- You should use the Google Chat API for tasks such as scheduled messages, responses exceeding 30 seconds, and messaging outside the interaction space.
- To build a Google Chat app, you'll need Node.js or Apps Script and a Google Workspace add-on extending Google Chat.
- This feature is available as part of the Google Workspace Developer Preview Program for early access.

This page explains how Google Chat apps can send messages to reply to user interactions.

- ![Contact form from slash command.](https://developers.google.com/static/workspace/add-ons/images/tutorial-contact-app-about.png)
	Figure 1. A Chat app responds to a slash command with a text message and button.
- ![Contact form in a dialog.](https://developers.google.com/static/workspace/add-ons/images/tutorial-contact-app-dialog-form.png)
	**Figure 2.** A Chat app opens a dialog where users can input information.
- ![Card message with form input widgets.](https://developers.google.com/static/workspace/add-ons/images/tutorial-contact-app-card-form.png)
	**Figure 5.** A Chat app sends a message with text and an interactive card.

## Prerequisites

### HTTP

A Google Workspace add-on that extends Google Chat. To build one, complete the [HTTP quickstart](./quickstart-http.md).

### Apps Script

A Google Workspace add-on that extends Google Chat. To build one, complete the [Apps Script quickstart](./quickstart-apps-script.md).

## Design the message

Chat apps can include any of the following in a message:

- Text that contains hyperlinks, @mentions, and emoji.
- One or more cards, which can appear in a message or open in a new window as a dialog.
- One or more accessory widgets, which are buttons that appear after any text or cards in a message.

To learn about designing messages, see the following Google Chat API documentation:

- [Messaging overview](../../chat/messages-overview.md)
- [Format messages](../../chat/format-messages.md)
- [Build cards for Google Chat apps](../../chat/design-components-card-dialog.md)
- [Add text and images to cards](../../chat/add-text-image-card-dialog.md)
- [Add interactive UI elements to cards](../../chat/design-interactive-card-dialog.md)

## Reply with a message

Chat apps can respond with a message to any of the following triggers or interactions:

- [**Message** triggers](./build.md#TRIGGER.MESSAGE), such as when users @mention or direct message a Chat app.
- [**Added to space** triggers](./build.md#TRIGGER.ADDED_TO_SPACE), such as when users install the Chat app from the Google Workspace Marketplace or add it to a space.
- Button clicks from cards in messages or dialogs. For example, when users input information and click submit.

Otherwise, Chat apps can send messages proactively by [calling the Google Chat API](#message-api).

To reply with a message, return the action `DataActions` with a [`CreateMessageAction`](../reference/rpc/apps.extensions.markup.md#apps.extensions.markup.ChatDataActionMarkup.CreateMessageAction) object:

```
{ "hostAppDataAction": { "chatDataAction": { "createMessageAction": {
  "message": MESSAGE
}}}
```

Replace MESSAGE with a [`Message`](../../chat/api/reference/rest/v1/spaces.messages.md) resource from the Chat API. To learn more about how actions work, see [Chat actions](./build.md#actions).

In the following example, a Chat app creates and sends a text message whenever it's added to a space. To send a text message when a user adds your Chat app to a space, your Chat app responds to the **Added to space** trigger by returning the action `DataActions`:

### Node.js

```
/**
 * Sends an onboarding message when the Chat app is added to a space.
 *
 * @param {Object} req The request object from Google Workspace add-on.
 * @param {Object} res The response object from the Chat app.
 */
exports.cymbalApp = function cymbalApp(req, res) {
  const chatEvent = req.body.chat;
  // Send an onboarding message when added to a Chat space
  if (chatEvent.addedToSpacePayload) {
    res.json({ hostAppDataAction: { chatDataAction: { createMessageAction: { message: {
      text: 'Hi, Cymbal at your service. I help you manage your calendar' +
        'from Google Chat. Take a look at your schedule today by typing' +
        '\`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`. ' +
        'To learn what else I can do, type \`/help\`.'
    }}}}});
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
  chat_event = request.get_json()["chat"]
  if "addedToSpacePayload" in chat_event:
    return json.jsonify({ "hostAppDataAction": { "chatDataAction": {
      "createMessageAction": { "message": {
        "text": 'Hi, Cymbal at your service. I help you manage your calendar' +
        'from Google Chat. Take a look at your schedule today by typing' +
        '\`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`. ' +
        'To learn what else I can do, type \`/help\`.'
      }}
    }}})
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
  public GenericJson onEvent(@RequestBody JsonNode event) throws Exception {
    JsonNode chatEvent = event.at("/chat");
    if(!chatEvent.at("/addedToSpacePayload").isEmpty()) {
      return new GenericJson() { {
        put("hostAppDataAction", new GenericJson() { {
          put("chatDataAction", new GenericJson() { {
            put("createMessageAction", new GenericJson() { {
              put("message", new Message().setText(
                "Hi, Cymbal at your service. I help you manage your calendar" +
                "from Google Chat. Take a look at your schedule today by typing" +
                "\`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`. " +
                "To learn what else I can do, type \`/help\`."
              ));
            } });
          } });
        } });
      } };
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
function onAddedToSpace(event) {
  return { hostAppDataAction: { chatDataAction: { createMessageAction: { message: {
    text: 'Hi, Cymbal at your service. I help you manage your calendar' +
          'from Google Chat. Take a look at your schedule today by typing' +
          '\`/checkCalendar\`, or schedule a meeting with \`/scheduleMeeting\`. ' +
          'To learn what else I can do, type \`/help\`.'
  }}}}};
}
```

The code sample returns the following text message:

![Example onboarding message.](https://developers.google.com/static/workspace/add-ons/images/design-principles-onboarding-example-scheduler.png)

For additional examples of how to respond with a message, see the following guides:

- [Respond to quick commands](./commands.md)
- [Respond to slash commands](./commands.md)
- [Open interactive dialogs](./dialogs.md)
- [Collect information from Google Chat users](./collect-information.md)

## Update a message

Chat apps can also update messages they send. For example, to update a message after a user has submitted a dialog or clicked a button in a message.

To update a Chat app message, return the action `DataActions` with a [`UpdateMessageAction`](../reference/rpc/apps.extensions.markup.md#updatemessageaction), as shown in the following example:

```
{ "hostAppDataAction": { "chatDataAction": { "updateMessageAction": {
  "message": MESSAGE
}}}}
```

Replace MESSAGE with a [`Message`](../../chat/api/reference/rest/v1/spaces.messages.md) resource from the Chat API.

To learn more about how actions work, see [Chat actions](./build.md#actions).

Chat apps can also update a message from a user to return a preview of a link they sent. For details, see [Preview links in Google Chat messages](./preview-links.md).

## Reply to interactions or send proactive messages using the Google Chat API

Instead of returning an add-on action, Chat apps might need to use the Google Chat API respond to an interaction. For example, Chat apps must call the Google Chat API to do any of the following:

- Send messages on a schedule, or about changes to external resources. For example, notifications about a new issue or case.
- Reply more than 30 seconds after the interaction. For example, to respond with a message after completing a long-running task.
- Send a message outside of the space where the interaction took place.
- Send a message on behalf of a Chat user.

To send a message using the Chat API, you must set up authentication and call the `create()` method on the `Message` resource. For steps, see [Send a message using the Google Chat API](../../chat/create-messages.md).

## Related topics

- [Build Google Chat interfaces](./build.md)
- [Respond to quick commands](./commands.md)
- [Respond to slash commands](./commands.md)
- [Open interactive dialogs](./dialogs.md)
- [Collect information from Google Chat users](./collect-information.md)
- [Preview links in Google Chat messages](./preview-links.md)
- [Send a message using the Google Chat API](../../chat/create-messages.md)
