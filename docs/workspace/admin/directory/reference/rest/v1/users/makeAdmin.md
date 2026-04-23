---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/makeAdmin
root: workspace
fetched_at: 2026-04-23T15:23:46.314Z
---

# Method: users.makeAdmin

Makes a user a super administrator.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/users/{userKey}/makeAdmin`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `UserMakeAdmin`.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.user`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## UserMakeAdmin

JSON representation

```
{
  "status": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>status</code></td><td><p><code>boolean</code></p><p>Indicates the administrator status of the user.</p></td></tr></tbody></table>
