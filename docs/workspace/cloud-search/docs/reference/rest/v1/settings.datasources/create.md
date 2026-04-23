---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/create
root: workspace
fetched_at: 2026-04-23T15:26:17.542Z
---

# Method: settings.datasources.create

## Method: settings.datasources.create

Creates a datasource.

**Note:** This API requires an admin account to execute.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/settings/datasources`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
