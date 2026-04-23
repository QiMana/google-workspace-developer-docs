---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:46.429Z
---

# IndexingServiceImpl.Builder

### Public Constructor Summary

[IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#IndexingServiceImpl.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#build\(\)) ()  Get instance of `BaseApiService` implementation. |
| --- | --- |
| static [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#fromConfiguration\(java.util.Optional%3Ccom.google.enterprise.cloudsearch.sdk.CredentialFactory%3E,%20java.lang.String\)) (Optional< [CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) > credentialFactory, String defaultConnectorName)  Generates a `IndexingServiceImpl.Builder` instance from configuration parameters. |
| Set<String> | [getApiScopes](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#getApiScopes\(\)) ()  Get scopes to be used while making Google API requests. |
| AbstractGoogleJsonClient.Builder | [getServiceBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#getServiceBuilder\(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer\)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)  Get an instance of `AbstractGoogleJsonClient.Builder` |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [getThis](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#getThis\(\)) ()  Get current builder instance. |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setAllowUnknownGsuitePrincipals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setAllowUnknownGsuitePrincipals\(boolean\)) (boolean allowUnknownGsuitePrincipals) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setBatchingIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setBatchingIndexingService\(com.google.enterprise.cloudsearch.sdk.indexing.BatchingIndexingService\)) ([BatchingIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingService) batchingService) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setConnectorId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setConnectorId\(java.lang.String\)) (String connectorId) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setContentUploadRequestTimeout](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setContentUploadRequestTimeout\(int,%20int\)) (int connectTimeoutSeconds, int readTimeoutSeconds) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setContentUploadService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setContentUploadService\(com.google.enterprise.cloudsearch.sdk.indexing.ContentUploadService\)) ([ContentUploadService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadService) contentUploadService) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setContentUploadThreshold](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setContentUploadThreshold\(int\)) (int thresold) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setEnableDebugging](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setEnableDebugging\(boolean\)) (boolean enableDebugging) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setIdentitySourceId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setIdentitySourceId\(java.lang.String\)) (String identitySourceId) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setQuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setQuotaServer\(com.google.enterprise.cloudsearch.sdk.QuotaServer%3Ccom.google.enterprise.cloudsearch.sdk.indexing.IndexingServiceImpl.Operations%3E\)) ([QuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer) < [IndexingServiceImpl.Operations](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Operations) > quotaServer) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setRequestMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setRequestMode\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode\)) ([IndexingService.RequestMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.RequestMode) requestMode) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setServiceManagerHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setServiceManagerHelper\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingServiceImpl.ServiceManagerHelper\)) ([IndexingServiceImpl.ServiceManagerHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.ServiceManagerHelper) serviceManagerHelper) |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) | [setSourceId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder#setSourceId\(java.lang.String\)) (String sourceId) |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.BaseApiService.AbstractBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder)

| abstract [BaseApiService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService) <CloudSearch> | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#build\(\)) ()  Get instance of `BaseApiService` implementation. |
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
| B | [setService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder#setService\(T\)) (CloudSearch service)  Sets pre-built instance of `AbstractGoogleJsonClient`. |
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
