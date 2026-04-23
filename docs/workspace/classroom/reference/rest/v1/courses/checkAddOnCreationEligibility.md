---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/checkAddOnCreationEligibility
root: workspace
fetched_at: 2026-04-23T15:26:02.842Z
---

# Method: courses.checkAddOnCreationEligibility

Returns whether a user is eligible to create add-on attachments in a given course.

This method is deprecated. Use `` `UserProfiles.checkUserCapability` `` instead.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}:checkAddOnCreationEligibility`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. Identifier of the course.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Whether a teacher user is allowed to create add-on attachments for a given course.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "courseId": string,
  "isCreateAttachmentEligible": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Immutable. Identifier of the course.</p></td></tr><tr><td><code>isCreateAttachmentEligible</code></td><td><p><code>boolean</code></p><p>Whether the teacher is allowed to create add-on attachments in this course.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.addons.teacher`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
