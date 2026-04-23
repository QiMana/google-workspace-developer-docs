---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/search_threads
root: workspace
fetched_at: 2026-04-23T15:28:55.663Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: search\_threads

Lists email threads from the authenticated user's Gmail account.

This tool can filter threads based on a query string and supports pagination. It returns a list of threads, including their IDs and related messages. Each related message contains details like a snippet of the message body, the subject, the sender, the recipients etc. Note that the full message bodies are not returned by this tool; use the 'get\_thread' tool with a thread ID to fetch the full message body if needed.

The following sample demonstrate how to use `curl` to invoke the `search_threads` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "search_threads",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for SearchThreads RPC.

### SearchThreadsRequest

JSON representation

```
{

  "pageSize": integer

  "pageToken": string

  "query": string

  "includeTrash": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>_page_size</code>.</p><p><code>_page_size</code> can be only one of the following:</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of threads to return. If unspecified, defaults to 20. The maximum allowed value is 50.</p></td></tr><tr><td colspan="2"><p>Union field <code>_page_token</code>.</p><p><code>_page_token</code> can be only one of the following:</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. Page token to retrieve a specific page of results in the list. Leave empty to fetch the first page.</p></td></tr><tr><td colspan="2"><p>Union field <code>_query</code>.</p><p><code>_query</code> can be only one of the following:</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Optional. A query string to filter the threads, using the same format as the Gmail search bar. If omitted, all threads (excluding spam and trash by default) are listed. Key Operators: from:<email> - Messages from a specific sender. to:<email> - Messages sent to a specific recipient. subject:<words> - Messages with specific words in the subject. <words>- Messages containing specific words in the body or subject. is:unread - Unread messages. is:starred - Starred messages. has:attachment - Messages with attachments. after:YYYY/MM/DD - Messages sent after a date. before:YYYY/MM/DD - Messages sent before a date. newer_than: <time>- Messages newer than a duration (e.g., 7d for 7 days). AND / OR - Combine terms (must be uppercase). -" <words>" - Exclude messages containing these words. " <exact>" - Search for an exact phrase.</exact></words></time></words></words></email></email></p><div><pre><code>Examples:
"subject:OneMCP Update"
"from:gduser1@workspacesamples.dev"
"to:gduser2@workspacesamples.dev AND newer_than:7d"
"project proposal has:attachment"
"is:unread"</code></pre></div></td></tr><tr><td colspan="2"><p>Union field <code>_include_trash</code>.</p><p><code>_include_trash</code> can be only one of the following:</p></td></tr><tr><td><code>includeTrash</code></td><td><p><code>boolean</code></p><p>Optional. Include drafts from TRASH in the results. Defaults to false.</p></td></tr></tbody></table>

## Output Schema

Response message for SearchThreads RPC.

### SearchThreadsResponse

JSON representation

```
{
  "threads": [
    {
      object (Thread)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>threads[]</code></td><td><p><code>object (<code>Thread</code>)</code></p><p>List of thread summaries.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that can be used in a subsequent call to retrieve the next page of threads. Present only if there are more results.</p></td></tr></tbody></table>

### Thread

JSON representation

```
{
  "id": string,
  "messages": [
    {
      object (Message)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique identifier of the thread.</p></td></tr><tr><td><code>messages[]</code></td><td><p><code>object (<code>Message</code>)</code></p><p>A list of messages in the thread, ordered chronologically.</p></td></tr></tbody></table>

### Message

JSON representation

```
{
  "id": string,
  "snippet": string,
  "subject": string,
  "sender": string,
  "toRecipients": [
    string
  ],
  "ccRecipients": [
    string
  ],
  "date": string,
  "plaintextBody": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique identifier of the message.</p></td></tr><tr><td><code>snippet</code></td><td><p><code>string</code></p><p>Snippet of the message body.</p></td></tr><tr><td><code>subject</code></td><td><p><code>string</code></p><p>The message subject extracted from headers:</p></td></tr><tr><td><code>sender</code></td><td><p><code>string</code></p><p>Sender email address.</p></td></tr><tr><td><code>toRecipients[]</code></td><td><p><code>string</code></p><p>To recipient email addresses.</p></td></tr><tr><td><code>ccRecipients[]</code></td><td><p><code>string</code></p><p>CC recipient email addresses.</p></td></tr><tr><td><code>date</code></td><td><p><code>string</code></p><p>Date of the message in ISO 8601 format (YYYY-MM-DD).</p></td></tr><tr><td><code>plaintextBody</code></td><td><p><code>string</code></p><p>Full body content, only populated if MessageFormat was FULL_CONTENT.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
