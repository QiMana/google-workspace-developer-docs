---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/AppCommandType
root: workspace
fetched_at: 2026-04-23T15:24:59.204Z
---

# AppCommandType

## Page Summary

- The provided content describes different types of app commands.
- `APP_COMMAND_TYPE_UNSPECIFIED` is the default value for an unspecified command type.
- `SLASH_COMMAND` represents a command sent via a slash in a message.
- `QUICK_COMMAND` is a command initiated by the user, often through an integration menu action.

The type of Chat app command. For details, see [Types of Chat app commands](https://developers.google.com/workspace/chat/commands#types).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>APP_COMMAND_TYPE_UNSPECIFIED</code></td><td>Default value. Unspecified.</td></tr><tr><td><code>SLASH_COMMAND</code></td><td>A slash command. The user sends the command in a Chat message.</td></tr><tr><td><code>QUICK_COMMAND</code></td><td>A quick command. The user selects the command from the Chat menu in the message reply area.</td></tr><tr><td><code>MESSAGE_ACTION</code></td><td>A message action. The user selects the command from the message context menu in Chat.</td></tr></tbody></table>
