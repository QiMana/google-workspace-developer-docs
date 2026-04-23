---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/delete
root: workspace
fetched_at: 2026-04-23T15:29:01.309Z
---

# Method: users.settings.delegates.delete

Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings).

A delegate user must be referred to by their primary email address, and not an email alias.

This method is only available to service account clients that have been delegated domain-wide authority.

### HTTP request

`DELETE https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr><tr><td><code>delegateEmail</code></td><td><p><code>string</code></p><p>The email address of the user to be removed as a delegate.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
