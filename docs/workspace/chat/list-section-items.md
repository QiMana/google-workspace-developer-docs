---
source: https://developers.google.com/workspace/chat/list-section-items
root: workspace
fetched_at: 2026-04-23T15:25:29.232Z
---

# List spaces in a section

This guide explains how to use the [`list`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSectionItems) method on the [`SectionItem`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SectionItem) resource of the Google Chat API to list items (such as spaces) in a section.

Only spaces can be section items. For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

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

## List spaces in a section

To list spaces in a section with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.users.sections` or `chat.users.sections.readonly` authorization scope.
- Call the [`ListSectionItems`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSectionItems) method.
- Set `parent` to the resource name of the section.

The following example lists spaces in a section:

### Python

```
from google.cloud import chat_v1

def list_section_items():
    # Create a client
    client = chat_v1.ChatServiceClient()

    # Initialize request
    request = chat_v1.ListSectionItemsRequest(
        parent="SECTION_NAME"
    )

    # Make the request
    page_result = client.list_section_items(request=request)

    # Handle the response
    for item in page_result:
        print(item)
```

To run this sample, replace the following:

- `SECTION_NAME`: The resource name of the section. You can obtain the resource name by calling the [`ListSections`](https://developers.google.com/workspace/chat/list-sections) method.

The Chat API returns a list of [`SectionItem`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SectionItem) resources.

## Related topics

- [Create a section](https://developers.google.com/workspace/chat/create-section)
- [Update a section](https://developers.google.com/workspace/chat/update-section)
- [Delete a section](https://developers.google.com/workspace/chat/delete-section)
- [Change the position of a section](https://developers.google.com/workspace/chat/position-section)
- [List sections](https://developers.google.com/workspace/chat/list-sections)
- [Move a space to a different section](https://developers.google.com/workspace/chat/move-section-item)
