---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/cloud-search
root: workspace
fetched_at: 2026-04-23T15:24:12.500Z
---

# Cloud Search Audit Activity Events

This document lists the events and parameters for various types of Cloud Search Audit activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=cloud_search`.

## List Query Sources

Event Type for list query sources. Events of this type are returned with `type=LIST_QUERY_SOURCES`.

### List Query Sources Query

Event name for list query sources.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>LIST_QUERY_SOURCES</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>api_call_common_fields_container</code></td><td><p><code>message</code></p><p>Common fields sent in the API call.</p></td></tr><tr><td><code>api_status</code></td><td><p><code>message</code></p><p>Response Status of the API call.</p></td></tr><tr><td><code>device_info</code></td><td><p><code>message</code></p><p>Device info of the request.</p></td></tr><tr><td><code>list_query_sources_request</code></td><td><p><code>message</code></p><p>List query sources request.</p></td></tr><tr><td><code>list_query_sources_response</code></td><td><p><code>message</code></p><p>List query sources response.</p></td></tr><tr><td><code>request_type</code></td><td><p><code>string</code></p><p>Request type (1P Web, 1P Mobile, API). Possible values:</p><ul><li><code>1P_MOBILE</code><br>Parameter to indicate that the request is a 1P Mobile request.</li><li><code>1P_WEB</code><br>Parameter to indicate that the request is a 1P Web request.</li><li><code>API</code><br>Parameter to indicate that the request is an API request.</li></ul></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>cloud_search</b>?eventName=<b>LIST_QUERY_SOURCES</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> requested for list of query sources</code></div></td></tr></tbody></table>

## search

Event type for search. Events of this type are returned with `type=SEARCH_QUERY`.

### Search query

Event name for user searching a query.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>SEARCH</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>api_call_common_fields_container</code></td><td><p><code>message</code></p><p>Common fields sent in the API call.</p></td></tr><tr><td><code>api_status</code></td><td><p><code>message</code></p><p>Response Status of the API call.</p></td></tr><tr><td><code>device_info</code></td><td><p><code>message</code></p><p>Device info of the request.</p></td></tr><tr><td><code>request_type</code></td><td><p><code>string</code></p><p>Request type (1P Web, 1P Mobile, API). Possible values:</p><ul><li><code>1P_MOBILE</code><br>Parameter to indicate that the request is a 1P Mobile request.</li><li><code>1P_WEB</code><br>Parameter to indicate that the request is a 1P Web request.</li><li><code>API</code><br>Parameter to indicate that the request is an API request.</li></ul></td></tr><tr><td><code>SEARCH_APPLICATION_ID</code></td><td><p><code>string</code></p><p>Search application id.</p></td></tr><tr><td><code>search_request</code></td><td><p><code>message</code></p><p>Search Request issued for the user search query.</p></td></tr><tr><td><code>search_response</code></td><td><p><code>message</code></p><p>Search Response sent to the user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>cloud_search</b>?eventName=<b>SEARCH</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> searched a query</code></div></td></tr></tbody></table>

## suggest

Event type for suggest. Events of this type are returned with `type=SUGGEST_QUERY`.

### Suggest Query

Event name for a suggest query.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>SUGGEST</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>api_call_common_fields_container</code></td><td><p><code>message</code></p><p>Common fields sent in the API call.</p></td></tr><tr><td><code>api_status</code></td><td><p><code>message</code></p><p>Response Status of the API call.</p></td></tr><tr><td><code>device_info</code></td><td><p><code>message</code></p><p>Device info of the request.</p></td></tr><tr><td><code>request_type</code></td><td><p><code>string</code></p><p>Request type (1P Web, 1P Mobile, API). Possible values:</p><ul><li><code>1P_MOBILE</code><br>Parameter to indicate that the request is a 1P Mobile request.</li><li><code>1P_WEB</code><br>Parameter to indicate that the request is a 1P Web request.</li><li><code>API</code><br>Parameter to indicate that the request is an API request.</li></ul></td></tr><tr><td><code>suggest_request</code></td><td><p><code>message</code></p><p>Suggest request issued for the user suggest query.</p></td></tr><tr><td><code>suggest_response</code></td><td><p><code>message</code></p><p>Suggest Response sent to the user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>cloud_search</b>?eventName=<b>SUGGEST</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> was suggested a query</code></div></td></tr></tbody></table>
