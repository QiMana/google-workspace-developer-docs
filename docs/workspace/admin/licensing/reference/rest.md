---
source: https://developers.google.com/workspace/admin/licensing/reference/rest
root: workspace
fetched_at: 2026-04-23T15:23:57.847Z
---

# Enterprise License Manager API

The Google Enterprise License Manager API lets you manage Google Workspace and related licenses for all users of a customer that you manage.

## Service: licensing.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://licensing.googleapis.com/$discovery/rest?version=v1](https://licensing.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://licensing.googleapis.com`

## REST Resource: v1.licenseAssignments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}</code><br>Revoke a license.</td></tr><tr><td><code>get</code></td><td><code>GET /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}</code><br>Get a specific user's license by product SKU.</td></tr><tr><td><code>insert</code></td><td><code>POST /apps/licensing/v1/product/{productId}/sku/{skuId}/user</code><br>Assign a license.</td></tr><tr><td><code>listForProduct</code></td><td><code>GET /apps/licensing/v1/product/{productId}/users</code><br>List all users assigned licenses for a specific product SKU.</td></tr><tr><td><code>listForProductAndSku</code></td><td><code>GET /apps/licensing/v1/product/{productId}/sku/{skuId}/users</code><br>List all users assigned licenses for a specific product SKU.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}</code><br>Reassign a user's product SKU with a different SKU in the same product.</td></tr><tr><td><code>update</code></td><td><code>PUT /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}</code><br>Reassign a user's product SKU with a different SKU in the same product.</td></tr></tbody></table>
