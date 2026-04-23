---
source: https://developers.google.com/apps-script/api/reference/rest
root: apps-script
fetched_at: 2026-04-23T15:18:11.079Z
---

# Apps Script API

## Page Summary

- This API manages and executes Google Apps Script projects.
- It provides REST resources for processes, projects, deployments, versions, and scripts.
- The service uses the script.googleapis.com endpoint and offers a Discovery document for machine-readable API specifications.
- You can use Google-provided client libraries or your own libraries to call this service.

Manages and executes Google Apps Script projects.

## Service: script.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://script.googleapis.com/$discovery/rest?version=v1](https://script.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://script.googleapis.com`

## REST Resource: v1.processes

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /v1/processes</code><br>List information about processes made by or on behalf of a user, such as process type and current status.</td></tr><tr><td><code>listScriptProcesses</code></td><td><code>GET /v1/processes:listScriptProcesses</code><br>List information about a script's executed processes, such as process type and current status.</td></tr></tbody></table>

## REST Resource: v1.projects

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/projects</code><br>Creates a new, empty script project with no script files and a base manifest file.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/projects/{scriptId}</code><br>Gets a script project's metadata.</td></tr><tr><td><code>getContent</code></td><td><code>GET /v1/projects/{scriptId}/content</code><br>Gets the content of the script project, including the code source and metadata for each script file.</td></tr><tr><td><code>getMetrics</code></td><td><code>GET /v1/projects/{scriptId}/metrics</code><br>Get metrics data for scripts, such as number of executions and active users.</td></tr><tr><td><code>updateContent</code></td><td><code>PUT /v1/projects/{scriptId}/content</code><br>Updates the content of the specified script project.</td></tr></tbody></table>

## REST Resource: v1.projects.deployments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/projects/{scriptId}/deployments</code><br>Creates a deployment of an Apps Script project.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/projects/{scriptId}/deployments/{deploymentId}</code><br>Deletes a deployment of an Apps Script project.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/projects/{scriptId}/deployments/{deploymentId}</code><br>Gets a deployment of an Apps Script project.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/projects/{scriptId}/deployments</code><br>Lists the deployments of an Apps Script project.</td></tr><tr><td><code>update</code></td><td><code>PUT /v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId}</code><br>Updates a deployment of an Apps Script project.</td></tr></tbody></table>

## REST Resource: v1.projects.versions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/projects/{scriptId}/versions</code><br>Creates a new immutable version using the current code, with a unique version number.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/projects/{scriptId}/versions/{versionNumber}</code><br>Gets a version of a script project.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/projects/{scriptId}/versions</code><br>List the versions of a script project.</td></tr></tbody></table>

## REST Resource: v1.scripts

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>run</code></td><td><code>POST /v1/scripts/{scriptId}:run</code><br>Runs a function in an Apps Script project.</td></tr></tbody></table>
