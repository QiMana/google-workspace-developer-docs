---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members
root: workspace
fetched_at: 2026-04-23T15:25:04.366Z
---

# REST Resource: spaces.members

## Page Summary

- `Membership` resource represents the relationship between a user, Chat app, or Google Group with a space, detailing their involvement status and role.
- It defines states like `JOINED`, `INVITED`, or `NOT_A_MEMBER` and roles such as `MEMBER` or `MANAGER` for space interactions.
- Membership information includes details like creation and deletion times, user or group association, and resource names.
- Google Chat API provides methods to manage memberships: create, delete, get, list, and update them.
- Memberships for Google Groups require user authentication and are represented by the `Group` resource with its associated `name`.

## Resource: Membership

Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.

JSON representation

```
{
  "name": string,
  "state": enum (MembershipState),
  "role": enum (MembershipRole),
  "createTime": string,
  "deleteTime": string,

  "member": {
    object (User)
  },
  "groupMember": {
    object (Group)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the membership, assigned by the server.</p><p>Format: <code>spaces/{space}/members/{member}</code></p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>MembershipState</code>)</code></p><p>Output only. State of the membership.</p></td></tr><tr><td><code>role</code></td><td><p><code>enum (<code>MembershipRole</code>)</code></p><p>Optional. User's role within a Chat space, which determines their permitted actions in the space.</p><p>This field can only be used as input in <code>members.patch</code>.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.</p></td></tr><tr><td><code>deleteTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.</p></td></tr><tr><td colspan="2">Union field <code>memberType</code>. Member associated with this membership. Other member types might be supported in the future. <code>memberType</code> can be only one of the following:</td></tr><tr><td><code>member</code></td><td><p><code>object (<code>User</code>)</code></p><p>Optional. The Google Chat user or app the membership corresponds to. If your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, the output populates the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User">user</a> <code>name</code> and <code>type</code>.</p></td></tr><tr><td><code>groupMember</code></td><td><p><code>object (<code>Group</code>)</code></p><p>Optional. The Google Group the membership corresponds to.</p><p>Reading or mutating memberships for Google Groups requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr></tbody></table>

### MembershipState

Specifies the member's relationship with a space. Other membership states might be supported in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MEMBERSHIP_STATE_UNSPECIFIED</code></td><td>Default value. Don't use.</td></tr><tr><td><code>JOINED</code></td><td>The user is added to the space, and can participate in the space.</td></tr><tr><td><code>INVITED</code></td><td>The user is invited to join the space, but hasn't joined it.</td></tr><tr><td><code>NOT_A_MEMBER</code></td><td>The user doesn't belong to the space and doesn't have a pending invitation to join the space.</td></tr></tbody></table>

### MembershipRole

Represents a user's permitted actions in a Chat space. More enum values might be added in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MEMBERSHIP_ROLE_UNSPECIFIED</code></td><td>Default value. For <code>users</code>: they aren't a member of the space, but can be invited. For <code>Google Groups</code>: they're always assigned this role (other enum values might be used in the future).</td></tr><tr><td><code>ROLE_MEMBER</code></td><td><p>A member of the space. In the Chat UI, this role is called Member.</p><p>The user has basic permissions, like sending messages to the space. Managers and owners can grant members additional permissions in a space, including:</p><ul><li>Add or remove members.</li><li>Modify space details.</li><li>Turn history on or off.</li><li>Mention everyone in the space with <code>@all</code>.</li><li>Manage Chat apps and webhooks installed in the space.</li></ul><p>In direct messages and unnamed group conversations, everyone has this role.</p></td></tr><tr><td><code>ROLE_MANAGER</code></td><td><p>A space owner. In the Chat UI, this role is called Owner.</p><p>The user has the complete set of space permissions to manage the space, including:</p><ul><li>Change the role of other members in the space to member, manager, or owner.</li><li>Delete the space.</li></ul><p>To learn more, see <a href="https://support.google.com/chat/answer/11833441">Learn more about your role as a space owner or manager</a>.</p></td></tr><tr><td><code>ROLE_ASSISTANT_MANAGER</code></td><td><p>A space manager. In the Chat UI, this role is called Manager.</p><p>The user has all basic permissions of <code>ROLE_MEMBER</code>, and can be granted a subset of administrative permissions by an owner. By default, managers have all the permissions of an owner except for the ability to:</p><ul><li>Delete the space.</li><li>Make another space member an owner.</li><li>Change an owner's role.</li></ul><p>By default, managers permissions include but aren't limited to:</p><ul><li>Make another member a manager.</li><li>Delete messages in the space.</li><li>Manage space permissions.</li><li>Receive notifications for requests to join the space if the manager has the "manage members" permission in the space settings.</li><li>Make a space discoverable.</li></ul><p>To learn more, see <a href="https://support.google.com/chat/answer/13340792">Manage space settings</a>.</p></td></tr></tbody></table>

### Group

A Google Group in Google Chat.

JSON representation

```
{
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name for a Google Group.</p><p>Represents a <a href="https://cloud.google.com/identity/docs/reference/rest/v1/groups">group</a> in Cloud Identity Groups API.</p><p>Format: groups/{group}</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a membership for the calling Chat app, a user, or a Google Group.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a membership.</td></tr><tr><td><h3>get</h3></td><td>Returns details about a membership.</td></tr><tr><td><h3>list</h3></td><td>Lists memberships in a space.</td></tr><tr><td><h3>patch</h3></td><td>Updates a membership.</td></tr></tbody></table>
