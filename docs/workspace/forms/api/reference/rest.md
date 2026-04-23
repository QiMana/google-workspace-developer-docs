---
source: https://developers.google.com/workspace/forms/api/reference/rest
root: workspace
fetched_at: 2026-04-23T15:28:44.609Z
---

# Google Forms API

Reads and writes Google Forms and responses.

## Service: forms.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://forms.googleapis.com/$discovery/rest?version=v1](https://forms.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://forms.googleapis.com`

## REST Resource: v1.forms

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchUpdate</code></td><td><code>POST /v1/forms/{formId}:batchUpdate</code><br>Change the form with a batch of updates.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/forms</code><br>Create a new form using the title given in the provided form message in the request.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/forms/{formId}</code><br>Get a form.</td></tr><tr><td><code>setPublishSettings</code></td><td><code>POST /v1/forms/{formId}:setPublishSettings</code><br>Updates the publish settings of a form.</td></tr></tbody></table>

## REST Resource: v1.forms.responses

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/forms/{formId}/responses/{responseId}</code><br>Get one response from the form.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/forms/{formId}/responses</code><br>List a form's responses.</td></tr></tbody></table>

## REST Resource: v1.forms.watches

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/forms/{formId}/watches</code><br>Create a new watch.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/forms/{formId}/watches/{watchId}</code><br>Delete a watch.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/forms/{formId}/watches</code><br>Return a list of the watches owned by the invoking project.</td></tr><tr><td><code>renew</code></td><td><code>POST /v1/forms/{formId}/watches/{watchId}:renew</code><br>Renew an existing watch for seven days.</td></tr></tbody></table>
