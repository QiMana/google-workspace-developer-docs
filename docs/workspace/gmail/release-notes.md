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

**[Developer Preview](../preview.md)**: The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for Gmail is now available in developer preview. MCP is an open protocol that enables seamless integration between AI applications and Gmail. By configuring the Gmail MCP server, you enable AI agents to securely read your emails and take actions, such as creating drafts and labeling messages.

For example, you can ask your AI agent: *"What did Ariel say in her last email about our marketing plan?"*

To get started with the Gmail MCP server, see the following documentation:

- [Set up the Gmail MCP server](./api/guides/configure-mcp-server.md)
- [Gmail MCP tool reference](./api/reference/mcp.md)

To find more available MCP servers, see [Model Context Protocol (MCP) servers in Google Workspace](../guides/configure-mcp-servers.md).

## February 03, 2026

Feature

**Generally Available**: The [Gmail Postmaster Tools API](./postmaster.md) v2 is now generally available. The API provides access to the full Postmaster Tools dataset—including compliance status data—and includes enhancements like flexible querying with `queryDomainStats` and support for batch operations. For details on how to use the v2 API, see the updated [Postmaster Tools API documentation](./postmaster.md).

## December 02, 2025

Feature

**Developer Preview**: You can now access data in Gmail Postmaster Tools v2 using the v2beta API. The new API provides access to the full Postmaster Tools dataset, including compliance status data.

The v2beta API also includes enhancements such as the `queryDomainStats` method for flexible querying, and adds support for batch operations.

To learn how to use the API, see the [Postmaster Tools API documentation](./postmaster.md).

## September 10, 2025

Feature

You can now use annotations to create Deal Cards in the Promotions tab. To get started, see the [overview of Deal Cards](./promotab/overview.md#deal-card).

## May 20, 2025

Feature

For Google Workspace organizations that use hardware key encryption, the Gmail API supports using smart cards for client-side encryption (CSE). For details, see the reference documentation for [`CseIdentity`](./api/reference/rest/v1/users.settings.cse.identities.md) and [`CseKeyPair`](./api/reference/rest/v1/users.settings.cse.keypairs.md) resources.

## November 12, 2019

Change

The `messages.import` method uses a more performant backend implementation. The new version is API-compatible with the previous implementation and all clients automatically started using the new behavior as of a few weeks ago. The new backend supports parallel `message.import` calls efficiently and clients can now import messages in parallel for a user to achieve higher migration throughput. The quota cost of the `message.import` method has been decreased to reflect the new performance.

## May 05, 2017

Deprecated

Deprecated [Review Action](./markup/reference.md), which sunsets on July 15th, 2017.

## February 07, 2017

Feature

The [`history.list` method](./api/reference/rest/v1/users.history/list.md) supports filtering history records by type.

## November 30, 2016

Feature

The [`messages.batchModify` method](./api/reference/rest/v1/users.messages/batchModify.md) lets you modify labels on multiple messages by message IDs, in a single batch operation.

## November 01, 2016

Change

The Gmail API supports a `gmail.metadata` scope. This scope gives developers access to a user's mailbox including history records, labels, and email headers, but not email body's or attachments.

## July 01, 2016

Change

The `q` request parameter for the [`drafts.list` method](./api/reference/rest/v1/users.drafts/list.md) restricts results to the messages matching the specified query.

## February 25, 2016

Feature

The [`messages.batchDelete` method](./api/reference/rest/v1/users.messages/batchDelete.md) lets you delete multiple messages, by message IDs, in a single batch operation.

## January 13, 2016

Feature

The [`drafts.list` method](./api/reference/rest/v1/users.drafts/list.md) has an `includeSpamTrash` option, which determines if the response should include drafts with the `SPAM` or `TRASH` label applied. The default is currently set to `true` for this option.

## June 22, 2015

Feature

To determine the full state of an email before and after a change, the [`history.list` method](./api/reference/rest/v1/users.history/list.md) returns all current `Message.labelIds` as part of the response in `messagesAdded`, `messagesDeleted`, `labelsAdded`, and `labelsRemoved`.

## June 18, 2015

Feature

Added a [`Message.internalDate` field](./api/reference/rest/v1/users.messages.md) that exposes the message's creation timestamp in the mailbox.

## May 29, 2015

Feature

You can now send [push notifications](./api/guides/push.md) on mailbox updates, providing real-time server notification without the need for constant polling. With [Cloud Pub/Sub](https://cloud.google.com/pubsub/overview), you can now use webhooks—for example, to receive callbacks when updates happen. Additionally, you can filter these notifications to specific Gmail labels.

## March 31, 2015

Change

New scopes for labels and inserting messages to better protect users and accommodate apps that don't need full mailbox data access:

- `https://www.googleapis.com/auth/gmail.insert`: Allows the [`messages.insert`](./api/reference/rest/v1/users.messages/insert.md) and [`messages.import`](./api/reference/rest/v1/users.messages/import.md) methods only.
- `https://www.googleapis.com/auth/gmail.labels`: Allows all [label operations](./api/reference/rest/v1/users.labels.md).

## March 18, 2015

Feature

The [`messages.insert` method](./api/reference/rest/v1/users.messages/insert.md) now supports the `deleted` request parameter and lets you set `SENT` and `DRAFT` labels.

## February 25, 2015

Feature

The [`history.list` method](./api/reference/rest/v1/users.history/list.md) now provides details of the change type in each history record. For example, using the `messagesAdded`, `messagesDeleted`, `labelsAdded`, or `labelsDeleted` enums, it's possible to easily tell how a message was changed and typically avoids the need for additional calls to synchronize your client.

## February 11, 2015

Feature

The [`messages.import` method](./api/reference/rest/v1/users.messages/import.md) now supports the following parameters to better support `Email Migration` use cases:

- `neverMarkSpam`
- `processForCalendar`
- `deleted`

## January 23, 2015

Feature

You can now specify `message.labelIds` on [`messages.import` requests](./api/reference/rest/v1/users.messages/import.md) to automatically apply the given labels to the message.

Breaking

The default behavior no longer automatically adds `INBOX` and `UNREAD` labels to [`messages.import` emails](./api/reference/rest/v1/users.messages/import.md). When `message.labelIds` isn't specified, imported mail is only visible in All Mail. If you want `INBOX` or `UNREAD` labels applied, specify them in the `message.labelIds` field.

## January 15, 2015

Change

Increased the default [per-user quotas](./api/reference/quota.md) from 25 units/user/second to 250 units/user/second and adjusted some method costs slightly.

## October 22, 2014

Feature

You can now specify the return format for the [`threads.get` method](./api/reference/rest/v1/users.threads/get.md). The available formats are `full`, `metadata`, and `minimal`, similar to the `messages.get` method. The raw format isn't allowed for the `threads.get` to avoid unexpectedly large amounts of data being returned.

## October 16, 2014

Feature

The [`getProfile` method](./api/reference/rest/v1/users/getProfile.md) provides mailbox-wide information like current history ID and total message and thread counts.

## October 06, 2014

Feature

Added new fields to the `Labels` resource to simplify counting how many messages have a given label applied:

- `messagesTotal`
- `messagesUnread`
- `threadsTotal`
- `threadsUnread`

Feature

Added a new [`IMPORTANT` label](./api/guides/labels.md) to match functionality with the Gmail UI.

## September 25, 2014

Change

The `messages.insert` method defaults to using `receivedTime` and the `messages.import` method defaults to using `dateHeader`.

## September 08, 2014

Change

When you use the [`messages.get` method](./api/reference/rest/v1/users.messages/get.md), you can request the metadata return format to return only the email headers and metadata such as identifiers and labels.

## September 02, 2014

Feature

You can specify the `internalDateSource` for both the [`messages.insert`](./api/reference/rest/v1/users.messages/insert.md) and [`messages.import`](./api/reference/rest/v1/users.messages/import.md) methods.

## July 11, 2014

Change

Quota costs for all methods in the API have been reduced by a factor of 10. For example, if a method previously cost 150 quota units, it now costs 15. For a complete list of API method costs, see the [per-method quota usage chart](./api/reference/quota.md#per-method_quota_usage).

## June 25, 2014

Announcement

The Gmail API is publicly available!

## October 28, 2013

Feature

The [Review Action](./markup/reference.md) is out of preview, and now available to all users.

## October 03, 2013

Feature

The Schema Validator tool in [Testing Your Schemas](./markup/testing-your-schema.md) has been replaced with the new [Email Markup Tester](https://www.google.com/webmasters/markup-tester/).

## July 23, 2013

Feature

It is now possible to use schemas to define [Orders](./markup/reference/order.md), [Parcel Deliveries](./markup/reference/parcel-delivery.md), and the [TrackAction](./markup/reference/go-to-action.md#track_action) to let users track packages being delivered.

## July 11, 2013

Feature

The [RSVP Action](./markup/reference.md) is now enabled for all emails sent by Google Calendar.
