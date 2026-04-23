---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles/get
root: workspace
fetched_at: 2026-04-23T15:26:04.581Z
---

# Method: userProfiles.get

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](https://developers.google.com/workspace/classroom/add-ons) for more information.

## Method: userProfiles.get

Returns a user profile.

This method returns the following error codes:

- `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for [access errors](https://developers.google.com/workspace/classroom/reference/Access.Errors).

### HTTP request

`GET https://classroom.googleapis.com/v1/userProfiles/{userId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier of the profile to return. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/classroom.rosters`
- `           https://www.googleapis.com/auth/classroom.rosters.readonly`
- `           https://www.googleapis.com/auth/classroom.profile.emails`
- `           https://www.googleapis.com/auth/classroom.profile.photos`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
