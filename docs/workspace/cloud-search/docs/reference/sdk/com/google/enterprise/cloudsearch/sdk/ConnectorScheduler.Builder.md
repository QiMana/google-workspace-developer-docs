---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder
root: workspace
fetched_at: 2026-04-23T15:26:26.304Z
---

# ConnectorScheduler.Builder

### Field Summary

| public [Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector) <T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#connector) |  |
| --- | --- | --- |
| public T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) | [context](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#context) |  |
| public [ConnectorScheduler.ShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder) | [shutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#shutdownHolder) |  |

### Public Constructor Summary

[ConnectorScheduler.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#ConnectorScheduler.Builder\(\)) ()

### Public Method Summary

| [ConnectorScheduler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler) < [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#build\(\)) () |
| --- | --- |
| B extends AbstractBuilder<B, T> | [setConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#setConnector\(com.google.enterprise.cloudsearch.sdk.Connector%3CT%3E\)) ([Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector) <T> connector) |
| B extends AbstractBuilder<B, T> | [setContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#setContext\(T\)) (T context) |
| B extends AbstractBuilder<B, T> | [setShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder#setShutdownHolder\(com.google.enterprise.cloudsearch.sdk.ConnectorScheduler.ShutdownHolder\)) ([ConnectorScheduler.ShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder) shutdownHolder) |

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

#### public ConnectorScheduler.Builder ()

## Public Methods

#### build ()

#### public B extends AbstractBuilder<B, T> setConnector

##### Parameters

| connector |  |
| --- | --- |

#### public B extends AbstractBuilder<B, T> setContext (T context)

##### Parameters

| context |  |
| --- | --- |

#### public B extends AbstractBuilder<B, T> setShutdownHolder (ConnectorScheduler.ShutdownHolder shutdownHolder)

##### Parameters

| shutdownHolder |  |
| --- | --- |
