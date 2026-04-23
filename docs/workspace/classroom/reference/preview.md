---
source: https://developers.google.com/workspace/classroom/reference/preview
root: workspace
fetched_at: 2026-04-23T15:25:51.413Z
---

# Access preview APIs

This page describes how you can access Classroom API preview features and specify preview versions.

The three considerations when using preview features when compared to the stable v1 API are:

1. The calling Google Cloud project must be enrolled in the Google Workspace [Developer Preview Program](../../preview.md#apply) and allow listed by Google.
2. API features in early access or preview programs aren't exposed in the standard client libraries and might not be accessible by default over HTTP.
3. At any given time there might be multiple API states, or versions, in preview.

## Enable preview features in client libraries

A common option for consuming the Classroom API is with a client library. There are three types of client libraries:

1. Dynamically generated client libraries
2. Google-provided static client libraries
3. Your own custom client library

Using dynamically generated or Google-provided static libraries is the recommended way to use the API. See [build client libraries](https://developers.google.com/discovery/v1/building-a-client-library) if you need to build your own library. Creating your own library is outside the scope of this guide, but you should review the [dynamic libraries](./preview.md#dynamic-libraries) section to learn about preview labels and their role in Discovery.

### Dynamic libraries

Libraries in languages like Python generate the client library at runtime using a *Discovery Document* from the [Discovery service](https://developers.google.com/discovery).

A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It's used to [build client libraries](https://developers.google.com/discovery/v1/building-a-client-library), IDE plugins, and other tools that interact with Google APIs. One service might provide multiple discovery documents.

Discovery Documents for the Classroom API service (`classroom.googleapis.com`) can be found at the following endpoint:

```
https://classroom.googleapis.com/$discovery/rest?labels=PREVIEW_LABEL&version=v1&key=API_KEY
```

The important distinction for working with preview APIs is specifying the appropriate `label`. For Classroom public previews that label is `DEVELOPER_PREVIEW`.

To generate the Python library and instantiate the Classroom service with preview methods, you can specify the Discovery URL with the appropriate service, credentials, and label:

```
classroom_service_with_preview_features = googleapiclient.discovery.build(
  serviceName='classroom',
  version='v1',
  credentials=credentials,
  static_discovery=False,
  discoveryServiceUrl='https://classroom.googleapis.com/$discovery/rest?labels=DEVELOPER_PREVIEW&key=API_KEY)'
```

See the individual Google API [client library documentation](https://developers.google.com/api-client-library) for details on each language.

### Static libraries

Client libraries in languages like Java, Node.js, PHP, C#, and Go must be built from source. These libraries are provided for you and have the preview features already incorporated.

For public previews, Classroom client libraries can be found with the other [Workspace Developer Preview Program client libraries](https://drive.google.com/corp/drive/u/0/folders/1dEMGAAfvJesVVkBWMWGhTg0lXsyfCFDP). For private previews, reach out to your Google contact if you need static libraries generated.

You might need to modify your typical dependencies configuration to use these local libraries rather than importing the standard client libraries, which don't have the preview features.

For example, to use the Go client library, you need to use the `replace` directive in your `go.mod` file to [require a module from a local directory](https://go.dev/doc/modules/managing-dependencies#local_directory):

```
module example.com/app

go 1.21.1

require (
    golang.org/x/oauth2 v0.12.0
    google.golang.org/api v0.139.0 // Classroom library is in here.
)

require (
  ...
)

// Use a local copy of the Go client library.
replace google.golang.org/api v0.139.0 => ../google-api-go-client
```

As another example, if you're using Node.js and npm, add the Node.js client library download (`googleapis-classroom-1.0.4.tgz`) as a local dependency in `package.json`:

```
{
  "name": "nodejs-classroom-example",
  "version": "1.0.0",
  ...
  "dependencies": {
    "@google-cloud/local-auth": "^2.1.0",
    "googleapis": "^95.0.0",
    "classroom-with-preview-features": "file:./googleapis-classroom-1.0.4.tgz"
  }
}
```

Then in your application, require the `classroom-with-preview-features` module in addition to regular dependencies, and instantiate the `classroom` service from that module:

```
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const classroomWithPreviewFeatures = require('classroom-with-preview-features');

...

const classroom = classroomWithPreviewFeatures.classroom({
  version: 'v1',
  auth: auth,
});

...
```

## Specify a preview API version

Regardless of whether you use a static or dynamic library, you must specify the preview version when making API calls to methods with preview capabilities.

The different available versions, and the features they include, are documented in the [Classroom API Roadmap](./roadmap.md). The reference documentation for methods and fields also describe which version(s) the method or field is available in.

Specifying a version is done by setting the [PreviewVersion](./rest/v1/PreviewVersion.md) field in requests. For example, to create a rubric with the Rubrics CRUD preview API, you would set `previewVersion` to `V1_20231110_PREVIEW` in the CREATE request:

```
rubric = service.courses().courseWork().rubrics().create(
            courseId=course_id,
            courseWorkId=coursework_id,
            # Specify the preview version. Rubrics CRUD capabilities are
            # supported in V1_20231110_PREVIEW and later.
            previewVersion="V1_20231110_PREVIEW",
            body=body
).execute()
```

Resources associated with a preview method call also contain the `previewVersion` used in the call as a read-only field, to help you understand which version you're using. For example, the response from the previous CREATE call contains the `V1_20231110_PREVIEW` value:

```
print(json.dumps(rubric, indent=4))
{
  "courseId": "123",
  "courseWorkId": "456",
  "creationTime": "2023-10-23T18:18:29.932Z",
  "updateTime": "2023-10-23T18:18:29.932Z",
  "id": "789",
  "criteria": [...],
  # The preview version used in the call that returned this resource.
  "previewVersion": "V1_20231110_PREVIEW",
  ...
}
```

## HTTP requests

It is also possible to consume the Classroom API directly with HTTP.

If you make HTTP requests without a client library, you still need to enable preview features specify a preview version. This is done by setting a `label` with a `X-Goog-Visibilities` header and the [aforementioned preview version](./preview.md#preview-version) as either a query parameter or POST body field (see the appropriate individual API reference documentation). For public previews, the label is `DEVELOPER_PREVIEW`.

For example, the following curl request makes a LIST call to the Rubrics service with the appropriate visibility label and preview version:

```
curl \
  'https://classroom.googleapis.com/v1/courses/COURSE_ID/courseWork/COURSE_WORK_ID/rubrics?key=API_KEY&previewVersion=V1_20231110_PREVIEW' \
  --header 'X-Goog-Visibilities: DEVELOPER_PREVIEW' \
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
  --header 'Accept: application/json' \
  --compressed
```

You can also specify the preview version in the request body, for example when making a POST request:

```
curl --request PATCH \
  'https://classroom.googleapis.com/v1/courses/COURSE_ID/courseWork/COURSE_WORK_ID/rubrics/RUBRIC_ID?updateMask=criteria&key=API_KEY&previewVersion=V1_20231110_PREVIEW' \
  --header 'X-Goog-Visibilities: DEVELOPER_PREVIEW' \
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"criteria":"[...]"}' \
  --compressed
```

The API for each HTTP request is described in the [REST](./rest.md) documentation.

## Google Apps Script

It's possible to call preview APIs from Google Apps Script. However, there are a few differences from typical Apps Script usage.

1. You must configure your script to use whichever Google Cloud project you enrolled in the [Developer Preview Program](../../preview.md#apply).
2. [Advanced Services](../../../apps-script/guides/services/advanced.md) don't support preview methods, so you'll need to make requests directly with HTTP.
3. You must supply a label and preview version, as described in the preceding [HTTP section](#http-requests).

See the corresponding [quickstart](../quickstart/apps-script.md) to become familiar with Apps Script and get a basic project set up. Then follow these instructions to get started calling preview APIs:

### Change the Cloud project used by the script

In **Project Settings**, click **Change project** and enter the Cloud project ID of whichever project you enrolled into the [Developer Preview Program](../../preview.md#apply) (by default, Apps Script scripts use a generic project). Only enrolled projects can call preview methods.

### Configure HTTP requests

Next, configure the HTTP request of whichever method you'd like to call back in **Editor**. For example, in the [quickstart](../quickstart/apps-script.md), listing courses with the Classroom service looks like this:

```
function listCourses() {
  try {
    const response = Classroom.Courses.list();
    const courses = response.courses;
    if (!courses || courses.length === 0) {
      console.log('No courses found.');
      return;
    }
    for (const course of courses) {
      console.log('%s (%s)', course.name, course.id);
    }
  } catch (err) {
    // TODO: Developer to handle.
    console.log(err.message);
  }
}
```

The equivalent operation using HTTP directly is:

```
function listCourses() {
  const response = UrlFetchApp.fetch(
        'https://classroom.googleapis.com/v1/courses', {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()},
        contentType: 'application/json',
      });
  const data = JSON.parse(response.getContentText());
  if (data.error) {
    // TODO: Developer to handle.
    console.log(err.message);
    return;
  }
  if (!data.courses || !data.courses.length) {
    console.log('No courses found.');
    return;
  }
  for (const course of data.courses) {
    console.log('%s (%s)', course.name, course.id);
  }
}
```

When using Advanced services, the required OAuth scopes are inferred, but to make direct HTTP calls to Google APIs in Apps Script, you need to manually add the appropriate scopes.

In **Project Settings**, enable **Show "appsscript.json" manifest file in editor**. Back in **Editor**, add `oauthScopes` to the `appscript.json` file for whichever scopes you need. The scopes for a given method are listed in the reference page. For example, see the [courses.courseWork.rubrics list method page](./rest/v1/courses.courseWork.rubrics/list.md#authorization-scopes).

The updated `appscript.json` file might look like this:

```
{
  "timeZone": "America/Los_Angeles",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/classroom.coursework.students",
    "https://www.googleapis.com/auth/classroom.courses",
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/spreadsheets"
  ]
}
```

### Supply a label and preview version

Back in your script, ensure you've added the appropriate label and preview version as described in the preceding [HTTP section](#http-requests). The example LIST call to the Rubrics service would look like:

```
function listRubrics() {
  const courseId = COURSE_ID;
  const courseWorkId = COURSE_WORK_ID;
  const response = UrlFetchApp.fetch(
         \`https://classroom.googleapis.com/v1/courses/${courseId}/courseWork/${courseWorkId}/rubrics?previewVersion=V1_20231110_PREVIEW\`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + ScriptApp.getOAuthToken(),
          'X-Goog-Visibilities': 'DEVELOPER_PREVIEW'
        },
        contentType: 'application/json',
        muteHttpExceptions: true
      });
  const data = JSON.parse(response.getContentText());
  console.log(data)
  if (data.error) {
    // TODO: Developer to handle.
    console.log(error.message);
    return;
  }
  if (!data.rubrics || !data.rubrics.length) {
    console.log('No rubrics for this coursework!');
    return;
  }
  console.log(data.rubrics);
}
```
