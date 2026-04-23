---
source: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/list
root: workspace
fetched_at: 2026-04-23T15:28:39.101Z
---

# Method: subscriptions.list

## Page Summary

- Lists existing Google Workspace subscriptions, allowing developers to manage event delivery configurations.
- Provides filtering options by event types and target resources for refined subscription retrieval.
- Uses pagination to handle large result sets, enabling retrieval of subscriptions in manageable chunks.
- Requires specific authorization scopes for access, ensuring secure management of sensitive data.
- Available within the Google Workspace Developer Preview Program, offering early access to this functionality.

Lists Google Workspace subscriptions. To learn how to use this method, see [List Google Workspace subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions).

### HTTP request

`GET https://workspaceevents.googleapis.com/v1beta/subscriptions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of subscriptions to return. The service might return fewer than this value.</p><p>If unspecified or set to <code>0</code>, up to 50 subscriptions are returned.</p><p>The maximum value is 100. If you specify a value more than 100, the system only returns 100 subscriptions.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list subscriptions call. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Required. A query filter.</p><p>You can filter subscriptions by event type (<code>event_types</code>) and target resource (<code>target_resource</code>).</p><p>You must specify at least one event type in your query. To filter for multiple event types, use the <code>OR</code> operator.</p><p>To filter by both event type and target resource, use the <code>AND</code> operator and specify the full resource name, such as <code>//chat.googleapis.com/spaces/{space}</code>.</p><p>For example, the following queries are valid:</p><div><pre><code>event_types:"google.workspace.chat.membership.v1.updated" OR
  event_types:"google.workspace.chat.message.v1.created"

event_types:"google.workspace.chat.message.v1.created" AND
  target_resource="//chat.googleapis.com/spaces/{space}"

( event_types:"google.workspace.chat.membership.v1.updated" OR
  event_types:"google.workspace.chat.message.v1.created" ) AND
  target_resource="//chat.googleapis.com/spaces/{space}"</code></pre></div><p>The server rejects invalid queries with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response message for `SubscriptionsService.ListSubscriptions`.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "subscriptions": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subscriptions[]</code></td><td><p>List of subscriptions.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>pageToken</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `           https://www.googleapis.com/auth/chat.spaces`
- `           https://www.googleapis.com/auth/chat.spaces.readonly`
- `           https://www.googleapis.com/auth/chat.messages`
- `           https://www.googleapis.com/auth/chat.messages.readonly`
- `           https://www.googleapis.com/auth/chat.messages.reactions`
- `           https://www.googleapis.com/auth/chat.messages.reactions.readonly`
- `           https://www.googleapis.com/auth/chat.memberships`
- `           https://www.googleapis.com/auth/chat.memberships.readonly`
- `           https://www.googleapis.com/auth/meetings.space.created`
- `           https://www.googleapis.com/auth/meetings.space.readonly`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
