---
source: https://developers.google.com/workspace/cse/reference/private-key-sign
root: workspace
fetched_at: 2026-04-23T15:27:04.059Z
---

# Method: privatekeysign

## Page Summary

- Unwraps a wrapped private key and uses it to sign a provided digest.
- Requires authentication and authorization tokens for security.
- Accepts the signing algorithm, digest, salt length (for RSASSA-PSS), reason, and the wrapped private key in the request body.
- Returns a base64-encoded signature upon successful operation.
- Provides a structured error reply if the operation fails.

Unwraps a wrapped private key and then signs the digest provided by the client.

### HTTP request

`POST https://KACLS_URL/privatekeysign`

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
  "algorithm": string,
  "digest": string,
  "rsa_pss_salt_length": integer,
  "reason": string,
  "wrapped_private_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by the identity provider (IdP) asserting who the user is. See <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens">authentication tokens</a>.</p></td></tr><tr><td><code>authorization</code></td><td><p><code>string</code></p><p>A JWT asserting that the user is allowed to unwrap a key for <code>resource_name</code>. See <a href="https://developers.google.com/workspace/cse/reference/authorization-tokens">authorization tokens</a>.</p></td></tr><tr><td><code>algorithm</code></td><td><p><code>string</code></p><p>The algorithm that was used to encrypt the Data Encryption Key (DEK) in envelope encryption.</p></td></tr><tr><td><code>digest</code></td><td><p><code>string</code></p><p>Base64-encoded message digest. The digest of the DER encoded <code>SignedAttributes</code>. This value is unpadded. Max size: 128 bytes.</p></td></tr><tr><td><code>rsa_pss_salt_length</code></td><td><p><code>integer</code></p><p>(Optional) The salt length to use, if the signature algorithm is RSASSA-PSS. If the signature algorithm is not RSASSA-PSS, this field is ignored.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 kilobyte.</p></td></tr><tr><td><code>wrapped_private_key</code></td><td><p><code>string</code></p><p>The base64-encoded wrapped private key. Max size: 8 kilobyte.</p><p>The format of the private key or the wrapped private key is up to the Key Access Control List Service (KACLS) implementation. On the client and on the Gmail side, this is treated as an opaque blob.</p></td></tr></tbody></table>

### Response body

If successful, this method returns a base64-encoded signature.

If the operation fails, a [structured error reply](./structured-errors.md) is returned.

JSON representation

```
{
  "signature": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>signature</code></td><td><p><code>string</code></p><p>A base64-encoded signature.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `privatekeysign` method.

#### Request

```
{
  "wrapped_private_key": "wHrlNOTI9mU6PBdqiq7EQA...",
  "digest": "EOBc7nc+7JdIDeb0DVTHriBAbo/dfHFZJgeUhOyo67o=",
  "authorization": "eyJhbGciOi...",
  "authentication": "eyJhbGciOi...",
  "algorithm": "SHA256withRSA",
  "reason": "sign"
}
```

#### Response

```
{
  "signature": "LpyCSy5ddy82PIp/87JKaMF4Jmt1KdrbfT1iqpB7uhVd3OwZiu+oq8kxIzB7Lr0iX4aOcxM6HiUyMrGP2PG8x0HkpykbUKQxBVcfm6SLdsqigT9ho5RYw20M6ZXNWVRetFSleKex4SRilTRny38e2ju/lUy0KDaCt1hDUT89nLZ1wsO3D1F3xk8J7clXv5fe7GPRd1ojo82Ny0iyVO7y7h1lh2PACHUFXOMzsdURYFCnxhKAsadccCxpCxKh5x8p78PdoenwY1tnT3/X4O/4LAGfT4fo98Frxy/xtI49WDRNZi6fsL6BQT4vS/WFkybBX9tXaenCqlRBDyZSFhatPQ=="
}
```
