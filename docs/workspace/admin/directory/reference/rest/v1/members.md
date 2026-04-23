---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/members
root: workspace
fetched_at: 2026-04-23T15:23:38.794Z
---

# REST Resource: members

## Resource: Member

A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-group-members).

JSON representation

```
{
  "kind": string,
  "email": string,
  "role": string,
  "etag": string,
  "type": string,
  "status": string,
  "delivery_settings": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. For Members resources, the value is <code>admin#directory#member</code>.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The <code>email</code> must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.</p></td></tr><tr><td><code>role</code></td><td><p><code>string</code></p><p>The member's role in a group. The API returns an error for cycles in group memberships. For example, if <code>group1</code> is a member of <code>group2</code>, <code>group2</code> cannot be a member of <code>group1</code>. For more information about a member's role, see <a href="https://support.google.com/a/answer/167094">Assign group roles to members</a>.</p><p>Acceptable values are:</p><ul><li><code>MANAGER</code>: This role is only available if the Google Groups for Business is enabled using the Admin Console. See <a href="https://support.google.com/a/answer/167096">Turn Groups for Business ON or OFF</a>. A <code>MANAGER</code> role can do everything done by an <code>OWNER</code> role except make a member an <code>OWNER</code> or delete the group. A group can have multiple <code>MANAGER</code> members.</li><li><code>MEMBER</code>: This role can subscribe to a group, view discussion archives, and view the group's membership list. For more information about member roles, see <a href="https://support.google.com/a/answer/167094">Assign group roles to members</a>.</li><li><code>OWNER</code>: This role can send messages to the group, add or remove members, change member roles, change group's settings, and delete the group. An <code>OWNER</code> must be a member of the group. A group can have more than one <code>OWNER</code>.</li></ul></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The type of group member.</p><p>Acceptable values are:</p><ul><li><code>CUSTOMER</code>: The member represents all users in a domain. An email address is not returned and the ID returned is the customer ID.</li><li><code>EXTERNAL</code>: The member is a user or group from outside the domain. (Not currently used)</li><li><code>GROUP</code>: The member is another group.</li><li><code>USER</code>: The member is a user.</li></ul></td></tr><tr><td><code>status</code></td><td><p><code>string</code></p><p>Status of member (Immutable)</p></td></tr><tr><td><code>delivery_settings</code></td><td><p><code>string</code></p><p>Defines mail delivery preferences of member. This field is only supported by <code>insert</code>, <code>update</code>, and <code>get</code> methods.</p><p>Acceptable values are:</p><ul><li><code>ALL_MAIL</code>: All messages, delivered as soon as they arrive.</li><li><code>DAILY</code>: No more than one message a day.</li><li><code>DIGEST</code>: Up to 25 messages bundled into a single message.</li><li><code>DISABLED</code>: Remove subscription.</li><li><code>NONE</code>: No messages.</li></ul></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique ID of the group member. A member <code>id</code> can be used as a member request URI's <code>memberKey</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Removes a member from a group.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a group member's properties.</td></tr><tr><td><h3>hasMember</h3></td><td>Checks whether the given user is a member of the group.</td></tr><tr><td><h3>insert</h3></td><td>Adds a user to the specified group.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a paginated list of all members in a group.</td></tr><tr><td><h3>patch</h3></td><td>Updates the membership properties of a user in the specified group.</td></tr><tr><td><h3>update</h3></td><td>Updates the membership of a user in the specified group.</td></tr></tbody></table>
