---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/admin-chat-settings
root: workspace
fetched_at: 2026-04-23T15:24:03.019Z
---

# Admin Audit Activity Events - Talk Settings

This document lists the events and parameters for Talk Settings Admin Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=admin`.

## Talk Settings

Note that this page also contains events for Google Hangouts, as well as the previous Google Chat product. Events of this type are returned with `type=CHAT_SETTINGS`.

### A Google Meet interoperability gateway was created.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>MEET_INTEROP_CREATE_GATEWAY</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GATEWAY_NAME</code></td><td><p><code>string</code></p><p>Gateway name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>MEET_INTEROP_CREATE_GATEWAY</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A Hangouts Meet interoperability gateway was created</code></div></td></tr></tbody></table>

### A Google Meet interoperability gateway was deleted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>MEET_INTEROP_DELETE_GATEWAY</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GATEWAY_NAME</code></td><td><p><code>string</code></p><p>Gateway name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>MEET_INTEROP_DELETE_GATEWAY</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A Hangouts Meet interoperability gateway was deleted</code></div></td></tr></tbody></table>

### A Google Meet interoperability gateway was modified.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>MEET_INTEROP_MODIFY_GATEWAY</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GATEWAY_NAME</code></td><td><p><code>string</code></p><p>Gateway name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>MEET_INTEROP_MODIFY_GATEWAY</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A Hangouts Meet interoperability gateway was modified</code></div></td></tr></tbody></table>

### Hangouts Setting Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_CHAT_SETTING</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DOMAIN_NAME</code></td><td><p><code>string</code></p><p>The primary domain name.</p></td></tr><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr><tr><td><code>SETTING_NAME</code></td><td><p><code>string</code></p><p>The unique name (ID) of the setting that was changed.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_CHAT_SETTING</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{SETTING_NAME}</var> for talk service for your organization changed from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>
