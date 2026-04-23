---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.cse.identities/list
root: workspace
fetched_at: 2026-04-23T15:29:01.614Z
---

# Method: users.settings.cse.identities.list

Lists the client-side encrypted identities for an authenticated user.

For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope.

For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/cse/identities`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The requester's primary email address. To indicate the authenticated user, you can use the special value <code>me</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The number of identities to return. If not provided, the page size will default to 20 entries.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "cseIdentities": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>cseIdentities[]</code></td><td><p>One page of the list of CSE identities configured for the user.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Pagination token to be passed to a subsequent identities.list call in order to retrieve the next page of identities. If this value is not returned or is the empty string, then no further pages remain.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
