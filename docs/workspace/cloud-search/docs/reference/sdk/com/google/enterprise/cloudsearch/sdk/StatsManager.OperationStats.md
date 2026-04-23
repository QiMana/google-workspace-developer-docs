---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats
root: workspace
fetched_at: 2026-04-23T15:26:30.282Z
---

# StatsManager.OperationStats

Object used to log events, operations, and actions

### Nested Class Summary

<table><tbody><tr><td>interface</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats.Event">StatsManager.OperationStats.Event</a></td><td width="100%">Counter for single operation to wrap Stopwatch</td></tr></tbody></table>

### Public Method Summary

| void | [clear](./StatsManager.OperationStats.md#clear()) () |
| --- | --- |
| <T extends Enum<?>> [StatsManager.OperationStats.Event](./StatsManager.OperationStats.Event.md) | [event](./StatsManager.OperationStats.md#event(T)) (T operation) |
| [StatsManager.OperationStats.Event](./StatsManager.OperationStats.Event.md) | [event](./StatsManager.OperationStats.md#event(java.lang.String)) (String operation) |
| int | [getLogResultCounter](./StatsManager.OperationStats.md#getLogResultCounter(java.lang.String,%20java.lang.String)) (String operation, String result) |
| int | [getSuccessCount](./StatsManager.OperationStats.md#getSuccessCount(java.lang.String)) (String operation) |
| void | [logResult](./StatsManager.OperationStats.md#logResult(java.lang.String,%20java.lang.String)) (String operation, String result) |
| void | [register](./StatsManager.OperationStats.md#register(java.lang.String)) (String operation) |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

## Public Methods

#### public void clear ()

#### public StatsManager.OperationStats.Event event (T operation)

##### Parameters

| operation |  |
| --- | --- |

#### public StatsManager.OperationStats.Event event (String operation)

##### Parameters

| operation |  |
| --- | --- |

#### public int getLogResultCounter (String operation, String result)

##### Parameters

| operation |  |
| --- | --- |
| result |  |

#### public int getSuccessCount (String operation)

##### Parameters

| operation |  |
| --- | --- |

#### public void logResult (String operation, String result)

##### Parameters

| operation |  |
| --- | --- |
| result |  |

#### public void register (String operation)

##### Parameters

| operation |  |
| --- | --- |
