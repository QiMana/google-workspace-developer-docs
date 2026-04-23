---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper
root: workspace
fetched_at: 2026-04-23T15:26:21.510Z
---

# Application.AbstractApplicationHelper

Helper class to make our class more testable: factory and util methods

### Public Constructor Summary

[Application.AbstractApplicationHelper](./Application.AbstractApplicationHelper.md#Application.AbstractApplicationHelper()) ()

### Public Method Summary

| abstract C | [createContextBuilderInstance](./Application.AbstractApplicationHelper.md#createContextBuilderInstance()) () |
| --- | --- |
| [CredentialFactory](./CredentialFactory.md) | [createCredentialFactory](./Application.AbstractApplicationHelper.md#createCredentialFactory()) ()  Helper method to create an instance of `LocalFileCredentialFactory` |
| abstract S | [createSchedulerBuilderInstance](./Application.AbstractApplicationHelper.md#createSchedulerBuilderInstance()) ()  Helper method to create an instance of `ConnectorScheduler.Builder` |
| Thread |  |
| [ExceptionHandler](./ExceptionHandler.md) | [getDefaultExceptionHandler](./Application.AbstractApplicationHelper.md#getDefaultExceptionHandler()) ()  helper method to get default instance of `ExceptionHandler` |
| Runtime | [getRuntimeInstance](./Application.AbstractApplicationHelper.md#getRuntimeInstance()) ()  Helper method to get instance of current `Runtime` |

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

#### public Application.AbstractApplicationHelper ()

## Public Methods

#### public abstract C createContextBuilderInstance ()

#### public CredentialFactory createCredentialFactory ()

Helper method to create an instance of `LocalFileCredentialFactory`

##### Returns

- instance of `LocalFileCredentialFactory`

#### public abstract S createSchedulerBuilderInstance ()

Helper method to create an instance of `ConnectorScheduler.Builder`

#### public Thread createShutdownHookThread (Runnable task)

##### Parameters

| task | `Runnable` to be executed as part of ShutdownHook |
| --- | --- |

##### Returns

- thread containing runnable for ShutdownHook

#### public ExceptionHandler getDefaultExceptionHandler ()

helper method to get default instance of `ExceptionHandler`

##### Returns

- instance of `ExceptionHandler`

#### public Runtime getRuntimeInstance ()

Helper method to get instance of current `Runtime`

##### Returns

- instance of current `Runtime`
