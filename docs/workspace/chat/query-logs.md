---
source: https://developers.google.com/workspace/chat/query-logs
root: workspace
fetched_at: 2026-04-23T15:25:29.784Z
---

# Query error logs for Google Chat apps

## Page Summary

- This guide explains how to use Google Cloud Logs Explorer to query error logs for your Google Chat apps.
- By querying logs, you can identify, understand the frequency of, and troubleshoot errors within your Chat app using descriptive error messages and log data.
- Error logs can be queried using a specific query within Logs Explorer and examined for details such as error messages within their JSON payload.
- When using Cloud Logging, keep in mind potential costs and that logs related to other services used by your app may also be helpful for debugging.

This guide describes how to query Chat app error logs in [Google Cloud Logs Explorer](https://cloud.google.com/logging/docs/view/logs-viewer-interface). Query logs to:

- Learn if users encounter errors.
- See how often errors occur, and which are most frequent.
- Read descriptive error messages and log data that help you fix the errors.

## Prerequisites

- A Google Workspace account with access to Google Chat.
- A Chat app. To build a Chat app, follow this [quickstart](./quickstart/gcf-app.md).
- [Turn on error logging](./turn-on-error-logging.md) for the Chat app.

## Query error logs

1. In the Google API Console, click **Menu** \> **More products** \> **Logging** \> **Logs Explorer**.
	[Go to Log Explorer](https://console.developers.google.com/logs/query)
2. If necessary, to show the query builder, turn on **Show query**.
3. For Chat app error logs, enter the following query:
	```
	severity=ERROR
	resource.type="chat.googleapis.com/Project"
	```
4. To see recent errors, click **Run query**. Or, to see errors as they occur, click **Stream logs**. Chat app error logs appear in the "Query results" pane.

To learn more about Google Cloud Logs Explorer and writing queries, see these guides in the Logs Explorer documentation:

- [View logs by using the Logs Explorer](https://cloud.google.com/logging/docs/view/logs-viewer-interface)
- [Build queries in the Logs Explorer](https://cloud.google.com/logging/docs/view/building-queries)

## Read an error message from a log

After querying an error log, you can view individual logs which consist of a JSON payload describing the log. For Chat app errors, the JSON includes the error message at `jsonPayload.error.message`. For example, in the following sample log, the error message says that an Apps Script function failed to execute:

### JSON

```
{
  "insertId": "INSERT_ID",
  "jsonPayload": {
    "@type": "type.googleapis.com/google.chat.logging.v1.ChatAppLogEntry",
    "error": {
      "code": 9,
      "message": "An Apps Script function failed to execute. To review AppsScript error logs, see \"Logging\" (https://developers.google.com/apps-script/guides/logging)."
    },
    "deployment": "DEPLOYMENT_ID"
  },
  "resource": {
    "type": "chat.googleapis.com/Project",
    "labels": {
      "project_id": "PROJECT_ID"
    }
  },
  "timestamp": "2022-12-06T05:24:18.697255Z",
  "severity": "ERROR",
  "logName": "projects/PROJECT_ID/logs/chat.googleapis.com%2Ferrors",
  "receiveTimestamp": "2022-12-06T05:24:19.207936968Z"
}
```

## Considerations

As you work with Chat app error logs in Google Cloud Logs Explorer, take note of these considerations:

- For Google Chat apps, Logs Explorer includes logs with the following severities which help troubleshoot a malfunctioning app:
	- `ERROR`
	Logs of related services can also help debug a Chat app. For example, if you deploy your Chat app using [Google Cloud Run functions](https://cloud.google.com/run/docs/functions-with-run), then check Logs Explorer for Cloud Run functions logs too.
- Error messages are always written in English.
- Cloud Logging incurs a cost. For further information on Cloud Logging pricing, refer to [Google Cloud's operations suite pricing](https://cloud.google.com/stackdriver/pricing).

## Related topics

After querying error logs, if you find errors, see the following guides for help fixing errors:

- [Learn how to fix Google Chat app errors](./troubleshoot-chat-apps.md) like "App is not responding", "Google Chat API is only available to Google Workspace users", or "Users can be excluded from spaces".
- [Learn how to fix card errors](./troubleshoot-cards.md) like card messages, dialogs, or link previews not rendering or working as expected.
- [Learn how to debug.](./debug-apps.md)
