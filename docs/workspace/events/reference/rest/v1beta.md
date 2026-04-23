---
source: https://developers.google.com/workspace/events/reference/rest/v1beta
root: workspace
fetched_at: 2026-04-23T15:28:37.718Z
---

# Google Workspace Events API

## Page Summary

- The Google Workspace Events API allows you to subscribe to events and manage change notifications for various Google Workspace applications.
- This API is currently in Developer Preview and offers functionalities like creating, deleting, getting, listing, updating, and reactivating subscriptions.
- You can interact with the API using Google-provided client libraries or by utilizing the provided service endpoint and discovery document for custom integrations.
- The API provides access to resources such as operations (for tracking long-running tasks) and subscriptions (for managing event notifications).
- All functionalities related to subscriptions within this API are part of the Google Workspace Developer Preview Program and subject to change.

The Google Workspace Events API lets you subscribe to events and manage change notifications across Google Workspace applications.

## Service: workspaceevents.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://workspaceevents.googleapis.com/$discovery/rest?version=v1beta](https://workspaceevents.googleapis.com/$discovery/rest?version=v1beta)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://workspaceevents.googleapis.com`

## REST Resource: v1beta.operations

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1beta/{name=operations/**}</code><br>Gets the latest state of a long-running operation.</td></tr></tbody></table>

## REST Resource: v1beta.subscriptions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1beta/subscriptions</code><br>Creates a Google Workspace subscription.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1beta/{name=subscriptions/*}</code><br>Deletes a Google Workspace subscription.</td></tr><tr><td><code>get</code></td><td><code>GET /v1beta/{name=subscriptions/*}</code><br>Gets details about a Google Workspace subscription.</td></tr><tr><td><code>list</code></td><td><code>GET /v1beta/subscriptions</code><br>Lists Google Workspace subscriptions.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1beta/{subscription.name=subscriptions/*}</code><br>Updates or renews a Google Workspace subscription.</td></tr><tr><td><code>reactivate</code></td><td><code>POST /v1beta/{name=subscriptions/*}:reactivate</code><br>Reactivates a suspended Google Workspace subscription.</td></tr></tbody></table>
