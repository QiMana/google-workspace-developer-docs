---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication
root: workspace
fetched_at: 2026-04-23T15:26:42.910Z
---

# IndexingApplication

Main object and access point for the SDK.

Every connector begins execution by creating an instance of this class and calling its `start()` method. This starts processing, triggering the SDK to begin making connector calls as configured in the configuration file.

Sample usage:

```
public static void main(String[] args) throws IOException, InterruptedException {
     IndexingApplication application = new IndexingApplication.Builder(
         new MyConnector(new MyRepository()), args).build();
     application.start();
   }
```

Optional configuration parameter(s):

- `structuredData.localSchema` - Specifies the local structured data schema name. It is read from the data source and used for repository structured data.
- `schedule.incrementalTraversalIntervalSecs` - Specifies the interval between scheduled incremental traversals (in seconds).
- `schedule.performTraversalOnStart` - Specifies whether to run the traversal immediately at start up rather than waiting for the first interval to expire.
- `schedule.pollQueueIntervalSecs` - Specifies the interval between scheduled poll queue intervals (in seconds).
- `schedule.traversalIntervalSecs` - Specifies the interval between scheduled traversals (in seconds).
- `connector.runOnce` - Specifies whether the connector should exit after a single traversal.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder">IndexingApplication.Builder</a></td><td width="100%">Buider for <code>IndexingApplication</code> instances.</td></tr></tbody></table>

### Constant Summary

| String | [LOCAL\_SCHEMA](./IndexingApplication.md#LOCAL_SCHEMA) | *This constant is deprecated. Use `LOCAL_SCHEMA`* |
| --- | --- | --- |

### Inherited Constant Summary

From class [com.google.enterprise.cloudsearch.sdk.Application](../Application.md)

| String | [INCREMENTAL\_INTERVAL\_SECONDS](../Application.md#INCREMENTAL_INTERVAL_SECONDS) | Configuration key for incremental traversal interval. |
| --- | --- | --- |
| String | [POLL\_INTERVAL\_SECONDS](../Application.md#POLL_INTERVAL_SECONDS) | Configuration key for interval between poll requests. |
| String | [RUN\_ONCE](../Application.md#RUN_ONCE) | Configuration key to specify if connector should exit after full traversal. |
| String | [TRAVERSE\_INTERVAL\_SECONDS](../Application.md#TRAVERSE_INTERVAL_SECONDS) | Configuration key for full traversal intervals. |
| String | [TRAVERSE\_ON\_START](../Application.md#TRAVERSE_ON_START) | Configuration key to indicate if traversal should be performed at start of the connector process. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.Application](../Application.md)

| static void | [setLogger](../Application.md#setLogger(java.util.logging.Logger)) (Logger logger)  Helper method to override default `Logger` used by `Application` implementation. |
| --- | --- |
| synchronized void | [shutdown](../Application.md#shutdown(java.lang.String)) (String event)  Shutdown Connector in response to an event. |
| void | [start](../Application.md#start()) ()  Begins connector execution by initializing and starting the SDK. |

From class com.google.common.util.concurrent.AbstractIdleService

| final void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| final void | awaitRunning() |
| final void | awaitRunning(long arg0, TimeUnit arg1) |
| final void | awaitTerminated(long arg0, TimeUnit arg1) |
| final void | awaitTerminated() |
| final Throwable | failureCause() |
| final boolean | isRunning() |
| final Service | startAsync() |
| final Service.State | state() |
| final Service | stopAsync() |
| String | toString() |

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

From interface com.google.common.util.concurrent.Service

| abstract void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| abstract void | awaitRunning() |
| abstract void | awaitRunning(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated() |
| abstract Throwable | failureCause() |
| abstract boolean | isRunning() |
| abstract Service | startAsync() |
| abstract Service.State | state() |
| abstract Service | stopAsync() |

## Constants

#### public static final String LOCAL\_SCHEMA

**This constant is deprecated.**  
Use `LOCAL_SCHEMA`

Constant Value: "structuredData.localSchema"
