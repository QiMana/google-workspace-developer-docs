---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/replaceCards
root: workspace
fetched_at: 2026-04-23T15:25:08.319Z
---

# Method: spaces.messages.replaceCards

Replaces the cards included in a message.

A Chat app can only replace cards on a human-created message if the message already contains cards, and the cards were created by the app.

If the app replaces the cards with an empty list, the cards are removed. After removing the cards, the app cannot add cards back to the message.

Requires [app authentication](../../../../../authenticate-authorize-chat-app.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes): - `https://www.googleapis.com/auth/chat.bot`

### HTTP request

`POST https://chat.googleapis.com/v1/{name=spaces/*/messages/*}:replaceCards`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "cardsV2": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>cardsV2[]</code></td><td><p>Optional. An array of <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/cards">cards</a> to be included in the message. These cards will replace the existing cards of the message. If empty, the original cards included in the message will be cleared.</p></td></tr></tbody></table>

### Response body

If successful, the response body is empty.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
