---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication
root: workspace
fetched_at: 2026-04-23T15:26:34.702Z
---

# IdentityApplication

Main object and access point for the SDK.

Every connector begins execution by creating an instance of this class and calling its `start()` method. This starts processing, triggering the SDK to begin making connector calls as configured in the configuration file.

Sample usage:

```
public static void main(String[] args) throws IOException, InterruptedException {
     IdentityApplication application = new IdentityApplication.Builder(
         new MyIdentityConnector(new MyIdentityRepository()), args).build();
     application.start();
   }
```

Optional configuration parameter(s):

- `schedule.incrementalTraversalIntervalSecs` - Specifies the interval between scheduled incremental traversals (in seconds).
- `schedule.performTraversalOnStart` - Specifies whether to run the traversal immediately at start up rather than waiting for the first interval to expire.
- `schedule.traversalIntervalSecs` - Specifies the interval between scheduled traversals (in seconds).
- `connector.runOnce` - Specifies whether the connector should exit after a single traversal.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder">IdentityApplication.Builder</a></td><td width="100%">Builder for creating an instance of <code>IdentityApplication</code></td></tr></tbody></table>

### Inherited Constant Summary

From class [com.google.enterprise.cloudsearch.sdk.Application](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application)

| String | [INCREMENTAL\_INTERVAL\_SECONDS](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#INCREMENTAL_INTERVAL_SECONDS) | Configuration key for incremental traversal interval. |
| --- | --- | --- |
| String | [POLL\_INTERVAL\_SECONDS](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#POLL_INTERVAL_SECONDS) | Configuration key for interval between poll requests. |
| String | [RUN\_ONCE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#RUN_ONCE) | Configuration key to specify if connector should exit after full traversal. |
| String | [TRAVERSE\_INTERVAL\_SECONDS](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#TRAVERSE_INTERVAL_SECONDS) | Configuration key for full traversal intervals. |
| String | [TRAVERSE\_ON\_START](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#TRAVERSE_ON_START) | Configuration key to indicate if traversal should be performed at start of the connector process. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.Application](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application)

| static void | [setLogger](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#setLogger\(java.util.logging.Logger\)) (Logger logger)  Helper method to override default `Logger` used by `Application` implementation. |
| --- | --- |
| synchronized void | [shutdown](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#shutdown\(java.lang.String\)) (String event)  Shutdown Connector in response to an event. |
| void | [start](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#start\(\)) ()  Begins connector execution by initializing and starting the SDK. |

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
