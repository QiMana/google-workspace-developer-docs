---
source: https://developers.google.com/workspace/calendar/api/v3/reference/acl/watch
root: workspace
fetched_at: 2026-04-23T15:24:51.794Z
---

# Acl: watch

Watch for changes to ACL resources.

## Request

### HTTP request

```
POST https://www.googleapis.com/calendar/v3/calendars/calendarId/acl/watch
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>calendarId</code></td><td><code>string</code></td><td>Calendar identifier. To retrieve calendar IDs call the <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/list">calendarList.list</a> method. If you want to access the primary calendar of the currently logged in user, use the " <code>primary</code> " keyword.</td></tr></tbody></table>

### Authorization

This request requires authorization with at least one of the following scopes:

Scope`https://www.googleapis.com/auth/calendar``https://www.googleapis.com/auth/calendar.acls``https://www.googleapis.com/auth/calendar.acls.readonly`

For more information, see the [authentication and authorization](../../../../../guides/configure-oauth-consent.md) page.

### Request body

In the request body, supply data with the following structure:

```
{
  "id": string,
  "token": string,
  "type": string,
  "address": string,
  "params": {
    "ttl": string
  }
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `id` | `string` | A UUID or similar unique string that identifies this channel. |  |
| `token` | `string` | An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. |  |
| `type` | `string` | The type of delivery mechanism used for this channel. Valid values are " `web_hook` " (or " `webhook` "). Both values refer to a channel where Http requests are used to deliver messages. |  |
| `address` | `string` | The address where notifications are delivered for this channel. |  |
| `params` | `object` | Additional parameters controlling delivery channel behavior. Optional. |  |
| `params.ttl` | `string` | The time-to-live in seconds for the notification channel. Default is 604800 seconds. |  |

## Response

If successful, this method returns a response body with the following structure:

```
{
  "kind": "api#channel",
  "id": string,
  "resourceId": string,
  "resourceUri": string,
  "token": string,
  "expiration": long
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `kind` | `string` | Identifies this as a notification channel used to watch for changes to a resource, which is " `api#channel` ". |  |
| `id` | `string` | A UUID or similar unique string that identifies this channel. |  |
| `resourceId` | `string` | An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. |  |
| `resourceUri` | `string` | A version-specific identifier for the watched resource. |  |
| `token` | `string` | An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. |  |
| `expiration` | `long` | Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. |  |
