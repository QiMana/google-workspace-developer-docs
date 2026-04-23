---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/admin-sites-settings
root: workspace
fetched_at: 2026-04-23T15:24:08.669Z
---

# Admin Audit Activity Events - Sites Settings

This document lists the events and parameters for Sites Settings Admin Audit activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=admin`.

## Sites Settings

Events of this type are returned with `type=SITES_SETTINGS`.

### Add Web Address

Event gets triggered when a web address is added via cpanel.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>ADD_WEB_ADDRESS</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>SITE_LOCATION</code></td><td><p><code>string</code></p><p>The website path.</p></td></tr><tr><td><code>WEB_ADDRESS</code></td><td><p><code>string</code></p><p>The website's full URL.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>ADD_WEB_ADDRESS</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{WEB_ADDRESS}</var> added as web address for site location <var>{SITE_LOCATION}</var></code></div></td></tr></tbody></table>

### Delete Web Address

Event gets triggered when a web address is deleted via cpanel.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>DELETE_WEB_ADDRESS</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>SITE_LOCATION</code></td><td><p><code>string</code></p><p>The website path.</p></td></tr><tr><td><code>WEB_ADDRESS</code></td><td><p><code>string</code></p><p>The website's full URL.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>DELETE_WEB_ADDRESS</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{WEB_ADDRESS}</var> deleted as web address for site location <var>{SITE_LOCATION}</var></code></div></td></tr></tbody></table>

### Sites Setting Change

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_SITES_SETTING</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DOMAIN_NAME</code></td><td><p><code>string</code></p><p>The primary domain name.</p></td></tr><tr><td><code>NEW_VALUE</code></td><td><p><code>string</code></p><p>The new <code>SETTING_NAME</code> value that was set during this event.</p></td></tr><tr><td><code>OLD_VALUE</code></td><td><p><code>string</code></p><p>The previous <code>SETTING_NAME</code> value that was replaced during this event.</p></td></tr><tr><td><code>ORG_UNIT_NAME</code></td><td><p><code>string</code></p><p>The organizational unit (OU) name (path).</p></td></tr><tr><td><code>SETTING_NAME</code></td><td><p><code>string</code></p><p>The unique name (ID) of the setting that was changed.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_SITES_SETTING</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{SETTING_NAME}</var> for sites in your organization changed from <var>{OLD_VALUE}</var> to <var>{NEW_VALUE}</var></code></div></td></tr></tbody></table>

### Sites web address mapping change

Sites web address mapping update.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>CHANGE_SITES_WEB_ADDRESS_MAPPING_UPDATES</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>SERVICE_NAME</code></td><td><p><code>string</code></p><p>The record to update.</p></td></tr><tr><td><code>SITE_LOCATION</code></td><td><p><code>string</code></p><p>The website path.</p></td></tr><tr><td><code>WEB_ADDRESS</code></td><td><p><code>string</code></p><p>The website's full URL.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>CHANGE_SITES_WEB_ADDRESS_MAPPING_UPDATES</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{SERVICE_NAME}</var> this <var>{WEB_ADDRESS}</var> as web address for site location <var>{SITE_LOCATION}</var></code></div></td></tr></tbody></table>

### Viewed Google Site details

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>VIEW_SITE_DETAILS</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>SITE_NAME</code></td><td><p><code>string</code></p><p>The name of the website.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>admin</b>?eventName=<b>VIEW_SITE_DETAILS</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Admin viewed the site details of <var>{SITE_NAME}</var></code></div></td></tr></tbody></table>
