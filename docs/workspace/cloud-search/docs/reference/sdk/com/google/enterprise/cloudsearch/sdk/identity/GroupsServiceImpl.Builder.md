---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:34.314Z
---

# GroupsServiceImpl.Builder

### Public Constructor Summary

[GroupsServiceImpl.Builder](./GroupsServiceImpl.Builder.md#GroupsServiceImpl.Builder()) ()

### Public Method Summary

|  | [build](./GroupsServiceImpl.Builder.md#build()) () |
| --- | --- |
| Set<String> | [getApiScopes](./GroupsServiceImpl.Builder.md#getApiScopes()) ()  Returns API scopes to be used for making Cloud Identity Groups API requests. |
| CloudIdentity.Builder | [getServiceBuilder](./GroupsServiceImpl.Builder.md#getServiceBuilder(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer) |
| [GroupsServiceImpl.Builder](./GroupsServiceImpl.Builder.md) | [getThis](./GroupsServiceImpl.Builder.md#getThis()) ()  Returns this instance of `GroupsServiceImpl.Builder` |
| [GroupsServiceImpl.Builder](./GroupsServiceImpl.Builder.md) | [setBatchRequestService](./GroupsServiceImpl.Builder.md#setBatchRequestService(com.google.enterprise.cloudsearch.sdk.BatchRequestService)) ([BatchRequestService](../BatchRequestService.md) batchService)  Sets `BatchRequestService` to be used for request batching. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.BaseApiService.AbstractBuilder](../BaseApiService.AbstractBuilder.md)

| abstract [BaseApiService](../BaseApiService.md) <CloudIdentity> | [build](../BaseApiService.AbstractBuilder.md#build()) ()  Get instance of `BaseApiService` implementation. |
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
| B | [setService](../BaseApiService.AbstractBuilder.md#setService(T)) (CloudIdentity service)  Sets pre-built instance of `AbstractGoogleJsonClient`. |
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

#### public GroupsServiceImpl.Builder ()

## Public Methods

#### build ()

##### Returns

- Specific `BaseApiService` implementation

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |

#### public Set<String> getApiScopes ()

Returns API scopes to be used for making Cloud Identity Groups API requests.

##### Returns

- set of scopes to be used.

#### public CloudIdentity.Builder getServiceBuilder (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)

##### Parameters

| transport | HttpTranport to be used for creating AbstractGoogleJsonClient |
| --- | --- |
| jsonFactory | JsonFactory to be used for creating AbstractGoogleJsonClient |
| requestInitializer | HttpRequestInitializer to be used for creating AbstractGoogleJsonClient |

##### Returns

- an instance of `AbstractGoogleJsonClient.Builder`

#### public GroupsServiceImpl.Builder getThis ()

Returns this instance of `GroupsServiceImpl.Builder`

##### Returns

- current builder instance

#### public GroupsServiceImpl.Builder setBatchRequestService (BatchRequestService batchService)

Sets `BatchRequestService` to be used for request batching.

##### Parameters

| batchService | to be used for request batching. |
| --- | --- |

##### Returns

- this builder instance.
