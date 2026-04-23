---
source: https://developers.google.com/workspace/admin/contact-delegation/reference/rest/v1/admin.contacts.v1.users.delegates/create
root: workspace
fetched_at: 2026-04-23T15:23:31.239Z
---

# Method: admin.contacts.v1.users.delegates.create

## Method: admin.contacts.v1.users.delegates.create

Creates one or more delegates for a given user.

### HTTP request

`POST https://admin.googleapis.com/admin/contacts/v1/{parent=users/*}/delegates`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>The parent resource that will own the created delegate following the format: users/{userId} where userId is the email address of the given user.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.contact.delegation`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
