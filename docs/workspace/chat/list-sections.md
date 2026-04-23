---
source: https://developers.google.com/workspace/chat/list-sections
root: workspace
fetched_at: 2026-04-23T15:25:29.180Z
---

# List sections

This guide explains how to use the [`list`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSections) method on the [`Section`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section) resource of the Google Chat API to list sections available to the authenticated user in Google Chat.

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

## List sections

To list sections with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.users.sections` or `chat.users.sections.readonly` authorization scope.
- Call the [`ListSections`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSections) method.
- Set `parent` to `users/me`.

The following example lists sections:

### Python

```
from google.cloud import chat_v1

def list_sections():
    # Create a client
    client = chat_v1.ChatServiceClient()

    # Initialize request
    request = chat_v1.ListSectionsRequest(
        parent="users/me"
    )

    # Make the request
    page_result = client.list_sections(request=request)

    # Handle the response
    for section in page_result:
        print(section)
```

The Chat API returns a list of [`Section`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section) resources.

## Related topics

- [Create a section](./create-section.md)
- [Update a section](./update-section.md)
- [Delete a section](./delete-section.md)
- [Change the position of a section](./position-section.md)
- [List spaces in a section](./list-section-items.md)
- [Move a space to a different section](./move-section-item.md)
