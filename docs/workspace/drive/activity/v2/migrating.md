---
source: https://developers.google.com/workspace/drive/activity/v2/migrating
root: workspace
fetched_at: 2026-04-23T15:27:27.204Z
---

# Migrate from Drive Activity API v1

This guide explains the differences between Google Drive Activity API v1 and v2, and how to change your v1 application to support the v2 API.

## Authorization

The v1 API used this scope:

- `https://www.googleapis.com/auth/activity`

The v2 API requires one of the following scopes:

- `https://www.googleapis.com/auth/drive.activity`
- `https://www.googleapis.com/auth/drive.activity.readonly`

## Resource names

In the v1 API, identifiers for objects like Google Drive items and users were opaque strings. In the v2 API, these objects are typically referenced using resource names. For more information, see the [Cloud API Design Guide](https://cloud.google.com/apis/design/resource_names).

These identifiers can generally be converted. For example, Drive items in the v2 API are referenced using the resource name `items/ITEM_ID_V1`.

## Requests

The request format for v2 is similar to that of v1. Specifically, you can still request activity for a Drive file or a Drive ancestor, though note that you must format those request parameters as [resource names](#resource_names) by prefixing them with `items/`.

"Grouping" is now called [Consolidation](https://developers.google.com/workspace/drive/activity/v2/requests#consolidation), and the `source` and `userId` request parameters have been removed.

There are also new [Filter](https://developers.google.com/workspace/drive/activity/v2/requests#filters) options that allow you to constrain the types of activity data returned in the response.

## Actions

In the v1 API, the activity type, and the data associated with that activity, were in separate fields. For example, if the `primaryEventType` field contained the value `move`, then apps would assume that a top-level `move` field is populated with the added and removed parents.

In the v2 API, these fields are no longer distinct. The [`ActionDetail`](https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/actiondetail) message has exactly one field set. It signifies the action type and contains the details associated with that action. For example, an `ActionDetail` representing a move only sets the `move` field, and that field lists the added and removed parents.

The v1 API `primaryEventType` field roughly corresponds with the v2 `primaryActionDetail`.

## Actors

In the v1 API, the returned activity contained a `User` if the actor was a known user, and optionally contained a top-level field such as `fromUserDeletion` for special cases.

In the v2 API, a richer set of [`Actor`](https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/actor) types is available, and `user.knownUser` is populated when the actor is a known user. If your application needs detailed information about users, it can query it from the [People API](https://developers.google.com/people) by passing the `KnownUser` field [`personName`](https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/user#knownuser) to the [`people.get`](https://developers.google.com/people/api/rest/v1/people/get) method.

## Targets

In the v1 API, targets were always Drive items. In the v2 API, targets can be other types of objects in Drive. For example, changes to a drive have a target type of [`Drive`](https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/drive). The root folder of a shared drive is still returned (as a [`DriveItem`](https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/driveitem) in the `root` field), but it's not the immediate target of the activity. A similar concept applies to a [`FileComment`](https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/filecomment) resource, whose `parent` field refers to the Drive item containing the target comment thread.

## Consolidated activity

In the v1 API, the style of response changed when a consolidation ("grouping") strategy was set. Specifically, when consolidation was turned on, each activity contained the constituent `singleEvents` and a `combinedEvent` that summarized the common activity among those constituent events. When consolidation was turned off, the `combinedEvent` field contained the original unconsolidated event for each activity. Any of these events could represent more than one action, such as a create along with a share.

In the v2 API, the style of response doesn't change based on the consolidation strategy, as the returned [`DriveActivity`](https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/driveactivity) always contains the full set of actors, targets, and actions.
