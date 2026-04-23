---
source: https://developers.google.com/workspace/vault/reference/rest
root: workspace
fetched_at: 2026-04-23T15:32:03.759Z
---

# Google Vault API

Retention and eDiscovery for Google Workspace.

To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. For example, to download an export, an account needs the **Manage Exports** privilege and the matter shared with them.

## Service: vault.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://vault.googleapis.com/$discovery/rest?version=v1](https://vault.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://vault.googleapis.com`

## REST Resource: v1.matters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>addPermissions</code></td><td><code>POST /v1/matters/{matterId}:addPermissions</code><br>Adds an account as a matter collaborator.</td></tr><tr><td><code>close</code></td><td><code>POST /v1/matters/{matterId}:close</code><br>Closes the specified matter.</td></tr><tr><td><code>count</code></td><td><code>POST /v1/matters/{matterId}:count</code><br>Counts the accounts processed by the specified query.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/matters</code><br>Creates a matter with the given name and description.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/matters/{matterId}</code><br>Deletes the specified matter.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/matters/{matterId}</code><br>Gets the specified matter.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/matters</code><br>Lists matters the requestor has access to.</td></tr><tr><td><code>removePermissions</code></td><td><code>POST /v1/matters/{matterId}:removePermissions</code><br>Removes an account as a matter collaborator.</td></tr><tr><td><code>reopen</code></td><td><code>POST /v1/matters/{matterId}:reopen</code><br>Reopens the specified matter.</td></tr><tr><td><code>undelete</code></td><td><code>POST /v1/matters/{matterId}:undelete</code><br>Undeletes the specified matter.</td></tr><tr><td><code>update</code></td><td><code>PUT /v1/matters/{matterId}</code><br>Updates the specified matter.</td></tr></tbody></table>

## REST Resource: v1.matters.exports

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/matters/{matterId}/exports</code><br>Creates an export.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/matters/{matterId}/exports/{exportId}</code><br>Deletes an export.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/matters/{matterId}/exports/{exportId}</code><br>Gets an export.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/matters/{matterId}/exports</code><br>Lists details about the exports in the specified matter.</td></tr></tbody></table>

## REST Resource: v1.matters.holds

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>addHeldAccounts</code></td><td><code>POST /v1/matters/{matterId}/holds/{holdId}:addHeldAccounts</code><br>Adds accounts to a hold.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/matters/{matterId}/holds</code><br>Creates a hold in the specified matter.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/matters/{matterId}/holds/{holdId}</code><br>Removes the specified hold and releases the accounts or organizational unit covered by the hold.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/matters/{matterId}/holds/{holdId}</code><br>Gets the specified hold.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/matters/{matterId}/holds</code><br>Lists the holds in a matter.</td></tr><tr><td><code>removeHeldAccounts</code></td><td><code>POST /v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts</code><br>Removes the specified accounts from a hold.</td></tr><tr><td><code>update</code></td><td><code>PUT /v1/matters/{matterId}/holds/{holdId}</code><br>Updates the scope (organizational unit or accounts) and query parameters of a hold.</td></tr></tbody></table>

## REST Resource: v1.matters.holds.accounts

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/matters/{matterId}/holds/{holdId}/accounts</code><br>Adds an account to a hold.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}</code><br>Removes an account from a hold.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/matters/{matterId}/holds/{holdId}/accounts</code><br>Lists the accounts covered by a hold.</td></tr></tbody></table>

## REST Resource: v1.matters.savedQueries

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/matters/{matterId}/savedQueries</code><br>Creates a saved query.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/matters/{matterId}/savedQueries/{savedQueryId}</code><br>Deletes the specified saved query.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/matters/{matterId}/savedQueries/{savedQueryId}</code><br>Retrieves the specified saved query.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/matters/{matterId}/savedQueries</code><br>Lists the saved queries in a matter.</td></tr></tbody></table>

## REST Resource: v1.operations

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>cancel</code></td><td><code>POST /v1/{name=operations/**}:cancel</code><br>Starts asynchronous cancellation on a long-running operation.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=operations/**}</code><br>Deletes a long-running operation.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=operations/**}</code><br>Gets the latest state of a long-running operation.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{name=operations}</code><br>Lists operations that match the specified filter in the request.</td></tr></tbody></table>
