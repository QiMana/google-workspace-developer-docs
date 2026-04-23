---
source: https://developers.google.com/workspace/add-ons/chat
root: workspace
fetched_at: 2026-04-23T15:22:33.114Z
---

# Extend Google Chat

## Page Summary

- Extend Google Chat with add-ons to preview links, automate tasks, and receive alerts.
- Google Chat add-ons function as Chat apps, enabling interactions like sending messages, responding to commands, and opening dialogs.
- To build a Chat add-on, developers can utilize Apps Script or HTTP services, configure the app through the Chat API, and design interfaces using triggers and actions.
- Certain features like Dialogflow, Card Service, custom authorization cards, and add-on homepages are currently unavailable for Chat add-ons.
- Existing add-ons need specific configurations, including enabling the Chat API, allowing individual and admin installations, and using the Chat API's visibility setting for deployment.

This page provides an overview of how to build Google Workspace add-ons that extend Google Chat.

Google Workspace add-ons that extend Chat can help users do any of the following:

- Preview links from Chat messages, and take action without leaving the conversation.
- Automate or perform tasks across Google Workspace applications.
- Receive alerts or notifications about external tools or services.

## How Google Workspace add-ons work in Chat

In Chat, add-ons appear to users as Google Chat apps. To interact with users, Chat apps can do the following:

- [Send messages](./chat/send-messages.md) that contain text, cards, and interactive UI elements.
- Respond to [quick commands](./chat/commands.md).
- Respond to [slash commands](./chat/commands.md).
- Open [dialogs](./chat/dialogs.md) to help users complete multi-step processes, like filling in form data.
- [Preview links](./chat/preview-links.md) in messages by attaching cards with helpful information that let users take action directly from the conversation.

## Get started

To start building Google Workspace add-ons that work in Chat, see the following documentation:

- Try a quickstart to build a basic Chat app using [Google Apps Script](./chat/quickstart-apps-script.md) or an [HTTP service](./chat/quickstart-http.md).
- [Configure a Chat app](./chat/configure.md) and its interactive features using the Chat API.
- Learn about the ways you can [build Chat interfaces](./chat/build.md) using add-on triggers, actions, and event objects.

## Limitations and known issues

The following Chat and add-on features are unavailable:

- [AppSheet](https://support.google.com/appsheet/answer/12923581) Chat app architecture is unavailable. Instead, build the Chat app using an [HTTP service](./chat/quickstart-http.md), [Apps Script](./chat/quickstart-apps-script.md), [Dialogflow ES](./chat/quickstart-dialogflow-es.md) or [Dialogflow CX](./chat/quickstart-dialogflow-cx.md), or [Pub/Sub](https://developers.google.com/workspace/add-ons/chat/quickstart-pub-sub).
- Custom authorization cards. To authenticate and grant authorization to your service from Chat, the Chat app must return a [basic authorization card](./guides/connect-third-party-service.md#basic-auth-card).
- [Add-on homepages](./concepts/homepages.md) in the Chat sidebar. If you've configured a [homepage trigger](./concepts/workspace-triggers.md) for your add-on, the homepage only appears in the sidebar of the other Google Workspace applications that your add-on extends.
- [Chat app homepages](../chat/send-app-home-card-message.md), which appear in the **Home** tab of direct messages with the Chat app.

If you're updating an existing Google Workspace add-on, consider the following [configuration requirements](./chat/configure.md#considerations) for Chat apps:

- The [Google Workspace Marketplace installation settings](../marketplace/enable-configure-sdk.md#installation-settings) must permit both individuals and Google Workspace administrators to install the add-on.
- Any common configuration settings in the add-on's [manifest](./concepts/workspace-manifests.md) (`addons.common`) are ignored in Chat. To configure the add-on to work in Chat, you must enable and configure the Chat API. For steps, see [Configure a Google Chat app](./chat/configure.md).
- To deploy and test an add-on in Chat, you must use the Chat API's **Visibility** setting. Any visibility or testing settings that you've configured in the Google Workspace Marketplace SDK are ignored. To deploy a test version of the add-on in Chat, see [Test interactive features for Google Chat apps](../chat/test-interactive-features.md) in the Chat API documentation.
- If your add-ons is published to the Google Workspace Marketplace, you can't save a draft of any changes to the [Google Chat API configuration settings](./chat/configure.md). When you update Chat API configuration settings, the updated Chat app is immediately available to all existing users. To update your Marketplace listing, you can [create a draft](../marketplace/manage-app-listing.md#draft-app-listing) before submitting any changes.

## Related topics

- [Google Chat API documentation overview](../chat/overview.md)
- Try a sample:
	- [Schedule meetings from Google Chat](./samples/tutorial-schedule-meetings.md)
		- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
		- [Plan travels with an AI agent accessible across Google Workspace](./samples/travel-concierge.md)
		- [Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/ge-gws-agents)
		- [Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/vertexai-gws-agents)
