---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/keep
root: workspace
fetched_at: 2026-04-23T15:24:31.420Z
---

# Keep Audit Activity Events

This document lists the events and parameters for various types of Keep Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=keep`.

## User action

Event is user-initiated. Events of this type are returned with `type=user_action`.

### Attachment deleted

Event generated when a user removes an attachment from a note (excludes drawings).

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>deleted_attachment</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>attachment_name</code></td><td><p><code>string</code></p><p>Attachment resource URI.</p></td></tr><tr><td><code>note_name</code></td><td><p><code>string</code></p><p>Note resource URI.</p></td></tr><tr><td><code>owner_email</code></td><td><p><code>string</code></p><p>Note owner email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>keep</b>?eventName=<b>deleted_attachment</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> deleted an attachment</code></div></td></tr></tbody></table>

### Attachment uploaded

Event generated when a user uploads a new attachment to a note (excludes drawings).

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>uploaded_attachment</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>attachment_name</code></td><td><p><code>string</code></p><p>Attachment resource URI.</p></td></tr><tr><td><code>note_name</code></td><td><p><code>string</code></p><p>Note resource URI.</p></td></tr><tr><td><code>owner_email</code></td><td><p><code>string</code></p><p>Note owner email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>keep</b>?eventName=<b>uploaded_attachment</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> uploaded an attachment</code></div></td></tr></tbody></table>

### Note content edited

Event generated when a user modifies the title, text, or list items of a note.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>edited_note_content</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>note_name</code></td><td><p><code>string</code></p><p>Note resource URI.</p></td></tr><tr><td><code>owner_email</code></td><td><p><code>string</code></p><p>Note owner email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>keep</b>?eventName=<b>edited_note_content</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> edited note content</code></div></td></tr></tbody></table>

### Note created

Event generated when a user creates a note.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>created_note</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>note_name</code></td><td><p><code>string</code></p><p>Note resource URI.</p></td></tr><tr><td><code>owner_email</code></td><td><p><code>string</code></p><p>Note owner email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>keep</b>?eventName=<b>created_note</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> created a note</code></div></td></tr></tbody></table>

### Note deleted

Event generated when a note is deleted by its owner.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>deleted_note</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>note_name</code></td><td><p><code>string</code></p><p>Note resource URI.</p></td></tr><tr><td><code>owner_email</code></td><td><p><code>string</code></p><p>Note owner email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>keep</b>?eventName=<b>deleted_note</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> deleted a note</code></div></td></tr></tbody></table>

### Permissions edited

Event generated when a user gains or loses access to a note.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>modified_acl</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>note_name</code></td><td><p><code>string</code></p><p>Note resource URI.</p></td></tr><tr><td><code>owner_email</code></td><td><p><code>string</code></p><p>Note owner email.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>keep</b>?eventName=<b>modified_acl</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> edited permissions</code></div></td></tr></tbody></table>
