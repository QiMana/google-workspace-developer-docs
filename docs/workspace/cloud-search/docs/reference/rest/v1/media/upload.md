---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/media/upload
root: workspace
fetched_at: 2026-04-23T15:26:17.004Z
---

# Method: media.upload

Uploads media for indexing.

The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content:

1. Call `indexing.datasources.items.upload` with the item name to begin an upload session and retrieve the `UploadItemRef`.
2. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1.
3. Call `indexing.datasources.items.index` to index the item. Populate the [ItemContent](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1.

For additional information, see [Create a content connector using the REST API](https://developers.google.com/workspace/cloud-search/docs/guides/content-connector#rest).

**Note:** This API requires a service account to execute.

### HTTP request

- Upload URI, for media upload requests:  
	`POST https://cloudsearch.googleapis.com/upload/v1/media/{resourceName=**}`
- Metadata URI, for metadata-only requests:  
	`POST https://cloudsearch.googleapis.com/v1/media/{resourceName=**}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>resourceName</code></td><td><p><code>string</code></p><p>Name of the media that is being downloaded. See <code>ReadRequest.resource_name</code>.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `Media`.

### Response body

Media resource.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "resourceName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resourceName</code></td><td><p><code>string</code></p><p>Name of the media resource.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
