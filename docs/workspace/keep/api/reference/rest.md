---
source: https://developers.google.com/workspace/keep/api/reference/rest
root: workspace
fetched_at: 2026-04-23T15:30:08.159Z
---

# Google Keep API

The Google Keep API is used in an enterprise environment to manage Google Keep content and resolve issues identified by cloud security software.

## Service: keep.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://keep.googleapis.com/$discovery/rest?version=v1](https://keep.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://keep.googleapis.com`

## REST Resource: v1.media

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>download</code></td><td><code>GET /v1/{name=notes/*/attachments/*}</code><br>Gets an attachment.</td></tr></tbody></table>

## REST Resource: v1.notes

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/notes</code><br>Creates a new note.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=notes/*}</code><br>Deletes a note.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=notes/*}</code><br>Gets a note.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/notes</code><br>Lists notes.</td></tr></tbody></table>

## REST Resource: v1.notes.permissions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchCreate</code></td><td><code>POST /v1/{parent=notes/*}/permissions:batchCreate</code><br>Creates one or more permissions on the note.</td></tr><tr><td><code>batchDelete</code></td><td><code>POST /v1/{parent=notes/*}/permissions:batchDelete</code><br>Deletes one or more permissions on the note.</td></tr></tbody></table>
