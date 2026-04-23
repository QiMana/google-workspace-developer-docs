---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/deprecated
root: workspace
fetched_at: 2026-04-23T15:27:30.169Z
---

# Deprecated Items

## TeamDrive

This item is deprecated; please see `Drive` instead.

JSON representation

```
{
  "name": string,
  "title": string,
  "root": {
    object (DriveItem)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>This field is deprecated; please see <code>Drive.name</code> instead.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>This field is deprecated; please see <code>Drive.title</code> instead.</p></td></tr><tr><td><code>root</code></td><td><p><code>object (<code>DriveItem</code>)</code></p><p>This field is deprecated; please see <code>Drive.root</code> instead.</p></td></tr></tbody></table>

## TeamDriveReference

This item is deprecated; please see `DriveReference` instead.

JSON representation

```
{
  "name": string,
  "title": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>This field is deprecated; please see <code>DriveReference.name</code> instead.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>This field is deprecated; please see <code>DriveReference.title</code> instead.</p></td></tr></tbody></table>

## Folder

This item is deprecated; please see `DriveFolder` instead.

JSON representation

```
{
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>This field is deprecated; please see <code>DriveFolder.type</code> instead.</p></td></tr></tbody></table>

## File

This type has no fields.

This item is deprecated; please see `DriveFile` instead.

## Type

This item is deprecated; please see `DriveFolder.Type` instead.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>This item is deprecated; please see <code>DriveFolder.Type</code> instead.</td></tr><tr><td><code>MY_DRIVE_ROOT</code></td><td>This item is deprecated; please see <code>DriveFolder.Type</code> instead.</td></tr><tr><td><code>TEAM_DRIVE_ROOT</code></td><td>This item is deprecated; please see <code>DriveFolder.Type</code> instead.</td></tr><tr><td><code>STANDARD_FOLDER</code></td><td>This item is deprecated; please see <code>DriveFolder.Type</code> instead.</td></tr></tbody></table>
