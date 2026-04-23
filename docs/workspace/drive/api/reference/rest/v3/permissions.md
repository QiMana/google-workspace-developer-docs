---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/permissions
root: workspace
fetched_at: 2026-04-23T15:28:04.995Z
---

# REST Resource: permissions

## Resource: Permission

A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. For more information, see [Share files, folders, and drives](../../../guides/manage-sharing.md).

By default, permission requests only return a subset of fields. Permission `kind`, `ID`, `type`, and `role` are always returned. To retrieve specific fields, see [Return specific fields](../../../guides/fields-parameter.md).

Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.

JSON representation

```
{
  "id": string,
  "displayName": string,
  "type": string,
  "kind": string,
  "permissionDetails": [
    {
      "permissionType": string,
      "inheritedFrom": string,
      "role": string,
      "inherited": boolean
    }
  ],
  "photoLink": string,
  "emailAddress": string,
  "role": string,
  "allowFileDiscovery": boolean,
  "domain": string,
  "expirationTime": string,
  "teamDrivePermissionDetails": [
    {
      "teamDrivePermissionType": string,
      "inheritedFrom": string,
      "role": string,
      "inherited": boolean
    }
  ],
  "deleted": boolean,
  "view": string,
  "pendingOwner": boolean,
  "inheritedPermissionsDisabled": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in the <a href="https://developers.google.com/workspace/drive/api/reference/rest/v3/User">User resource</a> as <code>permissionId</code>. IDs should be treated as opaque values.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:</p><ul><li><code>user</code> - User's full name, as defined for their Google Account, such as "Dana A."</li><li><code>group</code> - Name of the Google Group, such as "The Company Administrators."</li><li><code>domain</code> - String domain name, such as "cymbalgroup.com."</li><li><code>anyone</code> - No <code>displayName</code> is present.</li></ul></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The type of the grantee. Supported values include:</p><ul><li><code>user</code></li><li><code>group</code></li><li><code>domain</code></li><li><code>anyone</code></li></ul><p>When creating a permission, if <code>type</code> is <code>user</code> or <code>group</code>, you must provide an <code>emailAddress</code> for the user or group. If <code>type</code> is <code>domain</code>, you must provide a <code>domain</code>. If <code>type</code> is <code>anyone</code>, no extra information is required.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string <code>"drive#permission"</code>.</p></td></tr><tr><td><code>permissionDetails[]</code></td><td><p><code>object</code></p><p>Output only. Details of whether the permissions on this item are inherited or are directly on this item.</p></td></tr><tr><td><code>permissionDetails[].permissionType</code></td><td><p><code>string</code></p><p>Output only. The permission type for this user. Supported values include:</p><ul><li><code>file</code></li><li><code>member</code></li></ul></td></tr><tr><td><code>permissionDetails[].inheritedFrom</code></td><td><p><code>string</code></p><p>Output only. The ID of the item from which this permission is inherited. This is only populated for items in shared drives.</p></td></tr><tr><td><code>permissionDetails[].role</code></td><td><p><code>string</code></p><p>Output only. The primary role for this user. Supported values include:</p><ul><li><code>owner</code></li><li><code>organizer</code></li><li><code>fileOrganizer</code></li><li><code>writer</code></li><li><code>commenter</code></li><li><code>reader</code></li></ul><p>For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/ref-roles">Roles and permissions</a>.</p></td></tr><tr><td><code>permissionDetails[].inherited</code></td><td><p><code>boolean</code></p><p>Output only. Whether this permission is inherited. This field is always populated. This is an output-only field.</p></td></tr><tr><td><code>photoLink</code></td><td><p><code>string</code></p><p>Output only. A link to the user's profile photo, if available.</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>Output only. The email address of the user or group to which this permission refers.</p></td></tr><tr><td><code>role</code></td><td><p><code>string</code></p><p>The role granted by this permission. Supported values include:</p><ul><li><code>owner</code></li><li><code>organizer</code></li><li><code>fileOrganizer</code></li><li><code>writer</code></li><li><code>commenter</code></li><li><code>reader</code></li></ul><p>For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/ref-roles">Roles and permissions</a>.</p></td></tr><tr><td><code>allowFileDiscovery</code></td><td><p><code>boolean</code></p><p>Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type <code>domain</code> or <code>anyone</code>.</p></td></tr><tr><td><code>domain</code></td><td><p><code>string</code></p><p>Output only. The domain to which this permission refers.</p></td></tr><tr><td><code>expirationTime</code></td><td><p><code>string</code></p><p>The time at which this permission will expire (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>). Expiration times have the following restrictions:</p><ul><li>They can only be set on user and group permissions.</li><li>The time must be in the future.</li><li>The time cannot be more than one year in the future.</li></ul></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b></code></td><td><p><code>object</code></p><p>Output only. Deprecated: Output only. Use <code>permissionDetails</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.teamDrivePermissionType<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Output only. Use <code>permissionDetails/permissionType</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.inheritedFrom<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Output only. Use <code>permissionDetails/inheritedFrom</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.role<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Output only. Use <code>permissionDetails/role</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.inherited<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>permissionDetails/inherited</code> instead.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Output only. Whether the account associated with this permission has been deleted. This field only pertains to permissions of type <code>user</code> or <code>group</code>.</p></td></tr><tr><td><code>view</code></td><td><p><code>string</code></p><p>Indicates the view for this permission. Only populated for permissions that belong to a view.</p><p>The only supported values are <code>published</code> and <code>metadata</code>:</p><ul><li><code>published</code>: The permission's role is <code>publishedReader</code>.</li><li><code>metadata</code>: The item is only visible to the <code>metadata</code> view because the item has limited access and the scope has at least read access to the parent. The <code>metadata</code> view is only supported on folders.</li></ul><p>For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/ref-roles#views">Views</a>.</p></td></tr><tr><td><code>pendingOwner</code></td><td><p><code>boolean</code></p><p>Whether the account associated with this permission is a pending owner. Only populated for permissions of type <code>user</code> for files that aren't in a shared drive.</p></td></tr><tr><td><code>inheritedPermissionsDisabled</code></td><td><p><code>boolean</code></p><p>When <code>true</code>, only organizers, owners, and users with permissions added directly on the item can access it.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a permission for a file or shared drive.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a permission.</td></tr><tr><td><h3>get</h3></td><td>Gets a permission by ID.</td></tr><tr><td><h3>list</h3></td><td>Lists a file's or shared drive's permissions.</td></tr><tr><td><h3>update</h3></td><td>Updates a permission with patch semantics.</td></tr></tbody></table>
