---
source: https://developers.google.com/workspace/slides/api/reference/rest
root: workspace
fetched_at: 2026-04-23T15:31:50.712Z
---

# Google Slides API

Reads and writes Google Slides presentations.

## Service: slides.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://slides.googleapis.com/$discovery/rest?version=v1](https://slides.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://slides.googleapis.com`

## REST Resource: v1.presentations

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchUpdate</code></td><td><code>POST /v1/presentations/{presentationId}:batchUpdate</code><br>Applies one or more updates to the presentation.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/presentations</code><br>Creates a blank presentation using the title given in the request.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/presentations/{presentationId}</code><br>Gets the latest version of the specified presentation.</td></tr></tbody></table>

## REST Resource: v1.presentations.pages

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/presentations/{presentationId}/pages/{pageObjectId}</code><br>Gets the latest version of the specified page in the presentation.</td></tr><tr><td><code>getThumbnail</code></td><td><code>GET /v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail</code><br>Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image.</td></tr></tbody></table>
