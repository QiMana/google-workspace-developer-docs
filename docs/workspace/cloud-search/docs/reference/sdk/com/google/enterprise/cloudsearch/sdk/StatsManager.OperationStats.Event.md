---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats.Event
root: workspace
fetched_at: 2026-04-23T15:26:30.719Z
---

# StatsManager.OperationStats.Event

Counter for single operation to wrap Stopwatch

### Public Method Summary

| abstract void | [end](./StatsManager.OperationStats.Event.md#end(boolean)) (boolean success)  Stops the stopwatch and stores stats for the operation in the related component. |
| --- | --- |
| abstract void | [failure](./StatsManager.OperationStats.Event.md#failure()) ()  same as `end(false)`. |
| abstract [StatsManager.OperationStats.Event](./StatsManager.OperationStats.Event.md) | [start](./StatsManager.OperationStats.Event.md#start()) ()  Starts the stopwatch. |
| abstract void | [success](./StatsManager.OperationStats.Event.md#success()) ()  Same as `end(true)`. |

## Public Methods

#### public abstract void end (boolean success)

Stops the stopwatch and stores stats for the operation in the related component.

##### Parameters

| success | \- results of operation that is stored |
| --- | --- |

#### public abstract void failure ()

same as `end(false)`.

#### public abstract StatsManager.OperationStats.Event start ()

Starts the stopwatch.

##### Returns

- a reference to this object.

#### public abstract void success ()

Same as `end(true)`.
