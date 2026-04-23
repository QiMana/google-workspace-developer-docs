---
source: https://developers.google.com/workspace/drive/activity/v2/requests
root: workspace
fetched_at: 2026-04-23T15:27:32.718Z
---

# Make requests in the Google Drive Activity API

This guide explains how to make requests in the Google Drive Activity API using the [`activity.query`](./reference/rest/v2/activity/query.md) method.

## Query key

There are 2 ways to request activity: by Google Drive item, or for everything underneath a folder hierarchy.

- `itemName`: The format for this key is "items/ITEM\_ID". Typically this is a file in Drive. If you specify a folder for this key, it shows activity for the folder such as when it was created or renamed.
- `ancestorName`: The format for this key is "items/ITEM\_ID", and the response includes activity on all items in the subtree below this folder.

When no key is set, it defaults to using the `ancestorName` of "items/root" and shows activity for all items in your Drive.

## Pagination

The `pageSize` field allows you to request an approximate number of activities to return in each response. The actual count of returned activities will vary, so your app should handle arbitrary quantities in the response.

Page sizes are limited. If your app needs many activities, make multiple requests using pagination instead of setting a large value for `pageSize`. Specifically, if there might be more activity to fetch than what's included in the response, then the response will also contain a `nextPageToken`. To retrieve more results, repeat the same request but add a `pageToken` field with the value of `nextPageToken` from the prior response.

## Consolidation

[`Action`](./reference/rest/v2/activity/action.md) objects are often grouped and returned within a single [`DriveActivity`](./reference/rest/v2/activity/driveactivity.md) resource. Some `Action` groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change.

You can also specify a [`ConsolidationStrategy`](./reference/rest/v2/activity/query.md#consolidationstrategy) (sometimes called aggregation or batching) in the request. This enables other groupings of related `Action` objects, such as several actors editing one item, or one [`Actor`](./reference/rest/v2/activity/actor.md) moving multiple files into a new Drive folder.

While an individual `Action` has one `Actor` and one [`Target`](./reference/rest/v2/activity/target.md), after grouping, the resulting `DriveActivity` can have multiple actors and multiple targets. Even after grouping, however, there's always a "primary" action that's either representative, or the most important, of all actions in the `DriveActivity` resource, depending on the requested consolidation strategy.

As a result, whether or not consolidation is turned on, it might be sufficient for many clients to view only the top-level contents of a `DriveActivity` resource (such as the collective actors and targets within the `primaryActionDetail`) and ignore the detailed actions in the response.

## Filters

You can restrict the actions that might be returned in the `DriveActivity` resource by constructing a `filter` string in the `activity.query` request. There's 2 supported fields: `time` and `detail.action_detail_case`.

### Filter by time

To restrict actions by time range, specify the field name `time` with numerical operators on date values, joined by an optional "AND". Use milliseconds since Jan 1, 1970 or the [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format, such as:

- `time > 1452409200000 AND time <= 1492812924310`
- `time >= "2016-01-10T01:02:03-05:00"`

### Filter by type

To restrict by action type, apply the field name `detail.action_detail_case` with the "has" operator (`:`). Use either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To find a list of action types, review the [`ActionDetail`](./reference/rest/v2/activity/actiondetail.md) objects.

To exclude an action type from the response, prepend a hyphen (`-`) to the beginning of the filter string.

Here's some action type examples:

- `detail.action_detail_case:RENAME`
- `detail.action_detail_case:(CREATE RESTORE)`
- `-detail.action_detail_case:MOVE`

### Combinations

These filtering conditions can be combined within a single `filter` string, such as:

- `detail.action_detail_case:(CREATE EDIT RESTORE) time > 1452409200000`

## Example requests

#### Request the 10 most recent activities for a Drive item:

```
{
  "itemName": "items/ITEM_ID",
  "pageSize": 10
}
```

#### Request consolidated activities for every Drive item below an ancestor folder:

```
{
  "ancestorName": "items/ITEM_ID",
  "consolidationStrategy": {
    "legacy": {}
  }
}
```

#### Request all MOVE and RENAME actions on a Drive item:

```
{
  "itemName": "items/ITEM_ID",
  "filter": "detail.action_detail_case:(MOVE RENAME)"
}
```

#### Request all activity since January 1, 2018 EST:

```
{
  "ancestorName": "items/root",
  "filter": "time >= \"2018-01-01T00:00:00-05:00\""
}
```

#### Request all activity, except EDIT actions, during June 2017 UTC:

```
{
  "ancestorName": "items/root",
  "filter": "time >= \"2018-06-01T00:00:00Z\" time < \"2018-07-01T00:00:00Z\" -detail.action_detail_case:EDIT"
}
```
