---
source: https://developers.google.com/workspace/add-ons/reference/rest
root: workspace
fetched_at: 2026-04-23T15:22:59.349Z
---

# Google Workspace add-ons API

## Page Summary

- This service, `gsuiteaddons.googleapis.com`, provides REST APIs for managing Google Workspace Add-ons deployments.
- You can use Google-provided client libraries or your own libraries with the provided discovery document and service endpoint information to interact with the APIs.
- The `v1.projects` resource allows you to retrieve authorization details for add-on deployments in a project.
- The `v1.projects.deployments` resource offers methods to create, delete, retrieve, install, list, replace, and uninstall add-on deployments.
- Use the service endpoint `https://gsuiteaddons.googleapis.com` as the base URL for all API requests.

## Service: gsuiteaddons.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://gsuiteaddons.googleapis.com/$discovery/rest?version=v1](https://gsuiteaddons.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://gsuiteaddons.googleapis.com`

## REST Resource: v1.projects

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getAuthorization</code></td><td><code>GET /v1/{name=projects/*/authorization}</code><br>Gets the authorization information for deployments in a given project.</td></tr></tbody></table>

## REST Resource: v1.projects.deployments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/{parent=projects/*}/deployments</code><br>Creates a deployment with the specified name and configuration.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=projects/*/deployments/*}</code><br>Deletes the deployment with the given name.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=projects/*/deployments/*}</code><br>Gets the deployment with the specified name.</td></tr><tr><td><code>getInstallStatus</code></td><td><code>GET /v1/{name=projects/*/deployments/*/installStatus}</code><br>Gets the install status of a test deployment.</td></tr><tr><td><code>install</code></td><td><code>POST /v1/{name=projects/*/deployments/*}:install</code><br>Installs a deployment to your account for testing.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=projects/*}/deployments</code><br>Lists all deployments in a particular project.</td></tr><tr><td><code>replaceDeployment</code></td><td><code>PUT /v1/{deployment.name=projects/*/deployments/*}</code><br>Creates or replaces a deployment with the specified name.</td></tr><tr><td><code>uninstall</code></td><td><code>POST /v1/{name=projects/*/deployments/*}:uninstall</code><br>Uninstalls a test deployment from the user’s account.</td></tr></tbody></table>
