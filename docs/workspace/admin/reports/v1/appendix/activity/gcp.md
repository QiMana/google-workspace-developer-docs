---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/gcp
root: workspace
fetched_at: 2026-04-23T15:24:26.513Z
---

# Google Cloud Platform Activity Events

This document lists the events and parameters for various types of Google Cloud Platform activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=gcp`.

## Cloud OS Login

Interaction with the Cloud OS Login API. Events of this type are returned with `type=CLOUD_OSLOGIN`.

### Add an SSH public key

User added an SSH public key.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>IMPORT_SSH_PUBLIC_KEY</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The email address of the acting user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>gcp</b>?eventName=<b>IMPORT_SSH_PUBLIC_KEY</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_EMAIL}</var> added an SSH public key.</code></div></td></tr></tbody></table>

### Delete a POSIX account

User deleted a POSIX account.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>DELETE_POSIX_ACCOUNT</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The email address of the acting user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>gcp</b>?eventName=<b>DELETE_POSIX_ACCOUNT</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_EMAIL}</var> deleted a POSIX account.</code></div></td></tr></tbody></table>

### Delete an SSH public key

User deleted an SSH public key.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>DELETE_SSH_PUBLIC_KEY</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The email address of the acting user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>gcp</b>?eventName=<b>DELETE_SSH_PUBLIC_KEY</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_EMAIL}</var> deleted an SSH public key.</code></div></td></tr></tbody></table>

### Retrieve an SSH public key

User retrieved SSH public key.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>GET_SSH_PUBLIC_KEY</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The email address of the acting user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>gcp</b>?eventName=<b>GET_SSH_PUBLIC_KEY</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_EMAIL}</var> retrieved an SSH public key.</code></div></td></tr></tbody></table>

### Retrieve the login profile

User retrieved the login profile.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>GET_LOGIN_PROFILE</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The email address of the acting user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>gcp</b>?eventName=<b>GET_LOGIN_PROFILE</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_EMAIL}</var> retrieved the profile information used for logging in to a virtual machine on Google Compute Engine.</code></div></td></tr></tbody></table>

### Update an SSH public key

User updated an SSH public key.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>UPDATE_SSH_PUBLIC_KEY</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>USER_EMAIL</code></td><td><p><code>string</code></p><p>The email address of the acting user.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>gcp</b>?eventName=<b>UPDATE_SSH_PUBLIC_KEY</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{USER_EMAIL}</var> updated an SSH public key.</code></div></td></tr></tbody></table>
