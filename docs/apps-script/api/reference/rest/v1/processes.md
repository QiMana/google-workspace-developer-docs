---
source: https://developers.google.com/apps-script/api/reference/rest/v1/processes
root: apps-script
fetched_at: 2026-04-23T15:18:11.464Z
---

# REST Resource: processes

## Page Summary

- A Process resource represents a single script execution started from various sources like the script editor, triggers, or the Apps Script API.
- Unlike the Operation resource, Process specifically covers executions not solely initiated via the Apps Script API.
- The Process resource includes fields such as `projectName`, `functionName`, `processType`, `processStatus`, and `userAccessLevel`.
- `ProcessType` defines how the process was started, while `ProcessStatus` indicates its current state.
- The API provides methods like `list` and `listScriptProcesses` to retrieve information about script process executions.

## Resource: Process

Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `` `Operation` `` resource, which only represents executions started via the Apps Script API.

JSON representation

```
{
  "projectName": string,
  "functionName": string,
  "processType": enum (ProcessType),
  "processStatus": enum (ProcessStatus),
  "userAccessLevel": enum (UserAccessLevel),
  "startTime": string,
  "duration": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>projectName</code></td><td><p><code>string</code></p><p>Name of the script being executed.</p></td></tr><tr><td><code>functionName</code></td><td><p><code>string</code></p><p>Name of the function the started the execution.</p></td></tr><tr><td><code>processType</code></td><td><p><code>enum (<code>ProcessType</code>)</code></p><p>The executions type.</p></td></tr><tr><td><code>processStatus</code></td><td><p><code>enum (<code>ProcessStatus</code>)</code></p><p>The executions status.</p></td></tr><tr><td><code>userAccessLevel</code></td><td><p><code>enum (<code>UserAccessLevel</code>)</code></p><p>The executing users access level to the script.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Time the execution started.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>duration</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>Duration the execution spent executing.</p><p>A duration in seconds with up to nine fractional digits, ending with ' <code>s</code> '. Example: <code>"3.5s"</code>.</p></td></tr></tbody></table>

## ProcessType

The type of process, which defines how the process was started.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PROCESS_TYPE_UNSPECIFIED</code></td><td>Unspecified type.</td></tr><tr><td><code>ADD_ON</code></td><td>The process was started from an add-on entry point.</td></tr><tr><td><code>EXECUTION_API</code></td><td>The process was started using the Apps Script API.</td></tr><tr><td><code>TIME_DRIVEN</code></td><td>The process was started from a time-based trigger.</td></tr><tr><td><code>TRIGGER</code></td><td>The process was started from an event-based trigger.</td></tr><tr><td><code>WEBAPP</code></td><td>The process was started from a web app entry point.</td></tr><tr><td><code>EDITOR</code></td><td>The process was started using the Apps Script IDE.</td></tr><tr><td><code>SIMPLE_TRIGGER</code></td><td>The process was started from a G Suite simple trigger.</td></tr><tr><td><code>MENU</code></td><td>The process was started from a G Suite menu item.</td></tr><tr><td><code>BATCH_TASK</code></td><td>The process was started as a task in a batch job.</td></tr></tbody></table>

## ProcessStatus

The process status.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PROCESS_STATUS_UNSPECIFIED</code></td><td>Unspecified status.</td></tr><tr><td><code>RUNNING</code></td><td>The process is currently running.</td></tr><tr><td><code>PAUSED</code></td><td>The process has paused.</td></tr><tr><td><code>COMPLETED</code></td><td>The process has completed.</td></tr><tr><td><code>CANCELED</code></td><td>The process was cancelled.</td></tr><tr><td><code>FAILED</code></td><td>The process failed.</td></tr><tr><td><code>TIMED_OUT</code></td><td>The process timed out.</td></tr><tr><td><code>UNKNOWN</code></td><td>Process status unknown.</td></tr><tr><td><code>DELAYED</code></td><td>The process is delayed, waiting for quota.</td></tr></tbody></table>

## UserAccessLevel

The various user access levels.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>USER_ACCESS_LEVEL_UNSPECIFIED</code></td><td>User access level unspecified</td></tr><tr><td><code>NONE</code></td><td>The user has no access.</td></tr><tr><td><code>READ</code></td><td>The user has read-only access.</td></tr><tr><td><code>WRITE</code></td><td>The user has write access.</td></tr><tr><td><code>OWNER</code></td><td>The user is an owner.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>list</h3></td><td>List information about processes made by or on behalf of a user, such as process type and current status.</td></tr><tr><td><h3>listScriptProcesses</h3></td><td>List information about a script's executed processes, such as process type and current status.</td></tr></tbody></table>
