---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/ExternalIdentityResolutionStatus.Code
root: workspace
fetched_at: 2026-04-23T15:26:11.972Z
---

# ExternalIdentityResolutionStatus.Code

## ExternalIdentityResolutionStatus.Code

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CODE_UNSPECIFIED</code></td><td>Input-only value. Used to list all unmapped identities regardless of status.</td></tr><tr><td><code>NOT_FOUND</code></td><td>The unmapped identity was not found in IDaaS, and needs to be provided by the user.</td></tr><tr><td><code>IDENTITY_SOURCE_NOT_FOUND</code></td><td>The identity source associated with the identity was either not found or deleted.</td></tr><tr><td><code>IDENTITY_SOURCE_MISCONFIGURED</code></td><td>IDaaS does not understand the identity source, probably because the schema was modified in a non compatible way.</td></tr><tr><td><code>TOO_MANY_MAPPINGS_FOUND</code></td><td>The number of users associated with the external identity is too large.</td></tr><tr><td><code>INTERNAL_ERROR</code></td><td>Internal error.</td></tr></tbody></table>
