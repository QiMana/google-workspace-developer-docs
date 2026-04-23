---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StartupException
root: workspace
fetched_at: 2026-04-23T15:26:29.426Z
---

# StartupException

Known Direct Subclasses

[InvalidConfigurationException](./InvalidConfigurationException.md)

Exception that is thrown for unrecoverable startup errors, such as fatal configuration errors or running on the wrong platform.

This exception type bypasses the retry with back-off recovery logic of `Application` and immediately terminates the connector execution.

### Public Constructor Summary

|  | [StartupException](./StartupException.md#StartupException()) ()  Constructs a startup exception with no message and no cause. |
| --- | --- |
|  | [StartupException](./StartupException.md#StartupException(java.lang.String)) (String message)  Constructs a startup exception with a supplied message but no cause. |
|  | [StartupException](./StartupException.md#StartupException(java.lang.String,%20java.lang.Throwable)) (String message, Throwable cause)  Constructs a startup exception with message and cause. |
|  | [StartupException](./StartupException.md#StartupException(java.lang.Throwable)) (Throwable cause)  Constructs a startup exception with specified cause, copying its message if cause is non- `null`. |

### Inherited Method Summary

From class java.lang.Throwable

| synchronized final void | addSuppressed(Throwable arg0) |
| --- | --- |
| synchronized Throwable | fillInStackTrace() |
| synchronized Throwable | getCause() |
| String | getLocalizedMessage() |
| String | getMessage() |
| StackTraceElement\[\] | getStackTrace() |
| synchronized final Throwable\[\] | getSuppressed() |
| synchronized Throwable | initCause(Throwable arg0) |
| void | printStackTrace() |
| void | printStackTrace(PrintWriter arg0) |
| void | printStackTrace(PrintStream arg0) |
| void | setStackTrace(StackTraceElement\[\] arg0) |
| String | toString() |

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

#### public StartupException ()

Constructs a startup exception with no message and no cause.

#### public StartupException (String message)

Constructs a startup exception with a supplied message but no cause.

##### Parameters

| message | the message, retrievable using the `getMessage()` method |
| --- | --- |

#### public StartupException (String message, Throwable cause)

Constructs a startup exception with message and cause.

##### Parameters

| message | the message, retrievable using the `getMessage()` method |
| --- | --- |
| cause | failure cause |

#### public StartupException (Throwable cause)

Constructs a startup exception with specified cause, copying its message if cause is non- `null`.

##### Parameters

| cause | failure cause |
| --- | --- |
