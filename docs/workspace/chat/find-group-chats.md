---
source: https://developers.google.com/workspace/chat/find-group-chats
root: workspace
fetched_at: 2026-04-23T15:25:24.509Z
---

# Find a group chat

This guide explains how to find group chats that contain the calling user and a specified list of other users. In the Google Chat API, group chats are `Space` resources that have `spaceType` set to `GROUP_CHAT`. To find a group chat, use the `findGroupChats` ([RPC](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats), [REST](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/findGroupChats)) method on the `Space` resource.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=nodejs#cloud-client-libraries).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls).

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=python#cloud-client-libraries).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls).

### Java

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Java [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=java#cloud-client-libraries).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls).

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](https://developers.google.com/apps-script/guides/projects), and turn on the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls).

## Find a group chat

To find a group chat in Google Chat, pass the following in your request:

- An authorization scope: `chat.memberships.readonly` or `chat.memberships`.
- Call the `findGroupChats` ([RPC](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats), [REST](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/findGroupChats)) method, passing the resource names of the other users.

Here's how to find a group chat with specific members:

### Node.js

```
/**
 * This sample shows how to find a group chat with specific members.
 *
 * It relies on the @google-apps/chat npm package.
 */
// Read the documentation for more details:
// https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

const {ChatServiceClient} = require('@google-apps/chat');
const {auth} = require('google-auth-library');

async function main() {
  // Create a client
  const chatClient = new ChatServiceClient({
    authClient: await auth.getClient({
      scopes: ['https://www.googleapis.com/auth/chat.memberships.readonly']
    })
  });

  // The users to find a group chat with.
  // Don't include the caller.
  const users = [
    'users/123456789',
    'users/987654321'
  ];

  // Create the request
  const request = {
    users: users
  };

  // Call the API
  const response = await chatClient.findGroupChats(request);

  // Handle the response
  if (response.spaces && response.spaces.length > 0) {
    console.log('Found group chat:', response.spaces[0].name);
  } else {
    console.log('No group chat found.');
  }
}

main().catch(console.error);
```

### Python

```
"""
This sample shows how to find a group chat with specific members.
"""
from google.apps import chat_v1
import google.auth

# Read the documentation for more details:
# https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

def find_group_chat():
    # Create a client
    scopes = ["https://www.googleapis.com/auth/chat.memberships.readonly"]
    credentials, _ = google.auth.default(scopes=scopes)
    client = chat_v1.ChatServiceClient(credentials=credentials)

    # The users to find a group chat with.
    # Don't include the caller.
    users_list = [
        "users/123456789",
        "users/987654321"
    ]

    # Create the request
    request = chat_v1.FindGroupChatsRequest(
        users=users_list
    )

    # Call the API
    response = client.find_group_chats(request)

    # Handle the response
    if response.spaces:
        print(f"Found group chat: {response.spaces[0].name}")
    else:
        print("No group chat found.")

if __name__ == "__main__":
    find_group_chat()
```

### Java

```
/**
 * This sample shows how to find a group chat with specific members.
 */
import com.google.api.gax.core.FixedCredentialsProvider;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.ChatServiceSettings;
import com.google.chat.v1.FindGroupChatsRequest;
import com.google.chat.v1.FindGroupChatsResponse;
import java.util.Arrays;
import java.util.List;

// Read the documentation for more details:
// https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

public class FindGroupChat {
  public static void main(String[] args) throws Exception {
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(Arrays.asList("https://www.googleapis.com/auth/chat.memberships.readonly"));
    ChatServiceSettings settings = ChatServiceSettings.newBuilder()
        .setCredentialsProvider(FixedCredentialsProvider.create(credentials))
        .build();
    try (ChatServiceClient chatServiceClient = ChatServiceClient.create(settings)) {
      List<String> users = Arrays.asList(
          "users/123456789",
          "users/987654321"
      );

      FindGroupChatsRequest request = FindGroupChatsRequest.newBuilder()
          .addAllUsers(users)
          .build();

      FindGroupChatsResponse response = chatServiceClient.findGroupChats(request);

      if (!response.getSpacesList().isEmpty()) {
        System.out.printf("Found group chat: %s\n", response.getSpacesList().get(0).getName());
      } else {
        System.out.println("No group chat found.");
      }
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to find a group chat with specific members.
 */
// Read the documentation for more details:
// https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

function findGroupChat() {
  // The users to find a group chat with.
  // Don't include the caller.
  const users = [
    'users/123456789',
    'users/987654321'
  ];

  try {
    // Call the API
    // In Apps Script, query parameters are passed as optional arguments
    const response = Chat.Spaces.findGroupChats({
      users: users
    });

    if (response.spaces && response.spaces.length > 0) {
      console.log('Found group chat: ' + response.spaces[0].name);
    } else {
      console.log('No group chat found.');
    }
  } catch (err) {
    // Handle error
    console.log('Failed to find group chat: ' + err.message);
  }
}
```

To run this sample, replace the user resource names with valid user IDs. You can obtain user IDs from the People API or the Directory API.

The Chat API returns an instance of `FindGroupChatsResponse` ([RPC](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.FindGroupChatsResponse), [REST](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/findGroupChats#FindGroupChatsResponse)) that contains the list of found spaces.

## Find a group chat with details

By default, `findGroupChats` ([RPC](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats), [REST](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/findGroupChats)) returns `Space` objects that only contain the `name` field, in the format `spaces/SPACE_NAME`. To get more details about the space, such as the `displayName`, `spaceType`, or `createTime`, specify the `spaceView` parameter as `SPACE_VIEW_EXPANDED`.

Using `SPACE_VIEW_EXPANDED` requires an additional authorization scope: `https://www.googleapis.com/auth/chat.spaces` or `https://www.googleapis.com/auth/chat.spaces.readonly`.

Here's how to find a group chat and retrieve its details:

### Node.js

```
/**
 * This sample shows how to find a group chat with specific members and return details.
 *
 * It relies on the @google-apps/chat npm package.
 */
// Read the documentation for more details:
// https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

const {ChatServiceClient} = require('@google-apps/chat');
const {auth} = require('google-auth-library');

async function main() {
  // Create a client
  const chatClient = new ChatServiceClient({
    authClient: await auth.getClient({
      scopes: [
        'https://www.googleapis.com/auth/chat.spaces.readonly',
        'https://www.googleapis.com/auth/chat.memberships.readonly'
      ]
    })
  });

  // The users to find a group chat with.
  // Don't include the caller.
  const users = [
    'users/123456789',
    'users/987654321'
  ];

  // Create the request
  const request = {
    users: users,
    spaceView: 'SPACE_VIEW_EXPANDED'
  };

  // Call the API
  const response = await chatClient.findGroupChats(request);

  // Handle the response
  if (response.spaces && response.spaces.length > 0) {
    console.log('Found group chat:', response.spaces[0].displayName);
  } else {
    console.log('No group chat found.');
  }
}

main().catch(console.error);
```

### Python

```
"""
This sample shows how to find a group chat with specific members and return details.
"""
from google.apps import chat_v1
import google.auth

# Read the documentation for more details:
# https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

def find_group_chat_with_details():
    # Create a client
    scopes = [
        "https://www.googleapis.com/auth/chat.memberships.readonly",
        "https://www.googleapis.com/auth/chat.spaces.readonly"
    ]
    credentials, _ = google.auth.default(scopes=scopes)
    client = chat_v1.ChatServiceClient(credentials=credentials)

    # The users to find a group chat with.
    # Don't include the caller.
    users_list = [
        "users/123456789",
        "users/987654321"
    ]

    # Create the request
    request = chat_v1.FindGroupChatsRequest(
        users=users_list,
        space_view=chat_v1.SpaceView.SPACE_VIEW_EXPANDED
    )

    # Call the API
    response = client.find_group_chats(request)

    # Handle the response
    if response.spaces:
        print(f"Found group chat: {response.spaces[0].display_name}")
    else:
        print("No group chat found.")

if __name__ == "__main__":
    find_group_chat_with_details()
```

### Java

```
/**
 * This sample shows how to find a group chat with specific members and return details.
 */
import com.google.api.gax.core.FixedCredentialsProvider;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.ChatServiceSettings;
import com.google.chat.v1.FindGroupChatsRequest;
import com.google.chat.v1.FindGroupChatsResponse;
import com.google.chat.v1.SpaceView;
import java.util.Arrays;
import java.util.List;

// Read the documentation for more details:
// https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

public class FindGroupChatWithDetails {
  public static void main(String[] args) throws Exception {
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(Arrays.asList(
            "https://www.googleapis.com/auth/chat.memberships.readonly",
            "https://www.googleapis.com/auth/chat.spaces.readonly"
        ));
    ChatServiceSettings settings = ChatServiceSettings.newBuilder()
        .setCredentialsProvider(FixedCredentialsProvider.create(credentials))
        .build();
    try (ChatServiceClient chatServiceClient = ChatServiceClient.create(settings)) {
      List<String> users = Arrays.asList(
          "users/123456789",
          "users/987654321"
      );

      FindGroupChatsRequest request = FindGroupChatsRequest.newBuilder()
          .addAllUsers(users)
          .setSpaceView(SpaceView.SPACE_VIEW_EXPANDED)
          .build();

      FindGroupChatsResponse response = chatServiceClient.findGroupChats(request);

      if (!response.getSpacesList().isEmpty()) {
        System.out.printf("Found group chat: %s\n", response.getSpacesList().get(0).getDisplayName());
      } else {
        System.out.println("No group chat found.");
      }
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to find a group chat with specific members and return details.
 */
// Read the documentation for more details:
// https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.FindGroupChats

function findGroupChatWithDetails() {
  // The users to find a group chat with.
  // Don't include the caller.
  const users = [
    'users/123456789',
    'users/987654321'
  ];

  try {
    // Call the API
    // In Apps Script, query parameters are passed as optional arguments
    const response = Chat.Spaces.findGroupChats({
      users: users,
      spaceView: 'SPACE_VIEW_EXPANDED'
    });

    if (response.spaces && response.spaces.length > 0) {
      console.log('Found group chat: ' + response.spaces[0].displayName);
    } else {
      console.log('No group chat found.');
    }
  } catch (err) {
    // Handle error
    console.log('Failed to find group chat: ' + err.message);
  }
}
```

To run this sample, replace the user resource names with valid user IDs. You can obtain user IDs from the People API or the Directory API.

The Chat API returns an instance of `FindGroupChatsResponse` ([RPC](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.FindGroupChatsResponse), [REST](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/findGroupChats#FindGroupChatsResponse)) that contains the list of found spaces including additional `spaceView` details.

## Related topics

- [Create a space](https://developers.google.com/workspace/chat/create-spaces)
- [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces)
- [List spaces](https://developers.google.com/workspace/chat/list-spaces)
- [Update a space](https://developers.google.com/workspace/chat/update-spaces)
- [Delete a space](https://developers.google.com/workspace/chat/delete-spaces)
- [Find a direct message](https://developers.google.com/workspace/chat/find-direct-message-in-spaces)
