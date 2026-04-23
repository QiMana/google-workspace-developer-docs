---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v1/domains
root: workspace
fetched_at: 2026-04-23T15:30:00.972Z
---

# REST Resource: domains

## Resource: Domain

A registered domain resource in the Postmaster API.

JSON representation

```
{
  "name": string,
  "createTime": string,
  "permission": enum (Permission)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource name of the Domain. Domain names have the form <code>domains/{domain_name}</code>, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Timestamp when the user registered this domain. Assigned by the server.</p></td></tr><tr><td><code>permission</code></td><td><p><code>enum (<code>Permission</code>)</code></p><p>User’s permission for this domain. Assigned by the server.</p></td></tr></tbody></table>

## Permission

The possible permissions a user can have for a domain.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PERMISSION_UNSPECIFIED</code></td><td>The default value and should never be used explicitly.</td></tr><tr><td><code>OWNER</code></td><td>User has read access to the domain and can share access with others.</td></tr><tr><td><code>READER</code></td><td>User has read access to the domain.</td></tr><tr><td><code>NONE</code></td><td>User doesn't have permission to access information about the domain. User did not verify ownership of domain nor was access granted by other domain owners.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a specific domain registered by the client.</td></tr><tr><td><h3>list</h3></td><td>Lists the domains that have been registered by the client.</td></tr></tbody></table>
