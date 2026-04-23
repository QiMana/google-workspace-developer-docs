---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files
root: workspace
fetched_at: 2026-04-23T15:28:03.476Z
---

# REST Resource: files

## Resource: File

The metadata for a file.

Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.

JSON representation

```
{
  "kind": string,
  "driveId": string,
  "fileExtension": string,
  "copyRequiresWriterPermission": boolean,
  "md5Checksum": string,
  "contentHints": {
    "indexableText": string,
    "thumbnail": {
      "image": string,
      "mimeType": string
    }
  },
  "writersCanShare": boolean,
  "viewedByMe": boolean,
  "mimeType": string,
  "exportLinks": {
    string: string,
    ...
  },
  "parents": [
    string
  ],
  "thumbnailLink": string,
  "iconLink": string,
  "shared": boolean,
  "lastModifyingUser": {
    object (User)
  },
  "owners": [
    {
      object (User)
    }
  ],
  "headRevisionId": string,
  "sharingUser": {
    object (User)
  },
  "webViewLink": string,
  "webContentLink": string,
  "size": string,
  "viewersCanCopyContent": boolean,
  "permissions": [
    {
      object (Permission)
    }
  ],
  "hasThumbnail": boolean,
  "spaces": [
    string
  ],
  "folderColorRgb": string,
  "id": string,
  "name": string,
  "description": string,
  "starred": boolean,
  "trashed": boolean,
  "explicitlyTrashed": boolean,
  "createdTime": string,
  "modifiedTime": string,
  "modifiedByMeTime": string,
  "viewedByMeTime": string,
  "sharedWithMeTime": string,
  "quotaBytesUsed": string,
  "version": string,
  "originalFilename": string,
  "ownedByMe": boolean,
  "fullFileExtension": string,
  "properties": {
    string: value,
    ...
  },
  "appProperties": {
    string: value,
    ...
  },
  "isAppAuthorized": boolean,
  "teamDriveId": string,
  "capabilities": {
    "canChangeViewersCanCopyContent": boolean,
    "canMoveChildrenOutOfDrive": boolean,
    "canReadDrive": boolean,
    "canEdit": boolean,
    "canCopy": boolean,
    "canComment": boolean,
    "canAddChildren": boolean,
    "canDelete": boolean,
    "canDownload": boolean,
    "canListChildren": boolean,
    "canRemoveChildren": boolean,
    "canRename": boolean,
    "canTrash": boolean,
    "canReadRevisions": boolean,
    "canReadTeamDrive": boolean,
    "canMoveTeamDriveItem": boolean,
    "canChangeCopyRequiresWriterPermission": boolean,
    "canMoveItemIntoTeamDrive": boolean,
    "canUntrash": boolean,
    "canModifyContent": boolean,
    "canMoveItemWithinTeamDrive": boolean,
    "canMoveItemOutOfTeamDrive": boolean,
    "canDeleteChildren": boolean,
    "canMoveChildrenOutOfTeamDrive": boolean,
    "canMoveChildrenWithinTeamDrive": boolean,
    "canTrashChildren": boolean,
    "canMoveItemOutOfDrive": boolean,
    "canAddMyDriveParent": boolean,
    "canRemoveMyDriveParent": boolean,
    "canMoveItemWithinDrive": boolean,
    "canShare": boolean,
    "canMoveChildrenWithinDrive": boolean,
    "canModifyContentRestriction": boolean,
    "canAddFolderFromAnotherDrive": boolean,
    "canChangeSecurityUpdateEnabled": boolean,
    "canAcceptOwnership": boolean,
    "canReadLabels": boolean,
    "canModifyLabels": boolean,
    "canModifyEditorContentRestriction": boolean,
    "canModifyOwnerContentRestriction": boolean,
    "canRemoveContentRestriction": boolean,
    "canDisableInheritedPermissions": boolean,
    "canEnableInheritedPermissions": boolean,
    "canChangeItemDownloadRestriction": boolean,
    "canStartApproval": boolean
  },
  "hasAugmentedPermissions": boolean,
  "trashingUser": {
    object (User)
  },
  "thumbnailVersion": string,
  "trashedTime": string,
  "modifiedByMe": boolean,
  "permissionIds": [
    string
  ],
  "imageMediaMetadata": {
    "flashUsed": boolean,
    "meteringMode": string,
    "sensor": string,
    "exposureMode": string,
    "colorSpace": string,
    "whiteBalance": string,
    "width": integer,
    "height": integer,
    "location": {
      "latitude": number,
      "longitude": number,
      "altitude": number
    },
    "rotation": integer,
    "time": string,
    "cameraMake": string,
    "cameraModel": string,
    "exposureTime": number,
    "aperture": number,
    "focalLength": number,
    "isoSpeed": integer,
    "exposureBias": number,
    "maxApertureValue": number,
    "subjectDistance": integer,
    "lens": string
  },
  "videoMediaMetadata": {
    "width": integer,
    "height": integer,
    "durationMillis": string
  },
  "shortcutDetails": {
    "targetId": string,
    "targetMimeType": string,
    "targetResourceKey": string
  },
  "contentRestrictions": [
    {
      object (ContentRestriction)
    }
  ],
  "resourceKey": string,
  "linkShareMetadata": {
    "securityUpdateEligible": boolean,
    "securityUpdateEnabled": boolean
  },
  "labelInfo": {
    "labels": [
      {
        object (Label)
      }
    ]
  },
  "sha1Checksum": string,
  "sha256Checksum": string,
  "inheritedPermissionsDisabled": boolean,
  "downloadRestrictions": {
    object (DownloadRestrictionsMetadata)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string <code>"drive#file"</code>.</p></td></tr><tr><td><code>driveId</code></td><td><p><code>string</code></p><p>Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.</p></td></tr><tr><td><code>fileExtension</code></td><td><p><code>string</code></p><p>Output only. The final component of <code>fullFileExtension</code>. This is only available for files with binary content in Google Drive.</p></td></tr><tr><td><code>copyRequiresWriterPermission</code></td><td><p><code>boolean</code></p><p>Whether the options to copy, print, or download this file should be disabled for readers and commenters.</p></td></tr><tr><td><code>md5Checksum</code></td><td><p><code>string</code></p><p>Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.</p></td></tr><tr><td><code>contentHints</code></td><td><p><code>object</code></p><p>Additional information about the content of the file. These fields are never populated in responses.</p></td></tr><tr><td><code>contentHints.indexableText</code></td><td><p><code>string</code></p><p>Text to be indexed for the file to improve fullText queries. This is limited to 128 KB in length and may contain HTML elements.</p></td></tr><tr><td><code>contentHints.thumbnail</code></td><td><p><code>object</code></p><p>A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.</p></td></tr><tr><td><code>contentHints.thumbnail.image</code></td><td><p><code>string (bytes format)</code></p><p>The thumbnail data encoded with URL-safe Base64 (<a href="https://datatracker.ietf.org/doc/html/rfc4648#section-5">RFC 4648 section 5</a>).</p><p>A base64-encoded string.</p></td></tr><tr><td><code>contentHints.thumbnail.mimeType</code></td><td><p><code>string</code></p><p>The MIME type of the thumbnail.</p></td></tr><tr><td><code>writersCanShare</code></td><td><p><code>boolean</code></p><p>Whether users with only <code>writer</code> permission can modify the file's permissions. Not populated for items in shared drives.</p></td></tr><tr><td><code>viewedByMe</code></td><td><p><code>boolean</code></p><p>Output only. Whether the file has been viewed by this user.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The MIME type of the file.</p><p>Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded.</p><p>If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the <a href="https://developers.google.com/workspace/drive/api/reference/rest/v3/about"><code>about</code></a> resource.</p></td></tr><tr><td><code>exportLinks</code></td><td><p><code>map (key: string, value: string)</code></p><p>Output only. Links for exporting Docs Editors files to specific formats.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>parents[]</code></td><td><p><code>string</code></p><p>The ID of the parent folder containing the file.</p><p>A file can only have one parent folder; specifying multiple parents isn't supported.</p><p>If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the <code>addParents</code> and <code>removeParents</code> parameters to modify the parents list.</p></td></tr><tr><td><code>thumbnailLink</code></td><td><p><code>string</code></p><p>Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a> policies. Consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in <code>files.thumbnailLink</code> must be fetched using a credentialed request.</p></td></tr><tr><td><code>iconLink</code></td><td><p><code>string</code></p><p>Output only. A static, unauthenticated link to the file's icon.</p></td></tr><tr><td><code>shared</code></td><td><p><code>boolean</code></p><p>Output only. Whether the file has been shared. Not populated for items in shared drives.</p></td></tr><tr><td><code>lastModifyingUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The last user to modify the file. This field is only populated when the last modification was performed by a signed-in user.</p></td></tr><tr><td><code>owners[]</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.</p></td></tr><tr><td><code>headRevisionId</code></td><td><p><code>string</code></p><p>Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.</p></td></tr><tr><td><code>webViewLink</code></td><td><p><code>string</code></p><p>Output only. A link for opening the file in a relevant Google editor or viewer in a browser.</p></td></tr><tr><td><code>webContentLink</code></td><td><p><code>string</code></p><p>Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.</p></td></tr><tr><td><code>size</code></td><td><p><code>string (int64 format)</code></p><p>Output only. Size in bytes of blobs and Google Workspace editor files. Won't be populated for files that have no size, like shortcuts and folders.</p></td></tr><tr><td><code>viewersCanCopyContent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>copyRequiresWriterPermission</code> instead.</p></td></tr><tr><td><code>permissions[]</code></td><td><p><code>object (<code>Permission</code>)</code></p><p>Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.</p></td></tr><tr><td><code>hasThumbnail</code></td><td><p><code>boolean</code></p><p>Output only. Whether this file has a thumbnail. This doesn't indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.</p></td></tr><tr><td><code>spaces[]</code></td><td><p><code>string</code></p><p>Output only. The list of spaces which contain the file. The currently supported values are <code>drive</code>, <code>appDataFolder</code>, and <code>photos</code>.</p></td></tr><tr><td><code>folderColorRgb</code></td><td><p><code>string</code></p><p>The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the <code>folderColorPalette</code> field of the <a href="https://developers.google.com/workspace/drive/api/reference/rest/v3/about"><code>about</code></a> resource.</p><p>If an unsupported color is specified, the closest color in the palette is used instead.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the file. This isn't necessarily unique within a folder. Note that for immutable items such as the top-level folders of shared drives, the My Drive root folder, and the Application Data folder, the name is constant.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>A short description of the file.</p></td></tr><tr><td><code>starred</code></td><td><p><code>boolean</code></p><p>Whether the user has starred the file.</p></td></tr><tr><td><code>trashed</code></td><td><p><code>boolean</code></p><p>Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, but other users can still access the file in the owner's trash until it's permanently deleted.</p></td></tr><tr><td><code>explicitlyTrashed</code></td><td><p><code>boolean</code></p><p>Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.</p></td></tr><tr><td><code>createdTime</code></td><td><p><code>string</code></p><p>The time at which the file was created (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>).</p></td></tr><tr><td><code>modifiedTime</code></td><td><p><code>string</code></p><p>The last time the file was modified by anyone (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>).</p><p>Note that setting <code>modifiedTime</code> also updates <code>modifiedByMeTime</code> for the user.</p></td></tr><tr><td><code>modifiedByMeTime</code></td><td><p><code>string</code></p><p>Output only. The last time the file was modified by the user (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>).</p></td></tr><tr><td><code>viewedByMeTime</code></td><td><p><code>string</code></p><p>The last time the file was viewed by the user (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>).</p></td></tr><tr><td><code>sharedWithMeTime</code></td><td><p><code>string</code></p><p>Output only. The time at which the file was shared with the user, if applicable (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>).</p></td></tr><tr><td><code>quotaBytesUsed</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with <code>keepForever</code> enabled.</p></td></tr><tr><td><code>version</code></td><td><p><code>string (int64 format)</code></p><p>Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.</p></td></tr><tr><td><code>originalFilename</code></td><td><p><code>string</code></p><p>The original filename of the uploaded content if available, or else the original value of the <code>name</code> field. This is only available for files with binary content in Google Drive.</p></td></tr><tr><td><code>ownedByMe</code></td><td><p><code>boolean</code></p><p>Output only. Whether the user owns the file. Not populated for items in shared drives.</p></td></tr><tr><td><code>fullFileExtension</code></td><td><p><code>string</code></p><p>Output only. The full file extension extracted from the <code>name</code> field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.</p><p>This is automatically updated when the <code>name</code> field changes, however it's not cleared if the new name doesn't contain a valid extension.</p></td></tr><tr><td><code>properties</code></td><td><p><code>map (key: string, value: value (<code>Value</code> format))</code></p><p>A collection of arbitrary key-value pairs which are visible to all apps.</p><p>Entries with null values are cleared in update and copy requests.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>appProperties</code></td><td><p><code>map (key: string, value: value (<code>Value</code> format))</code></p><p>A collection of arbitrary key-value pairs which are private to the requesting app.</p><p>Entries with null values are cleared in update and copy requests.</p><p>These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with an OAuth 2.0 client ID. You cannot use an API key to retrieve private properties.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>isAppAuthorized</code></td><td><p><code>boolean</code></p><p>Output only. Whether the file was created or opened by the requesting app.</p></td></tr><tr><td><code>teamDriveId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Output only. Use <code>driveId</code> instead.</p></td></tr><tr><td><code>capabilities</code></td><td><p><code>object</code></p><p>Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/manage-sharing#capabilities">Understand file capabilities</a>.</p></td></tr><tr><td><code>capabilities.canChangeViewersCanCopyContent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only.</p></td></tr><tr><td><code>capabilities.canMoveChildrenOutOfDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can move children of this folder outside of the shared drive. This is <code>false</code> when the item isn't a folder. Only populated for items in shared drives.</p></td></tr><tr><td><code>capabilities.canReadDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.</p></td></tr><tr><td><code>capabilities.canEdit</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see <code>canChangeCopyRequiresWriterPermission</code> or <code>canModifyContent</code>.</p></td></tr><tr><td><code>capabilities.canCopy</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item if it's not a folder.</p></td></tr><tr><td><code>capabilities.canComment</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can comment on this file.</p></td></tr><tr><td><code>capabilities.canAddChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can add children to this folder. This is always <code>false</code> when the item isn't a folder.</p></td></tr><tr><td><code>capabilities.canDelete</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can delete this file.</p></td></tr><tr><td><code>capabilities.canDownload</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can download this file.</p></td></tr><tr><td><code>capabilities.canListChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can list the children of this folder. This is always <code>false</code> when the item isn't a folder.</p></td></tr><tr><td><code>capabilities.canRemoveChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can remove children from this folder. This is always <code>false</code> when the item isn't a folder. For a folder in a shared drive, use <code>canDeleteChildren</code> or <code>canTrashChildren</code> instead.</p></td></tr><tr><td><code>capabilities.canRename</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can rename this file.</p></td></tr><tr><td><code>capabilities.canTrash</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can move this file to trash.</p></td></tr><tr><td><code>capabilities.canReadRevisions</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item if it's not a folder, can be read.</p></td></tr><tr><td><code>capabilities.canReadTeamDrive<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>canReadDrive</code> instead.</p></td></tr><tr><td><code>capabilities.canMoveTeamDriveItem<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>canMoveItemWithinDrive</code> or <code>canMoveItemOutOfDrive</code> instead.</p></td></tr><tr><td><code>capabilities.canChangeCopyRequiresWriterPermission</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the <code>copyRequiresWriterPermission</code> restriction of this file.</p></td></tr><tr><td><code>capabilities.canMoveItemIntoTeamDrive<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>canMoveItemOutOfDrive</code> instead.</p></td></tr><tr><td><code>capabilities.canUntrash</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can restore this file from trash.</p></td></tr><tr><td><code>capabilities.canModifyContent</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can modify the content of this file.</p></td></tr><tr><td><code>capabilities.canMoveItemWithinTeamDrive<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>canMoveItemWithinDrive</code> instead.</p></td></tr><tr><td><code>capabilities.canMoveItemOutOfTeamDrive<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>canMoveItemOutOfDrive</code> instead.</p></td></tr><tr><td><code>capabilities.canDeleteChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can delete children of this folder. This is <code>false</code> when the item isn't a folder. Only populated for items in shared drives.</p></td></tr><tr><td><code>capabilities.canMoveChildrenOutOfTeamDrive<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>canMoveChildrenOutOfDrive</code> instead.</p></td></tr><tr><td><code>capabilities.canMoveChildrenWithinTeamDrive<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use <code>canMoveChildrenWithinDrive</code> instead.</p></td></tr><tr><td><code>capabilities.canTrashChildren</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can trash children of this folder. This is <code>false</code> when the item isn't a folder. Only populated for items in shared drives.</p></td></tr><tr><td><code>capabilities.canMoveItemOutOfDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that's being added.</p></td></tr><tr><td><code>capabilities.canAddMyDriveParent</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.</p></td></tr><tr><td><code>capabilities.canRemoveMyDriveParent</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.</p></td></tr><tr><td><code>capabilities.canMoveItemWithinDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that's being added and the parent that is being removed.</p></td></tr><tr><td><code>capabilities.canShare</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can modify the sharing settings for this file.</p></td></tr><tr><td><code>capabilities.canMoveChildrenWithinDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can move children of this folder within this drive. This is <code>false</code> when the item isn't a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.</p></td></tr><tr><td><code>capabilities.canModifyContentRestriction<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Output only. Use one of <code>canModifyEditorContentRestriction</code>, <code>canModifyOwnerContentRestriction</code>, or <code>canRemoveContentRestriction</code>.</p></td></tr><tr><td><code>capabilities.canAddFolderFromAnotherDrive</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is <code>false</code> when the item isn't a folder. Only populated for items in shared drives.</p></td></tr><tr><td><code>capabilities.canChangeSecurityUpdateEnabled</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the <code>securityUpdateEnabled</code> field on link share metadata.</p></td></tr><tr><td><code>capabilities.canAcceptOwnership</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files.</p></td></tr><tr><td><code>capabilities.canReadLabels</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can read the labels on the file.</p></td></tr><tr><td><code>capabilities.canModifyLabels</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can modify the labels on the file.</p></td></tr><tr><td><code>capabilities.canModifyEditorContentRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted.</p></td></tr><tr><td><code>capabilities.canModifyOwnerContentRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can add or modify content restrictions which are owner restricted.</p></td></tr><tr><td><code>capabilities.canRemoveContentRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether there's a content restriction on the file that can be removed by the current user.</p></td></tr><tr><td><code>capabilities.canDisableInheritedPermissions</code></td><td><p><code>boolean</code></p><p>Whether a user can disable inherited permissions.</p></td></tr><tr><td><code>capabilities.canEnableInheritedPermissions</code></td><td><p><code>boolean</code></p><p>Whether a user can re-enable inherited permissions.</p></td></tr><tr><td><code>capabilities.canChangeItemDownloadRestriction</code></td><td><p><code>boolean</code></p><p>Output only. Whether the current user can change the owner or organizer-applied download restrictions of the file.</p></td></tr><tr><td><code>capabilities.canStartApproval</code></td><td><p><code>boolean</code></p><p>Whether the current user can start an approval on the file.</p></td></tr><tr><td><code>hasAugmentedPermissions</code></td><td><p><code>boolean</code></p><p>Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.</p></td></tr><tr><td><code>trashingUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.</p></td></tr><tr><td><code>thumbnailVersion</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The thumbnail version for use in thumbnail cache invalidation.</p></td></tr><tr><td><code>trashedTime</code></td><td><p><code>string</code></p><p>Output only. The time that the item was trashed (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>). Only populated for items in shared drives.</p></td></tr><tr><td><code>modifiedByMe</code></td><td><p><code>boolean</code></p><p>Output only. Whether the file has been modified by this user.</p></td></tr><tr><td><code>permissionIds[]</code></td><td><p><code>string</code></p><p>Output only. List of permission IDs for users with access to this file.</p></td></tr><tr><td><code>imageMediaMetadata.flashUsed</code></td><td><p><code>boolean</code></p><p>Output only. Whether a flash was used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.meteringMode</code></td><td><p><code>string</code></p><p>Output only. The metering mode used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.sensor</code></td><td><p><code>string</code></p><p>Output only. The type of sensor used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.exposureMode</code></td><td><p><code>string</code></p><p>Output only. The exposure mode used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.colorSpace</code></td><td><p><code>string</code></p><p>Output only. The color space of the photo.</p></td></tr><tr><td><code>imageMediaMetadata.whiteBalance</code></td><td><p><code>string</code></p><p>Output only. The white balance mode used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.width</code></td><td><p><code>integer</code></p><p>Output only. The width of the image in pixels.</p></td></tr><tr><td><code>imageMediaMetadata.height</code></td><td><p><code>integer</code></p><p>Output only. The height of the image in pixels.</p></td></tr><tr><td><code>imageMediaMetadata.location</code></td><td><p><code>object</code></p><p>Output only. Geographic location information stored in the image.</p></td></tr><tr><td><code>imageMediaMetadata.location.latitude</code></td><td><p><code>number</code></p><p>Output only. The latitude stored in the image.</p></td></tr><tr><td><code>imageMediaMetadata.location.longitude</code></td><td><p><code>number</code></p><p>Output only. The longitude stored in the image.</p></td></tr><tr><td><code>imageMediaMetadata.location.altitude</code></td><td><p><code>number</code></p><p>Output only. The altitude stored in the image.</p></td></tr><tr><td><code>imageMediaMetadata.rotation</code></td><td><p><code>integer</code></p><p>Output only. The number of clockwise 90 degree rotations applied from the image's original orientation.</p></td></tr><tr><td><code>imageMediaMetadata.time</code></td><td><p><code>string</code></p><p>Output only. The date and time the photo was taken (EXIF DateTime).</p></td></tr><tr><td><code>imageMediaMetadata.cameraMake</code></td><td><p><code>string</code></p><p>Output only. The make of the camera used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.cameraModel</code></td><td><p><code>string</code></p><p>Output only. The model of the camera used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.exposureTime</code></td><td><p><code>number</code></p><p>Output only. The length of the exposure, in seconds.</p></td></tr><tr><td><code>imageMediaMetadata.aperture</code></td><td><p><code>number</code></p><p>Output only. The aperture used to create the photo (f-number).</p></td></tr><tr><td><code>imageMediaMetadata.focalLength</code></td><td><p><code>number</code></p><p>Output only. The focal length used to create the photo, in millimeters.</p></td></tr><tr><td><code>imageMediaMetadata.isoSpeed</code></td><td><p><code>integer</code></p><p>Output only. The ISO speed used to create the photo.</p></td></tr><tr><td><code>imageMediaMetadata.exposureBias</code></td><td><p><code>number</code></p><p>Output only. The exposure bias of the photo (APEX value).</p></td></tr><tr><td><code>imageMediaMetadata.maxApertureValue</code></td><td><p><code>number</code></p><p>Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value).</p></td></tr><tr><td><code>imageMediaMetadata.subjectDistance</code></td><td><p><code>integer</code></p><p>Output only. The distance to the subject of the photo, in meters.</p></td></tr><tr><td><code>imageMediaMetadata.lens</code></td><td><p><code>string</code></p><p>Output only. The lens used to create the photo.</p></td></tr><tr><td><code>videoMediaMetadata.width</code></td><td><p><code>integer</code></p><p>Output only. The width of the video in pixels.</p></td></tr><tr><td><code>videoMediaMetadata.height</code></td><td><p><code>integer</code></p><p>Output only. The height of the video in pixels.</p></td></tr><tr><td><code>videoMediaMetadata.durationMillis</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The duration of the video in milliseconds.</p></td></tr><tr><td><code>shortcutDetails</code></td><td><p><code>object</code></p><p>Shortcut file details. Only populated for shortcut files, which have the mimeType field set to <code>application/vnd.google-apps.shortcut</code>. Can only be set on <code>files.create</code> requests.</p></td></tr><tr><td><code>shortcutDetails.targetId</code></td><td><p><code>string</code></p><p>The ID of the file that this shortcut points to. Can only be set on <code>files.create</code> requests.</p></td></tr><tr><td><code>shortcutDetails.targetMimeType</code></td><td><p><code>string</code></p><p>Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.</p></td></tr><tr><td><code>shortcutDetails.targetResourceKey</code></td><td><p><code>string</code></p><p>Output only. The <code>resourceKey</code> for the target file.</p></td></tr><tr><td><code>contentRestrictions[]</code></td><td><p><code>object (<code>ContentRestriction</code>)</code></p><p>Restrictions for accessing the content of the file. Only populated if such a restriction exists.</p></td></tr><tr><td><code>resourceKey</code></td><td><p><code>string</code></p><p>Output only. A key needed to access the item via a shared link.</p></td></tr><tr><td><code>linkShareMetadata.securityUpdateEligible</code></td><td><p><code>boolean</code></p><p>Output only. Whether the file is eligible for security update.</p></td></tr><tr><td><code>linkShareMetadata.securityUpdateEnabled</code></td><td><p><code>boolean</code></p><p>Output only. Whether the security update is enabled for this file.</p></td></tr><tr><td><code>labelInfo</code></td><td><p><code>object</code></p><p>Output only. An overview of the labels on the file.</p></td></tr><tr><td><code>labelInfo.labels[]</code></td><td><p><code>object (<code>Label</code>)</code></p><p>Output only. The set of labels on the file as requested by the label IDs in the <code>includeLabels</code> parameter. By default, no labels are returned.</p></td></tr><tr><td><code>sha1Checksum</code></td><td><p><code>string</code></p><p>Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.</p></td></tr><tr><td><code>sha256Checksum</code></td><td><p><code>string</code></p><p>Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.</p></td></tr><tr><td><code>inheritedPermissionsDisabled</code></td><td><p><code>boolean</code></p><p>Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.</p></td></tr><tr><td><code>downloadRestrictions</code></td><td><p><code>object (<code>DownloadRestrictionsMetadata</code>)</code></p><p>Download restrictions applied on the file.</p></td></tr></tbody></table>

### ContentRestriction

A restriction for accessing the content of the file.

JSON representation

```
{
  "readOnly": boolean,
  "reason": string,
  "type": string,
  "restrictingUser": {
    object (User)
  },
  "restrictionTime": string,
  "ownerRestricted": boolean,
  "systemRestricted": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>readOnly</code></td><td><p><code>boolean</code></p><p>Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string</code></p><p>Reason for why the content of the file is restricted. This is only mutable on requests that also set <code>readOnly=true</code>.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>Output only. The type of the content restriction. Currently the only possible value is <code>globalContentRestriction</code>.</p></td></tr><tr><td><code>restrictingUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The user who set the content restriction. Only populated if <code>readOnly=true</code>.</p></td></tr><tr><td><code>restrictionTime</code></td><td><p><code>string</code></p><p>Output only. The time at which the content restriction was set (formatted <a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>). Only populated if <code>readOnly=true</code>.</p></td></tr><tr><td><code>ownerRestricted</code></td><td><p><code>boolean</code></p><p>Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with <code>organizer</code> capabilities can modify or remove this content restriction.</p></td></tr><tr><td><code>systemRestricted</code></td><td><p><code>boolean</code></p><p>Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions.</p></td></tr></tbody></table>

### DownloadRestrictionsMetadata

JSON representation

```
{
  "itemDownloadRestriction": {
    object (DownloadRestriction)
  },
  "effectiveDownloadRestrictionWithContext": {
    object (DownloadRestriction)
  }
}
```

### DownloadRestriction

A restriction for copy and download of the file.

JSON representation

```
{
  "restrictedForReaders": boolean,
  "restrictedForWriters": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>restrictedForReaders</code></td><td><p><code>boolean</code></p><p>Whether download and copy is restricted for readers.</p></td></tr><tr><td><code>restrictedForWriters</code></td><td><p><code>boolean</code></p><p>Whether download and copy is restricted for writers. If true, download is also restricted for readers.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>copy</h3></td><td>Creates a copy of a file and applies any requested updates with patch semantics.</td></tr><tr><td><h3>create</h3></td><td><p>Creates a file.</p></td></tr><tr><td><h3>delete</h3></td><td>Permanently deletes a file owned by the user without moving it to the trash.</td></tr><tr><td><h3>download</h3></td><td>Downloads the content of a file.</td></tr><tr><td><h3>emptyTrash</h3></td><td>Permanently deletes all of the user's trashed files.</td></tr><tr><td><h3>export</h3></td><td>Exports a Google Workspace document to the requested MIME type and returns exported byte content.</td></tr><tr><td><h3>generateIds</h3></td><td>Generates a set of file IDs which can be provided in create or copy requests.</td></tr><tr><td><h3>get</h3></td><td><p>Gets a file's metadata or content by ID.</p></td></tr><tr><td><h3>list</h3></td><td><p>Lists the user's files.</p></td></tr><tr><td><h3>listLabels</h3></td><td>Lists the labels on a file.</td></tr><tr><td><h3>modifyLabels</h3></td><td>Modifies the set of labels applied to a file.</td></tr><tr><td><h3>update</h3></td><td><p>Updates a file's metadata, content, or both.</p></td></tr><tr><td><h3>watch</h3></td><td>Subscribes to changes to a file.</td></tr></tbody></table>
