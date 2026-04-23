---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections/position
root: workspace
fetched_at: 2026-04-23T15:25:10.235Z
---

# Method: users.sections.position

Changes the sort order of a section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

### HTTP request

`POST https://chat.googleapis.com/v1/{name=users/*/sections/*}:position`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the section to position.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{

  "sortOrder": integer,
  "relativePosition": enum (Position)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>position</code>. Required. The new position of the section. <code>position</code> can be only one of the following:</td></tr><tr><td><code>sortOrder</code></td><td><p><code>integer</code></p><p>Optional. The absolute position of the section in the list of sections. The position must be greater than 0. If the position is greater than the number of sections, the section will be appended to the end of the list. This operation inserts the section at the given position and shifts the original section at that position, and those below it, to the next position.</p></td></tr><tr><td><code>relativePosition</code></td><td><p><code>enum (<code>Position</code>)</code></p><p>Optional. The relative position of the section in the list of sections.</p></td></tr></tbody></table>

### Response body

Response message for positioning a section.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "section": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>section</code></td><td><p>The updated section.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).

## Position

The position of the section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>POSITION_UNSPECIFIED</code></td><td>Unspecified position.</td></tr><tr><td><code>START</code></td><td>Start of the list of sections.</td></tr><tr><td><code>END</code></td><td>End of the list of sections.</td></tr></tbody></table>
