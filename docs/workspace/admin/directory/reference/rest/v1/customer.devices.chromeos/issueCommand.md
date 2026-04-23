---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/issueCommand
root: workspace
fetched_at: 2026-04-23T15:23:35.456Z
---

# Method: customer.devices.chromeos.issueCommand

Issues a command for the device to execute.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Immutable. ID of the Google Workspace account.</p></td></tr><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>Immutable. ID of Chrome OS Device.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "commandType": enum (CommandType),
  "payload": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>commandType</code></td><td><p><code>enum (<code>CommandType</code>)</code></p><p>The type of command.</p></td></tr><tr><td><code>payload</code></td><td><p><code>string</code></p><p>The payload for the command, provide it only if command supports it. The following commands support adding payload:</p><ul><li><code>SET_VOLUME</code>: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100].</li><li><code>DEVICE_START_CRD_SESSION</code>: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true, "crdSessionType": string }. <code>ackedUserPresence</code> is a boolean. By default, <code>ackedUserPresence</code> is set to <code>false</code>. To start a Chrome Remote Desktop session for an active device, set <code>ackedUserPresence</code> to <code>true</code>. <code>crdSessionType</code> can only select from values <code>private</code> (which grants the remote admin exclusive control of the ChromeOS device) or <code>shared</code> (which allows the admin and the local user to share control of the ChromeOS device). If not set, <code>crdSessionType</code> defaults to <code>shared</code>. The <code>FETCH_CRD_AVAILABILITY_INFO</code> command can be used to determine available session types on the device.</li><li><code>REBOOT</code>: Payload is a stringified JSON object in the form: { "user_session_delay_seconds": 300 }. The <code>user_session_delay_seconds</code> is the amount of seconds to wait before rebooting the device if a user is logged in. It has to be an integer in the range [0,300]. When payload is not present for reboot, 0 delay is the default. Note: This only applies if an actual user is logged in, including a Guest. If the device is in the login screen or in Kiosk mode the value is not respected and the device immediately reboots.</li><li><code>FETCH_SUPPORT_PACKET</code>: Payload is optionally a stringified JSON object in the form: {"supportPacketDetails":{ "issueCaseId": optional_support_case_id_string, "issueDescription": optional_issue_description_string, "requestedDataCollectors": [<comma-separated list of <code>data_collector_enums</code> integer values>]}}<br>The list of available <code>data_collector_enums</code> are as following: Chrome System Information (1), Crash IDs (2), Memory Details (3), UI Hierarchy (4), Additional ChromeOS Platform Logs (5), Device Event (6), Intel WiFi NICs Debug Dump (7), Touch Events (8), Lacros (9), Lacros System Information (10), ChromeOS Flex Logs (11), DBus Details (12), ChromeOS Network Routes (13), ChromeOS Shill (Connection Manager) Logs (14), Policies (15), ChromeOS System State and Logs (16), ChromeOS System Logs (17), ChromeOS Chrome User Logs (18), ChromeOS Bluetooth (19), ChromeOS Connected Input Devices (20), ChromeOS Traffic Counters (21), ChromeOS Virtual Keyboard (22), ChromeOS Network Health (23).<br>See more details in <a href="https://support.google.com/chrome/a?p=remote-log">help article</a>.</li></ul></td></tr></tbody></table>

### Response body

A response for issuing a command.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "commandId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>commandId</code></td><td><p><code>string (int64 format)</code></p><p>The unique ID of the issued command, used to retrieve the command status.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
