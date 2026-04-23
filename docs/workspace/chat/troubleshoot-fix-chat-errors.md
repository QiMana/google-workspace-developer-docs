---
source: https://developers.google.com/workspace/chat/troubleshoot-fix-chat-errors
root: workspace
fetched_at: 2026-04-23T15:25:34.433Z
---

# Troubleshoot overview

## Page Summary

- This page provides guidance on viewing, debugging, and resolving errors in Google Chat apps, cards, and dialogs.
- Google Chat errors can manifest as error messages, unexpected app behavior, or lack of response, while card errors might result in partial or complete rendering failures.
- Developers can leverage error logging, log querying, and troubleshooting resources to identify and fix errors in their Chat apps, cards, and dialogs.
- Specific guides are available to address common Chat app errors, card and dialog issues, and enable step-by-step debugging for comprehensive troubleshooting.

This page helps you view, debug, and fix Chat apps, card, and dialog errors.

## How errors appear

When a Google Chat app returns an error, it manifests like this:

- A message like "App is not responding.", "Something went wrong.", or "Unable to process your request" displays.
- The app doesn't work as intended.
- No message displays, and the app doesn't respond.

When a [card](./create-messages.md#create) returns an error, it manifests like this:

- Part of a card, like a widget or component, doesn't appear or renders in an unexpected way.
- The entire card doesn't appear.
- A dialog closes, doesn't open, or doesn't load.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.

## Debug and troubleshoot Google Chat errors

1. [Turn on error logging](./turn-on-error-logging.md) so your Google Chat app logs errors if and when they occur.
2. [Query error logs for Google Chat](./query-logs.md) to read error logs, see how often errors occur, and read descriptive error messages and log data that help you fix the errors.
3. Learn how to fix common errors:
	- [Fix Google Chat app errors](./troubleshoot-chat-apps.md) like "App is not responding", "Google Chat API is only available to Google Workspace users", or "Users can be excluded from spaces".
		- [Fix card and dialog errors](./troubleshoot-cards.md) like card messages, dialogs, or link previews not rendering or working as expected.
4. [Debug your Chat app](./debug-apps.md) to execute it step by step.
