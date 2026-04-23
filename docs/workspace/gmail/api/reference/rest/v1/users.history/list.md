---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list
root: workspace
fetched_at: 2026-04-23T15:28:58.087Z
---

# Method: users.history.list

Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`). For more information, see [Synchronize clients with Gmail](../../../../guides/sync.md).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/history`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer (uint32 format)</code></p><p>Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve a specific page of results in the list.</p></td></tr><tr><td><code>startHistoryId</code></td><td><p><code>string</code></p><p>Required. Returns history records after the specified <code>startHistoryId</code>. The supplied <code>startHistoryId</code> should be obtained from the <code>historyId</code> of a message, thread, or previous <code>list</code> response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date <code>startHistoryId</code> typically returns an <code>HTTP 404</code> error code. A <code>historyId</code> is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an <code>HTTP 404</code> error response, your application should perform a full sync. If you receive no <code>nextPageToken</code> in the response, there are no updates to retrieve and you can store the returned <code>historyId</code> for a future request.</p></td></tr><tr><td><code>labelId</code></td><td><p><code>string</code></p><p>Only return messages with a label matching the ID.</p></td></tr><tr><td><code>historyTypes[]</code></td><td><p><code>enum (<code>HistoryType</code>)</code></p><p>History types to be returned by the function</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "history": [
    {
      object (History)
    }
  ],
  "nextPageToken": string,
  "historyId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>history[]</code></td><td><p><code>object (<code>History</code>)</code></p><p>List of history records. Any <code>messages</code> contained in the response will typically only have <code>id</code> and <code>threadId</code> fields populated.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve the next page of results in the list.</p></td></tr><tr><td><code>historyId</code></td><td><p><code>string</code></p><p>The ID of the mailbox's current history record.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.metadata`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## HistoryType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>messageAdded</code></td><td></td></tr><tr><td><code>messageDeleted</code></td><td></td></tr><tr><td><code>labelAdded</code></td><td></td></tr><tr><td><code>labelRemoved</code></td><td></td></tr></tbody></table>

## History

A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.

JSON representation

```
{
  "id": string,
  "messages": [
    {
      object (Message)
    }
  ],
  "messagesAdded": [
    {
      object (MessageAdded)
    }
  ],
  "messagesDeleted": [
    {
      object (MessageDeleted)
    }
  ],
  "labelsAdded": [
    {
      object (LabelAdded)
    }
  ],
  "labelsRemoved": [
    {
      object (LabelRemoved)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The mailbox sequence ID.</p></td></tr><tr><td><code>messages[]</code></td><td><p><code>object (<code>Message</code>)</code></p><p>List of messages changed in this history record. The fields for specific change types, such as <code>messagesAdded</code> may duplicate messages in this field. We recommend using the specific change-type fields instead of this.</p></td></tr><tr><td><code>messagesAdded[]</code></td><td><p><code>object (<code>MessageAdded</code>)</code></p><p>Messages added to the mailbox in this history record.</p></td></tr><tr><td><code>messagesDeleted[]</code></td><td><p><code>object (<code>MessageDeleted</code>)</code></p><p>Messages deleted (not Trashed) from the mailbox in this history record.</p></td></tr><tr><td><code>labelsAdded[]</code></td><td><p><code>object (<code>LabelAdded</code>)</code></p><p>Labels added to messages in this history record.</p></td></tr><tr><td><code>labelsRemoved[]</code></td><td><p><code>object (<code>LabelRemoved</code>)</code></p><p>Labels removed from messages in this history record.</p></td></tr></tbody></table>

## MessageAdded

JSON representation

```
{
  "message": {
    object (Message)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p></td></tr></tbody></table>

## MessageDeleted

JSON representation

```
{
  "message": {
    object (Message)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p></td></tr></tbody></table>

## LabelAdded

JSON representation

```
{
  "message": {
    object (Message)
  },
  "labelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>Label IDs added to the message.</p></td></tr></tbody></table>

## LabelRemoved

JSON representation

```
{
  "message": {
    object (Message)
  },
  "labelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>Label IDs removed from the message.</p></td></tr></tbody></table>
