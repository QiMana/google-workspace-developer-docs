---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/access-evaluation
root: workspace
fetched_at: 2026-04-23T15:24:02.135Z
---

# Access Evaluation Audit Activity Events

This document lists the events and parameters for various types of Access Evaluation Audit activity events. You can retrieve these events by calling [Activities.list](../../../reference/rest/v1/activities/list.md) with `applicationName=access_evaluation`.

## Access Token Evaluation

An access token evaluation was performed. Events of this type are returned with `type=access_token_evaluation`.

### Access Token Request

An access token request was evaluated successfully to allow access.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>allow_token_request</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>client_type</code></td><td><p><code>string</code></p><p>Client Type of the client ID. Possible values:</p><ul><li><code>CONNECTED_DEVICE</code><br>A connected device client.</li><li><code>NATIVE_ANDROID</code><br>An Android application.</li><li><code>NATIVE_APPLICATION</code><br>A native application.</li><li><code>NATIVE_CHROME_EXTENSION</code><br>A Chrome application.</li><li><code>NATIVE_DEVICE</code><br>A native device application.</li><li><code>NATIVE_IOS</code><br>An iOS application.</li><li><code>NATIVE_SONY</code><br>A native Sony application.</li><li><code>TYPE_UNSPECIFIED</code><br>An unspecified client type.</li><li><code>WEB</code><br>A web application.</li></ul></td></tr><tr><td><code>configuration_source</code></td><td><p><code>string</code></p><p>The Configuration Source. Possible values:</p><ul><li><code>APP_ACCESS_CONTROL</code><br>Admin has set a policy in API Controls.</li><li><code>CONFIGURATION_SOURCE_UNSPECIFIED</code><br>Admin has not set any policy that blocks access for this application.</li><li><code>DOMAIN_WIDE_DELEGATION</code><br>Admin has domain wide delegated the application.</li><li><code>GOOGLE_WORKSPACE_MARKETPLACE</code><br>Admin has installed the application in Google Workspace Marketplace.</li><li><code>MOBILE_DEVICE_MANAGEMENT</code><br>Admin has set a policy in Google Endpoint Management.</li></ul></td></tr><tr><td><code>device_id</code></td><td><p><code>string</code></p><p>The Device ID.</p></td></tr><tr><td><code>scope_data</code></td><td><p><code>message</code></p><p>The Scope Data.</p></td></tr><tr><td><code>scopes_requested</code></td><td><p><code>string</code></p><p>Scopes for which the access was requested.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>access_evaluation</b>?eventName=<b>allow_token_request</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> token request from <var>{APPLICATION_NAME_IDENTIFIER}</var> was allowed due to <var>{configuration_source}</var></code></div></td></tr></tbody></table>

### Allow Token Impersonation

A Token impersonation was evaluated successfully to allow access.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>allow_token_impersonation</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>client_type</code></td><td><p><code>string</code></p><p>Client Type of the client ID. Possible values:</p><ul><li><code>CONNECTED_DEVICE</code><br>A connected device client.</li><li><code>NATIVE_ANDROID</code><br>An Android application.</li><li><code>NATIVE_APPLICATION</code><br>A native application.</li><li><code>NATIVE_CHROME_EXTENSION</code><br>A Chrome application.</li><li><code>NATIVE_DEVICE</code><br>A native device application.</li><li><code>NATIVE_IOS</code><br>An iOS application.</li><li><code>NATIVE_SONY</code><br>A native Sony application.</li><li><code>TYPE_UNSPECIFIED</code><br>An unspecified client type.</li><li><code>WEB</code><br>A web application.</li></ul></td></tr><tr><td><code>configuration_source</code></td><td><p><code>string</code></p><p>The Configuration Source. Possible values:</p><ul><li><code>APP_ACCESS_CONTROL</code><br>Admin has set a policy in API Controls.</li><li><code>CONFIGURATION_SOURCE_UNSPECIFIED</code><br>Admin has not set any policy that blocks access for this application.</li><li><code>DOMAIN_WIDE_DELEGATION</code><br>Admin has domain wide delegated the application.</li><li><code>GOOGLE_WORKSPACE_MARKETPLACE</code><br>Admin has installed the application in Google Workspace Marketplace.</li><li><code>MOBILE_DEVICE_MANAGEMENT</code><br>Admin has set a policy in Google Endpoint Management.</li></ul></td></tr><tr><td><code>device_id</code></td><td><p><code>string</code></p><p>The Device ID.</p></td></tr><tr><td><code>scope_data</code></td><td><p><code>message</code></p><p>The Scope Data.</p></td></tr><tr><td><code>scopes_requested</code></td><td><p><code>string</code></p><p>Scopes for which the access was requested.</p></td></tr><tr><td><code>service_account</code></td><td><p><code>string</code></p><p>The Service Account.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>access_evaluation</b>?eventName=<b>allow_token_impersonation</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{service_account}</var> impersonation access for <var>{actor}</var> was allowed due to <var>{configuration_source}</var></code></div></td></tr></tbody></table>

## Credential Validation

An end user credential was validated against security policies. Events of this type are returned with `type=credential_validation`.

### Allow Credential Validation Request

An end user credential was validated successfully against security policies to allow access.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>allow_credential_validation_request</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>scopes_requested</code></td><td><p><code>string</code></p><p>Scopes for which the access was requested.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>access_evaluation</b>?eventName=<b>allow_credential_validation_request</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> credential validation request from <var>{APPLICATION_NAME_IDENTIFIER}</var> was allowed due to security policy configuration</code></div></td></tr></tbody></table>
