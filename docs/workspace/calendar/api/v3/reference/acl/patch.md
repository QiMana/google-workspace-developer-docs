---
source: https://developers.google.com/workspace/calendar/api/v3/reference/acl/patch
root: workspace
fetched_at: 2026-04-23T15:24:51.362Z
---

# Acl: patch

Updates an access control rule. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a `get` followed by an `update`. The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements. [Try it now](#try-it).

## Request

### HTTP request

```
PATCH https://www.googleapis.com/calendar/v3/calendars/calendarId/acl/ruleId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td><code>ruleId</code></td><td><code>string</code></td><td>ACL rule identifier.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>sendNotifications</code></td><td><code>boolean</code></td><td>Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.acls`

For more information, see the [authentication and authorization](https://developers.google.com/workspace/guides/configure-oauth-consent) page.

### Request body

In the request body, supply the relevant portions of an [Acl resource](https://developers.google.com/workspace/calendar/api/v3/reference/acl#resource), according to the rules of patch semantics.

## Response

If successful, this method returns an [Acl resource](https://developers.google.com/workspace/calendar/api/v3/reference/acl#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
