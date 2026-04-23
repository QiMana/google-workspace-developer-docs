---
source: https://developers.google.com/workspace/cse/reference
root: workspace
fetched_at: 2026-04-23T15:27:03.706Z
---

# Google Workspace CSE API Reference

## Page Summary

- The Google Workspace Client-side Encryption (CSE) API empowers you to manage your own encryption keys for enhanced security of Google Workspace data.
- This API provides a comprehensive suite of methods for key management, including wrapping, unwrapping, encryption, decryption, and signing, offering granular control over your data protection.
- You can leverage methods such as `wrap` and `unwrap` to encrypt and decrypt data encryption keys (DEKs), while `privatekeydecrypt` allows for decryption using your private keys.
- Authentication and authorization are handled through JWTs, ensuring secure access control to your encrypted data.
- Explore detailed documentation on methods, tokens, and error handling to effectively integrate the CSE API into your workflows.

The Google Workspace Client-side Encryption (CSE) API lets you own the encryption keys used to further encrypt Google Workspace data.

## Methods

<table><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delegate</code></td><td><code>POST https://<var>KACLS_URL</var>/delegate</code><br>Allows a first user to delegate a request to a second user.</td></tr><tr><td><code>digest</code></td><td><code>POST https://<var>KACLS_URL</var>/digest</code><br>Returns the checksum of an unwrapped DEK.</td></tr><tr><td><code>privatekeydecrypt</code></td><td><code>POST
          https://<var>KACLS_URL</var>/privatekeydecrypt</code><br>Unwraps a wrapped private key and then decrypts the content encryption key that is encrypted to the public key.</td></tr><tr><td><code>privatekeysign</code></td><td><code>POST https://<var>KACLS_URL</var>/privatekeysign</code><br>Unwraps a wrapped private key and then signs the digest provided by the client.</td></tr><tr><td><code>privilegedprivatekeydecrypt</code></td><td><code>POST
          https://<var>KACLS_URL</var>/privilegedprivatekeydecrypt</code><br>Decrypts without checking the wrapped private key ACL.</td></tr><tr><td><code>privilegedunwrap</code></td><td><code>POST https://<var>KACLS_URL</var>/privilegedunwrap</code><br>Decrypts data exported from Google in a privileged context.</td></tr><tr><td><code>privilegedwrap</code></td><td><code>POST https://<var>KACLS_URL</var>/privilegedwrap</code><br>Returns a wrapped Data Encryption Key (DEK) and associated data.</td></tr><tr><td><code>rewrap</code></td><td><code>POST https://<var>KACLS_URL</var>/rewrap</code><br>Re-encrypts an encrypted DEK.</td></tr><tr><td><code>status</code></td><td><code>GET https://<var>KACLS_URL</var>/status</code><br>Checks the status of a Key Access Control List Service (KACLS).</td></tr><tr><td><code>unwrap</code></td><td><code>POST https://<var>KACLS_URL</var>/unwrap</code><br>Returns decrypted DEK.</td></tr><tr><td><code>wrap</code></td><td><code>POST https://<var>KACLS_URL</var>/wrap</code><br>Returns encrypted DEK and associated data.</td></tr><tr><td><code>wrapprivatekey</code></td><td><code>POST https://<var>KACLS_URL</var>/wrapprivatekey</code><br>Wraps a user's private key.</td></tr></tbody></table>

## Tokens

<table><thead><tr><th colspan="2">Tokens</th></tr></thead><tbody><tr><td><code>Authorization</code></td><td>JWT issued by Google to verify that the caller is authorized to encrypt or decrypt a resource.</td></tr><tr><td><code>Authentication</code></td><td>JWT issued by the identity provider that attests user identity.</td></tr></tbody></table>

## Other

- [Resource key hash](https://developers.google.com/workspace/cse/reference/resource-key-hash)
- [Structured error replies](https://developers.google.com/workspace/cse/reference/structured-errors)
