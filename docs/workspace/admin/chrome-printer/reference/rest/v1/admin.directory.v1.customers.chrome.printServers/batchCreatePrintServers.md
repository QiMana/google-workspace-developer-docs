---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/batchCreatePrintServers
root: workspace
fetched_at: 2026-04-23T15:23:29.359Z
---

# Method: admin.directory.v1.customers.chrome.printServers.batchCreatePrintServers

Creates multiple print servers.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printServers:batchCreatePrintServers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers">unique ID</a> of the customer's Google Workspace account.</p><p>Format: <code>customers/{id}</code></p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (CreatePrintServerRequest)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>CreatePrintServerRequest</code>)</code></p><p>Required. A list of <code>PrintServer</code> resources to be created (max <code>50</code> per batch).</p></td></tr></tbody></table>

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "printServers": [
    {
      
    }
  ],
  "failures": [
    {
      object (PrintServerFailureInfo)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printServers[]</code></td><td><p>A list of successfully created print servers with their IDs populated.</p></td></tr><tr><td><code>failures[]</code></td><td><p><code>object (<code>PrintServerFailureInfo</code>)</code></p><p>A list of create failures. <code>PrintServer</code> IDs are not populated, as print servers were not created.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.chrome.printers`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## CreatePrintServerRequest

Request for adding a new print server.

JSON representation

```
{
  "parent": string,
  "printServer": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers">unique ID</a> of the customer's Google Workspace account.</p><p>Format: <code>customers/{id}</code></p></td></tr><tr><td><code>printServer</code></td><td><p>Required. A print server to create. If you want to place the print server under a specific organizational unit (OU), then populate the <code>orgUnitId</code>. Otherwise the print server is created under the root OU.</p><p>The <code>orgUnitId</code> can be retrieved using the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-org-units">Directory API</a>.</p></td></tr></tbody></table>
