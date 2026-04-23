---
source: https://developers.google.com/workspace/cse/reference/rewrap
root: workspace
fetched_at: 2026-04-23T15:27:05.169Z
---

# Method: rewrap

## Page Summary

- This method facilitates migrating from the older Key Access Control List Service (KACLS1) to the newer KACLS (KACLS2) by converting Data Encryption Keys (DEKs) wrapped with KACLS1 to be wrapped with KACLS2.
- The `rewrap` method requires an authorization token, the original KACLS URL, a reason for the operation, and the KACLS1-wrapped DEK in the request body.
- A successful response provides a KACLS2-wrapped DEK and a resource key hash, ensuring the encrypted data remains accessible and manageable within Google Workspace.
- KACLS providers should encrypt and return the DEK within the `wrapped_key` object to prevent lifetime discrepancies and ensure data integrity.
- Google Workspace doesn't send deletion requests to KACLS when objects are deleted, implying KACLS providers manage key lifecycles independently.

This method helps you migrate from the old Key Access Control List Service (KACLS1) to the newer KACLS (KACLS2). It takes a Data Encryption Key (DEK) wrapped with KACLS1's [`wrap`](./wrap.md) API, and returns a DEK wrapped with KACLS2's [`wrap`](./wrap.md) API.

### HTTP request

`POST https://KACLS_URL/rewrap`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "authorization": string,
  "original_kacls_url": string,
  "reason": string,
  "wrapped_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authorization</code></td><td><p><code>string</code></p><p>A JWT asserting that the user is allowed to unwrap a key for <code>resource_name</code>. See <a href="https://developers.google.com/workspace/cse/reference/authorization-tokens">authorization tokens</a>.</p></td></tr><tr><td><code>original_kacls_url</code></td><td><p><code>string</code></p><p>URL of current wrapped_key's KACLS.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 KB.</p></td></tr><tr><td><code>wrapped_key</code></td><td><p><code>string</code></p><p>The base64 binary object returned by <a href="https://developers.google.com/workspace/cse/reference/wrap"><code>wrap</code></a>.</p></td></tr></tbody></table>

### Response body

If successful, this method returns an opaque binary object that will be stored by Google Workspace along the encrypted object and sent as-is in any subsequent key unwrapping operation. It should also return the base64-encoded [resource\_key\_hash](./resource-key-hash.md).

If the operation fails, a [structured error reply](./structured-errors.md) should be returned.

The binary object should contain the only copy of the encrypted DEK, implementation specific data can be stored in it.

Don't store the DEK in your KACLS system, instead encrypt it and return it in the `wrapped_key` object. This prevents lifetime discrepancies between the document and its keys. For example, to ensure that the user's data is fully wiped out when they request it, or to make sure that previous versions restored from a backup will be decryptable.

Google won't send deletion requests to the KACLS when objects are deleted.

JSON representation

```
{
  "resource_key_hash": string,
  "wrapped_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resource_key_hash</code></td><td><p><code>string</code></p><p>base64 encoded binary object. See <a href="https://developers.google.com/workspace/cse/reference/resource-key-hash">resource key hash</a>.</p></td></tr><tr><td><code>wrapped_key</code></td><td><p><code>string</code></p><p>The base64-encoded binary object. Max size: 1 KB.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `rewrap` method.

#### Request

```
POST https://mykacls.example.com/v1/rewrap

{
   "wrapped_key": "7qTh6Mp+svVwYPlnZMyuj8WHTrM59wl/UI50jo61Qt/QubZ9tfsUc1sD62xdg3zgxC9quV4r+y7AkbfIDhbmxGqP64pWbZgFzOkP0JcSn+1xm/CB2E5IknKsAbwbYREGpiHM3nzZu+eLnvlfbzvTnJuJwBpLoPYQcnPvcgm+5gU1j1BjUaNKS/uDn7VbVm7hjbKA3wkniORC2TU2MiHElutnfrEVZ8wQfrCEpuWkOXs98H8QxUK4pBM2ea1xxGj7vREAZZg1x/Ci/E77gHxymnZ/ekhUIih6Pwu75jf+dvKcMnpmdLpwAVlE1G4dNginhFVyV/199llf9jmHasQQuaMFzQ9UMWGjA1Hg2KsaD9e3EL74A5fLkKc2EEmBD5v/aP+1RRZ3ISbTOXvxqYIFCdSFSCfPbUhkc9I2nHS0obEH7Q7KiuagoDqV0cTNXWfCGJ1DtIlGQ9IA6mPDAjX8Lg==",
   "authorization": "eyJhbGciOi...",
   "original_kacls_url": "https://original.example.com/kacls/v1",
   "reason": "{client:'drive' op:'read'}"
}
```

#### Response

```
{
    "wrapped_key": "3qTh6Mp+svPwYPlnZMyuj8WHTrM59wl/UI50jo61Qt/QubZ9tfsUc1sD62xdg3zgxC9quV4r+y7AkbfIDhbmxGqP64pWbZgFzOkP0JcSn+1xm/CB2E5IknKsAbwbYREGpiHM3nzZu+eLnvlfbzvTnJuJwBpLoPYQcnPvcgm+5gU1j1BjUaNKS/uDn7VbVm7hjbKA3wkniORC2TU2MiHElutnfrEVZ8wQfrCEpuWkOXs98H8QxUK4pBM2ea1xxGj7vREAZZg1x/Ci/E77gHxymnZ/ekhUIih6Pwu75jf+dvKcMnpmdLpwAVlE1G4dNginhFVyV/199llf9jmHasQQuaMFzQ9UMWGjA1Hg2KsaD9e3EL74A5fLkKc2EEmBD5v/aP+1RRZ3ISbTOXvxqYIFCdSFSCfPbUhkc9I2nHS0obEH7Q7KiuagoDqV0cTNXWfCGJ1DtIlGQ9IA6mPDAjX8Lg==",
    "resource_key_hash": "SXOyPekBAUI95zuZSuJzsBlK4nO5SuJK4nNCPem5SuI="
}
```
