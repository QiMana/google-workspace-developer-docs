---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/about
root: workspace
fetched_at: 2026-04-23T15:27:58.001Z
---

# REST Resource: about

## Resource: About

Information about the user, the user's Drive, and system capabilities.

JSON representation

```
{
  "driveThemes": [
    {
      "id": string,
      "backgroundImageLink": string,
      "colorRgb": string
    }
  ],
  "importFormats": {
    string: value,
    ...
  },
  "exportFormats": {
    string: value,
    ...
  },
  "folderColorPalette": [
    string
  ],
  "maxImportSizes": {
    string: string,
    ...
  },
  "teamDriveThemes": [
    {
      "id": string,
      "backgroundImageLink": string,
      "colorRgb": string
    }
  ],
  "kind": string,
  "storageQuota": {
    "limit": string,
    "usageInDrive": string,
    "usageInDriveTrash": string,
    "usage": string
  },
  "canCreateDrives": boolean,
  "appInstalled": boolean,
  "user": {
    object (User)
  },
  "maxUploadSize": string,
  "canCreateTeamDrives": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>driveThemes[]</code></td><td><p><code>object</code></p><p>A list of themes that are supported for shared drives.</p></td></tr><tr><td><code>driveThemes[].id</code></td><td><p><code>string</code></p><p>The ID of the theme.</p></td></tr><tr><td><code>driveThemes[].backgroundImageLink</code></td><td><p><code>string</code></p><p>A link to this theme's background image.</p></td></tr><tr><td><code>driveThemes[].colorRgb</code></td><td><p><code>string</code></p><p>The color of this theme as an RGB hex string.</p></td></tr><tr><td><code>importFormats</code></td><td><p><code>map (key: string, value: value (<code>Value</code> format))</code></p><p>A map of source MIME type to possible targets for all supported imports.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>exportFormats</code></td><td><p><code>map (key: string, value: value (<code>Value</code> format))</code></p><p>A map of source MIME type to possible targets for all supported exports.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>folderColorPalette[]</code></td><td><p><code>string</code></p><p>The currently supported folder colors as RGB hex strings.</p></td></tr><tr><td><code>maxImportSizes</code></td><td><p><code>map (key: string, value: string (int64 format))</code></p><p>A map of maximum import sizes by MIME type, in bytes.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b></code></td><td><p><code>object</code></p><p>Deprecated: Use <code>driveThemes</code> instead.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b>.id<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveThemes/id</code> instead.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b>.backgroundImageLink<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveThemes/backgroundImageLink</code> instead.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b>.colorRgb<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveThemes/colorRgb</code> instead.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies what kind of resource this is. Value: the fixed string <code>"drive#about"</code>.</p></td></tr><tr><td><code>storageQuota</code></td><td><p><code>object</code></p><p>The user's storage quota limits and usage. For users that are part of an organization with pooled storage, information about the limit and usage across all services is for the organization, rather than the individual user. All fields are measured in bytes.</p></td></tr><tr><td><code>storageQuota.limit</code></td><td><p><code>string (int64 format)</code></p><p>The usage limit, if applicable. This will not be present if the user has unlimited storage. For users that are part of an organization with pooled storage, this is the limit for the organization, rather than the individual user.</p></td></tr><tr><td><code>storageQuota.usageInDrive</code></td><td><p><code>string (int64 format)</code></p><p>The usage by all files in Google Drive.</p></td></tr><tr><td><code>storageQuota.usageInDriveTrash</code></td><td><p><code>string (int64 format)</code></p><p>The usage by trashed files in Google Drive.</p></td></tr><tr><td><code>storageQuota.usage</code></td><td><p><code>string (int64 format)</code></p><p>The total usage across all services. For users that are part of an organization with pooled storage, this is the usage across all services for the organization, rather than the individual user.</p></td></tr><tr><td><code>canCreateDrives</code></td><td><p><code>boolean</code></p><p>Whether the user can create shared drives.</p></td></tr><tr><td><code>appInstalled</code></td><td><p><code>boolean</code></p><p>Whether the user has installed the requesting app.</p></td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>The authenticated user.</p></td></tr><tr><td><code>maxUploadSize</code></td><td><p><code>string (int64 format)</code></p><p>The maximum upload size in bytes.</p></td></tr><tr><td><code>canCreateTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>canCreateDrives</code> instead.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets information about the user, the user's Drive, and system capabilities.</td></tr></tbody></table>
