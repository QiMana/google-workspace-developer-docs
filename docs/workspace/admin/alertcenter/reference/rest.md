---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest
root: workspace
fetched_at: 2026-04-23T15:23:21.347Z
---

# Google Workspace Alert Center API

Manages alerts on issues affecting your domain. Note: The current version of this API (v1beta1) is available to all Google Workspace customers.

## Service: alertcenter.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://alertcenter.googleapis.com/$discovery/rest?version=v1beta1](https://alertcenter.googleapis.com/$discovery/rest?version=v1beta1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://alertcenter.googleapis.com`

## REST Resource: v1beta1

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getSettings</code></td><td><code>GET /v1beta1/settings</code><br>Returns customer-level settings.</td></tr><tr><td><code>updateSettings</code></td><td><code>PATCH /v1beta1/settings</code><br>Updates the customer-level settings.</td></tr></tbody></table>

## REST Resource: v1beta1.alerts

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchDelete</code></td><td><code>POST /v1beta1/alerts:batchDelete</code><br>Performs batch delete operation on alerts.</td></tr><tr><td><code>batchUndelete</code></td><td><code>POST /v1beta1/alerts:batchUndelete</code><br>Performs batch undelete operation on alerts.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1beta1/alerts/{alertId}</code><br>Marks the specified alert for deletion.</td></tr><tr><td><code>get</code></td><td><code>GET /v1beta1/alerts/{alertId}</code><br>Gets the specified alert.</td></tr><tr><td><code>getMetadata</code></td><td><code>GET /v1beta1/alerts/{alertId}/metadata</code><br>Returns the metadata of an alert.</td></tr><tr><td><code>list</code></td><td><code>GET /v1beta1/alerts</code><br>Lists the alerts.</td></tr><tr><td><code>undelete</code></td><td><code>POST /v1beta1/alerts/{alertId}:undelete</code><br>Restores, or "undeletes", an alert that was marked for deletion within the past 30 days.</td></tr></tbody></table>
