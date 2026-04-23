---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector
root: workspace
fetched_at: 2026-04-23T15:26:25.466Z
---

# Connector

Known Indirect Subclasses

Interface for user-specific implementation details of the connector.

Implementations must be thread-safe. Implementations are discouraged from keeping any state locally except perhaps soft-state such as a connection cache.

### Public Method Summary

| abstract void | [destroy](./Connector.md#destroy()) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](./Connector.md#getDefaultId()) ()  Gets the default connector ID. |
| abstract void | [init](./Connector.md#init(T)) (T context)  Initializes the connector with the current context. |
| abstract void | [saveCheckpoint](./Connector.md#saveCheckpoint(boolean)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| abstract void | [traverse](./Connector.md#traverse()) ()  Implements a connector-specific traversal strategy. |

## Public Methods

#### public abstract void destroy ()

Shuts down and releases connector resources.

#### public String getDefaultId ()

Gets the default connector ID.

#### public abstract void init (T context)

Initializes the connector with the current context.

Initialization is the ideal time to start any threads to do extra behind-the-scenes work. The `context` allows access to other useful objects that can be used at any time.

If an unrecoverable fatal error occurs during initialization, throw a `StartupException` to cancel the startup process. If a recoverable error occurs during initialization, most `Exception` instances other than `StartupException` cause a retry of initialization after a short delay.

##### Parameters

| context | `ConnectorContext` instance for accessing framework objects |
| --- | --- |

##### Throws

| Exception | if errors occur during connector initialization |
| --- | --- |

#### public abstract void saveCheckpoint (boolean isShutdown)

Saves checkpoint information such as current traversal position or incremental change tokens.

The checkpoint contents are implementation-specific as defined by the connector code. This method is called during shutdown to allow the connector to save the current traversal state.

##### Parameters

| isShutdown | flag indicating a connector shutdown |
| --- | --- |

##### Throws

| IOException | if saving checkpoint fails. |
| --- | --- |
| InterruptedException | if an IO operations throws it |

#### public abstract void traverse ()

Implements a connector-specific traversal strategy.

This method may take a while and implementations may want to call `sleep(long)` occasionally to reduce load.

If fatal errors occur, throw an `IOException` or `RuntimeException`. In the case of an error, the `ExceptionHandler` defined in `ConnectorContext` determines if and when to retry.

##### Throws

| IOException | if getting data access errors |
| --- | --- |
| InterruptedException | if an IO operations throws it |
