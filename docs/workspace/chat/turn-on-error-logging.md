---
source: https://developers.google.com/workspace/chat/turn-on-error-logging
root: workspace
fetched_at: 2026-04-23T15:25:33.856Z
---

# Turn on error logging for Google Chat apps

## Page Summary

- This guide explains how to enable error logging for your Google Chat app, allowing you to view and analyze errors in Google Cloud Logs Explorer.
- To enable error logging, you need a Google Workspace account, a Chat app, and the Cloud Logging API enabled in your Google Cloud project.
- When enabled, Chat app errors are logged to Cloud Logging, which may incur costs; you can disable logging after troubleshooting.
- You can turn off error logging to avoid incurring costs from Cloud Logging, but you can still query past logs.

This page describes how to turn on Chat app error logging, so that you can query and view error logs in [Google Cloud Logs Explorer](https://cloud.google.com/logging/docs/view/logs-viewer-interface) while testing your Chat app.

## Prerequisites

To turn on Chat app error logging, you need:

- A Google Workspace account with access to Google Chat.
- A Chat app. To build a Chat app, follow this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).

## Set up the environment

Before querying Chat app error logs, you must enable the Cloud Logging API in the Chat app's Google Cloud project.

1. In the Google API Console, turn on the Cloud Logging API. Click **Menu** \> **APIs & Services** \> **Library**. \> search for **Cloud Logging API** \> click **Cloud Logging API** \> **Enable**.
	[Enable the API](https://console.developers.google.com/marketplace/product/google/logging.googleapis.com)

## Turn on error logging

Turn on error logging and when a Chat app returns an error, it logs it to Cloud logging. Because Cloud Logging [incurs a cost](https://cloud.google.com/stackdriver/pricing), you might want to [turn off error logging](#turn-off-error-logging) after you finish troubleshooting.

1. In the Google API Console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**.
	[Go to Chat API configuration](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under Functionality, select **Log errors to Cloud Logging**.
3. Click **Save**.

Now, whenever the Chat app returns an error, the error gets logged to Cloud Logging.

## Turn off error logging

Because Cloud Logging [incurs a cost](https://cloud.google.com/stackdriver/pricing), you might want to turn off error logging.

1. In the Google API Console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**:
	[Go to Chat API configuration](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under Functionality, deselect **Log errors to Cloud Logging**.
3. Click **Save**.

Now, whenever the Chat app returns an error, the error doesn't get logged to Cloud Logging. You can continue to query past error logs using Logs Explorer.

## Related topics

After turning on error logging, you're ready to [query error logs](https://developers.google.com/workspace/chat/query-logs) for your Chat app.
