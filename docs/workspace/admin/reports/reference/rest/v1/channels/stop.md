---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/channels/stop
root: workspace
fetched_at: 2026-04-23T15:24:01.332Z
---

# Method: channels.stop

Stop watching resources through this channel.

### HTTP request

`POST https://www.googleapis.com/admin/reports/v1/channels/stop`

### Request body

JSON representation

```
{
  "id": string,
  "resourceId": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>A UUID or similar unique string that identifies this channel.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.</p></td></tr></tbody></table>

### Response body

If successful, this method returns an empty response body.
