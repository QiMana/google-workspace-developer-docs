---
source: https://developers.google.com/workspace/admin/contact-delegation/reference/rest/v1/admin.contacts.v1.users.delegates/list
root: workspace
fetched_at: 2026-04-23T15:23:31.014Z
---

# Method: admin.contacts.v1.users.delegates.list

Lists the delegates of a given user.

### HTTP request

`GET https://admin.googleapis.com/admin/contacts/v1/{parent=users/*}/delegates`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>The parent who owns this collection of delegates following the format: users/{userId} where userId is the email address of the given user.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Determines how many delegates are returned in each response. For exapmle, if the request sets</p><p><code>pageSize=1</code></p><p>and the given user has two delegates, the response has two pages. The response's</p><p><code>nextPageToken</code></p><p>property has the token to the second page. If left unset, the default page size is used.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A page token to specify the next page. A user with several delegates has a</p><p><code>nextPageToken</code></p><p>property in the response. In your follow up request getting the next set of delegates, enter the</p><p><code>nextPageToken</code></p><p>value in the</p><p><code>pageToken</code></p><p>query string.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message type for an admin to list delegates for a given user.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "delegates": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>delegates[]</code></td><td><p>List of delegates of the given user.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token for retrieving the follow-on delegates of a given user. The</p><p><code>nextPageToken</code></p><p>value is used in the request's</p><p><code>pageToken</code></p><p>query string.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.contact.delegation`
- `           https://www.googleapis.com/auth/admin.contact.delegation.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
