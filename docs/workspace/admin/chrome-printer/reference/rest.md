---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest
root: workspace
fetched_at: 2026-04-23T15:23:28.721Z
---

# Admin SDK: Chrome Printer Management API

The Chrome Printer Management API lets admins manage [CUPS](https://www.cups.org/) printers and print servers.

## Service: admin.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://admin.googleapis.com/$discovery/rest?version=directory\_v1](https://admin.googleapis.com/$discovery/rest?version=directory_v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://admin.googleapis.com`

## REST Resource: admin.directory.v1.customers.chrome.printServers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchCreatePrintServers</code></td><td><code>POST /admin/directory/v1/{parent=customers/*}/chrome/printServers:batchCreatePrintServers</code><br>Creates multiple print servers.</td></tr><tr><td><code>batchDeletePrintServers</code></td><td><code>POST /admin/directory/v1/{parent=customers/*}/chrome/printServers:batchDeletePrintServers</code><br>Deletes multiple print servers.</td></tr><tr><td><code>create</code></td><td><code>POST /admin/directory/v1/{parent=customers/*}/chrome/printServers</code><br>Creates a print server.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/{name=customers/*/chrome/printServers/*}</code><br>Deletes a print server.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/{name=customers/*/chrome/printServers/*}</code><br>Returns a print server's configuration.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/{parent=customers/*}/chrome/printServers</code><br>Lists print server configurations.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/{printServer.name=customers/*/chrome/printServers/*}</code><br>Updates a print server's configuration.</td></tr></tbody></table>

## REST Resource: admin.directory.v1.customers.chrome.printers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchCreatePrinters</code></td><td><code>POST /admin/directory/v1/{parent=customers/*}/chrome/printers:batchCreatePrinters</code><br>Creates printers under given Organization Unit.</td></tr><tr><td><code>batchDeletePrinters</code></td><td><code>POST /admin/directory/v1/{parent=customers/*}/chrome/printers:batchDeletePrinters</code><br>Deletes printers in batch.</td></tr><tr><td><code>create</code></td><td><code>POST /admin/directory/v1/{parent=customers/*}/chrome/printers</code><br>Creates a printer under given Organization Unit.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/{name=customers/*/chrome/printers/*}</code><br>Deletes a <code>Printer</code>.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/{name=customers/*/chrome/printers/*}</code><br>Returns a <code>Printer</code> resource (printer's config).</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/{parent=customers/*}/chrome/printers</code><br>List printers configs.</td></tr><tr><td><code>listPrinterModels</code></td><td><code>GET /admin/directory/v1/{parent=customers/*}/chrome/printers:listPrinterModels</code><br>Lists the supported printer models.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/{printer.name=customers/*/chrome/printers/*}</code><br>Updates a <code>Printer</code> resource.</td></tr></tbody></table>
