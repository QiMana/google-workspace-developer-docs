---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/driveitem
root: workspace
fetched_at: 2026-04-23T15:27:29.613Z
---

# DriveItem

## DriveItem

A Drive item, such as a file or folder.

JSON representation

```
{
  "name": string,
  "title": string,
  "file": {
    object (File)
  },
  "folder": {
    object (Folder)
  },
  "mimeType": string,
  "owner": {
    object (Owner)
  },

  "driveFile": {
    object (DriveFile)
  },
  "driveFolder": {
    object (DriveFolder)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The target Drive item. The format is <code>items/ITEM_ID</code>.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the Drive item.</p></td></tr><tr><td><code>file
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>File</code>)</code></p><p>This field is deprecated; please use the <code>driveFile</code> field instead.</p></td></tr><tr><td><code>folder
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Folder</code>)</code></p><p>This field is deprecated; please use the <code>driveFolder</code> field instead.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The MIME type of the Drive item. See <a href="https://developers.google.com/workspace/drive/v3/web/mime-types">https://developers.google.com/workspace/drive/v3/web/mime-types</a>.</p></td></tr><tr><td><code>owner</code></td><td><p><code>object (<code>Owner</code>)</code></p><p>Information about the owner of this Drive item.</p></td></tr><tr><td colspan="2">Union field <code>item_type</code>. If present, this describes the type of the Drive item. <code>item_type</code> can be only one of the following:</td></tr><tr><td><code>driveFile</code></td><td><p><code>object (<code>DriveFile</code>)</code></p><p>The Drive item is a file.</p></td></tr><tr><td><code>driveFolder</code></td><td><p><code>object (<code>DriveFolder</code>)</code></p><p>The Drive item is a folder. Includes information about the type of folder.</p></td></tr></tbody></table>

## DriveFolder

A Drive item which is a folder.

JSON representation

```
{
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of Drive folder.</p></td></tr></tbody></table>

## DriveFile

This type has no fields.

A Drive item which is a file.

## Type

The type of a Drive folder.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>The folder type is unknown.</td></tr><tr><td><code>MY_DRIVE_ROOT</code></td><td>The folder is the root of a user's MyDrive.</td></tr><tr><td><code>SHARED_DRIVE_ROOT</code></td><td>The folder is the root of a shared drive.</td></tr><tr><td><code>STANDARD_FOLDER</code></td><td>The folder is a standard, non-root, folder.</td></tr></tbody></table>
