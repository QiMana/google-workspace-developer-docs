---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands
root: workspace
fetched_at: 2026-04-23T15:23:35.695Z
---

# REST Resource: customer.devices.chromeos.commands

## Resource: DirectoryChromeosdevicesCommand

Information regarding a command that was issued to a device.

JSON representation

```
{
  "commandId": string,
  "type": enum (CommandType),
  "issueTime": string,
  "state": enum (State),
  "commandExpireTime": string,
  "commandResult": {
    object (DirectoryChromeosdevicesCommandResult)
  },
  "payload": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>commandId</code></td><td><p><code>string (int64 format)</code></p><p>Unique ID of a device command.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>CommandType</code>)</code></p><p>The type of the command.</p></td></tr><tr><td><code>issueTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The timestamp when the command was issued by the admin.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Indicates the command state.</p></td></tr><tr><td><code>commandExpireTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>commandResult</code></td><td><p><code>object (<code>DirectoryChromeosdevicesCommandResult</code>)</code></p><p>The result of the command execution.</p></td></tr><tr><td><code>payload</code></td><td><p><code>string</code></p><p>The payload that the command specified, if any.</p></td></tr></tbody></table>

## CommandType

Establishes the type of command the device must execute.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COMMAND_TYPE_UNSPECIFIED</code></td><td>The command type was unspecified.</td></tr><tr><td><code>REBOOT</code></td><td>Reboot the device. Can be issued to Kiosk and managed guest session devices, and regular devices running ChromeOS version 113 or later.</td></tr><tr><td><code>TAKE_A_SCREENSHOT</code></td><td>Take a screenshot of the device. Only available if the device is in Kiosk Mode.</td></tr><tr><td><code>SET_VOLUME</code></td><td>Set the volume of the device. Can only be issued to Kiosk and managed guest session devices.</td></tr><tr><td><code>WIPE_USERS</code></td><td>Wipe all the users off of the device. Executing this command in the device will remove all user profile data, but it will keep device policy and enrollment.</td></tr><tr><td><code>REMOTE_POWERWASH</code></td><td>Wipes the device by performing a power wash. Executing this command in the device will remove all data including user policies, device policies and enrollment policies. Warning: This will revert the device back to a factory state with no enrollment unless the device is subject to forced or auto enrollment. Use with caution, as this is an irreversible action!</td></tr><tr><td><code>DEVICE_START_CRD_SESSION</code></td><td>Starts a Chrome Remote Desktop session.</td></tr><tr><td><code>CAPTURE_LOGS</code></td><td>Capture the system logs of a kiosk device. The logs can be downloaded from the downloadUrl link present in <code>deviceFiles</code> field of <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices">chromeosdevices</a></td></tr><tr><td><code>FETCH_CRD_AVAILABILITY_INFO</code></td><td>Fetches available type(s) of Chrome Remote Desktop sessions (private or shared) that can be used to remotely connect to the device.</td></tr><tr><td><code>FETCH_SUPPORT_PACKET</code></td><td>Fetch support packet from a device remotely. Support packet is a zip archive that contains various system logs and debug data from a ChromeOS device. The support packet can be downloaded from the downloadURL link present in the <code>deviceFiles</code> field of <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices"><code>chromeosdevices</code></a></td></tr></tbody></table>

## State

Represents the state of the issued command.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>The command status was unspecified.</td></tr><tr><td><code>PENDING</code></td><td>An unexpired command not yet sent to the client.</td></tr><tr><td><code>EXPIRED</code></td><td>The command didn't get executed by the client within the expected time.</td></tr><tr><td><code>CANCELLED</code></td><td>The command is cancelled by admin while in PENDING.</td></tr><tr><td><code>SENT_TO_CLIENT</code></td><td>The command has been sent to the client.</td></tr><tr><td><code>ACKED_BY_CLIENT</code></td><td>The client has responded that it received the command.</td></tr><tr><td><code>EXECUTED_BY_CLIENT</code></td><td>The client has (un)successfully executed the command.</td></tr></tbody></table>

## DirectoryChromeosdevicesCommandResult

The result of executing a command.

JSON representation

```
{
  "result": enum (CommandResultType),
  "executeTime": string,
  "errorMessage": string,
  "commandResultPayload": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>result</code></td><td><p><code>enum (<code>CommandResultType</code>)</code></p><p>The result of the command.</p></td></tr><tr><td><code>executeTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time at which the command was executed or failed to execute.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>The error message with a short explanation as to why the command failed. Only present if the command failed.</p></td></tr><tr><td><code>commandResultPayload</code></td><td><p><code>string</code></p><p>The payload for the command result. The following commands respond with a payload:</p><ul><li><code>DEVICE_START_CRD_SESSION</code>: Payload is a stringified JSON object in the form: { "url": url }. The provided URL links to the Chrome Remote Desktop session and requires authentication using only the <code>email</code> associated with the command's issuance.</li><li><code>FETCH_CRD_AVAILABILITY_INFO</code>: Payload is a stringified JSON object in the form: { "deviceIdleTimeInSeconds": number, "userSessionType": string, "remoteSupportAvailability": string, "remoteAccessAvailability": string }. The "remoteSupportAvailability" field is set to "AVAILABLE" if <code>shared</code> CRD session to the device is available. The "remoteAccessAvailability" field is set to "AVAILABLE" if <code>private</code> CRD session to the device is available.</li></ul></td></tr></tbody></table>

## CommandResultType

The type of the command result.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COMMAND_RESULT_TYPE_UNSPECIFIED</code></td><td>The command result was unspecified.</td></tr><tr><td><code>IGNORED</code></td><td>The command was ignored as obsolete.</td></tr><tr><td><code>FAILURE</code></td><td>The command could not be executed successfully.</td></tr><tr><td><code>SUCCESS</code></td><td>The command was successfully executed.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets command data a specific command issued to the device.</td></tr></tbody></table>
