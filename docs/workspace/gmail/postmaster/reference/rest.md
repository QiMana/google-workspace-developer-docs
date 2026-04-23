---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest
root: workspace
fetched_at: 2026-04-23T15:30:00.126Z
---

# Gmail Postmaster Tools API

The Postmaster Tools API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.

## Service: gmailpostmastertools.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://gmailpostmastertools.googleapis.com/$discovery/rest?version=v1](https://gmailpostmastertools.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://gmailpostmastertools.googleapis.com`

## REST Resource: v1.domains

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/{name=domains/*}</code><br>Gets a specific domain registered by the client.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/domains</code><br>Lists the domains that have been registered by the client.</td></tr></tbody></table>

## REST Resource: v1.domains.trafficStats

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/{name=domains/*/trafficStats/*}</code><br>Get traffic statistics for a domain on a specific date.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=domains/*}/trafficStats</code><br>List traffic statistics for all available days.</td></tr></tbody></table>
