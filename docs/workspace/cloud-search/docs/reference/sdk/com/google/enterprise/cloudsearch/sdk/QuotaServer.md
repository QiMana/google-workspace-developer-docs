---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer
root: workspace
fetched_at: 2026-04-23T15:26:28.492Z
---

# QuotaServer

Utility object to enforce quota requirements.

Create an instance to enforce individual quota maximums on a set of operations defined by an enumeration. Before executing a quota restricted operation, call the `acquire(T)` method to restrict the rate at which the operation is allowed to execute. Internally, quota is enforced using a `RateLimiter` object. The calling thread is blocked if the token cannot be granted immediately.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder">QuotaServer.Builder</a> <T extends Enum<T>, K extends <a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer">QuotaServer</a> <T>></td><td width="100%">Builder for <code>QuotaServer</code> instances.</td></tr></tbody></table>

### Constant Summary

| double | [DEFAULT\_QPS](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer#DEFAULT_QPS) |  |
| --- | --- | --- |

### Public Method Summary

| double | [acquire](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer#acquire\(T\)) (T operation)  Acquires a token before allowing an operation to execute. |
| --- | --- |
| static <T extends Enum<T>> [QuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer) <T> | [createFromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer#createFromConfiguration\(java.lang.String,%20java.lang.Class%3CT%3E\)) (String quotaPrefix, Class<T> enumClass)  Creates a `QuotaServer` instance using parameter values from the configuration file. |
| double | [getRate](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer#getRate\(T\)) (T operation)  Returns current QPS rate limit for the specified enumeration operation. |

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

## Constants

#### public static final double DEFAULT\_QPS

Constant Value: 10.0

## Public Methods

#### public double acquire (T operation)

Acquires a token before allowing an operation to execute.

Note: The calling thread is blocked if the token cannot be granted immediately.

##### Parameters

| operation | the enumeration operation to rate limit base on its quota |
| --- | --- |

##### Returns

- time spent sleeping to enforce quota in seconds (0.0 if not rate limited)

#### public static QuotaServer<T> createFromConfiguration (String quotaPrefix, Class<T> enumClass)

Creates a `QuotaServer` instance using parameter values from the configuration file.

The configuration file should have QPS value parameters in the format of:

- quotaServer.\[quotaPrefix\].defaultQps = 10
- quotaServer.\[quotaPrefix\].ENUM\_OPERATION1 = 2;
- quotaServer.\[quotaPrefix\].ENUM\_OPERATION2 = 5;
- quotaServer.\[quotaPrefix\].ENUM\_OPERATION3 = 20;

Where `quotaPrefix` is defined by the connector and the `ENUM_*` values are operation types defined in an enumeration. Any unspecified `ENUM_*` values take the QPS value from the `defaultQps` parameter.

##### Parameters

| quotaPrefix | prefix for configuration keys related to quota server parameters |
| --- | --- |
| enumClass | class for enumerations representing operations |

##### Returns

- a `QuotaServer` instance

#### public double getRate (T operation)

Returns current QPS rate limit for the specified enumeration operation.

##### Parameters

| operation | for rate limit lookup |
| --- | --- |

##### Returns

- current configured rate limit for the operation
