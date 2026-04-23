---
source: https://developers.google.com/workspace/calendar/api/v3/reference/settings/get
root: workspace
fetched_at: 2026-04-23T15:24:58.384Z
---

# Settings: get

Returns a single user setting. [Try it now](#try-it).

## Request

### HTTP request

```
GET https://www.googleapis.com/calendar/v3/users/me/settings/setting
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>setting</code></td><td><code>string</code></td><td>The id of the user setting.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar.readonly``https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.settings.readonly`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns a [Settings resource](../settings.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
