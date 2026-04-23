---
source: https://developers.google.com/workspace/admin/contact-delegation/reference/rest/v1/admin.contacts.v1.users.delegates/delete
root: workspace
fetched_at: 2026-04-23T15:23:31.286Z
---

# Method: admin.contacts.v1.users.delegates.delete

## Method: admin.contacts.v1.users.delegates.delete

Deletes a delegate from a given user.

### HTTP request

`DELETE https://admin.googleapis.com/admin/contacts/v1/{name=users/*/delegates/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the delegate to delete, represented as an email, following the format: users/{userId}/delegates/{delegate} where userId is the email address of the user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.contact.delegation`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
