---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/admin-data-action
root: workspace
fetched_at: 2026-04-23T15:24:02.917Z
---

# Admin Data Action Audit Activity Events

This document lists the events and parameters for various types of Admin Data Action Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=admin_data_action`.

## Audit Logging

Events of this type are returned with `type=AUDIT_LOGGING`.

### Removed sensitive content

Sensitive parameters in audit events have been hidden.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>SENSITIVE_AUDIT_EVENTS_HIDDEN</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME_OF_TARGET_DATA</code></td><td><p><code>string</code></p><p>Application Name of data which was accessed/hidden/unhidden.</p></td></tr><tr><td><code>EVENT_IDS_HIDDEN</code></td><td><p><code>string</code></p><p>Event IDs that were hidden.</p></td></tr><tr><td><code>JUSTIFICATION</code></td><td><p><code>string</code></p><p>Justification for accessing/hiding/unhiding audit data.</p></td></tr><tr><td><code>TIME_USEC_OF_TARGET_DATA</code></td><td><p><code>integer</code></p><p>Time Usec of data which was accessed/hidden/unhidden.</p></td></tr><tr><td><code>UNIQUE_QUALIFIER_HIDDEN</code></td><td><p><code>integer</code></p><p>Unique qualifier that was hidden.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin_data_action</b>?eventName=<b>SENSITIVE_AUDIT_EVENTS_HIDDEN</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Removed sensitive content for <var>{APPLICATION_NAME_OF_TARGET_DATA}</var></code></div></td></tr></tbody></table>

### Restored sensitive content

Sensitive parameters in audit events have been unhidden.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>SENSITIVE_AUDIT_EVENTS_UNHIDDEN</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME_OF_TARGET_DATA</code></td><td><p><code>string</code></p><p>Application Name of data which was accessed/hidden/unhidden.</p></td></tr><tr><td><code>EVENT_IDS_UNHIDDEN</code></td><td><p><code>string</code></p><p>Event IDs that were unhidden.</p></td></tr><tr><td><code>JUSTIFICATION</code></td><td><p><code>string</code></p><p>Justification for accessing/hiding/unhiding audit data.</p></td></tr><tr><td><code>TIME_USEC_OF_TARGET_DATA</code></td><td><p><code>integer</code></p><p>Time Usec of data which was accessed/hidden/unhidden.</p></td></tr><tr><td><code>UNIQUE_QUALIFIER_UNHIDDEN</code></td><td><p><code>integer</code></p><p>Unique qualifier that was unhidden.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin_data_action</b>?eventName=<b>SENSITIVE_AUDIT_EVENTS_UNHIDDEN</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Restored sensitive content for <var>{APPLICATION_NAME_OF_TARGET_DATA}</var></code></div></td></tr></tbody></table>

### Viewed sensitive content

Sensitive parameters in audit events have been accessed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>SENSITIVE_AUDIT_EVENTS_ACCESSED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>APPLICATION_NAME_OF_TARGET_DATA</code></td><td><p><code>string</code></p><p>Application Name of data which was accessed/hidden/unhidden.</p></td></tr><tr><td><code>EVENT_IDS_ACCESSED</code></td><td><p><code>string</code></p><p>Event IDs that were accessed.</p></td></tr><tr><td><code>FILTERS_APPLIED_IN_QUERY</code></td><td><p><code>string</code></p><p>Filters that were applied in the query.</p></td></tr><tr><td><code>JUSTIFICATION</code></td><td><p><code>string</code></p><p>Justification for accessing/hiding/unhiding audit data.</p></td></tr><tr><td><code>TIME_USEC_OF_TARGET_DATA</code></td><td><p><code>integer</code></p><p>Time Usec of data which was accessed/hidden/unhidden.</p></td></tr><tr><td><code>UNIQUE_QUALIFIER_ACCESSED</code></td><td><p><code>integer</code></p><p>Unique Qualifier that was accessed.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin_data_action</b>?eventName=<b>SENSITIVE_AUDIT_EVENTS_ACCESSED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Viewed sensitive content for <var>{APPLICATION_NAME_OF_TARGET_DATA}</var></code></div></td></tr></tbody></table>
