---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/admin-contacts-settings
root: workspace
fetched_at: 2026-04-23T15:24:02.834Z
---

# Admin Audit Activity Events - Contacts Settings

This document lists the events and parameters for Contacts Settings Admin Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=admin`.

## Contacts Settings

Events of this type are returned with `type=CONTACTS_SETTINGS`.

### Contacts Setting Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_CONTACTS_SETTING</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DOMAIN_NAME</code></td><td><p><code>string</code></p><p>The primary domain name.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr><tr><td><code>SETTING_NAME</code></td><td><p><code>string</code></p><p>The unique name (ID) of the setting that was changed.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_CONTACTS_SETTING</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{SETTING_NAME}</var> for contacts service changed from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>
