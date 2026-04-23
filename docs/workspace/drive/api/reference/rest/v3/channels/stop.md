---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/channels/stop
root: workspace
fetched_at: 2026-04-23T15:28:01.489Z
---

# Method: channels.stop

Stops watching resources through this channel. For more information, see [Notifications for resource changes](../../../../guides/push.md).

### HTTP request

`POST https://www.googleapis.com/drive/v3/channels/stop`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.apps`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
