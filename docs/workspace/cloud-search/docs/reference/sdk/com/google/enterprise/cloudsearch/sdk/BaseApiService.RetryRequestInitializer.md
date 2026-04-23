---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.RetryRequestInitializer
root: workspace
fetched_at: 2026-04-23T15:26:22.720Z
---

# BaseApiService.RetryRequestInitializer

Adds a backoff and retry response and exception handlers to the `HttpRequest`.

### Public Constructor Summary

[BaseApiService.RetryRequestInitializer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.RetryRequestInitializer#BaseApiService.RetryRequestInitializer\(com.google.enterprise.cloudsearch.sdk.RetryPolicy\)) ([RetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy) retryPolicy)

Create an instance of `BaseApiService.RetryRequestInitializer` based on specified `RetryPolicy`.

### Public Method Summary

| void | [initialize](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.RetryRequestInitializer#initialize\(com.google.api.client.http.HttpRequest\)) (HttpRequest request)  Initialize `HttpRequest` to setup exponential back off and automatic retries. |
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

From interface com.google.api.client.http.HttpRequestInitializer

| abstract void | initialize(HttpRequest arg0) |
| --- | --- |

## Public Constructors

#### public BaseApiService.RetryRequestInitializer (RetryPolicy retryPolicy)

Create an instance of `BaseApiService.RetryRequestInitializer` based on specified `RetryPolicy`.

##### Parameters

| retryPolicy | to setup exponential back off and automatic retries. |
| --- | --- |

## Public Methods

#### public void initialize (HttpRequest request)

Initialize `HttpRequest` to setup exponential back off and automatic retries.

##### Parameters

| request |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
