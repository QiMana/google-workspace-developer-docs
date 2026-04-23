---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/drives
root: workspace
fetched_at: 2026-04-23T15:27:52.980Z
---

# REST Resource: drives

## Resource: Drive

Representation of a shared drive.

Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.

JSON representation

```
{
  "id": string,
  "name": string,
  "colorRgb": string,
  "kind": string,
  "backgroundImageLink": string,
  "capabilities": {
    "canAddChildren": boolean,
    "canComment": boolean,
    "canCopy": boolean,
    "canDeleteDrive": boolean,
    "canDownload": boolean,
    "canEdit": boolean,
    "canListChildren": boolean,
    "canManageMembers": boolean,
    "canReadRevisions": boolean,
    "canRename": boolean,
    "canRenameDrive": boolean,
    "canChangeDriveBackground": boolean,
    "canShare": boolean,
    "canChangeCopyRequiresWriterPermissionRestriction": boolean,
    "canChangeDomainUsersOnlyRestriction": boolean,
    "canChangeDriveMembersOnlyRestriction": boolean,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": boolean,
    "canResetDriveRestrictions": boolean,
    "canDeleteChildren": boolean,
    "canTrashChildren": boolean
  },
  "themeId": string,
  "backgroundImageFile": {
    "id": string,
    "xCoordinate": number,
    "yCoordinate": number,
    "width": number
  },
  "createdDate": string,
  "hidden": boolean,
  "restrictions": {
    "copyRequiresWriterPermission": boolean,
    "domainUsersOnly": boolean,
    "driveMembersOnly": boolean,
    "adminManagedRestrictions": boolean,
    "sharingFoldersRequiresOrganizerPermission": boolean
  },
  "orgUnitId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of this shared drive.</p></td></tr><tr><td><code>colorRgb</code></td><td><p><code>string</code></p><p>The color of this shared drive as an RGB hex string. It can only be set on a <code>drive.drives.update</code> request that does not set <code>themeId</code>.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. This is always <code>drive#drive</code></p></td></tr><tr><td><code>backgroundImageLink</code></td><td><p><code>string</code></p><p>Output only. A short-lived link to this shared drive's background image.</p></td></tr><tr><td><code>capabilities</code></td><td><p><code>object</code></p><p>Output only. Capabilities the current user has on this shared drive.</p></td></tr><tr><td><code>capabilities.canAddChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can add children to folders in this shared drive.</p></td></tr><tr><td><code>capabilities.canComment</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can comment on files in this shared drive.</p></td></tr><tr><td><code>capabilities.canCopy</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can copy files in this shared drive.</p></td></tr><tr><td><code>capabilities.canDeleteDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.</p></td></tr><tr><td><code>capabilities.canDownload</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can download files in this shared drive.</p></td></tr><tr><td><code>capabilities.canEdit</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can edit files in this shared drive</p></td></tr><tr><td><code>capabilities.canListChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can list the children of folders in this shared drive.</p></td></tr><tr><td><code>capabilities.canManageMembers</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can add members to this shared drive or remove them or change their role.</p></td></tr><tr><td><code>capabilities.canReadRevisions</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can read the revisions resource of files in this shared drive.</p></td></tr><tr><td><code>capabilities.canRename</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can rename files or folders in this shared drive.</p></td></tr><tr><td><code>capabilities.canRenameDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can rename this shared drive.</p></td></tr><tr><td><code>capabilities.canChangeDriveBackground</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the background of this shared drive.</p></td></tr><tr><td><code>capabilities.canShare</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can share files or folders in this shared drive.</p></td></tr><tr><td><code>capabilities.canChangeCopyRequiresWriterPermissionRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the <code>copyRequiresWriterPermission</code> restriction of this shared drive.</p></td></tr><tr><td><code>capabilities.canChangeDomainUsersOnlyRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the <code>domainUsersOnly</code> restriction of this shared drive.</p></td></tr><tr><td><code>capabilities.canChangeDriveMembersOnlyRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the <code>driveMembersOnly</code> restriction of this shared drive.</p></td></tr><tr><td><code>capabilities.canChangeSharingFoldersRequiresOrganizerPermissionRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the <code>sharingFoldersRequiresOrganizerPermission</code> restriction of this shared drive.</p></td></tr><tr><td><code>capabilities.canResetDriveRestrictions</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can reset the shared drive restrictions to defaults.</p></td></tr><tr><td><code>capabilities.canDeleteChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can delete children from folders in this shared drive.</p></td></tr><tr><td><code>capabilities.canTrashChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can trash children from folders in this shared drive.</p></td></tr><tr><td><code>themeId</code></td><td><p><code>string</code></p><p>The ID of the theme from which the background image and color will be set. The set of possible <code>driveThemes</code> can be retrieved from a <code>drive.about.get</code> response. When not specified on a <code>drive.drives.insert</code> request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set <code>colorRgb</code> or <code>backgroundImageFile</code>.</p></td></tr><tr><td><code>backgroundImageFile</code></td><td><p><code>object</code></p><p>An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on <code>drive.drives.update</code> requests that don't set <code>themeId</code>. When specified, all fields of the <code>backgroundImageFile</code> must be set.</p></td></tr><tr><td><code>backgroundImageFile.id</code></td><td><p><code>string</code></p><p>The ID of an image file in Google Drive to use for the background image.</p></td></tr><tr><td><code>backgroundImageFile.xCoordinate</code></td><td><p><code>number</code></p><p>The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.</p></td></tr><tr><td><code>backgroundImageFile.yCoordinate</code></td><td><p><code>number</code></p><p>The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.</p></td></tr><tr><td><code>backgroundImageFile.width</code></td><td><p><code>number</code></p><p>The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.</p></td></tr><tr><td><code>createdDate</code></td><td><p><code>string</code></p><p>Output only. The time at which the shared drive was created (RFC 3339 date-time).</p></td></tr><tr><td><code>hidden</code></td><td><p><code>boolean</code></p><p>Whether the shared drive is hidden from default view.</p></td></tr><tr><td><code>restrictions</code></td><td><p><code>object</code></p><p>A set of restrictions that apply to this shared drive or items inside this shared drive.</p></td></tr><tr><td><code>restrictions.copyRequiresWriterPermission</code></td><td><p><code>boolean</code></p><p>Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to <code>true</code>, it will override the similarly named field to <code>true</code> for any file inside this shared drive.</p></td></tr><tr><td><code>restrictions.domainUsersOnly</code></td><td><p><code>boolean</code></p><p>Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.</p></td></tr><tr><td><code>restrictions.driveMembersOnly</code></td><td><p><code>boolean</code></p><p>Whether access to items inside this shared drive is restricted to its members.</p></td></tr><tr><td><code>restrictions.adminManagedRestrictions</code></td><td><p><code>boolean</code></p><p>Whether administrative privileges on this shared drive are required to modify restrictions.</p></td></tr><tr><td><code>restrictions.sharingFoldersRequiresOrganizerPermission</code></td><td><p><code>boolean</code></p><p>If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.</p></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>Output only. The organizational unit of this shared drive. This field is only populated on <code>drives.list</code> responses when the <code>useDomainAdminAccess</code> parameter is set to <code>true</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Permanently deletes a shared drive for which the user is an <code>organizer</code>.</td></tr><tr><td><h3>get</h3></td><td>Gets a shared drive's metadata by ID.</td></tr><tr><td><h3>hide</h3></td><td>Hides a shared drive from the default view.</td></tr><tr><td><h3>insert</h3></td><td>Creates a new shared drive.</td></tr><tr><td><h3>list</h3></td><td><p>Lists the user's shared drives.</p></td></tr><tr><td><h3>unhide</h3></td><td>Restores a shared drive to the default view.</td></tr><tr><td><h3>update</h3></td><td>Updates the metadata for a shared drive.</td></tr></tbody></table>
