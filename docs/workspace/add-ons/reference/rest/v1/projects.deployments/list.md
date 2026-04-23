---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/list
root: workspace
fetched_at: 2026-04-23T15:23:04.106Z
---

# Method: projects.deployments.list

## Page Summary

- Lists all deployments within a specified Google Workspace Add-ons project.
- Allows for pagination to retrieve large sets of deployments.
- Requires `gsuiteaddons.deployments.list` IAM permission and `https://www.googleapis.com/auth/cloud-platform` OAuth scope for authorization.
- Returns a list of deployments along with a token for accessing subsequent pages, if available.

Lists all deployments in a particular project.

### HTTP request

`GET https://gsuiteaddons.googleapis.com/v1/{parent=projects/*}/deployments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Name of the project in which to create the deployment.</p><p>Example: <code>projects/my_project</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>parent</code>:</p><ul><li><code>gsuiteaddons.deployments.list</code></li></ul></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of deployments to return. The service might return fewer than this value. If unspecified, at most 1,000 deployments are returned. The maximum possible value is 1,000; values above 1,000 are changed to 1,000.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A page token, received from a previous <code>deployments.list</code> call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided to <code>deployments.list</code> must match the call that provided the page token.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message to list deployments.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "deployments": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deployments[]</code></td><td><p>The list of deployments for the given project.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>pageToken</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
