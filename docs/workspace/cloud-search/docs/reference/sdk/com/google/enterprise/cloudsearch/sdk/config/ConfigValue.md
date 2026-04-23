---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue
root: workspace
fetched_at: 2026-04-23T15:26:31.028Z
---

# ConfigValue

Placeholder object for `Configuration` values.

Obtain an instance of `ConfigValue` by using `Configuration` as a static factory. Before retrieving the configured value, execute `initConfig(String[])`. To retrieve a configuration value once it's initialized, use `get()`.

### Public Method Summary

| T | [get](./ConfigValue.md#get()) ()  Gets the configured value. |
| --- | --- |
| T | [getDefault](./ConfigValue.md#getDefault()) ()  Get default value for configuration. |
| boolean | [isInitialized](./ConfigValue.md#isInitialized()) ()  Checks whether the value has been initialized. |

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

## Public Methods

#### public T get ()

Gets the configured value.

This can only be called after `initConfig(Properties)` initialization has occurred.

##### Returns

- configured value

##### Throws

| IllegalStateException | if not initialized. |
| --- | --- |

#### public T getDefault ()

Get default value for configuration.

##### Returns

- default value for configuration.

#### public boolean isInitialized ()

Checks whether the value has been initialized.

##### Returns

- `true` if value is initialized
