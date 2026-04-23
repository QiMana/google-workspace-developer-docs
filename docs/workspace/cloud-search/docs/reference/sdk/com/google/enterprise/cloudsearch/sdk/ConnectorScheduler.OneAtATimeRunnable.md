---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.OneAtATimeRunnable
root: workspace
fetched_at: 2026-04-23T15:26:26.575Z
---

# ConnectorScheduler.OneAtATimeRunnable

`Runnable` implementation which allows only one thread to run given runnable at a time.

### Public Constructor Summary

|  | [ConnectorScheduler.OneAtATimeRunnable](./ConnectorScheduler.OneAtATimeRunnable.md#ConnectorScheduler.OneAtATimeRunnable(java.lang.Runnable,%20java.lang.String)) (Runnable toRun, String tag)  Create `ConnectorScheduler.OneAtATimeRunnable` wrapper for `toRun`. |
| --- | --- |
|  | [ConnectorScheduler.OneAtATimeRunnable](./ConnectorScheduler.OneAtATimeRunnable.md#ConnectorScheduler.OneAtATimeRunnable(java.lang.Runnable,%20java.lang.Runnable)) (Runnable toRun, Runnable alreadyRunning)  Create `ConnectorScheduler.OneAtATimeRunnable` wrapper for `toRun`. |

### Public Method Summary

| void | [run](./ConnectorScheduler.OneAtATimeRunnable.md#run()) () |
| --- | --- |

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

From interface java.lang.Runnable

| abstract void | run() |
| --- | --- |

## Public Constructors

#### public ConnectorScheduler.OneAtATimeRunnable (Runnable toRun, String tag)

Create `ConnectorScheduler.OneAtATimeRunnable` wrapper for `toRun`.

##### Parameters

| toRun | Runnable to run one at a time |
| --- | --- |
| tag | message to log when when toRun is already running. |

#### public ConnectorScheduler.OneAtATimeRunnable (Runnable toRun, Runnable alreadyRunning)

Create `ConnectorScheduler.OneAtATimeRunnable` wrapper for `toRun`.

##### Parameters

| toRun | Runnable to run one at a time |
| --- | --- |
| alreadyRunning | Runnable to run when `toRun` is already running. |
