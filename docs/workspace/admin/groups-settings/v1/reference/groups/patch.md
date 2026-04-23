---
source: https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups/patch
root: workspace
fetched_at: 2026-04-23T15:23:58.029Z
---

# Groups: patch

Updates an existing resource. This method supports patch semantics. [Try it now](#try-it).

## Request

### HTTP request

```
PATCH https://www.googleapis.com/groups/v1/groups/groupUniqueId
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>groupUniqueId</code></td><td><code>string</code></td><td>The group's email address.</td></tr></tbody></table>

### Authorization

This request requires authorization with the following scope:

Scope`https://www.googleapis.com/auth/apps.groups.settings`

### Request body

In the request body, supply the relevant portions of a [Groups resource](https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups#resource), according to the rules of patch semantics.

## Response

If successful, this method returns a [Groups resource](https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups#resource) in the response body.

## Try it!

Use the APIs Explorer below to call this method on live data and see the response. Alternatively, try the [standalone Explorer](https://developers.google.com/apis-explorer/#p/groupssettings/v1/groupsSettings.groups.patch).
