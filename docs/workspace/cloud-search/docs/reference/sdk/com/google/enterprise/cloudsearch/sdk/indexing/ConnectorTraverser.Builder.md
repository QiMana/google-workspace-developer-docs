---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder
root: workspace
fetched_at: 2026-04-23T15:26:42.118Z
---

# ConnectorTraverser.Builder

### Field Summary

| public [Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector) <T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#connector) |  |
| --- | --- | --- |
| public T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) | [context](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#context) |  |
| public [ConnectorScheduler.ShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder) | [shutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#shutdownHolder) |  |

### Public Constructor Summary

[ConnectorTraverser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#ConnectorTraverser.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#build\(\)) () |
| --- | --- |
| B extends AbstractBuilder<B, T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [setConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#setConnector\(com.google.enterprise.cloudsearch.sdk.Connector%3CT%3E\)) ([Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector) <T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > connector) |
| B extends AbstractBuilder<B, T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [setContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#setContext\(T\)) (T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) context) |
| B extends AbstractBuilder<B, T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [setShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder#setShutdownHolder\(com.google.enterprise.cloudsearch.sdk.ConnectorScheduler.ShutdownHolder\)) ([ConnectorScheduler.ShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder) shutdownHolder) |

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

#### public ConnectorTraverser.Builder ()

## Public Methods

#### build ()

#### public B extends AbstractBuilder<B, T extends ConnectorContext> setConnector (Connector<T extends ConnectorContext> connector)

##### Parameters

| connector |  |
| --- | --- |

#### public B extends AbstractBuilder<B, T extends ConnectorContext> setContext (T extends ConnectorContext context)

##### Parameters

| context |  |
| --- | --- |

#### public B extends AbstractBuilder<B, T extends ConnectorContext> setShutdownHolder (ConnectorScheduler.ShutdownHolder shutdownHolder)

##### Parameters

| shutdownHolder |  |
| --- | --- |
