---
source: https://developers.google.com/workspace/chat/update-section
root: workspace
fetched_at: 2026-04-23T15:25:39.018Z
---

# Update a section

This guide explains how to use the [`patch`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.UpdateSection) method on the [`Section`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section) resource of the Google Chat API to update a custom section in Google Chat.

Only sections of type `CUSTOM_SECTION` can be updated. For more information, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

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

## Update a section

To update a section with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.users.sections` authorization scope.
- Call the [`UpdateSection`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.UpdateSection) method.
- In the request body, provide a `Section` resource and a field mask:
	- Set the `name` of the section to update.
		- Set `displayName` to the new name for the section.
		- Set `updateMask` to `displayName`.

The following example updates a section:

### Python

```
from google.cloud import chat_v1
from google.protobuf import field_mask_pb2

def update_section():
    # Create a client
    client = chat_v1.ChatServiceClient()

    # Initialize request
    request = chat_v1.UpdateSectionRequest(
        section=chat_v1.Section(
            name="SECTION_NAME",
            display_name="NEW_SECTION_DISPLAY_NAME"
        ),
        update_mask=field_mask_pb2.FieldMask(paths=["display_name"])
    )

    # Make the request
    response = client.update_section(request=request)

    print(response)
```

To run this sample, replace the following:

- `SECTION_NAME`: The resource name of the section. You can obtain the resource name by calling the [`ListSections`](./list-sections.md) method.
- `NEW_SECTION_DISPLAY_NAME`: The new name for the section.

The Chat API returns the updated instance of [`Section`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section).

## Related topics

- [Create a section](./create-section.md)
- [Delete a section](./delete-section.md)
- [Change the position of a section](./position-section.md)
- [List sections](./list-sections.md)
- [List spaces in a section](./list-section-items.md)
- [Move a space to a different section](./move-section-item.md)
