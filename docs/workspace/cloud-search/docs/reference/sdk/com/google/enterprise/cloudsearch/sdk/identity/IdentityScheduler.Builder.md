---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler.Builder
root: workspace
fetched_at: 2026-04-23T15:26:36.025Z
---

# IdentityScheduler.Builder

### Field Summary

| public [Connector](../Connector.md) <T extends [ConnectorContext](../ConnectorContext.md) > | [connector](./IdentityScheduler.Builder.md#connector) |  |
| --- | --- | --- |
| public T extends [ConnectorContext](../ConnectorContext.md) | [context](./IdentityScheduler.Builder.md#context) |  |
| public [ConnectorScheduler.ShutdownHolder](../ConnectorScheduler.ShutdownHolder.md) | [shutdownHolder](./IdentityScheduler.Builder.md#shutdownHolder) |  |

### Public Constructor Summary

[IdentityScheduler.Builder](./IdentityScheduler.Builder.md#IdentityScheduler.Builder()) ()

### Public Method Summary

|  | [build](./IdentityScheduler.Builder.md#build()) () |
| --- | --- |
| B extends AbstractBuilder<B, T extends [ConnectorContext](../ConnectorContext.md) > | [setConnector](./IdentityScheduler.Builder.md#setConnector(com.google.enterprise.cloudsearch.sdk.Connector%3CT%3E)) ([Connector](../Connector.md) <T extends [ConnectorContext](../ConnectorContext.md) > connector) |
| B extends AbstractBuilder<B, T extends [ConnectorContext](../ConnectorContext.md) > | [setContext](./IdentityScheduler.Builder.md#setContext(T)) (T extends [ConnectorContext](../ConnectorContext.md) context) |
| B extends AbstractBuilder<B, T extends [ConnectorContext](../ConnectorContext.md) > | [setShutdownHolder](./IdentityScheduler.Builder.md#setShutdownHolder(com.google.enterprise.cloudsearch.sdk.ConnectorScheduler.ShutdownHolder)) ([ConnectorScheduler.ShutdownHolder](../ConnectorScheduler.ShutdownHolder.md) shutdownHolder) |

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

#### public IdentityScheduler.Builder ()

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
