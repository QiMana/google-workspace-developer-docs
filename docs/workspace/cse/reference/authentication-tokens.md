---
source: https://developers.google.com/workspace/cse/reference/authentication-tokens
root: workspace
fetched_at: 2026-04-23T15:27:03.828Z
---

# Authentication tokens

## Page Summary

- KACLS uses bearer tokens (JWTs) issued by an identity provider (IdP) to verify user identity and authorize access.
- JWTs contain essential claims like audience, email, expiration, issuance, issuer, and potentially a Google Workspace email for specific scenarios.
- For `PrivilegedUnwrap` operations, a KACLS JWT is used, requiring the recipient KACLS to verify the token signature and claims after fetching the issuer's JWKS.
- KACLS JWTs include specific claims like `kacls_url` and `resource_name` relevant to the decryption process.
- KACLS offers flexibility by allowing the use of additional claims for perimeter evaluation and custom authorization logic.

Bearer token ([JWT: RFC 7519](https://tools.ietf.org/html/rfc7519)) issued by the identity provider (IdP) to attest a user's identity.

JSON representation

```
{
  "aud": string,
  "email": string,
  "exp": string,
  "iat": string,
  "iss": string,
  "google_email": string,
  ...
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>aud</code></td><td><p><code>string</code></p><p>The audience, as identified by the IdP. Should be checked against the local configuration.</p></td></tr><tr><td><code>email</code></td><td><p><code>string (UTF-8)</code></p><p>The user's email address.</p></td></tr><tr><td><code>exp</code></td><td><p><code>string</code></p><p>Expiration time.</p></td></tr><tr><td><code>iat</code></td><td><p><code>string</code></p><p>Issuance time.</p></td></tr><tr><td><code>iss</code></td><td><p><code>string</code></p><p>The token issuer. Should be validated against the trusted set of authentication issuers.</p></td></tr><tr><td><code>google_email</code></td><td><p><code>string</code></p><p>An optional claim, to be used when the email claim in this JWT is different from the user's Google Workspace email ID. This claim carries the user's Google Workspace email identity.</p></td></tr><tr><td><code>...</code></td><td><p>Your Key Access Control List Service (KACLS) is free to use any other claims (location, custom claim, etc) to evaluate the perimeter.</p></td></tr></tbody></table>

## KACLS authentication token for delegate

The authentication token contains a JSON Web Token (JWT) ([JWT: RFC 7519](https://tools.ietf.org/html/rfc7519)) that is a bearer authentication token.

Sometimes a user is not able to authenticate on a client directly. In these cases the user can delegate their access to a specific resource to that client. This is achieved through issuing a new delegated authentication token that limits the scope of the original authentication token.

The delegated authentication token is similar to the ordinary authentication token with one additional claim:

<table><thead><tr><th colspan="2">claim</th></tr></thead><tbody><tr><td><code>delegated_to</code></td><td><p><code>string</code></p><p>An identifier for the entity to delegate authentication to.</p></td></tr></tbody></table>

The `resource_name` claim in the authentication token is, in a delegation context, used for identifying the object encrypted by the Data Encryption Key (DEK) for which the delegation is valid.

The token is issued by the Key Access Control List Service (KACLS) using the `Delegate` call. It may be either self-signed JWTs that KACLS is able to validate, or KACLS may use any other IdP to do that, through a trusted call.

In order for the delegated authentication token to be considered valid, a delegated authorization token must be provided for the same operation. The delegated authorization token is similar to the ordinary authorization token, but contains the additional claim `delegated_to`. The values of the `delegated_to` and `resource_name` claims must match the values in the delegated authentication token.

We recommend that you set a lifetime value of 15 minutes for the delegated authentication tokens to avoid potential reuse in case of leakage.

JSON representation

```
{
  "email": string,
  "iss": string,
  "aud": string,
  "exp": string,
  "iat": string,
  "google_email": string,
  "delegated_to": string,
  "resource_name": string
  ...
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string (UTF-8)</code></p><p>The user’s UTF-8 formatted email address.</p></td></tr><tr><td><code>iss</code></td><td><p><code>string</code></p><p>The token issuer, should be validated against the trusted set of authentication issuers.</p></td></tr><tr><td><code>aud</code></td><td><p><code>string</code></p><p>The audience, as identified by the IdP. Should be checked against the local configuration.</p></td></tr><tr><td><code>exp</code></td><td><p><code>string</code></p><p>Expiration time, should be checked.</p></td></tr><tr><td><code>iat</code></td><td><p><code>string</code></p><p>Issuance time, should be checked.</p></td></tr><tr><td><code>delegated_to</code></td><td><p><code>string</code></p><p>An identifier for the entity to delegate authentication to.</p></td></tr><tr><td><code>resource_name</code></td><td><p><code>string</code></p><p>An identifier for the object encrypted by the DEK, for which the delegation is valid.</p></td></tr><tr><td><code>...</code></td><td><p>The KACLS is free to use any other claims (location, custom claim, etc…) to evaluate the perimeter.</p></td></tr></tbody></table>

## KACLS authentication token for PrivilegedUnwrap

Bearer token ([JWT: RFC 7519](https://tools.ietf.org/html/rfc7519)) issued by the identity provider (IdP) to attest a user's identity.

This is only used on `PrivilegedUnwrap`. During `PrivilegedUnwrap`, if a KACLS JWT is used in place of an IDP authentication token, the recipient KACLS must first fetch the JWKS of the issuer, then verify the token signature, before checking the claims.

JSON representation

```
{
  "aud": string,
  "exp": string,
  "iat": string,
  "iss": string,
  "kacls_url": string,
  "resource_name": string
  ...
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>aud</code></td><td><p><code>string</code></p><p>The audience, as identified by the IdP. For Google Drive client-side encryption (CSE) <code>PrivilegedUnwrap</code> operations, this should be <code>kacls-migration</code>.</p></td></tr><tr><td><code>exp</code></td><td><p><code>string</code></p><p>Expiration time.</p></td></tr><tr><td><code>iat</code></td><td><p><code>string</code></p><p>Issuance time.</p></td></tr><tr><td><code>iss</code></td><td><p><code>string</code></p><p>The token issuer. Should be validated against the trusted set of authentication issuers. Must match the <code>KACLS_URL</code> of the requesting KACLS. The public key set of the issuer can be found at <code><iss>/certs</code>.</p></td></tr><tr><td><code>kacls_url</code></td><td><p><code>string</code></p><p>URL of current KACLS, that the data is being decrypted on.</p></td></tr><tr><td><code>resource_name</code></td><td><p><code>string</code></p><p>An identifier for the object encrypted by the DEK. Maximum size: 128 bytes.</p></td></tr><tr><td><code>...</code></td><td><p>Your Key Access Control List Service (KACLS) is free to use any other claims (location, custom claim, etc) to evaluate the perimeter.</p></td></tr></tbody></table>
