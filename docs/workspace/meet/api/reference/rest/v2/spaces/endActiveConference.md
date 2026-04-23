---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/endActiveConference
root: workspace
fetched_at: 2026-04-23T15:30:32.420Z
---

# Method: spaces.endActiveConference

Ends an active conference (if there's one).

For an example, see [End active conference](../../../../guides/meeting-spaces.md#end-active-conference).

### HTTP request

`POST https://meet.googleapis.com/v2/{name=spaces/*}:endActiveConference`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space.</p><p>Format: <code>spaces/{space}</code>.</p><p><code>{space}</code> is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, <code>jQCFfuBOdN5z</code>.</p><p>For more information, see <a href="https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space">How Meet identifies a meeting space</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/meetings.space.created`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
