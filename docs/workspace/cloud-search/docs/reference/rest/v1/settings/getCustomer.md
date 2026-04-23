---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings/getCustomer
root: workspace
fetched_at: 2026-04-23T15:26:18.979Z
---

# Method: settings.getCustomer

## Method: settings.getCustomer

Get customer settings.

**Note:** This API requires an admin account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/settings/customer`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `CustomerSettings`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
