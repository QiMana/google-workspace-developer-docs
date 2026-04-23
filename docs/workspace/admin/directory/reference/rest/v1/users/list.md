---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/list
root: workspace
fetched_at: 2026-04-23T15:23:46.237Z
---

# Method: users.list

Retrieves a paginated list of either deleted users or all users in a domain.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/users`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customFieldMask</code></td><td><p><code>string</code></p><p>A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when <code>projection=custom</code>.</p></td></tr><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all users for a customer, use this field instead of <code>domain</code>. You can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users</a> resource. You must provide either the <code>customer</code> or the <code>domain</code> parameter.</p></td></tr><tr><td><code>domain</code></td><td><p><code>string</code></p><p>The domain name. Use this field to get users from only one domain. To return all domains for a customer account, use the <code>customer</code> query parameter instead. Either the <code>customer</code> or the <code>domain</code> parameter must be provided.</p></td></tr><tr><td><code>event</code></td><td><p><code>enum (<code>Event</code>)</code></p><p>Event on which subscription is intended (if subscribing)</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>enum (<code>OrderBy</code>)</code></p><p>Property to use for sorting results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page in the list. The page token is only valid for three days.</p></td></tr><tr><td><code>projection</code></td><td><p><code>enum (<code>Projection</code>)</code></p><p>What subset of fields to fetch for this user.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Query string for searching user fields. For more information on constructing user queries, see <a href="https://developers.google.com/workspace/admin/directory/v1/guides/search-users">Search for Users</a>.</p></td></tr><tr><td><code>showDeleted</code></td><td><p><code>string</code></p><p>If set to <code>true</code>, retrieves the list of deleted users. (Default: <code>false</code>)</p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOrder</code>)</code></p><p>Whether to return results in ascending or descending order, ignoring case.</p></td></tr><tr><td><code>viewType</code></td><td><p><code>enum (<code>ViewType</code>)</code></p><p>Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin">Retrieve a user as a non-administrator</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "trigger_event": string,
  "etag": string,
  "users": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>trigger_event</code></td><td><p><code>string</code></p><p>Event that triggered this response (only used in case of Push Response)</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>users[]</code></td><td><p>A list of user objects.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access next page of this result. The page token is only valid for three days.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.user`
- `           https://www.googleapis.com/auth/admin.directory.user.readonly`
- `           https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## Event

Type of the Subscription event

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ADD</code></td><td>User Created Event</td></tr><tr><td><code>DELETE</code></td><td>User Deleted Event</td></tr><tr><td><code>MAKE_ADMIN</code></td><td>User Admin Status Change Event</td></tr><tr><td><code>UNDELETE</code></td><td>User Undeleted Event</td></tr><tr><td><code>UPDATE</code></td><td>User Updated Event</td></tr></tbody></table>

## OrderBy

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EMAIL</code></td><td>Primary email of the user.</td></tr><tr><td><code>FAMILY_NAME</code></td><td>User's family name.</td></tr><tr><td><code>GIVEN_NAME</code></td><td>User's given name.</td></tr></tbody></table>

## Projection

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC</code></td><td>Do not include any custom fields for the user.</td></tr><tr><td><code>CUSTOM</code></td><td>Include custom fields from schemas requested in <code>customFieldMask</code>.</td></tr><tr><td><code>FULL</code></td><td>Include all fields associated with this user.</td></tr></tbody></table>

## SortOrder

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ASCENDING</code></td><td>Ascending order.</td></tr><tr><td><code>DESCENDING</code></td><td>Descending order.</td></tr></tbody></table>

## ViewType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>admin_view</code></td><td>Results include both administrator-only and domain-public fields for the user.</td></tr><tr><td><code>domain_public</code></td><td>Results only include fields for the user that are publicly visible to other users in the domain.</td></tr></tbody></table>
