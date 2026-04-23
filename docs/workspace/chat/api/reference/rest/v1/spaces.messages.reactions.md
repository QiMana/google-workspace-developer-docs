---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions
root: workspace
fetched_at: 2026-04-23T15:25:06.445Z
---

# REST Resource: spaces.messages.reactions

## Page Summary

- A Reaction represents a response to a message, containing information about the user, the emoji used, and a unique identifier.
- Reactions can be created, deleted, and listed using the provided API methods.
- The `user` field is output-only and indicates who created the reaction, while the `emoji` field is required and specifies the emoji used.

## Resource: Reaction

A reaction to a message.

JSON representation

```
{
  "name": string,
  "user": {
    object (User)
  },
  "emoji": {
    object (Emoji)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the reaction.</p><p>Format: <code>spaces/{space}/messages/{message}/reactions/{reaction}</code></p></td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The user who created the reaction.</p></td></tr><tr><td><code>emoji</code></td><td><p><code>object (<code>Emoji</code>)</code></p><p>Required. The emoji used in the reaction.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a reaction and adds it to a message.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a reaction to a message.</td></tr><tr><td><h3>list</h3></td><td>Lists reactions to a message.</td></tr></tbody></table>
