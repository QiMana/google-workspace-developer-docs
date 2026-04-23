---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/graduation
root: workspace
fetched_at: 2026-04-23T15:24:26.431Z
---

# Graduation Audit Activity Events

This document lists the events and parameters for various types of Graduation Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=graduation`.

## Graduation Account Migration

Events of this type are returned with `type=GRADUATION_ACCOUNT_MIGRATION`.

### Completed migration of data

Migration of user account data to a personal account completed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>COMPLETED_ACCOUNT_MIGRATION</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>COMPLETION_TIME</code></td><td><p><code>integer</code></p><p>Migration completion time.</p></td></tr><tr><td><code>DRIVE_PERCENT_OF_FILES_MIGRATED</code></td><td><p><code>integer</code></p><p>Percent of Drive items migrated.</p></td></tr><tr><td><code>GMAIL_PERCENT_OF_FILES_MIGRATED</code></td><td><p><code>integer</code></p><p>Percent of Gmail messages migrated.</p></td></tr><tr><td><code>START_TIME</code></td><td><p><code>integer</code></p><p>Migration start time.</p></td></tr><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>User email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>graduation</b>?eventName=<b>COMPLETED_ACCOUNT_MIGRATION</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Completed migration of data from <var>{USER_EMAIL}</var> to personal account</code></div></td></tr></tbody></table>

### Started migration of data

Migration of user account data to a personal account started.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>STARTED_ACCOUNT_MIGRATION</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>START_TIME</code></td><td><p><code>integer</code></p><p>Migration start time.</p></td></tr><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>User email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>graduation</b>?eventName=<b>STARTED_ACCOUNT_MIGRATION</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Started migration of data from <var>{USER_EMAIL}</var> to personal account</code></div></td></tr></tbody></table>
