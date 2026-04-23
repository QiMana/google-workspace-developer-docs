---
source: https://developers.google.com/workspace/add-ons/guides/query-logs
root: workspace
fetched_at: 2026-04-23T15:22:57.124Z
---

# Query error logs for Google Workspace add-ons

## Page Summary

- Google Workspace add-ons log errors to Cloud Logs Explorer, providing detailed error messages for troubleshooting.
- To view these logs, enable the Cloud Logging API, publish your add-on, and then query the logs using the provided instructions and query.
- You can control error logging behavior through the `exceptionLogging` setting in your add-on's manifest file.
- Remember that only errors are logged, messages are in English, and Cloud Logging usage may incur costs.

When a published Google Workspace add-on returns an error, the add-on interface returns a generic message of "Something went wrong when executing the add-on." However, these errors are logged to [Cloud Logs Explorer](https://cloud.google.com/logging/docs/view/logs-viewer-interface).

This guide describes how to query add-on error logs in Cloud Logs Explorer, so you can:

- Learn if users encounter errors.
- See how often errors occur, and which are most frequent.
- Read descriptive error messages that help you fix them.

## Prerequisites

Before querying add-on error logs:

- Enable the "Cloud Logging API" in the add-on's Google Cloud project. To enable an API, refer to [Create a Cloud project and enable the API](https://developers.google.com/workspace/guides/create-project).
- Publish the add-on on Google Workspace Marketplace. To publish an add-on on the Marketplace, refer to [Publish an app](https://developers.google.com/workspace/marketplace/how-to-publish).

## Query add-on error logs

To get logs for an add-on:

1. Open the [Google Cloud console](https://console.cloud.google.com/).
2. Next to "Google Cloud Platform," click the Down arrow and select the add-on project.
3. In the top-left corner, click Menu > **Logging**. The Logs Explorer opens.
4. For add-on error logs, in the query builder, enter the following query:
	```
	severity>=ERROR
	protoPayload.serviceName="gsuiteaddons.googleapis.com"
	```
5. To see recent errors, click **Run query**. Or, to see errors as they occur, click **Stream logs**. Add-ons error logs appear in the "Query results" pane.

For further information about Cloud Logs Explorer and writing queries, refer to the following:

- [Use the Logs Explorer](https://cloud.google.com/logging/docs/view/logs-viewer-interface)
- [Build queries](https://cloud.google.com/logging/docs/view/building-queries)

## Enable or disable error logging

By default, error logging is enabled. When error logging is enabled, the [manifest file](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests) has the following:

```
"exceptionLogging": "STACKDRIVER",
```

To disable error logging, replace `"exceptionLogging": "STACKDRIVER",` with the following line in the manifest file:

```
// Disable error logging
"exceptionLogging": "NONE"
```

To re-enable error logging, replace `"exceptionLogging": "NONE"` with `"exceptionLogging": "STACKDRIVER",`.

## Considerations

As you work with add-on error logs in Cloud Logs Explorer, take note of these considerations:

- Add-ons only log errors in Logs Explorer. Other log types are not recorded.
- Error messages are always written in English.
- Cloud Logging incurs a cost. For further information about Cloud Logging pricing, refer to [Google Cloud Observability pricing](https://cloud.google.com/stackdriver/pricing).
