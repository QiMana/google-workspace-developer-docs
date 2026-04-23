---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp
root: workspace
fetched_at: 2026-04-23T15:25:00.467Z
---

# HostApp

## Page Summary

- The `HostApp` enum indicates the Google Workspace application from which a Google Workspace Add-on or Google Chat app launches.
- For add-ons, the `HostApp` specifies the originating application like Gmail, Calendar, or Drive, while for Chat apps, it's always `CHAT`.
- `UNSPECIFIED_HOST_APP` is used when Google cannot identify the host app, and `DEMO` is not utilized.

The Google Workspace application for a Google Workspace add-on or Google Chat app.

For add-ons, the Workspace application from which a Google Workspace add-on launches. For Chat apps, the host app is always `CHAT`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED_HOST_APP</code></td><td>Google can't identify a host app.</td></tr><tr><td><code>GMAIL</code></td><td>The add-on launches from Gmail.</td></tr><tr><td><code>CALENDAR</code></td><td>The add-on launches from Google Calendar.</td></tr><tr><td><code>DRIVE</code></td><td>The add-on launches from Google Drive.</td></tr><tr><td><code>DEMO</code></td><td>Not used.</td></tr><tr><td><code>DOCS</code></td><td>The add-on launches from Google Docs.</td></tr><tr><td><code>MEET</code></td><td>The add-on launches from Google Meet.</td></tr><tr><td><code>SHEETS</code></td><td>The add-on launches from Google Sheets.</td></tr><tr><td><code>SLIDES</code></td><td>The add-on launches from Google Slides.</td></tr><tr><td><code>DRAWINGS</code></td><td>The add-on launches from Google Drawings.</td></tr><tr><td><code>CHAT</code></td><td>A Google Chat app.</td></tr></tbody></table>
