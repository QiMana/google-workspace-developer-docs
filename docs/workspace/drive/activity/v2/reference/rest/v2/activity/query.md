---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/query
root: workspace
fetched_at: 2026-04-23T15:27:31.585Z
---

# Method: activity.query

Query past activity in Google Drive.

### HTTP request

`POST https://driveactivity.googleapis.com/v2/activity:query`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "consolidationStrategy": {
    object (ConsolidationStrategy)
  },
  "pageSize": integer,
  "pageToken": string,
  "filter": string,

  "itemName": string,
  "ancestorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>consolidationStrategy</code></td><td><p><code>object (<code>ConsolidationStrategy</code>)</code></p><p>Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token identifies which page of results to return. Set this to the nextPageToken value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value".</p><p>Supported fields:</p><ul><li><p><code>time</code>: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC 3339</a> format. Examples:</p><ul><li><code>time > 1452409200000 AND time <= 1492812924310</code></li><li><code>time >= "2016-01-10T01:02:03-05:00"</code></li></ul></li><li><p><code>detail.action_detail_case</code>: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (<code>-</code>) to the beginning of the filter string. Examples:</p><ul><li><code>detail.action_detail_case:RENAME</code></li><li><code>detail.action_detail_case:(CREATE RESTORE)</code></li><li><code>-detail.action_detail_case:MOVE</code></li></ul></li></ul></td></tr><tr><td colspan="2">Union field <code>key</code>. The primary criteria in the query. The default is ancestorName = <code>items/root</code>, if no key is specified. <code>key</code> can be only one of the following:</td></tr><tr><td><code>itemName</code></td><td><p><code>string</code></p><p>Return activities for this Drive item. The format is <code>items/ITEM_ID</code>.</p></td></tr><tr><td><code>ancestorName</code></td><td><p><code>string</code></p><p>Return activities for this Drive folder, plus all children and descendants. The format is <code>items/ITEM_ID</code>.</p></td></tr></tbody></table>

### Response body

Response message for querying Drive activity.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "activities": [
    {
      object (DriveActivity)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>activities[]</code></td><td><p><code>object (<code>DriveActivity</code>)</code></p><p>List of activity requested.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.activity`
- `https://www.googleapis.com/auth/drive.activity.readonly`

For more information, see the [Authorization guide](../../../../../../../guides/configure-oauth-consent.md).

## ConsolidationStrategy

How the individual activities are consolidated. If a set of activities is related they can be consolidated into one combined activity, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.

JSON representation

```
{

  "none": {
    object (NoConsolidation)
  },
  "legacy": {
    object (Legacy)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>strategy</code>. How the individual activities are consolidated. <code>strategy</code> can be only one of the following:</td></tr><tr><td><code>none</code></td><td><p><code>object (<code>NoConsolidation</code>)</code></p><p>The individual activities are not consolidated.</p></td></tr><tr><td><code>legacy</code></td><td><p><code>object (<code>Legacy</code>)</code></p><p>The individual activities are consolidated using the legacy strategy.</p></td></tr></tbody></table>

## NoConsolidation

This type has no fields.

A strategy that does no consolidation of individual activities.

## Legacy

This type has no fields.

A strategy that consolidates activities using the grouping rules from the legacy V1 Activity API. Similar actions occurring within a window of time can be grouped across multiple targets (such as moving a set of files at once) or multiple actors (such as several users editing the same item). Grouping rules for this strategy are specific to each type of action.
