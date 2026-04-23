---
source: https://developers.google.com/workspace/gmail/api/reference/mcp
root: workspace
fetched_at: 2026-04-23T15:28:55.033Z
---

# MCP Reference: gmailmcp.googleapis.com

This is an MCP server provided by Gmail API. The server provides tools for developers to build LLM applications on top of Gmail.

A [Model Context Protocol (MCP) server](https://modelcontextprotocol.io/docs/learn/server-concepts) acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.

### Server Setup

You must [configure the Gmail MCP server](../guides/configure-mcp-server.md) before use. For more information about using Google and Google Cloud remote MCP servers, see [Google Cloud MCP servers overview](https://docs.cloud.google.com/mcp/overview).

### Server Endpoints

An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.

The Gmail API MCP server has the following global MCP endpoint:

- https://gmailmcp.googleapis.com/mcp/v1

## MCP Tools

An [MCP tool](https://modelcontextprotocol.io/legacy/concepts/tools) is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.

### Tools

The gmailmcp.googleapis.com MCP server has the following tools:

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">MCP Tools</th></tr></thead><tbody><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/create_draft">create_draft</a></td><td><p>Creates a new draft email in the authenticated user's Gmail account.</p><p>This tool takes recipient addresses, a subject, and body content as inputs. It returns the ID of the created Gmail draft.</p></td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/list_drafts">list_drafts</a></td><td><p>Lists draft emails from the authenticated user's Gmail account.</p><p>This tool can filter drafts based on a query string and supports pagination. It returns a list of drafts, including their IDs and subjects.</p></td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/get_thread">get_thread</a></td><td>Retrieves a specific email thread from the authenticated user's Gmail account, including a list of its messages.</td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/search_threads">search_threads</a></td><td><p>Lists email threads from the authenticated user's Gmail account.</p><p>This tool can filter threads based on a query string and supports pagination. It returns a list of threads, including their IDs and related messages. Each related message contains details like a snippet of the message body, the subject, the sender, the recipients etc. Note that the full message bodies are not returned by this tool; use the 'get_thread' tool with a thread ID to fetch the full message body if needed.</p></td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/label_thread">label_thread</a></td><td><p>Adds labels to an entire thread in the authenticated user's Gmail account. This operation affects all messages currently in the thread and any future messages added to it.</p><p>If unsure of the thread ID, use the <code>search_threads</code> tool first.</p><p>If unsure of a user label's ID, use the <code>list_labels</code> tool first to discover available labels and their IDs.</p></td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/unlabel_thread">unlabel_thread</a></td><td>Removes labels from an entire thread in the authenticated user's Gmail account. If unsure of the thread ID, use the <code>search_threads</code> tool first. If unsure of a user label's ID, use the <code>list_labels</code> tool first.</td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/list_labels">list_labels</a></td><td>Lists all user-defined labels available in the authenticated user's Gmail account. Use this tool to discover the <code>id</code> of a user label before calling <code>label_thread</code>, <code>unlabel_thread</code>, <code>label_message</code>, or <code>unlabel_message</code>. System labels are not returned by this tool but can be used with their well-known IDs: 'INBOX', 'TRASH', 'SPAM', 'STARRED', 'UNREAD', 'IMPORTANT', 'CHAT', 'DRAFT', 'SENT'.</td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/label_message">label_message</a></td><td><p>Adds one or more labels to a specific message in the authenticated user's Gmail account.</p><p>To find the message ID, use tools like <code>search_threads</code> or <code>get_thread</code>. If unsure of a user label's ID, use the <code>list_labels</code> tool first to discover available labels and their IDs.</p></td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/unlabel_message">unlabel_message</a></td><td>Removes one or more labels from a specific message in the authenticated user's Gmail account. To find the message ID, use tools like <code>search_threads</code> or <code>get_thread</code>. If unsure of a user label's ID, use the <code>list_labels</code> tool first to discover available labels and their IDs.</td></tr><tr><td><a href="https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/create_label">create_label</a></td><td>Creates a new label in the authenticated user's Gmail account.</td></tr></tbody></table>

### Get MCP tool specifications

To get the MCP tool specifications for all tools in an MCP server, use the `tools/list` method. The following example demonstrates how to use `curl` to list all tools and their specifications currently available within the MCP server.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp/v1' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
    "method": "tools/list",
    "jsonrpc": "2.0",
    "id": 1
}'
```
