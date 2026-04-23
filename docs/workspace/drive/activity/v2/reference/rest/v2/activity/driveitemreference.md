---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/driveitemreference
root: workspace
fetched_at: 2026-04-23T15:27:30.249Z
---

# DriveItemReference

## DriveItemReference

A lightweight reference to a Drive item, such as a file or folder.

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

  "driveFile": {
    
  },
  "driveFolder": {
    
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
       </b></code></td><td><p><code>object (<code>Folder</code>)</code></p><p>This field is deprecated; please use the <code>driveFolder</code> field instead.</p></td></tr><tr><td colspan="2">Union field <code>item_type</code>. If present, this describes the type of the Drive item. <code>item_type</code> can be only one of the following:</td></tr><tr><td><code>driveFile</code></td><td><p>The Drive item is a file.</p></td></tr><tr><td><code>driveFolder</code></td><td><p>The Drive item is a folder. Includes information about the type of folder.</p></td></tr></tbody></table>
