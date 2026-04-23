---
source: https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups/get
root: workspace
fetched_at: 2026-04-23T15:23:57.794Z
---

# Groups: get

Retrieves a group's settings identified by the group email address. [Try it now](#try-it).

## Request

### HTTP request

```
GET https://www.googleapis.com/groups/v1/groups/groupUniqueId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>groupUniqueId</code></td><td><code>string</code></td><td>The group's email address.</td></tr></tbody></table>

### Authorization

This request requires authorization with the following scope:

Scope`https://www.googleapis.com/auth/apps.groups.settings`

### Request body

Do not supply a request body with this method.

## Response

If successful, this method returns a [Groups resource](../groups.md#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response. Alternatively, try the [standalone Explorer](https://developers.google.com/apis-explorer/#p/groupssettings/v1/groupsSettings.groups.get).
