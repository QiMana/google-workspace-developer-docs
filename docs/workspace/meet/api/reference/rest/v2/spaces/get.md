---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/get
root: workspace
fetched_at: 2026-04-23T15:30:32.350Z
---

# Method: spaces.get

Gets details about a meeting space.

For an example, see [Get a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#get-meeting-space).

### HTTP request

`GET https://meet.googleapis.com/v2/{name=spaces/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space.</p><p>Format: <code>spaces/{space}</code> or <code>spaces/{meetingCode}</code>.</p><p><code>{space}</code> is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, <code>jQCFfuBOdN5z</code>.</p><p><code>{meetingCode}</code> is an alias for the space. It's a typeable, unique character string and is non-case sensitive. For example, <code>abc-mnop-xyz</code>. The maximum length is 128 characters.</p><p>A <code>meetingCode</code> shouldn't be stored long term as it can become dissociated from a meeting space and can be reused for different meeting spaces in the future. Generally, a <code>meetingCode</code> expires 365 days after last use. For more information, see <a href="https://support.google.com/meet/answer/10710509">Learn about meeting codes in Google Meet</a>.</p><p>For more information, see <a href="https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space">How Meet identifies a meeting space</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/meetings.space.created`
- `https://www.googleapis.com/auth/meetings.space.readonly`
- `https://www.googleapis.com/auth/meetings.space.settings`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
