---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/permissionchange
root: workspace
fetched_at: 2026-04-23T15:27:31.822Z
---

# PermissionChange

## PermissionChange

A change of the permission setting on an item.

JSON representation

```
{
  "addedPermissions": [
    {
      object (Permission)
    }
  ],
  "removedPermissions": [
    {
      object (Permission)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addedPermissions[]</code></td><td><p><code>object (<code>Permission</code>)</code></p><p>The set of permissions added by this change.</p></td></tr><tr><td><code>removedPermissions[]</code></td><td><p><code>object (<code>Permission</code>)</code></p><p>The set of permissions removed by this change.</p></td></tr></tbody></table>

## Permission

The permission setting of an object.

JSON representation

```
{
  "role": enum (Role),
  "allowDiscovery": boolean,

  "user": {
    object (User)
  },
  "group": {
    object (Group)
  },
  "domain": {
    object (Domain)
  },
  "anyone": {
    object (Anyone)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>role</code></td><td><p><code>enum (<code>Role</code>)</code></p><p>Indicates the <a href="https://developers.google.com/workspace/drive/web/manage-sharing#roles">Google Drive permissions role</a>. The role determines a user's ability to read, write, and comment on items.</p></td></tr><tr><td><code>allowDiscovery</code></td><td><p><code>boolean</code></p><p>If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item.</p></td></tr><tr><td colspan="2">Union field <code>scope</code>. The entity granted the role. <code>scope</code> can be only one of the following:</td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user to whom this permission applies.</p></td></tr><tr><td><code>group</code></td><td><p><code>object (<code>Group</code>)</code></p><p>The group to whom this permission applies.</p></td></tr><tr><td><code>domain</code></td><td><p><code>object (<code>Domain</code>)</code></p><p>The domain to whom this permission applies.</p></td></tr><tr><td><code>anyone</code></td><td><p><code>object (<code>Anyone</code>)</code></p><p>If set, this permission applies to anyone, even logged out users.</p></td></tr></tbody></table>

## Role

The [Google Drive permissions roles](https://developers.google.com/workspace/drive/web/manage-sharing#roles).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ROLE_UNSPECIFIED</code></td><td>The role is not available.</td></tr><tr><td><code>OWNER</code></td><td>A role granting full access.</td></tr><tr><td><code>ORGANIZER</code></td><td>A role granting the ability to manage people and settings.</td></tr><tr><td><code>FILE_ORGANIZER</code></td><td>A role granting the ability to contribute and manage content.</td></tr><tr><td><code>EDITOR</code></td><td>A role granting the ability to contribute content. This role is sometimes also known as "writer".</td></tr><tr><td><code>COMMENTER</code></td><td>A role granting the ability to view and comment on content.</td></tr><tr><td><code>VIEWER</code></td><td>A role granting the ability to view content. This role is sometimes also known as "reader".</td></tr><tr><td><code>PUBLISHED_VIEWER</code></td><td>A role granting the ability to view content only after it has been published to the web. This role is sometimes also known as "published reader". See <a href="https://support.google.com/sites/answer/6372880">https://support.google.com/sites/answer/6372880</a> for more information.</td></tr></tbody></table>

## Anyone

This type has no fields.

Represents any user (including a logged out user).
