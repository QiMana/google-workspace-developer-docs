---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/domains
root: workspace
fetched_at: 2026-04-23T15:30:02.829Z
---

# REST Resource: domains

## Resource: Domain

Information about a domain registered by the user.

JSON representation

```
{
  "name": string,
  "permission": enum (Permission),
  "verificationState": enum (VerificationState),
  "createTime": string,
  "lastVerifyTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the domain. Format: <code>domains/{domain_name}</code>, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).</p></td></tr><tr><td><code>permission</code></td><td><p><code>enum (<code>Permission</code>)</code></p><p>Output only. User's permission of this domain.</p></td></tr><tr><td><code>verificationState</code></td><td><p><code>enum (<code>VerificationState</code>)</code></p><p>Output only. Information about a user's verification history and properties for the domain.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Immutable. The timestamp at which the domain was added to the user's account.</p></td></tr><tr><td><code>lastVerifyTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The timestamp at which the domain was last verified by the user.</p></td></tr></tbody></table>

## Permission

The user's permission of a domain.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PERMISSION_UNSPECIFIED</code></td><td>Unspecified permission.</td></tr><tr><td><code>READER</code></td><td>User has read access to the domain.</td></tr><tr><td><code>OWNER</code></td><td>User has owner access to the domain.</td></tr><tr><td><code>NONE</code></td><td>User has no access to the domain.</td></tr></tbody></table>

## VerificationState

The user's verification status of a domain.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>VERIFICATION_STATE_UNSPECIFIED</code></td><td>Unspecified.</td></tr><tr><td><code>UNVERIFIED</code></td><td>The domain is unverified.</td></tr><tr><td><code>VERIFIED</code></td><td>The domain is verified.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Retrieves detailed information about a domain registered by you.</td></tr><tr><td><h3>getComplianceStatus</h3></td><td>Retrieves the compliance status for a given domain.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a list of all domains registered by you, along with their corresponding metadata.</td></tr></tbody></table>
