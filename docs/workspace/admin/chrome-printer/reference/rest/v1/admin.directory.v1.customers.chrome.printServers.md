---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers
root: workspace
fetched_at: 2026-04-23T15:23:29.426Z
---

# REST Resource: admin.directory.v1.customers.chrome.printServers

## Resource: PrintServer

Configuration for a print server.

JSON representation

```
{
  "name": string,
  "id": string,
  "displayName": string,
  "description": string,
  "uri": string,
  "createTime": string,
  "orgUnitId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the print server. Leave empty when creating.</p><p>Format: <code>customers/{customer.id}/printServers/{printServer.id}</code></p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Immutable. ID of the print server. Leave empty when creating.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Editable. Display name of the print server (as shown in the Admin console).</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Editable. Description of the print server (as shown in the Admin console).</p></td></tr><tr><td><code>uri</code></td><td><p><code>string</code></p><p>Editable. Print server URI.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Time when the print server was created.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU.</p><p>The <code>orgUnitId</code> can be retrieved using the <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits">Directory API</a>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchCreatePrintServers</h3></td><td>Creates multiple print servers.</td></tr><tr><td><h3>batchDeletePrintServers</h3></td><td>Deletes multiple print servers.</td></tr><tr><td><h3>create</h3></td><td>Creates a print server.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a print server.</td></tr><tr><td><h3>get</h3></td><td>Returns a print server's configuration.</td></tr><tr><td><h3>list</h3></td><td>Lists print server configurations.</td></tr><tr><td><h3>patch</h3></td><td>Updates a print server's configuration.</td></tr></tbody></table>
