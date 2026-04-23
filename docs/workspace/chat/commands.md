---
source: https://developers.google.com/workspace/chat/commands
root: workspace
fetched_at: 2026-04-23T15:25:19.499Z
---

# Respond to Google Chat app commands

This page explains how to set up and respond to commands as a Google Chat app.

Commands help users discover and use key features of a Chat app. Only Chat apps can see the content of a command. For example, if a user sends a message with a slash command, the message is only visible to the user and the Chat app.

To decide whether you should build commands, and to understand how to design user interactions, see [Define all user journeys](./journeys.md).

## Types of Chat app commands

You can build Chat app commands as slash commands, quick commands, or message actions. To use each type of command, users can do the following:
1. **Slash commands:** Users can select a slash command from the menu or type a slash (`/`) and then a predefined text, such as `/about`. Chat apps typically require argument text for the slash command.
	Create a slash command if your Chat app requires additional input from the user. For example, you can create a slash command called `/search` that runs after the user enters a phrase to search for, like `/search receipts`.
2. **Quick commands:** Users use commands by opening the menu from the reply area of a Chat message. To use a command, they click **Add** ![](https://developers.google.com/static/workspace/images/icon-add-circle.svg) and select a command from the menu.
	Create a quick command if your Chat app can respond to the user immediately, without waiting for additional input. For example, you can create a quick command called **Random image** that responds immediately with an image.
3. **Message actions:** [( Developer Preview)](../preview.md) Users use message actions by hovering over a message and clicking on the three-dot menu. To use a command, they open the three-dot menu and select a command from the menu.
	Create a message action if your Chat app can perform actions based on the context of a message.

The following images show how users discover the menu for slash and quick commands, and message actions:

![A user discovers a menu of slash commands and quick commands.](https://developers.google.com/static/workspace/chat/images/app-command-discovery.png)

Users discover a menu of slash commands and quick commands.

![A user discovers a message context menu containing a message action.](https://developers.google.com/static/workspace/chat/images/message-action-discovery.png)

Users discover a message context menu containing a "Remind me" message action.

## Prerequisites

### Node.js

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app using an HTTP service, complete this [quickstart](./quickstart/gcf-app.md).

### Apps Script

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app in Apps Script, complete this [quickstart](./quickstart/apps-script-app.md).

### Python

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app using an HTTP service, complete this [quickstart](./quickstart/gcf-app.md).

### Java

A Google Chat app that receives and responds to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app using an HTTP service, complete this [quickstart](./quickstart/gcf-app.md).

## Set up the command

This section explains how to complete the following steps to set up the command:

1. [Create a name and description](#name) for the command.
2. [Configure the command](#configure) in the Google Cloud console.

### Name and describe the command

The name of a command is what users type or select to invoke the Chat app. A short description also appears below the name, to prompt users further about how to use the command:

![Slash command name and description](https://developers.google.com/static/workspace/chat/images/slash-command-description.png)

The name and description for a slash command.

When choosing a name and description for your command, consider the following recommendations:

#### To name a command:

- Use short, descriptive, and actionable words or phrases to make the commands clear to the user. For example, instead of the name `Create a reminder`, use `Remind me`.
- Consider using a unique or common name for your command. If your command describes a typical interaction or feature, you can use a common name that users recognize and expect, such as `Settings` or `Feedback`. Otherwise, try to use unique command names, because if your command name is the same for other Chat apps, the user must filter through similar commands to find and use yours.

#### To describe a command:

- Keep the description short and clear so that users know what to expect when they use the command.
- Let users know if there are any formatting requirements for the command. For example, if you create a slash command that requires argument text, set the description to something like `Remind me to do [something] at [time]`.
- Let users know if the Chat app replies to everyone in the space, or privately to the user who invokes the command. For example, for the quick command `About`, you could describe it as `Learn about this app (Only visible to you)`.

### Configure the command in the Google Cloud console

To create a slash command, quick command, or message action, you specify information about the command or action in your Chat app's configuration for the Google Chat API.

To configure a command in the Google Chat API, complete the following steps:

1. In the Google Cloud console, click Menu \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API**
	[Go to the Google Chat API page](https://console.cloud.google.com/apis/api/chat.googleapis.com)
2. Click **Configuration**.
3. Under **Commands**, click **Add a command**.
4. Enter a command ID, description, command type, and name for the command:
	- **Command ID:** a number from 1 to 1000 that your Chat app uses to recognize the command and return a response.
		- **Description:** the text that describes what the command does. Descriptions can be up to 50 characters and can include special characters.
		- **Command type:** select either **Quick command**, **Slash command**, or **Message action**.
		- Specify a name for the command:
		- **Quick command name:** The display name that users select from the menu to invoke the command. Can be up to 50 characters and include special characters. For example, `Remind me`.
				- **Slash command name:** The text that users type to invoke the command in a message. Must start with a slash, contain only text, and can be up to 50 characters. For example, `/remindMe`.
				- **Message action name:** [( Developer Preview)](../preview.md) The display name that users select from the menu to invoke the message action. Can be up to 50 characters and include special characters. For example, `Remind me`.
5. Optional: **Loading notification message**: [( Developer Preview)](../preview.md) A toast notification message to display to the user while the message action is executing. Only available for message actions that don't open dialogs.
6. Optional: If you want your Chat app to respond to the command with a [dialog](./dialogs.md), select the **Open a dialog** checkbox.
7. Click **Save**.

The command is now configured for the Chat app.

## Respond to a command

When users use a command, your Chat app receives an [interaction event](./receive-respond-interactions.md#events-work). The event payload contains metadata with details about the command that was invoked (including the command ID and the command type), so that you can return an appropriate response.

![Private message for the
  Cymbal Labs Chat app. The message says that the
  Chat app was created by Cymbal Labs and shares a link
  to documentation and a link to contact the support team.](https://developers.google.com/static/workspace/chat/images/private-message.png)

A Chat app responds privately to the slash command /help to explain how to get support.

To respond to each type of command, you must handle different event types and metadata objects in the event payload:

| Command type | Event type | Command metadata |
| --- | --- | --- |
| Slash command | `MESSAGE` | [`message.slashCommand`](./api/reference/rest/v1/spaces.messages.md#slashcommand) or [`message.annotation.slashCommand`](./api/reference/rest/v1/spaces.messages.md#Message.Annotation) |
| Quick command | `APP_COMMAND` | `appCommandMetadata` |
| Message action | `APP_COMMAND` | `appCommandMetadata` |

To learn how to respond to a command with a message, see the following sections.

### Respond to a slash command

The following code shows an example of a Chat app that replies to the slash command `/about`. The Chat app handles `MESSAGE` interaction events, detects whether the interaction event contains the matching command ID, and returns a private message:

### Node.js

```
/**
 * Handles slash and quick commands.
 *
 * @param {Object} event - The Google Chat event.
 * @param {Object} res - The HTTP response object.
 */
function handleAppCommands(event, res) {
  const {appCommandId, appCommandType} = event.appCommandMetadata;

  switch (appCommandId) {
    case ABOUT_COMMAND_ID:
      return res.send({
        privateMessageViewer: event.user,
        text: 'The Avatar app replies to Google Chat messages.'
      });
    case HELP_COMMAND_ID:
      return res.send({
        privateMessageViewer: event.user,
        text: 'The Avatar app replies to Google Chat messages.'
      });
  }
}
```

### Apps Script

```
// Checks for the presence of a slash command in the message.
if (event.message.slashCommand) {
  // Executes the slash command logic based on its ID.
  // Slash command IDs are set in the Google Chat API configuration.
  switch (event.message.slashCommand.commandId) {
    case ABOUT_COMMAND_ID:
      return {
        privateMessageViewer: event.user,
        text: 'The Avatar app replies to Google Chat messages.'
      };
  }
}
```

### Python

```
def handle_app_commands(event: Mapping[str, Any]) -> Mapping[str, Any]:
    """Handles slash and quick commands.

    Args:
        Mapping[str, Any] event: The Google Chat event.

    Returns:
        Mapping[str, Any]: the response
    """
    app_command_id = event["appCommandMetadata"]["appCommandId"]

    if app_command_id == ABOUT_COMMAND_ID:
        return {
            "privateMessageViewer": event["user"],
            "text": "The Avatar app replies to Google Chat messages.",
        }
    elif app_command_id == HELP_COMMAND_ID:
        return {
            "privateMessageViewer": event["user"],
            "text": "The Avatar app replies to Google Chat messages.",
        }
    return {}
```

### Java

```
/**
 * Handles slash and quick commands.
 *
 * @param event    The Google Chat event.
 * @param response The HTTP response object.
 */
private void handleAppCommands(JsonObject event, HttpResponse response) throws Exception {
  int appCommandId = event.getAsJsonObject("appCommandMetadata").get("appCommandId").getAsInt();

  switch (appCommandId) {
    case ABOUT_COMMAND_ID:
      Message aboutMessage = new Message();
      aboutMessage.setText("The Avatar app replies to Google Chat messages.");
      aboutMessage.setPrivateMessageViewer(new User()
          .setName(event.getAsJsonObject("user").get("name").getAsString()));
      response.getWriter().write(gson.toJson(aboutMessage));
      return;
    case HELP_COMMAND_ID:
      Message helpMessage = new Message();
      helpMessage.setText("The Avatar app replies to Google Chat messages.");
      helpMessage.setPrivateMessageViewer(new User()
          .setName(event.getAsJsonObject("user").get("name").getAsString()));
      response.getWriter().write(gson.toJson(helpMessage));
      return;
  }
}
```

Replace `ABOUT_COMMAND_ID` with the command ID that you specified when you configured the command in the Google Cloud console.

### Respond to a quick command

The following code shows an example of a Chat app that replies to the quick command **Help**. The Chat app handles `APP_COMMAND` interaction events, detects whether the interaction event contains the matching command ID, and returns a private message:

### Node.js

```
/**
 * Handles slash and quick commands.
 *
 * @param {Object} event - The Google Chat event.
 * @param {Object} res - The HTTP response object.
 */
function handleAppCommands(event, res) {
  const {appCommandId, appCommandType} = event.appCommandMetadata;

  switch (appCommandId) {
    case ABOUT_COMMAND_ID:
      return res.send({
        privateMessageViewer: event.user,
        text: 'The Avatar app replies to Google Chat messages.'
      });
    case HELP_COMMAND_ID:
      return res.send({
        privateMessageViewer: event.user,
        text: 'The Avatar app replies to Google Chat messages.'
      });
  }
}
```

### Apps Script

```
/**
 * Handles the APP_COMMAND event type. This function is triggered when a user
 * interacts with a quick command within the Google Chat app.  It responds
 * based on the command ID.
 *
 * @param {Object} event The event object from Google Chat, containing details
 *     about the app command interaction.  It includes information like the
 *     command ID and the user who triggered it.
 */
function onAppCommand(event) {
  // Executes the quick command logic based on its ID.
  // Command IDs are set in the Google Chat API configuration.
  switch (event.appCommandMetadata.appCommandId) {
    case HELP_COMMAND_ID:
      return {
        privateMessageViewer: event.user,
        text: 'The Avatar app replies to Google Chat messages.'
      };
  }
}
```

### Python

```
def handle_app_commands(event: Mapping[str, Any]) -> Mapping[str, Any]:
    """Handles slash and quick commands.

    Args:
        Mapping[str, Any] event: The Google Chat event.

    Returns:
        Mapping[str, Any]: the response
    """
    app_command_id = event["appCommandMetadata"]["appCommandId"]

    if app_command_id == ABOUT_COMMAND_ID:
        return {
            "privateMessageViewer": event["user"],
            "text": "The Avatar app replies to Google Chat messages.",
        }
    elif app_command_id == HELP_COMMAND_ID:
        return {
            "privateMessageViewer": event["user"],
            "text": "The Avatar app replies to Google Chat messages.",
        }
    return {}
```

### Java

```
/**
 * Handles slash and quick commands.
 *
 * @param event    The Google Chat event.
 * @param response The HTTP response object.
 */
private void handleAppCommands(JsonObject event, HttpResponse response) throws Exception {
  int appCommandId = event.getAsJsonObject("appCommandMetadata").get("appCommandId").getAsInt();

  switch (appCommandId) {
    case ABOUT_COMMAND_ID:
      Message aboutMessage = new Message();
      aboutMessage.setText("The Avatar app replies to Google Chat messages.");
      aboutMessage.setPrivateMessageViewer(new User()
          .setName(event.getAsJsonObject("user").get("name").getAsString()));
      response.getWriter().write(gson.toJson(aboutMessage));
      return;
    case HELP_COMMAND_ID:
      Message helpMessage = new Message();
      helpMessage.setText("The Avatar app replies to Google Chat messages.");
      helpMessage.setPrivateMessageViewer(new User()
          .setName(event.getAsJsonObject("user").get("name").getAsString()));
      response.getWriter().write(gson.toJson(helpMessage));
      return;
  }
}
```

Replace `HELP_COMMAND_ID` with the command ID that you specified when you configured the command in the Google Cloud console.

### Respond to a message action

The following code shows an example of a Chat app that replies to the message action **Remind me**. The Chat app handles `APP_COMMAND` interaction events, detects whether the interaction event contains the matching command ID, and returns a private message:

### Node.js

```
/**
 * Responds to an APP_COMMAND interaction event from Google Chat.
 *
 * @param {Object} event The interaction event from Google Chat.
 * @param {Object} res The HTTP response object.
 * @return {Object} The JSON response message with a confirmation.
 */
function handleAppCommand(event, res) {
  // Collect the command ID and type from the event metadata.
  const {appCommandId, appCommandType} = event.appCommandMetadata;

  // Use appCommandType to detect message actions.
  if (appCommandType === 'MESSAGE_ACTION' &&
      appCommandId === REMIND_ME_COMMAND_ID) {

    // Message actions can access the context of the message they were
    // invoked on, such as the text or sender of that message.
    const messageText = event.message.text;

    // Return a response that includes details from the original message.
    return res.send({
      text: \`Setting a reminder for this message: "${messageText}"\`
    });
  }
}
```

### Apps Script

```
/**
 * Responds to an APP_COMMAND interaction event in Google Chat.
 *
 * @param {Object} event The interaction event from Google Chat.
 * @return {Object} The JSON response message with a confirmation.
 */
function onAppCommand(event) {
  // Collect the command ID and type from the event metadata.
  const {appCommandId, appCommandType} = event.appCommandMetadata;

  if (appCommandType === 'MESSAGE_ACTION' &&
      appCommandId === REMIND_ME_COMMAND_ID) {

    // Message actions can access the context of the message they were
    // invoked on, such as the text or sender of that message.
    const messageText = event.message.text;

    // Return a response that includes details from the original message.
    return { "text": "Setting a reminder for message: " + messageText };
  }
}
```

### Python

```
def handle_app_command(event):
    """Responds to an APP_COMMAND interaction event from Google Chat.

    Args:
        event (dict): The interaction event from Google Chat.

    Returns:
        dict: The JSON response message with a confirmation.
    """
    # Collect the command ID and type from the event metadata.
    metadata = event.get('appCommandMetadata', {})
    if metadata.get('appCommandType') == 'MESSAGE_ACTION' and \
       metadata.get('appCommandId') == REMIND_ME_COMMAND_ID:

        # Message actions can access the context of the message they were
        # invoked on, such as the text or sender of that message.
        message_text = event.get('message', {}).get('text')

        # Return a response that includes details from the original message.
        return {
            "text": f'Setting a reminder for message: "{message_text}"'
        }
```

### Java

```
/**
 * Responds to an APP_COMMAND interaction event from Google Chat.
 *
 * @param event The interaction event from Google Chat.
 * @param response The HTTP response object.
 */
void handleAppCommand(JsonObject event, HttpResponse response) throws Exception {
  // Collect the command ID and type from the event metadata.
  JsonObject metadata = event.getAsJsonObject("appCommandMetadata");
  String appCommandType = metadata.get("appCommandType").getAsString();

  if (appCommandType.equals("MESSAGE_ACTION")) {
    int commandId = metadata.get("appCommandId").getAsInt();
    if (commandId == REMIND_ME_COMMAND_ID) {
      // Message actions can access the context of the message they were
      // invoked on, such as the text or sender of that message.
      String messageText = event.getAsJsonObject("message").get("text").getAsString();

      // Return a response that includes details from the original message.
      JsonObject responseMessage = new JsonObject();
      responseMessage.addProperty("text", "Setting a reminder for message: " + messageText);
      response.getWriter().write(responseMessage.toString());
    }
  }
}
```

Replace `REMIND_ME_COMMAND_ID` with the command ID that you specified when you configured the command in the Google Cloud console.

## Test the command

To test the command and code, see [Test interactive features for Google Chat apps](./test-interactive-features.md).

To learn how to test and use the command in the Chat UI, see [Use apps in Google Chat](https://support.google.com/chat/answer/7655820) in the Google Chat Help documentation.

## Related topics

- [View Chat app samples](./samples.md) that use commands
- [Send a message](./create-messages.md)
- [Open interactive dialogs](./dialogs.md)
