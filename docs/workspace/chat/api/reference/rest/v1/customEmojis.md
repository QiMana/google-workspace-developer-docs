---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis
root: workspace
fetched_at: 2026-04-23T15:25:03.871Z
---

# REST Resource: customEmojis

## Page Summary

- This documentation outlines the `CustomEmoji` resource, representing a custom emoji within Google Chat, including its properties and JSON representation.
- It describes the `CustomEmojiPayload`, detailing the data required for creating a custom emoji, specifically focusing on image content and filename.
- Developers can utilize the provided methods to create, delete, retrieve, or list custom emojis using the Google Chat API.
- These functionalities are currently part of the Google Workspace Developer Preview Program, granting early access for testing and development purposes.

## Resource: CustomEmoji

Represents a [custom emoji](https://support.google.com/chat/answer/12800149).

JSON representation

```
{
  "name": string,
  "uid": string,
  "emojiName": string,
  "temporaryImageUri": string,
  "payload": {
    object (CustomEmojiPayload)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the custom emoji, assigned by the server.</p><p>Format: <code>customEmojis/{customEmoji}</code></p></td></tr><tr><td><code>uid</code></td><td><p><code>string</code></p><p>Output only. Unique key for the custom emoji resource.</p></td></tr><tr><td><code>emojiName</code></td><td><p><code>string</code></p><p>Optional. Immutable. User-provided name for the custom emoji, which is unique within the organization.</p><p>Required when the custom emoji is created, output only otherwise.</p><p>Emoji names must start and end with colons, must be lowercase and can only contain alphanumeric characters, hyphens, and underscores. Hyphens and underscores should be used to separate words and cannot be used consecutively.</p><p>Example: <code>:valid-emoji-name:</code></p></td></tr><tr><td><code>temporaryImageUri</code></td><td><p><code>string</code></p><p>Output only. A temporary image URL for the custom emoji, valid for at least 10 minutes. Note that this is not populated in the response when the custom emoji is created.</p></td></tr><tr><td><code>payload</code></td><td><p><code>object (<code>CustomEmojiPayload</code>)</code></p><p>Optional. Input only. Payload data. Required when the custom emoji is created.</p></td></tr></tbody></table>

### CustomEmojiPayload

Payload data for the custom emoji.

JSON representation

```
{
  "fileContent": string,
  "filename": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fileContent</code></td><td><p><code>string (bytes format)</code></p><p>Required. Input only. The image used for the custom emoji.</p><p>The payload must be under 256 KB and the dimension of the image must be square and between 64 and 500 pixels. The restrictions are subject to change.</p></td></tr><tr><td><code>filename</code></td><td><p><code>string</code></p><p>Required. Input only. The image file name.</p><p>Supported file extensions: <code>.png</code>, <code>.jpg</code>, <code>.gif</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a custom emoji.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a custom emoji.</td></tr><tr><td><h3>get</h3></td><td>Returns details about a custom emoji.</td></tr><tr><td><h3>list</h3></td><td>Lists custom emojis visible to the authenticated user.</td></tr></tbody></table>
