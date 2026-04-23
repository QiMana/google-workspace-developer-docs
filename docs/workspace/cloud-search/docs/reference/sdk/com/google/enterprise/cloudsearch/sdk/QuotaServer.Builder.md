---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder
root: workspace
fetched_at: 2026-04-23T15:26:28.847Z
---

# QuotaServer.Builder

### Public Constructor Summary

[QuotaServer.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder#QuotaServer.Builder\(java.lang.Class%3CT%3E\)) (Class<T> enumClass)

Sets the enum class of the supported operations.

### Public Method Summary

| [Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder) <T, K> | [addQuota](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder#addQuota\(T,%20double\)) (T operation, double qps)  Sets the `qps` quota for a given `operation`. |
| --- | --- |
| [QuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer) <T> | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder#build\(\)) () |
| [Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder) <T, K> | [setDefaultQps](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder#setDefaultQps\(double\)) (double defaultQps)  Sets the default qps `qps` if such setting is not provided for an operation. |

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

#### public QuotaServer.Builder (Class<T> enumClass)

Sets the enum class of the supported operations.

##### Parameters

| enumClass |  |
| --- | --- |

## Public Methods

#### public Builder<T, K> addQuota (T operation, double qps)

Sets the `qps` quota for a given `operation`.

##### Parameters

| operation |  |
| --- | --- |
| qps |  |

#### build ()

#### public Builder<T, K> setDefaultQps (double defaultQps)

Sets the default qps `qps` if such setting is not provided for an operation.

##### Parameters

| defaultQps |  |
| --- | --- |
