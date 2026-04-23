---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses/checkGradingPeriodsSetupEligibility
root: workspace
fetched_at: 2026-04-23T15:26:02.169Z
---

# Method: courses.checkGradingPeriodsSetupEligibility

Returns whether a user is eligible to update GradingPeriodSettings in a given course.

This method is deprecated. Use `` `UserProfiles.checkUserCapability` `` instead.

This method returns the following error codes:

- `PERMISSION_DENIED` for [access errors](../../../../troubleshooting/common-errors.md).
- `INVALID_ARGUMENT` if the request is malformed.
- `NOT_FOUND` if the requested course does not exist.

### HTTP request

`GET https://classroom.googleapis.com/v1/courses/{courseId}:checkGradingPeriodsSetupEligibility`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Required. The identifier of the course.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Whether the user is allowed to update GradingPeriodSettings in this course.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "courseId": string,
  "isGradingPeriodsSetupEligible": boolean,
  "previewVersion": enum (PreviewVersion)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Immutable. The identifier of the course.</p></td></tr><tr><td><code>isGradingPeriodsSetupEligible</code></td><td><p><code>boolean</code></p><p>Whether the user is allowed to update the GradingPeriodSettings in this course.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Output only. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.courses`
- `           https://www.googleapis.com/auth/classroom.courses.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
