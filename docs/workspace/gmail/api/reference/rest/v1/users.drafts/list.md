---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list
root: workspace
fetched_at: 2026-04-23T15:28:58.217Z
---

# Method: users.drafts.list

Lists the drafts in the user's mailbox. For more information, see [Create and send draft emails](../../../../guides/drafts.md).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/drafts`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer (uint32 format)</code></p><p>Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve a specific page of results in the list.</p></td></tr><tr><td><code>q</code></td><td><p><code>string</code></p><p>Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
                  is:unread"</code>.</p></td></tr><tr><td><code>includeSpamTrash</code></td><td><p><code>boolean</code></p><p>Include drafts from <code>SPAM</code> and <code>TRASH</code> in the results.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "drafts": [
    {
      
    }
  ],
  "nextPageToken": string,
  "resultSizeEstimate": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>drafts[]</code></td><td><p>List of drafts. Note that the <code>Message</code> property in each <code>Draft</code> resource only contains an <code>id</code> and a <code>threadId</code>. The <a href="https://developers.google.com/workspace/gmail/api/v1/reference/users/messages/get"><code>messages.get</code></a> method can fetch additional message details.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results in the list.</p></td></tr><tr><td><code>resultSizeEstimate</code></td><td><p><code>integer (uint32 format)</code></p><p>Estimated total number of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.compose`
- `           https://www.googleapis.com/auth/gmail.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
