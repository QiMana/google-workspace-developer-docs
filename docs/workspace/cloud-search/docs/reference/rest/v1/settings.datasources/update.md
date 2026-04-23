---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/update
root: workspace
fetched_at: 2026-04-23T15:26:18.858Z
---

# Method: settings.datasources.update

Updates a datasource.

**Note:** This API requires an admin account to execute.

### HTTP request

`PUT https://cloudsearch.googleapis.com/v1/settings/{source.name=datasources/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>source.name</code></td><td><p><code>string</code></p><p>The name of the datasource resource. Format: datasources/{sourceId}.</p><p>The name is ignored when creating a datasource.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "source": {
    "name": string,
    "displayName": string,
    "shortName": string,
    "indexingServiceAccounts": [
      string
    ],
    "disableServing": boolean,
    "disableModifications": boolean,
    "itemsVisibility": [
      {

              "gsuiteUserEmail": string,
        "gsuiteGroupEmail": string,
        "gsuiteDomain": boolean
            }
    ],
    "returnThumbnailUrls": boolean,
    "operationIds": [
      string
    ]
  },
  "debugOptions": {
    object (DebugOptions)
  },
  "updateMask": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source.displayName</code></td><td><p><code>string</code></p><p>Required. Display name of the datasource The maximum length is 300 characters.</p></td></tr><tr><td><code>source.shortName</code></td><td><p><code>string</code></p><p>A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is <em><value></em> then queries like <em>source:<value></em> will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters.</p></td></tr><tr><td><code>source.indexingServiceAccounts[]</code></td><td><p><code>string</code></p><p>List of service accounts that have indexing access.</p></td></tr><tr><td><code>source.disableServing</code></td><td><p><code>boolean</code></p><p>Disable serving any search or assist results.</p></td></tr><tr><td><code>source.disableModifications</code></td><td><p><code>boolean</code></p><p>If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data.</p></td></tr><tr><td><code>source.itemsVisibility[]</code></td><td><p><code>object (<code>GSuitePrincipal</code>)</code></p><p>This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility.</p></td></tr><tr><td><code>source.returnThumbnailUrls</code></td><td><p><code>boolean</code></p><p>Can a user request to get thumbnail URI for Items indexed in this data source.</p></td></tr><tr><td><code>source.operationIds[]</code></td><td><p><code>string</code></p><p>IDs of the Long Running Operations (LROs) currently running for this schema.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Only applies to <a href="https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/patch"><code>settings.datasources.patch</code></a>.</p><p>Update mask to control which fields to update. Example field paths: <code>name</code>, <code>displayName</code>.</p><ul><li>If <code>updateMask</code> is non-empty, then only the fields specified in the <code>updateMask</code> are updated.</li><li>If you specify a field in the <code>updateMask</code>, but don't specify its value in the source, that field is cleared.</li><li>If the <code>updateMask</code> is not present or empty or has the value <code>*</code>, then all fields are updated.</li></ul></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
