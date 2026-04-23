---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/apps
root: workspace
fetched_at: 2026-04-23T15:28:00.958Z
---

# REST Resource: apps

## Resource: App

The `apps` resource provides a list of apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.

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
      object (Icons)
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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>primaryMimeTypes[]</code></td><td><p><code>string</code></p><p>The list of primary MIME types.</p></td></tr><tr><td><code>secondaryMimeTypes[]</code></td><td><p><code>string</code></p><p>The list of secondary MIME types.</p></td></tr><tr><td><code>primaryFileExtensions[]</code></td><td><p><code>string</code></p><p>The list of primary file extensions.</p></td></tr><tr><td><code>secondaryFileExtensions[]</code></td><td><p><code>string</code></p><p>The list of secondary file extensions.</p></td></tr><tr><td><code>icons[]</code></td><td><p><code>object (<code>Icons</code>)</code></p><p>The various icons for the app.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the app.</p></td></tr><tr><td><code>objectType</code></td><td><p><code>string</code></p><p>The type of object this app creates such as a Chart. If empty, the app name should be used instead.</p></td></tr><tr><td><code>supportsCreate</code></td><td><p><code>boolean</code></p><p>Whether this app supports creating objects.</p></td></tr><tr><td><code>productUrl</code></td><td><p><code>string</code></p><p>A link to the product listing for this app.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the app.</p></td></tr><tr><td><code>supportsImport</code></td><td><p><code>boolean</code></p><p>Whether this app supports importing from Google Docs.</p></td></tr><tr><td><code>installed</code></td><td><p><code>boolean</code></p><p>Whether the app is installed.</p></td></tr><tr><td><code>authorized</code></td><td><p><code>boolean</code></p><p>Whether the app is authorized to access data on the user's Drive.</p></td></tr><tr><td><code>useByDefault</code></td><td><p><code>boolean</code></p><p>Whether the app is selected as the default handler for the types it supports.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string "drive#app".</p></td></tr><tr><td><code>shortDescription</code></td><td><p><code>string</code></p><p>A short description of the app.</p></td></tr><tr><td><code>longDescription</code></td><td><p><code>string</code></p><p>A long description of the app.</p></td></tr><tr><td><code>supportsMultiOpen</code></td><td><p><code>boolean</code></p><p>Whether this app supports opening more than one file.</p></td></tr><tr><td><code>productId</code></td><td><p><code>string</code></p><p>The ID of the product listing for this app.</p></td></tr><tr><td><code>openUrlTemplate</code></td><td><p><code>string</code></p><p>The template URL for opening files with this app. The template contains</p><p><code>{ids}</code></p><p>or</p><p><code>{exportIds}</code></p><p>to be replaced by the actual file IDs. For more information, see <a href="https://developers.google.com/workspace/drive/web/integrate-open">Open Files</a> for the full documentation.</p></td></tr><tr><td><code>createUrl</code></td><td><p><code>string</code></p><p>The URL to create a file with this app.</p></td></tr><tr><td><code>createInFolderTemplate</code></td><td><p><code>string</code></p><p>The template URL to create a file with this app in a given folder. The template contains the {folderId} to be replaced by the folder ID house the new file.</p></td></tr><tr><td><code>supportsOfflineCreate</code></td><td><p><code>boolean</code></p><p>Whether this app supports creating files when offline.</p></td></tr><tr><td><code>hasDriveWideScope</code></td><td><p><code>boolean</code></p><p>Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user's Drive.</p></td></tr></tbody></table>

## Icons

JSON representation

```
{
  "size": integer,
  "category": string,
  "iconUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>size</code></td><td><p><code>integer</code></p><p>Size of the icon. Represented as the maximum of the width and height.</p></td></tr><tr><td><code>category</code></td><td><p><code>string</code></p><p>Category of the icon. Allowed values are:</p><ul><li><code>application</code> - The icon for the application.</li><li><code>document</code> - The icon for a file associated with the app.</li><li><code>documentShared</code> - The icon for a shared file associated with the app.</li></ul></td></tr><tr><td><code>iconUrl</code></td><td><p><code>string</code></p><p>URL for the icon.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a specific app.</td></tr><tr><td><h3>list</h3></td><td>Lists a user's installed apps.</td></tr></tbody></table>
