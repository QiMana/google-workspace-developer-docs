---
source: https://developers.google.com/workspace/drive/activity/v2/datamodel
root: workspace
fetched_at: 2026-04-23T15:27:26.655Z
---

# Drive Activity API data model

This guide explains the main components of a response in the Google Drive Activity API, showing examples and how to interpret them.

## Objects

- [`DriveActivity`](./reference/rest/v2/activity/driveactivity.md): This is the primary resource returned by queries to the Drive Activity API. It describes one or more actors performing one or more actions affecting one or more targets.
- [`Timestamp`](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp) and [`TimeRange`](./reference/rest/v2/activity/timerange.md): These describe, respectively, either a single point in time when the activity occurred, or the start and end of when the activity occurred over a span of time.
- [`Actor`](./reference/rest/v2/activity/actor.md): Typically, an `Actor` is an end user. However, sometimes, a system event can trigger an [`Action`](./reference/rest/v2/activity/action.md) when an administrator is acting as a user or as themselves, or when performed by an unidentifiable person. The `Actor` message encapsulates each of these cases.
- [`Target`](./reference/rest/v2/activity/target.md): A `Target` is the object of an activity, like a file, a folder, a shared drive, or a file comment. Note that many action types support more than one kind of target. For example, though `Edit` generally applies to Drive files, other actions like `Rename` and `Create` can also apply to Drive folders and shared drives. Targets that aren't Drive items can still refer to one, such as the root folder of a drive or the parent document containing a file comment.
- [`Action`](./reference/rest/v2/activity/action.md): Each `DriveActivity` resource has one or more related actions. An `Action` is self-contained, like an *event*, in that it comprises not only the detailed type and information about the action, but also an `Actor`, a `Target`, and either a `Timestamp` or `TimeRange`. To avoid redundancy, an `Action` doesn't populate its own `Target`, `Actor`, or time fields when those are the same as the overall `DriveActivity`.
- [`ActionDetail`](./reference/rest/v2/activity/actiondetail.md): This is the specific type and detailed information about an `Action`. For example, a `Move` action detail has a source and destination location, and a `PermissionChange` specifies who can now access a document and with what privileges.

## Example responses

Review the following to see sample responses.

### A user edited a file in Drive

A `DriveActivity` resource might include only one action, such as a user editing one file.

```
"activities":[{
  "primaryActionDetail":{ "edit":{} },
  "actors":[ { "user":{ "knownUser":{ "personName":"people/ACCOUNT_ID" } } } ],
  "targets":[ { "driveItem":{ "name":"items/ITEM_ID", "title":"TITLE", "file":{} } } ],
  "timestamp":{ "seconds":"1536794657", "nanos":791000000 },
  "actions":[ { "detail":{ "edit":{} } } ]
}]
```

This output includes the following values:

- ACCOUNT\_ID: the ID of the user. It can be used with the [People API](https://developers.google.com/people) to get more information.
- ITEM\_ID: the ID of the Drive item.
- TITLE: the title of the Drive item.

Note that the `Action` object in this response doesn't include the `Actor`, `Target`, or `timestamp` because they're the same as the overall `DriveActivity`.

### Two users edited the same file at similar times

When a [`ConsolidationStrategy`](./reference/rest/v2/activity/query.md#consolidationstrategy) is used, related actions are grouped into one combined `DriveActivity`. In this example, two similar actions are grouped: one `Edit` action type from two different users.

```
"activities":[{
  "primaryActionDetail":{ "edit":{} },
  "actors":[
    { "user":{ "knownUser":{ "personName":"people/ACCOUNT_ID_1" } } },
    { "user":{ "knownUser":{ "personName":"people/ACCOUNT_ID_2" } } }
  ],
  "targets":[
    { "driveItem":{ "name":"items/ITEM_ID", "title":"TITLE", "file":{} } }
  ],
  "timeRange":{
    "startTime":{ "seconds":"1541089823", "nanos":712000000 },
    "endTime":{ "seconds":"1541089830", "nanos":830000000 }
  },
  "actions":[
    {
      "detail":{ "edit":{} },
      "actor":{ "user":{ "knownUser":{ "personName":"people/ACCOUNT_ID_1" } } },
      "timestamp":{ "seconds":"1541089830", "nanos":830000000 }
    },
    {
      "detail":{ "edit":{} },
      "actor":{ "user":{ "knownUser":{ "personName":"people/ACCOUNT_ID_2" } } },
      "timestamp":{ "seconds":"1541089823", "nanos":712000000 }
    }
  ]
}]
```

This output includes the following values:

- ACCOUNT\_ID\_1: the ID of the first user. It can be used with the [People API](https://developers.google.com/people) to get more information.
- ACCOUNT\_ID\_2: the ID of the second user.
- ITEM\_ID: the ID of the Drive item.
- TITLE: the title of the Drive item.

Note that the `Action` object in this response doesn't include the `Target` because it's the same as the overall `DriveActivity`.

The example also illustrates how apps might use only the summary information in `DriveActivity`, without looking at the individual actions. The response indicates that two users edited a given file over a span of time.

### A user moved two files into a new directory

In this example, the `ConsolidationStrategy` grouped two related `Move` actions because the files were moved from the same source to the same destination at the same time.

```
"activities":[{
  "primaryActionDetail":{
    "move":{
      "addedParents":[ { ... } ]
      "removedParents":[ { ... } ]
    }
  },
  "actors":[ { "user":{ "knownUser":{ "personName":"people/ACCOUNT_ID" } } } ],
  "targets":[
    { "driveItem":{ "name":"items/ITEM_ID_1", "title":"TITLE_1", "file":{} } },
    { "driveItem":{ "name":"items/ITEM_ID_2", "title":"* TITLE_2", "file":{} } }
  ],
  "timestamp":{ "seconds":"1541090960", "nanos":985000000 },
  "actions":[
    {
      "detail":{ "move":{ "addedParents":[ { ... } ] "removedParents":[ { ... } ] } },
      "target":{ "driveItem":{ "name":"items/ITEM_ID_1", "title":"TITLE_1", "file":{} } }
    },
    {
      "detail":{ "move":{ "addedParents":[ { ... } ] "removedParents":[ { ... } ] } },
      "target":{ "driveItem":{ "name":"items/ITEM_ID_2", "title":"* TITLE_2", "file":{} } }
    }
  ]
}]
```

This output includes the following values:

- ACCOUNT\_ID: the ID of the user. It can be used with the [People API](https://developers.google.com/people) to get more information.
- ITEM\_ID\_1: the ID of the first Drive item.
- ITEM\_ID\_2: the ID of the second Drive item.
- TITLE\_1: the title of the first Drive item.
- TITLE\_2: the title of the second Drive item.

Note that the `Action` object in this response doesn't include the `Actor` or `timestamp` because they're the same as the overall `DriveActivity`.
