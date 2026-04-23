---
source: https://developers.google.com/workspace/events/guides/events-chat
root: workspace
fetched_at: 2026-04-23T15:28:35.878Z
---

# Subscribe to Google Chat events

## Page Summary

- Google Chat apps can subscribe to events like new messages, reactions, membership changes, and space updates using the Google Workspace Events API.
- Subscriptions can target specific spaces, all spaces for a user, or a specific user, enabling customized event delivery.
- Event types are specified when creating subscriptions, with options for receiving detailed resource data or just resource names.
- Batch events are automatically included, grouping multiple similar events for efficiency.
- Certain limitations apply, such as requiring direct space membership for membership events and initial message posting for direct message/unnamed group chat membership events.

This page describes the Chat events that a Chat app can subscribe to using the Google Workspace Events API. After you decide which types of events you need, [create a subscription](./create-subscription.md) to start receiving events from Chat.

In addition to subscribing to events, you can also query for events by calling the Google Chat API. Calling the Chat API lets you retrieve events on a periodic basis, or catch up on events you might have missed from a subscription due to an outage. To learn about the ways you can receive and respond to Chat events, see [Work with events from Chat](../../chat/events-overview.md) in the Chat documentation.

## Supported Chat events

Google Workspace subscriptions let you receive events about the following types of changes in Chat:

- New, updated, or deleted [messages](../../chat/api/reference/rest/v1/spaces.messages.md) in the space.
- New or removed [reactions](../../chat/api/reference/rest/v1/spaces.messages.reactions.md) to a message.
- New, updated, or removed [members](../../chat/api/reference/rest/v1/spaces.members.md) in the space.
- Changes to the [space](../../chat/api/reference/rest/v1/spaces.md) that you're subscribed to, such as an updated space name or description.

### Resources that you can monitor for events

To receive events, you specify a Chat resource to monitor, which is called the *target resource* of the subscription.

The Google Workspace Events API supports the following target resources for Chat:

| **Target resource** | **Format** | **Limitations** |
| --- | --- | --- |
| Space | `//chat.googleapis.com/spaces/SPACE`  where SPACE is the ID in the [resource name](../../chat/api/reference/rest/v1/spaces.md#Space.FIELDS.name) of the Chat API `space` resource. You can obtain the ID from the space's URL or using the [`spaces.list()`](../../chat/api/reference/rest/v1/spaces/list.md) method. | The Chat user or Chat app that authorizes the subscription must be a member of the space through their Google Workspace or Google Account. Supports: - [User authentication](../../chat/authenticate-authorize-chat-user.md) - [App authentication with administrator approval](../../chat/authenticate-authorize-chat-app.md) |
| All spaces for a user | `//chat.googleapis.com/spaces/-` | The subscription only receives events for the spaces where the user is a member through their Google Workspace or Google Account. Only supports [user authentication](../../chat/authenticate-authorize-chat-user.md). |
| User | `//cloudidentity.googleapis.com/users/USER`  where USER is the ID in the [resource name](../../chat/api/reference/rest/v1/User.md#FIELDS.name) of the Chat API `user` resource. For details, see [Identify and specify Google Chat users](../../chat/identify-reference-users.md). | The subscription only receives events about the user that authorized the subscription. A user can't authorize a subscription on behalf of other users. Only supports [user authentication](../../chat/authenticate-authorize-chat-user.md). |

### Event types for creating subscriptions

When you create a subscription, use the [`eventTypes[]`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.event_types) field to specify which types of events you want to receive. Event types are formatted according to the CloudEvents specification, such as `google.workspace.APPLICATION.RESOURCE.VERSION.ACTION`.

For example, to receive events about users joining a Chat space, specify the space as the target resource, and the event type as `google.workspace.chat.membership.v1.created`. To receive events about a given user joining any space, specify the user as the target resource, and the event type as `google.workspace.chat.membership.v1.created`. To learn more about how events work, see [Structure of Google Workspace events](../../events.md#structure).

The following table displays which event types are supported for subscriptions to spaces and subscriptions to users. To learn about exceptions about what triggers an event, see [Limitations](#limitations).

<table><thead><tr><th><strong>Event type</strong></th><th><strong>Format</strong></th><th><strong>Resource data</strong></th></tr></thead><tbody><tr><td><b>Subscriptions to spaces</b></td><td colspan="4"></td></tr><tr><td>A message is posted.</td><td><p><code>google.workspace.chat.message.v1.created</code></p></td><td><p><code>space.message</code></p></td></tr><tr><td>A message is updated.</td><td><p><code>google.workspace.chat.message.v1.updated</code></p></td><td><p><code>space.message</code></p></td></tr><tr><td>A message is deleted.</td><td><p><code>google.workspace.chat.message.v1.deleted</code></p></td><td><p><code>space.message</code></p></td></tr><tr><td>A reaction is created.</td><td><p><code>google.workspace.chat.reaction.v1.created</code></p></td><td><p><code>space.message.reaction</code></p></td></tr><tr><td>A reaction is deleted.</td><td><p><code>google.workspace.chat.reaction.v1.deleted</code></p></td><td><p><code>space.message.reaction</code></p></td></tr><tr><td>A member is added to the space.</td><td><p><code>google.workspace.chat.membership.v1.created</code></p></td><td><p><code>space.membership</code></p></td></tr><tr><td>A member is updated in the space.</td><td><p><code>google.workspace.chat.membership.v1.updated</code></p></td><td><p><code>space.membership</code></p></td></tr><tr><td>A member is removed from the space.</td><td><p><code>google.workspace.chat.membership.v1.deleted</code></p></td><td><p><code>space.membership</code></p></td></tr><tr><td>The space is updated.</td><td><p><code>google.workspace.chat.space.v1.updated</code></p></td><td><p><code>space</code></p></td></tr><tr><td>The space is deleted.</td><td><p><code>google.workspace.chat.space.v1.deleted</code></p></td><td><p><code>space</code></p></td></tr><tr><td><b>Subscriptions to users</b></td><td colspan="4"></td></tr><tr><td>The user becomes a member of a space.<p>Not all new members trigger events. For details, see <a href="#limitations">Limitations</a></p></td><td><p><code>google.workspace.chat.membership.v1.created</code></p></td><td><p><code>space.membership</code></p></td></tr><tr><td>The user's membership to a space is updated.</td><td><p><code>google.workspace.chat.membership.v1.updated</code></p></td><td><p><code>space.membership</code></p></td></tr><tr><td>The user is removed as a direct member of a space.</td><td><p><code>google.workspace.chat.membership.v1.deleted</code></p></td><td><p><code>space.membership</code></p></td></tr></tbody></table>

### Batch event types (output only)

In addition to receiving the event types that you subscribe to, your Chat app might also receive batch events. A batch event is an event that represents many events of the same type that occur in a short period of time. The payload of a batch event contains a list of all the changed resources.

For example, if a user adds 20 users to a space at the same time, your Chat app might receive a batch event (`google.workspace.chat.membership.v1.batchCreated`). The event payload contains a list of all of the new `Membership` resources that were created when the user added the members to the space.

You receive a batch event for any event type that you subscribe to, so you don't need to specify batch events when you create a subscription. For example, if you subscribe to new reactions (`google.workspace.chat.reaction.v1.created`), your Chat app is automatically configured to receive batch reaction events (`google.workspace.chat.reaction.v1.batchCreated`).

The following table displays the possible batch events for a subscription:

| **Batch event type** | **Format** |
| --- | --- |
| Multiple messages are posted. | `google.workspace.chat.message.v1.batchCreated` |
| Multiple messages are updated. | `google.workspace.chat.message.v1.batchUpdated` |
| Multiple messages are deleted. | `google.workspace.chat.message.v1.batchDeleted` |
| Multiple reactions are created. | `google.workspace.chat.reaction.v1.batchCreated` |
| Multiple reactions are deleted. | `google.workspace.chat.reaction.v1.batchDeleted` |
| Multiple members are added to the subscribed space, or the subscribed user has been added to multiple spaces. | `google.workspace.chat.membership.v1.batchCreated` |
| Multiple memberships are updated in the subscribed space, or for the subscribed user. | `google.workspace.chat.membership.v1.batchUpdated` |
| Multiple members are removed from the subscribed space, or the subscribed user has been removed from multiple spaces. | `google.workspace.chat.membership.v1.batchDeleted` |
| The space has multiple updates. | `google.workspace.chat.space.v1.batchUpdated` |

## Event data

This section describes event data and example payloads for events in Chat.

When your Google Workspace subscription receives an event from Chat, the [`data`](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#event-data) field contains the payload for the event. This payload has information about the Google Workspace resource that changed. For example, if you've subscribed to membership events in a space, the payload for these events contains information about the [`spaces.membership`](../../chat/api/reference/rest/v1/spaces.members.md) resource that changed.

### Resource data in the event payload

When you create a subscription, you can specify whether you want the payload to include details about the resource, or just the name of the resource. For example, if you want to receive events about members in a Chat space, specify which fields of a membership resource you want to receive in the event payload.

The following table provides examples of JSON payloads for a subscription to the Chat space `spaces/AAAABBBBBB`. For each event that the subscription receives, the payload appears in the `data` field of the event:

| **Example** | **Event type** | **JSON payload** |
| --- | --- | --- |
| A user posts a message in the space that says "Hello world." | `  google.workspace.chat.message.v1.created  ` | Includes resource data:  ``` {     "message":     {         "name": "spaces/SPACE_ID/messages/MESSAGE_ID",         "sender":         {             "name": "users/USER_ID",             "type": "HUMAN"         },         "createTime": "2023-09-07T21:37:36.260127Z",         "text": "Hello world",         "thread":         {             "name": "spaces/SPACE_ID/threads/THREAD_ID"         },         "space":         {             "name": "spaces/SPACE_ID"         },         "argumentText": "Hello world"     } } ```  Excludes resource data:  ``` {     "message":     {         "name": "spaces/SPACE_ID/messages/MESSAGE_ID"     } } ``` |
| A user becomes a space manager. | `  google.workspace.chat.membership.v1.updated  ` | Includes resource data:  ``` {     "membership":     {         "name": "spaces/SPACE_ID/members/MEMBER_ID",         "state": "JOINED",         "member":         {             "name": "users/USER_ID",             "type": "HUMAN"         },         "createTime": "1970-01-01T00:00:00Z",         "role": "ROLE_MANAGER"     } } ```  Excludes resource data:  ``` {     "membership":     {         "name": "spaces/SPACE_ID/members/MEMBER_ID"     } } ``` |
| A user updates the description of the space to "Sales team for Cymbal Labs." | `google.workspace.chat.space.v1.updated` | Includes resource data:  ``` {     "space":     {         "name": "spaces/SPACE_ID",         "displayName": "Cymbal Sales",         "spaceThreadingState": "THREADED_MESSAGES",         "spaceType": "SPACE",         "spaceDetails":         {             "description": "Sales team for Cymbal Labs."         },         "spaceHistoryState": "HISTORY_ON"     } } ```  Excludes resource data:  ``` {     "space":     {         "name": "spaces/SPACE_ID"     } } ``` |
| Two Chat users were added to the space at the same time. | `google.workspace.chat.membership.v1.batchCreated` | Includes resource data:  ``` {     "memberships": [         {           "membership": {             "name": "spaces/SPACE_ID/members/MEMBER_ID",             "state": "JOINED",             "member":             {                 "name": "users/USER_ID",                 "type": "HUMAN"             },             "createTime": "1970-01-01T00:00:00Z",             "role": "ROLE_MEMBER"           }         },         {           "membership": {             "name": "spaces/SPACE_ID/members/MEMBER_ID",             "state": "JOINED",             "member":             {                 "name": "users/USER_ID",                 "type": "HUMAN"             },             "createTime": "1970-01-01T00:00:00Z",             "role": "ROLE_MEMBER"           }         }     ] } ```  Excludes resource data:  ``` {     "memberships": [         {           "membership": {             "name": "spaces/SPACE_ID/members/MEMBER_ID"           }         },         {           "membership": {             "name": "spaces/SPACE_ID/members/MEMBER_ID"           }         }     ] } ``` |
| A user reacts to a message with the 😊 emoji. | `google.workspace.chat.reaction.v1.created` | Includes resource data:  ``` {     "reaction":     {         "name": "spaces/SPACE_ID/messages/MESSAGE_ID/reactions/REACTION_ID",         "user":         {             "name": "users/USER_ID",             "type": "HUMAN"         },         "emoji":         {             "unicode": "😊"         }     } } ```  Excludes resource data:  ``` {     "reaction":     {         "name": "spaces/SPACE_ID/messages/MESSAGE_ID/reactions/REACTION_ID"     } } ``` |
| Users react to a message with the 😊 emoji and 😸 emoji. | `google.workspace.chat.reaction.v1.batchCreated` | Includes resource data:  ``` {     "reactions": [         {           "reaction": {             "name": "spaces/SPACE_ID/messages/MESSAGE_ID/reactions/REACTION_ID",             "user":             {                 "name": "users/USER_ID",                 "type": "HUMAN"             },             "emoji":             {                 "unicode": "😊"             }           }         },         {           "reaction": {             "name": "spaces/SPACE_ID/messages/MESSAGE_ID/reactions/REACTION_ID",             "user":             {                 "name": "users/USER_ID",                 "type": "HUMAN"             },             "emoji":             {                 "unicode": "😸"             }           }         }     ] } ```  Excludes resource data:  ``` {     "reactions": [       {         "reaction": {             "name": "spaces/SPACE_ID/messages/MESSAGE_ID/reactions/REACTION_ID"         },         "reaction": {             "name": "spaces/SPACE_ID/messages/MESSAGE_ID/reactions/REACTION_ID",         }       }     ] } ``` |

## Limitations

- For subscriptions to users, events about new members in direct messages or unnamed group chats (`google.workspace.chat.membership.v1.created`), only trigger after the first message is posted.
- To receive membership events, the user or Chat app must be a direct member of the space. If they were added, updated, or removed indirectly to a space through a Google Group, the subscription doesn't receive those membership events. To understand how Google Group memberships work, see [Add a Google Group to a space](https://support.google.com/chat/answer/13535086).

## Related topics

- [Choose OAuth scopes](./auth.md)
- [Create a subscription](./create-subscription.md) to receive Chat events
