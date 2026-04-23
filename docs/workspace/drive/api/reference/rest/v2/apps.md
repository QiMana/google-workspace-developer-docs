---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/apps
root: workspace
fetched_at: 2026-04-23T15:27:49.506Z
---

# REST Resource: apps

## Resource: App

The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.

Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.

JSON representation

```
{
  "primaryMimeTypes": [
    string
  ],
  "secondaryMimeTypes": [
    string
  ],
  "primaryFileExtensions": [
    string
  ],
  "secondaryFileExtensions": [
    string
  ],
  "icons": [
    {
      "size": integer,
      "category": string,
      "iconUrl": string
    }
  ],
  "name": string,
  "objectType": string,
  "supportsCreate": boolean,
  "productUrl": string,
  "id": string,
  "supportsImport": boolean,
  "installed": boolean,
  "authorized": boolean,
  "useByDefault": boolean,
  "kind": string,
  "shortDescription": string,
  "longDescription": string,
  "supportsMultiOpen": boolean,
  "productId": string,
  "openUrlTemplate": string,
  "createUrl": string,
  "createInFolderTemplate": string,
  "supportsOfflineCreate": boolean,
  "hasDriveWideScope": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>primaryMimeTypes[]</code></td><td><p><code>string</code></p><p>The list of primary mime types.</p></td></tr><tr><td><code>secondaryMimeTypes[]</code></td><td><p><code>string</code></p><p>The list of secondary mime types.</p></td></tr><tr><td><code>primaryFileExtensions[]</code></td><td><p><code>string</code></p><p>The list of primary file extensions.</p></td></tr><tr><td><code>secondaryFileExtensions[]</code></td><td><p><code>string</code></p><p>The list of secondary file extensions.</p></td></tr><tr><td><code>icons[]</code></td><td><p><code>object</code></p><p>The various icons for the app.</p></td></tr><tr><td><code>icons[].size</code></td><td><p><code>integer</code></p><p>Size of the icon. Represented as the maximum of the width and height.</p></td></tr><tr><td><code>icons[].category</code></td><td><p><code>string</code></p><p>Category of the icon. Allowed values are:</p><ul><li><code>application</code> - icon for the application</li><li><code>document</code> - icon for a file associated with the app</li><li><code>documentShared</code> - icon for a shared file associated with the app</li></ul></td></tr><tr><td><code>icons[].iconUrl</code></td><td><p><code>string</code></p><p>URL for the icon.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the app.</p></td></tr><tr><td><code>objectType</code></td><td><p><code>string</code></p><p>The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.</p></td></tr><tr><td><code>supportsCreate</code></td><td><p><code>boolean</code></p><p>Whether this app supports creating new objects.</p></td></tr><tr><td><code>productUrl</code></td><td><p><code>string</code></p><p>A link to the product listing for this app.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the app.</p></td></tr><tr><td><code>supportsImport</code></td><td><p><code>boolean</code></p><p>Whether this app supports importing from Docs Editors.</p></td></tr><tr><td><code>installed</code></td><td><p><code>boolean</code></p><p>Whether the app is installed.</p></td></tr><tr><td><code>authorized</code></td><td><p><code>boolean</code></p><p>Whether the app is authorized to access data on the user's Drive.</p></td></tr><tr><td><code>useByDefault</code></td><td><p><code>boolean</code></p><p>Whether the app is selected as the default handler for the types it supports.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>drive#app</code>.</p></td></tr><tr><td><code>shortDescription</code></td><td><p><code>string</code></p><p>A short description of the app.</p></td></tr><tr><td><code>longDescription</code></td><td><p><code>string</code></p><p>A long description of the app.</p></td></tr><tr><td><code>supportsMultiOpen</code></td><td><p><code>boolean</code></p><p>Whether this app supports opening more than one file.</p></td></tr><tr><td><code>productId</code></td><td><p><code>string</code></p><p>The ID of the product listing for this app.</p></td></tr><tr><td><code>openUrlTemplate</code></td><td><p><code>string</code></p><p>The template url for opening files with this app. The template will contain <code>{ids}</code> and/or <code>{exportIds}</code> to be replaced by the actual file ids. See <a href="https://developers.google.com/workspace/drive/web/integrate-open">Open Files</a> for the full documentation.</p></td></tr><tr><td><code>createUrl</code></td><td><p><code>string</code></p><p>The url to create a new file with this app.</p></td></tr><tr><td><code>createInFolderTemplate</code></td><td><p><code>string</code></p><p>The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.</p></td></tr><tr><td><code>supportsOfflineCreate</code></td><td><p><code>boolean</code></p><p>Whether this app supports creating new files when offline.</p></td></tr><tr><td><code>hasDriveWideScope</code></td><td><p><code>boolean</code></p><p>Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a specific app.</td></tr><tr><td><h3>list</h3></td><td>Lists a user's installed apps.</td></tr></tbody></table>
