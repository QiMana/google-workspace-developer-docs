---
source: https://developers.google.com/workspace/add-ons/release-notes
root: workspace
fetched_at: 2026-04-23T15:23:08.100Z
---

# Google Workspace add-ons release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/gsuiteaddons-release-notes.xml`.

This page contains release notes for features and updates to the add-ons. We recommend that add-ons developers periodically check this list for any new announcements.

## April 10, 2026

Feature

**Developer Preview**: You can now configure and respond to **message actions** in Google Chat. Message actions let users invoke your Chat app from the message context menu. This feature is available for both [Google Chat apps](../chat/commands.md#respond-message-action) and [Google Workspace Add-ons that extend Google Chat](./chat/commands.md#respond-message-action) through the [Developer Preview Program](../preview.md).

## March 12, 2026

Feature

**Generally Available:** The Dialogflow integrations for Google Workspace Add-ons that extend Google Chat is now generally available. These integrations let add-ons use Dialogflow CX or Dialogflow ES to understand and respond to user queries in natural language. For more information, see [Build a Dialogflow CX Chat app](./chat/quickstart-dialogflow-cx.md) or [Build a Dialogflow ES Chat app](./chat/quickstart-dialogflow-es.md).

Feature

**Generally Available:** The Google Cloud Pub/Sub integration for Google Workspace Add-ons that extend Google Chat is now generally available. This integration allows add-ons to receive and respond to events from Google Chat using Pub/Sub. For more information, see [Build a Chat app that uses Pub/Sub](./chat/quickstart-pubsub.md).

## February 03, 2026

Feature

**Developer Preview**: You can now build Google Chat apps as Google Workspace add-ons that use [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) to receive messages. This architecture is useful if your Chat app is behind a firewall. For details, see [Build a Chat app that uses Pub/Sub](./chat/quickstart-pubsub.md).

## January 14, 2026

Feature

**Generally Available**: You can now convert your interactive event-driven Chat apps to Google Workspace add-ons that extend Chat.

By converting, your Google Chat app can use the Google Workspace Add-ons framework, opening up new possibilities for integration and features within Google Chat and across Google Workspace. For example, instead of two distributions — one Google Chat app and one Google Workspace add-on — you can distribute a single Google Workspace add-on through Google Workspace Marketplace that extends Chat apps alongside other Google Workspace host applications, like Gmail, Calendar, and Docs.

To learn more, see [Convert an interactive Google Chat app to a Google Workspace add-on](./chat/convert.md).

## January 07, 2026

Feature

**Developer Preview**: You can now build Chat apps that extend Google Workspace add-ons using Apps Script's AddOnsResponseService. For details, see [AddOns Response Service](../../apps-script/reference/add-ons-response-service.md).

Other

The [Add-ons samples gallery](../../apps-script/samples.md) now lets you find samples by products, languages, sample type, and add-on type. The gallery also features the following new samples:

- Build Chat apps using [Agent2Agent agents](./chat/quickstart-a2a-agent.md), [ADK AI agents](./chat/quickstart-adk-agent.md), [Dialogflow ES](./chat/quickstart-dialogflow-es.md), and [Dialogflow CX](./chat/quickstart-dialogflow-cx.md)
- [Plan travels with an AI agent accessible across Google Workspace](./samples/travel-concierge.md)
- [Analyze and label Gmail messages with Gemini and Vertex AI](./samples/gmail-sentiment-analysis-ai.md)

## December 11, 2025

Other

**Limited Preview**: [Extending Google Workspace Studio with add-ons](./studio.md) is in limited preview.

## December 09, 2025

Feature

**Developer Preview**: You can now build [Dialogflow CX](./chat/quickstart-dialogflow-cx.md) and [Dialogflow ES](./chat/quickstart-dialogflow-es.md) Chat apps as Google Workspace add-ons.

## December 03, 2025

Feature

**Generally Available**: You can now build add-ons that extend Google Workspace Studio (previously known as Google Workspace Flows). For details, see [Extend Google Workspace Studio](./studio.md).

For ideas about what you can build, see [Introducing Google Workspace Studio: Automate everyday work with AI agents](https://workspace.google.com/blog/product-announcements/introducing-google-workspace-studio-agents-for-everyday-work) in the Google Workspace blog.

## October 27, 2025

Feature

**Gemini Alpha**: As part of the [Gemini Alpha program](https://support.google.com/a/answer/14170809), you can now build add-ons that extend Google Workspace Flows. For details, see [Extend Google Workspace Flows](./studio.md).

## July 09, 2025

Feature

**Generally available**: You can now build Google Chat apps as Google Workspace add-ons. For details, see [Extend Google Chat](./chat.md).

## June 04, 2025

Breaking

**Developer Preview:** Starting on June 16, 2025, the following default Apps Script function names for [Google Chat app triggers](./chat/build.md#triggers) will change:

- For **Added to space** triggers, the default function name will change from `onAddToSpace` to `onAddedToSpace`.
- For **Removed from space** triggers, the default function name will change from `onRemoveFromSpace` to `onRemovedFromSpace`.

If your Chat app responds to being added or removed from Chat spaces, you can address this breaking change and avoid any potential errors by doing one of the following:

- In your Apps Script project, update the name of your functions to `onAddedToSpace` and `onRemovedFromSpace`. If required, [create another versioned deployment](../../apps-script/guides/versions.md) of your Apps Script project and save the new deployment ID in the **Chat API Configuration** page in the Google Cloud console.
- In the Google Cloud console, open the **Chat API Configuration page** and in the **Triggers** section, update the function name for the **Added to space** and **Removed from space** triggers so that they use the function name that you're currently using in your Apps Script project.

To learn how to update your Chat app configuration in the Google Cloud console, see [Configure a Google Chat app](./chat/configure.md).

## May 12, 2025

Deprecated

For Google Workspace add-ons that extend Google Chat, the `invoked_function` field is no longer part of the [Common event object](./concepts/event-objects.md#common_event_object). Use the `parameters` field to determine and handle user interactions.

If your application doesn't depend on the `invoked_function` field, no action is needed.

If your application used the `invoked_function` field, [see to the documentation](./chat/collect-information.md#transfer) for an example that uses the `parameters` field to create interactive widgets.

## May 05, 2025

Feature

**Generally Available**: Granular OAuth permissions are now supported for HTTP Google Workspace add-ons. The granular OAuth consent screen lets users specify which individual OAuth scopes they want to authorize.

Keep the following dates in mind when you're building or modifying add-ons:

- HTTP Google Workspace add-ons built after May 27, 2025 must support granular consent.
- Existing add-ons have until December 1, 2025 to add support for granular consent.
- After December 1, 2025, all HTTP Google Workspace add-ons must support granular consent.

For more information about how to add support for granular consent, refer to [Build a Google Workspace add-on using HTTP endpoints](./guides/alternate-runtimes.md#manage-granular).

## April 29, 2025

Fixed

For Google Workspace add-ons that extend Google Chat, `event_time` timestamps are serialized and match the serialization of legacy Google Chat apps. You can now use the same timestamp-handling logic in both legacy Chat apps, and in your Workspace add-ons that extend Google Chat.

Previously, timestamps were serialized in the following format:

```
"eventTime": {
 "seconds": 1.742601948E9
 "nanos": 7.01868E8
}
```

After this fix, timestamps are serialized in the following format that shows the date and time:

```
"eventTime": "2025-03-24T16:31:21.165203Z"
```

[See the `Event` object in the Google Chat API](../chat/api/reference/rest/v1/Event.md).

## March 05, 2025

Feature

**Generally available**: Chat apps can respond to quick commands. To use quick commands, users select the command from the message reply area in a Chat space. To learn more, see [Respond to Google Chat app commands](./chat/commands.md).

## December 27, 2024

Announcement

When building Google Workspace Add-on user interfaces, the following functionality is now available:

- [`TextInput` Format Validation](../../apps-script/reference/card-service/text-input.md#setvalidationvalidation).
- Required inputs submission validation for `TextInput`, `DateTimePicker`, dropdown selector, and multiselect widgets. To learn more, see [`addRequiredWifget`](../../apps-script/reference/card-service/action.md#addrequiredwidgetrequiredwidget) and [`setAllWidgetsAreRequired`](../../apps-script/reference/card-service/action.md#setallwidgetsarerequiredallwidgetsarerequired).

## December 18, 2024

Breaking

**Developer Preview**: To respond to slash commands, Chat apps must now use the [`AppCommandPayload`](./chat/build.md#appcommandpayload) instead of a [`MessagePayload`](./chat/build.md#messagepayload). To learn more, see [Respond to slash commands](./chat/commands.md#respond).

Feature

**Developer Preview:** Quick commands are a new way for users to invoke and interact with a Chat app directly without typing a slash command. For details, see [Respond to quick commands in Google Chat](./chat/commands.md).

## December 13, 2024

Announcement

## December 05, 2024

Announcement

**Developer Preview**: You can now build Google Chat apps as Google Workspace Add-ons. For details, see [Extend Google Chat](./chat.md).

## October 08, 2024

Feature

**Generally Available**: Google Sheets now supports smart chips for link previews to third-party resources. To learn more, see [Preview links with smart chips](./guides/preview-links-smart-chips.md).

## August 07, 2024

Change

Google Workspace administrators can now turn on an allowlist in the admin console to control which external domains users can access through Apps Script's [URL Fetch service](../../apps-script/reference/url-fetch.md).

- If you're using a script or add-on that accesses external domains, work with your administrator to add those URLs to the admin allowlist.
- If you've published an add-on on the Google Workspace Marketplace, it might be helpful to list the URLs that admins should add to their allowlist on your Marketplace listing.

For more information, refer to the Google Workspace Admin Help article: [Allow only certain external connections for Apps Script and Sheets](https://support.google.com/a/answer/13686736).

## July 25, 2024

Feature

(**Generally Available**): Multiselect menus are now generally available for Add-ons.

For more information refer to the following:

- [`SelectionInput` for Apps Script](../../apps-script/reference/card-service/selection-input.md)
- [`SelectionInput` for HTTP runtimes](./reference/rpc/google.apps.card.v1.md#selectioninput)

Feature

(**Generally Available**): Columns are now generally available for Add-ons.

For more information refer to the following:

- [`Columns` for Apps Script](../../apps-script/reference/card-service/columns.md)
- [`Columns` for HTTP runtimes](./reference/rpc/google.apps.card.v1.md#columns)

## March 15, 2024

Change

The default property for the [`TextButtonStyle` enum](../../apps-script/reference/card-service/text-button-style.md) in the Apps Script [Card Service](../../apps-script/reference/card-service/card-service.md) has been renamed from `TEXT` to `OUTLINED` to align with the [Google Material 3 design system](https://m3.material.io/components/buttons/guidelines#3742b09f-c224-43e0-a83e-541bd29d0f05). Existing scripts that use the original default, `TEXT`, render the same as the new default, `OUTLINED`.

## March 05, 2024

Feature

**(Generally Available)**: The [`LinkPreview`](../../apps-script/reference/card-service/link-preview.md) class has been added to the Apps Script Card service. This class lets you control various aspects of link previews, including the smart chip title, the link preview title, and the link preview card.

## February 21, 2024

Feature

(**Developer Preview**): Multiselect menus are now in Developer Preview for Add-ons.

For more information refer to the following:

- [`SelectionInput` for Apps Script](../../apps-script/reference/card-service/selection-input.md)
- [`SelectionInput` for other runtimes](./reference/rpc/google.apps.card.v1.md#selectioninput)

Feature

(**Developer Preview**): Columns are now in Developer Preview for Add-ons.

For more information refer to the following:

- [`Columns` for Apps Script](../../apps-script/reference/card-service/columns.md)
- [`Columns` for other runtimes](./reference/rpc/google.apps.card.v1.md#columns)

## January 24, 2024

Feature

(**Generally Available**): Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs. This feature is gradually rolling out over the next few weeks. To use this feature, see [Create third-party resources from the @ menu](./guides/create-insert-resource-smart-chip.md).

## January 18, 2024

Feature

(**Generally available**): Google Workspace Add-ons now support link previews in Google Sheets and Slides. To learn more, see [Preview links with smart chips](./guides/preview-links-smart-chips.md).

## November 15, 2023

Feature

**([Developer Preview](../preview.md))**: Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs. To use this feature, see [Create third-party resources from the @ menu](./guides/create-insert-resource-smart-chip.md).

## November 13, 2023

Feature

**(Developer Preview)**: Available as part of the [Google Workspace Developer Preview Program](../preview.md), which grants early access to certain features.

Google Workspace Add-ons now support link previews in Google Sheets and Slides. To learn more, see [Preview links with smart chips](./guides/preview-links-smart-chips.md).

## August 15, 2023

Announcement

The user interface (UI) of Google Workspace Add-ons has been upgraded to better reflect [Material 3 guidelines (GM3)](https://m3.material.io/). The updated interface is generally available on web for Gmail, Calendar, Drive, Docs, Sheets, and Slides. New and existing Google Workspace Add-ons automatically reflect the new interface.

## July 13, 2023

Feature

You can now specify [no divider between card sections](https://developers..google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#dividerstyle).

## June 12, 2023

Feature

Third-party smart chips and link previews are now generally available. To build a Google Workspace Add-on that uses this feature, see [Preview links with smart chips](./guides/preview-links-smart-chips.md).

## December 07, 2022

Feature

**Developer Preview**: Available as part of the [Google Workspace Developer Preview Program](../preview.md), which grants early access to certain features.

You can now build third-party smart chips for Google Workspace Add-ons. To use this feature, see [Preview links with smart chips](./guides/preview-links-smart-chips.md).

## March 09, 2021

Deprecated

The [`KeyValue` class](../../apps-script/reference/card-service/key-value.md) is deprecated. Instead, use the [`DecoratedText` class](../../apps-script/reference/card-service/decorated-text.md).

## January 14, 2020

Announcement

[Google Workspace Add-ons](./concepts/types.md#g_suite_add-ons) have been launched. Google Workspace add-ons are the latest generation of add-ons, and build on the original Gmail add-ons infrastructure. Google Workspace add-ons provide a variety of new features, including:

- The ability to extend [Gmail](./gmail.md), [Calendar](./calendar.md), and [Drive](./drive.md) —all from a single add-on!
- [Homepage interfaces](./concepts/homepages.md) that provide an initial start point for the add-on and non-contextual interfaces.
- Contextual interactions that allow Google Workspace add-ons to automatically react when user [opens a Gmail message](./gmail/extending-message-ui.md), [composes a new draft message](./gmail/extending-compose-ui.md), [edits a Calendar event](./calendar/building-calendar-interfaces.md#extending_the_calendar_event_interface), or [selects files and folders in Google Drive](./drive/building-drive-interfaces.md#drive_contextual_interface_for_items_selected).
- The ability to create client-independent interfaces using Apps Script's [Card service](../../apps-script/reference/card-service/card-service.md), including new widgets like [Date and Time pickers](./concepts/widgets.md#date_and_time_pickers).
- The ability to publish Google Workspace add-ons to the [Google Workspace Marketplace](https://workspace.google.com/marketplace/).

With the launch of Google Workspace add-ons, Gmail add-ons have been deprecated. You can still use existing Gmail add-ons, but they are effectively just Google Workspace add-ons that only extend Gmail. If you have Gmail add-ons you've developed, you can [upgrade them into Google Workspace add-ons](./how-tos/upgrade-addons.md) to take advantage of the new features.

**Note**: Editor add-ons can't be upgraded into Google Workspace add-ons at this time. All editor add-ons remain functional.

## November 12, 2019

Change

The Gmail add-on `https://www.googleapis.com/auth/gmail.addons.execute` [scope](./concepts/workspace-scopes.md) is no longer required for Gmail add-ons. Apps Script and Gmail now ignore this scope if it is present in an add-on's manifest.

## November 07, 2019

Change

All add-ons are now in the G Suite Marketplace.

To streamline the add-on discovery experience for users in the G Suite Marketplace, publication of both public and private add-ons to the Chrome Web Store is deprecated. Chrome extensions continue to be presented in the Chrome Web Store and aren't affected by this change.
