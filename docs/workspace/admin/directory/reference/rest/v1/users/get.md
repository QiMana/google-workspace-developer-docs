---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/get
root: workspace
fetched_at: 2026-04-23T15:23:45.932Z
---

# Method: users.get

Retrieves a user.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/users/{userKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customFieldMask</code></td><td><p><code>string</code></p><p>A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when <code>projection=custom</code>.</p></td></tr><tr><td><code>projection</code></td><td><p><code>enum (<code>Projection</code>)</code></p><p>What subset of fields to fetch for this user.</p></td></tr><tr><td><code>viewType</code></td><td><p><code>enum (<code>ViewType</code>)</code></p><p>Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin">Retrieve a user as a non-administrator</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.user`
- `           https://www.googleapis.com/auth/admin.directory.user.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## Projection

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC</code></td><td>Do not include any custom fields for the user.</td></tr><tr><td><code>CUSTOM</code></td><td>Include custom fields from schemas requested in <code>customFieldMask</code>.</td></tr><tr><td><code>FULL</code></td><td>Include all fields associated with this user.</td></tr></tbody></table>

## ViewType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>admin_view</code></td><td>Results include both administrator-only and domain-public fields for the user.</td></tr><tr><td><code>domain_public</code></td><td>Results only include fields for the user that are publicly visible to other users in the domain.</td></tr></tbody></table>
