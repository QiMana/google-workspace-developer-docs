---
source: https://developers.google.com/workspace/chat/create-update-interactive-cards
root: workspace
fetched_at: 2026-04-23T15:25:20.994Z
---

# Create and update interactive cards

This guide explains how to use the Google Chat API to create messages that contain interactive [cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) on behalf of users, and how to update those cards asynchronously.

Creating and updating cards is useful when you want to do the following:

- Post a card that represents a task or external resource on behalf of a user.
- Update the status of the card (for example, "In Progress" to "Completed") based on external events, without waiting for a user interaction.
- Refresh the content of a card on a user message, such as a link preview.

Outside the [Developer Preview Program](https://developers.google.com/workspace/preview), messages created with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) can only contain text.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Node.js [Google API Client Library](https://developers.google.com/workspace/chat/libraries?tab=nodejs#google-api-client-libraries).
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
		- Install the Python [Google API Client Library](https://developers.google.com/workspace/chat/libraries?tab=python#google-api-client-libraries).
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
		- Install the Java [Google API Client Library](https://developers.google.com/workspace/chat/libraries?tab=java#google-api-client-libraries).
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

### Create an API key to access Developer Preview features

To call a Developer Preview API method, you must use a non-public developer preview version of the API discovery document. To authenticate the request, you must pass an API key.

To create the API Key, open your app's Google Cloud project and do the following:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/apis/credentials)
2. Click **Create credentials** \> **API key**.
3. Your new API key is displayed.
	- Click Copy to copy your API key for use in your app's code. The API key can also be found in the "API Keys" section of your project's credentials.
		- To prevent unauthorized use, we recommend restricting where and for which APIs the API key can be used. For more details, see [Add API restrictions](https://cloud.google.com/docs/authentication/api-keys#adding-api-restrictions).

## Create a card message on behalf of a user

To create a message with cards on behalf of a user, use [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).

To create the message, specify the following in your request:

- The `chat.messages.create` or `chat.messages` authorization scope.
- The `cardsV2` field in the `Message` resource, containing the card data.
- The `cardId` for each card, which is required for asynchronous updates.

The following example shows how to create a message with a card on behalf of a user:

### Node.js

```
/**
 * This sample shows how to create a message with a card on behalf of a user.
 */
const {google} = require('googleapis');
const {auth} = require('google-auth-library');

async function main() {
  // Create a client
  const authClient = await auth.getClient({
    scopes: ['https://www.googleapis.com/auth/chat.messages.create']
  });
  google.options({auth: authClient});

  // Initialize the Chat API with Developer Preview labels
  const chat = await google.discoverAPI(
    'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER_PREVIEW&key=API_KEY'
  );

  // The space to create the message in.
  const parent = 'spaces/SPACE_NAME';

  // Create the request
  const request = {
    parent: parent,
    requestBody: {
      text: 'Here is a card created on my behalf:',
      cardsV2: [{
        cardId: 'unique-card-id',
        card: {
          header: {
            title: 'Card Title',
            subtitle: 'Card Subtitle'
          },
          sections: [{
            widgets: [{
              textParagraph: {
                text: 'This card is attached to a user message.'
              }
            }]
          }]
        }
      }]
    }
  };

  // Call the API
  const response = await chat.spaces.messages.create(request);

  // Handle the response
  console.log(response.data);
}

main().catch(console.error);
```

### Python

```
"""
This sample shows how to create a message with a card on behalf of a user.
"""
from google.oauth2 import service_account
from googleapiclient.discovery import build
import google.auth

def create_message_with_card():
    # Create a client
    scopes = ["https://www.googleapis.com/auth/chat.messages.create"]
    credentials, _ = google.auth.default(scopes=scopes)

    # Build the service endpoint for Chat API with Developer Preview labels.
    service = build(
        'chat',
        'v1',
        credentials=credentials,
        discoveryServiceUrl='https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER_PREVIEW&key=API_KEY'
    )

    # The space to create the message in.
    parent = "spaces/SPACE_NAME"

    # Create the request
    result = service.spaces().messages().create(
        parent=parent,
        body={
            'text': 'Here is a card created on my behalf:',
            'cardsV2': [{
                'cardId': 'unique-card-id',
                'card': {
                    'header': {
                        'title': 'Card Title',
                        'subtitle': 'Card Subtitle'
                    },
                    'sections': [{
                        'widgets': [{
                            'textParagraph': {
                                'text': 'This card is attached to a user message.'
                            }
                        }]
                    }]
                }
            }]
        }
    ).execute()

    print(result)

if __name__ == "__main__":
    create_message_with_card()
```

### Java

```
/**
 * This sample shows how to create a message with a card on behalf of a user.
 */
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.json.JsonHttpContent;
import com.google.api.client.json.gson.GsonFactory;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class CreateMessageWithCard {
  public static void main(String[] args) throws Exception {
    HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
    GsonFactory jsonFactory = GsonFactory.getDefaultInstance();

    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(Arrays.asList("https://www.googleapis.com/auth/chat.messages.create"));
    HttpRequestFactory requestFactory = transport.createRequestFactory(new HttpCredentialsAdapter(credentials));

    String parent = "spaces/SPACE_NAME";
    GenericUrl url = new GenericUrl("https://chat.googleapis.com/v1/" + parent + "/messages");

    // Construct the message body
    Map<String, Object> message = new HashMap<>();
    message.put("text", "Here is a card created on my behalf:");

    Map<String, Object> header = new HashMap<>();
    header.put("title", "Card Title");
    header.put("subtitle", "Card Subtitle");

    Map<String, Object> textParagraph = new HashMap<>();
    textParagraph.put("text", "This card is attached to a user message.");

    Map<String, Object> widget = new HashMap<>();
    widget.put("textParagraph", textParagraph);

    Map<String, Object> section = new HashMap<>();
    section.put("widgets", Collections.singletonList(widget));

    Map<String, Object> card = new HashMap<>();
    card.put("header", header);
    card.put("sections", Collections.singletonList(section));

    Map<String, Object> cardWithId = new HashMap<>();
    cardWithId.put("cardId", "unique-card-id");
    cardWithId.put("card", card);

    message.put("cardsV2", Collections.singletonList(cardWithId));

    HttpRequest request = requestFactory.buildPostRequest(url, new JsonHttpContent(jsonFactory, message));
    System.out.println(request.execute().parseAsString());
  }
}
```

### Apps Script

```
/**
 * This sample shows how to create a message with a card on behalf of a user.
 */
function createMessageWithCard() {
  const parent = 'spaces/SPACE_NAME';
  const url = \`https://chat.googleapis.com/v1/${parent}/messages\`;

  const message = {
    text: 'Here is a card created on my behalf:',
    cardsV2: [{
      cardId: 'unique-card-id',
      card: {
        header: {
          title: 'Card Title',
          subtitle: 'Card Subtitle'
        },
        sections: [{
          widgets: [{
            textParagraph: {
              text: 'This card is attached to a user message.'
            }
          }]
        }]
      }
    }]
  };

  const options = {
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    },
    contentType: 'application/json',
    payload: JSON.stringify(message),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    console.log(response.getContentText());
  } catch (err) {
    console.log('Failed to create message: ' + err.message);
  }
}
```

## Update cards asynchronously

After creating a message with cards, you can update the cards asynchronously using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). This allows your app to refresh the card content without requiring user interaction. Only the Chat app that added the card to the user's message can replace it. If a user edits the message text, the app-owned cards are removed, and your app can no longer update them.

To update the cards, call the `replaceCards` method with the following:

- The `chat.bot` authorization scope.
- The `name` of the message to update.
- The new `cardsV2` list. This replaces all existing cards in the message. If you provide an empty list, the cards are removed.

The following example shows how to update the cards of a message:

### Node.js

```
/**
 * This sample shows how to update cards on a message.
 */
const {google} = require('googleapis');
const {auth} = require('google-auth-library');

async function main() {
  // Create a client with app credentials
  const authClient = await auth.getClient({
    scopes: ['https://www.googleapis.com/auth/chat.bot']
  });
  google.options({auth: authClient});

  // Initialize the Chat API with Developer Preview labels
  const chat = await google.discoverAPI(
    'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER_PREVIEW&key=API_KEY'
  );

  // The message to update.
  const messageName = 'spaces/SPACE_NAME/messages/MESSAGE_ID';

  // Create the request
  const request = {
    name: messageName,
    requestBody: {
      cardsV2: [{
        cardId: 'unique-card-id',
        card: {
          header: {
            title: 'Updated Card Title',
            subtitle: 'Updated Card Subtitle'
          },
          sections: [{
            widgets: [{
              textParagraph: {
                text: 'The card content has been updated asynchronously.'
              }
            }]
          }]
        }
      }]
    }
  };

  // Call the API
  await chat.spaces.messages.replaceCards(request);
  console.log('Cards updated.');
}

main().catch(console.error);
```

### Python

```
"""
This sample shows how to update cards on a message.
"""
from google.oauth2 import service_account
from googleapiclient.discovery import build
import google.auth

def replace_message_cards():
    # Create a client with app credentials
    scopes = ["https://www.googleapis.com/auth/chat.bot"]
    credentials, _ = google.auth.default(scopes=scopes)

    # Build the service endpoint for Chat API with Developer Preview labels.
    service = build(
        'chat',
        'v1',
        credentials=credentials,
        discoveryServiceUrl='https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER_PREVIEW&key=API_KEY'
    )

    # The message to update.
    message_name = "spaces/SPACE_NAME/messages/MESSAGE_ID"

    # Create the request
    result = service.spaces().messages().replaceCards(
        name=message_name,
        body={
            'cardsV2': [{
                'cardId': 'unique-card-id',
                'card': {
                    'header': {
                        'title': 'Updated Card Title',
                        'subtitle': 'Updated Card Subtitle'
                    },
                    'sections': [{
                        'widgets': [{
                            'textParagraph': {
                                'text': 'The card content has been updated asynchronously.'
                            }
                        }]
                    }]
                }
            }]
        }
    ).execute()

    print("Cards updated.")

if __name__ == "__main__":
    replace_message_cards()
```

### Java

```
/**
 * This sample shows how to update cards on a message.
 */
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.json.JsonHttpContent;
import com.google.api.client.json.gson.GsonFactory;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class ReplaceMessageCards {
  public static void main(String[] args) throws Exception {
    HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
    GsonFactory jsonFactory = GsonFactory.getDefaultInstance();

    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(Arrays.asList("https://www.googleapis.com/auth/chat.bot"));
    HttpRequestFactory requestFactory = transport.createRequestFactory(new HttpCredentialsAdapter(credentials));

    String messageName = "spaces/SPACE_NAME/messages/MESSAGE_ID";
    GenericUrl url = new GenericUrl("https://chat.googleapis.com/v1/" + messageName + ":replaceCards");

    // Construct the body
    Map<String, Object> header = new HashMap<>();
    header.put("title", "Updated Card Title");
    header.put("subtitle", "Updated Card Subtitle");

    Map<String, Object> textParagraph = new HashMap<>();
    textParagraph.put("text", "The card content has been updated asynchronously.");

    Map<String, Object> widget = new HashMap<>();
    widget.put("textParagraph", textParagraph);

    Map<String, Object> section = new HashMap<>();
    section.put("widgets", Collections.singletonList(widget));

    Map<String, Object> card = new HashMap<>();
    card.put("header", header);
    card.put("sections", Collections.singletonList(section));

    Map<String, Object> cardWithId = new HashMap<>();
    cardWithId.put("cardId", "unique-card-id");
    cardWithId.put("card", card);

    Map<String, Object> body = new HashMap<>();
    body.put("cardsV2", Collections.singletonList(cardWithId));

    HttpRequest request = requestFactory.buildPostRequest(url, new JsonHttpContent(jsonFactory, body));
    request.execute();
    System.out.println("Cards updated.");
  }
}
```

### Apps Script

```
/**
 * This sample shows how to update cards on a message.
 */
function replaceMessageCards() {
  const messageName = 'spaces/SPACE_NAME/messages/MESSAGE_ID';
  const url = \`https://chat.googleapis.com/v1/${messageName}:replaceCards\`;

  const request = {
    cardsV2: [{
      cardId: 'unique-card-id',
      card: {
        header: {
          title: 'Updated Card Title',
          subtitle: 'Updated Card Subtitle'
        },
        sections: [{
          widgets: [{
            textParagraph: {
              text: 'The card content has been updated asynchronously.'
            }
          }]
        }]
      }
    }]
  };

  const options = {
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    },
    contentType: 'application/json',
    payload: JSON.stringify(request),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    console.log('Cards updated.');
  } catch (err) {
    console.log('Failed to update cards: ' + err.message);
  }
}
```

## Limitations

- When creating messages with cards on behalf of a user or updating cards, the Chat app must be a member of the space. This requirement applies when:
	- [Creating a message](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create) with cards on behalf of a user.
		- [Replacing or updating the cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/replaceCards) of a message.
	This requirement is different from other APIs that use user authentication, which typically don't require the app to be a member of the space.
- The [`replaceCards`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/replaceCards) method supports card replacement and removal, and you can add additional cards while replacing them, but you can't add cards to a message that doesn't already have cards.
- The Chat app can only replace cards that it attached to a message, not cards that other Chat apps attached.
- If a user edits the message text, the Chat app-owned cards are removed, and you can no longer update them.

## Related topics

- [Create a message](https://developers.google.com/workspace/chat/create-messages)
- [Update a message](https://developers.google.com/workspace/chat/update-messages)
- [Build cards](https://developers.google.com/workspace/chat/design-components-card-dialog)
- [Card Builder](https://addons.gsuite.google.com/uikit/builder)
