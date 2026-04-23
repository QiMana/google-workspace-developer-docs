---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager
root: workspace
fetched_at: 2026-04-23T15:26:30.462Z
---

# StatsManager

Object used to manage operation execution statistics.

Logically structured to look like (in RESTful representation):

```
/                                   - list of components
/:component
/:component/:operation              - long (counter)
/:component/:event
                 |success           - long (counter)
                 |failure           - long (counter)
                 |latency           - map of <latency_range, counts>
           /:operationWithVariants  - map of <variant, counts>
```

Example:

```
/requests/SendFeeds    - returns {CODE_OK: 155, CODE_404: 105}
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats">StatsManager.OperationStats</a></td><td width="100%">Object used to log events, operations, and actions</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.ResetStatsRule">StatsManager.ResetStatsRule</a></td><td width="100%"><code>TestRule</code> to reset static <code>StatsManager</code> object for unit tests.</td></tr></tbody></table>

### Public Method Summary

| static [StatsManager.OperationStats](./StatsManager.OperationStats.md) | [getComponent](./StatsManager.md#getComponent(java.lang.String)) (String component)  Retrieves the `StatsManager.OperationStats` instance for the desired component. |
| --- | --- |
| static List<String> | [getComponentNames](./StatsManager.md#getComponentNames()) () |
| static [StatsManager](./StatsManager.md) | [getInstance](./StatsManager.md#getInstance()) ()  Returns a singleton reference to this object. |
| synchronized boolean | [isRunning](./StatsManager.md#isRunning()) ()  Determines whether the statistic capture is active. |
| synchronized void | [mergeWithSnapshot](./StatsManager.md#mergeWithSnapshot(java.lang.Object)) (Object snapshot) |
| String | [printStats](./StatsManager.md#printStats()) ()  Builds human-readable statistics string to write in logs. |
| synchronized void | [resume](./StatsManager.md#resume()) ()  Starts/resumes capturing statistics. |
| synchronized void | [startFromSnapshot](./StatsManager.md#startFromSnapshot(java.lang.Object)) (Object snapshot) |
| synchronized void | [stop](./StatsManager.md#stop()) ()  Stops capturing all statistics. |
| synchronized Object | [takeSnapshot](./StatsManager.md#takeSnapshot()) () |

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

#### public static StatsManager.OperationStats getComponent (String component)

Retrieves the `StatsManager.OperationStats` instance for the desired component.

##### Parameters

| component | \- name of component that defines the name space of its statistics |
| --- | --- |

##### Returns

- OperationStats object for specified component (create instance if needed)

#### public static List<String> getComponentNames ()

#### public static StatsManager getInstance ()

Returns a singleton reference to this object.

#### public synchronized boolean isRunning ()

Determines whether the statistic capture is active.

#### public synchronized void mergeWithSnapshot (Object snapshot)

##### Parameters

| snapshot |  |
| --- | --- |

#### public String printStats ()

Builds human-readable statistics string to write in logs.

#### public synchronized void resume ()

Starts/resumes capturing statistics.

#### public synchronized void startFromSnapshot (Object snapshot)

##### Parameters

| snapshot |  |
| --- | --- |

#### public synchronized void stop ()

Stops capturing all statistics.
