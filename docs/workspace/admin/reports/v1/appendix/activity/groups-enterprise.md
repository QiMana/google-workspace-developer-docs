---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/groups-enterprise
root: workspace
fetched_at: 2026-04-23T15:24:23.616Z
---

# Enterprise Groups Audit Activity Events

This document lists the events and parameters for various types of Enterprise Groups Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=groups_enterprise`.

## Moderator action

Action performed by moderator. Events of this type are returned with `type=moderator_action`.

### Accept Invitation

Member accepted an invitation to join a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>accept_invitation</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>accept_invitation</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> accepted an invitation to group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Add Info Setting

Group info setting was added.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_info_setting</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>info_setting</code></td><td><p><code>string</code></p><p>Group info setting.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>Value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>add_info_setting</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added <var>{info_setting}</var> with value <var>{value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Add Member

Member was added to a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_member</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_role</code></td><td><p><code>string</code></p><p>The role assigned to the member in the context of the group, such as owner, manager, or member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>add_member</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added <var>{member_type}</var> <var>{member_id}</var> to group <var>{group_id}</var> with role <var>{member_role}</var></code></div></td></tr></tbody></table>

### Add Member Role

Role was added to a member in a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_member_role</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_role</code></td><td><p><code>string</code></p><p>The role assigned to the member in the context of the group, such as owner, manager, or member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>add_member_role</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added role(s) <var>{member_role}</var> for <var>{member_type}</var> <var>{member_id}</var> in group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Add Security Setting

Group security setting was added.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_security_setting</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>security_setting</code></td><td><p><code>string</code></p><p>Group security setting.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>Value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>add_security_setting</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added <var>{security_setting}</var> with value <var>{value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Add Service Account Permission

Permission was added to a service account.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_service_account_permission</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_role</code></td><td><p><code>string</code></p><p>The role assigned to the member in the context of the group, such as owner, manager, or member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>add_service_account_permission</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added <var>{member_role}</var> permission to <var>{member_type}</var> <var>{member_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Approve Join Request

Member approved a join request.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>approve_join_request</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>approve_join_request</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> approved join request from <var>{member_type}</var> <var>{member_id}</var> to group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Ban Member including with Moderation

Member was banned from group directly or with moderation.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>ban_member_with_moderation</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>ban_member_with_moderation</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> banned <var>{member_type}</var> <var>{member_id}</var> from group <var>{group_id}</var> during message moderation</code></div></td></tr></tbody></table>

### Change Info Setting

Group info setting was changed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>change_info_setting</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>info_setting</code></td><td><p><code>string</code></p><p>Group info setting.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>new_value</code></td><td><p><code>string</code></p><p>New value of a group setting.</p></td></tr><tr><td><code>old_value</code></td><td><p><code>string</code></p><p>Old value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>change_info_setting</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> changed <var>{info_setting}</var> from <var>{old_value}</var> to <var>{new_value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Change Security Setting

Group security setting was changed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>change_security_setting</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>new_value</code></td><td><p><code>string</code></p><p>New value of a group setting.</p></td></tr><tr><td><code>old_value</code></td><td><p><code>string</code></p><p>Old value of a group setting.</p></td></tr><tr><td><code>security_setting</code></td><td><p><code>string</code></p><p>Group security setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>change_security_setting</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> changed <var>{security_setting}</var> from <var>{old_value}</var> to <var>{new_value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Change Security Setting State

Group security setting state was changed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>change_security_setting_state</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>new_value</code></td><td><p><code>string</code></p><p>New value of a group setting.</p></td></tr><tr><td><code>old_value</code></td><td><p><code>string</code></p><p>Old value of a group setting.</p></td></tr><tr><td><code>security_setting_state</code></td><td><p><code>string</code></p><p>Group security setting state.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>change_security_setting_state</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> changed <var>{security_setting_state}</var> from <var>{old_value}</var> to <var>{new_value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Create Group

Group was created.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>create_group</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>create_group</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> created group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Create Namespace

Namespace was created.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>create_namespace</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>create_namespace</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> created a namespace <var>{namespace}</var></code></div></td></tr></tbody></table>

### Delete Group

Group was deleted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>delete_group</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>delete_group</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> deleted group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Delete Namespace

Namespace was deleted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>delete_namespace</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>delete_namespace</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> deleted a namespace <var>{namespace}</var></code></div></td></tr></tbody></table>

### Dynamic Group query was added

Dynamic Group query add event name.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_dynamic_group_query</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>dynamic_group_query</code></td><td><p><code>string</code></p><p>Dynamic group query.</p></td></tr><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>add_dynamic_group_query</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added dynamic group query with value <var>{dynamic_group_query}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Dynamic Group query was changed

Dynamic Group query change event name.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>change_dynamic_group_query</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>new_value</code></td><td><p><code>string</code></p><p>New value of a group setting.</p></td></tr><tr><td><code>old_value</code></td><td><p><code>string</code></p><p>Old value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>change_dynamic_group_query</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> changed dynamic group query from <var>{old_value}</var> to <var>{new_value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Invite Member

Member was invited to a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>invite_member</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>invite_member</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> invited <var>{member_type}</var> <var>{member_id}</var> to group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Join

Member added themself to a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>join</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>join</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added themself to group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Membership expiration added

Membership expiration added event name.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_membership_expiry</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>membership_expiry</code></td><td><p><code>string</code></p><p>Membership expiration time.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>add_membership_expiry</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added membership expiration with value <var>{membership_expiry}</var> for <var>{member_type}</var> <var>{member_id}</var> in group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Membership expiration removed

Membership expiration removed event name.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>remove_membership_expiry</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>old_value</code></td><td><p><code>string</code></p><p>Old value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>remove_membership_expiry</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed membership expiration for <var>{member_type}</var> <var>{member_id}</var> in group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Membership expiration updated

Membership expiration updated event name.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>update_membership_expiry</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>new_value</code></td><td><p><code>string</code></p><p>New value of a group setting.</p></td></tr><tr><td><code>old_value</code></td><td><p><code>string</code></p><p>Old value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>update_membership_expiry</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> changed membership expiration of <var>{member_type}</var> <var>{member_id}</var> from <var>{old_value}</var> to <var>{new_value}</var> in group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Reject Invitation

Member rejected an invitation to join a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>reject_invitation</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>reject_invitation</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> rejected an invitation to group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Reject Join Request

Member rejected a join request.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>reject_join_request</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>reject_join_request</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> rejected join request from <var>{member_type}</var> <var>{member_id}</var> to group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Remove Info Setting

Group info setting was removed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>remove_info_setting</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>info_setting</code></td><td><p><code>string</code></p><p>Group info setting.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>Value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>remove_info_setting</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed <var>{info_setting}</var> with value <var>{value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Remove Member

Member was removed from a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>remove_member</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>remove_member</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed <var>{member_type}</var> <var>{member_id}</var> from group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Remove Member Role

Role was removed for a member in a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>remove_member_role</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_role</code></td><td><p><code>string</code></p><p>The role assigned to the member in the context of the group, such as owner, manager, or member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>remove_member_role</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed role(s) <var>{member_role}</var> for <var>{member_type}</var> <var>{member_id}</var> in group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Remove Security Setting

Group security setting was removed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>remove_security_setting</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr><tr><td><code>security_setting</code></td><td><p><code>string</code></p><p>Group security setting.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>Value of a group setting.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>remove_security_setting</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed <var>{security_setting}</var> with value <var>{value}</var> in group <var>{group_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Remove Service Account Permission

Permission was removed for a service account.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>remove_service_account_permission</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_role</code></td><td><p><code>string</code></p><p>The role assigned to the member in the context of the group, such as owner, manager, or member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>remove_service_account_permission</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed <var>{member_role}</var> permission of <var>{member_type}</var> <var>{member_id}</var> for the <var>{namespace}</var> namespace</code></div></td></tr></tbody></table>

### Request to Join

Member requested to join a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>request_to_join</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>request_to_join</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> requested to join group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Revoke Invitation

Member revoked an invitation sent to another user.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>revoke_invitation</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>revoke_invitation</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> revoked invitation to <var>{member_type}</var> <var>{member_id}</var> from group <var>{group_id}</var></code></div></td></tr></tbody></table>

### Unban Member

Member was unbanned from a group.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>unban_member</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>group_id</code></td><td><p><code>string</code></p><p>Identifier of the target group.</p></td></tr><tr><td><code>member_id</code></td><td><p><code>string</code></p><p>Identifier of the member.</p></td></tr><tr><td><code>member_type</code></td><td><p><code>string</code></p><p>A member's type, such as user, group, or service account. In rare cases, a value of "other" appears when the member type is unknown.</p></td></tr><tr><td><code>namespace</code></td><td><p><code>string</code></p><p>Namespace of the target group.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>groups_enterprise</b>?eventName=<b>unban_member</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed ban for <var>{member_type}</var> <var>{member_id}</var> for group <var>{group_id}</var></code></div></td></tr></tbody></table>
