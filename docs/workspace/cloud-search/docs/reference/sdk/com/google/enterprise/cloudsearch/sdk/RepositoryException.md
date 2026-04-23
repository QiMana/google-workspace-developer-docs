---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException
root: workspace
fetched_at: 2026-04-23T15:26:29.249Z
---

# RepositoryException

An exception that is thrown specifically for fatal repository access errors.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder">RepositoryException.Builder</a></td><td width="100%">Builder for creating <code>RepositoryException</code></td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.ErrorType">RepositoryException.ErrorType</a></td><td width="100%">Repository error types as defined by Cloud Search API.</td></tr></tbody></table>

### Public Method Summary

| RepositoryError | [getRepositoryError](./RepositoryException.md#getRepositoryError()) ()  Returns `RepositoryError` based on `RepositoryException` |
| --- | --- |

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

## Public Methods

#### public RepositoryError getRepositoryError ()

Returns `RepositoryError` based on `RepositoryException`
