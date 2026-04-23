---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta
root: workspace
fetched_at: 2026-04-23T15:28:13.031Z
---

# Drive Labels API

An API for managing Drive Labels

## Service: drivelabels.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://drivelabels.googleapis.com/$discovery/rest?version=v2beta](https://drivelabels.googleapis.com/$discovery/rest?version=v2beta)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://drivelabels.googleapis.com`

## REST Resource: v2beta.labels

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v2beta/labels</code><br>Creates a new Label.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v2beta/{name=labels/*}</code><br>Permanently deletes a Label and related metadata on Drive Items.</td></tr><tr><td><code>delta</code></td><td><code>POST /v2beta/{name=labels/*}:delta</code><br>Updates a single Label by applying a set of update requests resulting in a new draft revision.</td></tr><tr><td><code>disable</code></td><td><code>POST /v2beta/{name=labels/*}:disable</code><br>Disable a published Label.</td></tr><tr><td><code>enable</code></td><td><code>POST /v2beta/{name=labels/*}:enable</code><br>Enable a disabled Label and restore it to its published state.</td></tr><tr><td><code>get</code></td><td><code>GET /v2beta/{name=labels/*}</code><br>Get a label by its resource name.</td></tr><tr><td><code>list</code></td><td><code>GET /v2beta/labels</code><br>List labels.</td></tr><tr><td><code>publish</code></td><td><code>POST /v2beta/{name=labels/*}:publish</code><br>Publish all draft changes to the Label.</td></tr><tr><td><code>updateLabelCopyMode</code></td><td><code>POST /v2beta/{name=labels/*}:updateLabelCopyMode</code><br>Updates a Label's <code>CopyMode</code>.</td></tr><tr><td><code>updateLabelEnabledAppSettings</code></td><td><code>POST /v2beta/{name=labels/*}:updateLabelEnabledAppSettings</code><br>Updates a Label's EabledAppSettings.</td></tr><tr><td><code>updatePermissions</code></td><td><code>PATCH /v2beta/{parent=labels/*}/permissions</code><br>Updates a Label's permissions.</td></tr></tbody></table>

## REST Resource: v2beta.labels.locks

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /v2beta/{parent=labels/*}/locks</code><br>Lists the LabelLocks on a Label.</td></tr></tbody></table>

## REST Resource: v2beta.labels.permissions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchDelete</code></td><td><code>POST /v2beta/{parent=labels/*}/permissions:batchDelete</code><br>Deletes Label permissions.</td></tr><tr><td><code>batchUpdate</code></td><td><code>POST /v2beta/{parent=labels/*}/permissions:batchUpdate</code><br>Updates Label permissions.</td></tr><tr><td><code>create</code></td><td><code>POST /v2beta/{parent=labels/*}/permissions</code><br>Updates a Label's permissions.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v2beta/{name=labels/*/permissions/*}</code><br>Deletes a Label's permission.</td></tr><tr><td><code>list</code></td><td><code>GET /v2beta/{parent=labels/*}/permissions</code><br>Lists a Label's permissions.</td></tr></tbody></table>

## REST Resource: v2beta.labels.revisions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>updatePermissions</code></td><td><code>PATCH /v2beta/{parent=labels/*/revisions/*}/permissions</code><br>Updates a Label's permissions.</td></tr></tbody></table>

## REST Resource: v2beta.labels.revisions.locks

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /v2beta/{parent=labels/*/revisions/*}/locks</code><br>Lists the LabelLocks on a Label.</td></tr></tbody></table>

## REST Resource: v2beta.labels.revisions.permissions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchDelete</code></td><td><code>POST /v2beta/{parent=labels/*/revisions/*}/permissions:batchDelete</code><br>Deletes Label permissions.</td></tr><tr><td><code>batchUpdate</code></td><td><code>POST /v2beta/{parent=labels/*/revisions/*}/permissions:batchUpdate</code><br>Updates Label permissions.</td></tr><tr><td><code>create</code></td><td><code>POST /v2beta/{parent=labels/*/revisions/*}/permissions</code><br>Updates a Label's permissions.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v2beta/{name=labels/*/revisions/*/permissions/*}</code><br>Deletes a Label's permission.</td></tr><tr><td><code>list</code></td><td><code>GET /v2beta/{parent=labels/*/revisions/*}/permissions</code><br>Lists a Label's permissions.</td></tr></tbody></table>

## REST Resource: v2beta.limits

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getLabel</code></td><td><code>GET /v2beta/limits/label</code><br>Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.</td></tr></tbody></table>

## REST Resource: v2beta.users

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getCapabilities</code></td><td><code>GET /v2beta/{name=users/*/capabilities}</code><br>Gets the user capabilities.</td></tr></tbody></table>
