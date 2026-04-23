---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler
root: workspace
fetched_at: 2026-04-23T15:26:33.182Z
---

# IdentityScheduler

Handles scheduling and execution of identity connector traversal related tasks.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler.Builder">IdentityScheduler.Builder</a></td><td width="100%">Builder for creating an instance of <code>IdentityScheduler</code></td></tr></tbody></table>

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.ConnectorScheduler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler)

| boolean | [isStarted](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler#isStarted\(\)) ()  Check if `ConnectorScheduler` is started. |
| --- | --- |
| synchronized void | [start](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler#start\(\)) ()  Starts traversal process and worker threads. |
| synchronized void | [stop](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler#stop\(\)) ()  Stops traversal process and worker threads. |

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
