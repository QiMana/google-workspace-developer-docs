---
source: https://developers.google.com/workspace/add-ons/chat/configure
root: workspace
fetched_at: 2026-04-23T15:22:34.574Z
---

# Configure a Google Chat app

## Page Summary

- This guide explains how to set up a Google Chat app as a Google Workspace add-on using either Apps Script or an HTTP service.
- You'll need a Google Workspace account, a Google Cloud project, and necessary API configurations to get started.
- The setup involves choosing a display name, avatar, and description for your app, and configuring its interactive features in the Google Cloud console.
- For existing Google Workspace add-ons, specific considerations apply when integrating Chat app functionalities.
- This feature is part of the Google Workspace Developer Preview Program, granting early access before public release.

This page explains how to configure and deploy a Google Chat app as a Google Workspace add-on.

To deploy and test a Google Workspace add-on that extends Chat, you must enable and configure a Chat app using the Google Chat API. The Chat API configuration settings are where you specify all the details about the Chat app, including the name, avatar, deployment, and interactive features that you want to use.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project. To create one, see [Create a Google Cloud project](../../guides/create-project.md).
- [Configure the OAuth consent screen](../../guides/configure-oauth-consent.md).
- [Enable the Google Chat API](../../guides/enable-apis.md).

## Choose a display name, avatar, and description for your Chat app

The Chat app's name, avatar, and description are displayed to users in the Chat UI. To interact with Chat apps, users see or use this information in the following ways:

- @mention the Chat app to add it to a space or send it a message.
- Find and start a direct message with the Chat app. In the **Apps** menu, direct messages display the Chat app's name and avatar.
- From the compose bar, users can browse Chat apps and see their name, avatar, and description.

Before you configure a Chat app, you must prepare the following information:

| Field | Description | Format |
| --- | --- | --- |
| App name | The display name for the Chat app. | Up to 25 alphanumeric characters |
| Avatar URL | The image that displays as your Chat app's avatar. | An HTTPS URL pointing to a square graphics image (PNG or JPEG). Recommended size is 256 by 256 pixels or more. |
| Description | A brief description of the purpose of the Chat app. | Up to 40 alphanumeric characters |

In the following section, you specify this information in the configurations settings in the Chat API.

## Configure your Chat app in the Google Cloud console

In the Google Cloud console, you configure the details about your Chat app that appear to users in Chat, including a display name, avatar, and description. These details only appear in Chat. To publish your Chat app to the Marketplace, you must also specify the details that appear in your Chat app's [Marketplace listing](../../marketplace/create-listing.md).

When you have your Chat app details, open your Cloud project and configure the Chat API:

1. In the Google Cloud console, go to the Chat API page and click the **Configuration** page:
	[Go to the Chat API Configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under **Application info**, fill out the **App name**, **Avatar URL**, and **Description** fields.
3. Under **Interactive features**, click the **Enable interactive features** to the on position and complete the following:
	1. Under **Functionality**, select **Join spaces and group conversations** to make your Chat app available to install and use.
		By default, users can install and message with the Chat app in a dedicated space between the user and Chat app. Users can also add and interact with the Chat app in spaces with multiple people.
		2. Under **Connection settings**, select the architecture that you want to use to receive [event objects from Chat](./build.md#event-objects):
		- To use an HTTP service, select **HTTP endpoint URL** and provide a URL.
				- To use a Google Apps Script project, select **Apps Script** and provide a [deployment ID](../../../apps-script/concepts/deployments.md) for the project.
		3. Optional: To receive event objects to more than one endpoint or function, go to **Connection settings** \> **Triggers** and provide or update the callback functions for the following [Chat triggers](./build.md#triggers):
		- **Added to space**: A user adds the Chat app to a group conversation or space, or installs the Chat app for 1:1 messages.
				- **Message**: A user sends a message to the Chat app. For example, sends a direct message to the Chat app or @mentions the Chat app in a space with multiple people.
				- **Removed from space**: A user uninstalls or removes the Chat app from a space.
				- **App command**: A user uses a quick command or slash command from the Chat app.
		4. Optional: Add other interactive features such as [quick commands](./commands.md), [slash commands](./commands.md), or [link previews](./preview-links.md).
		5. Under **Visibility**, specify your email so that you can [install and test the Chat app](../../chat/test-interactive-features.md) before you publish to the Google Workspace Marketplace. You can specify up to five individuals, or one or more Google Groups from your Google Workspace organization.
4. Optional: Under **Logs**, select the **Log errors to Logging** checkbox to use Google Cloud Logging. For more information, see [Query error logs for Chat apps](../../chat/query-logs.md) in the Chat API documentation.
5. Click **Save**.

After you save the configuration, anyone that you specified in the Chat API's **Visibility** setting can install, test, or use the Chat app. To start testing and debugging your Chat app, see [Test interactive features for Google Chat apps](../../chat/test-interactive-features.md) in the Chat API documentation.

## Considerations for existing Google Workspace add-ons

Chat apps require a different configuration compared to Google Workspace add-ons that extend other Google Workspace applications. If your add-on extends other Google Workspace applications, consider the following requirements for configuring the Chat app:

- Both individuals and Google Workspace administrators must be able to install your add-on from the Marketplace. You configure these installation settings in the Google Workspace Marketplace SDK.
- Chat apps don't use the name and logo that you configure for other Google Workspace applications in the `addons.common` object of the [manifest](../concepts/workspace-manifests.md).
- For add-ons that are published to the Google Workspace Marketplace, you can't save a draft of any changes to the [Google Chat API configuration settings](./configure.md). After you update and save the Chat API configuration settings, the updated Chat app is available to all existing users. To update your Marketplace listing, you can [create a draft](../../marketplace/manage-app-listing.md#draft-app-listing) before submitting any changes.
- If you built your add-on using Apps Script:
	- You must use the same Apps Script deployment ID that you use for the rest of your add-on configuration.
		- You can't use the Apps Script editor to install [test deployments](../how-tos/testing-workspace-addons.md#install_an_unpublished) in Chat. Instead, you must [install them directly from the Chat UI](../../chat/test-interactive-features.md).
- If you built your add-on using an HTTP service, omit any Chat app configuration details in the manifest and deployments that you create using the Google Workspace add-ons API. The HTTP deployments that you specify in the Google Workspace Marketplace SDK are only used for other Google Workspace applications.

## Related topics

- To manage access to the Chat API, see [Configure the Google Chat API](../../chat/configure-chat-api.md#grant-access) in the Google Chat API documentation.
- [Test interactive features for Google Chat apps](../../chat/test-interactive-features.md)
