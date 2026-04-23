---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder
root: workspace
fetched_at: 2026-04-23T15:26:29.060Z
---

# RepositoryException.Builder

### Public Constructor Summary

[RepositoryException.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder#RepositoryException.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder#build\(\)) () |
| --- | --- |
| [RepositoryException.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder) | [setCause](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder#setCause\(java.lang.Throwable\)) (Throwable cause)  Sets `cause` for exception. |
| [RepositoryException.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder) | [setErrorCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder#setErrorCode\(int\)) (int errorCode)  Sets error code for exception. |
| [RepositoryException.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder) | [setErrorMessage](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder#setErrorMessage\(java.lang.String\)) (String errorMessage)  Sets error message for exception. |
| [RepositoryException.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder) | [setErrorType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder#setErrorType\(com.google.enterprise.cloudsearch.sdk.RepositoryException.ErrorType\)) ([RepositoryException.ErrorType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.ErrorType) errorType)  Sets error type for exception. |

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

#### public RepositoryException.Builder ()

## Public Methods

#### build ()

#### public RepositoryException.Builder setCause (Throwable cause)

Sets `cause` for exception.

##### Parameters

| cause |  |
| --- | --- |

#### public RepositoryException.Builder setErrorCode (int errorCode)

Sets error code for exception. Mapped to `getHttpStatusCode()`

##### Parameters

| errorCode |  |
| --- | --- |

#### public RepositoryException.Builder setErrorMessage (String errorMessage)

Sets error message for exception. Mapped to `getErrorMessage()`

##### Parameters

| errorMessage |  |
| --- | --- |

#### public RepositoryException.Builder setErrorType (RepositoryException.ErrorType errorType)

Sets error type for exception. Mapped to `getType()`

##### Parameters

| errorType |  |
| --- | --- |
