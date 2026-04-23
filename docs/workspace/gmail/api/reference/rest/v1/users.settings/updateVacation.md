---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings/updateVacation
root: workspace
fetched_at: 2026-04-23T15:29:05.390Z
---

# Method: users.settings.updateVacation

Updates vacation responder settings. For more information, see [Manage vacation settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/vacationSettings).

### HTTP request

`PUT https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/vacation`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `VacationSettings`.

### Response body

If successful, the response body contains an instance of `VacationSettings`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.basic`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
