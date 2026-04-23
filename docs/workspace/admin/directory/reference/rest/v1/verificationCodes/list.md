---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/verificationCodes/list
root: workspace
fetched_at: 2026-04-23T15:23:47.104Z
---

# Method: verificationCodes.list

Returns the current set of valid backup verification codes for the specified user.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/users/{userKey}/verificationCodes`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

JSON response template for list verification codes operation in Directory API.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "items": [
    {
      object (VerificationCode)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the resource. This is always <code>admin#directory#verificationCodesList</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>VerificationCode</code>)</code></p><p>A list of verification code resources.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.user.security`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## VerificationCode

The Directory API allows you to view, generate, and invalidate backup verification codes for a user.

JSON representation

```
{
  "userId": string,
  "verificationCode": string,
  "kind": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The obfuscated unique ID of the user.</p></td></tr><tr><td><code>verificationCode</code></td><td><p><code>string</code></p><p>A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the resource. This is always <code>admin#directory#verificationCode</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr></tbody></table>
