---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/domains
root: workspace
fetched_at: 2026-04-23T15:23:36.453Z
---

# REST Resource: domains

## Resource: Domain

JSON representation

```
{
  "kind": string,
  "domainAliases": [
    {
      object (DomainAlias)
    }
  ],
  "verified": boolean,
  "etag": string,
  "creationTime": string,
  "isPrimary": boolean,
  "domainName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>domainAliases[]</code></td><td><p><code>object (<code>DomainAlias</code>)</code></p><p>A list of domain alias objects. (Read-only)</p></td></tr><tr><td><code>verified</code></td><td><p><code>boolean</code></p><p>Indicates the verification state of a domain. (Read-only).</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (int64 format)</code></p><p>Creation time of the domain. Expressed in <a href="https://en.wikipedia.org/wiki/Epoch_time">Unix time</a> format. (Read-only).</p></td></tr><tr><td><code>isPrimary</code></td><td><p><code>boolean</code></p><p>Indicates if the domain is a primary domain (Read-only).</p></td></tr><tr><td><code>domainName</code></td><td><p><code>string</code></p><p>The domain name of the customer.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a domain of the customer.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a domain of the customer.</td></tr><tr><td><h3>insert</h3></td><td>Inserts a domain of the customer.</td></tr><tr><td><h3>list</h3></td><td>Lists the domains of the customer.</td></tr></tbody></table>
