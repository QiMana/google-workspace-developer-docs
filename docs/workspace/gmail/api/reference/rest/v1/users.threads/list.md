---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/list
root: workspace
fetched_at: 2026-04-23T15:29:06.102Z
---

# Method: users.threads.list

Lists the threads in the user's mailbox. For more information, see [Manage threads](../../../../guides/threads.md).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/threads`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer (uint32 format)</code></p><p>Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve a specific page of results in the list.</p></td></tr><tr><td><code>q</code></td><td><p><code>string</code></p><p>Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
                  is:unread"</code>. Parameter cannot be used when accessing the api using the gmail.metadata scope.</p></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>Only return threads with labels that match all of the specified label IDs.</p></td></tr><tr><td><code>includeSpamTrash</code></td><td><p><code>boolean</code></p><p>Include threads from <code>SPAM</code> and <code>TRASH</code> in the results.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

JSON representation

```
{
  "threads": [
    {
      
    }
  ],
  "nextPageToken": string,
  "resultSizeEstimate": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>threads[]</code></td><td><p>List of threads. Note that each thread resource does not contain a list of <code>messages</code>. The list of <code>messages</code> for a given thread can be fetched using the <a href="https://developers.google.com/workspace/gmail/api/v1/reference/users/threads/get"><code>threads.get</code></a> method.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve the next page of results in the list.</p></td></tr><tr><td><code>resultSizeEstimate</code></td><td><p><code>integer (uint32 format)</code></p><p>Estimated total number of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.metadata`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
