---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/TopLevel/getSettings
root: workspace
fetched_at: 2026-04-23T15:23:26.215Z
---

# Method: getSettings

Returns customer-level settings.

### HTTP request

`GET https://alertcenter.googleapis.com/v1beta1/settings`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The <code>customerId</code> must/ have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Settings`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
