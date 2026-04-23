---
source: https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/list_calendars
root: workspace
fetched_at: 2026-04-23T15:24:55.757Z
---

# MCP Tools Reference: calendarmcp.googleapis.com

## Tool: list\_calendars

Returns the calendars on the user's calendar list.

Use this tool for queries like:

- What are all my calendars?

Example:

```
list_calendars()
        # Returns all calendars the authenticated user has access to.
```

The following sample demonstrate how to use `curl` to invoke the `list_calendars` MCP tool.

Curl Request

```
curl --location 'https://calendarmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "list_calendars",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

### ListCalendarsRequest

JSON representation

```
{

  "pageSize": integer

  "pageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>_page_size</code>.</p><p><code>_page_size</code> can be only one of the following:</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries.</p></td></tr><tr><td colspan="2"><p>Union field <code>_page_token</code>.</p><p><code>_page_token</code> can be only one of the following:</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. Token specifying which result page to return.</p></td></tr></tbody></table>

## Output Schema

### ListCalendarsResponse

JSON representation

```
{
  "calendars": [
    {
      object (Calendar)
    }
  ],

  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>calendars[]</code></td><td><p><code>object (<code>Calendar</code>)</code></p><p>List of calendars on the calendar list.</p></td></tr><tr><td colspan="2"><p>Union field <code>_next_page_token</code>.</p><p><code>_next_page_token</code> can be only one of the following:</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access the next page of this result. Omitted if no further results are available.</p></td></tr></tbody></table>

### Calendar

JSON representation

```
{
  "id": string,
  "summary": string,
  "description": string,
  "timeZone": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier. Identifier of the calendar.</p></td></tr><tr><td><code>summary</code></td><td><p><code>string</code></p><p>Title of the calendar. Read-only.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Description of the calendar. Optional. Read-only.</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>The time zone of the calendar. Optional. Read-only.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
