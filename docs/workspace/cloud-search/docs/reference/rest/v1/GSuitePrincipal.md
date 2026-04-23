---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/GSuitePrincipal
root: workspace
fetched_at: 2026-04-23T15:26:12.381Z
---

# GSuitePrincipal

JSON representation

```
{

  "gsuiteUserEmail": string,
  "gsuiteGroupEmail": string,
  "gsuiteDomain": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>gsuite_principal</code>.</p><p><code>gsuite_principal</code> can be only one of the following:</p></td></tr><tr><td><code>gsuiteUserEmail</code></td><td><p><code>string</code></p><p>This principal references a Google Workspace user account.</p></td></tr><tr><td><code>gsuiteGroupEmail</code></td><td><p><code>string</code></p><p>This principal references a Google Workspace group name.</p></td></tr><tr><td><code>gsuiteDomain</code></td><td><p><code>boolean</code></p><p>This principal represents all users of the Google Workspace domain of the customer.</p></td></tr></tbody></table>
