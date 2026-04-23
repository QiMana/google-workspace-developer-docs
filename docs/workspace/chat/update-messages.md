---
source: https://developers.google.com/workspace/chat/update-messages
root: workspace
fetched_at: 2026-04-23T15:25:38.001Z
---

# Update a message

## Page Summary

- This guide details how to update existing Google Chat messages (text and cards) using the Google Chat API's `update()` method.
- Two update methods are outlined: one for updating messages on behalf of a user and another for updating as the Chat app itself, each requiring specific authentication and scopes.
- Both methods use the `UpdateMessage()` function but differ in the request structure and available functionalities (user updates are limited to text).
- Comprehensive code samples are provided in multiple languages (Node.js, Python, Java, Apps Script) to illustrate message updating with user and app credentials.
- Before updating, ensure you have a Google Workspace account, a configured Google Cloud Project, installed client libraries, and proper credentials and scopes set up.

This guide explains how to use the [`update`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.UpdateMessage) method on the `Message` resource of the Google Chat API to update a text or card message in a space. Update a message to change message attributes, such as what it says, or the content of a card. You can also prepend a text message to a card message, or append a card to a text message.

In the Chat API, a Chat message is represented by the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). While Chat users can only send messages that contain text, Chat apps can use many other messaging features, including displaying static or interactive user interfaces, collecting information from users, and delivering messages privately. To learn more about messaging features available for the Chat API, see the [Google Chat messages overview](https://developers.google.com/workspace/chat/messages-overview).

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=nodejs#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=python#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

### Java

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Java [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=java#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](https://developers.google.com/apps-script/guides/projects), and turn on the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat).
		- In this guide, you must use either [user or app authentication](https://developers.google.com/workspace/chat/authenticate-authorize). To authenticate as the Chat app, create service account credentials. For steps, see [Authenticate and authorize as a Google Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

## Update a message on behalf of a user

With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), only the text of a message can be updated.

To update a message with user authentication, pass the following in your request:

- Specify the `chat.messages` authorization scope.
- Call the [`UpdateMessage`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.UpdateMessage) method.
- Pass `message` as an instance of [`Message`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message) with the following:
	- The `name` field set to the message to update, which includes a space ID and a message ID.
		- The `text` field set with the new text.
- Pass `updateMask` with the value `text`.

If the updated message is a [card message](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards), then the text prepends to the cards (which continue to display).

Here's how to update a message, or prepend a text message to a card message with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user):

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.messages',
];

// This sample shows how to update a message with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    message: {
      // Replace SPACE_NAME and MESSAGE_NAME here
      name: 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
      text: 'Updated with user credential!',
    },
    // The field paths to update. Separate multiple values with commas or use \`*\`
    // to update all field paths.
    updateMask: {
      // The field paths to update.
      paths: ['text'],
    },
  };

  // Make the request
  const response = await chatClient.updateMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.messages"]

# This sample shows how to update a message with user credential
def update_message_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.UpdateMessageRequest(
        message = {
            # Replace SPACE_NAME and MESSAGE_NAME here
            "name": "spaces/SPACE_NAME/messages/MESSAGE_NAME",
            "text": "Updated with user credential!"
        },
        # The field paths to update. Separate multiple values with commas or use
        # \`*\` to update all field paths.
        update_mask = "text"
    )

    # Make the request
    response = client.update_message(request)

    # Handle the response
    print(response)

update_message_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.UpdateMessageRequest;
import com.google.chat.v1.Message;
import com.google.protobuf.FieldMask;

// This sample shows how to update message with user credential.
public class UpdateMessageUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.messages";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      UpdateMessageRequest.Builder request = UpdateMessageRequest.newBuilder()
        .setMessage(Message.newBuilder()
          // replace SPACE_NAME and MESSAGE_NAME here
          .setName("spaces/SPACE_NAME/messages/MESSAGE_NAME")
          .setText("Updated with user credential!"))
        .setUpdateMask(FieldMask.newBuilder()
          // The field paths to update.
          .addPaths("text"));
      Message response = chatServiceClient.updateMessage(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to update a message with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.messages'
 * referenced in the manifest file (appsscript.json).
 */
function updateMessageUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
  const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME";
  const message = {
    text: "Updated with user credential!",
  };
  // The field paths to update. Separate multiple values with commas or use
  // \`*\` to update all field paths.
  const updateMask = "text";

  // Make the request
  const response = Chat.Spaces.Messages.patch(message, name, {
    updateMask: updateMask,
  });

  // Handle the response
  console.log(response);
}
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.

The Chat API returns an instance of [`Message`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message) that details the message that's updated.

## Update a message as the Chat app

With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), both the text and the cards of a message can be updated.

To update a message with app authentication, pass the following in your request:

- Specify the `chat.bot` authorization scope.
- Call the [`UpdateMessage`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.UpdateMessage) method.
- Pass `message` as an instance of [`Message`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message) with the following:
	- The `name` field set to the message to update, which includes a space ID and a message ID.
		- The `text` field set with the new text if it needs to be updated.
		- The `cardsV2` field set with the new cards if they need to be updated.
- Pass `updateMask` with the list of fields to updates such as `text`, and `cardsV2`.

If the updated message is a [card message](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) and text is updated, then the updated text prepends to the cards (which continue to display). If the updated message is a [text message](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages) and cards are updated, then the updated cards append to the text (which continues to display).

Here's how to update the text and cards of a message with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app):

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to update a message with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    message: {
      // Replace SPACE_NAME and MESSAGE_NAME here
      name: 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
      text: 'Text updated with app credential!',
      cardsV2: [
        {
          card: {
            header: {
              title: 'Card updated with app credential!',
              imageUrl:
                'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg',
            },
          },
        },
      ],
    },
    // The field paths to update. Separate multiple values with commas or use \`*\`
    // to update all field paths.
    updateMask: {
      // The field paths to update.
      paths: ['text', 'cards_v2'],
    },
  };

  // Make the request
  const response = await chatClient.updateMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_app_credentials
from google.apps import chat_v1 as google_chat

# This sample shows how to update a message with app credential
def update_message_with_app_cred():
    # Create a client
    client = create_client_with_app_credentials()

    # Initialize request argument(s)
    request = google_chat.UpdateMessageRequest(
        message = {
            # Replace SPACE_NAME and MESSAGE_NAME here
            "name": "spaces/SPACE_NAME/messages/MESSAGE_NAME",
            "text": "Text updated with app credential!",
            "cards_v2" : [{ "card": { "header": {
                "title": 'Card updated with app credential!',
                "image_url": 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg'
            }}}]
        },
        # The field paths to update. Separate multiple values with commas or use
        # \`*\` to update all field paths.
        update_mask = "text,cardsV2"
    )

    # Make the request
    response = client.update_message(request)

    # Handle the response
    print(response)

update_message_with_app_cred()
```

### Java

```
import com.google.apps.card.v1.Card;
import com.google.apps.card.v1.Card.CardHeader;
import com.google.chat.v1.CardWithId;
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.UpdateMessageRequest;
import com.google.chat.v1.Message;
import com.google.protobuf.FieldMask;

// This sample shows how to update message with app credential.
public class UpdateMessageAppCred {

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithAppCredentials()) {
      UpdateMessageRequest.Builder request = UpdateMessageRequest.newBuilder()
        .setMessage(Message.newBuilder()
          // replace SPACE_NAME and MESSAGE_NAME here
          .setName("spaces/SPACE_NAME/messages/MESSAGE_NAME")
          .setText("Text updated with app credential!")
          .addCardsV2(CardWithId.newBuilder().setCard(Card.newBuilder()
            .setHeader(CardHeader.newBuilder()
              .setTitle("Card updated with app credential!")
              .setImageUrl("https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg")))))
        .setUpdateMask(FieldMask.newBuilder()
          // The field paths to update.
          .addAllPaths(List.of("text", "cards_v2")));
      Message response = chatServiceClient.updateMessage(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to update a message with app credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
 * used by service accounts.
 */
function updateMessageAppCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
  const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME";
  const message = {
    text: "Text updated with app credential!",
    cardsV2: [
      {
        card: {
          header: {
            title: "Card updated with app credential!",
            imageUrl:
              "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg",
          },
        },
      },
    ],
  };
  // The field paths to update. Separate multiple values with commas or use
  // \`*\` to update all field paths.
  const updateMask = "text,cardsV2";

  // Make the request
  const response = Chat.Spaces.Messages.patch(
    message,
    name,
    {
      updateMask: updateMask,
    },
    getHeaderWithAppCredentials(),
  );

  // Handle the response
  console.log(response);
}
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.

The Chat API returns an instance of [`Message`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message) that details the message that's updated.

## Update cards asynchronously

In [Developer Preview](https://developers.google.com/workspace/preview), you can asynchronously update the cards in a message using the [`replaceCards`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/replaceCards) method. This is useful for updating the content of a card without user interaction, such as refreshing a link preview or updating the status of a task. This method works for messages created by the app, including those created on behalf of a user.

For details, see [Create and update cards](https://developers.google.com/workspace/chat/create-update-interactive-cards#replace-message-cards).

## Related topics

- [Format a message](https://developers.google.com/workspace/chat/format-messages).
- [Delete a message](https://developers.google.com/workspace/chat/delete-messages).
- [Get details about a message](https://developers.google.com/workspace/chat/get-messages).
- [List messages in a space](https://developers.google.com/workspace/chat/list-messages).
- [Send a message](https://developers.google.com/workspace/chat/create-messages).
