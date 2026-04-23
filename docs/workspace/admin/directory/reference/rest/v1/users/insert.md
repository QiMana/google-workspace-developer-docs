---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/insert
root: workspace
fetched_at: 2026-04-23T15:23:45.840Z
---

# Method: users.insert

Creates a user.

Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case.

If `resolveConflictAccount` is set to `true`, a `202` response code means that a conflicting unmanaged account exists and was invited to join the organization. A `409` response code means that a conflicting account exists so the user wasn't created based on the [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) option selected.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/users`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>resolveConflictAccount</code></td><td><p><code>boolean</code></p><p>Optional. If set to <code>true</code>, the option selected for <a href="https://support.google.com/a/answer/11112794">handling unmanaged user accounts</a> will apply. Default: <code>false</code></p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.user`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
