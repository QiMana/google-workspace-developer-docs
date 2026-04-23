---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest
root: workspace
fetched_at: 2026-04-23T15:23:31.673Z
---

# Admin SDK: Data Transfer API

Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.

## Service: admin.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://admin.googleapis.com/$discovery/rest?version=datatransfer\_v1](https://admin.googleapis.com/$discovery/rest?version=datatransfer_v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://admin.googleapis.com`

## REST Resource: applications

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /admin/datatransfer/v1/applications/{applicationId}</code><br>Retrieves information about an application for the given application ID.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/datatransfer/v1/applications</code><br>Lists the applications available for data transfer for a customer.</td></tr></tbody></table>

## REST Resource: transfers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /admin/datatransfer/v1/transfers/{dataTransferId}</code><br>Retrieves a data transfer request by its resource ID.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/datatransfer/v1/transfers</code><br>Inserts a data transfer request.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/datatransfer/v1/transfers</code><br>Lists the transfers for a customer by source user, destination user, or status.</td></tr></tbody></table>
