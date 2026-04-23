---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy
root: workspace
fetched_at: 2026-04-23T15:26:26.844Z
---

# GoogleProxy

Encapsulates an @{link Proxy} object and the token for proxy authentication. Following keys are used by the proxy

- transport.proxy.type: HTTP or SOCKS.
- transport.proxy.hostname: host name of the proxy.
- transport.proxy.port: port of the proxy.
- transport.proxy.username: optional, username used to authenticate the proxy.
- transport.proxy.password: optional, password used to authenticate the proxy.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy.Builder">GoogleProxy.Builder</a></td><td width="100%">Builder for <code>GoogleProxy</code>.</td></tr></tbody></table>

### Constant Summary

| String | [TRANSPORT\_PROXY\_HOSTNAME\_KEY](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#TRANSPORT_PROXY_HOSTNAME_KEY) | configuration key for proxy hostname |
| --- | --- | --- |
| String | [TRANSPORT\_PROXY\_PASSWORD\_KEY](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#TRANSPORT_PROXY_PASSWORD_KEY) | configuration key for proxy password |
| String | [TRANSPORT\_PROXY\_PORT\_KEY](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#TRANSPORT_PROXY_PORT_KEY) | configuration key for proxy port |
| String | [TRANSPORT\_PROXY\_TYPE\_KEY](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#TRANSPORT_PROXY_TYPE_KEY) | configuration key for proxy type |
| String | [TRANSPORT\_PROXY\_USERNAME\_KEY](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#TRANSPORT_PROXY_USERNAME_KEY) | configuration key for proxy username |

### Public Method Summary

| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#equals\(java.lang.Object\)) (Object other) |
| --- | --- |
| static [GoogleProxy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#fromConfiguration\(\)) ()  Creates an `GoogleProxy` instance based on proxy configuration. |
| HttpRequestInitializer |  |
| HttpTransport | [getHttpTransport](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#getHttpTransport\(\)) ()  Gets an `HttpTransport` that contains the proxy configuration. |
| Proxy | [getProxy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#getProxy\(\)) () |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy#hashCode\(\)) () |

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

#### public static final String TRANSPORT\_PROXY\_HOSTNAME\_KEY

configuration key for proxy hostname

Constant Value: "transport.proxy.hostname"

#### public static final String TRANSPORT\_PROXY\_PASSWORD\_KEY

configuration key for proxy password

Constant Value: "transport.proxy.password"

#### public static final String TRANSPORT\_PROXY\_PORT\_KEY

configuration key for proxy port

Constant Value: "transport.proxy.port"

#### public static final String TRANSPORT\_PROXY\_TYPE\_KEY

configuration key for proxy type

Constant Value: "transport.proxy.type"

#### public static final String TRANSPORT\_PROXY\_USERNAME\_KEY

configuration key for proxy username

Constant Value: "transport.proxy.username"

## Public Methods

#### public boolean equals (Object other)

##### Parameters

| other |  |
| --- | --- |

#### public static GoogleProxy fromConfiguration ()

Creates an `GoogleProxy` instance based on proxy configuration.

#### public HttpRequestInitializer getHttpRequestInitializer ()

Gets an `HttpRequestInitializer` that sets the http header for proxy authorization.

#### public HttpTransport getHttpTransport ()

Gets an `HttpTransport` that contains the proxy configuration.

##### Throws

| IOException |  |
| --- | --- |
| GeneralSecurityException |  |
