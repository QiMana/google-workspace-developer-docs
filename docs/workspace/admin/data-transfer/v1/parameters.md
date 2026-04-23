---
source: https://developers.google.com/workspace/admin/data-transfer/v1/parameters
root: workspace
fetched_at: 2026-04-23T15:23:32.717Z
---

# Transfer parameters

This page includes information about the transfer parameters available for applications that support data transfer. This list might not be up to date, and you can dynamically fetch the list of parameters by calling [`Applications.list`](../reference/rest/v1/applications/list.md).

<table><tbody><tr><th colspan="2">Google Calendar (Application ID: 435070579839)</th></tr><tr><td><code>RELEASE_RESOURCES</code></td><td><p>Possible values:</p><ul><li><code>TRUE</code> - Release resources for future events.</li></ul><p>You can only transfer events that are in the future, non-private, include at least one guest or resource, and are in the source user's primary calendar. If all of these conditions aren't met, an empty secondary calendar will be created for the destination user. If this field isn't specified in the request, resources are not released.</p></td></tr><tr><th colspan="2">Google Docs and Google Drive (Application ID: 55656082996)</th></tr><tr><td><code>PRIVACY_LEVEL</code></td><td><p>The privacy level of the files to transfer. Possible values:</p><ul><li><code>PRIVATE</code> - Files that aren't shared with anyone.</li><li><code>SHARED</code> - Files shared with at least one other user.</li></ul><p>If not specified in the request, this parameter defaults to <code>SHARED</code>. To transfer all files, specify both <code>PRIVATE</code> and <code>SHARED</code> in the request.</p></td></tr><tr><th colspan="2">Data Studio (Application ID: 810260081642)</th></tr><tr><td></td><td>No parameters are required for this application because all files are transferred.</td></tr></tbody></table>
