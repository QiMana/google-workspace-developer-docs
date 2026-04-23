---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/permissions
root: workspace
fetched_at: 2026-04-23T15:27:55.639Z
---

# REST Resource: permissions

## Resource: Permission

A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy.

Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.

JSON representation

```
{
  "additionalRoles": [
    string
  ],
  "permissionDetails": [
    {
      "permissionType": string,
      "role": string,
      "additionalRoles": [
        string
      ],
      "inheritedFrom": string,
      "inherited": boolean
    }
  ],
  "teamDrivePermissionDetails": [
    {
      "teamDrivePermissionType": string,
      "role": string,
      "additionalRoles": [
        string
      ],
      "inheritedFrom": string,
      "inherited": boolean
    }
  ],
  "id": string,
  "name": string,
  "type": string,
  "role": string,
  "authKey": string,
  "value": string,
  "kind": string,
  "withLink": boolean,
  "photoLink": string,
  "selfLink": string,
  "emailAddress": string,
  "domain": string,
  "etag": string,
  "expirationDate": string,
  "deleted": boolean,
  "view": string,
  "pendingOwner": boolean,
  "inheritedPermissionsDisabled": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>additionalRoles[]</code></td><td><p><code>string</code></p><p>Additional roles for this user. Only <code>commenter</code> is currently allowed, though more may be supported in the future.</p></td></tr><tr><td><code>permissionDetails[]</code></td><td><p><code>object</code></p><p>Output only. Details of whether the permissions on this item are inherited or directly on this item.</p></td></tr><tr><td><code>permissionDetails[].permissionType</code></td><td><p><code>string</code></p><p>Output only. The permission type for this user. While new values may be added in future, the following are currently possible:</p><ul><li><code>file</code></li><li><code>member</code></li></ul></td></tr><tr><td><code>permissionDetails[].role</code></td><td><p><code>string</code></p><p>Output only. The primary role for this user. While new values may be added in the future, the following are currently possible:</p><ul><li><code>organizer</code></li><li><code>fileOrganizer</code></li><li><code>writer</code></li><li><code>reader</code></li></ul></td></tr><tr><td><code>permissionDetails[].additionalRoles[]</code></td><td><p><code>string</code></p><p>Output only. Additional roles for this user. Only <code>commenter</code> is currently possible, though more may be supported in the future.</p></td></tr><tr><td><code>permissionDetails[].inheritedFrom</code></td><td><p><code>string</code></p><p>Output only. The ID of the item from which this permission is inherited. This is only populated for items in shared drives.</p></td></tr><tr><td><code>permissionDetails[].inherited</code></td><td><p><code>boolean</code></p><p>Output only. Whether this permission is inherited. This field is always populated.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b></code></td><td><p><code>object</code></p><p>Output only. Deprecated: Use <code>permissionDetails</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.teamDrivePermissionType<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Output only. Deprecated: Use <code>permissionDetails/permissionType</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.role<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Output only. Deprecated: Use <code>permissionDetails/role</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.additionalRoles[]<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Output only. Deprecated: Use <code>permissionDetails/additionalRoles</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.inheritedFrom<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Output only. Deprecated: Use <code>permissionDetails/inheritedFrom</code> instead.</p></td></tr><tr><td><code>teamDrivePermissionDetails[]<br><b>(deprecated)</b>.inherited<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Output only. Deprecated: Use <code>permissionDetails/inherited</code> instead.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the user this permission refers to, and identical to the <code>permissionId</code> in the About and Files resources. When making a <code>drive.permissions.insert</code> request, exactly one of the <code>id</code> or <code>value</code> fields must be specified unless the permission type is <code>anyone</code>, in which case both <code>id</code> and <code>value</code> are ignored.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. The name for this permission.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The account type. Allowed values are:</p><ul><li><code>user</code></li><li><code>group</code></li><li><code>domain</code></li><li><code>anyone</code></li></ul></td></tr><tr><td><code>role</code></td><td><p><code>string</code></p><p>The primary role for this user. While new values may be supported in the future, the following are currently allowed:</p><ul><li><code>owner</code></li><li><code>organizer</code></li><li><code>fileOrganizer</code></li><li><code>writer</code></li><li><code>reader</code></li></ul></td></tr><tr><td><code>authKey<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Output only. Deprecated.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a <code>drive.permissions.insert</code> request, exactly one of the <code>id</code> or <code>value</code> fields must be specified unless the permission type is <code>anyone</code>, in which case both <code>id</code> and <code>value</code> are ignored.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. This is always <code>drive#permission</code>.</p></td></tr><tr><td><code>withLink</code></td><td><p><code>boolean</code></p><p>Whether the link is required for this permission.</p></td></tr><tr><td><code>photoLink</code></td><td><p><code>string</code></p><p>Output only. A link to the profile photo, if available.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Output only. A link back to this permission.</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is <code>user</code> or <code>group</code>.</p></td></tr><tr><td><code>domain</code></td><td><p><code>string</code></p><p>Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is <code>user</code>, <code>group</code> or <code>domain</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Output only. The ETag of the permission.</p></td></tr><tr><td><code>expirationDate</code></td><td><p><code>string</code></p><p>The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:</p><ul><li>They can only be set on user and group permissions</li><li>The date must be in the future</li><li>The date cannot be more than a year in the future</li></ul></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.</p></td></tr><tr><td><code>view</code></td><td><p><code>string</code></p><p>Indicates the view for this permission. Only populated for permissions that belong to a view.</p><p><code>published</code></p><p>and</p><p><code>metadata</code></p><p>are the only supported values.</p><ul><li><p><code>published</code></p><p>: The permission's role is published_reader.</p></li><li><p><code>metadata</code></p><p>: The item is only visible to the metadata view because the item has limited access and the scope has at least read access to the parent. Note: The</p><p><code>metadata</code></p><p>view is currently only supported on folders.</p></li></ul></td></tr><tr><td><code>pendingOwner</code></td><td><p><code>boolean</code></p><p>Whether the account associated with this permission is a pending owner. Only populated for <code>user</code> type permissions for files that are not in a shared drive.</p></td></tr><tr><td><code>inheritedPermissionsDisabled</code></td><td><p><code>boolean</code></p><p>When true, only organizers, owners, and users with permissions added directly on the item can access it.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a permission from a file or shared drive.</td></tr><tr><td><h3>get</h3></td><td>Gets a permission by ID.</td></tr><tr><td><h3>getIdForEmail</h3></td><td>Returns the permission ID for an email address.</td></tr><tr><td><h3>insert</h3></td><td>Inserts a permission for a file or shared drive.</td></tr><tr><td><h3>list</h3></td><td>Lists a file's or shared drive's permissions.</td></tr><tr><td><h3>patch</h3></td><td>Updates a permission using patch semantics.</td></tr><tr><td><h3>update</h3></td><td>Updates a permission.</td></tr></tbody></table>
