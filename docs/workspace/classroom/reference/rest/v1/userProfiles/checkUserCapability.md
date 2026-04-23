---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles/checkUserCapability
root: workspace
fetched_at: 2026-04-23T15:26:05.209Z
---

# Method: userProfiles.checkUserCapability

Returns whether a user may use the specified Classroom capability. For example, this endpoint can be used to check whether a user may create add- on attachments.

A requesting user can only check capabilities for themselves.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to check eligibility for the specified user.
- `INVALID_ARGUMENT` if the request is malformed.

### HTTP request

`GET https://classroom.googleapis.com/v1/userProfiles/{userId}:checkUserCapability`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Required. Identifier of the user.</p><p>When specified as a parameter of a request, this identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>capability</code></td><td><p><code>enum (<code>Capability</code>)</code></p><p>Required. The Capability that should be checked for this user. For example, to check whether a user can create an <a href="https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.addOnAttachments#resource:-addonattachment">add-on attachment</a>, set this to <code>CREATE_ADD_ON_ATTACHMENT</code>.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response from checking user capabilities.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "capability": enum (Capability),
  "allowed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>capability</code></td><td><p><code>enum (<code>Capability</code>)</code></p><p>The Classroom capability.</p></td></tr><tr><td><code>allowed</code></td><td><p><code>boolean</code></p><p>Whether the specified capability is allowed for the user.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.courses`
- `           https://www.googleapis.com/auth/classroom.courses.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).

## Capability

Enum to represent the capability.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CAPABILITY_UNSPECIFIED</code></td><td>Not supported.</td></tr><tr><td><code>CREATE_ADD_ON_ATTACHMENT</code></td><td>The capability to create and modify AddOnAttachments associated with the Developer Console project of the <a href="https://support.google.com/cloud/answer/6158849">OAuth client ID</a> used to make the request.</td></tr><tr><td><code>CREATE_RUBRIC</code></td><td>The capability to create and modify Rubrics.</td></tr><tr><td><code>UPDATE_GRADING_PERIOD_SETTINGS</code></td><td>The capability to modify grading period settings.</td></tr><tr><td><code>CREATE_STUDENT_GROUP</code></td><td>The capability to create and modify student groups and their members.</td></tr></tbody></table>
