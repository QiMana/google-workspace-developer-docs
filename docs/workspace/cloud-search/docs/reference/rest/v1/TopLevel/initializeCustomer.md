---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/TopLevel/initializeCustomer
root: workspace
fetched_at: 2026-04-23T15:26:13.375Z
---

# Method: initializeCustomer

## Method: initializeCustomer

Enables `third party` support in Google Cloud Search.

**Note:** This API requires an admin account to execute.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1:initializeCustomer`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
