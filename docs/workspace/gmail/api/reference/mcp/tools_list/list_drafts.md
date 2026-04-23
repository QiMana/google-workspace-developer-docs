---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/list_drafts
root: workspace
fetched_at: 2026-04-23T15:28:55.770Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: list\_drafts

Lists draft emails from the authenticated user's Gmail account.

This tool can filter drafts based on a query string and supports pagination. It returns a list of drafts, including their IDs and subjects.

The following sample demonstrate how to use `curl` to invoke the `list_drafts` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "list_drafts",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for ListDrafts RPC.

### ListDraftsRequest

JSON representation

```
{

  "pageSize": integer

  "pageToken": string

  "query": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>_page_size</code>.</p><p><code>_page_size</code> can be only one of the following:</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of drafts to return. If unspecified, defaults to 20. The maximum allowed value is 50.</p></td></tr><tr><td colspan="2"><p>Union field <code>_page_token</code>.</p><p><code>_page_token</code> can be only one of the following:</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A token received from a previous list_drafts call to retrieve the next page of results. Leave empty to fetch the first page.</p></td></tr><tr><td colspan="2"><p>Union field <code>_query</code>.</p><p><code>_query</code> can be only one of the following:</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Optional. A query string to filter the drafts, using the same format as the Gmail search bar. If omitted, all drafts (excluding spam and trash by default) are listed. Key Operators: from:<email> - Messages from a specific sender. to:<email> - Messages sent to a specific recipient. subject:<words> - Messages with specific words in the subject. <words>- Messages containing specific words in the body or subject. is:unread - Unread messages. is:starred - Starred messages. has:attachment - Messages with attachments. after:YYYY/MM/DD - Messages sent after a date. before:YYYY/MM/DD - Messages sent before a date. newer_than: <time>- Messages newer than a duration (e.g., 7d for 7 days). AND / OR - Combine terms (must be uppercase). -" <words>" - Exclude messages containing these words. " <exact>" - Search for an exact phrase.</exact></words></time></words></words></email></email></p><div><pre><code>Examples:
"subject:OneMCP Update"
"from:gduser1@workspacesamples.dev"
"to:gduser2@workspacesamples.dev AND newer_than:7d"
"project proposal has:attachment"
"is:unread"</code></pre></div></td></tr></tbody></table>

## Output Schema

Response message for ListDrafts RPC.

### ListDraftsResponse

JSON representation

```
{
  "drafts": [
    {
      object (Draft)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>drafts[]</code></td><td><p><code>object (<code>Draft</code>)</code></p><p>List of drafts.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that can be used in a subsequent call to retrieve the next page of drafts. Present only if there are more results.</p></td></tr></tbody></table>

### Draft

JSON representation

```
{
  "id": string,
  "subject": string,
  "threadId": string,
  "toRecipients": [
    string
  ],
  "ccRecipients": [
    string
  ],
  "bccRecipients": [
    string
  ],
  "plaintextBody": string,
  "date": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique identifier of the draft resource.</p></td></tr><tr><td><code>subject</code></td><td><p><code>string</code></p><p>The subject line of the draft message.</p></td></tr><tr><td><code>threadId</code></td><td><p><code>string</code></p><p>The ID of the thread this draft belongs to.</p></td></tr><tr><td><code>toRecipients[]</code></td><td><p><code>string</code></p><p>List of 'To' recipient email addresses extracted from headers.</p></td></tr><tr><td><code>ccRecipients[]</code></td><td><p><code>string</code></p><p>List of 'Cc' recipient email addresses extracted from headers.</p></td></tr><tr><td><code>bccRecipients[]</code></td><td><p><code>string</code></p><p>List of 'Bcc' recipient email addresses extracted from headers.</p></td></tr><tr><td><code>plaintextBody</code></td><td><p><code>string</code></p><p>Plain text body content, if available.</p></td></tr><tr><td><code>date</code></td><td><p><code>string</code></p><p>Date of the draft in ISO 8601 format (YYYY-MM-DD).</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
