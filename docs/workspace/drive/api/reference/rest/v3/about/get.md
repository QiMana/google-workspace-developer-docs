---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/about/get
root: workspace
fetched_at: 2026-04-23T15:27:58.752Z
---

# Method: about.get

Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](../../../../guides/user-info.md).

Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](../../../../guides/fields-parameter.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/about`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
