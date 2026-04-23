---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/members/hasMember
root: workspace
fetched_at: 2026-04-23T15:23:38.858Z
---

# Method: members.hasMember

Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>groupKey</code></td><td><p><code>string</code></p><p>Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.</p></td></tr><tr><td><code>memberKey</code></td><td><p><code>string</code></p><p>Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

JSON template for Has Member response in Directory API.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "isMember": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>isMember</code></td><td><p><code>boolean</code></p><p>Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/groups/`
- `           https://www.googleapis.com/auth/admin.directory.group`
- `           https://www.googleapis.com/auth/admin.directory.group.member`
- `           https://www.googleapis.com/auth/admin.directory.group.member.readonly`
- `           https://www.googleapis.com/auth/admin.directory.group.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
