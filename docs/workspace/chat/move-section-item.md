---
source: https://developers.google.com/workspace/chat/move-section-item
root: workspace
fetched_at: 2026-04-23T15:25:29.546Z
---

# Move a space to a different section

This guide explains how to use the [`move`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.MoveSectionItem) method on the [`SectionItem`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SectionItem) resource of the Google Chat API to move an item (such as a space) from one section to another.

For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

## Prerequisites

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=python#cloud-client-libraries).
		- [Create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/python#set-up-environment).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports user authentication.

## Move a space to a different section

To move a space to a different section with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.users.sections` authorization scope.
- Call the [`MoveSectionItem`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.MoveSectionItem) method.
- In the request body, specify the `name` of the section item to move and the `targetSection`:
	- Set `name` to the resource name of the section item (for example, `users/me/sections/default-spaces/items/spaces/123456`).
		- Set `targetSection` to the resource name of the section you want to move the item to.

The following example moves a space to a different section:

### Python

```
from google.cloud import chat_v1

def move_section_item():
    # Create a client
    client = chat_v1.ChatServiceClient()

    # Initialize request
    request = chat_v1.MoveSectionItemRequest(
        name="SECTION_ITEM_NAME",
        target_section="TARGET_SECTION_NAME"
    )

    # Make the request
    response = client.move_section_item(request=request)

    print(response)
```

To run this sample, replace the following:

- `SECTION_ITEM_NAME`: The resource name of the section item.
- `TARGET_SECTION_NAME`: The resource name of the target section.

The Chat API returns the updated instance of [`SectionItem`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SectionItem).

## Related topics

- [Create a section](https://developers.google.com/workspace/chat/create-section)
- [Update a section](https://developers.google.com/workspace/chat/update-section)
- [Delete a section](https://developers.google.com/workspace/chat/delete-section)
- [Change the position of a section](https://developers.google.com/workspace/chat/position-section)
- [List sections](https://developers.google.com/workspace/chat/list-sections)
- [List spaces in a section](https://developers.google.com/workspace/chat/list-section-items)
