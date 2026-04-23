---
source: https://developers.google.com/workspace/gmail/api/guides/sync
root: workspace
fetched_at: 2026-04-23T15:28:51.898Z
---

# Synchronize clients with Gmail

This document explains how to synchronize clients using the Gmail API.

Keeping your client synchronized with Gmail is important for most app scenarios. There are two synchronization methods: [full synchronization](#full-sync) and [partial synchronization](#partial-sync). Full synchronization is required the first time your client connects to Gmail and in some other rare scenarios. If your client has recently synchronized, partial synchronization is a lighter-weight alternative to a full sync. You can also use [push notifications](https://developers.google.com/workspace/gmail/api/guides/push) to trigger partial synchronization in real-time and only when necessary, thereby avoiding needless polling.

## Full synchronization

The first time your app connects to Gmail, or if partial synchronization isn't available, you must perform a full synchronization. In a full sync operation, your app should retrieve and store as many of the most recent messages or threads as are necessary for your purpose. For example, if your app displays a list of recent messages, you may want to retrieve and cache enough messages to allow for a responsive interface if the user scrolls beyond the first several messages displayed.

Follow these steps to perform a full sync:

1. Call the [`messages.list`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/list) method to retrieve the first page of message IDs.
2. Create a [batch request](https://developers.google.com/workspace/gmail/api/guides/batch) of [`messages.get`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get) method requests for each of the messages returned by the list request.
	If your app displays message contents, you should set the [`Format`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/Format) to `format=FULL` or `format=RAW` the first time your app retrieves a message and cache the results to avoid additional retrieval operations. If you're retrieving a previously cached message, you should use `format=MINIMAL` to reduce the size of the response as only the `labelIds` may change.
3. Merge the updates into your cached results. Your app should store the [`historyId`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages#Message.FIELDS.history_id) of the most recent message (the first message in the `list` response) for future partial synchronizations.

## Partial synchronization

If your app has synchronized recently, you can perform a partial sync using the [`history.list`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) method to return all history records newer than the `startHistoryId` query parameter you must specify in your request.

The `startHistoryId` query parameter must be set to the `historyId` of a recent message. To retrieve the `historyId` of a recent message, use the [`messages.get`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get) or [`messages.list`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/list) methods. You can also set the value during a full or partial sync for future use.

The returned [`History`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list#History) object includes message IDs and the type of change for each message, such as message added or labels modified, since the time of the provided `startHistoryId`.

## Limitations

History records are typically available for at least one week and often longer. However, the time period for which records are available may be significantly less and records may sometimes be unavailable in rare cases.

If the `startHistoryId` supplied by your client is outside the available range of history records, the Gmail API returns an `HTTP 404` error response. In this case, your client must perform a [full sync](#full-sync).
