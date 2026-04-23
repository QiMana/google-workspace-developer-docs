---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create
root: workspace
fetched_at: 2026-04-23T15:25:01.525Z
---

# Method: customEmojis.create

## Page Summary

- This Developer Preview feature enables the creation of custom emojis in Google Chat.
- It necessitates user authentication and uses the `chat.customemojis` OAuth scope.
- The feature functions through an HTTP POST request, utilizing gRPC Transcoding, and involves request and response bodies containing the `CustomEmoji` object.
- To explore its functionality, refer to the "Try it!" section within the documentation.

Creates a custom emoji.

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis`

### HTTP request

`POST https://chat.googleapis.com/v1/customEmojis`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.customemojis`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
