---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/context-aware-access
root: workspace
fetched_at: 2026-04-23T15:24:23.703Z
---

# Context-Aware Access Audit Activity Events

This document lists the events and parameters for various types of Context-Aware Access Audit activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=context_aware_access`.

## Context-Aware Access User Event

Short description of audit log event type Context-Aware Access user event. Events of this type are returned with `type=CONTEXT_AWARE_ACCESS_USER_EVENT`.

### Access Denied

Event name of access deny event.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>ACCESS_DENY_EVENT</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>BLOCKED_API_ACCESS</code></td><td><p><code>string</code></p><p>Display name of Blocked API access.</p></td></tr><tr><td><code>CAA_ACCESS_LEVEL_APPLIED</code></td><td><p><code>string</code></p><p>Display name of Access level applied.</p></td></tr><tr><td><code>CAA_ACCESS_LEVEL_SATISFIED</code></td><td><p><code>string</code></p><p>Display name of Access level satisfied.</p></td></tr><tr><td><code>CAA_ACCESS_LEVEL_UNSATISFIED</code></td><td><p><code>string</code></p><p>Display name of Access level unsatisfied.</p></td></tr><tr><td><code>CAA_APPLICATION</code></td><td><p><code>string</code></p><p>Display name of Application.</p></td></tr><tr><td><code>CAA_DEVICE_ID</code></td><td><p><code>string</code></p><p>Display name of Device Id.</p></td></tr><tr><td><code>CAA_DEVICE_STATE</code></td><td><p><code>string</code></p><p>Display name of Device State.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>context_aware_access</b>?eventName=<b>ACCESS_DENY_EVENT</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_NAME}</var> access denied</code></div></td></tr></tbody></table>

### Access Denied Internal Error

Event name of access denied internal error event.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>ACCESS_DENY_INTERNAL_ERROR_EVENT</code></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>context_aware_access</b>?eventName=<b>ACCESS_DENY_INTERNAL_ERROR_EVENT</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_NAME}</var> access denied internal error</code></div></td></tr></tbody></table>
