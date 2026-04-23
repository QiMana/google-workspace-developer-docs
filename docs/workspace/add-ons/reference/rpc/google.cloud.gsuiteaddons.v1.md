---
source: https://developers.google.com/workspace/add-ons/reference/rpc/google.cloud.gsuiteaddons.v1
root: workspace
fetched_at: 2026-04-23T15:23:08.488Z
---

# Package google.cloud.gsuiteaddons.v1

## Page Summary

- Google Workspace Add-ons provide a framework for extending the functionality of Google Workspace applications like Gmail, Drive, and Calendar.
- This API enables management of add-on deployments, including creation, deletion, installation, and updates.
- Developers can define add-on configurations specifying scopes, manifests, and HTTP options for each supported application.
- Authorization information for deployments is managed through this API, enabling secure access to user data.
- Deployments can be installed for testing, and their install status can be monitored using this API.

## Index

- `GSuiteAddOns` (interface)
- `AddOns` (message)
- `Authorization` (message)
- `CreateDeploymentRequest` (message)
- `DeleteDeploymentRequest` (message)
- `Deployment` (message)
- `GetAuthorizationRequest` (message)
- `GetDeploymentRequest` (message)
- `GetInstallStatusRequest` (message)
- `InstallDeploymentRequest` (message)
- `InstallStatus` (message)
- `ListDeploymentsRequest` (message)
- `ListDeploymentsResponse` (message)
- `ReplaceDeploymentRequest` (message)
- `UninstallDeploymentRequest` (message)

## GSuiteAddOns

A service for managing Google Workspace add-on deployments.

CreateDeployment

``   rpc CreateDeployment(`CreateDeploymentRequest`) returns (`Deployment`)  ``

Creates a deployment with the specified name and configuration.

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

DeleteDeployment

``   rpc DeleteDeployment(`DeleteDeploymentRequest`) returns (`Empty`)  ``

Deletes the deployment with the given name.

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

GetAuthorization

``   rpc GetAuthorization(`GetAuthorizationRequest`) returns (`Authorization`)  ``

Gets the authorization information for deployments in a given project.

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

GetDeployment

``   rpc GetDeployment(`GetDeploymentRequest`) returns (`Deployment`)  ``

Gets the deployment with the specified name.

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

GetInstallStatus

``   rpc GetInstallStatus(`GetInstallStatusRequest`) returns (`InstallStatus`)  ``

Gets the install status of a test deployment.

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

InstallDeployment

``   rpc InstallDeployment(`InstallDeploymentRequest`) returns (`Empty`)  ``

Installs a deployment to your account for testing. For more information, see [Test your add-on](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes#test_your_add-on)

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

ListDeployments

``   rpc ListDeployments(`ListDeploymentsRequest`) returns (`ListDeploymentsResponse`)  ``

Lists all deployments in a particular project.

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

ReplaceDeployment

``   rpc ReplaceDeployment(`ReplaceDeploymentRequest`) returns (`Deployment`)  ``

Creates or replaces a deployment with the specified name.

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

UninstallDeployment

``   rpc UninstallDeployment(`UninstallDeploymentRequest`) returns (`Empty`)  ``

Uninstalls a test deployment from the user’s account. For more information, see [Test your add-on](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes#test_your_add-on).

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## AddOns

A Google Workspace add-on configuration.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>common</code></td><td><p><code>CommonAddOnManifest</code></p><p>Configuration that is common across all Google Workspace add-ons.</p></td></tr><tr><td><code>gmail</code></td><td><p><code>GmailAddOnManifest</code></p><p>Gmail add-on configuration.</p></td></tr><tr><td><code>drive</code></td><td><p><code>DriveAddOnManifest</code></p><p>Drive add-on configuration.</p></td></tr><tr><td><code>calendar</code></td><td><p><code>CalendarAddOnManifest</code></p><p>Calendar add-on configuration.</p></td></tr><tr><td><code>docs</code></td><td><p><code>DocsAddOnManifest</code></p><p>Docs add-on configuration.</p></td></tr><tr><td><code>meet</code></td><td><p><code>MeetAddOnManifest</code></p><p>Meet add-on configuration.</p></td></tr><tr><td><code>sheets</code></td><td><p><code>SheetsAddOnManifest</code></p><p>Sheets add-on configuration.</p></td></tr><tr><td><code>slides</code></td><td><p><code>SlidesAddOnManifest</code></p><p>Slides add-on configuration.</p></td></tr><tr><td><code>httpOptions</code></td><td><p><code>HttpOptions</code></p><p>Options for sending requests to add-on HTTP endpoints</p></td></tr></tbody></table>

## Authorization

The authorization information used when invoking deployment endpoints.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The canonical full name of this resource. Example: <code>projects/123/authorization</code></p></td></tr><tr><td><code>serviceAccountEmail</code></td><td><p><code>string</code></p><p>The email address of the service account used to authenticate requests to add-on callback endpoints.</p></td></tr><tr><td><code>oauthClientId</code></td><td><p><code>string</code></p><p>The OAuth client ID used to obtain OAuth access tokens for a user on the add-on's behalf.</p></td></tr></tbody></table>

## CreateDeploymentRequest

Request message to create a deployment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Name of the project in which to create the deployment.</p><p>Example: <code>projects/my_project</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>parent</code>:</p><ul><li><code>gsuiteaddons.deployments.create</code></li></ul></td></tr><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>Required. The ID to use for this deployment. The full name of the created resource will be <code>projects/<project_number>/deployments/<deployment_id></code>.</p></td></tr><tr><td><code>deployment</code></td><td><p><code>Deployment</code></p><p>Required. The deployment to create (deployment.name cannot be set).</p></td></tr></tbody></table>

## DeleteDeploymentRequest

Request message to delete a deployment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to delete.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.delete</code></li></ul></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>The etag of the deployment to delete. If this is provided, it must match the server's etag.</p></td></tr></tbody></table>

## Deployment

A Google Workspace add-on deployment

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The deployment resource name. Example: <code>projects/123/deployments/my_deployment</code>.</p></td></tr><tr><td><code>oauthScopes[]</code></td><td><p><code>string</code></p><p>The list of Google OAuth scopes for which to request consent from the end user before executing an add-on endpoint.</p></td></tr><tr><td><code>addOns</code></td><td><p><code>AddOns</code></p><p>The Google Workspace add-on configuration.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>This value is computed by the server based on the version of the deployment in storage, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</p></td></tr></tbody></table>

## GetAuthorizationRequest

Request message to get the Google Workspace add-on authorization information.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Name of the project for which to get the Google Workspace add-on authorization information.</p><p>Example: <code>projects/my_project/authorization</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.authorizations.get</code></li></ul></td></tr></tbody></table>

## GetDeploymentRequest

Request message to get a deployment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to get.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.get</code></li></ul></td></tr></tbody></table>

## GetInstallStatusRequest

Request message to get the install status of a test deployment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment.</p><p>Example: <code>projects/my_project/deployments/my_deployment/installStatus</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.installStatus</code></li></ul></td></tr></tbody></table>

## InstallDeploymentRequest

Request message to install a deployment for testing.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to install.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.install</code></li></ul></td></tr></tbody></table>

## InstallStatus

Install status of a test deployment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The canonical full resource name of the deployment install status.</p><p>Example: <code>projects/123/deployments/my_deployment/installStatus</code>.</p></td></tr><tr><td><code>installed</code></td><td><p><code>BoolValue</code></p><p>True if the deployment is installed for the user.</p></td></tr></tbody></table>

## ListDeploymentsRequest

Request message to list deployments for a project.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Name of the project in which to create the deployment.</p><p>Example: <code>projects/my_project</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>parent</code>:</p><ul><li><code>gsuiteaddons.deployments.list</code></li></ul></td></tr><tr><td><code>pageSize</code></td><td><p><code>int32</code></p><p>The maximum number of deployments to return. The service might return fewer than this value. If unspecified, at most 1,000 deployments are returned. The maximum possible value is 1,000; values above 1,000 are changed to 1,000.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A page token, received from a previous <code>ListDeployments</code> call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided to <code>ListDeployments</code> must match the call that provided the page token.</p></td></tr></tbody></table>

## ListDeploymentsResponse

Response message to list deployments.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deployments[]</code></td><td><p><code>Deployment</code></p><p>The list of deployments for the given project.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>page_token</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

## ReplaceDeploymentRequest

Request message to create or replace a deployment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deployment</code></td><td><p><code>Deployment</code></p><p>Required. The deployment to create or replace.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>deployment</code>:</p><ul><li><code>gsuiteaddons.deployments.update</code></li></ul></td></tr></tbody></table>

## UninstallDeploymentRequest

Request message to uninstall a test deployment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The full resource name of the deployment to install.</p><p>Example: <code>projects/my_project/deployments/my_deployment</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.deployments.execute</code></li></ul></td></tr></tbody></table>
