---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents
root: workspace
fetched_at: 2026-04-23T15:25:07.688Z
---

# REST Resource: spaces.spaceEvents

## Page Summary

- `SpaceEvent` resources represent changes or activities within Google Chat spaces, encompassing messages, memberships, reactions, and space updates.
- Each `SpaceEvent` includes details like resource name, event time, event type, and a payload specific to the event type.
- Event types are categorized based on the affected resource (message, membership, reaction, or space) and whether they involve single or batch changes.
- You can retrieve individual space events using the `get` method or list multiple events based on criteria using the `list` method.
- Refer to the [Work with events from Google Chat](https://developers.google.com/workspace/chat/events-overview) documentation for comprehensive guidance on using space events.

## Resource: SpaceEvent

An event that represents a change or activity in a Google Chat space. To learn more, see [Work with events from Google Chat](https://developers.google.com/workspace/chat/events-overview).

JSON representation

```
{
  "name": string,
  "eventTime": string,
  "eventType": string,

  "messageCreatedEventData": {
    object (MessageCreatedEventData)
  },
  "messageUpdatedEventData": {
    object (MessageUpdatedEventData)
  },
  "messageDeletedEventData": {
    object (MessageDeletedEventData)
  },
  "messageBatchCreatedEventData": {
    object (MessageBatchCreatedEventData)
  },
  "messageBatchUpdatedEventData": {
    object (MessageBatchUpdatedEventData)
  },
  "messageBatchDeletedEventData": {
    object (MessageBatchDeletedEventData)
  },
  "spaceUpdatedEventData": {
    object (SpaceUpdatedEventData)
  },
  "spaceBatchUpdatedEventData": {
    object (SpaceBatchUpdatedEventData)
  },
  "membershipCreatedEventData": {
    object (MembershipCreatedEventData)
  },
  "membershipUpdatedEventData": {
    object (MembershipUpdatedEventData)
  },
  "membershipDeletedEventData": {
    object (MembershipDeletedEventData)
  },
  "membershipBatchCreatedEventData": {
    object (MembershipBatchCreatedEventData)
  },
  "membershipBatchUpdatedEventData": {
    object (MembershipBatchUpdatedEventData)
  },
  "membershipBatchDeletedEventData": {
    object (MembershipBatchDeletedEventData)
  },
  "reactionCreatedEventData": {
    object (ReactionCreatedEventData)
  },
  "reactionDeletedEventData": {
    object (ReactionDeletedEventData)
  },
  "reactionBatchCreatedEventData": {
    object (ReactionBatchCreatedEventData)
  },
  "reactionBatchDeletedEventData": {
    object (ReactionBatchDeletedEventData)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name of the space event.</p><p>Format: <code>spaces/{space}/spaceEvents/{spaceEvent}</code></p></td></tr><tr><td><code>eventTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Time when the event occurred.</p></td></tr><tr><td><code>eventType</code></td><td><p><code>string</code></p><p>Type of space event. Each event type has a batch version, which represents multiple instances of the event type that occur in a short period of time. For <code>spaceEvents.list()</code> requests, omit batch event types in your query filter. By default, the server returns both event type and its batch version.</p><p>Supported event types for <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages">messages</a>:</p><ul><li>New message: <code>google.workspace.chat.message.v1.created</code></li><li>Updated message: <code>google.workspace.chat.message.v1.updated</code></li><li>Deleted message: <code>google.workspace.chat.message.v1.deleted</code></li><li>Multiple new messages: <code>google.workspace.chat.message.v1.batchCreated</code></li><li>Multiple updated messages: <code>google.workspace.chat.message.v1.batchUpdated</code></li><li>Multiple deleted messages: <code>google.workspace.chat.message.v1.batchDeleted</code></li></ul><p>Supported event types for <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members">memberships</a>:</p><ul><li>New membership: <code>google.workspace.chat.membership.v1.created</code></li><li>Updated membership: <code>google.workspace.chat.membership.v1.updated</code></li><li>Deleted membership: <code>google.workspace.chat.membership.v1.deleted</code></li><li>Multiple new memberships: <code>google.workspace.chat.membership.v1.batchCreated</code></li><li>Multiple updated memberships: <code>google.workspace.chat.membership.v1.batchUpdated</code></li><li>Multiple deleted memberships: <code>google.workspace.chat.membership.v1.batchDeleted</code></li></ul><p>Supported event types for <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions">reactions</a>:</p><ul><li>New reaction: <code>google.workspace.chat.reaction.v1.created</code></li><li>Deleted reaction: <code>google.workspace.chat.reaction.v1.deleted</code></li><li>Multiple new reactions: <code>google.workspace.chat.reaction.v1.batchCreated</code></li><li>Multiple deleted reactions: <code>google.workspace.chat.reaction.v1.batchDeleted</code></li></ul><ul><li>Updated space: <code>google.workspace.chat.space.v1.updated</code></li><li>Multiple space updates: <code>google.workspace.chat.space.v1.batchUpdated</code></li></ul></td></tr><tr><td colspan="2"><p>Union field <code>payload</code>.</p><p><code>payload</code> can be only one of the following:</p></td></tr><tr><td><code>messageCreatedEventData</code></td><td><p><code>object (<code>MessageCreatedEventData</code>)</code></p><p>Event payload for a new message.</p><p>Event type: <code>google.workspace.chat.message.v1.created</code></p></td></tr><tr><td><code>messageUpdatedEventData</code></td><td><p><code>object (<code>MessageUpdatedEventData</code>)</code></p><p>Event payload for an updated message.</p><p>Event type: <code>google.workspace.chat.message.v1.updated</code></p></td></tr><tr><td><code>messageDeletedEventData</code></td><td><p><code>object (<code>MessageDeletedEventData</code>)</code></p><p>Event payload for a deleted message.</p><p>Event type: <code>google.workspace.chat.message.v1.deleted</code></p></td></tr><tr><td><code>messageBatchCreatedEventData</code></td><td><p><code>object (<code>MessageBatchCreatedEventData</code>)</code></p><p>Event payload for multiple new messages.</p><p>Event type: <code>google.workspace.chat.message.v1.batchCreated</code></p></td></tr><tr><td><code>messageBatchUpdatedEventData</code></td><td><p><code>object (<code>MessageBatchUpdatedEventData</code>)</code></p><p>Event payload for multiple updated messages.</p><p>Event type: <code>google.workspace.chat.message.v1.batchUpdated</code></p></td></tr><tr><td><code>messageBatchDeletedEventData</code></td><td><p><code>object (<code>MessageBatchDeletedEventData</code>)</code></p><p>Event payload for multiple deleted messages.</p><p>Event type: <code>google.workspace.chat.message.v1.batchDeleted</code></p></td></tr><tr><td><code>spaceUpdatedEventData</code></td><td><p><code>object (<code>SpaceUpdatedEventData</code>)</code></p><p>Event payload for a space update.</p><p>Event type: <code>google.workspace.chat.space.v1.updated</code></p></td></tr><tr><td><code>spaceBatchUpdatedEventData</code></td><td><p><code>object (<code>SpaceBatchUpdatedEventData</code>)</code></p><p>Event payload for multiple updates to a space.</p><p>Event type: <code>google.workspace.chat.space.v1.batchUpdated</code></p></td></tr><tr><td><code>membershipCreatedEventData</code></td><td><p><code>object (<code>MembershipCreatedEventData</code>)</code></p><p>Event payload for a new membership.</p><p>Event type: <code>google.workspace.chat.membership.v1.created</code></p></td></tr><tr><td><code>membershipUpdatedEventData</code></td><td><p><code>object (<code>MembershipUpdatedEventData</code>)</code></p><p>Event payload for an updated membership.</p><p>Event type: <code>google.workspace.chat.membership.v1.updated</code></p></td></tr><tr><td><code>membershipDeletedEventData</code></td><td><p><code>object (<code>MembershipDeletedEventData</code>)</code></p><p>Event payload for a deleted membership.</p><p>Event type: <code>google.workspace.chat.membership.v1.deleted</code></p></td></tr><tr><td><code>membershipBatchCreatedEventData</code></td><td><p><code>object (<code>MembershipBatchCreatedEventData</code>)</code></p><p>Event payload for multiple new memberships.</p><p>Event type: <code>google.workspace.chat.membership.v1.batchCreated</code></p></td></tr><tr><td><code>membershipBatchUpdatedEventData</code></td><td><p><code>object (<code>MembershipBatchUpdatedEventData</code>)</code></p><p>Event payload for multiple updated memberships.</p><p>Event type: <code>google.workspace.chat.membership.v1.batchUpdated</code></p></td></tr><tr><td><code>membershipBatchDeletedEventData</code></td><td><p><code>object (<code>MembershipBatchDeletedEventData</code>)</code></p><p>Event payload for multiple deleted memberships.</p><p>Event type: <code>google.workspace.chat.membership.v1.batchDeleted</code></p></td></tr><tr><td><code>reactionCreatedEventData</code></td><td><p><code>object (<code>ReactionCreatedEventData</code>)</code></p><p>Event payload for a new reaction.</p><p>Event type: <code>google.workspace.chat.reaction.v1.created</code></p></td></tr><tr><td><code>reactionDeletedEventData</code></td><td><p><code>object (<code>ReactionDeletedEventData</code>)</code></p><p>Event payload for a deleted reaction.</p><p>Event type: <code>google.workspace.chat.reaction.v1.deleted</code></p></td></tr><tr><td><code>reactionBatchCreatedEventData</code></td><td><p><code>object (<code>ReactionBatchCreatedEventData</code>)</code></p><p>Event payload for multiple new reactions.</p><p>Event type: <code>google.workspace.chat.reaction.v1.batchCreated</code></p></td></tr><tr><td><code>reactionBatchDeletedEventData</code></td><td><p><code>object (<code>ReactionBatchDeletedEventData</code>)</code></p><p>Event payload for multiple deleted reactions.</p><p>Event type: <code>google.workspace.chat.reaction.v1.batchDeleted</code></p></td></tr></tbody></table>

## MessageCreatedEventData

Event payload for a new message.

Event type: `google.workspace.chat.message.v1.created`

JSON representation

```
{
  "message": {
    object (Message)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p><p>The new message.</p></td></tr></tbody></table>

## MessageUpdatedEventData

Event payload for an updated message.

Event type: `google.workspace.chat.message.v1.updated`

JSON representation

```
{
  "message": {
    object (Message)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p><p>The updated message.</p></td></tr></tbody></table>

## MessageDeletedEventData

Event payload for a deleted message.

Event type: `google.workspace.chat.message.v1.deleted`

JSON representation

```
{
  "message": {
    object (Message)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p><p>The deleted message. Only the <code>name</code>, <code>createTime</code>, and <code>deletionMetadata</code> fields are populated.</p></td></tr></tbody></table>

## MessageBatchCreatedEventData

Event payload for multiple new messages.

Event type: `google.workspace.chat.message.v1.batchCreated`

JSON representation

```
{
  "messages": [
    {
      object (MessageCreatedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>object (<code>MessageCreatedEventData</code>)</code></p><p>A list of new messages.</p></td></tr></tbody></table>

## MessageBatchUpdatedEventData

Event payload for multiple updated messages.

Event type: `google.workspace.chat.message.v1.batchUpdated`

JSON representation

```
{
  "messages": [
    {
      object (MessageUpdatedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>object (<code>MessageUpdatedEventData</code>)</code></p><p>A list of updated messages.</p></td></tr></tbody></table>

## MessageBatchDeletedEventData

Event payload for multiple deleted messages.

Event type: `google.workspace.chat.message.v1.batchDeleted`

JSON representation

```
{
  "messages": [
    {
      object (MessageDeletedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>object (<code>MessageDeletedEventData</code>)</code></p><p>A list of deleted messages.</p></td></tr></tbody></table>

## SpaceUpdatedEventData

Event payload for an updated space.

Event type: `google.workspace.chat.space.v1.updated`

JSON representation

```
{
  "space": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p>The updated space.</p></td></tr></tbody></table>

## SpaceBatchUpdatedEventData

Event payload for multiple updates to a space.

Event type: `google.workspace.chat.space.v1.batchUpdated`

JSON representation

```
{
  "spaces": [
    {
      object (SpaceUpdatedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p><code>object (<code>SpaceUpdatedEventData</code>)</code></p><p>A list of updated spaces.</p></td></tr></tbody></table>

## MembershipCreatedEventData

Event payload for a new membership.

Event type: `google.workspace.chat.membership.v1.created`.

JSON representation

```
{
  "membership": {
    object (Membership)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>membership</code></td><td><p><code>object (<code>Membership</code>)</code></p><p>The new membership.</p></td></tr></tbody></table>

## MembershipUpdatedEventData

Event payload for an updated membership.

Event type: `google.workspace.chat.membership.v1.updated`

JSON representation

```
{
  "membership": {
    object (Membership)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>membership</code></td><td><p><code>object (<code>Membership</code>)</code></p><p>The updated membership.</p></td></tr></tbody></table>

## MembershipDeletedEventData

Event payload for a deleted membership.

Event type: `google.workspace.chat.membership.v1.deleted`

JSON representation

```
{
  "membership": {
    object (Membership)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>membership</code></td><td><p><code>object (<code>Membership</code>)</code></p><p>The deleted membership. Only the <code>name</code> and <code>state</code> fields are populated.</p></td></tr></tbody></table>

## MembershipBatchCreatedEventData

Event payload for multiple new memberships.

Event type: `google.workspace.chat.membership.v1.batchCreated`

JSON representation

```
{
  "memberships": [
    {
      object (MembershipCreatedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p><code>object (<code>MembershipCreatedEventData</code>)</code></p><p>A list of new memberships.</p></td></tr></tbody></table>

## MembershipBatchUpdatedEventData

Event payload for multiple updated memberships.

Event type: `google.workspace.chat.membership.v1.batchUpdated`

JSON representation

```
{
  "memberships": [
    {
      object (MembershipUpdatedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p><code>object (<code>MembershipUpdatedEventData</code>)</code></p><p>A list of updated memberships.</p></td></tr></tbody></table>

## MembershipBatchDeletedEventData

Event payload for multiple deleted memberships.

Event type: `google.workspace.chat.membership.v1.batchDeleted`

JSON representation

```
{
  "memberships": [
    {
      object (MembershipDeletedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p><code>object (<code>MembershipDeletedEventData</code>)</code></p><p>A list of deleted memberships.</p></td></tr></tbody></table>

## ReactionCreatedEventData

Event payload for a new reaction.

Event type: `google.workspace.chat.reaction.v1.created`

JSON representation

```
{
  "reaction": {
    object (Reaction)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reaction</code></td><td><p><code>object (<code>Reaction</code>)</code></p><p>The new reaction.</p></td></tr></tbody></table>

## ReactionDeletedEventData

Event payload for a deleted reaction.

Type: `google.workspace.chat.reaction.v1.deleted`

JSON representation

```
{
  "reaction": {
    object (Reaction)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reaction</code></td><td><p><code>object (<code>Reaction</code>)</code></p><p>The deleted reaction.</p></td></tr></tbody></table>

## ReactionBatchCreatedEventData

Event payload for multiple new reactions.

Event type: `google.workspace.chat.reaction.v1.batchCreated`

JSON representation

```
{
  "reactions": [
    {
      object (ReactionCreatedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reactions[]</code></td><td><p><code>object (<code>ReactionCreatedEventData</code>)</code></p><p>A list of new reactions.</p></td></tr></tbody></table>

## ReactionBatchDeletedEventData

Event payload for multiple deleted reactions.

Event type: `google.workspace.chat.reaction.v1.batchDeleted`

JSON representation

```
{
  "reactions": [
    {
      object (ReactionDeletedEventData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reactions[]</code></td><td><p><code>object (<code>ReactionDeletedEventData</code>)</code></p><p>A list of deleted reactions.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Returns an event from a Google Chat space.</td></tr><tr><td><h3>list</h3></td><td>Lists events from a Google Chat space.</td></tr></tbody></table>
