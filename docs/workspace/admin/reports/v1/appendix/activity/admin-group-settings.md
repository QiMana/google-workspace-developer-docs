---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/admin-group-settings
root: workspace
fetched_at: 2026-04-23T15:24:06.372Z
---

# Admin Audit Activity Events - Group Settings

This document lists the events and parameters for Group Settings Admin Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=admin`.

## Group Settings

Events of this type are returned with `type=GROUP_SETTINGS`.

### Filtering groups updated

Whitelisted groups updated event.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>WHITELISTED_GROUPS_UPDATED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>WHITELISTED_GROUPS</code></td><td><p><code>string</code></p><p>A comma-separated list of the names of whitelisted groups.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>WHITELISTED_GROUPS_UPDATED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Filtering groups updated to <var>{WHITELISTED_GROUPS}</var></code></div></td></tr></tbody></table>

### Group Creation

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CREATE_GROUP</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CREATE_GROUP</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Group <var>{GROUP_EMAIL}</var> created</code></div></td></tr></tbody></table>

### Group Deletion

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>DELETE_GROUP</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>DELETE_GROUP</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Group <var>{GROUP_EMAIL}</var> deleted</code></div></td></tr></tbody></table>

### Group Description Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_GROUP_DESCRIPTION</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_GROUP_DESCRIPTION</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Description for group <var>{GROUP_EMAIL}</var> changed</code></div></td></tr></tbody></table>

### Group Email Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_GROUP_EMAIL</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_GROUP_EMAIL</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Email of group <var>{GROUP_EMAIL}</var> changed to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### Group List Download

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>GROUP_LIST_DOWNLOAD</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>GROUP_LIST_DOWNLOAD</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Group list was downloaded as a CSV file</code></div></td></tr></tbody></table>

### Group Member Creation

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>ADD_GROUP_MEMBER</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The user's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>ADD_GROUP_MEMBER</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>User <var>{USER_EMAIL}</var> created under group <var>{GROUP_EMAIL}</var></code></div></td></tr></tbody></table>

### Group Member Deletion

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>REMOVE_GROUP_MEMBER</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The user's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>REMOVE_GROUP_MEMBER</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>User <var>{USER_EMAIL}</var> deleted from group <var>{GROUP_EMAIL}</var></code></div></td></tr></tbody></table>

### Group Member Update

Group Setting Change.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>UPDATE_GROUP_MEMBER</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The user's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>UPDATE_GROUP_MEMBER</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Roles of the user <var>{USER_EMAIL}</var> in group <var>{GROUP_EMAIL}</var> updated from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### Group Member Update

Group Member Delivery Settings Change.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>UPDATE_GROUP_MEMBER_DELIVERY_SETTINGS</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The user's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>UPDATE_GROUP_MEMBER_DELIVERY_SETTINGS</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>DeliverySettings of the user <var>{USER_EMAIL}</var> in group <var>{GROUP_EMAIL}</var> updated from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### Group Member Update

Group Member Delivery Settings Email Override Change.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>UPDATE_GROUP_MEMBER_DELIVERY_SETTINGS_CAN_EMAIL_OVERRIDE</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The user's primary email address.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>UPDATE_GROUP_MEMBER_DELIVERY_SETTINGS_CAN_EMAIL_OVERRIDE</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>DeliverySettings Email Override of the user <var>{USER_EMAIL}</var> in group <var>{GROUP_EMAIL}</var> updated from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### Group Members Bulk Upload

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>GROUP_MEMBER_BULK_UPLOAD</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_MEMBER_BULK_UPLOAD_FAILED_NUMBER</code></td><td><p><code>string</code></p><p>The number of failures when attempting to bulk upload group members.</p></td></tr><tr><td><code>GROUP_MEMBER_BULK_UPLOAD_TOTAL_NUMBER</code></td><td><p><code>string</code></p><p>The total number of bulk uploaded group members.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>GROUP_MEMBER_BULK_UPLOAD</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A total of <var>{GROUP_MEMBER_BULK_UPLOAD_TOTAL_NUMBER}</var> members selected for upload. <var>{GROUP_MEMBER_BULK_UPLOAD_FAILED_NUMBER}</var> out of <var>{GROUP_MEMBER_BULK_UPLOAD_TOTAL_NUMBER}</var> members failed to be uploaded</code></div></td></tr></tbody></table>

### Group Members Download

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>GROUP_MEMBERS_DOWNLOAD</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>GROUP_MEMBERS_DOWNLOAD</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Group member list was downloaded as a CSV file</code></div></td></tr></tbody></table>

### Group Name Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_GROUP_NAME</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_GROUP_NAME</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Name of group <var>{GROUP_EMAIL}</var> changed to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### Group Setting Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_GROUP_SETTING</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>SETTING_NAME</code></td><td><p><code>string</code></p><p>The unique name (ID) of the setting that was changed.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_GROUP_SETTING</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{SETTING_NAME}</var> for group <var>{GROUP_EMAIL}</var> changed from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>
