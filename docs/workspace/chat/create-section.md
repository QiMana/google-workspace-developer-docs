---
source: https://developers.google.com/workspace/chat/create-section
root: workspace
fetched_at: 2026-04-23T15:25:20.139Z
---

# Create a section

This guide explains how to use the [`create`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateSection) method on the [`Section`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section) resource of the Google Chat API to create a new custom section in Google Chat.

Sections help users group their conversations and customize the list of spaces displayed in the Google Chat navigation panel. For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

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

## Create a section

To create a section with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.users.sections` authorization scope.
- Call the [`CreateSection`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateSection) method.
- In the request body, provide a `Section` resource:
	- Set `displayName` to a name for the section (up to 80 characters).
		- Set `type` to `CUSTOM_SECTION`.

The following example creates a section:

### Python

```
from google.cloud import chat_v1

def create_section():
    # Create a client
    client = chat_v1.ChatServiceClient()

    # Initialize request
    request = chat_v1.CreateSectionRequest(
        parent="users/me",
        section=chat_v1.Section(
            display_name="SECTION_DISPLAY_NAME",
            type=chat_v1.Section.SectionType.CUSTOM_SECTION
        )
    )

    # Make the request
    response = client.create_section(request=request)

    print(response)
```

To run this sample, replace the following:

- `SECTION_DISPLAY_NAME`: The name of the new section.

The Chat API returns an instance of [`Section`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section) that details the section that was created.

## Related topics

- [Update a section](./update-section.md)
- [Delete a section](./delete-section.md)
- [Change the position of a section](./position-section.md)
- [List sections](./list-sections.md)
- [List spaces in a section](./list-section-items.md)
- [Move a space to a different section](./move-section-item.md)
