---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/user-accounts
root: workspace
fetched_at: 2026-04-23T15:24:34.222Z
---

# User Accounts Audit Activity Events

This document lists the events and parameters for various types of User Accounts Audit activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=user_accounts`.

## 2-step verification enrollment changed

Events of this type are returned with `type=2sv_change`.

### 2-step verification disable

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>2sv_disable</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>2sv_disable</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has disabled 2-step verification</code></div></td></tr></tbody></table>

### 2-step verification enroll

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>2sv_enroll</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>2sv_enroll</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has enrolled for 2-step verification</code></div></td></tr></tbody></table>

## Account password changed

Events of this type are returned with `type=password_change`.

### Account password change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>password_edit</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>password_edit</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has changed Account password</code></div></td></tr></tbody></table>

## Account recovery info changed

Account recovery information changed. Events of this type are returned with `type=recovery_info_change`.

### Account recovery email change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>recovery_email_edit</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>recovery_email_edit</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has changed Account recovery email</code></div></td></tr></tbody></table>

### Account recovery phone change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>recovery_phone_edit</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>recovery_phone_edit</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has changed Account recovery phone</code></div></td></tr></tbody></table>

### Account recovery secret question/answer change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>recovery_secret_qa_edit</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>recovery_secret_qa_edit</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has changed Account recovery secret question/answer</code></div></td></tr></tbody></table>

## Advanced Protection enrollment changed

Events of this type are returned with `type=titanium_change`.

### Advanced Protection enroll

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>titanium_enroll</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>titanium_enroll</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has enrolled for Advanced Protection</code></div></td></tr></tbody></table>

### Advanced Protection unenroll

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>titanium_unenroll</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>titanium_unenroll</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has disabled Advanced Protection</code></div></td></tr></tbody></table>

## Email forwarding settings changed

Events of this type are returned with `type=email_forwarding_change`.

### Out of domain email forwarding enabled

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>email_forwarding_out_of_domain</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>user_accounts</b>?eventName=<b>email_forwarding_out_of_domain</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> has enabled out of domain email forwarding to <var>{email_forwarding_destination_address}</var>.</code></div></td></tr></tbody></table>
