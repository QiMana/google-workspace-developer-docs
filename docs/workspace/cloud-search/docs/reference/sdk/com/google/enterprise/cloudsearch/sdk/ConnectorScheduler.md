---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler
root: workspace
fetched_at: 2026-04-23T15:26:25.767Z
---

# ConnectorScheduler

Known Direct Subclasses

[ConnectorTraverser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser), [IdentityScheduler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler)

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder">ConnectorScheduler.Builder</a></td><td width="100%">Builder for <code>ConnectorScheduler</code> instances.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.OneAtATimeRunnable">ConnectorScheduler.OneAtATimeRunnable</a></td><td width="100%"><code>Runnable</code> implementation which allows only one thread to run given runnable at a time.</td></tr><tr><td>interface</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder">ConnectorScheduler.ShutdownHolder</a></td><td width="100%">Pointer to shutdown method to be executed when traversal is complete.</td></tr></tbody></table>

### Public Method Summary

| boolean | [isStarted](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler#isStarted\(\)) ()  Check if `ConnectorScheduler` is started. |
| --- | --- |
| synchronized void | [start](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler#start\(\)) ()  Starts traversal process and worker threads. |
| synchronized void | [stop](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler#stop\(\)) ()  Stops traversal process and worker threads. |

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

#### public boolean isStarted ()

Check if `ConnectorScheduler` is started.

##### Returns

- true if ConnectorScheduler started, false otherwise.

#### public synchronized void start ()

Starts traversal process and worker threads.

#### public synchronized void stop ()

Stops traversal process and worker threads.
