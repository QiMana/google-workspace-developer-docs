---
source: https://developers.google.com/workspace/cse/reference/authorization-tokens
root: workspace
fetched_at: 2026-04-23T15:27:04.173Z
---

# Authorization tokens

## Page Summary

- Google issues a bearer token (JWT) to authorize encryption and decryption of resources, verified by the Key Access Control List Service (KACLS).
- This token contains fields like audience, user email, expiration, issuance time, resource name, and role for access control.
- Different token structures and fields exist for Docs/Drive/Calendar/Meet, Gmail, and KACLS migration, each serving specific purposes and containing relevant information.
- The KACLS plays a role in preventing abuse by verifying authorization for encryption and decryption operations.
- Roles like reader, writer, decrypter, signer, migrator, and verifier define the allowed actions within each service.

Bearer token ([JWT: RFC 7519](https://tools.ietf.org/html/rfc7519)) issued by Google to verify that the caller is authorized to encrypt or decrypt a resource.

To prevent abuse, the Key Access Control List Service (KACLS) should verify that the caller is authorized to encrypt the object (file or document) before wrapping the key and to decrypt it before unwrapping the DEK.

## Authorization token for Google Docs & Google Drive, Google Calendar and Google Meet client-side encryption (CSE)

JSON representation

```
{
  "aud": string,
  "delegated_to": string,
  "email": string,
  "email_type": string,
  "exp": string,
  "iat": string,
  "iss": string,
  "kacls_url": string,
  "perimeter_id": string,
  "resource_name": string,
  "role": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>aud</code></td><td><p><code>string</code></p><p>The audience, as identified by Google. Should be checked against the local configuration.</p></td></tr><tr><td><code>delegated_to</code></td><td><p><code>string</code></p><p>(Optional) The email address of the user who is authorized to access the resource.</p></td></tr><tr><td><code>email</code></td><td><p><code>string (UTF-8)</code></p><p>The user's email address.</p></td></tr><tr><td><code>email_type</code></td><td><p><code>string</code></p><p>Contains one of the follow values:</p><ul><li><code>google</code>: This email belongs to a Google Account.</li><li><code>google-visitor</code>: This email doesn't belong to a Google Account, but was PIN-code verified by Google.</li><li><code>customer-idp</code>: This email doesn't belong to a Google Account, but the user's email was extracted using a customer-configured IdP.</li><li>The claim can be unset; in that case the default value is `google`.</li></ul></td></tr><tr><td><code>exp</code></td><td><p><code>string</code></p><p>Expiration time.</p></td></tr><tr><td><code>iat</code></td><td><p><code>string</code></p><p>Issuance time.</p></td></tr><tr><td><code>iss</code></td><td><p><code>string</code></p><p>The token issuer. Should be validated against the trusted set of authentication issuers.</p></td></tr><tr><td><code>kacls_url</code></td><td><p><code>string</code></p><p>The configured base KACLS URL, used to prevent person-in-the-middle (PITM) attacks.</p></td></tr><tr><td><code>perimeter_id</code></td><td><p><code>string (UTF-8)</code></p><p>(Optional) A value tied to the document location that can be used to choose which perimeter will be checked when unwrapping. Maximum size: 128 bytes.</p></td></tr><tr><td><code>resource_name</code></td><td><p><code>string (UTF-8)</code></p><p>An identifier for the object encrypted by the DEK. Maximum size: 128 bytes.</p></td></tr><tr><td><code>role</code></td><td><p><code>string</code></p><p>Contains one of the follow values:</p><ul><li><code>reader</code>: Allowed to call <a href="https://developers.google.com/workspace/cse/reference/unwrap"><code>unwrap</code></a> only.</li><li><code>writer</code>: Allowed to call both <a href="https://developers.google.com/workspace/cse/reference/wrap"><code>wrap</code></a> and <a href="https://developers.google.com/workspace/cse/reference/unwrap"><code>unwrap</code></a></li></ul></td></tr></tbody></table>

## Authorization token for Gmail CSE

JSON representation

```
{
  "aud": string,
  "email": string,
  "exp": string,
  "iat": string,
  "message_id": string,
  "iss": string,
  "kacls_url": string,
  "perimeter_id": string,
  "resource_name": string,
  "role": string,
  "spki_hash": string,
  "spki_hash_algorithm": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>aud</code></td><td><p><code>string</code></p><p>The audience, as identified by Google. Should be checked against the local configuration.</p></td></tr><tr><td><code>email</code></td><td><p><code>string (UTF-8)</code></p><p>The user's email address.</p></td></tr><tr><td><code>exp</code></td><td><p><code>string</code></p><p>Expiration time.</p></td></tr><tr><td><code>iat</code></td><td><p><code>string</code></p><p>Issuance time.</p></td></tr><tr><td><code>message_id</code></td><td><p><code>string</code></p><p>An identifier for the message on which the decryption or signing is performed. Used as client reason for auditing purposes.</p></td></tr><tr><td><code>iss</code></td><td><p><code>string</code></p><p>The token issuer. Should be validated against the trusted set of authentication issuers.</p></td></tr><tr><td><code>kacls_url</code></td><td><p><code>string</code></p><p>The configured base KACLS URL, used to prevent person-in-the-middle (PITM) attacks.</p></td></tr><tr><td><code>perimeter_id</code></td><td><p><code>string (UTF-8)</code></p><p>(Optional) A value tied to the document location that can be used to choose which perimeter is checked when unwrapping. Maximum size: 128 bytes.</p></td></tr><tr><td><code>resource_name</code></td><td><p><code>string (UTF-8)</code></p><p>An identifier for the object encrypted by the DEK. Maximum size: 512 bytes.</p></td></tr><tr><td><code>role</code></td><td><p><code>string</code></p><p>Contains one of the follow values:</p><ul><li><code>decrypter</code>: Can decrypt.</li><li><code>signer</code>: Can sign.</li></ul></td></tr><tr><td><code>spki_hash</code></td><td><p><code>string</code></p><p>Standard base64-encoded digest of the DER-encoded <code>SubjectPublicKeyInfo</code> of the private key being accessed.</p></td></tr><tr><td><code>spki_hash_algorithm</code></td><td><p><code>string</code></p><p>Algorithm used to produce <code>spki_hash</code>. Can be <code>SHA-256</code>.</p></td></tr></tbody></table>

## Authorization token for KACLS migration service

JSON representation

```
{
  "aud": string,
  "email": string,
  "exp": string,
  "iat": string,
  "iss": string,
  "kacls_url": string,
  "resource_name": string,
  "role": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>aud</code></td><td><p><code>string</code></p><p>The audience, as identified by Google. Should be checked against the local configuration.</p></td></tr><tr><td><code>email</code></td><td><p><code>string (UTF-8)</code></p><p>The user's email address.</p></td></tr><tr><td><code>exp</code></td><td><p><code>string</code></p><p>Expiration time.</p></td></tr><tr><td><code>iat</code></td><td><p><code>string</code></p><p>Issuance time.</p></td></tr><tr><td><code>iss</code></td><td><p><code>string</code></p><p>The token issuer. Should be validated against the trusted set of authentication issuers.</p></td></tr><tr><td><code>kacls_url</code></td><td><p><code>string</code></p><p>The configured base KACLS URL, used to prevent person-in-the-middle (PITM) attacks.</p></td></tr><tr><td><code>role</code></td><td><p><code>string</code></p><p>Contains one of the follow values:</p><ul><li><code>migrator</code>: Allowed to call <a href="https://developers.google.com/workspace/cse/reference/unwrap"><code>rewrap</code></a> only.</li><li><code>verifier</code>: Allowed to call <a href="https://developers.google.com/workspace/cse/reference/digest"><code>digest</code></a> only.</li></ul></td></tr></tbody></table>
