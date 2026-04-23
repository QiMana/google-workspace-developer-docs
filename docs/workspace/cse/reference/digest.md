---
source: https://developers.google.com/workspace/cse/reference/digest
root: workspace
fetched_at: 2026-04-23T15:27:04.271Z
---

# Method: digest

## Page Summary

- This API call takes a wrapped Data Encryption Key (DEK) and returns a base64 encoded resource key hash.
- The request body requires an authorization token, a reason for the operation, and the wrapped key.
- A successful response provides the resource key hash, while failures return a structured error reply.
- The `digest` endpoint is used for this operation within the Key Access Control List Service (KACLS).
- See the provided links for more details on authorization tokens, resource key hash, wrap API, rewrap API and structured errors.

This call takes a Data Encryption Key (DEK) wrapped with the wrap API, and returns the base64 encoded [resource key hash](./resource-key-hash.md).

See also: [`rewrap`](./rewrap.md)

### HTTP request

`POST https://KACLS_URL/digest`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "authorization": string,
  "reason": string,
  "wrapped_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authorization</code></td><td><p><code>string</code></p><p>A JWT asserting that the user is allowed to unwrap a key for <code>resource_name</code>. See <a href="https://developers.google.com/workspace/cse/reference/authorization-tokens">authorization tokens</a>.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 KB.</p></td></tr><tr><td><code>wrapped_key</code></td><td><p><code>string</code></p><p>The base64 binary object returned by <a href="https://developers.google.com/workspace/cse/reference/wrap"><code>wrap</code></a>.</p></td></tr></tbody></table>

### Response body

If successful, this method returns a base64 encoded [resource key hash](./resource-key-hash.md).

If the operation fails, a [structured error reply](./structured-errors.md) should be returned.

JSON representation

```
{
  "resource_key_hash": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resource_key_hash</code></td><td><p><code>string</code></p><p>base64 encoded binary object. See <a href="https://developers.google.com/workspace/cse/reference/resource-key-hash">resource key hash</a>.</p></td></tr></tbody></table>

### Example

#### Request

```
POST https://mykacls.example.com/v1/digest

{
   "wrapped_key": "7qTh6Mp+svVwYPlnZMyuj8WHTrM59wl/UI50jo61Qt/QubZ9tfsUc1sD62xdg3zgxC9quV4r+y7AkbfIDhbmxGqP64pWbZgFzOkP0JcSn+1xm/CB2E5IknKsAbwbYREGpiHM3nzZu+eLnvlfbzvTnJuJwBpLoPYQcnPvcgm+5gU1j1BjUaNKS/uDn7VbVm7hjbKA3wkniORC2TU2MiHElutnfrEVZ8wQfrCEpuWkOXs98H8QxUK4pBM2ea1xxGj7vREAZZg1x/Ci/E77gHxymnZ/ekhUIih6Pwu75jf+dvKcMnpmdLpwAVlE1G4dNginhFVyV/199llf9jmHasQQuaMFzQ9UMWGjA1Hg2KsaD9e3EL74A5fLkKc2EEmBD5v/aP+1RRZ3ISbTOXvxqYIFCdSFSCfPbUhkc9I2nHS0obEH7Q7KiuagoDqV0cTNXWfCGJ1DtIlGQ9IA6mPDAjX8Lg==",
   "authorization": "eyJhbGciOi...",
   "reason": "{client:'drive' op:'read'}"
}
```

#### Response

```
{
   "resource_key_hash": "qClT153ghqBOLPpdMsc4S4n6okPrRaLPBYT0zRcn+go="
}
```
