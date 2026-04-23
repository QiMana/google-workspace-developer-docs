---
source: https://developers.google.com/workspace/gmail/release-notes
root: workspace
fetched_at: 2026-04-23T15:30:07.094Z
---

# Gmail API release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/gmail-release-notes.xml`.

This page contains release notes for features and updates to the Gmail API. We recommend that Gmail API developers periodically check this list for any new announcements.

## April 22, 2026

Feature

**[Developer Preview](https://developers.google.com/workspace/preview)**: The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for Gmail is now available in developer preview. MCP is an open protocol that enables seamless integration between AI applications and Gmail. By configuring the Gmail MCP server, you enable AI agents to securely read your emails and take actions, such as creating drafts and labeling messages.

For example, you can ask your AI agent: *"What did Ariel say in her last email about our marketing plan?"*

To get started with the Gmail MCP server, see the following documentation:

- [Set up the Gmail MCP server](https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server)
- [Gmail MCP tool reference](https://developers.google.com/workspace/gmail/api/reference/mcp)

To find more available MCP servers, see [Model Context Protocol (MCP) servers in Google Workspace](https://developers.google.com/workspace/guides/configure-mcp-servers).

## February 03, 2026

Feature

**Generally Available**: The [Gmail Postmaster Tools API](https://developers.google.com/workspace/gmail/postmaster) v2 is now generally available. The API provides access to the full Postmaster Tools dataset—including compliance status data—and includes enhancements like flexible querying with `queryDomainStats` and support for batch operations. For details on how to use the v2 API, see the updated [Postmaster Tools API documentation](https://developers.google.com/workspace/gmail/postmaster).

## December 02, 2025

Feature

**Developer Preview**: You can now access data in Gmail Postmaster Tools v2 using the v2beta API. The new API provides access to the full Postmaster Tools dataset, including compliance status data.

The v2beta API also includes enhancements such as the `queryDomainStats` method for flexible querying, and adds support for batch operations.

To learn how to use the API, see the [Postmaster Tools API documentation](https://developers.google.com/workspace/gmail/postmaster).

## September 10, 2025

Feature

You can now use annotations to create Deal Cards in the Promotions tab. To get started, see the [overview of Deal Cards](https://developers.google.com/workspace/gmail/promotab/overview#deal-card).

## May 20, 2025

Feature

For Google Workspace organizations that use hardware key encryption, the Gmail API supports using smart cards for client-side encryption (CSE). For details, see the reference documentation for [`CseIdentity`](https://developers.google.com/gmail/api/reference/rest/v1/users.settings.cse.identities) and [`CseKeyPair`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.cse.keypairs) resources.

## November 12, 2019

Change

The `messages.import` method uses a more performant backend implementation. The new version is API-compatible with the previous implementation and all clients automatically started using the new behavior as of a few weeks ago. The new backend supports parallel `message.import` calls efficiently and clients can now import messages in parallel for a user to achieve higher migration throughput. The quota cost of the `message.import` method has been decreased to reflect the new performance.

## May 05, 2017

Deprecated

Deprecated [Review Action](https://developers.google.com/gmail/markup/reference/review-action), which sunsets on July 15th, 2017.

## February 07, 2017

Feature

The [`history.list` method](https://developers.google.com/gmail/api/v1/reference/users/history/list) supports filtering history records by type.

## November 30, 2016

Feature

The [`messages.batchModify` method](https://developers.google.com/gmail/api/v1/reference/users/messages/batchModify) lets you modify labels on multiple messages by message IDs, in a single batch operation.

## November 01, 2016

Change

The Gmail API supports a `gmail.metadata` scope. This scope gives developers access to a user's mailbox including history records, labels, and email headers, but not email body's or attachments.

## July 01, 2016

Change

The `q` request parameter for the [`drafts.list` method](https://developers.google.com/gmail/api/v1/reference/users/drafts/list) restricts results to the messages matching the specified query.

## February 25, 2016

Feature

The [`messages.batchDelete` method](https://developers.google.com/gmail/api/v1/reference/users/messages/batchDelete) lets you delete multiple messages, by message IDs, in a single batch operation.

## January 13, 2016

Feature

The [`drafts.list` method](https://developers.google.com/gmail/api/v1/reference/users/drafts/list) has an `includeSpamTrash` option, which determines if the response should include drafts with the `SPAM` or `TRASH` label applied. The default is currently set to `true` for this option.

## June 22, 2015

Feature

To determine the full state of an email before and after a change, the [`history.list` method](https://developers.google.com/gmail/api/v1/reference/users/history/list) returns all current `Message.labelIds` as part of the response in `messagesAdded`, `messagesDeleted`, `labelsAdded`, and `labelsRemoved`.

## June 18, 2015

Feature

Added a [`Message.internalDate` field](https://developers.google.com/gmail/api/v1/reference/users/messages) that exposes the message's creation timestamp in the mailbox.

## May 29, 2015

Feature

You can now send [push notifications](https://developers.google.com/gmail/api/guides/push) on mailbox updates, providing real-time server notification without the need for constant polling. With [Cloud Pub/Sub](https://cloud.google.com/pubsub/overview), you can now use webhooks—for example, to receive callbacks when updates happen. Additionally, you can filter these notifications to specific Gmail labels.

## March 31, 2015

Change

New scopes for labels and inserting messages to better protect users and accommodate apps that don't need full mailbox data access:

- `https://www.googleapis.com/auth/gmail.insert`: Allows the [`messages.insert`](https://developers.google.com/gmail/api/v1/reference/users/messages/insert) and [`messages.import`](https://developers.google.com/gmail/api/v1/reference/users/messages/import) methods only.
- `https://www.googleapis.com/auth/gmail.labels`: Allows all [label operations](https://developers.google.com/gmail/api/v1/reference/users/labels).

## March 18, 2015

Feature

The [`messages.insert` method](https://developers.google.com/gmail/api/v1/reference/users/messages/insert) now supports the `deleted` request parameter and lets you set `SENT` and `DRAFT` labels.

## February 25, 2015

Feature

The [`history.list` method](https://developers.google.com/gmail/api/reference/rest/v1/users.history/list) now provides details of the change type in each history record. For example, using the `messagesAdded`, `messagesDeleted`, `labelsAdded`, or `labelsDeleted` enums, it's possible to easily tell how a message was changed and typically avoids the need for additional calls to synchronize your client.

## February 11, 2015

Feature

The [`messages.import` method](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/import) now supports the following parameters to better support `Email Migration` use cases:

- `neverMarkSpam`
- `processForCalendar`
- `deleted`

## January 23, 2015

Feature

You can now specify `message.labelIds` on [`messages.import` requests](https://developers.google.com/gmail/api/v1/reference/users/messages/import) to automatically apply the given labels to the message.

Breaking

The default behavior no longer automatically adds `INBOX` and `UNREAD` labels to [`messages.import` emails](https://developers.google.com/gmail/api/v1/reference/users/messages/import). When `message.labelIds` isn't specified, imported mail is only visible in All Mail. If you want `INBOX` or `UNREAD` labels applied, specify them in the `message.labelIds` field.

## January 15, 2015

Change

Increased the default [per-user quotas](https://developers.google.com/gmail/api/v1/reference/quota) from 25 units/user/second to 250 units/user/second and adjusted some method costs slightly.

## October 22, 2014

Feature

You can now specify the return format for the [`threads.get` method](https://developers.google.com/gmail/api/v1/reference/users/threads/get). The available formats are `full`, `metadata`, and `minimal`, similar to the `messages.get` method. The raw format isn't allowed for the `threads.get` to avoid unexpectedly large amounts of data being returned.

## October 16, 2014

Feature

The [`getProfile` method](https://developers.google.com/gmail/api/v1/reference/users/getProfile) provides mailbox-wide information like current history ID and total message and thread counts.

## October 06, 2014

Feature

Added new fields to the `Labels` resource to simplify counting how many messages have a given label applied:

- `messagesTotal`
- `messagesUnread`
- `threadsTotal`
- `threadsUnread`

Feature

Added a new [`IMPORTANT` label](https://developers.google.com/gmail/api/guides/labels) to match functionality with the Gmail UI.

## September 25, 2014

Change

The `messages.insert` method defaults to using `receivedTime` and the `messages.import` method defaults to using `dateHeader`.

## September 08, 2014

Change

When you use the [`messages.get` method](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/get), you can request the metadata return format to return only the email headers and metadata such as identifiers and labels.

## September 02, 2014

Feature

You can specify the `internalDateSource` for both the [`messages.insert`](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/insert) and [`messages.import`](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/import) methods.

## July 11, 2014

Change

Quota costs for all methods in the API have been reduced by a factor of 10. For example, if a method previously cost 150 quota units, it now costs 15. For a complete list of API method costs, see the [per-method quota usage chart](https://developers.google.com/gmail/api/reference/quota#per-method_quota_usage).

## June 25, 2014

Announcement

The Gmail API is publicly available!

## October 28, 2013

Feature

The [Review Action](https://developers.google.com/gmail/markup/reference/review-action) is out of preview, and now available to all users.

## October 03, 2013

Feature

The Schema Validator tool in [Testing Your Schemas](https://developers.google.com/gmail/markup/testing-your-schema) has been replaced with the new [Email Markup Tester](https://www.google.com/webmasters/markup-tester/).

## July 23, 2013

Feature

It is now possible to use schemas to define [Orders](https://developers.google.com/gmail/markup/reference/order), [Parcel Deliveries](https://developers.google.com/gmail/markup/reference/parcel-delivery), and the [TrackAction](https://developers.google.com/gmail/markup/reference/go-to-action#track_action) to let users track packages being delivered.

## July 11, 2013

Feature

The [RSVP Action](https://developers.google.com/gmail/markup/reference/rsvp-action) is now enabled for all emails sent by Google Calendar.
