---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/domainAliases
root: workspace
fetched_at: 2026-04-23T15:23:37.465Z
---

# REST Resource: domainAliases

## Resource: DomainAlias

JSON representation

```
{
  "kind": string,
  "parentDomainName": string,
  "verified": boolean,
  "creationTime": string,
  "etag": string,
  "domainAliasName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>parentDomainName</code></td><td><p><code>string</code></p><p>The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.</p></td></tr><tr><td><code>verified</code></td><td><p><code>boolean</code></p><p>Indicates the verification state of a domain alias. (Read-only)</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (int64 format)</code></p><p>The creation time of the domain alias. (Read-only).</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>domainAliasName</code></td><td><p><code>string</code></p><p>The domain alias name.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a domain Alias of the customer.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a domain alias of the customer.</td></tr><tr><td><h3>insert</h3></td><td>Inserts a domain alias of the customer.</td></tr><tr><td><h3>list</h3></td><td>Lists the domain aliases of the customer.</td></tr></tbody></table>
