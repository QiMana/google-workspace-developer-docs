---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/get
root: workspace
fetched_at: 2026-04-23T15:26:03.433Z
---

# Method: invitations.get

Returns an invitation.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `NOT_FOUND` if no invitation exists with the requested ID.

### HTTP request

`GET https://classroom.googleapis.com/v1/invitations/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the invitation to return.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.rosters.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
