---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji
root: workspace
fetched_at: 2026-04-23T15:25:00.386Z
---

# Emoji

## Page Summary

- ReactionEmoji resource represents an emoji used as a reaction to a message.
- Emoji content can be represented either by a unicode string for basic emojis or a CustomEmoji object for custom emojis.
- The content field is required and determines the type of emoji being used.

An emoji that is used as a reaction to a message.

JSON representation

```
{

  "unicode": string,
  "customEmoji": {
    object (CustomEmoji)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>content</code>. Required. The content of the emoji. <code>content</code> can be only one of the following:</td></tr><tr><td><code>unicode</code></td><td><p><code>string</code></p><p>Optional. A basic emoji represented by a unicode string.</p></td></tr><tr><td><code>customEmoji</code></td><td><p><code>object (<code>CustomEmoji</code>)</code></p><p>A custom emoji.</p></td></tr></tbody></table>
