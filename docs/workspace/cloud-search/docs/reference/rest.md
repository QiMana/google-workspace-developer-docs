---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest
root: workspace
fetched_at: 2026-04-23T15:26:11.855Z
---

# Cloud Search API

## REST Resource: v1.query

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>removeActivity</code></td><td><code>POST /v1/query:removeActivity</code><br>Provides functionality to remove logged activity for a user.</td></tr><tr><td><code>search</code></td><td><code>POST /v1/query/search</code><br>The Cloud Search Query API provides the search method, which returns the most relevant results from a user query.</td></tr><tr><td><code>suggest</code></td><td><code>POST /v1/query/suggest</code><br>Provides suggestions for autocompleting the query.</td></tr></tbody></table>

## REST Resource: v1.query.sources

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /v1/query/sources</code><br>Returns list of sources that user can use for Search and Suggest APIs.</td></tr></tbody></table>

## REST Resource: v1.settings

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getCustomer</code></td><td><code>GET /v1/settings/customer</code><br>Get customer settings.</td></tr><tr><td><code>updateCustomer</code></td><td><code>PATCH /v1/settings/customer</code><br>Update customer settings.</td></tr></tbody></table>

## REST Resource: v1.settings.datasources

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/settings/datasources</code><br>Creates a datasource.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/settings/{name=datasources/*}</code><br>Deletes a datasource.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/settings/{name=datasources/*}</code><br>Gets a datasource.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/settings/datasources</code><br>Lists datasources.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/settings/{source.name=datasources/*}</code><br>Updates a datasource.</td></tr><tr><td><code>update</code></td><td><code>PUT /v1/settings/{source.name=datasources/*}</code><br>Updates a datasource.</td></tr></tbody></table>

## REST Resource: v1.settings.searchapplications

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/settings/searchapplications</code><br>Creates a search application.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/settings/{name=searchapplications/*}</code><br>Deletes a search application.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/settings/{name=searchapplications/*}</code><br>Gets the specified search application.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/settings/searchapplications</code><br>Lists all search applications.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/settings/{searchApplication.name=searchapplications/*}</code><br>Updates a search application.</td></tr><tr><td><code>reset</code></td><td><code>POST /v1/settings/{name=searchapplications/*}:reset</code><br>Resets a search application to default settings.</td></tr><tr><td><code>update</code></td><td><code>PUT /v1/settings/{searchApplication.name=searchapplications/*}</code><br>Updates a search application.</td></tr></tbody></table>

## REST Resource: v1.stats

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getIndex</code></td><td><code>GET /v1/stats/index</code><br>Gets indexed item statistics aggreggated across all data sources.</td></tr><tr><td><code>getQuery</code></td><td><code>GET /v1/stats/query</code><br>Get the query statistics for customer.</td></tr><tr><td><code>getSearchapplication</code></td><td><code>GET /v1/stats/searchapplication</code><br>Get search application stats for customer.</td></tr><tr><td><code>getSession</code></td><td><code>GET /v1/stats/session</code><br>Get the # of search sessions, % of successful sessions with a click query statistics for customer.</td></tr><tr><td><code>getUser</code></td><td><code>GET /v1/stats/user</code><br>Get the users statistics for customer.</td></tr></tbody></table>

## REST Resource: v1.stats.index.datasources

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/stats/index/{name=datasources/*}</code><br>Gets indexed item statistics for a single data source.</td></tr></tbody></table>

## REST Resource: v1.stats.query.searchapplications

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/stats/query/{name=searchapplications/*}</code><br>Get the query statistics for search application.</td></tr></tbody></table>

## REST Resource: v1.stats.session.searchapplications

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/stats/session/{name=searchapplications/*}</code><br>Get the # of search sessions, % of successful sessions with a click query statistics for search application.</td></tr></tbody></table>

## REST Resource: v1.stats.user.searchapplications

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/stats/user/{name=searchapplications/*}</code><br>Get the users statistics for search application.</td></tr></tbody></table>
