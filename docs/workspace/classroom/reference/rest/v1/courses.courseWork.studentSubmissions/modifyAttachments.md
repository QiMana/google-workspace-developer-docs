---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/modifyAttachments
root: workspace
fetched_at: 2026-04-23T15:25:57.202Z
---

# Method: courses.courseWork.studentSubmissions.modifyAttachments

Modifies attachments of student submission.

Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`.

This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### HTTP request

`POST https://classroom.googleapis.com/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course. This identifier can be either the Classroom-assigned identifier or an <code>alias</code>.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Identifier of the course work.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the student submission.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "addAttachments": [
    {
      
    }
  ],
  "previewVersion": enum (PreviewVersion)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addAttachments[]</code></td><td><p>Attachments to add. A student submission may not have more than 20 attachments.</p><p><code>Form</code> attachments are not supported.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.coursework.students`
- `           https://www.googleapis.com/auth/classroom.coursework.me`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
