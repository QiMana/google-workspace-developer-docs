---
source: https://developers.google.com/apps-script/api/how-tos/view-processes
root: apps-script
fetched_at: 2026-04-23T15:18:09.164Z
---

# View process information

## Page Summary

- The Apps Script API provides methods to list your script processes.
- The `processes.list` method returns metadata for processes you have run.
- The `processes.listScriptProcesses` method returns metadata for processes run from a specific script project.
- Both methods can be filtered to narrow down the results.

This section provides an overview of the Google Apps Script API methods you can use to list your script [processes](https://developers.google.com/apps-script/api/concepts/processes).

<table><tbody><tr><th colspan="2"><strong>API method overview</strong></th></tr><tr><td><strong>List your processes</strong></td><td><p><a href="https://developers.google.com/apps-script/api/reference/rest/v1/processes/list">processes.list</a></p><p><strong>Results</strong>: Returns an array of <a href="https://developers.google.com/apps-script/api/reference/rest/v1/processes#Process"><code>Process</code></a> objects, each containing the metadata for a process you have run. This information includes the process type, status, start time, and duration.</p><p><strong>Options</strong>: You can define and provide a <a href="https://developers.google.com/apps-script/api/reference/rest/v1/processes/list#ListUserProcessesFilter"><code>ListUserProcessFilter</code></a> object to filter the process list. Only processes that match **all** of the filter conditions are returned.</p></td></tr><tr><td><strong>List a project's processes</strong></td><td><p><a href="https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses">processes.listScriptProcesses</a></p><p><strong>Results</strong>: Returns an array of <a href="https://developers.google.com/apps-script/api/reference/rest/v1/processes#Process"><code>Process</code></a> objects, each containing the metadata for a process run from a specifed script project. This information includes the process type, status, start time, and duration.</p><p><strong>Options</strong>: You can define and provide a <a href="https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses#ListScriptProcessesFilter"><code>ListScriptProcessesFilter</code></a> object to filter the process list. Only processes that match **all** of the filter conditions are returned.</p></td></tr></tbody></table>
