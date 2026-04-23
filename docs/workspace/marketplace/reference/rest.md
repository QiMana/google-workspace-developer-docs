---
source: https://developers.google.com/workspace/marketplace/reference/rest
root: workspace
fetched_at: 2026-04-23T15:30:10.818Z
---

# Google Workspace Marketplace API

## Page Summary

- Enables Google Workspace Marketplace apps to integrate with Google's licensing and billing services.
- Offers REST resources to manage customer and user licenses, including checking license status.
- Provides a discovery document for building client libraries and tools interacting with the API.
- Uses `https://appsmarket.googleapis.com` as the service endpoint for API requests.
- Includes a deprecated method for tracking user-initiated installs, recommending Google Analytics instead.

Lets your Google Workspace Marketplace applications integrate with Google's installtion and licensing services.

## Service: appsmarket.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://appsmarket.googleapis.com/$discovery/rest?version=v2](https://appsmarket.googleapis.com/$discovery/rest?version=v2)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://appsmarket.googleapis.com`

## REST Resource: v2.customerLicense

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /appsmarket/v2/customerLicense/{applicationId}/{customerId}</code><br>Gets the customer's licensing status to determine if they have access to a given app.</td></tr></tbody></table>

## REST Resource: v2.userLicense

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /appsmarket/v2/userLicense/{applicationId}/{userId}</code><br>Gets the user's licensing status to determine if they have permission to use a given app.</td></tr></tbody></table>
