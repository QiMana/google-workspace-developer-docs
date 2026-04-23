---
source: https://developers.google.com/workspace/calendar/api/v3/reference/channels/stop
root: workspace
fetched_at: 2026-04-23T15:24:54.046Z
---

# Channels: stop

Stop watching resources through this channel.

## Request

### HTTP request

```
POST https://www.googleapis.com/calendar/v3/channels/stop
```

### Request body

In the request body, supply data with the following structure:

```
{
  "id": string,
  "resourceId": string
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `id` | `string` | A UUID or similar unique string that identifies this channel. |  |
| `resourceId` | `string` | An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. |  |
| `token` | `string` | An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. |  |

## Response

If successful, this method returns an empty response body.
