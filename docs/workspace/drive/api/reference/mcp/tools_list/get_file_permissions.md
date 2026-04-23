---
source: https://developers.google.com/workspace/drive/api/reference/mcp/tools_list/get_file_permissions
root: workspace
fetched_at: 2026-04-23T15:27:46.719Z
---

# MCP Tools Reference: drivemcp.googleapis.com

## Tool: get\_file\_permissions

Call this tool to list the permissions of a Drive File.

The following sample demonstrate how to use `curl` to invoke the `get_file_permissions` MCP tool.

Curl Request

```
curl --location 'https://drivemcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "get_file_permissions",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request to get file permissions.

### GetFilePermissionsRequest

JSON representation

```
{
  "fileId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file to get permissions for.</p></td></tr></tbody></table>

## Output Schema

Response to get file permissions.

### GetFilePermissionsResponse

JSON representation

```
{
  "permissions": [
    {
      object (Permission)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>permissions[]</code></td><td><p><code>object (<code>Permission</code>)</code></p><p>The list of permissions.</p></td></tr></tbody></table>

### Permission

JSON representation

```
{

  "role": string

  "displayName": string

  "type": string

  "emailAddress": string

  "view": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>_role</code>.</p><p><code>_role</code> can be only one of the following:</p></td></tr><tr><td><code>role</code></td><td><p><code>string</code></p><p>The role of the grantee for the file. The possible roles include: * <code>owner</code> * <code>organizer</code> * <code>fileOrganizer</code> * <code>writer</code> * <code>commenter</code> * <code>reader</code></p></td></tr><tr><td colspan="2"><p>Union field <code>_display_name</code>.</p><p><code>_display_name</code> can be only one of the following:</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * <code>user</code> - User's full name, as defined for their Google Account, such as "Dana A." * <code>group</code> - Name of the Google Group, such as "The Company Administrators." * <code>domain</code> - String domain name, such as "cymbalgroup.com." * <code>anyone</code> - No <code>displayName</code> is present.</p></td></tr><tr><td colspan="2"><p>Union field <code>_type</code>.</p><p><code>_type</code> can be only one of the following:</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The type of the grantee. Supported values include: * <code>user</code> * <code>group</code> * <code>domain</code> * <code>anyone</code></p></td></tr><tr><td colspan="2"><p>Union field <code>_email_address</code>.</p><p><code>_email_address</code> can be only one of the following:</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>The email address of the user or group to which this permission refers.</p></td></tr><tr><td colspan="2"><p>Union field <code>_view</code>.</p><p><code>_view</code> can be only one of the following:</p></td></tr><tr><td><code>view</code></td><td><p><code>string</code></p><p>Specifies the view to which this permission applies, if any. Supported values include: * <code>published</code> * <code>metadata</code></p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
