---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder
root: workspace
fetched_at: 2026-04-23T15:26:23.070Z
---

# BaseApiService.AbstractBuilder

Known Direct Subclasses

### Public Constructor Summary

[BaseApiService.AbstractBuilder](./BaseApiService.AbstractBuilder.md#BaseApiService.AbstractBuilder()) ()

### Public Method Summary

| abstract [BaseApiService](./BaseApiService.md) <T> | [build](./BaseApiService.AbstractBuilder.md#build()) () |
| --- | --- |
| abstract Set<String> | [getApiScopes](./BaseApiService.AbstractBuilder.md#getApiScopes()) ()  Get scopes to be used while making Google API requests. |
| abstract AbstractGoogleJsonClient.Builder | [getServiceBuilder](./BaseApiService.AbstractBuilder.md#getServiceBuilder(com.google.api.client.http.HttpTransport,%20com.google.api.client.json.JsonFactory,%20com.google.api.client.http.HttpRequestInitializer)) (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)  Get an instance of `AbstractGoogleJsonClient.Builder` |
| abstract B | [getThis](./BaseApiService.AbstractBuilder.md#getThis()) ()  Get current builder instance. |
| B | [setBatchPolicy](./BaseApiService.AbstractBuilder.md#setBatchPolicy(com.google.enterprise.cloudsearch.sdk.BatchPolicy)) ([BatchPolicy](./BatchPolicy.md) batchPolicy)  Sets `BatchPolicy` to be used for request batching. |
| B | [setCredentialFactory](./BaseApiService.AbstractBuilder.md#setCredentialFactory(com.google.enterprise.cloudsearch.sdk.CredentialFactory)) ([CredentialFactory](./CredentialFactory.md) credentialFactory)  Sets `CredentialFactory` to be used to obtained credentials while making Google API requests. |
| B | [setJsonFactory](./BaseApiService.AbstractBuilder.md#setJsonFactory(com.google.api.client.json.JsonFactory)) (JsonFactory jsonFactory)  Sets `JsonFactory` instance to be used for constructing `AbstractGoogleJsonClient`. |
| B | [setProxy](./BaseApiService.AbstractBuilder.md#setProxy(com.google.enterprise.cloudsearch.sdk.GoogleProxy)) ([GoogleProxy](./GoogleProxy.md) proxy)  Sets instance of `GoogleProxy` to be used for creating an instance of `AbstractGoogleJsonClient`. |
| B | [setRequestInitializer](./BaseApiService.AbstractBuilder.md#setRequestInitializer(com.google.api.client.http.HttpRequestInitializer)) (HttpRequestInitializer requestInitializer)  Sets an instance of `HttpRequestInitializer` to be used to initialize each Google API request. |
| B | [setRequestTimeout](./BaseApiService.AbstractBuilder.md#setRequestTimeout(int,%20int)) (int connectTimeoutSeconds, int readTimeoutSeconds)  Sets request timeouts for making Google API requests. |
| B | [setRetryPolicy](./BaseApiService.AbstractBuilder.md#setRetryPolicy(com.google.enterprise.cloudsearch.sdk.RetryPolicy)) ([RetryPolicy](./RetryPolicy.md) retryPolicy)  Sets request `RetryPolicy` to be used for making Google API request. |
| B | [setRootUrl](./BaseApiService.AbstractBuilder.md#setRootUrl(java.lang.String)) (String rootUrl)  Sets root URL for Google API client as set on `setRootUrl(String)` |
| B | [setService](./BaseApiService.AbstractBuilder.md#setService(T)) (T service)  Sets pre-built instance of `AbstractGoogleJsonClient`. |
| B | [setTransport](./BaseApiService.AbstractBuilder.md#setTransport(com.google.api.client.http.HttpTransport)) (HttpTransport transport)  Sets instance of `HttpTransport` to be used for creating an instance of `AbstractGoogleJsonClient`. |

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

## Public Constructors

#### public BaseApiService.AbstractBuilder ()

## Public Methods

#### build ()

Get instance of implementation. Implementation should call as part of build implementation.

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |

#### public abstract Set<String> getApiScopes ()

Get scopes to be used while making Google API requests.

##### Returns

- set of scopes to be used.

#### public abstract AbstractGoogleJsonClient.Builder getServiceBuilder (HttpTransport transport, JsonFactory jsonFactory, HttpRequestInitializer requestInitializer)

Get an instance of `AbstractGoogleJsonClient.Builder`

##### Parameters

| transport | HttpTranport to be used for creating AbstractGoogleJsonClient |
| --- | --- |
| jsonFactory | JsonFactory to be used for creating AbstractGoogleJsonClient |
| requestInitializer | HttpRequestInitializer to be used for creating AbstractGoogleJsonClient |

##### Returns

- an instance of `AbstractGoogleJsonClient.Builder`

#### public abstract B getThis ()

Get current builder instance.

##### Returns

- current builder instance

#### public B setBatchPolicy (BatchPolicy batchPolicy)

Sets `BatchPolicy` to be used for request batching.

##### Parameters

| batchPolicy | `BatchPolicy` to be used for request batching. |
| --- | --- |

##### Returns

- this Builder instance

#### public B setCredentialFactory (CredentialFactory credentialFactory)

Sets `CredentialFactory` to be used to obtained credentials while making Google API requests.

##### Parameters

| credentialFactory | `CredentialFactory` to be used |
| --- | --- |

##### Returns

- this Builder instance

#### public B setJsonFactory (JsonFactory jsonFactory)

Sets `JsonFactory` instance to be used for constructing `AbstractGoogleJsonClient`.

##### Parameters

| jsonFactory | `JsonFactory` instance to be used |
| --- | --- |

##### Returns

- this Builder instance

#### public B setProxy (GoogleProxy proxy)

Sets instance of `GoogleProxy` to be used for creating an instance of `AbstractGoogleJsonClient`.

##### Parameters

| proxy | `GoogleProxy` to be used for creating an instance of `AbstractGoogleJsonClient` |
| --- | --- |

##### Returns

- this Builder instance

#### public B setRequestInitializer (HttpRequestInitializer requestInitializer)

Sets an instance of `HttpRequestInitializer` to be used to initialize each Google API request.

##### Parameters

| requestInitializer | instance of `HttpRequestInitializer` to be used |
| --- | --- |

##### Returns

- this Builder instance

#### public B setRequestTimeout (int connectTimeoutSeconds, int readTimeoutSeconds)

Sets request timeouts for making Google API requests.

##### Parameters

| connectTimeoutSeconds | socket timeouts in seconds as consumed by `setConnectTimeout(int)`. |
| --- | --- |
| readTimeoutSeconds | read timeout in seconds as consumed by `setReadTimeout(int)`. |

##### Returns

- this Builder instance

#### public B setRetryPolicy (RetryPolicy retryPolicy)

Sets request `RetryPolicy` to be used for making Google API request.

##### Parameters

| retryPolicy | `RetryPolicy` to be used for making Google API request. |
| --- | --- |

##### Returns

- this Builder instance

#### public B setRootUrl (String rootUrl)

Sets root URL for Google API client as set on `setRootUrl(String)`

##### Parameters

| rootUrl | root URL for Google API client |
| --- | --- |

##### Returns

- this Builder instance

#### public B setService (T service)

Sets pre-built instance of `AbstractGoogleJsonClient`.

##### Parameters

| service | pre-built instance of `AbstractGoogleJsonClient`. |
| --- | --- |

##### Returns

- this Builder instance

#### public B setTransport (HttpTransport transport)

Sets instance of `HttpTransport` to be used for creating an instance of `AbstractGoogleJsonClient`.

##### Parameters

| transport | `HttpTransport` to be used for creating an instance of `AbstractGoogleJsonClient` |
| --- | --- |

##### Returns

- this Builder instance
