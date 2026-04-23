---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources
root: workspace
fetched_at: 2026-04-23T15:26:17.495Z
---

# REST Resource: settings.datasources

## Resource: DataSource

Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.

JSON representation

```
{
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
      object (GSuitePrincipal)
    }
  ],
  "returnThumbnailUrls": boolean,
  "operationIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the datasource resource. Format: datasources/{sourceId}.</p><p>The name is ignored when creating a datasource.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. Display name of the datasource The maximum length is 300 characters.</p></td></tr><tr><td><code>shortName</code></td><td><p><code>string</code></p><p>A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is <em><value></em> then queries like <em>source:<value></em> will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters.</p></td></tr><tr><td><code>indexingServiceAccounts[]</code></td><td><p><code>string</code></p><p>List of service accounts that have indexing access.</p></td></tr><tr><td><code>disableServing</code></td><td><p><code>boolean</code></p><p>Disable serving any search or assist results.</p></td></tr><tr><td><code>disableModifications</code></td><td><p><code>boolean</code></p><p>If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data.</p></td></tr><tr><td><code>itemsVisibility[]</code></td><td><p><code>object (<code>GSuitePrincipal</code>)</code></p><p>This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility.</p></td></tr><tr><td><code>returnThumbnailUrls</code></td><td><p><code>boolean</code></p><p>Can a user request to get thumbnail URI for Items indexed in this data source.</p></td></tr><tr><td><code>operationIds[]</code></td><td><p><code>string</code></p><p>IDs of the Long Running Operations (LROs) currently running for this schema.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a datasource.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a datasource.</td></tr><tr><td><h3>get</h3></td><td>Gets a datasource.</td></tr><tr><td><h3>list</h3></td><td>Lists datasources.</td></tr><tr><td><h3>patch</h3></td><td>Updates a datasource.</td></tr><tr><td><h3>update</h3></td><td>Updates a datasource.</td></tr></tbody></table>
