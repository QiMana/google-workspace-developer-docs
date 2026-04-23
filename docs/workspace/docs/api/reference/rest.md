---
source: https://developers.google.com/workspace/docs/api/reference/rest
root: workspace
fetched_at: 2026-04-23T15:27:13.481Z
---

# Google Docs API

Reads and writes Google Docs documents.

## Service: docs.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://docs.googleapis.com/$discovery/rest?version=v1](https://docs.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://docs.googleapis.com`

## REST Resource: v1.documents

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchUpdate</code></td><td><code>POST /v1/documents/{documentId}:batchUpdate</code><br>Applies one or more updates to the document.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/documents</code><br>Creates a blank document using the title given in the request.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/documents/{documentId}</code><br>Gets the latest version of the specified document.</td></tr></tbody></table>
