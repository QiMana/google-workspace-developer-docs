---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/delete
root: workspace
fetched_at: 2026-04-23T15:26:03.279Z
---

# Method: invitations.delete

Deletes an invitation.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for [access errors](../../../../troubleshooting/common-errors.md).
- `NOT_FOUND` if no invitation exists with the requested ID.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/invitations/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the invitation to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.rosters`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
