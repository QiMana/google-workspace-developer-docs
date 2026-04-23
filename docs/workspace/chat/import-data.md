---
source: https://developers.google.com/workspace/chat/import-data
root: workspace
fetched_at: 2026-04-23T15:25:27.425Z
---

# Import data to Google Chat

## Page Summary

- Google Chat enables data imports from other platforms into a dedicated "import mode" space, allowing for the transfer of messages, reactions, attachments, and historical memberships within a 90-day timeframe.
- The import process requires specific configurations, including domain-wide authorization, space creation in import mode, and utilization of the Chat API for importing resources like messages, reactions, and attachments.
- Data validation and reconciliation are crucial steps after import, allowing for addressing discrepancies between the imported and original data using Chat API methods for updating, deleting, and modifying resources.
- Completion of the import process involves calling the `spaces.update` method, transitioning the space to a regular space, granting user access, and ensuring adherence to usage limits and import mode duration constraints.
- Comprehensive prerequisites, considerations, and troubleshooting guidance are provided to ensure a successful and efficient data import experience using the Google Chat API.

With the Google Chat API, you can import data from your other messaging platforms into Google Chat. You can import existing messages, attachments, reactions, memberships, and space entities from your other messaging platforms to corresponding [Chat API resources](https://developers.google.com/workspace/chat/api/reference/rest). You can import this data by creating Chat spaces in [*import mode*](https://developers.google.com/workspace/chat/import-data-overview) and importing data into those spaces. After the process successfully completes, these spaces become standard Chat spaces.

The following outlines the complete import process:

## Prerequisites

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
- [Create a standalone Apps Script project](https://developers.google.com/apps-script/guides/projects), and turn on the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat).
- The Chat app must be delegated domain-wide authority in any domains that the app imports content in, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
- Python 3.6 or greater
- The [pip](https://pypi.python.org/pypi/pip) package management tool
- The Chat app must be delegated domain-wide authority in any domains that the app imports content in, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

## Plan your import

Plan accordingly for the amount of data to be imported, understand how the [usage limits and quotas](https://developers.google.com/workspace/chat/limits) can impact the import process, and be aware of the types of Chat spaces supported when importing to a new space. If you are an administrator, read [Import message data to Google Chat from another service](https://support.google.com/a/answer/13465849) and follow the steps carefully.

### Review API usage limits

The time required to import data into Chat can vary greatly depending on the quantity of Chat resources to import. Review your Chat app's [usage limits](https://developers.google.com/workspace/chat/limits) and the amount of data scheduled for import from the source messaging platform to determine an estimated timeline.

When importing messages to a space, we recommend that you spread the calls to the [`messages.create()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create) method across different message threads.

### Identify the supported spaces to import

Import mode supports spaces with a [`SpaceType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype) of `SPACE` and `GROUP_CHAT`, but not `DIRECT_MESSAGE`.

To import conversations between two humans or a human and a Chat app, import the conversation to a two-member space with a [`SpaceType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype) of `SPACE` or `GROUP_CHAT`.

## Create a space in import mode

To create a space in import mode, call the [`create` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create) on the [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) and set `importMode` to `true`.

When you create the space in import mode, make note of the following.

- **The date and time** - Remember, *import mode must be completed within 90 days.* If the space is still in import mode after 90 days from the time the `spaces.create()` method was called, it's automatically deleted and becomes inaccessible and unrecoverable.
	- Use the value of the [`importModeExpireTime`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space) field to track the expiration of the 90 day timeframe.
		- Don't use the value of the [`createTime`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space) field to track the expiration of the 90 day timeframe. This is not always the same as when you call the `spaces.create()` method. When using import mode, the `createTime` field can be set to the historical timestamp at which the space was created in the source in order to preserve the original creation time.
- **The space resource name ([`name`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.FIELDS.name))** - The unique identifier that is used to retrieve information about the specific space and is referenced in later steps when importing content into the space.

To preserve the creation time of the equivalent space entity from the source messaging platform, you can set the `createTime` of the space. This `createTime` must be set to a value between January 1, 2000 and present time.

To create an external space in import mode, set `externalUserAllowed` to `true`. After import is successfully completed, you can add external users.

The following example shows how to create a space in import mode:

### Apps Script

```
function createSpaceInImportMode() {
  const space = Chat.Spaces.create({
      spaceType: 'SPACE',
      displayName: 'DISPLAY_NAME',
      importMode: true,
      createTime: (new Date('January 1, 2000')).toJSON()
  });
  console.log(space.name);
}
```

### Python

```
"""Create a space in import mode."""

import datetime

from google.oauth2 import service_account
from googleapiclient.discovery import build

# Specify required scopes.
SCOPES = [
    'https://www.googleapis.com/auth/chat.import',
]

CREDENTIALS = (
    service_account.Credentials.from_service_account_file('credentials.json')
    .with_scopes(SCOPES)
    .with_subject('EMAIL')
)

# Build a service endpoint for Chat API.
service = build('chat', 'v1', credentials=CREDENTIALS)

result = (
    service.spaces()
    .create(
        body={
            'spaceType': 'SPACE',
            'displayName': 'DISPLAY_NAME',
            'importMode': True,
            'createTime': f'{datetime.datetime(2000, 1, 1).isoformat()}Z',
        }
    )
    .execute()
)

print(result)
```

Replace the following:

- `EMAIL`: the email address of the user account that you're impersonating with domain-wide authority.
- `DISPLAY_NAME`: the name for the space created in import mode. This must be a unique name for the space that's displayed to Chat users. We recommend using the same display name as the space from which you're importing data.

## Import resources

To import resources from other messaging platforms, you create Google Chat resources (such as messages, reactions, attachments) in the import mode space. When you create a resource in the space, you specify data from the related resource from the message platform that you're migrating from.

### Messages

Your Chat apps can import messages using their own authority, or on behalf of a user through impersonation. The message author is set to the impersonated user account. For more information, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import). To import a message in an import mode space, call the [`create` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). In order to preserve the creation time of the original message from the source messaging platform, you can set the `createTime` of the message. This `createTime` must be set to a value between the space creation time that you previously set and present time.

Messages in the same space cannot contain the same `createTime`, even if previous messages with that time are deleted.

Messages containing third-party URLs in import mode spaces can't render link previews within Google Chat.

When you create the messages in import mode, spaces don't notify or send email to any users, including messages which contain [user mentions](https://developers.google.com/workspace/chat/format-messages#messages-@mention).

The following example shows how to create a message in an import mode space:

### Python

```
"""Create a message in import mode space."""

import datetime

from google.oauth2 import service_account
from googleapiclient.discovery import build

# Specify required scopes.
SCOPES = [
    'https://www.googleapis.com/auth/chat.import',
]

CREDENTIALS = (
    service_account.Credentials.from_service_account_file('credentials.json')
    .with_scopes(SCOPES)
    .with_subject('EMAIL')
)

# Build a service endpoint for Chat API.
service = build('chat', 'v1', credentials=CREDENTIALS)

NAME = 'spaces/SPACE_NAME'
result = (
    service.spaces()
    .messages()
    .create(
        parent=NAME,
        body={
            'text': 'Hello, world!',
            'createTime': f'{datetime.datetime(2000, 1, 2).isoformat()}Z',
        },
    )
    .execute()
)

print(result)
```

Replace the following:

- `EMAIL`: the email address of the user account that you're impersonating with domain-wide authority.
- `SPACE_NAME`: the [name for the space created in import mode](https://developers.google.com/workspace/chat/import-data#create-space).

### Reactions

Your Chat app can import [reactions for messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions) by using the Chat API. For information about the resource methods and types of authentication support in import mode spaces, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

### Attachments

Your Chat app can [upload attachments](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/upload) using the Chat API. For information about the resource methods and types of authentication support in import mode spaces, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import). However, we highly recommended that you use [Google Drive API](https://developers.google.com/drive/api/reference/rest/v3) to upload attachments as Google Drive files and link the file URIs to the respective messages in the import mode spaces to import attachments from other messaging platforms to avoid hitting Google Chat internal limit for attachment upload.

### Historical memberships

*Historical memberships* are memberships created for users who had already left the original space entity from the source messaging platform, but you want to [retain their data in Chat](https://support.google.com/vault/answer/7657594). For information about adding new members after the space is no longer in import mode, see [Create membership resource](https://developers.google.com/workspace/chat/import-data#create_membership_resources).

In many cases, when those historical members are subject to a [data retention policy in Google](https://support.google.com/vault/answer/2462365), you want to preserve the data (such as Messages and reactions) created by historical memberships in a space before importing them to Chat. While the space is in import mode, you can import those historical memberships into the space, using the [`create` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create) on the [`Membership` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members). In order to preserve the leave time of the historical membership, you must set the `deleteTime` of the membership. This leave time must be accurate because it impacts which data to retain for those memberships. Moreover, this `deleteTime` must be after the space creation timestamp and must not be a future timestamp.

In addition to `deleteTime`, you can also set `createTime` to preserve the original join time of the historical membership. Unlike `deleteTime`, the `createTime` is optional. If unset, `createTime` is automatically calculated by subtracting 1 microsecond from `deleteTime`. If set, `createTime` must be before `deleteTime` and must be on or after the space creation time. This `createTime` information isn't used to determine data retention and isn't visible in admin tools such as the Google Admin console and Google Vault.

While there might be multiple ways that a user can join and leave a space in the source messaging platform (through invites, joining by themselves, being added by another user), in Chat those actions are all represented by the historical membership `createTime` and `deleteTime` fields as being added or removed.

The following example shows how to create a historical membership in an import mode space:

### Python

```
"""Create a historical membership in import mode space."""

import datetime

from google.oauth2 import service_account
from googleapiclient.discovery import build

# Specify required scopes.
SCOPES = [
    'https://www.googleapis.com/auth/chat.import',
]

CREDENTIALS = (
    service_account.Credentials.from_service_account_file('credentials.json')
    .with_scopes(SCOPES)
    .with_subject('EMAIL')
)

# Build a service endpoint for Chat API.
service = build('chat', 'v1', credentials=CREDENTIALS)

NAME = 'spaces/SPACE_NAME'
USER = 'users/USER_ID'
result = (
    service.spaces()
    .members()
    .create(
        parent=NAME,
        body={
            'createTime': f'{datetime.datetime(2000, 1, 3).isoformat()}Z',
            'deleteTime': f'{datetime.datetime(2000, 1, 4).isoformat()}Z',
            'member': {'name': USER, 'type': 'HUMAN'},
        },
    )
    .execute()
)

print(result)
```

Replace the following:

- `EMAIL`: the email address of the user account that you're impersonating with domain-wide authority.
- `SPACE_NAME`: the [name for the space created in import mode](https://developers.google.com/workspace/chat/import-data#create-space).
- `USER_ID`: the unique ID for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users).

### Import resources in an external space

You can only create an external space with import mode using credentials belonging to users inside your Workspace organization. This only applies while the space is in import mode. Once the space [completes import mode](#complete-import), external users can be invited to join the imported spaces (see [access section](#access)) and their credentials can be used to call Chat API.

## Validate imported resources

Your Chat app can read back and validate the contents of an import mode space by calling the [`list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/list) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). You can read `Reaction` and `Attachment` resources from any returned message's `emojiReactionSummaries` and `attachment` fields. Chat apps can only call this method on behalf of a user through impersonation. For more information, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

Your Chat app can also read individual messages for validation by calling the [`get` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/get) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). Chat apps can only call this method to read their own messages by using their own authority. For more information, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

Chat apps can also list historical memberships by calling the [`list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list) on the [`Membership` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members). After the space exits import mode, the `list` method doesn't expose historical memberships anymore. Chat apps can only call this method on behalf of a user through impersonation. For more information, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

You can read an import mode space's properties by calling the [`get` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/get) on the [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces). The response will also have [`importModeExpireTime`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space) populated, so you can properly track the timeframe to complete the import process. Chat apps can only call this method using their own authority. For more information, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

## Reconcile imported resource differences from source data

If any imported resource no longer matches the original entity from the source messaging platform due to changes in the original entity during import, Chat apps can call the Chat API to modify the imported chat resource. For example, if a user edits a message in the source messaging platform after that message was created in Chat, Chat apps can update the imported message so that it reflects the current content of the original message.

### Messages

To update [supported fields](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch#query-parameters) on a message in an import mode space, call the [`update` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). Chat apps can only call this method using the same authority that was used during the initial message creation. If you used user impersonation during the initial message creation, you must use the same impersonated user to update that message.

To delete a message in an import mode space, call the [`delete` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). Messages in an import mode space don't need to be deleted by the original message creator and can be deleted by impersonating any user in the domain. Chat apps can only delete their own messages using their own authority. For more information, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

### Reactions

To delete a reaction for a message in an import mode space, use the [`delete` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete) on the `reactions` resource. For information about the resource methods and types of authentication support in import mode spaces, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

### Attachments

To update attachments for a message in an import mode space, use the [`upload` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/upload) on the `media` resource. For information about the resource methods and types of authentication support in import mode spaces, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

### Historical memberships

To delete a historical membership in an import mode space, use the [`delete` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete) on the [`Membership` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members). After a space exits import mode, the `delete` method doesn't let you delete historical memberships anymore.

You can't update a historical membership in an import mode space. If you want to correct an incorrectly imported historical membership, you need to delete it first and then recreate it while the space is still in import mode.

### Spaces

To update [supported fields](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch#query-parameters) in an import mode space, use the [`patch` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch) on the `spaces` resource.

To delete an import mode space, use the [`delete` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/delete) on the `spaces` resource.

For information about the resource methods and types of authentication support in import mode spaces, and see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import).

## Complete import mode

Before calling the [`completeImport`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/completeImport) method, you should ensure that [validation](#validate-imported) and [reconciliation of resource differences](#reconcile-imported) are completed. Exiting a space out of import mode is an irreversible process and converts the import mode space into a regular space. There's no indicator in Chat that attributes these spaces to a data import.

Make note of the date and time you call `completeImport`, the resource name of the user who made the call, and the response returned. This can be helpful if you must encounter any issues and must investigate them.

To complete import mode and make the space accessible to users, the Chat app can call the `completeImport` method on the [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces). Chat apps can only call this method on behalf of a user through impersonation. For more information, see [Authorize Chat apps](https://developers.google.com/workspace/chat/authorize-import). The impersonated user is added to the space as a [space manager](https://support.google.com/chat/answer/11833441) once this method completes. This method must be called within *90 days* of the initial `create.space` method call. If you attempt to call this method after the 90 day duration has elapsed, the call results in failures because the import mode space is deleted and is no longer accessible to the Chat app.

The impersonated user in the `completeImport` method doesn't need to be the space creator.

Don't call `completeImport` too close to the `importModeExpireTime`, as we can't guarantee that the request will arrive before `importModeExpireTime`, and there could be conflicts with data processing in systems triggered at expire time. We recommend calling `completeImport` at least 30 minutes before `importModeExpireTime`.

The following example shows how to complete the import mode:

### Python

```
"""Complete import."""

from google.oauth2 import service_account
from googleapiclient.discovery import build

# Specify required scopes.
SCOPES = [
    'https://www.googleapis.com/auth/chat.import',
]

CREDENTIALS = (
    service_account.Credentials.from_service_account_file('credentials.json')
    .with_scopes(SCOPES)
    .with_subject('EMAIL')
)

# Build a service endpoint for Chat API.
service = build('chat', 'v1', credentials=CREDENTIALS)

NAME = 'spaces/SPACE_NAME'
result = service.spaces().completeImport(name=NAME).execute()

print(result)
```

Replace the following:

- `EMAIL`: the email address of the user account that you're impersonating with domain-wide authority.
- `SPACE_NAME`: the [name for the space created in import mode](https://developers.google.com/workspace/chat/import-data#create-space).

## Give access to the space after import mode

To give Chat users access to the recently imported space, Chat apps can continue to use the `chat.import` scope and user impersonation within 90 days of the initial `create.space()` method call to do the following:

- **Add members to the space**: Call the [`create()` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create) on the `Membership` resource. We recommend that Chat apps create `Membership` resources immediately after the space import is completed, so that Chat apps can continue to use the `chat.import` scope, and ensure that all imported members have access to the space. You should **prioritize** adding members that may be subject to the [Vault hold policy](https://support.google.com/vault/answer/7657594), which allows preservation of imported messages even if they are out-of-retention.
- **Set a target audience**: Call the [`update()` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch) on the `Space` resource. To learn how to create and add target audiences, see [Make a Google Chat space discoverable to specific users in a Google Workspace organization](https://developers.google.com/workspace/chat/space-target-audience).

To use these methods with the `chat.import` scope, the impersonated user must be a space manager.

For external spaces, the membership [`create()` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create) also allows to invite users outside of your Workspace organization. Make sure you understand all the [known limitations](https://support.google.com/a/answer/9296706) for external users.

## Troubleshooting

If you experience a problem when importing Chat spaces, review the following issues for assistance. If you encounter an error response, make note of it (copy/paste the text into a document or save a screenshot) for future reference and troubleshooting.

When a space is successfully imported, `CompleteImportSpace` completes with a status of `OK`.

### Didn't complete import before the 90-day window expired

As previously described in [Create a space in import mode](#create-space), if the space is still in import mode after 90 days from the time the create method was called, it's automatically deleted and becomes inaccessible and unrecoverable.

Unfortunately, the deleted space is no longer available or recoverable and the import process must be initiated again.

If the space didn't import because it has too much data to import in the 90-day window with the current [usage limits](https://developers.google.com/workspace/chat/limits), split the space into two or more smaller spaces for archiving purposes, and initiate the import process again.

### Find missing spaces

If you're unable to find the new Chat space, review the following table for the response you received from `CompleteImportSpace` to see the explanation and how to resolve it.

| Response received | Investigation steps | Explanation | Resolution |
| --- | --- | --- | --- |
| `CompleteImportSpace` throws an exception and calling `GetSpace` returns `PERMISSION_DENIED`. | Check your records for when the space was created and if it's older than 90 days, it was automatically deleted. Additionally, there is no record of the imported space in the [space management tool](https://support.google.com/a/answer/13979728) or [audit log](https://support.google.com/a/answer/9142478). | It's been longer than 90 days since the import process was started and the space failed to successfully exit migration. | Create a new space and run the import process again. |
| `CompleteImportSpace` returns `OK` and calling `GetSpace` returns `PERMISSION_DENIED`. | There's no record of the imported space in the [space management tool](https://support.google.com/a/answer/13979728), but the space is shown to be deleted in the [audit log](https://support.google.com/a/answer/9142478). | The space was successfully imported, but subsequently deleted. | Create a new space and run the import process again. |
