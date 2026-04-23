---
source: https://developers.google.com/workspace/admin/reports/reference/rest
root: workspace
fetched_at: 2026-04-23T15:23:59.857Z
---

# Admin SDK: Reports API

The **Admin SDK Reports API** lets administrators of enterprise domains to view the audit and usage reports of their domain.

## Service: admin.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://admin.googleapis.com/$discovery/rest?version=reports\_v1](https://admin.googleapis.com/$discovery/rest?version=reports_v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://admin.googleapis.com`

## REST Resource: activities

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /admin/reports/v1/activity/users/{userKey}/applications/{applicationName}</code><br>Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application.</td></tr><tr><td><code>watch</code></td><td><code>POST /admin/reports/v1/activity/users/{userKey}/applications/{applicationName}/watch</code><br>Start receiving notifications for account activities.</td></tr></tbody></table>

## REST Resource: customerUsageReports

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /admin/reports/v1/usage/dates/{date}</code><br>Retrieves a report which is a collection of properties and statistics for a specific customer's account.</td></tr></tbody></table>

## REST Resource: entityUsageReports

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /admin/reports/v1/usage/{entityType}/{entityKey}/dates/{date}</code><br>Retrieves a report which is a collection of properties and statistics for entities used by users within the account.</td></tr></tbody></table>

## REST Resource: userUsageReport

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /admin/reports/v1/usage/users/{userKey}/dates/{date}</code><br>Retrieves a report which is a collection of properties and statistics for a set of users with the account.</td></tr></tbody></table>
