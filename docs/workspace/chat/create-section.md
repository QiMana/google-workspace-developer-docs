---
source: https://developers.google.com/workspace/chat/create-section
root: workspace
fetched_at: 2026-04-23T15:25:20.139Z
---

# Create a section

This guide explains how to use the [`create`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.CreateSection) method on the [`Section`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Section) resource of the Google Chat API to create a new custom section in Google Chat.

Sections help users group their conversations and customize the list of spaces displayed in the Google Chat navigation panel. For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

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

## Create a section

To create a section with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.users.sections` authorization scope.
- Call the [`CreateSection`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.CreateSection) method.
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

The Chat API returns an instance of [`Section`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Section) that details the section that was created.

## Related topics

- [Update a section](https://developers.google.com/workspace/chat/update-section)
- [Delete a section](https://developers.google.com/workspace/chat/delete-section)
- [Change the position of a section](https://developers.google.com/workspace/chat/position-section)
- [List sections](https://developers.google.com/workspace/chat/list-sections)
- [List spaces in a section](https://developers.google.com/workspace/chat/list-section-items)
- [Move a space to a different section](https://developers.google.com/workspace/chat/move-section-item)
