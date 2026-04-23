---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces/create
root: workspace
fetched_at: 2026-04-23T15:30:32.682Z
---

# Method: spaces.create

## Method: spaces.create

Creates a space.

### HTTP request

`POST https://meet.googleapis.com/v2/spaces`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains an instance of `Space`.

### Response body

If successful, the response body contains a newly created instance of `Space`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/meetings.space.created`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
