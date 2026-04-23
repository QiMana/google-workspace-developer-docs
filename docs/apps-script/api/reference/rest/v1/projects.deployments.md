---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments
root: apps-script
fetched_at: 2026-04-23T15:18:11.834Z
---

# REST Resource: projects.deployments

## Page Summary

- A Deployment resource represents a single script deployment and includes its ID, configuration, update time, and entry points.
- DeploymentConfig defines how a deployment is configured, including the script ID, version number, manifest file name, and description.
- An EntryPoint defines how a deployment is accessed externally and can be a web app, execution API, or add-on.
- Different EntryPoint types like WebAppEntryPoint, ExecutionApiEntryPoint, and AddOnEntryPoint have specific configurations for access and execution.
- The provided content also outlines methods for managing deployments, including creation, deletion, retrieval, listing, and updating.

## Resource: Deployment

Representation of a single script deployment.

JSON representation

```
{
  "deploymentId": string,
  "deploymentConfig": {
    object (DeploymentConfig)
  },
  "updateTime": string,
  "entryPoints": [
    {
      object (EntryPoint)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deploymentId</code></td><td><p><code>string</code></p><p>The deployment ID for this deployment.</p></td></tr><tr><td><code>deploymentConfig</code></td><td><p><code>object (<code>DeploymentConfig</code>)</code></p><p>The deployment configuration.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Last modified date time stamp.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>entryPoints[]</code></td><td><p><code>object (<code>EntryPoint</code>)</code></p><p>The deployment's entry points.</p></td></tr></tbody></table>

## DeploymentConfig

Metadata the defines how a deployment is configured.

JSON representation

```
{
  "scriptId": string,
  "versionNumber": integer,
  "manifestFileName": string,
  "description": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>versionNumber</code></td><td><p><code>integer</code></p><p>The version number on which this deployment is based.</p></td></tr><tr><td><code>manifestFileName</code></td><td><p><code>string</code></p><p>The manifest file name for this deployment.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description for this deployment.</p></td></tr></tbody></table>

## EntryPoint

A configuration that defines how a deployment is accessed externally.

JSON representation

```
{
  "entryPointType": enum (EntryPointType),

  // Union field properties can be only one of the following:
  "webApp": {
    object (WebAppEntryPoint)
  },
  "executionApi": {
    object (ExecutionApiEntryPoint)
  },
  "addOn": {
    object (AddOnEntryPoint)
  }
  // End of list of possible types for union field properties.
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>entryPointType</code></td><td><p><code>enum (<code>EntryPointType</code>)</code></p><p>The type of the entry point.</p></td></tr><tr><td colspan="2">Union field <code>properties</code>. Entry point properties per entry point type. <code>properties</code> can be only one of the following:</td></tr><tr><td><code>webApp</code></td><td><p><code>object (<code>WebAppEntryPoint</code>)</code></p><p>An entry point specification for web apps.</p></td></tr><tr><td><code>executionApi</code></td><td><p><code>object (<code>ExecutionApiEntryPoint</code>)</code></p><p>An entry point specification for Apps Script API execution calls.</p></td></tr><tr><td><code>addOn</code></td><td><p><code>object (<code>AddOnEntryPoint</code>)</code></p><p>Add-on properties.</p></td></tr></tbody></table>

## EntryPointType

Types of entry points.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ENTRY_POINT_TYPE_UNSPECIFIED</code></td><td>An unspecified entry point.</td></tr><tr><td><code>WEB_APP</code></td><td>A web application entry point.</td></tr><tr><td><code>EXECUTION_API</code></td><td>An API executable entry point.</td></tr><tr><td><code>ADD_ON</code></td><td>An Add-On entry point.</td></tr></tbody></table>

## WebAppEntryPoint

A web application entry point.

JSON representation

```
{
  "url": string,
  "entryPointConfig": {
    object (WebAppConfig)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>The URL for the web application.</p></td></tr><tr><td><code>entryPointConfig</code></td><td><p><code>object (<code>WebAppConfig</code>)</code></p><p>The entry point's configuration.</p></td></tr></tbody></table>

## WebAppConfig

Web app entry point configuration.

JSON representation

```
{
  "access": enum (Access),
  "executeAs": enum (ExecuteAs)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>access</code></td><td><p><code>enum (<code>Access</code>)</code></p><p>Who has permission to run the web app.</p></td></tr><tr><td><code>executeAs</code></td><td><p><code>enum (<code>ExecuteAs</code>)</code></p><p>Who to execute the web app as.</p></td></tr></tbody></table>

## Access

Access configuration.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN_ACCESS</code></td><td>Default value, should not be used.</td></tr><tr><td><code>MYSELF</code></td><td>Only the user who deployed the web app or executable can access it. Note that this is not necessarily the owner of the script project.</td></tr><tr><td><code>DOMAIN</code></td><td>Only users in the same domain as the user who deployed the web app or executable can access it.</td></tr><tr><td><code>ANYONE</code></td><td>Any logged in user can access the web app or executable.</td></tr><tr><td><code>ANYONE_ANONYMOUS</code></td><td>Any user, logged in or not, can access the web app or executable.</td></tr></tbody></table>

## ExecuteAs

A configuration that specifies the user under whose authority the web app should run as.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN_EXECUTE_AS</code></td><td>Default value, should not be used.</td></tr><tr><td><code>USER_ACCESSING</code></td><td>The script runs as the user accessing the web app.</td></tr><tr><td><code>USER_DEPLOYING</code></td><td>The script runs as the user who deployed the web app. Note that this is not necessarily the owner of the script project.</td></tr></tbody></table>

## ExecutionApiEntryPoint

An API executable entry point.

JSON representation

```
{
  "entryPointConfig": {
    object (ExecutionApiConfig)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>entryPointConfig</code></td><td><p><code>object (<code>ExecutionApiConfig</code>)</code></p><p>The entry point's configuration.</p></td></tr></tbody></table>

## ExecutionApiConfig

API executable entry point configuration.

JSON representation

```
{
  "access": enum (Access)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>access</code></td><td><p><code>enum (<code>Access</code>)</code></p><p>Who has permission to run the API executable.</p></td></tr></tbody></table>

## AddOnEntryPoint

An add-on entry point.

JSON representation

```
{
  "addOnType": enum (AddOnType),
  "title": string,
  "description": string,
  "helpUrl": string,
  "reportIssueUrl": string,
  "postInstallTipUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addOnType</code></td><td><p><code>enum (<code>AddOnType</code>)</code></p><p>The add-on's required list of supported container types.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The add-on's required title.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The add-on's optional description.</p></td></tr><tr><td><code>helpUrl</code></td><td><p><code>string</code></p><p>The add-on's optional help URL.</p></td></tr><tr><td><code>reportIssueUrl</code></td><td><p><code>string</code></p><p>The add-on's optional report issue URL.</p></td></tr><tr><td><code>postInstallTipUrl</code></td><td><p><code>string</code></p><p>The add-on's required post install tip URL.</p></td></tr></tbody></table>

## AddOnType

AddType defines which category of add-ons a host application handles. Each add-on type has a section of the script manifest that is used when deploying or executing an add-on of the given type.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN_ADDON_TYPE</code></td><td>Default value, unknown add-on type.</td></tr><tr><td><code>GMAIL</code></td><td>Add-on type for Gmail.</td></tr><tr><td><code>DATA_STUDIO</code></td><td>Add-on type for Data Studio.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a deployment of an Apps Script project.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a deployment of an Apps Script project.</td></tr><tr><td><h3>get</h3></td><td>Gets a deployment of an Apps Script project.</td></tr><tr><td><h3>list</h3></td><td>Lists the deployments of an Apps Script project.</td></tr><tr><td><h3>update</h3></td><td>Updates a deployment of an Apps Script project.</td></tr></tbody></table>
