---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder
root: workspace
fetched_at: 2026-04-23T15:26:26.304Z
---

# ConnectorScheduler.Builder

### Field Summary

| public [Connector](./Connector.md) <T extends [ConnectorContext](./ConnectorContext.md) > | [connector](./ConnectorScheduler.Builder.md#connector) |  |
| --- | --- | --- |
| public T extends [ConnectorContext](./ConnectorContext.md) | [context](./ConnectorScheduler.Builder.md#context) |  |
| public [ConnectorScheduler.ShutdownHolder](./ConnectorScheduler.ShutdownHolder.md) | [shutdownHolder](./ConnectorScheduler.Builder.md#shutdownHolder) |  |

### Public Constructor Summary

[ConnectorScheduler.Builder](./ConnectorScheduler.Builder.md#ConnectorScheduler.Builder()) ()

### Public Method Summary

| [ConnectorScheduler](./ConnectorScheduler.md) < [ConnectorContext](./ConnectorContext.md) > | [build](./ConnectorScheduler.Builder.md#build()) () |
| --- | --- |
| B extends AbstractBuilder<B, T> | [setConnector](./ConnectorScheduler.Builder.md#setConnector(com.google.enterprise.cloudsearch.sdk.Connector%3CT%3E)) ([Connector](./Connector.md) <T> connector) |
| B extends AbstractBuilder<B, T> | [setContext](./ConnectorScheduler.Builder.md#setContext(T)) (T context) |
| B extends AbstractBuilder<B, T> | [setShutdownHolder](./ConnectorScheduler.Builder.md#setShutdownHolder(com.google.enterprise.cloudsearch.sdk.ConnectorScheduler.ShutdownHolder)) ([ConnectorScheduler.ShutdownHolder](./ConnectorScheduler.ShutdownHolder.md) shutdownHolder) |

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
