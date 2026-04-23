---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2beta/domains/get
root: workspace
fetched_at: 2026-04-23T15:30:04.639Z
---

# Method: domains.get

Retrieves detailed information about a domain registered by you. Returns NOT\_FOUND if the domain is not registered by you. Domain represents the metadata of a domain that has been registered within the system and linked to a user.

### HTTP request

`GET https://gmailpostmastertools.googleapis.com/v2beta/{name=domains/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the domain. Format: <code>domains/{domain_name}</code>, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/postmaster`
- `           https://www.googleapis.com/auth/postmaster.domain`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
