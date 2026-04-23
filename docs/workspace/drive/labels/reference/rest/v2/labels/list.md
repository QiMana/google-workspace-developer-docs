---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/list
root: workspace
fetched_at: 2026-04-23T15:28:12.255Z
---

# Method: labels.list

List labels. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label).

### HTTP request

`GET https://drivelabels.googleapis.com/v2/labels`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>publishedOnly</code></td><td><p><code>boolean</code></p><p>Whether to include only published labels in the results.</p><ul><li>When <code>true</code>, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (<code>labels/{id}/{revisionId}</code>).</li><li>When <code>false</code>, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (<code>labels/{id}</code>).</li></ul></td></tr><tr><td><code>customer</code></td><td><p><code>string</code></p><p>The customer to scope this list request to. For example: <code>customers/abcd1234</code>. If unset, will return all labels within the current customer.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of labels to return per page. Default: 50. Max: 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token of the page to return.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>LabelView</code>)</code></p><p>When specified, only certain fields belonging to the indicated view are returned.</p></td></tr><tr><td colspan="2"><p>Union parameter <code>access</code>.</p><p><code>access</code> can be only one of the following:</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. This will return all labels within the customer.</p></td></tr><tr><td><code>minimumRole</code></td><td><p><code>enum (<code>LabelRole</code>)</code></p><p>Specifies the level of access the user must have on the returned labels. The minimum role a user must have on a label. Defaults to <code>READER</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for listing labels.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "labels": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labels[]</code></td><td><p>Labels.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The token of the next page in the response.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.labels.readonly`
- `           https://www.googleapis.com/auth/drive.admin.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
