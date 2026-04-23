---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v1/domains/get
root: workspace
fetched_at: 2026-04-23T15:30:01.798Z
---

# Method: domains.get

Gets a specific domain registered by the client. Returns NOT\_FOUND if the domain does not exist.

### HTTP request

`GET https://gmailpostmastertools.googleapis.com/v1/{name=domains/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource name of the domain. It should have the form <code>domains/{domain_name}</code>, where domain_name is the fully qualified domain name.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/postmaster.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
