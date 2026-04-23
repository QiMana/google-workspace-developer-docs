---
source: https://developers.google.com/workspace/admin/contact-delegation/reference/rest
root: workspace
fetched_at: 2026-04-23T15:23:31.554Z
---

# Admin SDK: Contact Delegation API

## Admin SDK: Contact Delegation API

With the Contact Delegation API, administrators can manage [contact delegation](https://support.google.com/contacts/answer/2590392) permissions for their users. These permissions let users grant other users access to manage their contacts.

## Service: admin.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- *No discovery documents are available for this service.*

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://admin.googleapis.com`

## REST Resource: admin.contacts.v1.users.delegates

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /admin/contacts/v1/{parent=users/*}/delegates</code><br>Creates one or more delegates for a given user.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /admin/contacts/v1/{name=users/*/delegates/*}</code><br>Deletes a delegate from a given user.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/contacts/v1/{parent=users/*}/delegates</code><br>Lists the delegates of a given user.</td></tr></tbody></table>
