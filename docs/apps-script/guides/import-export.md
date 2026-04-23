---
source: https://developers.google.com/apps-script/guides/import-export
root: apps-script
fetched_at: 2026-04-23T15:18:23.979Z
---

# Importing and Exporting Projects

## Page Summary

- The Google Drive API can be used to import and export Apps Script source code from Google Drive.
- This allows developers to use local code editors, version control systems like Git, and collaborate with others before uploading finalized code.
- Server-side script files must end in ".gs" and client-side script files must end in ".html" for importing.
- Importing project files will overwrite existing data in those files, and only standalone scripts can be imported or exported.
- The Google Drive API uses `GET` for downloading and `PUT/POST` for uploading files, requiring OAuth 2.0 authorization with the `https://www.googleapis.com/auth/drive.scripts` scope.

Since Google Apps Script projects reside on Google Drive, developers can import and export Apps Script source code using the [Google Drive API](../../workspace/drive/api/reference/rest/v2.md) (not to be confused with the [Drive Service](../reference/drive.md) in Apps Script).

For example, a developer can author new Apps Script code on her local machine with her favorite code editor and use a version control system like [Git](https://git-scm.com/) to collaborate with other developers. When a version is finalized, she can upload (import) the files to Google Drive using the REST API, where they can be used like any other Apps Script project.

Code changes can be made on the local versions and synced to the Apps Script project using the Google Drive API. Existing projects can be downloaded (exported) from Google Drive to a local machine.

## Features and Limitations

If you want to use the Google Drive API to import or export projects, be aware of the following:

1. **Server-side script files are expected to end in ".gs".** You may wish to develop locally using.js files, but make sure to rename to include have a.gs extension prior to importing to Google Drive.
2. **Client-side script files need to end with ".html".** This includes client-side.html,.js or.css files. Again, you can locally develop using other extensions, but it is important to have the.html extension prior to importing to Google Drive.
3. **When you import project files to Google Drive, all existing data in those files will be overwritten.** You cannot append or insert partial text; the whole file must be updated.
4. **Server-side script files must contain valid JavaScript.** If there are errors in your server.js files, the Google Drive API update call will fail with a 5xx error. You can prevent this by linting your code prior to importing.
5. **Empty files cannot be imported.** The Google Drive API update call will fail with a 5xx error if you try to upload an empty file.
6. **Only standalone scripts can be imported or exported.** [Container-bound](./bound.md) scripts cannot be accessed through the Google Drive API.
7. **Only source code can be imported or exported.** Resources such as project properties or logs are also not exposed by the Google Drive API. Actions such as script versioning, publishing or executing the script are not possible using the Google Drive API.
8. **You are not limited to a single server `Code.gs` file.** You can spread server code across multiple files for ease of development. All of the server files are loaded into the same global namespace, so use JavaScript classes when you want to provide safe encapsulation.

## Drive API

The Google Drive API allows developers to access files in Google Drive programmatically. This API uses `GET` to download files and `PUT/POST` to upload files. Refer to the [Google Drive API Overview page](../../workspace/drive/api/guides/about-sdk.md) for detailed documentation and quickstarts.

This guide focuses on listing and moving files with the [Files resource](../../workspace/drive/api/reference/rest/v2/files.md) using these calls:

- [`list`](../../workspace/drive/api/reference/rest/v2/files/list.md)
- [`get`](../../workspace/drive/api/reference/rest/v2/files/get.md)
- [`update`](../../workspace/drive/api/reference/rest/v2/files/update.md)
- [`insert`](../../workspace/drive/api/reference/rest/v2/files/insert.md)

### Authorization

All requests to the Google Drive API must be authorized by an authenticated user through the OAuth 2.0 protocol. For more details, refer to the [Google Drive API authorizing documentation](../../workspace/drive/api/guides/api-specific-auth.md).

In addition to other [scopes](../../workspace/drive/api/guides/api-specific-auth.md) an application might need (such as `https://www.googleapis.com/auth/drive`), all applications attempting to import or export Google Apps Script projects must request the special scope:

`https://www.googleapis.com/auth/drive.scripts`

To test the following sample requests, use an OAuth 2.0 bearer token obtained from the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground).

### List existing projects

To list all Apps Script projects in your Drive, use the [Files resource](../../workspace/drive/api/reference/rest/v2/files.md) to query for files with the MIME type of `application/vnd.google-apps.script`. To filter the response to only include files you own, include the search parameter `'me' in owners`.

Here is a sample request and response that shows an array of Apps Script projects returned through a JSON response.

```
GET https://www.googleapis.com/drive/v2/files?q=mimeType%3D'application%2Fvnd.google-apps.script'+and+'me'+in+owners
Authorization:  Bearer ya29.fakebearerstring
```

```
{
 "kind": "drive#fileList",
 "etag": "\"kjsas92/f3zGUXczKMxEB_9ZTMRFOF3d1ZU\"",
 "selfLink": "https://www.googleapis.com/drive/v2/files?q=mimeType%3D'application/vnd.google-apps.script'+and+'me'+in+owners",
 "items": [
  {
   "kind": "drive#file",
   "id": "1vi0uwcMdHsRv1YFtgq7XdiTGSdqgjIYpdQNC0A_Udn79LOhH0vYL132D",
   "etag": "\"kjsas92/MTM3MDk3ODY5ODQyNg\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1vi0uwcMdHsRv1YFtgq7XdiTGSdqgjIYpdQNC0A_Udn79LOhH0vYL132D",
   "alternateLink": "https://script.google.com/a/google.com/d/1vi0uwcMdHsRv1YFtgq7XdiTGSdqgjIYpdQNC0A_Udn79LOhH0vYL132D/edit?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_script_list.png",
   "title": "Mail merge",
   "mimeType": "application/vnd.google-apps.script",
   "description": "",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-06-11T19:24:45.188Z",
   "modifiedDate": "2013-06-11T19:24:58.426Z",
   "modifiedByMeDate": "2013-06-11T19:24:58.426Z",
   "lastViewedByMeDate": "2013-06-11T19:24:58.426Z",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0APdyIOzo7bWDUk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1vi0uwcMdHsRv1YFtgq7XdiTGSdqgjIYpdQNC0A_Udn79LOhH0vYL132D/parents/0APdyIOzo7bWDUk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0APdyIOzo7bWDUk9PVA",
     "isRoot": true
    }
   ],
   "exportLinks": {
    "application/json": "https://script.google.com/feeds/download/export?id=1234567890abcefghijklmnopqrstuvwxyz&format=json"
   },
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"kjsas92/259X2r5DVstv1CcIQTjt_RQPSW8\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1vi0uwcMdHsRv1YFtgq7XdiTGSdqgjIYpdQNC0A_Udn79LOhH0vYL132D/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "John Doe"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "John Doe",
     "picture": {
      "url": "https://lh4.googleusercontent.com/-yd1rIb6Pe2Y/AAAAAAAAAAI/AAAAAAAAAGs/PP5vTuZonik/s64/photo.jpg"
     },
     "isAuthenticatedUser": true,
     "permissionId": "1234566789"
    }
   ],
   "lastModifyingUserName": "John Doe",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "John Doe",
    "picture": {
     "url": "https://lh4.googleusercontent.com/-yd1rIb6Pe2Y/AAAAAAAAAAI/AAAAAAAAAGs/PP5vTuZonik/s64/photo.jpg"
    },
    "isAuthenticatedUser": true,
    "permissionId": "1234566789"
   },
   "editable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false
  }
 ]
}
```

If you know the file ID of an Apps Script project, you can directly fetch it with the following API call:

```
GET https://www.googleapis.com/drive/v2/files/1234567890abcefghijklmnopqrstuvwxyz
Authorization:  Bearer ya29.fakebearerstring
```

The file ID of a project is not the same as the project key. The file ID is the alphanumeric string in the project's URL.

### Export projects from Drive

Once you get a [`File`](../../workspace/drive/api/reference/rest/v2/files.md) resource back from the API, the `exportLinks` property will contain a URL to fetch to get the contents of the project as JSON data. Here is a sample of what this URL might look like:

```
https://script.google.com/feeds/download/export?id=1234567890abcefghijklmnopqrstuvwxyz&format=json
```

Make a request to this URL to retrieve the contents of the project itself. Ensure that you include an `Authorization` header with the same OAuth `Bearer` token

Here is a sample request and response:

```
GET https://script.google.com/feeds/download/export?id=1234567890abcefghijklmnopqrstuvwxyz&format=json
Authorization:  Bearer ya29.fakebearerstring
```

```
{
  "files": [
    {
      "id":"9basdfbd-749a-4as9b-b9d1-d64basdf803",
      "name":"Code",
      "type":"server_js",
      "source":"function doGet() {\n  return HtmlService.createHtmlOutputFromFile(\u0027index\u0027);\n}\n"
    },
    {
      "id":"3asf7c0d-1afb-4a9-8431-5asdfc79e7ae",
      "name":"index",
      "type":"html",
      "source":"\u003chtml\u003e\n  \u003cbody\u003e\n    Hello, world!\n  \u003c/body\u003e\n\u003c/html\u003e"
    }
  ]
}
```

The preceding example includes code for a web app from the [HTML Service](./html.md#serve_html_as_a_web_app) guide. You get back an array of `Files`, each with the following 4 properties:

| `id` | Internal identifier of a file within a project, needed to reference this file during updates. |
| --- | --- |
| `name` | The name of the file without extensions, as displayed in the Script Editor. |
| `type` | The two types of files are server\_js and html. |
| `source` | The encoded source code contained in the file. |

### Import projects to Drive

To update an existing project, make an HTTP `PUT` call to the file [`update`](../../workspace/drive/api/reference/rest/v2/files/update.md) API with the appropriate `fileId`. The following example shows a sample transaction for the media-upload portion. Using one of the [client libraries](../../workspace/drive/api/guides/downloads.md), your application can easily include metadata and the media in the same upload call. The `Content-Type` header specifies the type of the content uploaded in this case.

```
PUT https://www.googleapis.com/upload/drive/v2/files/1234567890abcefghijklmnopqrstuvwxyz
Authorization:  Bearer ya29.fakebearerestring
Content-Type:  application/vnd.google-apps.script+json
```

```
{
  "files": [
    {
      "id":"9basdfbd-749a-4as9b-b9d1-d64basdf803",
      "name":"Code",
      "type":"server_js",
      "source":"function doGet() {\n  return HtmlService.createHtmlOutputFromFile(\u0027index\u0027);\n}\n"
    },
    {
      "id":"3asf7c0d-1afb-4a9-8431-5asdfc79e7ae",
      "name":"index",
      "type":"html",
      "source":"\u003chtml\u003e\n  \u003cbody\u003e\n    New message!!\n  \u003c/body\u003e\n\u003c/html\u003e"
    }
  ]
}
```

#### Create new files within a project

To create a new file within a project, send a `PUT` request for a file without the `id` property. If you include a file with an unknown identifier, the system will throw an error message.

#### Delete files within a project

To delete a file from a project, send a `PUT` request that does not include that file (but that does include all other files in the project). Any file that is not sent back during the import process will be deleted from the server.

#### Rename files within a project

To rename a file within a project, send a `PUT` request with the existing `id` but a new `name`. The server ignores any attempts to change to `type`.

#### Create new project

To create a new project, send a `POST` request to the file [`insert`](../../workspace/drive/api/reference/rest/v2/files/insert.md) API. Much like the `update` call, you can use a client library to include metadata such as the project name and description.

Here is a sample transaction of the media upload. This will create a project called "Untitled" in your Drive. The `convert` parameter in the URL is required. As with the `update` call, the `Content-Type` header is required.

```
POST https://www.googleapis.com/upload/drive/v2/files?convert=true
Authorization:  Bearer ya29.fakebearerestring
Content-Type:  application/vnd.google-apps.script+json
```

```
{
  "files": [
    {
      "name":"Code",
      "type":"server_js",
      "source":"function doGet() {\n  return HtmlService.createHtmlOutputFromFile(\u0027index\u0027);\n}\n"
    },
    {
      "name":"index",
      "type":"html",
      "source":"\u003chtml\u003e\n  \u003cbody\u003e\n    Hello, world!!\n  \u003c/body\u003e\n\u003c/html\u003e"
    }
  ]
}
```
