---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/list
root: workspace
fetched_at: 2026-04-23T15:25:04.006Z
---

# Method: customEmojis.list

## Page Summary

- Lists custom emojis visible to the authenticated user, requiring user authentication and specific authorization scopes.
- Allows filtering by creator to see emojis created by the calling user or others.
- Supports pagination to retrieve large lists of custom emojis, with a default page size of 25 and a maximum of 200.
- Returns a list of custom emojis and a token for retrieving subsequent pages if available.
- Requires an empty request body and provides a structured JSON response containing emoji details.

Lists custom emojis visible to the authenticated user.

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis.readonly`
- `https://www.googleapis.com/auth/chat.customemojis`

### HTTP request

`GET https://chat.googleapis.com/v1/customEmojis`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of custom emojis returned. The service can return fewer custom emojis than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. (If resuming from a previous query.)</p><p>A page token received from a previous list custom emoji call. Provide this to retrieve the subsequent page.</p><p>When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>Supports filtering by creator.</p><p>To filter by creator, you must specify a valid value. Currently only <code>creator("users/me")</code> and <code>NOT creator("users/me")</code> are accepted to filter custom emojis by whether they were created by the calling user or not.</p><p>For example, the following query returns custom emojis created by the caller:</p><div><pre><code>creator("users/me")</code></pre></div><p>Invalid queries are rejected with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A response to list custom emojis.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "customEmojis": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>customEmojis[]</code></td><td><p>Unordered list. List of custom emojis.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that you can send as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.customemojis`
- `https://www.googleapis.com/auth/chat.customemojis.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
