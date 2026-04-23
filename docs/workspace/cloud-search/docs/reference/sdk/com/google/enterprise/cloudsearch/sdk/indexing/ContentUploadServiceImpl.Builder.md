---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:39.999Z
---

# ContentUploadServiceImpl.Builder

### Public Constructor Summary

[ContentUploadServiceImpl.Builder](./ContentUploadServiceImpl.Builder.md#ContentUploadServiceImpl.Builder()) ()

### Public Method Summary

|  | [build](./ContentUploadServiceImpl.Builder.md#build()) ()  Builder to create a content upload service. |
| --- | --- |
| Set<String> | [getApiScopes](./ContentUploadServiceImpl.Builder.md#getApiScopes()) ()  Gets API scopes to be used for uploading content using Cloud Search API. |
| AbstractGoogleJsonClient.Builder | [getServiceBuilder](./ContentUploadServiceImpl.Builder.md#getServiceBuilder(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)  Gets `CloudSearch.Builder` instance used for creating `CloudSearch` API client. |
| [ContentUploadServiceImpl.Builder](./ContentUploadServiceImpl.Builder.md) | [getThis](./ContentUploadServiceImpl.Builder.md#getThis()) ()  Gets this instance of `ContentUploadServiceImpl.Builder` |
| [ContentUploadServiceImpl.Builder](./ContentUploadServiceImpl.Builder.md) | [setExecutorService](./ContentUploadServiceImpl.Builder.md#setExecutorService(java.util.concurrent.ExecutorService)) (ExecutorService executorService)  Sets `ExecutorService` used by for uploading content asynchronously. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.BaseApiService.AbstractBuilder](../BaseApiService.AbstractBuilder.md)

| abstract [BaseApiService](../BaseApiService.md) <T> | [build](../BaseApiService.AbstractBuilder.md#build()) ()  Get instance of `BaseApiService` implementation. |
| --- | --- |
| abstract Set<String> | [getApiScopes](../BaseApiService.AbstractBuilder.md#getApiScopes()) ()  Get scopes to be used while making Google API requests. |
| abstract AbstractGoogleJsonClient.Builder | [getServiceBuilder](../BaseApiService.AbstractBuilder.md#getServiceBuilder(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)  Get an instance of `AbstractGoogleJsonClient.Builder` |
| abstract B | [getThis](../BaseApiService.AbstractBuilder.md#getThis()) ()  Get current builder instance. |
| B | [setBatchPolicy](../BaseApiService.AbstractBuilder.md#setBatchPolicy(com.google.enterprise.cloudsearch.sdk.BatchPolicy)) ([BatchPolicy](../BatchPolicy.md) batchPolicy)  Sets `BatchPolicy` to be used for request batching. |
| B | [setCredentialFactory](../BaseApiService.AbstractBuilder.md#setCredentialFactory(com.google.enterprise.cloudsearch.sdk.CredentialFactory)) ([CredentialFactory](../CredentialFactory.md) credentialFactory)  Sets `CredentialFactory` to be used to obtained credentials while making Google API requests. |
| B | [setJsonFactory](../BaseApiService.AbstractBuilder.md#setJsonFactory(com.google.api.client.json.JsonFactory)) (JsonFactory jsonFactory)  Sets `JsonFactory` instance to be used for constructing `AbstractGoogleJsonClient`. |
| B | [setProxy](../BaseApiService.AbstractBuilder.md#setProxy(com.google.enterprise.cloudsearch.sdk.GoogleProxy)) ([GoogleProxy](../GoogleProxy.md) proxy)  Sets instance of `GoogleProxy` to be used for creating an instance of `AbstractGoogleJsonClient`. |
| B | [setRequestInitializer](../BaseApiService.AbstractBuilder.md#setRequestInitializer(com.google.api.client.http.HttpRequestInitializer)) (HttpRequestInitializer requestInitializer)  Sets an instance of `HttpRequestInitializer` to be used to initialize each Google API request. |
| B | [setRequestTimeout](../BaseApiService.AbstractBuilder.md#setRequestTimeout(int,%20int)) (int connectTimeoutSeconds, int readTimeoutSeconds)  Sets request timeouts for making Google API requests. |
| B | [setRetryPolicy](../BaseApiService.AbstractBuilder.md#setRetryPolicy(com.google.enterprise.cloudsearch.sdk.RetryPolicy)) ([RetryPolicy](../RetryPolicy.md) retryPolicy)  Sets request `RetryPolicy` to be used for making Google API request. |
| B | [setRootUrl](../BaseApiService.AbstractBuilder.md#setRootUrl(java.lang.String)) (String rootUrl)  Sets root URL for Google API client as set on `setRootUrl(String)` |
| B | [setService](../BaseApiService.AbstractBuilder.md#setService(T)) (T service)  Sets pre-built instance of `AbstractGoogleJsonClient`. |
| B | [setTransport](../BaseApiService.AbstractBuilder.md#setTransport(com.google.api.client.http.HttpTransport)) (HttpTransport transport)  Sets instance of `HttpTransport` to be used for creating an instance of `AbstractGoogleJsonClient`. |

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

## Public Constructors

#### public ContentUploadServiceImpl.Builder ()

## Public Methods

#### build ()

Builder to create a content upload service.

The `IndexingServiceImpl` creates this content upload service by infusing the required objects obtained during connector initialization.

##### Returns

- a fully instantiated content upload service

##### Throws

| IOException | on errors creating the HTTP transport or credential |
| --- | --- |
| GeneralSecurityException | on security errors creating the HTTP transport or credential |

#### public Set<String> getApiScopes ()

Gets API scopes to be used for uploading content using Cloud Search API.

##### Returns

- set of scopes to be used.

#### public AbstractGoogleJsonClient.Builder getServiceBuilder (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)

Gets `CloudSearch.Builder` instance used for creating `CloudSearch` API client.

##### Parameters

| transport | HttpTranport to be used for creating AbstractGoogleJsonClient |
| --- | --- |
| jsonFactory | JsonFactory to be used for creating AbstractGoogleJsonClient |
| requestInitializer | HttpRequestInitializer to be used for creating AbstractGoogleJsonClient |

##### Returns

- an instance of `AbstractGoogleJsonClient.Builder`

#### public ContentUploadServiceImpl.Builder getThis ()

Gets this instance of `ContentUploadServiceImpl.Builder`

##### Returns

- current builder instance

#### public ContentUploadServiceImpl.Builder setExecutorService (ExecutorService executorService)

Sets `ExecutorService` used by for uploading content asynchronously.

##### Returns

- this instance of `ContentUploadServiceImpl.Builder`
