---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/admin-org-settings
root: workspace
fetched_at: 2026-04-23T15:24:10.291Z
---

# Admin Audit Activity Events - Organization Settings

This document lists the events and parameters for Organization Settings Admin Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=admin`.

## Organization Settings

Events of this type are returned with `type=ORG_SETTINGS`.

### App License Policy Changed

Licenses enabled or not at an org unit event name.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHROME_LICENSES_ENABLED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME</code></td><td><p><code>string</code></p><p>The application's name.</p></td></tr><tr><td><code>CHROME_LICENSES_ENABLED</code></td><td><p><code>string</code></p><p>Licenses enabled. Possible values:</p><ul><li><code>DISABLED</code><br>Not allowed to perform action.</li><li><code>ENABLED</code><br>Allowed to perform action.</li><li><code>INHERITED</code><br>Value is inherited.</li></ul></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHROME_LICENSES_ENABLED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>App license policy for <var>{APPLICATION_NAME}</var> at org unit <var>{ORG_UNIT_NAME}</var> is now <var>{CHROME_LICENSES_ENABLED}</var></code></div></td></tr></tbody></table>

### App License Reservation Created

License reservation at an org unit is created.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHROME_APPLICATION_LICENSE_RESERVATION_CREATED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME</code></td><td><p><code>string</code></p><p>The application's name.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr><tr><td><code>SKU_NAME</code></td><td><p><code>string</code></p><p>The SKU name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHROME_APPLICATION_LICENSE_RESERVATION_CREATED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{NEW_VALUE}</var> app licenses reserved to <var>{ORG_UNIT_NAME}</var> for <var>{APPLICATION_NAME}</var> <var>{SKU_NAME}</var></code></div></td></tr></tbody></table>

### App License Reservation Deleted

License reservation at an org unit is deleted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHROME_APPLICATION_LICENSE_RESERVATION_DELETED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME</code></td><td><p><code>string</code></p><p>The application's name.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr><tr><td><code>SKU_NAME</code></td><td><p><code>string</code></p><p>The SKU name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHROME_APPLICATION_LICENSE_RESERVATION_DELETED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>App license reservation at <var>{ORG_UNIT_NAME}</var> for <var>{APPLICATION_NAME}</var> <var>{SKU_NAME}</var> deleted</code></div></td></tr></tbody></table>

### App License Reservation Updated

License reservation at an org unit is updated.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHROME_APPLICATION_LICENSE_RESERVATION_UPDATED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME</code></td><td><p><code>string</code></p><p>The application's name.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr><tr><td><code>SKU_NAME</code></td><td><p><code>string</code></p><p>The SKU name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHROME_APPLICATION_LICENSE_RESERVATION_UPDATED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>App license reservation at <var>{ORG_UNIT_NAME}</var> for <var>{APPLICATION_NAME}</var> <var>{SKU_NAME}</var> updated from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var> licenses</code></div></td></tr></tbody></table>

### Create enrollment token

Event for 'Create enrollment token'.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CREATE_DEVICE_ENROLLMENT_TOKEN</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>FULL_ORG_UNIT_PATH</code></td><td><p><code>string</code></p><p>The org unit path including the root org unit name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CREATE_DEVICE_ENROLLMENT_TOKEN</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Generated a new enrollment token for <var>{FULL_ORG_UNIT_PATH}</var></code></div></td></tr></tbody></table>

### Custom Logo Assign

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>ASSIGN_CUSTOM_LOGO</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>ASSIGN_CUSTOM_LOGO</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>New custom logo assigned for org unit <var>{ORG_UNIT_NAME}</var></code></div></td></tr></tbody></table>

### Custom Logo Unassign

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>UNASSIGN_CUSTOM_LOGO</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>UNASSIGN_CUSTOM_LOGO</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Custom logo unassigned for org unit <var>{ORG_UNIT_NAME}</var></code></div></td></tr></tbody></table>

### Enrollment Token Creation

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CREATE_ENROLLMENT_TOKEN</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CREATE_ENROLLMENT_TOKEN</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A new enrollment token is generated for <var>{ORG_UNIT_NAME}</var></code></div></td></tr></tbody></table>

### Enrollment Token Revocation

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>REVOKE_ENROLLMENT_TOKEN</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>REVOKE_ENROLLMENT_TOKEN</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The enrollment token of <var>{ORG_UNIT_NAME}</var> has been revoked</code></div></td></tr></tbody></table>

### Licenses allowed or not at an org unit

Licenses allowed or not at an org unit event name.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHROME_LICENSES_ALLOWED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME</code></td><td><p><code>string</code></p><p>The application's name.</p></td></tr><tr><td><code>CHROME_LICENSES_ALLOWED</code></td><td><p><code>string</code></p><p>Licenses allowed. Possible values:</p><ul><li><code>ALLOWED</code><br>Allowed to perform action.</li><li><code>EMPTY</code><br>No value specified.</li><li><code>UNALLOWED</code><br>Not allowed to perform action.</li></ul></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHROME_LICENSES_ALLOWED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Licenses allowed policy is <var>{CHROME_LICENSES_ALLOWED}</var> for app <var>{APPLICATION_NAME}</var> at org unit <var>{ORG_UNIT_NAME}</var></code></div></td></tr></tbody></table>

### OrgUnit Creation

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CREATE_ORG_UNIT</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The new org unit's name. For more information about creating an organizational unit and an organization hierarchy, see the <a href="http://www.google.com/support/a/bin/answer.py?&answer=182433">administration help center</a>.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CREATE_ORG_UNIT</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Org Unit <var>{ORG_UNIT_NAME}</var> created</code></div></td></tr></tbody></table>

### OrgUnit Deletion

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>REMOVE_ORG_UNIT</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The name of the org unit that was removed.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>REMOVE_ORG_UNIT</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Org Unit <var>{ORG_UNIT_NAME}</var> deleted</code></div></td></tr></tbody></table>

### OrgUnit Description Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EDIT_ORG_UNIT_DESCRIPTION</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>EDIT_ORG_UNIT_DESCRIPTION</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Description of <var>{ORG_UNIT_NAME}</var> changed</code></div></td></tr></tbody></table>

### OrgUnit Move

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>MOVE_ORG_UNIT</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new parent org unit name.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The name of the org unit that moved.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>MOVE_ORG_UNIT</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{ORG_UNIT_NAME}</var> moved to parent <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### OrgUnit Name Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EDIT_ORG_UNIT_NAME</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new org unit name.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The org unit whose name changed.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>EDIT_ORG_UNIT_NAME</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Name of <var>{ORG_UNIT_NAME}</var> changed to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### Revoke enrollment token

Event for 'Revoke enrollment token'.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>REVOKE_DEVICE_ENROLLMENT_TOKEN</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>FULL_ORG_UNIT_PATH</code></td><td><p><code>string</code></p><p>The org unit path including the root org unit name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>REVOKE_DEVICE_ENROLLMENT_TOKEN</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Revoked the enrollment token of <var>{FULL_ORG_UNIT_PATH}</var></code></div></td></tr></tbody></table>

### Service Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>TOGGLE_SERVICE_ENABLED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DOMAIN_NAME</code></td><td><p><code>string</code></p><p>The primary domain name.</p></td></tr><tr><td><code>GROUP_EMAIL</code></td><td><p><code>string</code></p><p>The group's primary email address.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new value, which can be <code>true</code> or <code>false</code>.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr><tr><td><code>SERVICE_NAME</code></td><td><p><code>string</code></p><p>The enabled or disabled service name.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>TOGGLE_SERVICE_ENABLED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Service <var>{SERVICE_NAME}</var> changed to <var>{NEW_VALUE}</var> for <var>{ORG_UNIT_NAME}</var> organizational unit in your organization</code></div></td></tr></tbody></table>
