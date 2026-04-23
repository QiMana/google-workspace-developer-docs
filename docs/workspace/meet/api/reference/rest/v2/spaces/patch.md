---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/patch
root: workspace
fetched_at: 2026-04-23T15:30:32.037Z
---

# Method: spaces.patch

Updates details about a meeting space.

For an example, see [Update a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#update-meeting-space).

### HTTP request

`PATCH https://meet.googleapis.com/v2/{space.name=spaces/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>space.name</code></td><td><p><code>string</code></p><p>Immutable. Resource name of the space.</p><p>Format: <code>spaces/{space}</code>.</p><p><code>{space}</code> is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, <code>jQCFfuBOdN5z</code>.</p><p>For more information, see <a href="https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space">How Meet identifies a meeting space</a>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Optional. Field mask used to specify the fields to be updated in the space. If updateMask isn't provided(not set, set with empty paths, or only has "" as paths), it defaults to update all fields provided with values in the request. Using "*" as updateMask will update all fields, including deleting fields not set in the request.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.settings`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
