---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/watch
root: workspace
fetched_at: 2026-04-23T15:23:46.711Z
---

# Method: users.watch

Watches for changes in users list.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/users/watch`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>domain</code></td><td><p><code>string</code></p><p>Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."</p></td></tr><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.</p></td></tr><tr><td><code>event</code></td><td><p><code>enum (<code>EventType</code>)</code></p><p>Events to watch for.</p></td></tr><tr><td><code>customFieldMask</code></td><td><p><code>string</code></p><p>Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>enum (<code>OrderBy</code>)</code></p><p>Column to use for sorting results</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page in the list</p></td></tr><tr><td><code>projection</code></td><td><p><code>enum (<code>Projection</code>)</code></p><p>What subset of fields to fetch for this user.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Query string search. Contains one or more search clauses, each with a field, operator, and value. For complete documentation, go to <a href="https://developers.google.com/workspace/admin/directory/v1/guides/search-users">Search for users</a>.</p></td></tr><tr><td><code>showDeleted</code></td><td><p><code>string</code></p><p>If set to true, retrieves the list of deleted users. (Default: false)</p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOrder</code>)</code></p><p>Whether to return results in ascending or descending order.</p></td></tr><tr><td><code>viewType</code></td><td><p><code>enum (<code>ViewType</code>)</code></p><p>Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin">Retrieve a user as a non-administrator</a>.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `SubscriptionChannel`.

### Response body

If successful, the response body contains an instance of `SubscriptionChannel`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.user`
- `           https://www.googleapis.com/auth/admin.directory.user.readonly`
- `           https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## EventType

Type of the Subscription event

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ADD</code></td><td>User Created Event</td></tr><tr><td><code>DELETE</code></td><td>User Deleted Event</td></tr><tr><td><code>MAKE_ADMIN</code></td><td>User Admin Status Change Event</td></tr><tr><td><code>UNDELETE</code></td><td>User Undeleted Event</td></tr><tr><td><code>UPDATE</code></td><td>User Updated Event</td></tr></tbody></table>

## OrderBy

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EMAIL</code></td><td>Primary email of the user.</td></tr><tr><td><code>FAMILY_NAME</code></td><td>User's family name.</td></tr><tr><td><code>GIVEN_NAME</code></td><td>User's given name.</td></tr></tbody></table>

## Projection

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC</code></td><td>Do not include any custom fields for the user.</td></tr><tr><td><code>CUSTOM</code></td><td>Include custom fields from schemas mentioned in customFieldMask.</td></tr><tr><td><code>FULL</code></td><td>Include all fields associated with this user.</td></tr></tbody></table>

## SortOrder

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ASCENDING</code></td><td>Ascending order.</td></tr><tr><td><code>DESCENDING</code></td><td>Descending order.</td></tr></tbody></table>

## ViewType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>admin_view</code></td><td>Results include both administrator-only and domain-public fields.</td></tr><tr><td><code>domain_public</code></td><td>Results only include fields for the user that are publicly visible to other users in the domain.</td></tr></tbody></table>
