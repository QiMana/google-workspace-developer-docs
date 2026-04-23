---
source: https://developers.google.com/workspace/calendar/api/v3/reference/mcp
root: workspace
fetched_at: 2026-04-23T15:24:56.358Z
---

# MCP Reference: calendarmcp.googleapis.com

This is an MCP server provided by Google Calendar API. The server provides tools for developers to build LLM applications on top of Calendar.

A [Model Context Protocol (MCP) server](https://modelcontextprotocol.io/docs/learn/server-concepts) acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.

### Server Setup

You must [configure the Calendar MCP server](../../guides/configure-mcp-server.md) before use. For more information about using Google and Google Cloud remote MCP servers, see [Google Cloud MCP servers overview](https://docs.cloud.google.com/mcp/overview).

### Server Endpoints

An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.

The Calendar API MCP server has the following global MCP endpoint:

- https://calendarmcp.googleapis.com/mcp/v1

## MCP Tools

An [MCP tool](https://modelcontextprotocol.io/legacy/concepts/tools) is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.

### Tools

The calendarmcp.googleapis.com MCP server has the following tools:

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">MCP Tools</th></tr></thead><tbody><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/list_events">list_events</a></td><td><p>Lists calendar events in a given calendar satisfying the given conditions.</p><p>Key Features:</p><ul><li>Any Calendar ID, which can be user's primary calendar or others.</li><li>Keyword matching.</li><li>Time range filtering.</li><li>Retrieves ALL events matching the time and keyword constraints.</li></ul><p>Use search_events tool instead if:</p><ul><li>You need to find the (top K) most relevant events rather than all events satisfying the constraints.</li><li>You need semantic search capabilities.</li><li>You are searching only the user's primary calendar for specific information.</li></ul><p>Use this tool for queries like:</p><ul><li>What's on my calendar tomorrow?</li><li>What's on my calendar for July 14th 2025?</li><li>What are my meetings next week?</li><li>Do I have any conflicts this afternoon?</li></ul><p>Example:</p><div><pre><code>list_events(
    start_time='2024-09-17T06:00:00',
    end_time='2024-09-17T12:00:00',
    page_size=10
)
# Returns up to 10 calendar events between 6:00 AM and 12:00 PM on September 17, 2024 from the user's primary calendar.</code></pre></div></td></tr><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/get_event">get_event</a></td><td><p>Returns a single event from a given calendar.</p><p>Use this tool for queries like:</p><ul><li>Get details for the team meeting.</li><li>Show me the event with id event123 on my calendar.</li></ul><p>Example:</p><div><pre><code>get_event(
    event_id='event123'
)
# Returns the event details for the event with id `event123` on the user's primary calendar.</code></pre></div></td></tr><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/list_calendars">list_calendars</a></td><td><p>Returns the calendars on the user's calendar list.</p><p>Use this tool for queries like:</p><ul><li>What are all my calendars?</li></ul><p>Example:</p><div><pre><code>list_calendars()
# Returns all calendars the authenticated user has access to.</code></pre></div></td></tr><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/suggest_time">suggest_time</a></td><td><p>Suggests time periods across one or more calendars. To access the primary calendar, add 'primary' in the attendee_emails field.</p><p>Use this tool for queries like:</p><ul><li>When are all of us free for a meeting?</li><li>Find a 30 minute slot where we are both available.</li><li>Check if <a href="mailto:jane.doe@google.com">jane.doe@google.com</a> is free on Monday morning.</li></ul><p>Example:</p><div><pre><code>suggest_time(
    attendee_emails=['joedoe@gmail.com', 'janedoe@gmail.com'],
    start_time='2024-09-10T00:00:00',
    end_time='2024-09-17T00:00:00',
    duration_minutes=60,
    preferences={
        'start_hour': '09:00',
        'end_hour': '17:00',
        'exclude_weekends': True
    }
)
# Returns up to 5 suggested time slots where both users are available for at least one hour between 9:00 AM and 5:00 PM on weekdays from September 10 through September 16, 2024.</code></pre></div></td></tr><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/create_event">create_event</a></td><td><p>Creates a calendar event.</p><p>Use this tool for queries like:</p><ul><li>Create an event on my calendar for tomorrow at 2pm called 'Meeting with Jane'.</li><li>Schedule a meeting with <a href="mailto:john.doe@google.com">john.doe@google.com</a> next Monday from 10am to 11am.</li></ul><p>Example:</p><div><pre><code>create_event(
    summary='Meeting with Jane',
    start_time='2024-09-17T14:00:00',
    end_time='2024-09-17T15:00:00'
)
# Creates an event on the primary calendar for September 17, 2024 from 2pm to 3pm called 'Meeting with Jane'.</code></pre></div></td></tr><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/update_event">update_event</a></td><td><p>Updates a calendar event.</p><p>Use this tool for queries like:</p><ul><li>Update the event 'Meeting with Jane' to be one hour later.</li><li>Add <a href="mailto:john.doe@google.com">john.doe@google.com</a> to the meeting tomorrow.</li></ul><p>Example:</p><div><pre><code>update_event(
    event_id='event123',
    summary='Meeting with Jane and John'
)
# Updates the summary of event with id 'event123' on the primary calendar to 'Meeting with Jane and John'.</code></pre></div></td></tr><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/delete_event">delete_event</a></td><td><p>Deletes a calendar event.</p><p>Use this tool for queries like:</p><ul><li>Delete the event with id event123 on my calendar.</li></ul><p>To cancel or decline an event, use the respond_to_event tool instead.</p><p>Example:</p><div><pre><code>delete_event(
    event_id='event123'
)
# Deletes the event with id 'event123' on the user's primary calendar.</code></pre></div></td></tr><tr><td><a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/respond_to_event">respond_to_event</a></td><td><p>Responds to an event.</p><p>Use this tool for queries like:</p><ul><li>Accept the event with id event123 on my calendar.</li><li>Decline the meeting with Jane.</li><li>Cancel my next meeting.</li><li>Tentatively accept the planing meeting.</li></ul><p>Example:</p><div><pre><code>respond_to_event(
    event_id='event123',
    response_status='accepted'
)
# Responds with status 'accepted' to the event with id 'event123' on the user's primary calendar.</code></pre></div></td></tr></tbody></table>

### Get MCP tool specifications

To get the MCP tool specifications for all tools in an MCP server, use the `tools/list` method. The following example demonstrates how to use `curl` to list all tools and their specifications currently available within the MCP server.

Curl Request

```
curl --location 'https://calendarmcp.googleapis.com/mcp/v1' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
    "method": "tools/list",
    "jsonrpc": "2.0",
    "id": 1
}'
```
