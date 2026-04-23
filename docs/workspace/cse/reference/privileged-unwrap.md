---
source: https://developers.google.com/workspace/cse/reference/privileged-unwrap
root: workspace
fetched_at: 2026-04-23T15:27:04.766Z
---

# Method: privilegedunwrap

## Page Summary

- Decrypts data exported from Google Takeout in a privileged context, bypassing standard access controls.
- Requires a JWT for authentication and identifies the encrypted object with a resource name.
- Returns the Data Encryption Key (DEK) used to encrypt the data, allowing privileged access to its content.
- Uses a specific request body structure containing authentication, reason, resource name, and the wrapped key.

Decrypts data exported from Google in a privileged context. Previously known as `TakeoutUnwrap`. Returns the Data Encryption Key (DEK) that was wrapped using [`wrap`](./wrap.md) without checking the original document or file access control list (ACL). For an example use case, see: [Google Takeout](https://support.google.com/a/answer/100458).

### HTTP request

`POST https://KACLS_URL/privilegedunwrap`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "authentication": string,
  "reason": string,
  "resource_name": string,
  "wrapped_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by the IdP asserting who the user is. See <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens">authentication tokens</a>.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Maximum size: 1 KB.</p></td></tr><tr><td><code>resource_name</code></td><td><p><code>string (UTF-8)</code></p><p>An identifier for the object encrypted by the DEK. This value must match the <code>resource_name</code> used to wrap the key. Maximum size: 128 bytes.</p></td></tr><tr><td><code>wrapped_key</code></td><td><p><code>string</code></p><p>The base64 binary object returned by <a href="https://developers.google.com/workspace/cse/reference/wrap"><code>wrap</code></a>.</p></td></tr></tbody></table>

### Response body

If successful, this method returns the document encryption key.

If the operation fails, a [structured error reply](./structured-errors.md) should be returned.

JSON representation

```
{
  "key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p><p>The base64-encoded DEK.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `privilegedunwrap` method.

#### Request

```
POST https://mykacls.example.com/v1/takeout_unwrap

{
   "wrapped_key": "7qTh6Mp+svVwYPlnZMyuj8WHTrM59wl/UI50jo61Qt/QubZ9tfsUc1sD62xdg3zgxC9quV4r+y7AkbfIDhbmxGqP64pWbZgFzOkP0JcSn+1xm/CB2E5IknKsAbwbYREGpiHM3nzZu+eLnvlfbzvTnJuJwBpLoPYQcnPvcgm+5gU1j1BjUaNKS/uDn7VbVm7hjbKA3wkniORC2TU2MiHElutnfrEVZ8wQfrCEpuWkOXs98H8QxUK4pBM2ea1xxGj7vREAZZg1x/Ci/E77gHxymnZ/ekhUIih6Pwu75jf+dvKcMnpmdLpwAVlE1G4dNginhFVyV/199llf9jmHasQQuaMFzQ9UMWGjA1Hg2KsaD9e3EL74A5fLkKc2EEmBD5v/aP+1RRZ3ISbTOXvxqYIFCdSFSCfPbUhkc9I2nHS0obEH7Q7KiuagoDqV0cTNXWfCGJ1DtIlGQ9IA6mPDAjX8Lg==",
   "authentication": "eyJhbGciOi…"
   "reason": "{client:'takeout' op:'read'}"
   "resource_name": "item123"
}
```

#### Response

```
{
    "key": "0saNxttLMQULfXuTbRFJzi/QJokN1jW16u0yaNvvLdQ="
}
```
