---
source: https://developers.google.com/workspace/cse/reference/wrap-private-key
root: workspace
fetched_at: 2026-04-23T15:27:04.993Z
---

# Method: wrapprivatekey

## Page Summary

- Wraps a user's private key, a privileged operation only authorized Key Access Control List Service (KACLS) admins can perform.
- This API is optional and not used by Google or the Gmail client; the specification is a recommendation.
- The API request requires a JSON body containing user authentication, perimeter ID, and the base64-encoded private key.
- Upon successful execution, the API returns the base64-encoded wrapped private key.
- In case of failure, the API returns a structured error reply.

Wraps a user's private key. This is a privileged operation, and can only be performed by authorized Key Access Control List Service (KACLS) admins. This API is optional. Neither Google nor the Gmail client calls this API. The specification provided is a recommendation, not a requirement.

### HTTP request

`POST https://KACLS_URL/wrapprivatekey`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "authentication": string,
  "perimeter_id": string,
  "private_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by the identity provider (IdP) asserting who the user is. See <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens">authentication tokens</a>.</p></td></tr><tr><td><code>perimeter_id</code></td><td><p><code>string (UTF-8)</code></p><p>The perimeter ID to encrypt with the key.</p></td></tr><tr><td><code>private_key</code></td><td><p><code>string</code></p><p>The base64-encoded DEK. Max size: 128 bytes.</p></td></tr></tbody></table>

### Response body

If successful, this method returns the wrapped private key.

If the operation fails, a [structured error reply](https://developers.google.com/workspace/cse/reference/structured-errors) is returned.

JSON representation

```
{
  "wrapped_private_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>wrapped_private_key</code></td><td><p><code>string</code></p><p>The base64-encoded wrapped private key. Max size: 8 KB.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `wrapprivatekey` method.

#### Request

```
POST https://mykacls.example.org/v1/wrapprivatekey

{
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\\nMIIJ......\\n-----END RSA PRIVATE KEY-----",
  "perimeter_id": ""
}
```

#### Response

```
{
  "wrapped_private_key": "LpyCSy5ddy82PIp/87JKaMF4Jmt1KdrbfT1iqpB7uhVd3OwZiu+oq8kxIzB7Lr0iX4aOcxM6HiUyMrGP2PG8x0HkpykbUKQxBVcfm6SLdsqigT9ho5RYw20M6ZXNWVRetFSleKex4SRilTRny38e2ju/lUy0KDaCt1hDUT89nLZ1wsO3D1F3xk8J7clXv5fe7GPRd1ojo82Ny0iyVO7y7h1lh2PACHUFXOMzsdURYFCnxhKAsadccCxpCxKh5x8p78PdoenwY1tnT3/X4O/4LAGfT4fo98Frxy/xtI49WDRNZi6fsL6BQT4vS/WFkybBX9tXaenCqlRBDyZSFhatPQ=="
}
```
