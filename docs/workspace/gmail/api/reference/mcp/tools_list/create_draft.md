---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/create_draft
root: workspace
fetched_at: 2026-04-23T15:28:54.848Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: create\_draft

Creates a new draft email in the authenticated user's Gmail account.

This tool takes recipient addresses, a subject, and body content as inputs. It returns the ID of the created Gmail draft.

The following sample demonstrate how to use `curl` to invoke the `create_draft` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "create_draft",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for CreateDraft RPC.

### CreateDraftRequest

JSON representation

```
{
  "to": [
    string
  ],
  "cc": [
    string
  ],
  "bcc": [
    string
  ],
  "subject": string,
  "body": string,
  "htmlBody": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>to[]</code></td><td><p><code>string</code></p><p>Required. The primary recipients of the email draft. Each string MUST be a valid email address (e.g., "user@example.com"). The "Name <a href="mailto:email@example.com">email@example.com</a> " format is NOT supported by this tool.</p></td></tr><tr><td><code>cc[]</code></td><td><p><code>string</code></p><p>Optional. The carbon copy recipients of the email draft. Each string MUST be a valid email address (e.g., "user@example.com"). The "Name <a href="mailto:email@example.com">email@example.com</a> " format is NOT supported by this tool.</p></td></tr><tr><td><code>bcc[]</code></td><td><p><code>string</code></p><p>Optional. The blind carbon copy recipients of the email draft. Each string MUST be a valid email address (e.g., "user@example.com"). The "Name <a href="mailto:email@example.com">email@example.com</a> " format is NOT supported by this tool.</p></td></tr><tr><td><code>subject</code></td><td><p><code>string</code></p><p>Optional. The subject line of the email. Defaults to empty if not provided.</p></td></tr><tr><td><code>body</code></td><td><p><code>string</code></p><p>Optional. The main body content of the email draft. If html_body is also provided, this field is treated as the plain-text alternative.</p></td></tr><tr><td><code>htmlBody</code></td><td><p><code>string</code></p><p>The HTML content of the email draft. If provided, this will be used as the rich-text version of the email.</p></td></tr></tbody></table>

## Output Schema

Details of a draft.

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
