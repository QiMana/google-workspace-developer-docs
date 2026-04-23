---
source: https://developers.google.com/workspace/cse/reference/privileged-wrap
root: workspace
fetched_at: 2026-04-23T15:27:04.480Z
---

# Method: privilegedwrap

## Page Summary

- The `privilegedwrap` method encrypts a Data Encryption Key (DEK) for bulk data imports into Google Drive by domain administrators.
- It requires a request body containing the DEK, resource name, authentication token, and an optional reason and perimeter ID.
- A successful response returns a wrapped key, an opaque binary object containing the encrypted DEK, to be stored with the encrypted object.
- This wrapped key is essential for subsequent key unwrapping operations and should be the sole copy of the encrypted DEK.
- This method helps ensure data security and lifecycle management by avoiding dependencies on the Key Access Control List Service (KACLS) for DEK storage.

Returns a wrapped Data Encryption Key (DEK) and associated data. Use this method to encrypt data imported to Google Drive in bulk by a domain administrator.

For more details, see [Encrypt & decrypt data](https://developers.google.com/workspace/cse/guides/encrypt-and-decrypt-data).

### HTTP request

`POST https://KACLS_URL/privilegedwrap`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "authentication": string,
  "key": string,
  "perimeter_id": string,
  "reason": string,
  "resource_name": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by the identity provider (IdP) asserting who the user is. See <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens">authentication tokens</a>.</p></td></tr><tr><td><code>key</code></td><td><p><code>string</code></p><p>The base64-encoded DEK. Max size: 128 bytes.</p></td></tr><tr><td><code>perimeter_id</code></td><td><p><code>string (UTF-8)</code></p><p>An optional value tied to the document location that can be used to choose which perimeter is checked when unwrapping.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 KB.</p></td></tr><tr><td><code>resource_name</code></td><td><p><code>string (UTF-8)</code></p><p>An identifier for the object encrypted by the DEK.</p></td></tr></tbody></table>

### Response body

If successful, this method returns an opaque binary object that is stored by Google Workspace along the encrypted object and sent as-is in any subsequent key unwrapping operation.

If the operation fails, a [structured error reply](https://developers.google.com/workspace/cse/reference/structured-errors) is returned.

The binary object should contain the only copy of the encrypted DEK, implementation specific data can be stored in it.

Don't store the DEK in the Key Access Control List Service (KACLS) system, instead encrypt it and return it in the `wrapped_key` object. This prevents lifetime discrepancies between the document and its keys. For example, to ensure that the user's data is fully wiped out when they request it, or to make sure that previous versions restored from a backup are decryptable.

JSON representation

```
{
  "wrapped_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>wrapped_key</code></td><td><p><code>string</code></p><p>The base64-encoded binary object. Max size: 1 KB.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `privilegedwrap` method.

#### Request

```
POST https://mykacls.example.com/v1/privilegedwrap

{
   "key":"wHrlNOTI9mU6PBdqiq7EQA==",
   "resource_name": "wdwqd…",
   "authentication": "eyJhbGciOi…",
   "reason": "admin import"
}
```

#### Response

```
{
    "wrapped_key": "3qTh6Mp+svPwYPlnZMyuj8WHTrM59wl/UI50jo61Qt/QubZ9tfsUc1sD62xdg3zgxC9quV4r+y7AkbfIDhbmxGqP64pWbZgFzOkP0JcSn+1xm/CB2E5IknKsAbwbYREGpiHM3nzZu+eLnvlfbzvTnJuJwBpLoPYQcnPvcgm+5gU1j1BjUaNKS/uDn7VbVm7hjbKA3wkniORC2TU2MiHElutnfrEVZ8wQfrCEpuWkOXs98H8QxUK4pBM2ea1xxGj7vREAZZg1x/Ci/E77gHxymnZ/ekhUIih6Pwu75jf+dvKcMnpmdLpwAVlE1G4dNginhFVyV/199llf9jmHasQQuaMFzQ9UMWGjA1Hg2KsaD9e3EL74A5fLkKc2EEmBD5v/aP+1RRZ3ISbTOXvxqYIFCdSFSCfPbUhkc9I2nHS0obEH7Q7KiuagoDqV0cTNXWfCGJ1DtIlGQ9IA6mPDAjX8Lg=="
}
```
