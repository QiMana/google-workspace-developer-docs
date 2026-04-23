---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/IdentityProviderErrorInfo
root: workspace
fetched_at: 2026-04-23T15:23:25.540Z
---

# IdentityProviderErrorInfo

Info on the identity provider error.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>IDENTITY_PROVIDER_ERROR_INFO_UNSPECIFIED</code></td><td>Error info not specified.</td></tr><tr><td><code>EMAIL_MISMATCH</code></td><td>Email in the ID token is different from the user's email.</td></tr><tr><td><code>UNAVAILABLE_DISCOVERY_CONTENT</code></td><td>Discovery URL was unreachable.</td></tr><tr><td><code>INVALID_DISCOVERY_CONTENT</code></td><td>Discovery URL did not contain all the necessary information.</td></tr><tr><td><code>UNAVAILABLE_CSE_CONFIGURATION_CONTENT</code></td><td>URL for client-side encryption configuration content was unreachable.</td></tr><tr><td><code>INVALID_CSE_CONFIGURATION_CONTENT</code></td><td>Client-side encryption.well-known URL did not contain all the necessary information.</td></tr><tr><td><code>INVALID_ID_TOKEN</code></td><td>ID token returned by the identity provider is invalid.</td></tr><tr><td><code>INVALID_OIDC_SETUP</code></td><td>OIDC setup error.</td></tr><tr><td><code>UNAVAILABLE_IDP</code></td><td>Identity provider was unreachable.</td></tr><tr><td><code>AUTH_CODE_EXCHANGE_ERROR</code></td><td>Auth code exchange error.</td></tr><tr><td><code>AUTHENTICATION_TOKEN_MISSING_CLAIM_EMAIL</code></td><td>Authentication token has no "email" or "google_email" claim.</td></tr></tbody></table>
