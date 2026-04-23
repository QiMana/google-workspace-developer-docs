---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:34.314Z
---

# GroupsServiceImpl.Builder

### Public Constructor Summary

[GroupsServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder#GroupsServiceImpl.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder#build\(\)) () |
| --- | --- |
| Set<String> | [getApiScopes](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder#getApiScopes\(\)) ()  Returns API scopes to be used for making Cloud Identity Groups API requests. |
| CloudIdentity.Builder | [getServiceBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder#getServiceBuilder\(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer\)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer) |
| [GroupsServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder) | [getThis](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder#getThis\(\)) ()  Returns this instance of `GroupsServiceImpl.Builder` |
| [GroupsServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder) | [setBatchRequestService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder#setBatchRequestService\(com.google.enterprise.cloudsearch.sdk.BatchRequestService\)) ([BatchRequestService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService) batchService)  Sets `BatchRequestService` to be used for request batching. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.BaseApiService.AbstractBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder)

| abstract [BaseApiService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService) <CloudIdentity> | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#build\(\)) ()  Get instance of `BaseApiService` implementation. |
| --- | --- |
| abstract Set<String> | [getApiScopes](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#getApiScopes\(\)) ()  Get scopes to be used while making Google API requests. |
| abstract AbstractGoogleJsonClient.Builder | [getServiceBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#getServiceBuilder\(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer\)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)  Get an instance of `AbstractGoogleJsonClient.Builder` |
| abstract B | [getThis](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#getThis\(\)) ()  Get current builder instance. |
| B | [setBatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setBatchPolicy\(com.google.enterprise.cloudsearch.sdk.BatchPolicy\)) ([BatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy) batchPolicy)  Sets `BatchPolicy` to be used for request batching. |
| B | [setCredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setCredentialFactory\(com.google.enterprise.cloudsearch.sdk.CredentialFactory\)) ([CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) credentialFactory)  Sets `CredentialFactory` to be used to obtained credentials while making Google API requests. |
| B | [setJsonFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setJsonFactory\(com.google.api.client.json.JsonFactory\)) (JsonFactory jsonFactory)  Sets `JsonFactory` instance to be used for constructing `AbstractGoogleJsonClient`. |
| B | [setProxy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setProxy\(com.google.enterprise.cloudsearch.sdk.GoogleProxy\)) ([GoogleProxy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy) proxy)  Sets instance of `GoogleProxy` to be used for creating an instance of `AbstractGoogleJsonClient`. |
| B | [setRequestInitializer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setRequestInitializer\(com.google.api.client.http.HttpRequestInitializer\)) (HttpRequestInitializer requestInitializer)  Sets an instance of `HttpRequestInitializer` to be used to initialize each Google API request. |
| B | [setRequestTimeout](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setRequestTimeout\(int,%20int\)) (int connectTimeoutSeconds, int readTimeoutSeconds)  Sets request timeouts for making Google API requests. |
| B | [setRetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setRetryPolicy\(com.google.enterprise.cloudsearch.sdk.RetryPolicy\)) ([RetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy) retryPolicy)  Sets request `RetryPolicy` to be used for making Google API request. |
| B | [setRootUrl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setRootUrl\(java.lang.String\)) (String rootUrl)  Sets root URL for Google API client as set on `setRootUrl(String)` |
| B | [setService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setService\(T\)) (CloudIdentity service)  Sets pre-built instance of `AbstractGoogleJsonClient`. |
| B | [setTransport](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setTransport\(com.google.api.client.http.HttpTransport\)) (HttpTransport transport)  Sets instance of `HttpTransport` to be used for creating an instance of `AbstractGoogleJsonClient`. |

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
