---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.features/get
root: workspace
fetched_at: 2026-04-23T15:23:41.914Z
---

# Method: resources.features.get

Retrieves a feature.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customer}/resources/features/{featureKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's customer ID.</p></td></tr><tr><td><code>featureKey</code></td><td><p><code>string</code></p><p>The unique ID of the feature to retrieve.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://apps-apis.google.com/a/feeds/calendar/resource/`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar`
- `           https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
