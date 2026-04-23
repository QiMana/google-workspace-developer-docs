---
source: https://developers.google.com/workspace/chat/api/reference/rest
root: workspace
fetched_at: 2026-04-23T15:24:58.882Z
---

# Google Chat API

## Page Summary

- The Google Chat API enables the development of Chat apps to integrate services with Google Chat.
- It allows management of Chat resources such as spaces, members, and messages through various REST resources.
- Developers can leverage client libraries or utilize the provided discovery document and service endpoint for API requests.
- Features like custom emojis and space notification settings are currently in Developer Preview and may be subject to change.
- The API facilitates actions like creating, reading, updating, and deleting Chat entities and provides access to user read states and space events.

The Google Chat API lets you build Chat apps to integrate your services with Google Chat and manage Chat resources such as spaces, members, and messages.

## Service: chat.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://chat.googleapis.com/$discovery/rest?version=v1](https://chat.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://chat.googleapis.com`

## REST Resource: v1.customEmojis

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/customEmojis</code><br>Creates a custom emoji.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=customEmojis/*}</code><br>Deletes a custom emoji.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=customEmojis/*}</code><br>Returns details about a custom emoji.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/customEmojis</code><br>Lists custom emojis visible to the authenticated user.</td></tr></tbody></table>

## REST Resource: v1.media

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>download</code></td><td><code>GET /v1/media/{resourceName=**}</code><br>Downloads media.</td></tr><tr><td><code>upload</code></td><td><code>POST /upload/v1/{parent=spaces/*}/attachments:upload</code><br>Uploads an attachment.</td></tr></tbody></table>

## REST Resource: v1.spaces

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>completeImport</code></td><td><code>POST /v1/{name=spaces/*}:completeImport</code><br>Completes the <a href="https://developers.google.com/workspace/chat/import-data">import process</a> for the specified space and makes it visible to users.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/spaces</code><br>Creates a space.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=spaces/*}</code><br>Deletes a named space.</td></tr><tr><td><code>findDirectMessage</code></td><td><code>GET /v1/spaces:findDirectMessage</code><br>Returns the existing direct message with the specified user.</td></tr><tr><td><code>findGroupChats</code></td><td><code>GET /v1/spaces:findGroupChats</code><br>Returns all spaces with <code>spaceType == GROUP_CHAT</code>, whose human memberships contain exactly the calling user, and the users specified in <code>FindGroupChatsRequest.users</code>.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=spaces/*}</code><br>Returns details about a space.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/spaces</code><br>Lists spaces the caller is a member of.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{space.name=spaces/*}</code><br>Updates a space.</td></tr><tr><td><code>search</code></td><td><code>GET /v1/spaces:search</code><br>Returns a list of spaces in a Google Workspace organization based on an administrator's search.</td></tr><tr><td><code>setup</code></td><td><code>POST /v1/spaces:setup</code><br>Creates a space and adds specified users to it.</td></tr></tbody></table>

## REST Resource: v1.spaces.members

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/{parent=spaces/*}/members</code><br>Creates a membership for the calling Chat app, a user, or a Google Group.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=spaces/*/members/*}</code><br>Deletes a membership.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=spaces/*/members/*}</code><br>Returns details about a membership.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=spaces/*}/members</code><br>Lists memberships in a space.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{membership.name=spaces/*/members/*}</code><br>Updates a membership.</td></tr></tbody></table>

## REST Resource: v1.spaces.messages

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/{parent=spaces/*}/messages</code><br>Creates a message in a Google Chat space.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=spaces/*/messages/*}</code><br>Deletes a message.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=spaces/*/messages/*}</code><br>Returns details about a message.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=spaces/*}/messages</code><br>Lists messages in a space that the caller is a member of, including messages from blocked members and spaces.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{message.name=spaces/*/messages/*}</code><br>Updates a message.</td></tr><tr><td><code>replaceCards</code></td><td><code>POST /v1/{name=spaces/*/messages/*}:replaceCards</code><br>Replaces the cards included in a message.</td></tr><tr><td><code>update</code></td><td><code>PUT /v1/{message.name=spaces/*/messages/*}</code><br>Updates a message.</td></tr></tbody></table>

## REST Resource: v1.spaces.messages.attachments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/{name=spaces/*/messages/*/attachments/*}</code><br>Gets the metadata of a message attachment.</td></tr></tbody></table>

## REST Resource: v1.spaces.messages.reactions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/{parent=spaces/*/messages/*}/reactions</code><br>Creates a reaction and adds it to a message.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=spaces/*/messages/*/reactions/*}</code><br>Deletes a reaction to a message.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=spaces/*/messages/*}/reactions</code><br>Lists reactions to a message.</td></tr></tbody></table>

## REST Resource: v1.spaces.spaceEvents

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/{name=spaces/*/spaceEvents/*}</code><br>Returns an event from a Google Chat space.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=spaces/*}/spaceEvents</code><br>Lists events from a Google Chat space.</td></tr></tbody></table>

## REST Resource: v1.users.sections

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/{parent=users/*}/sections</code><br>Creates a section in Google Chat.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=users/*/sections/*}</code><br>Deletes a section of type <code>CUSTOM_SECTION</code>.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=users/*}/sections</code><br>Lists sections available to the Chat user.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{section.name=users/*/sections/*}</code><br>Updates a section.</td></tr><tr><td><code>position</code></td><td><code>POST /v1/{name=users/*/sections/*}:position</code><br>Changes the sort order of a section.</td></tr></tbody></table>

## REST Resource: v1.users.sections.items

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /v1/{parent=users/*/sections/*}/items</code><br>Lists items in a section.</td></tr><tr><td><code>move</code></td><td><code>POST /v1/{name=users/*/sections/*/items/*}:move</code><br>Moves an item from one section to another.</td></tr></tbody></table>

## REST Resource: v1.users.spaces

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getSpaceReadState</code></td><td><code>GET /v1/{name=users/*/spaces/*/spaceReadState}</code><br>Returns details about a user's read state within a space, used to identify read and unread messages.</td></tr><tr><td><code>updateSpaceReadState</code></td><td><code>PATCH /v1/{spaceReadState.name=users/*/spaces/*/spaceReadState}</code><br>Updates a user's read state within a space, used to identify read and unread messages.</td></tr></tbody></table>

## REST Resource: v1.users.spaces.spaceNotificationSetting

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/{name=users/*/spaces/*/spaceNotificationSetting}</code><br>Gets the space notification setting.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{spaceNotificationSetting.name=users/*/spaces/*/spaceNotificationSetting}</code><br>Updates the space notification setting.</td></tr></tbody></table>

## REST Resource: v1.users.spaces.threads

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getThreadReadState</code></td><td><code>GET /v1/{name=users/*/spaces/*/threads/*/threadReadState}</code><br>Returns details about a user's read state within a thread, used to identify read and unread messages.</td></tr></tbody></table>
