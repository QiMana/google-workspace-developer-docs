---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest.SettableFutureCallback
root: workspace
fetched_at: 2026-04-23T15:26:22.112Z
---

# AsyncRequest.SettableFutureCallback

`JsonBatchCallback` wrapper which updates `ListenableFuture` associated with individual batched request.

### Public Method Summary

| void | [onFailure](./AsyncRequest.SettableFutureCallback.md#onFailure(com.google.api.client.googleapis.json.GoogleJsonError,%20com.google.api.client.http.HttpHeaders)) (GoogleJsonError error, HttpHeaders responseHeaders)  Wrapper on `onFailure(E, HttpHeaders)` to record failure while executing batched request. |
| --- | --- |
| void | [onStart](./AsyncRequest.SettableFutureCallback.md#onStart()) ()  Record start of processing / execution for batched request. |
| void | [onSuccess](./AsyncRequest.SettableFutureCallback.md#onSuccess(T,%20com.google.api.client.http.HttpHeaders)) (T t, HttpHeaders responseHeaders)  Wrapper on `onSuccess(T, HttpHeaders)` to record successful execution of batched request. |

### Inherited Method Summary

From class com.google.api.client.googleapis.batch.json.JsonBatchCallback

| void | onFailure(Object arg0, HttpHeaders arg1) |
| --- | --- |
| final void | onFailure(GoogleJsonErrorContainer arg0, HttpHeaders arg1) |
| abstract void | onFailure(GoogleJsonError arg0, HttpHeaders arg1) |

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

From interface com.google.api.client.googleapis.batch.BatchCallback

| abstract void | onFailure(GoogleJsonErrorContainer arg0, HttpHeaders arg1) |
| --- | --- |
| abstract void | onSuccess(T arg0, HttpHeaders arg1) |

From interface [com.google.enterprise.cloudsearch.sdk.AsyncRequest.EventStartCallback](./AsyncRequest.EventStartCallback.md)

| abstract void | [onStart](./AsyncRequest.EventStartCallback.md#onStart()) ()  Record start of an event. |
| --- | --- |

## Public Methods

#### public void onFailure (GoogleJsonError error, HttpHeaders responseHeaders)

Wrapper on `onFailure(E, HttpHeaders)` to record failure while executing batched request.

##### Parameters

| error |  |
| --- | --- |
| responseHeaders |  |

#### public void onStart ()

Record start of processing / execution for batched request.

#### public void onSuccess (T t, HttpHeaders responseHeaders)

Wrapper on `onSuccess(T, HttpHeaders)` to record successful execution of batched request.

##### Parameters

| t |  |
| --- | --- |
| responseHeaders |  |

##### Throws

| IOException |  |
| --- | --- |
