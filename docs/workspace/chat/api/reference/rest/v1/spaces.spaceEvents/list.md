---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents/list
root: workspace
fetched_at: 2026-04-23T15:25:07.945Z
---

# Method: spaces.spaceEvents.list

## Page Summary

- Lists events from a specified Google Chat space, including new members, messages, and reactions, with the payload containing the most recent version of the resource.
- Requires user authentication and membership in the space to list events, returning data chronologically with optional pagination.
- Allows filtering by event types, start time, and end time to refine the results of the listed events.
- The response includes an array of space events and a token for retrieving subsequent pages if available.
- Needs specific authorization scopes for accessing and retrieving the chat space data.

Lists events from a Google Chat space. For each event, the [payload](../spaces.spaceEvents.md#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the Chat resource. For example, if you list events about new space members, the server returns `Membership` resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty `Membership` resource.

Supports the following types of [authentication](../../../../../authenticate-authorize.md) with an [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes) appropriate for reading the requested data:

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.spaces`
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`
		- `https://www.googleapis.com/auth/chat.app.memberships`
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`
		- `https://www.googleapis.com/auth/chat.messages.readonly`
		- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`
		- `https://www.googleapis.com/auth/chat.messages.reactions`
		- `https://www.googleapis.com/auth/chat.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.memberships`

To list events, the authenticated caller must be a member of the space.

For an example, see [List events from a Google Chat space](../../../../../list-space-events.md).

### HTTP request

`GET https://chat.googleapis.com/v1/{parent=spaces/*}/spaceEvents`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Resource name of the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces">Google Chat space</a> where the events occurred.</p><p>Format: <code>spaces/{space}</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of space events returned. The service might return fewer than this value.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list space events call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided to list space events must match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Required. A query filter.</p><p>You must specify at least one event type (<code>eventType</code>) using the has <code>:</code> operator. To filter by multiple event types, use the <code>OR</code> operator. Omit batch event types in your filter. The request automatically returns any related batch events. For example, if you filter by new reactions (<code>google.workspace.chat.reaction.v1.created</code>), the server also returns batch new reactions events (<code>google.workspace.chat.reaction.v1.batchCreated</code>). For a list of supported event types, see the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.event_type"><code>SpaceEvents</code> reference documentation</a>.</p><p>Optionally, you can also filter by start time (<code>startTime</code>) and end time (<code>endTime</code>):</p><ul><li><code>startTime</code>: Exclusive timestamp from which to start listing space events. You can list events that occurred up to 28 days ago. If unspecified, lists space events from the past 28 days.</li><li><code>endTime</code>: Inclusive timestamp until which space events are listed. If unspecified, lists events up to the time of the request.</li></ul><p>To specify a start or end time, use the equals <code>=</code> operator and format in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC-3339</a>. To filter by both <code>startTime</code> and <code>endTime</code>, use the <code>AND</code> operator.</p><p>For example, the following queries are valid:</p><div><pre><code>startTime="2023-08-23T19:20:33+00:00" AND
endTime="2023-08-23T19:21:54+00:00"</code></pre></div><div><pre><code>startTime="2023-08-23T19:20:33+00:00" AND
(eventTypes:"google.workspace.chat.space.v1.updated" OR
eventTypes:"google.workspace.chat.message.v1.created")</code></pre></div><p>The following queries are invalid:</p><div><pre><code>startTime="2023-08-23T19:20:33+00:00" OR
endTime="2023-08-23T19:21:54+00:00"</code></pre></div><div><pre><code>eventTypes:"google.workspace.chat.space.v1.updated" AND
eventTypes:"google.workspace.chat.message.v1.created"</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for listing space events.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spaceEvents": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaceEvents[]</code></td><td><p>Results are returned in chronological order (oldest event first). Note: The <code>permissionSettings</code> field is not returned in the Space object for list requests.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Continuation token used to fetch more events. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
- `https://www.googleapis.com/auth/chat.app.messages.readonly`
- `https://www.googleapis.com/auth/chat.app.spaces`
- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
