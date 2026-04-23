---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/meet-hardware
root: workspace
fetched_at: 2026-04-23T15:24:30.503Z
---

# Meet Hardware Audit Activity Events

This document lists the events and parameters for various types of Meet Hardware Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=meet_hardware`.

## Activity event

The category of an event. For example, an EVENT\_BYOD\_ENTERED event belongs to the ACTIVITY category. Events of this type are returned with type=ACTIVITY. Events of this type are returned with `type=ACTIVITY`.

### Connected to a user device

Triggered when a user connects their device to the Google Meet hardware.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_BYOD_ENTERED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_BYOD_ENTERED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device was connected to a user device</code></div></td></tr></tbody></table>

### Disconnected from a user device

Triggered when a user disconnects their device from the Google Meet hardware.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_BYOD_EXITED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_BYOD_EXITED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device was disconnected from a user device</code></div></td></tr></tbody></table>

### Google Meet call disconnected

The device left a Google Meet call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_MEET_CALL_DISCONNECTED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_MEET_CALL_DISCONNECTED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device left a Google Meet call</code></div></td></tr></tbody></table>

### Google Meet call joined

The device joined a Google Meet call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_MEET_CALL_JOINED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_MEET_CALL_JOINED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device joined a Google Meet call</code></div></td></tr></tbody></table>

### Local presentation ended

The device stopped presenting content from a connected user device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_LOCAL_PRESENT_ENDED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_LOCAL_PRESENT_ENDED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device stopped presenting from a user device</code></div></td></tr></tbody></table>

### Local presentation started

The device started presenting content from a connected user device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_LOCAL_PRESENT_STARTED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_LOCAL_PRESENT_STARTED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device started presenting from a user device</code></div></td></tr></tbody></table>

### Sleep screen entered

The device entered power saving mode.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_SLEEP_SCREEN_ENTERED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_SLEEP_SCREEN_ENTERED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device entered power saving mode</code></div></td></tr></tbody></table>

### Sleep screen exited

The device exited power saving mode.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_SLEEP_SCREEN_EXITED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_SLEEP_SCREEN_EXITED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device exited power saving mode</code></div></td></tr></tbody></table>

### Teams call disconnected

The device left a Teams call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_TEAMS_CALL_DISCONNECTED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_TEAMS_CALL_DISCONNECTED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device left a Teams call</code></div></td></tr></tbody></table>

### Teams call joined

The device joined a Teams call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_TEAMS_CALL_JOINED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_TEAMS_CALL_JOINED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device joined a Teams call</code></div></td></tr></tbody></table>

### Webex call disconnected

The device left a Webex call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_WEBEX_CALL_DISCONNECTED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_WEBEX_CALL_DISCONNECTED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device left a Webex call</code></div></td></tr></tbody></table>

### Webex call joined

The device joined a Webex call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_WEBEX_CALL_JOINED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_WEBEX_CALL_JOINED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device joined a Webex call</code></div></td></tr></tbody></table>

### Whiteboard camera presentation ended

The device stopped presenting from a whiteboard camera.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_BOARDCAM_PRESENT_ENDED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_BOARDCAM_PRESENT_ENDED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device stopped presenting from a whiteboard camera</code></div></td></tr></tbody></table>

### Whiteboard camera presentation started

The device started presenting from a whiteboard camera.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_BOARDCAM_PRESENT_STARTED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_BOARDCAM_PRESENT_STARTED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device started presenting from a whiteboard camera</code></div></td></tr></tbody></table>

### Zoom call disconnected

The device left a Zoom call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_ZOOM_CALL_DISCONNECTED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_ZOOM_CALL_DISCONNECTED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device left a Zoom call</code></div></td></tr></tbody></table>

### Zoom call joined

The device joined a Zoom call.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_ZOOM_CALL_JOINED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_ZOOM_CALL_JOINED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device joined a Zoom call</code></div></td></tr></tbody></table>

## Feedback filed event

The category of an event. For example, an EVENT\_FEEDBACK\_FILED event belongs to the FEEDBACK\_FILED category. Events of this type are returned with type=FEEDBACK\_FILED. Events of this type are returned with `type=FEEDBACK_FILED`.

### Feedback filed

A user submitted feedback from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FEEDBACK_FILED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FEEDBACK_FILED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A user filed feedback from the device</code></div></td></tr></tbody></table>

## Issue event

The category of an event. For example, an EVENT\_ADD\_ON\_CAMERA\_ATTACHED event belongs to the ISSUE category. Events of this type are returned with type=issue. Events of this type are returned with `type=ISSUE`.

### Add-on camera attached

An add-on camera was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_ADD_ON_CAMERA_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_ADD_ON_CAMERA_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>An add-on camera connected</code></div></td></tr></tbody></table>

### Add-on camera detached

An add-on camera was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_ADD_ON_CAMERA_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_ADD_ON_CAMERA_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>An add-on camera disconnected</code></div></td></tr></tbody></table>

### Application load failure: authentication error

The application failed to load due to an authentication error.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_AUTH_FAILURE_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_AUTH_FAILURE_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device couldn't authenticate itself</code></div></td></tr></tbody></table>

### Application load failure: client error

The application failed to load due to a client-side error (4xx status code).

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_BAD_STATUS_CODE_4XX_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_BAD_STATUS_CODE_4XX_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The application failed to load due to a client error</code></div></td></tr></tbody></table>

### Application load failure: couldn't establish a network handshake

The application failed to load because it couldn't establish a network handshake.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_TRANSPORT_FAILURE_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_TRANSPORT_FAILURE_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The application failed to load because it couldn't establish a network handshake</code></div></td></tr></tbody></table>

### Application load failure: error loading application

The application failed to load due to a shim framework error.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_SHIM_FRAMEWORK_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_SHIM_FRAMEWORK_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Error loading application</code></div></td></tr></tbody></table>

### Application load failure: network connection interrupted

The application's network connection was interrupted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_NETWORK_INTERRUPTED_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_NETWORK_INTERRUPTED_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The network connection was interrupted</code></div></td></tr></tbody></table>

### Application load failure: server error

The application failed to load due to a server-side error (5xx status code).

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_BAD_STATUS_CODE_5XX_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_BAD_STATUS_CODE_5XX_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The application failed to load due to a server error</code></div></td></tr></tbody></table>

### Application load failure: timed out loading application

The application timed out while loading.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_TIMEOUT_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_TIMEOUT_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Timeout loading application</code></div></td></tr></tbody></table>

### Application load failure: waiting for network

The device is waiting for a network connection.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_WAITING_FOR_NETWORK</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_WAITING_FOR_NETWORK</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device is waiting for network connection</code></div></td></tr></tbody></table>

### Application load failure: WebView exited

The application failed to load because the WebView component exited unexpectedly.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_WEBVIEW_EXIT_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_WEBVIEW_EXIT_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The application failed to load because the WebView exited</code></div></td></tr></tbody></table>

### Application load failure: WebView exited or crashed

The application failed to load because the WebView component exited or crashed.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_WEBVIEW_ERROR</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_WEBVIEW_ERROR</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The application failed to load because the WebView exited or crashed</code></div></td></tr></tbody></table>

### Camera attached

A camera was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_CAMERA_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_CAMERA_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A camera connected</code></div></td></tr></tbody></table>

### Camera detached

A camera was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_CAMERA_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_CAMERA_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A camera disconnected</code></div></td></tr></tbody></table>

### Default camera set

A default camera was set for the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_CAMERA_SET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_CAMERA_SET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A default camera was set</code></div></td></tr></tbody></table>

### Default camera unset

The default camera was unset for the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_CAMERA_UNSET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_CAMERA_UNSET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The default camera was unset</code></div></td></tr></tbody></table>

### Default microphone set

A default microphone was set for the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_MICROPHONE_SET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_MICROPHONE_SET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A default microphone was set</code></div></td></tr></tbody></table>

### Default microphone unset

The default microphone was unset for the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_MICROPHONE_UNSET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_MICROPHONE_UNSET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The default microphone was unset</code></div></td></tr></tbody></table>

### Default speaker set

A default speaker was set for the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_SPEAKER_SET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_SPEAKER_SET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A default speaker was set</code></div></td></tr></tbody></table>

### Default speaker unset

The default speaker was unset for the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_SPEAKER_UNSET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_SPEAKER_UNSET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The default speaker was unset</code></div></td></tr></tbody></table>

### Default whiteboard camera set

A default whiteboard camera was set.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_VIDEO_CAPTURE_CONTENT_CAMERA_SET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_VIDEO_CAPTURE_CONTENT_CAMERA_SET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A default whiteboard camera was set</code></div></td></tr></tbody></table>

### Default whiteboard camera unset

The default whiteboard camera was unset.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEFAULT_VIDEO_CAPTURE_CONTENT_CAMERA_UNSET</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEFAULT_VIDEO_CAPTURE_CONTENT_CAMERA_UNSET</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The default whiteboard camera was unset</code></div></td></tr></tbody></table>

### Device found

The device has connected to the network.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEVICE_FOUND</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEVICE_FOUND</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Device connected</code></div></td></tr></tbody></table>

### Device missing

The device has disconnected from the network.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DEVICE_MISSING</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DEVICE_MISSING</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Device disconnected</code></div></td></tr></tbody></table>

### Display attached

A display was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DISPLAY_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DISPLAY_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A display connected</code></div></td></tr></tbody></table>

### Display detached

A display was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_DISPLAY_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_DISPLAY_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A display disconnected</code></div></td></tr></tbody></table>

### Firmware update finished

The device finished a firmware update.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_FIRMWARE_UPDATE_ENDED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_FIRMWARE_UPDATE_ENDED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device finished a firmware update</code></div></td></tr></tbody></table>

### Frontend loaded successfully

The device's frontend application loaded successfully.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_SUCCESS</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_SUCCESS</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device's frontend successfully loaded</code></div></td></tr></tbody></table>

### Handheld controller attached

A handheld controller was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_HANDHELD_CONTROLLER_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_HANDHELD_CONTROLLER_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A handheld controller connected</code></div></td></tr></tbody></table>

### Handheld controller detached

A handheld controller was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_HANDHELD_CONTROLLER_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_HANDHELD_CONTROLLER_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A handheld controller disconnected</code></div></td></tr></tbody></table>

### Loading firmware update

The device is currently loading a firmware update.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_FRONTEND_LOAD_WAIT_FOR_DEVICE_FIRMWARE_UPDATE</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_FRONTEND_LOAD_WAIT_FOR_DEVICE_FIRMWARE_UPDATE</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>Device loading firmware update</code></div></td></tr></tbody></table>

### Microphone attached

A microphone was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_MIC_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_MIC_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A microphone connected</code></div></td></tr></tbody></table>

### Microphone detached

A microphone was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_MIC_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_MIC_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A microphone disconnected</code></div></td></tr></tbody></table>

### Speaker attached

A speaker was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_SPEAKER_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_SPEAKER_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A speaker connected</code></div></td></tr></tbody></table>

### Speaker detached

A speaker was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_SPEAKER_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_SPEAKER_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A speaker disconnected</code></div></td></tr></tbody></table>

### Touchscreen controller attached

A touchscreen controller was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_TOUCH_CONTROLLER_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_TOUCH_CONTROLLER_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A touchscreen controller connected</code></div></td></tr></tbody></table>

### Touchscreen controller detached

A touchscreen controller was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_TOUCH_CONTROLLER_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_TOUCH_CONTROLLER_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A touchscreen controller disconnected</code></div></td></tr></tbody></table>

### Whiteboard camera attached

A whiteboard camera was connected to the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_VIDEO_CAPTURE_CONTENT_CAMERA_ATTACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_VIDEO_CAPTURE_CONTENT_CAMERA_ATTACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A whiteboard camera connected</code></div></td></tr></tbody></table>

### Whiteboard camera detached

A whiteboard camera was disconnected from the device.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_VIDEO_CAPTURE_CONTENT_CAMERA_DETACHED</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>AFFECTED_PERIPHERAL</code></td><td><p><code>message</code></p><p>The peripheral that is affected by the event in question.</p></td></tr><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_VIDEO_CAPTURE_CONTENT_CAMERA_DETACHED</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>A whiteboard camera disconnected</code></div></td></tr></tbody></table>

## Restart event

The category of an event. For example, an EVENT\_RESTART\_APP event belongs to the RESTART category. Events of this type are returned with type=RESTART. Events of this type are returned with `type=RESTART`.

### Restart

The device restarted for an unknown reason.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_RESTART_UNKNOWN</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_RESTART_UNKNOWN</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device restarted for an unknown reason</code></div></td></tr></tbody></table>

### Restart app

The Meet application on the device was restarted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_RESTART_APP</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_RESTART_APP</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device restarted the app</code></div></td></tr></tbody></table>

### Restart machine

The device was rebooted.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_RESTART_MACHINE</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_RESTART_MACHINE</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device rebooted</code></div></td></tr></tbody></table>

## Software update event

The category of an event. For example, an EVENT\_BROWSER\_UPDATE event belongs to the SOFTWARE\_UPDATE category. Events of this type are returned with type=SOFTWARE\_UPDATE. Events of this type are returned with `type=SOFTWARE_UPDATE`.

### Browser update

The device received a browser update.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_BROWSER_UPDATE</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_BROWSER_UPDATE</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device received a browser update</code></div></td></tr></tbody></table>

### Client app update

The device received a client application update.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_CLIENT_APP_UPDATE</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_CLIENT_APP_UPDATE</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device received a client application update</code></div></td></tr></tbody></table>

### OS update

The device received an operating system update.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>EVENT_OS_UPDATE</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>DEVICE_DISPLAY_NAME</code></td><td><p><code>string</code></p><p>The device name displayed to users. The device name is user-defined free text.</p></td></tr><tr><td><code>DEVICE_ID</code></td><td><p><code>string</code></p><p>Unique Identifier of the device.</p></td></tr><tr><td><code>EVENT_DATA</code></td><td><p><code>message</code></p><p>The details of an event occurring to a meet device.</p></td></tr><tr><td><code>SERIAL_NUMBER</code></td><td><p><code>string</code></p><p>Serial number of the device.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>meet_hardware</b>?eventName=<b>EVENT_OS_UPDATE</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>The device received an OS update</code></div></td></tr></tbody></table>
