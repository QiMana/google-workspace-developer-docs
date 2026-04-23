---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/about
root: workspace
fetched_at: 2026-04-23T15:27:48.983Z
---

# REST Resource: about

## Resource: About

An item with user information and settings.

JSON representation

```
{
  "importFormats": [
    {
      "source": string,
      "targets": [
        string
      ]
    }
  ],
  "exportFormats": [
    {
      "source": string,
      "targets": [
        string
      ]
    }
  ],
  "additionalRoleInfo": [
    {
      "type": string,
      "roleSets": [
        {
          "additionalRoles": [
            string
          ],
          "primaryRole": string
        }
      ]
    }
  ],
  "features": [
    {
      "featureName": string,
      "featureRate": number
    }
  ],
  "maxUploadSizes": [
    {
      "type": string,
      "size": string
    }
  ],
  "folderColorPalette": [
    string
  ],
  "driveThemes": [
    {
      "id": string,
      "backgroundImageLink": string,
      "colorRgb": string
    }
  ],
  "quotaBytesByService": [
    {
      "serviceName": string,
      "bytesUsed": string
    }
  ],
  "teamDriveThemes": [
    {
      "id": string,
      "backgroundImageLink": string,
      "colorRgb": string
    }
  ],
  "name": string,
  "quotaBytesTotal": string,
  "quotaBytesUsed": string,
  "quotaBytesUsedInTrash": string,
  "largestChangeId": string,
  "remainingChangeIds": string,
  "rootFolderId": string,
  "domainSharingPolicy": string,
  "kind": string,
  "permissionId": string,
  "isCurrentAppInstalled": boolean,
  "quotaBytesUsedAggregate": string,
  "user": {
    object (User)
  },
  "etag": string,
  "languageCode": string,
  "selfLink": string,
  "quotaType": string,
  "canCreateDrives": boolean,
  "canCreateTeamDrives": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>importFormats[]</code></td><td><p><code>object</code></p><p>The allowable import formats.</p></td></tr><tr><td><code>importFormats[].source</code></td><td><p><code>string</code></p><p>The imported file's content type to convert from.</p></td></tr><tr><td><code>importFormats[].targets[]</code></td><td><p><code>string</code></p><p>The possible content types to convert to.</p></td></tr><tr><td><code>exportFormats[]</code></td><td><p><code>object</code></p><p>The allowable export formats.</p></td></tr><tr><td><code>exportFormats[].source</code></td><td><p><code>string</code></p><p>The content type to convert from.</p></td></tr><tr><td><code>exportFormats[].targets[]</code></td><td><p><code>string</code></p><p>The possible content types to convert to.</p></td></tr><tr><td><code>additionalRoleInfo[]</code></td><td><p><code>object</code></p><p>Information about supported additional roles per file type. The most specific type takes precedence.</p></td></tr><tr><td><code>additionalRoleInfo[].type</code></td><td><p><code>string</code></p><p>The content type that this additional role info applies to.</p></td></tr><tr><td><code>additionalRoleInfo[].roleSets[]</code></td><td><p><code>object</code></p><p>The supported additional roles per primary role.</p></td></tr><tr><td><code>additionalRoleInfo[].roleSets[].primaryRole</code></td><td><p><code>string</code></p><p>A primary permission role.</p></td></tr><tr><td><code>additionalRoleInfo[].roleSets[].additionalRoles[]</code></td><td><p><code>string</code></p><p>The supported additional roles with the primary role.</p></td></tr><tr><td><code>features[]</code></td><td><p><code>object</code></p><p>List of additional features enabled on this account.</p></td></tr><tr><td><code>features[].featureName</code></td><td><p><code>string</code></p><p>The name of the feature.</p></td></tr><tr><td><code>features[].featureRate</code></td><td><p><code>number</code></p><p>The request limit rate for this feature, in queries per second.</p></td></tr><tr><td><code>maxUploadSizes[]</code></td><td><p><code>object</code></p><p>List of max upload sizes for each file type. The most specific type takes precedence.</p></td></tr><tr><td><code>maxUploadSizes[].type</code></td><td><p><code>string</code></p><p>The file type.</p></td></tr><tr><td><code>maxUploadSizes[].size</code></td><td><p><code>string (int64 format)</code></p><p>The max upload size for this type.</p></td></tr><tr><td><code>folderColorPalette[]</code></td><td><p><code>string</code></p><p>The palette of allowable folder colors as RGB hex strings.</p></td></tr><tr><td><code>driveThemes[]</code></td><td><p><code>object</code></p><p>A list of themes that are supported for shared drives.</p></td></tr><tr><td><code>driveThemes[].id</code></td><td><p><code>string</code></p><p>The ID of the theme.</p></td></tr><tr><td><code>driveThemes[].backgroundImageLink</code></td><td><p><code>string</code></p><p>A link to this theme's background image.</p></td></tr><tr><td><code>driveThemes[].colorRgb</code></td><td><p><code>string</code></p><p>The color of this theme as an RGB hex string.</p></td></tr><tr><td><code>quotaBytesByService[]</code></td><td><p><code>object</code></p><p>The amount of storage quota used by different Google services.</p></td></tr><tr><td><code>quotaBytesByService[].serviceName</code></td><td><p><code>string</code></p><p>The service's name, e.g. DRIVE, GMAIL, or PHOTOS.</p></td></tr><tr><td><code>quotaBytesByService[].bytesUsed</code></td><td><p><code>string (int64 format)</code></p><p>The storage quota bytes used by the service.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b></code></td><td><p><code>object</code></p><p>Deprecated: Use <code>driveThemes</code> instead.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b>.id<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveThemes/id</code> instead.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b>.backgroundImageLink<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveThemes/backgroundImageLink</code> instead.</p></td></tr><tr><td><code>teamDriveThemes[]<br><b>(deprecated)</b>.colorRgb<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated: Use <code>driveThemes/colorRgb</code> instead.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the current user.</p></td></tr><tr><td><code>quotaBytesTotal</code></td><td><p><code>string (int64 format)</code></p><p>The total number of quota bytes. This is only relevant when quotaType is LIMITED.</p></td></tr><tr><td><code>quotaBytesUsed</code></td><td><p><code>string (int64 format)</code></p><p>The number of quota bytes used by Google Drive.</p></td></tr><tr><td><code>quotaBytesUsedInTrash</code></td><td><p><code>string (int64 format)</code></p><p>The number of quota bytes used by trashed items.</p></td></tr><tr><td><code>largestChangeId</code></td><td><p><code>string (int64 format)</code></p><p>The largest change id.</p></td></tr><tr><td><code>remainingChangeIds</code></td><td><p><code>string (int64 format)</code></p><p>The number of remaining change ids, limited to no more than 2500.</p></td></tr><tr><td><code>rootFolderId</code></td><td><p><code>string</code></p><p>The id of the root folder.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>drive#about</code>.</p></td></tr><tr><td><code>permissionId</code></td><td><p><code>string</code></p><p>The current user's ID as visible in the permissions collection.</p></td></tr><tr><td><code>isCurrentAppInstalled</code></td><td><p><code>boolean</code></p><p>A boolean indicating whether the authenticated app is installed by the authenticated user.</p></td></tr><tr><td><code>quotaBytesUsedAggregate</code></td><td><p><code>string (int64 format)</code></p><p>The number of quota bytes used by all Google apps (Drive, Picasa, etc.).</p></td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>The authenticated user.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>The ETag of the item.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (<a href="http://www.unicode.org/reports/tr35/)">http://www.unicode.org/reports/tr35/)</a>.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>A link back to this item.</p></td></tr><tr><td><code>quotaType</code></td><td><p><code>string</code></p><p>The type of the user's storage quota. Possible values are:</p><ul><li><code>LIMITED</code></li><li><code>UNLIMITED</code></li></ul></td></tr><tr><td><code>canCreateDrives</code></td><td><p><code>boolean</code></p><p>Whether the user can create shared drives.</p></td></tr><tr><td><code>canCreateTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>canCreateDrives</code> instead.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the information about the current user along with Drive API settings</td></tr></tbody></table>
