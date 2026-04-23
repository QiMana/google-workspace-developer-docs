---
source: https://developers.google.com/workspace/tasks/params
root: workspace
fetched_at: 2026-04-23T15:31:57.540Z
---

# Use Google Tasks Parameters

In addition to the standard query parameters that can be used with most Google APIs, there is a set of Tasks parameters.

Request parameters that apply only to specific operations in the Google Tasks API are summarized in the following table: All parameter values must be URL encoded.

| Parameter | Meaning | Notes | Applicability |
| --- | --- | --- | --- |
| `completedMax` | Upper bound for a task's completion date (as an RFC 3339 timestamp) to filter by. | - Default: `completedMax=2031-01-01` - Use the RFC 3339 timestamp format. For example: `2010-08-09T10:57:00.000-08:00` | - Retrieving tasks |
| `completedMin` | Lower bound for a task's completion date (as an RFC 3339 timestamp) to filter by. | - Default: `completedMin=1970-01-01` - Use the RFC 3339 timestamp format. For example: `2010-08-09T10:57:00.000-08:00` | - Retrieving tasks |
| `dueMax` | Upper bound for a task's due date (as an RFC 3339 timestamp) to filter by. | - Default: `dueMax=2031-01-01` - Use the RFC 3339 timestamp format. For example: `2010-08-09T10:57:00.000-08:00` | - Retrieving tasks |
| `dueMin` | Lower bound for a task's due date (as an RFC 3339 timestamp) to filter by. | - Default: `dueMin=1970-01-01` - Use the RFC 3339 timestamp format. For example: `2010-08-09T10:57:00.000-08:00` | - Retrieving tasks |
| `maxResults` | The maximum number of elements to return with this request. | - Default: `maxResults=20` - Maximum allowable value: `maxResults=100` | - Retrieving a user's task lists - Retrieving tasks |
| `pageToken` | Token specifying the result page to return. | - The default is to return the first page. | - Retrieving a user's task lists - Retrieving tasks |
| `parent` | Specify the task's parent task ID. | - No parameter indicates an insertion or a move to the top level of the task list. | - Creating a task - Ordering a task |
| `previous` | Specify the task's previous task ID. | - No parameter indicates an insertion or a move to the first position in the sublist. | - Creating a task - Ordering a task |
| `showCompleted` | Specify whether or not to show completed tasks. | - Default: `showCompleted=true` | - Retrieving tasks |
| `showDeleted` | Specify whether or not to show deleted tasks. | - Default: `showDeleted=false` | - Retrieving tasks |
| `showHidden` | Specify whether or not to show hidden tasks. | - Default: `showHidden=true` | - Retrieving tasks |
| `updatedMin` | Lower bound for a task's last modification time (as an RFC 3339 timestamp) to filter by. | - Use the RFC 3339 timestamp format. For example: `2010-08-09T10:57:00.000-08:00Z` - The default is not to filter by last modification time. | - Retrieving tasks |
