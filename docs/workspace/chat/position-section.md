---
source: https://developers.google.com/workspace/chat/position-section
root: workspace
fetched_at: 2026-04-23T15:25:29.837Z
---

# Change the position of a section

This guide explains how to use the [`position`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.PositionSection) method on the [`Section`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Section) resource of the Google Chat API to change the sort order of a section in Google Chat.

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

## Change the position of a section

To change the position of a section with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.users.sections` authorization scope.
- Call the [`PositionSection`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.PositionSection) method.
- In the request body, specify the `name` of the section to position and the new position:
	- Set `sortOrder` to an absolute position (greater than 0).
		- OR set `relativePosition` to `START` or `END`.

The following example moves a section to the start of the list:

### Python

```
from google.cloud import chat_v1

def position_section():
    # Create a client
    client = chat_v1.ChatServiceClient()

    # Initialize request
    request = chat_v1.PositionSectionRequest(
        name="SECTION_NAME",
        relative_position=chat_v1.PositionSectionRequest.Position.START
    )

    # Make the request
    response = client.position_section(request=request)

    print(response)
```

To run this sample, replace the following:

- `SECTION_NAME`: The resource name of the section. You can obtain the resource name by calling the [`ListSections`](https://developers.google.com/workspace/chat/list-sections) method.

The Chat API returns the updated instance of [`Section`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Section).

## Related topics

- [Create a section](https://developers.google.com/workspace/chat/create-section)
- [Update a section](https://developers.google.com/workspace/chat/update-section)
- [Delete a section](https://developers.google.com/workspace/chat/delete-section)
- [List sections](https://developers.google.com/workspace/chat/list-sections)
- [List spaces in a section](https://developers.google.com/workspace/chat/list-section-items)
- [Move a space to a different section](https://developers.google.com/workspace/chat/move-section-item)
