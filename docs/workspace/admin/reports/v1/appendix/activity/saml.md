---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/saml
root: workspace
fetched_at: 2026-04-23T15:24:27.092Z
---

# SAML Audit Activity Events

This document lists the events and parameters for various types of SAML Audit activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=saml`.

## Saml login

Login event type. Events of this type are returned with `type=login`.

### Failed login

Failed saml login.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>login_failure</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>application_name</code></td><td><p><code>string</code></p><p>Saml SP application name.</p></td></tr><tr><td><code>device_id</code></td><td><p><code>string</code></p><p>Saml Device ID.</p></td></tr><tr><td><code>failure_type</code></td><td><p><code>string</code></p><p>Login failure type. Possible values:</p><ul><li><code>failure_app_not_configured_for_user</code><br>Whether the login failed because of app not configured for user.</li><li><code>failure_app_not_enabled_for_user</code><br>Whether the login failed because of app not enabled for user.</li><li><code>failure_invalid_sp_id</code><br>Whether the login failed because of invalid SP id.</li><li><code>failure_invalid_user_id_mapping</code><br>Whether the login failed because of invalid userid mapping requested.</li><li><code>failure_malformed_request</code><br>Whether the login failed because of malformed request.</li><li><code>failure_no_passive</code><br>Whether the login failed because of failing to authenticate user passively.</li><li><code>failure_request_denied</code><br>Whether the login failed because of request denied.</li><li><code>failure_unknown</code><br>Whether the login failed because of unknown reason.</li><li><code>failure_user_id_mapping_unavailable</code><br>Whether the login failed because of userid mapping unavailable.</li></ul></td></tr><tr><td><code>initiated_by</code></td><td><p><code>string</code></p><p>Requester of saml authentication. Possible values:</p><ul><li><code>idp</code><br>Saml authentication initiated by IdP.</li><li><code>sp</code><br>Saml authentication initiated by SP.</li></ul></td></tr><tr><td><code>orgunit_path</code></td><td><p><code>string</code></p><p>User orgunit.</p></td></tr><tr><td><code>saml_second_level_status_code</code></td><td><p><code>string</code></p><p>Response second level status.</p></td></tr><tr><td><code>saml_status_code</code></td><td><p><code>string</code></p><p>Response status.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>saml</b>?eventName=<b>login_failure</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> failed to login because of the following error: <var>{failure_type}</var></code></div></td></tr></tbody></table>

### Successful login

Successful saml login.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>login_success</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>application_name</code></td><td><p><code>string</code></p><p>Saml SP application name.</p></td></tr><tr><td><code>device_id</code></td><td><p><code>string</code></p><p>Saml Device ID.</p></td></tr><tr><td><code>initiated_by</code></td><td><p><code>string</code></p><p>Requester of saml authentication. Possible values:</p><ul><li><code>idp</code><br>Saml authentication initiated by IdP.</li><li><code>sp</code><br>Saml authentication initiated by SP.</li></ul></td></tr><tr><td><code>orgunit_path</code></td><td><p><code>string</code></p><p>User orgunit.</p></td></tr><tr><td><code>saml_status_code</code></td><td><p><code>string</code></p><p>Response status.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>saml</b>?eventName=<b>login_success</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> logged in</code></div></td></tr></tbody></table>
