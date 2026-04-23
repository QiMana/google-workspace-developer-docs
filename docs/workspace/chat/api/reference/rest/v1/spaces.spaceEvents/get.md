---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents/get
root: workspace
fetched_at: 2026-04-23T15:25:07.751Z
---

# Method: spaces.spaceEvents.get

## Page Summary

- This request returns an event from a Google Chat space, providing the most recent version of the changed resource in the payload.
- To get an event, the authenticated user must be a member of the space and use the `GET` method with the specified URL structure.
- The request body should be empty, and a successful response returns a `SpaceEvent` object.
- This action requires specific OAuth scopes related to Google Chat spaces, messages, memberships, and reactions for authorization.

Returns an event from a Google Chat space. The [event payload](../spaces.spaceEvents.md#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload.

Note: The `permissionSettings` field is not returned in the Space object of the Space event data for this request.

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

To get an event, the authenticated caller must be a member of the space.

For an example, see [Get details about an event from a Google Chat space](../../../../../get-space-event.md).

### HTTP request

`GET https://chat.googleapis.com/v1/{name=spaces/*/spaceEvents/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the space event.</p><p>Format: <code>spaces/{space}/spaceEvents/{spaceEvent}</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

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
