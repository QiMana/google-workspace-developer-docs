---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2beta
root: workspace
fetched_at: 2026-04-23T15:30:03.356Z
---

# Gmail Postmaster Tools API

The Postmaster Tools API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.

## Service: gmailpostmastertools.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://gmailpostmastertools.googleapis.com/$discovery/rest?version=v2beta](https://gmailpostmastertools.googleapis.com/$discovery/rest?version=v2beta)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://gmailpostmastertools.googleapis.com`

## REST Resource: v2beta.domainStats

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchQuery</code></td><td><code>POST /v2beta/domainStats:batchQuery</code><br>Executes a batch of QueryDomainStats requests for multiple domains.</td></tr></tbody></table>

## REST Resource: v2beta.domains

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v2beta/{name=domains/*}</code><br>Retrieves detailed information about a domain registered by you.</td></tr><tr><td><code>getComplianceStatus</code></td><td><code>GET /v2beta/{name=domains/*/complianceStatus}</code><br>Retrieves the compliance status for a given domain.</td></tr><tr><td><code>list</code></td><td><code>GET /v2beta/domains</code><br>Retrieves a list of all domains registered by you, along with their corresponding metadata.</td></tr></tbody></table>

## REST Resource: v2beta.domains.domainStats

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>query</code></td><td><code>POST /v2beta/{parent=domains/*}/domainStats:query</code><br>Retrieves a list of domain statistics for a given domain and time period.</td></tr></tbody></table>
