---
source: https://developers.google.com/workspace/chat/delete-section
root: workspace
fetched_at: 2026-04-23T15:25:23.008Z
---

# Delete a section

This guide explains how to use the [`delete`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteSection) method on the [`Section`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section) resource of the Google Chat API to delete a custom section in Google Chat.

When you delete a section, its items (such as spaces) are moved to Google Chat's default sections and are not deleted.

Only sections of type `CUSTOM_SECTION` can be deleted. For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

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

## Delete a section

To delete a section with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.users.sections` authorization scope.
- Call the [`DeleteSection`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteSection) method.
- In the request body, set `name` to the resource name of the section to delete.

The following example deletes a section:

### Python

```
from google.cloud import chat_v1

def delete_section():
    # Create a client
    client = chat_v1.ChatServiceClient()

    # Initialize request
    request = chat_v1.DeleteSectionRequest(
        name="SECTION_NAME"
    )

    # Make the request
    client.delete_section(request=request)

    print("Section deleted")
```

To run this sample, replace the following:

- `SECTION_NAME`: The resource name of the section. You can obtain the resource name by calling the [`ListSections`](./list-sections.md) method.

## Related topics

- [Create a section](./create-section.md)
- [Update a section](./update-section.md)
- [Change the position of a section](./position-section.md)
- [List sections](./list-sections.md)
- [List spaces in a section](./list-section-items.md)
- [Move a space to a different section](./move-section-item.md)
