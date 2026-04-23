---
source: https://developers.google.com/workspace/cse/reference/privileged-private-key-decrypt
root: workspace
fetched_at: 2026-04-23T15:27:05.066Z
---

# Method: privilegedprivatekeydecrypt

## Page Summary

- Decrypts data exported from Google, like takeout, without checking private key ACLs.
- Uses a `POST` request to the `/privilegedprivatekeydecrypt` endpoint, providing authentication and encryption details in the request body.
- Returns the base64-encoded data encryption key upon successful decryption, which is used for client-side decryption of the message body.
- In case of failure, the API returns a structured error reply.

Decrypts without checking the wrapped private key ACL. It's used to decrypt the data exported ([takeout](https://support.google.com/a/answer/100458)) from Google.

### HTTP request

`POST https://KACLS_URL/privilegedprivatekeydecrypt`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "authentication": string,
  "algorithm": string,
  "encrypted_data_encryption_key": string,
  "rsa_oaep_label": string,
  "reason": string,
  "spki_hash": string,
  "spki_hash_algorithm": string,
  "wrapped_private_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by the identity provider (IdP) asserting who the user is. See <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens">authentication tokens</a>.</p></td></tr><tr><td><code>algorithm</code></td><td><p><code>string</code></p><p>The algorithm that was used to encrypt the Data Encryption Key (DEK) in envelope encryption.</p></td></tr><tr><td><code>encrypted_data_encryption_key</code></td><td><p><code>string (UTF-8)</code></p><p>Base64-encoded encrypted content encryption key, which is encrypted with the public key associated with the private key. Max size: 1 KB.</p></td></tr><tr><td><code>rsa_oaep_label</code></td><td><p><code>string</code></p><p>Base64-encoded label L, if the algorithm is RSAES-OAEP. If the algorithm is not RSAES-OAEP, this field is ignored.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 KB.</p></td></tr><tr><td><code>spki_hash</code></td><td><p><code>string</code></p><p>Standard base64-encoded digest of the DER-encoded <code>SubjectPublicKeyInfo</code> of the private key being accessed.</p></td></tr><tr><td><code>spki_hash_algorithm</code></td><td><p><code>string</code></p><p>Algorithm used to produce <code>spki_hash</code>. Can be "SHA-256".</p></td></tr><tr><td><code>wrapped_private_key</code></td><td><p><code>string</code></p><p>The base64-encoded wrapped private key. Max size: 8 KB.</p></td></tr></tbody></table>

### Response body

If successful, this method returns the base64 data encryption key. This key is used client-side to decrypt the message body.

If the operation fails, a [structured error reply](./structured-errors.md) is returned.

JSON representation

```
{
  "data_encryption_key": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data_encryption_key</code></td><td><p><code>string</code></p><p>A base64-encoded data encryption key.</p></td></tr></tbody></table>

### Example

This example provides a sample request and response for the `privilegedprivatekeydecrypt` method.

#### Request

```
POST https://mykacls.example.org/v1/privilegedprivatekeydecrypt

{
  "wrapped_private_key": "wHrlNOTI9mU6PBdqiq7EQA...",
  "encrypted_data_encryption_key": "dGVzdCB3cmFwcGVkIGRlaw...",
  "authentication": "eyJhbGciOi...",
  "spki_hash": "LItGzrmjSFD57QdrY1dcLwYmSwBXzhQLAA6zVcen+r0=",
  "spki_hash_algorithm": "SHA-256",
  "algorithm": "RSA/ECB/PKCS1Padding",
  "reason": "admin decrypt"
}
```

#### Response

```
{
  "data_encryption_key": "akRQtv3nr+jUhcFL6JmKzB+WzUxbkkMyW5kQsqGUAFc"
}
```
