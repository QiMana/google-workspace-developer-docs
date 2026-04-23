---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory
root: workspace
fetched_at: 2026-04-23T15:26:27.881Z
---

# LocalFileCredentialFactory

Factory to create a `GoogleCredential` object for accessing the Cloud Search API.

Required configuration parameters:

- `api.serviceAccountPrivateKeyFile` - Specifies the service account private key file path.

Optional configuration parameters:

- `api.serviceAccountId` - Specifies the service account ID. If `api.serviceAccountPrivateKeyFile` is not a json key, then `api.serviceAccountId` is required.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder">LocalFileCredentialFactory.Builder</a></td><td width="100%">Builder for creating instance of <code>LocalFileCredentialFactory</code>.</td></tr></tbody></table>

### Constant Summary

| String | [SERVICE\_ACCOUNT\_ID\_CONFIG](./LocalFileCredentialFactory.md#SERVICE_ACCOUNT_ID_CONFIG) | Configuration key for service account ID. |
| --- | --- | --- |
| String | [SERVICE\_ACCOUNT\_KEY\_FILE\_CONFIG](./LocalFileCredentialFactory.md#SERVICE_ACCOUNT_KEY_FILE_CONFIG) | Configuration key for service account key file path. |

### Public Method Summary

| static [LocalFileCredentialFactory](./LocalFileCredentialFactory.md) | [fromConfiguration](./LocalFileCredentialFactory.md#fromConfiguration()) ()  Method to build an instance of `LocalFileCredentialFactory` from configuration. |
| --- | --- |
| GoogleCredential | [getCredential](./LocalFileCredentialFactory.md#getCredential(java.util.Collection%3Cjava.lang.String%3E)) (Collection<String> scopes)  Gets `GoogleCredential` instance constructed for service account. |

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

From interface [com.google.enterprise.cloudsearch.sdk.CredentialFactory](./CredentialFactory.md)

| abstract GoogleCredential | [getCredential](./CredentialFactory.md#getCredential(java.util.Collection%3Cjava.lang.String%3E)) (Collection<String> scopes)  Creates a `GoogleCredential` object for accessing the Cloud Search API. |
| --- | --- |

## Constants

#### public static final String SERVICE\_ACCOUNT\_ID\_CONFIG

Configuration key for service account ID.

Constant Value: "api.serviceAccountId"

#### public static final String SERVICE\_ACCOUNT\_KEY\_FILE\_CONFIG

Configuration key for service account key file path.

Constant Value: "api.serviceAccountPrivateKeyFile"

## Public Methods

#### public static LocalFileCredentialFactory fromConfiguration ()

Method to build an instance of `LocalFileCredentialFactory` from configuration.

##### Returns

- an instance of `LocalFileCredentialFactory`

#### public GoogleCredential getCredential (Collection<String> scopes)

Gets `GoogleCredential` instance constructed for service account.

##### Parameters

| scopes | the OAuth 2.0 scope requirements to access the Cloud Search API |
| --- | --- |

##### Returns

- a fully built `GoogleCredential`

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |
