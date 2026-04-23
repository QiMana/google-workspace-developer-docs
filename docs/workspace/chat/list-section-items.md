---
source: https://developers.google.com/workspace/chat/list-section-items
root: workspace
fetched_at: 2026-04-23T15:25:29.232Z
---

# List spaces in a section

This guide explains how to use the [`list`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSectionItems) method on the [`SectionItem`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SectionItem) resource of the Google Chat API to list items (such as spaces) in a section.

Only spaces can be section items. For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

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

## List spaces in a section

To list spaces in a section with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.users.sections` or `chat.users.sections.readonly` authorization scope.
- Call the [`ListSectionItems`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSectionItems) method.
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

- `SECTION_NAME`: The resource name of the section. You can obtain the resource name by calling the [`ListSections`](./list-sections.md) method.

The Chat API returns a list of [`SectionItem`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SectionItem) resources.

## Related topics

- [Create a section](./create-section.md)
- [Update a section](./update-section.md)
- [Delete a section](./delete-section.md)
- [Change the position of a section](./position-section.md)
- [List sections](./list-sections.md)
- [Move a space to a different section](./move-section-item.md)
