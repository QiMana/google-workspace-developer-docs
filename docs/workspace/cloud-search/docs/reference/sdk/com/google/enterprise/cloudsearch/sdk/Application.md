---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application
root: workspace
fetched_at: 2026-04-23T15:26:21.723Z
---

# Application

Known Direct Subclasses

[IdentityApplication](./identity/IdentityApplication.md), [IndexingApplication](./indexing/IndexingApplication.md)

Main object and access point for the SDK.

Every connector begins execution by creating an instance of this class and calling its `start()` method. This starts processing, triggering the SDK to begin making connector calls as configured in the configuration file.

Sample usage:

```
public static void main(String[] args) throws IOException, InterruptedException {
     Application application = new Application.Builder(
         new MyConnector(new MyRepository()), args).build();
     application.start();
   }
```

Optional configuration parameter(s):

- \- Specifies the interval between scheduled incremental traversals (in seconds).
- \- Specifies whether to run the traversal immediately at start up rather than waiting for the first interval to expire.
- \- Specifies the interval between scheduled poll queue intervals (in seconds).
- \- Specifies the interval between scheduled traversals (in seconds).
- \- Specifies whether the connector should exit after a single traversal.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper">Application.AbstractApplicationHelper</a> <C extends AbstractBuilder<C, T extends <a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext">ConnectorContext</a> >, S extends AbstractBuilder<S, T>, T></td><td width="100%">Helper class to make our class more testable: factory and util methods</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder">Application.Builder</a></td><td width="100%">Builder object for creating <code>Application</code> instance.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.ShutdownHook">Application.ShutdownHook</a></td><td width="100%"><code>Runnable</code> implementation to register with <code>addShutdownHook(Thread)</code>.</td></tr></tbody></table>

### Constant Summary

| String | [INCREMENTAL\_INTERVAL\_SECONDS](./Application.md#INCREMENTAL_INTERVAL_SECONDS) | Configuration key for incremental traversal interval. |
| --- | --- | --- |
| String | [POLL\_INTERVAL\_SECONDS](./Application.md#POLL_INTERVAL_SECONDS) | Configuration key for interval between poll requests. |
| String | [RUN\_ONCE](./Application.md#RUN_ONCE) | Configuration key to specify if connector should exit after full traversal. |
| String | [TRAVERSE\_INTERVAL\_SECONDS](./Application.md#TRAVERSE_INTERVAL_SECONDS) | Configuration key for full traversal intervals. |
| String | [TRAVERSE\_ON\_START](./Application.md#TRAVERSE_ON_START) | Configuration key to indicate if traversal should be performed at start of the connector process. |

### Public Method Summary

| static void | [setLogger](./Application.md#setLogger(java.util.logging.Logger)) (Logger logger)  Helper method to override default `Logger` used by `Application` implementation. |
| --- | --- |
| synchronized void | [shutdown](./Application.md#shutdown(java.lang.String)) (String event)  Shutdown Connector in response to an event. |
| void | [start](./Application.md#start()) ()  Begins connector execution by initializing and starting the SDK. |

### Inherited Method Summary

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

#### public static final String INCREMENTAL\_INTERVAL\_SECONDS

Configuration key for incremental traversal interval.

Constant Value: "schedule.incrementalTraversalIntervalSecs"

#### public static final String POLL\_INTERVAL\_SECONDS

Configuration key for interval between poll requests.

Constant Value: "schedule.pollQueueIntervalSecs"

#### public static final String RUN\_ONCE

Configuration key to specify if connector should exit after full traversal.

Constant Value: "connector.runOnce"

#### public static final String TRAVERSE\_INTERVAL\_SECONDS

Configuration key for full traversal intervals.

Constant Value: "schedule.traversalIntervalSecs"

#### public static final String TRAVERSE\_ON\_START

Configuration key to indicate if traversal should be performed at start of the connector process.

Constant Value: "schedule.performTraversalOnStart"

## Public Methods

#### public static void setLogger (Logger logger)

Helper method to override default `Logger` used by `Application` implementation.

##### Parameters

| logger | to use |
| --- | --- |

#### public synchronized void shutdown (String event)

Shutdown Connector in response to an event.

##### Parameters

| event | triggering shutdown. |
| --- | --- |

#### public void start ()

Begins connector execution by initializing and starting the SDK.

This is the main entry point for the SDK. This method initializes all the objects used in traversing a repository and schedules the traversals based on the configuration parameters.

##### Throws

| InterruptedException | if aborted during start up |
| --- | --- |
