---
source: https://developers.google.com/workspace/chat/api/reference/mcp
root: workspace
fetched_at: 2026-04-23T15:24:59.244Z
---

# MCP Reference: chatmcp.googleapis.com

Chat MCP API provides remote MCP for Google Chat features.

A [Model Context Protocol (MCP) server](https://modelcontextprotocol.io/docs/learn/server-concepts) acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.

### Server Setup

You must [configure the Chat MCP server](../guides/configure-mcp-server.md) before use. For more information about using Google and Google Cloud remote MCP servers, see [Google Cloud MCP servers overview](https://docs.cloud.google.com/mcp/overview).

### Server Endpoints

An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.

The Chat API MCP server has the following global MCP endpoint:

- https://chatmcp.googleapis.com/mcp/v1

## MCP Tools

An [MCP tool](https://modelcontextprotocol.io/legacy/concepts/tools) is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.

### Tools

The chatmcp.googleapis.com MCP server has the following tools:

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">MCP Tools</th></tr></thead><tbody><tr><td><a href="https://developers.google.com/workspace/chat/api/reference/mcp/tools_list/list_messages">list_messages</a></td><td>Retrieves messages from a specified Google Chat conversation (Space, direct message (DM) or group DM). Allows filtering by thread, time range, and number of messages. Additionally, the next page of messages can be retrieved to allow for more context. Private messages (messages only visible to a single user) are filtered out.</td></tr><tr><td><a href="https://developers.google.com/workspace/chat/api/reference/mcp/tools_list/search_conversations">search_conversations</a></td><td><p>Searches for Google Chat conversations by display name.</p><p>If only participants are provided, this tool finds 1:1 direct messages (if one participant is provided) or group chats (if multiple participants are provided) that include the specified participants and the calling user.</p><p>If only a query is provided, this tool searches for conversations where the query is a case-insensitive substring of the conversation's display name.</p><p>If both participants and query are provided, this tool finds conversations by participants and then filters them by display name.</p><p>If neither participants nor query are provided, this tool lists all conversations the calling user is a member of.</p><p>This tool only lists conversations the calling user is a member of.</p><p>IMPORTANT: An empty 'conversations' list does not mean there are no more results overall. If 'next_page_token' is present, more pages can be fetched. If you get an empty list but a 'next_page_token', ask the user if you should continue the searching.</p></td></tr></tbody></table>

### Get MCP tool specifications

To get the MCP tool specifications for all tools in an MCP server, use the `tools/list` method. The following example demonstrates how to use `curl` to list all tools and their specifications currently available within the MCP server.

Curl Request

```
curl --location 'https://chatmcp.googleapis.com/mcp/v1' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
    "method": "tools/list",
    "jsonrpc": "2.0",
    "id": 1
}'
```
