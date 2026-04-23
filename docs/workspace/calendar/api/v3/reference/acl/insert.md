---
source: https://developers.google.com/workspace/calendar/api/v3/reference/acl/insert
root: workspace
fetched_at: 2026-04-23T15:24:51.320Z
---

# Acl: insert

Creates an access control rule. [Try it now](#try-it).

## Request

### HTTP request

```
POST https://www.googleapis.com/calendar/v3/calendars/calendarId/acl
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr><tr><td colspan="3"><b>Optional query parameters</b></td></tr><tr><td><code>sendNotifications</code></td><td><code>boolean</code></td><td>Whether to send notifications about the calendar sharing change. Optional. The default is True.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.acls`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

In the request body, supply an [Acl resource](../acl.md#resource) with the following properties:

<table><thead><tr><th>Property name</th><th>Value</th><th>Description</th><th>Notes</th></tr></thead><tbody><tr><td colspan="4"><b>Required Properties</b></td></tr><tr><td><code>role</code></td><td><code>string</code></td><td>The role assigned to the scope. Possible values are:<ul><li>" <code>none</code> " - Provides no access.</li><li>" <code>freeBusyReader</code> " - Provides read access to free/busy information.</li><li>" <code>reader</code> " - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.</li><li>" <code>writer</code> " - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. Provides read access to the calendar's ACLs.</li><li>" <code>owner</code> " - Provides manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to modify access levels of other users.</li></ul></td><td>writable</td></tr><tr><td><code>scope</code></td><td><code>object</code></td><td>The extent to which <a href="https://developers.google.com/workspace/calendar/concepts/sharing#sharing_calendars">calendar access</a> is granted by this ACL rule.</td><td></td></tr><tr><td><code>scope.type</code></td><td><code>string</code></td><td>The type of the scope. Possible values are:<ul><li>" <code>default</code> " - The public scope. This is the default value.</li><li>" <code>user</code> " - Limits the scope to a single user.</li><li>" <code>group</code> " - Limits the scope to a group.</li><li>" <code>domain</code> " - Limits the scope to a domain.</li></ul>Note: The permissions granted to the " <code>default</code> ", or public, scope apply to any user, authenticated or not.</td><td></td></tr><tr><td colspan="4"><b>Optional Properties</b></td></tr><tr><td><code>scope.value</code></td><td><code>string</code></td><td>The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type " <code>default</code> ".</td><td>writable</td></tr></tbody></table>

## Response

If successful, this method returns an [Acl resource](../acl.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response.
