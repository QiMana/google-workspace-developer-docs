---
source: https://developers.google.com/workspace/add-ons/reference/rpc
root: workspace
fetched_at: 2026-04-23T15:23:03.655Z
---

# Google Workspace add-ons API

## Page Summary

- The service `gsuiteaddons.googleapis.com` enables the creation of RPC client stubs for managing Google Workspace Add-ons deployments.
- `google.cloud.gsuiteaddons.v1.GSuiteAddOns` provides methods to manage add-on deployments, including creating, deleting, getting, and listing them.
- This service allows for installing and uninstalling test deployments, as well as retrieving authorization information and install statuses.
- Developers can use this service to control the lifecycle of their Google Workspace Add-ons within specific projects.

## Service: gsuiteaddons.googleapis.com

The Service name `gsuiteaddons.googleapis.com` is needed to create RPC client stubs.

## google.cloud.gsuiteaddons.v1.GSuiteAddOns

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code><code>CreateDeployment</code></code></td><td>Creates a deployment with the specified name and configuration.</td></tr><tr><td><code><code>DeleteDeployment</code></code></td><td>Deletes the deployment with the given name.</td></tr><tr><td><code><code>GetAuthorization</code></code></td><td>Gets the authorization information for deployments in a given project.</td></tr><tr><td><code><code>GetDeployment</code></code></td><td>Gets the deployment with the specified name.</td></tr><tr><td><code><code>GetInstallStatus</code></code></td><td>Gets the install status of a test deployment.</td></tr><tr><td><code><code>InstallDeployment</code></code></td><td>Installs a deployment to your account for testing.</td></tr><tr><td><code><code>ListDeployments</code></code></td><td>Lists all deployments in a particular project.</td></tr><tr><td><code><code>ReplaceDeployment</code></code></td><td>Creates or replaces a deployment with the specified name.</td></tr><tr><td><code><code>UninstallDeployment</code></code></td><td>Uninstalls a test deployment from the user’s account.</td></tr></tbody></table>
