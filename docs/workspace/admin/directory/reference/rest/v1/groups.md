---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups
root: workspace
fetched_at: 2026-04-23T15:23:37.748Z
---

# REST Resource: groups

## Resource: Group

Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-groups).

For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups).

Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/workspace/admin/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin.

JSON representation

```
{
  "id": string,
  "email": string,
  "name": string,
  "description": string,
  "adminCreated": boolean,
  "directMembersCount": string,
  "kind": string,
  "etag": string,
  "aliases": [
    string
  ],
  "nonEditableAliases": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Read-only. The unique ID of a group. A group <code>id</code> can be used as a group request URI's <code>groupKey</code>.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The <code>email</code> must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the <a href="https://support.google.com/a/answer/9193374">help center</a> for details.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The group's display name.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is <code>4,096</code> characters.</p></td></tr><tr><td><code>adminCreated</code></td><td><p><code>boolean</code></p><p>Read-only. Value is <code>true</code> if this group was created by an administrator rather than a user.</p></td></tr><tr><td><code>directMembersCount</code></td><td><p><code>string (int64 format)</code></p><p>The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the <code>directMembersCount</code> property of the parent group.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. For Groups resources, the value is <code>admin#directory#group</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>aliases[]</code></td><td><p><code>string</code></p><p>Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the <code>groups.aliases</code> methods. If edited in a group's POST or PUT request, the edit is ignored.</p></td></tr><tr><td><code>nonEditableAliases[]</code></td><td><p><code>string</code></p><p>Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a group.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a group's properties.</td></tr><tr><td><h3>insert</h3></td><td>Creates a group.</td></tr><tr><td><h3>list</h3></td><td>Retrieves all groups of a domain or of a user given a userKey (paginated).</td></tr><tr><td><h3>patch</h3></td><td>Updates a group's properties.</td></tr><tr><td><h3>update</h3></td><td>Updates a group's properties.</td></tr></tbody></table>
