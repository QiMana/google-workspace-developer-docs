---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser
root: workspace
fetched_at: 2026-04-23T15:26:40.183Z
---

# ConnectorTraverser

Handles scheduling and execution of indexing connector traversal related tasks.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder">ConnectorTraverser.Builder</a></td><td width="100%"></td></tr></tbody></table>

### Public Method Summary

| synchronized void | [start](./ConnectorTraverser.md#start()) ()  Starts traversal process and worker threads. |
| --- | --- |
| synchronized void | [stop](./ConnectorTraverser.md#stop()) ()  Stops traversal process and worker threads. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.ConnectorScheduler](../ConnectorScheduler.md)

| boolean | [isStarted](../ConnectorScheduler.md#isStarted()) ()  Check if `ConnectorScheduler` is started. |
| --- | --- |
| synchronized void | [start](../ConnectorScheduler.md#start()) ()  Starts traversal process and worker threads. |
| synchronized void | [stop](../ConnectorScheduler.md#stop()) ()  Stops traversal process and worker threads. |

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

#### public synchronized void start ()

Starts traversal process and worker threads.

#### public synchronized void stop ()

Stops traversal process and worker threads.
