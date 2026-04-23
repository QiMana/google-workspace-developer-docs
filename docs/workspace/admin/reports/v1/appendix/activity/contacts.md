---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/contacts
root: workspace
fetched_at: 2026-04-23T15:24:15.208Z
---

# Contacts Audit Activity Events

This document lists the events and parameters for various types of Contacts Audit activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=contacts`.

## Mutate Contact Data

A category of audit logging event in which contact data was mutated by the user. Events of this type are returned with `type=mutate_contact_data`.

### Added to contacts

An event that occurs when profiles are added to the user's contact list.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>add_to_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>add_to_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> added a record to their contact list</code></div></td></tr></tbody></table>

### Changes accepted

An event that occurs when merge and fix suggestions are accepted by the user.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>accept_merge_and_fix_suggestions</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CHANGES_COUNT</code></td><td><p><code>integer</code></p><p>Number of changes that were saved in the action. For example, if the action is to reformat phone numbers of contacts, this parameter would contain the number of phone numbers that were reformatted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>accept_merge_and_fix_suggestions</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> accepted changes from the Merge and Fix page</code></div></td></tr></tbody></table>

### Contacts created

An event that occurs when multiple contacts are created at once.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>create_multiple_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>create_multiple_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> created contacts</code></div></td></tr></tbody></table>

### Contacts deleted

An event that occurs when contacts are deleted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>delete_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>delete_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> deleted contacts</code></div></td></tr></tbody></table>

### Contacts hidden

An event that occurs when contacts are hidden from the user's contact list.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>hide_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>hide_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> hid contacts</code></div></td></tr></tbody></table>

### Contacts imported

An event that occurs when contacts are imported from an external file.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>import_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>import_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> imported contacts</code></div></td></tr></tbody></table>

### Trashed contacts deleted

An event that occurs when contacts from the trash are deleted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>delete_trashed_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>delete_trashed_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> deleted contacts from Trash</code></div></td></tr></tbody></table>

### Trashed contacts recovered

An event that occurs when contacts from the trash are recovered.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>recover_trashed_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>recover_trashed_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> recovered contacts from Trash</code></div></td></tr></tbody></table>

## Significant View

A category of audit logging events in which contact data was viewed in a way that was considered significant, such as exporting or printing the contact list. Events of this type are returned with type=significant\_view. Events of this type are returned with `type=significant_view`.

### Contacts exported

An event that occurs when contacts are exported to an external file.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>export_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>export_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> exported contacts</code></div></td></tr></tbody></table>

### Contacts printed

An event that occurs when contacts are printed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>print_contacts</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>CONTACTS_COUNT</code></td><td><p><code>integer</code></p><p>Number of contacts involved in the action. For example, if the action is to delete contacts, this parameter would contain the number of contacts that were deleted.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>contacts</b>?eventName=<b>print_contacts</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> printed contacts</code></div></td></tr></tbody></table>
