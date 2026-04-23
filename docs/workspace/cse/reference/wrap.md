---
source: https://developers.google.com/workspace/cse/reference/wrap
root: workspace
fetched_at: 2026-04-23T15:27:05.249Z
---

# Method: wrap

## Page Summary

- Returns an encrypted Data Encryption Key (DEK) along with associated data for secure storage and later retrieval.
- The request body requires authentication, authorization, the base64-encoded DEK, and an optional reason for the operation.
- The response provides a wrapped key containing the encrypted DEK, which should be stored securely by the application.
- The KACLS system itself does not store the DEK, ensuring data security and preventing lifetime discrepancies.
- Refer to the provided links for detailed information on encrypting and decrypting data, authentication tokens, and authorization tokens.

Returns encrypted Data Encryption Key (DEK) and associated data.

For more details, see [Encrypt & decrypt data](../guides/encrypt-and-decrypt-data.md).

### HTTP request

`POST https://KACLS_URL/wrap`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "authentication": string,
  "authorization": string,
  "key": string,
  "reason": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by the IdP asserting who the user is. See <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens">authentication tokens</a>.</p></td></tr><tr><td><code>authorization</code></td><td><p><code>string</code></p><p>A JWT asserting that the user is allowed to wrap a key for <code>resource_name</code>. See <a href="https://developers.google.com/workspace/cse/reference/authorization-tokens">authorization tokens</a>.</p></td></tr><tr><td><code>key</code></td><td><p><code>string</code></p><p>The base64-encoded DEK. Max size: 128 bytes.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 KB.</p></td></tr></tbody></table>

### Response body

If successful, this method returns an opaque binary object that will be stored by Google Workspace along the encrypted object and sent as-is in any subsequent key unwrapping operation.

If the operation fails, a [structured error reply](./structured-errors.md) should be returned.

The binary object should contain the only copy of the encrypted DEK, implementation specific data can be stored in it.

Don't store the DEK in the Key Access Control List Service (KACLS) system, instead encrypt it and return it in the wrapped\_key object. This prevents lifetime discrepancies between the document and its keys. For example, to ensure that the user's data is fully wiped out when they request it, or to make sure that previous versions restored from a backup are decryptable.

JSON representation

```
{
  "wrapped_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>wrapped_key</code></td><td><p><code>string</code></p><p>The base64-encoded binary object. Max size: 1 KB.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `wrap` method.

#### Request

```
POST https://mykacls.example.com/v1/wrap

{
   "key":"wHrlNOTI9mU6PBdqiq7EQA==",
   "authorization": "eyJhbGciOi…"
   "authentication": "eyJhbGciOi…"
   "reason": "{client:'drive' op:'update'}"
}
```

#### Response

```
{
    "wrapped_key": "3qTh6Mp+svPwYPlnZMyuj8WHTrM59wl/UI50jo61Qt/QubZ9tfsUc1sD62xdg3zgxC9quV4r+y7AkbfIDhbmxGqP64pWbZgFzOkP0JcSn+1xm/CB2E5IknKsAbwbYREGpiHM3nzZu+eLnvlfbzvTnJuJwBpLoPYQcnPvcgm+5gU1j1BjUaNKS/uDn7VbVm7hjbKA3wkniORC2TU2MiHElutnfrEVZ8wQfrCEpuWkOXs98H8QxUK4pBM2ea1xxGj7vREAZZg1x/Ci/E77gHxymnZ/ekhUIih6Pwu75jf+dvKcMnpmdLpwAVlE1G4dNginhFVyV/199llf9jmHasQQuaMFzQ9UMWGjA1Hg2KsaD9e3EL74A5fLkKc2EEmBD5v/aP+1RRZ3ISbTOXvxqYIFCdSFSCfPbUhkc9I2nHS0obEH7Q7KiuagoDqV0cTNXWfCGJ1DtIlGQ9IA6mPDAjX8Lg=="
}
```
