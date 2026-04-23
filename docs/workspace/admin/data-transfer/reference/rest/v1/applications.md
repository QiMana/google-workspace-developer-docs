---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/applications
root: workspace
fetched_at: 2026-04-23T15:23:32.110Z
---

# REST Resource: applications

## Resource: Application

Application resources represent applications installed on the domain that support transferring ownership of user data.

JSON representation

```
{
  "id": string,
  "name": string,
  "transferParams": [
    {
      object (ApplicationTransferParam)
    }
  ],
  "kind": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string (int64 format)</code></p><p>The application's ID. Retrievable by using the <a href="https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/applications/list"><code>applications.list()</code></a> method.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The application's name.</p></td></tr><tr><td><code>transferParams[]</code></td><td><p><code>object (<code>ApplicationTransferParam</code>)</code></p><p>The list of all possible transfer parameters for this application. These parameters select which categories of the user's data to transfer.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a DataTransfer Application Resource.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Etag of the resource.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Retrieves information about an application for the given application ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the applications available for data transfer for a customer.</td></tr></tbody></table>
