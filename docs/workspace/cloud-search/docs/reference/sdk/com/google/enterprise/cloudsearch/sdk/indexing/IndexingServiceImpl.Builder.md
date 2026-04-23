---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:46.429Z
---

# IndexingServiceImpl.Builder

### Public Constructor Summary

[IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md#IndexingServiceImpl.Builder()) ()

### Public Method Summary

|  | [build](./IndexingServiceImpl.Builder.md#build()) ()  Get instance of `BaseApiService` implementation. |
| --- | --- |
| static [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [fromConfiguration](./IndexingServiceImpl.Builder.md#fromConfiguration(java.util.Optional%3Ccom.google.enterprise.cloudsearch.sdk.CredentialFactory%3E,%20java.lang.String)) (Optional< [CredentialFactory](../CredentialFactory.md) > credentialFactory, String defaultConnectorName)  Generates a `IndexingServiceImpl.Builder` instance from configuration parameters. |
| Set<String> | [getApiScopes](./IndexingServiceImpl.Builder.md#getApiScopes()) ()  Get scopes to be used while making Google API requests. |
| AbstractGoogleJsonClient.Builder | [getServiceBuilder](./IndexingServiceImpl.Builder.md#getServiceBuilder(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)  Get an instance of `AbstractGoogleJsonClient.Builder` |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [getThis](./IndexingServiceImpl.Builder.md#getThis()) ()  Get current builder instance. |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setAllowUnknownGsuitePrincipals](./IndexingServiceImpl.Builder.md#setAllowUnknownGsuitePrincipals(boolean)) (boolean allowUnknownGsuitePrincipals) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setBatchingIndexingService](./IndexingServiceImpl.Builder.md#setBatchingIndexingService(com.google.enterprise.cloudsearch.sdk.indexing.BatchingIndexingService)) ([BatchingIndexingService](./BatchingIndexingService.md) batchingService) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setConnectorId](./IndexingServiceImpl.Builder.md#setConnectorId(java.lang.String)) (String connectorId) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setContentUploadRequestTimeout](./IndexingServiceImpl.Builder.md#setContentUploadRequestTimeout(int,%20int)) (int connectTimeoutSeconds, int readTimeoutSeconds) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setContentUploadService](./IndexingServiceImpl.Builder.md#setContentUploadService(com.google.enterprise.cloudsearch.sdk.indexing.ContentUploadService)) ([ContentUploadService](./ContentUploadService.md) contentUploadService) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setContentUploadThreshold](./IndexingServiceImpl.Builder.md#setContentUploadThreshold(int)) (int thresold) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setEnableDebugging](./IndexingServiceImpl.Builder.md#setEnableDebugging(boolean)) (boolean enableDebugging) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setIdentitySourceId](./IndexingServiceImpl.Builder.md#setIdentitySourceId(java.lang.String)) (String identitySourceId) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setQuotaServer](./IndexingServiceImpl.Builder.md#setQuotaServer(com.google.enterprise.cloudsearch.sdk.QuotaServer%3Ccom.google.enterprise.cloudsearch.sdk.indexing.IndexingServiceImpl.Operations%3E)) ([QuotaServer](../QuotaServer.md) < [IndexingServiceImpl.Operations](./IndexingServiceImpl.Operations.md) > quotaServer) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setRequestMode](./IndexingServiceImpl.Builder.md#setRequestMode(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) ([IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setServiceManagerHelper](./IndexingServiceImpl.Builder.md#setServiceManagerHelper(com.google.enterprise.cloudsearch.sdk.indexing.IndexingServiceImpl.ServiceManagerHelper)) ([IndexingServiceImpl.ServiceManagerHelper](./IndexingServiceImpl.ServiceManagerHelper.md) serviceManagerHelper) |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) | [setSourceId](./IndexingServiceImpl.Builder.md#setSourceId(java.lang.String)) (String sourceId) |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.BaseApiService.AbstractBuilder](../BaseApiService.AbstractBuilder.md)

| abstract [BaseApiService](../BaseApiService.md) <CloudSearch> | [build](../BaseApiService.AbstractBuilder.md#build()) ()  Get instance of `BaseApiService` implementation. |
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
| B | [setService](../BaseApiService.AbstractBuilder.md#setService(T)) (CloudSearch service)  Sets pre-built instance of `AbstractGoogleJsonClient`. |
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

#### public IndexingServiceImpl.Builder ()

## Public Methods

#### build ()

Get instance of `BaseApiService` implementation. Implementation should call as part of build implementation.

##### Returns

- Specific `BaseApiService` implementation

##### Throws

| IOException |  |
| --- | --- |
| GeneralSecurityException |  |

#### public static IndexingServiceImpl.Builder fromConfiguration (Optional<CredentialFactory> credentialFactory, String defaultConnectorName)

Generates a `IndexingServiceImpl.Builder` instance from configuration parameters.

This method returns a fully initialized builder object for an instance created from defaulted values and configuration parameters. The caller can optionally use setter methods to make changes on the builder before creating the final instance by calling `build()`.

##### Parameters

| credentialFactory |  |
| --- | --- |
| defaultConnectorName |  |

#### public Set<String> getApiScopes ()

Get scopes to be used while making Google API requests.

##### Returns

- set of scopes to be used.

#### public AbstractGoogleJsonClient.Builder getServiceBuilder (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)

Get an instance of `AbstractGoogleJsonClient.Builder`

##### Parameters

| transport | HttpTranport to be used for creating AbstractGoogleJsonClient |
| --- | --- |
| jsonFactory | JsonFactory to be used for creating AbstractGoogleJsonClient |
| requestInitializer | HttpRequestInitializer to be used for creating AbstractGoogleJsonClient |

##### Returns

- an instance of `AbstractGoogleJsonClient.Builder`

#### public IndexingServiceImpl.Builder getThis ()

Get current builder instance.

##### Returns

- current builder instance

#### public IndexingServiceImpl.Builder setAllowUnknownGsuitePrincipals (boolean allowUnknownGsuitePrincipals)

##### Parameters

| allowUnknownGsuitePrincipals |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setBatchingIndexingService (BatchingIndexingService batchingService)

##### Parameters

| batchingService |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setConnectorId (String connectorId)

##### Parameters

| connectorId |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setContentUploadRequestTimeout (int connectTimeoutSeconds, int readTimeoutSeconds)

##### Parameters

| connectTimeoutSeconds |  |
| --- | --- |
| readTimeoutSeconds |  |

#### public IndexingServiceImpl.Builder setContentUploadService (ContentUploadService contentUploadService)

##### Parameters

| contentUploadService |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setContentUploadThreshold (int thresold)

##### Parameters

| thresold |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setEnableDebugging (boolean enableDebugging)

##### Parameters

| enableDebugging |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setIdentitySourceId (String identitySourceId)

##### Parameters

| identitySourceId |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setQuotaServer (QuotaServer<IndexingServiceImpl.Operations> quotaServer)

##### Parameters

| quotaServer |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setRequestMode (IndexingService.RequestMode requestMode)

##### Parameters

| requestMode |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setServiceManagerHelper (IndexingServiceImpl.ServiceManagerHelper serviceManagerHelper)

##### Parameters

| serviceManagerHelper |  |
| --- | --- |

#### public IndexingServiceImpl.Builder setSourceId (String sourceId)

##### Parameters

| sourceId |  |
| --- | --- |
