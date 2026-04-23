---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/registrations/delete
root: workspace
fetched_at: 2026-04-23T15:26:03.371Z
---

# Method: registrations.delete

Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

### HTTP request

`DELETE https://classroom.googleapis.com/v1/registrations/{registrationId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>registrationId</code></td><td><p><code>string</code></p><p>The <code>registrationId</code> of the <code>Registration</code> to be deleted.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.push-notifications`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
