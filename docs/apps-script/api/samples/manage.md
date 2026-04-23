---
source: https://developers.google.com/apps-script/api/samples/manage
root: apps-script
fetched_at: 2026-04-23T15:18:14.296Z
---

# Project management

## Page Summary

- The Apps Script API enables the creation and modification of Apps Script projects from your application.
- The API needs to be enabled before it can be used.
- You can find the script project ID in the project settings of your Apps Script project.
- The API allows for common project management operations such as creating new projects, retrieving project metadata and files, and updating project files.

The Google Apps Script API lets you create and modify Google Apps Script projects from your app. The examples on this page illustrate how common project management operations can be achieved with the API.

To use the API, you must first [enable it](https://script.google.com/home/usersettings).

In these examples, the placeholders scriptId is used to indicate where you would provide the script project ID. Follow the steps below to find the script ID:

1. In the Apps Script project, at the top left, click **Project Settings** .
2. Next to "Script ID," click **Copy**.

## Create a new Apps Script project

The following [projects.create](https://developers.google.com/apps-script/api/reference/rest/v1/projects/create) request creates a new [standalone script](https://developers.google.com/apps-script/guides/standalone).

```
POST https://scriptmanagement.googleapis.com/v1/projects/
```

```
{
  "title": "My Script"
}
```

## Retrieve project metadata

The following [projects.get](https://developers.google.com/apps-script/api/reference/rest/v1/projects/get) request gets the script [project's metadata](https://developers.google.com/apps-script/api/reference/rest/v1/projects#Project).

```
GET https://scriptmanagement.googleapis.com/v1/projects/scriptId
```

The response consists of an [object](https://developers.google.com/apps-script/api/reference/rest/v1/projects#Project) such as this one:

```
{
  "scriptId": "scriptId",
  "title": "My Title",
  "parentId": "parentId",
  "createTime": "2017-10-02T15:01:23.045123456Z",
  "updateTime": "2017-10-02T15:01:23.045123456Z",
  "creator": { "name": "Grant" },
  "lastModifyUser": { "name": "Grant" },
}
```

## Retrieve project files

The following [projects.getContent](https://developers.google.com/apps-script/api/reference/rest/v1/projects/getContent) request gets the content of the script project, including the code source and metadata for each script file.

```
GET https://scriptmanagement.googleapis.com/v1/projects/scriptId/content
```

The response consists of a [Content](https://developers.google.com/apps-script/api/reference/rest/v1/projects/getContent#response-body) object such as this one:

```
{
  "scriptId": "scriptId",
  "files": [{
    "name": "My Script",
    "type": "SERVER_JS",
    "source": "function hello(){\nconsole.log('Hello world');}",
    "lastModifyUser": {
      "name": "Grant",
      "email": "grant@example.com",
    },
    "createTime": "2017-10-02T15:01:23.045123456Z",
    "updateTime": "2017-10-02T15:01:23.045123456Z",
    "functionSet": {
      "values": [
        "name": "helloWorld"
      ]
    }
  }, {
    "name": "appsscript",
    "type": "JSON",
    "source": "{\"timeZone\":\"America/New_York\",\"exceptionLogging\":\"CLOUD\"}",
    "lastModifyUser": {
      "name": "Grant",
      "email": "grant@example.com",
    },
    "createTime": "2017-10-02T15:01:23.045123456Z",
    "updateTime": "2017-10-02T15:01:23.045123456Z"
  }]
}
```

## Update project files

The following [projects.updateContent](https://developers.google.com/apps-script/api/reference/rest/v1/projects/updateContent) request updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as an API executable project.

```
PUT https://scriptmanagement.googleapis.com/v1/projects/scriptID/content
```

```
{
  "files": [{
    "name": "index",
    "type": "HTML",
    "source": "<html> <header><title>HTML Page</title></header> <body> My HTML </body> </html>"
  }, {
    "name": "My Script",
    "type": "SERVER_JS",
    "source": "function hello(){\nconsole.log('Hello world');}",
  }, {
    "name": "appsscript",
    "type": "JSON",
    "source": "{\"timeZone\":\"America/New_York\",\"exceptionLogging\":\"CLOUD\"}",
    "lastModifyUser": {
      "name": "Grant",
      "email": "grant@example.com",
    },
    "createTime": "2017-10-02T15:01:23.045123456Z",
    "updateTime": "2017-10-02T15:01:23.045123456Z"
  }]
}
```

The response consists of a [Content](https://developers.google.com/apps-script/api/reference/rest/v1/projects/getContent#response-body) object such as this one:

```
{
  "scriptId": "scriptId",
  "files": [{
    "name": "index",
    "type": "HTML",
    "source": "<html> <header><title>HTML Page</title></header> <body> My HTML </body> </html>",
    "lastModifyUser": {
      "name": "Grant",
      "email": "grant@example.com",
    },
    "createTime": "2017-10-02T15:01:23.045123456Z",
    "updateTime": "2017-10-02T15:01:23.045123456Z"
  }, {
    "name": "My Script",
    "type": "SERVER_JS",
    "source": "function hello(){\nconsole.log('Hello world');}",
    "lastModifyUser": {
      "name": "Grant",
      "email": "grant@example.com",
    },
    "createTime": "2017-10-02T15:01:23.045123456Z",
    "updateTime": "2017-10-02T15:01:23.045123456Z",
    "functionSet": {
      "values": [
        "name": "helloWorld"
      ]
    }
  }, {
    "name": "appsscript",
    "type": "JSON",
    "source": "{\"timeZone\":\"America/New_York\",\"exceptionLogging\":\"CLOUD\"}",
    "lastModifyUser": {
      "name": "Grant",
      "email": "grant@example.com",
    },
    "createTime": "2017-10-02T15:01:23.045123456Z",
    "updateTime": "2017-10-02T15:01:23.045123456Z"
  }]
}
```
