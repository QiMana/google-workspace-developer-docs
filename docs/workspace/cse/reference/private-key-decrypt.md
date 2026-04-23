---
source: https://developers.google.com/workspace/cse/reference/private-key-decrypt
root: workspace
fetched_at: 2026-04-23T15:27:03.643Z
---

# Method: privatekeydecrypt

## Page Summary

- This endpoint (`privatekeydecrypt`) unwraps a wrapped private key and decrypts the data encryption key.
- The request body requires authentication, authorization, algorithm, encrypted data encryption key, wrapped private key, and optionally, RSA OAEP label and reason.
- Upon successful execution, the endpoint returns the base64-encoded data encryption key.
- If the operation fails, a structured error response will be returned.
- An example request and response are provided for illustration.

Unwraps a wrapped private key and then decrypts the content encryption key that is encrypted to the public key.

### HTTP request

`POST https://KACLS_URL/privatekeydecrypt`

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
  "encrypted_data_encryption_key": string,
  "rsa_oaep_label": string,
  "reason": string,
  "wrapped_private_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by the identity provider (IdP) asserting who the user is. See <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens">authentication tokens</a>.</p></td></tr><tr><td><code>authorization</code></td><td><p><code>string</code></p><p>A JWT asserting that the user is allowed to unwrap a key for <code>resource_name</code>. See <a href="https://developers.google.com/workspace/cse/reference/authorization-tokens">authorization tokens</a>.</p></td></tr><tr><td><code>algorithm</code></td><td><p><code>string</code></p><p>The algorithm that was used to encrypt the Data Encryption Key (DEK) in envelope encryption.</p></td></tr><tr><td><code>encrypted_data_encryption_key</code></td><td><p><code>string (UTF-8)</code></p><p>Base64-encoded encrypted content encryption key, which is encrypted with the public key associated with the private key. Max size: 1 KB.</p></td></tr><tr><td><code>rsa_oaep_label</code></td><td><p><code>string</code></p><p>Base64-encoded label L, if the algorithm is RSAES-OAEP. If the algorithm is not RSAES-OAEP, this field is ignored.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 KB.</p></td></tr><tr><td><code>wrapped_private_key</code></td><td><p><code>string</code></p><p>The base64-encoded wrapped private key. Max size: 8 KB.</p><p>The format of the private key or the wrapped private key is up to the Key Access Control List Service (KACLS) implementation. On the client and on the Gmail side, this is treated as an opaque blob.</p></td></tr></tbody></table>

### Response body

If successful, this method returns a base64 data encryption key.

If the operation fails, a [structured error reply](https://developers.google.com/workspace/cse/reference/structured-errors) is returned.

JSON representation

```
{
  "data_encryption_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data_encryption_key</code></td><td><p><code>string</code></p><p>A base64-encoded data encryption key.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `privatekeydecrypt` method.

#### Request

```
POST https://mykacls.example.org/v1/privatekeydecrypt

{
  "wrapped_private_key": "wHrlNOTI9mU6PBdqiq7EQA...",
  "encrypted_data_encryption_key": "dGVzdCB3cmFwcGVkIGRlaw...",
  "authorization": "eyJhbGciOi...",
  "authentication": "eyJhbGciOi...",
  "algorithm": "RSA/ECB/PKCS1Padding",
  "reason": "decrypt"
}
```

#### Response

```
{
  "data_encryption_key": "akRQtv3nr+jUhcFL6JmKzB+WzUxbkkMyW5kQsqGUAFc="
}
```
