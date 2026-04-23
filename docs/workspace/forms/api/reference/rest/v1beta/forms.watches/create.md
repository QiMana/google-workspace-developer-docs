---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1beta/forms.watches/create
root: workspace
fetched_at: 2026-04-23T15:28:47.974Z
---

# Method: forms.watches.create

Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per `Watch.EventType`. A watch expires seven days after it is created (see `Watch.expire_time`).

### HTTP request

`POST https://forms.googleapis.com/v1beta/forms/{formId}/watches`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. ID of the Form to watch.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "watch": {
    object (Watch)
  },
  "watchId": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>watch</code></td><td><p><code>object (<code>Watch</code>)</code></p><p>Required. The watch object. No ID should be set on this object; use <code>watchId</code> instead.</p></td></tr><tr><td><code>watchId</code></td><td><p><code>string</code></p><p>The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains a newly created instance of `Watch`.

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.readonly`
- `           https://www.googleapis.com/auth/forms.body`
- `           https://www.googleapis.com/auth/forms.body.readonly`
- `           https://www.googleapis.com/auth/forms.responses.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
