---
source: https://developers.google.com/workspace/events/release-notes
root: workspace
fetched_at: 2026-04-23T15:28:39.032Z
---

# Google Workspace Events API release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/workspaceevents-release-notes.xml`.

This page contains release notes for features and updates to the Google Workspace Events API. We recommend that Google Workspace Events API developers periodically check this list for any new announcements.

## March 31, 2026

Feature

**Generally available**: Chat apps can now call the following methods in the Google Workspace Events API using [app authentication with administrator approval](../chat/authenticate-authorize-chat-app.md) with `chat.app.*` authorization scopes:

- [Subscribe to Chat space events](./guides/create-subscription.md#app-auth)
- [Update or renew a subscription](./guides/update-subscription.md#update-app-auth)
- [Reactivate a subscription](./guides/reactivate-subscription.md#reactivate-app-auth)

## September 18, 2025

Feature

**Developer Preview**: Chat apps can now call the following methods in the Google Workspace Events API using [app authentication with administrator approval](../chat/authenticate-authorize-chat-app.md) with `chat.app.*` authorization scopes:

- [Subscribe to Chat space events](./guides/create-subscription.md#app-auth)
- [Update or renew a subscription](./guides/update-subscription.md#update-app-auth)
- [Reactivate a subscription](./guides/reactivate-subscription.md#reactivate-app-auth)

## July 07, 2025

Feature

**(Developer Preview)**: The Google Workspace Events API now supports subscriptions to Google Drive. The API supports the following types of events:

- A file is added to a folder or shared drive.
- A file is moved to a folder or shared drive.
- A file is edited or a new revision is uploaded.
- A file is trashed or removed from the trash.
- An access proposal is created or resolved on a file.

For details, see [Subscribe to Google Drive events](./guides/events-drive.md).

## June 02, 2025

Feature

The following app-specific fields on the `space.message` resource are now populated when the `created` and `updated` Google Chat events are sent:

- `threadKey`
- `clientAssignedMessageId`
- `slashCommand`
- `MatchedUrl`

[See the `space.message` resource](../chat/api/reference/rest/v1/spaces.messages.md).

[See the list of Google Chat event types](./guides/events-chat.md#event-types).

## March 13, 2025

Announcement

The Google Workspace Events API `v1beta` endpoint will be decommissioned for Google Chat and Google Meet events on April 30, 2025. To subscribe to Chat or Meet events, use the generally available [`v1` endpoint](./reference/rest/v1.md).

## September 17, 2024

Feature

**(Generally available)** - For event subscriptions, you can now use the `eventTypes` field in the `updateMask` parameter of the [`subscriptions.patch`](./reference/rest/v1/subscriptions/patch.md) method to change the event types to receive for the target resource.

## June 24, 2024

Feature

Google Chat apps can now create a subscription to receive events for all Chat spaces where the user is a member. To target all spaces for a user, set the subscription's `targetResource` field to `//chat.googleapis.com/spaces/-`. To learn more, see [Subscribe to Google Chat events](./guides/events-chat.md#supported_target_resources).

## May 02, 2024

Announcement

To subscribe to events using Apps Script, you can now use the Advanced Google Workspace Events service. For details, see the [Apps Script reference documentation](../../apps-script/advanced/events.md).

## March 28, 2024

Announcement

**(Generally available)**: Subscriptions to Google Chat spaces and users are now generally available. To learn more, see [Subscribe to Google Chat events](./guides/events-chat.md).

Announcement

Events about deleted messages are now supported (Event type: `google.workspace.chat.message.v1.deleted`).

## February 15, 2024

Announcement

**(Generally available)**: The Google Workspace Events API is now generally available and supports subscriptions to Google Meet events. To learn more, see [Subscribe to Google Meet events](./guides/events-meet.md) and the [`v1` reference documentation](./reference/rest/v1.md).

## January 22, 2024

Feature

**(Developer Preview)**: The Google Workspace Events API supports the [`get()` method](./reference/rest/v1beta/operations/get.md) on the `Operations` resource.

## January 19, 2024

Feature

**(Developer Preview):** The Google Workspace Events API now sends lifecycle events when subscriptions expire. For details, see [Subscription expired events](./guides/events-lifecycle.md#expired).

## January 17, 2024

Feature

**(Developer Preview)**: The Google Workspace Events API now supports subscriptions to Google Chat users. Subscriptions to Chat users support the following event types:

- New memberships
- Updated memberships
- Deleted memberships
- Multiple memberships have changed

For details, see [Subscribe to Google Chat events](./guides/events-chat.md).

## November 02, 2023

Announcement

**(Developer Preview)**: The Google Workspace Events API now supports subscriptions to Google Meet meeting spaces and users. The API supports the following types of events:

- A conference starts or ends.
- A participant joins or leaves a conference.
- A recording is generated.
- A transcript is generated.

To learn more, see [Subscribe to Google Meet events](./guides/events-meet.md).

## October 30, 2023

Feature

**(Developer Preview)**: Subscriptions to Google Chat spaces now support the following event types:

- New reactions
- Removed reactions
- Multiple reactions have changed.

For details, see [Subscribe to Google Chat events](./guides/events-chat.md).

## October 03, 2023

Announcement

**(Developer Preview):** The Google Workspace Events API is now available to members of the Developer Preview Program. The API supports subscribing to Google Chat spaces for the following types of events:

- New messages
- Updated messages
- New members
- Updated members
- Removed members
- Updated space
- Deleted space

To learn more, see the [Google Workspace Events API overview](../events.md).
