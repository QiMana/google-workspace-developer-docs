---
source: https://developers.google.com/workspace/cse/reference/delegate
root: workspace
fetched_at: 2026-04-23T15:27:03.977Z
---

# Method: delegate

This call returns a new authentication JSON Web Token (JWT) that allows an entity to access a specified resource on behalf of the user authenticated in the original authentication JWT. It is used to delegate scoped access to [wrap](https://developers.google.com/workspace/cse/reference/wrap) or [unwrap](https://developers.google.com/workspace/cse/reference/unwrap) to another entity when that entity needs to act on behalf of the user.

### HTTP request

`POST https://<base_url>/delegate`

Replace `<base_url>` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

The request body contains a JSON representation of the request:

JSON representation

```
{
  "authentication": string,
  "authorization": string,
  "reason": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authentication</code></td><td><p><code>string</code></p><p>A JWT issued by a third-party asserting who the user is. See the authentication section for details.</p></td></tr><tr><td><code>authorization</code></td><td><p><code>string</code></p><p>A JWT with <code>delegated_to</code> and <code>resource_name</code> claims asserting that the entity identified by <code>delegated_to</code> claim is allowed to access <code>resource_name</code> on behalf of the user. For more information, see <a href="https://developers.google.com/workspace/cse/reference/authorization-tokens">Authorization Tokens</a>.</p></td></tr><tr><td><code>reason</code></td><td><p><code>string (UTF-8)</code></p><p>A passthrough JSON string providing additional context about the operation. The JSON provided should be sanitized before being displayed. Max size: 1 KB.</p></td></tr></tbody></table>

### Required processing steps

The KACLS must perform at least these steps:

- Validate both authorization and authentication tokens. For more information, see [Authorization Tokens](https://developers.google.com/workspace/cse/reference/authorization-tokens) and [Authentication Tokens](https://developers.google.com/workspace/cse/reference/authentication-tokens).
- Check that authorization and authentication tokens are for the same user. For more information, see [Encrypt and decrypt data](https://developers.google.com/workspace/cse/guides/encrypt-and-decrypt-data).
- Check that the `kacls_url` claim in the authorization token matches the current KACLS URL. This allows detection of potential man-in-the-middle servers configured by insiders or rogue domain administrators.
- If the `kacls_owner_domain` claim exists in the authorization token, check that the value matches the KACLS owner's Google Workspace domain. This helps prevent unauthorized users from registering your KACLS with Google.
- Log the operation, including the user originating it, the `delegated_to`, the `resource_name`, and the reason passed in the request.
- Generate, sign, and return a JWT token containing `delegated_to` and `resource_name` claims from the authorization token.

The KACLS is free to perform additional security checks, including JWT claim based ones.

### Response body

If successful, this method returns an authentication JWT containing `delegated_to` and `resource_name` claims. This token can later be used for authentication in calls to the Wrap and Unwrap methods. In case of an error, a [structured error reply](https://developers.google.com/workspace/cse/reference/structured-errors) should be returned.

JSON representation

```
{
  "delegated_authentication": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>delegated_authentication</code></td><td><p><code>string</code></p><p>A delegated authentication JWT valid for accessing <code>resource_name</code> by the user mentioned in the original authentication JWT. For more information, see <a href="https://developers.google.com/workspace/cse/reference/authentication-tokens#kacls_authentication_token_for_delegate">KACLS authentication token for <code>delegate</code></a>.</p></td></tr></tbody></table>

### Example

#### Request

```
POST https://mykacls.example.com/v1/delegate
{
  "authentication": "eyJhbGciOi...",
  "authorization": "eyJhbGciOi...delegated_to\":\"other_entity_id\",\"resource_name\":\"meeting_id\"...}",
  "reason": "{client:'meet' op:'delegate_access'}"
}
```

#### Response

```
{
  "delegated_authentication": "eyJhbGciOi...delegated_to_from_authz_token...resource_name_from_authz_token...}"
}
```
