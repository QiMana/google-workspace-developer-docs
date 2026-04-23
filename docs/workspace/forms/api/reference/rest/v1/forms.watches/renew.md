---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.watches/renew
root: workspace
fetched_at: 2026-04-23T15:28:46.174Z
---

# Method: forms.watches.renew

Renew an existing watch for seven days. The of the watch after renewal is `ACTIVE`, and the `expireTime` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, watches.renew returns `NOT_FOUND`.

### HTTP request

`POST https://forms.googleapis.com/v1/forms/{formId}/watches/{watchId}:renew`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. The ID of the Form.</p></td></tr><tr><td><code>watchId</code></td><td><p><code>string</code></p><p>Required. The ID of the Watch to renew.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.readonly`
- `           https://www.googleapis.com/auth/forms.body`
- `           https://www.googleapis.com/auth/forms.body.readonly`
- `           https://www.googleapis.com/auth/forms.responses.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
