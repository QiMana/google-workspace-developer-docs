---
source: https://developers.google.com/workspace/chat/move-section-item
root: workspace
fetched_at: 2026-04-23T15:25:29.546Z
---

# Move a space to a different section

This guide explains how to use the [`move`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.MoveSectionItem) method on the [`SectionItem`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SectionItem) resource of the Google Chat API to move an item (such as a space) from one section to another.

For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

## Prerequisites

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- [Create OAuth client ID credentials](./authenticate-authorize-chat-user.md#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](./api/guides/quickstart/python.md#set-up-environment).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.

## Move a space to a different section

To move a space to a different section with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.users.sections` authorization scope.
- Call the [`MoveSectionItem`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.MoveSectionItem) method.
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

The Chat API returns the updated instance of [`SectionItem`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SectionItem).

## Related topics

- [Create a section](./create-section.md)
- [Update a section](./update-section.md)
- [Delete a section](./delete-section.md)
- [Change the position of a section](./position-section.md)
- [List sections](./list-sections.md)
- [List spaces in a section](./list-section-items.md)
