---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections/delete
root: workspace
fetched_at: 2026-04-23T15:25:08.951Z
---

# Method: users.sections.delete

Deletes a section of type `CUSTOM_SECTION`.

If the section contains items, such as spaces, the items are moved to Google Chat's default sections and are not deleted.

For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

### HTTP request

`DELETE https://chat.googleapis.com/v1/{name=users/*/sections/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The name of the section to delete.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
