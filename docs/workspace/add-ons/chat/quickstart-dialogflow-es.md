---
source: https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-es
root: workspace
fetched_at: 2026-04-23T15:22:37.718Z
---

# Build a Google Chat add-on with Dialogflow ES

This page explains how to build a Google Chat app as a Google Workspace Add-on that uses [Dialogflow ES](https://cloud.google.com/dialogflow/es/docs) to understand and respond to natural language. You can also use [Dialogflow CX](https://cloud.google.com/dialogflow/cx/docs), which has a direct integration with Google Chat, to build a Dialogflow CX Google Chat app by following the [Dialogflow CX Google Chat](./quickstart-dialogflow-cx.md) guide.

## Objectives

- Set up your environment.
- Create and deploy a Dialogflow ES agent.
- Create and deploy a Chat app powered by the Dialogflow ES agent.
- Test the Chat app.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](../../guides/create-project.md).

## Architecture

The following diagram shows the architecture of a Chat app built with Dialogflow:

![Architecture of a Chat app implemented with Dialogflow.](https://developers.google.com/static/workspace/chat/images/design-patterns/gsuite-via-dialogflow.svg)

In the preceding diagram, a user interacting with a Dialogflow Chat app has the following flow of information:

1. A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space.
2. A Dialogflow virtual agent, which resides in, receives and processes the message to produce a response.
3. Optionally, using a [Dialogflow webhook](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook), the Dialogflow agent can interact with external third-party services, such as a project management system or a ticketing tool.
4. The Dialogflow agent sends a response back to the Chat app service in Chat.
5. The response is delivered to the Chat space.

## Set up the environment

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
1. In the Google API Console, enable the Google Chat API and the Dialogflow API.
	[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com,dialogflow.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

## Create a Dialogflow ES agent

If you don't have an existing Dialogflow ES agent:

1. Go to the [Dialogflow ES Console](https://dialogflow.cloud.google.com/).
2. Click **Create Agent**.
3. Give it a name, select a default language, and time zone.
4. Associate it with your Cloud project.
5. Click **Create**.
6. Build your intents and entities as needed for your Chat app conversational flow. You can start with a greeting intent.
7. Take note of your **Project ID**.

For a detailed guide, see [Build an Agent](https://cloud.google.com/dialogflow/es/docs/quick/build-agent).

## Create a Chat app and connect it with the Dialogflow agent

After creating a Dialogflow ES agent, follow these steps to turn it into a Chat app:

1. In the Google API Console, go to Google Chat API. Search for "Google Chat API" and click **Google Chat API**, then click **Manage**.
	[Go to Chat API](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Click **Configuration** and set up the Chat app:
	1. In **App name**, enter `Dialogflow App`.
		2. In **Avatar URL**, enter `https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png`.
		3. In **Description**, enter `Responds to real human conversation`.
		4. Under **Functionality**, select **Join spaces and group conversations**.
		5. Under **Connection settings**, select **Dialogflow**.
		6. Under **Dialogflow settings**, select **Dialogflow ES**.
		7. **Make this Chat app available to specific people and groups** in your domain and enter your email address.
		8. Under **Logs**, select **Log errors to Logging**.
3. Click **Save**.

The Chat app is ready to receive and respond to messages on Chat.

## Test the Chat app

Test the Dialogflow ES Chat app by messaging it in Google Chat.

1. Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.
	[Go to Google Chat](https://chat.google.com/)
2. Click **New chat**.
3. In the **Add 1 or more people** field, type the name of your Chat app.
4. Select your Chat app from the results. A direct message opens.
5. In the new direct message with the app, type `Hello` and press `enter`.
	The Dialogflow Chat app responds by a greeting message.

### Text Responses

[Text responses](https://cloud.google.com/dialogflow/docs/intents-rich-messages#text) are sent to Google Chat as [Text messages](./send-messages.md#reply-message). With this formatting you can make text bold or italics by wrapping the text in certain (markdown light) symbols.

The text message response, visually looks the same as the Default Text Response in the Dialogflow Console. However, the raw API response will look a bit different. It also sets the platform config to *GOOGLE\_HANGOUTS*, which could be interesting when building agents for multiple integrations.

```
"fulfillmentMessages": [
{
   "text": {
   "text": [
        "This is a test."
   ]
},
  "platform": "GOOGLE_HANGOUTS"
},
```

### Cards

[Card responses](https://cloud.google.com/dialogflow/docs/intents-rich-messages#card) are sent to Google Chat as [Card messages](./collect-information.md).

### Images

[Image responses](https://cloud.google.com/dialogflow/docs/intents-rich-messages#image) are sent to Google Chat as [Google Chat Image Widgets](../../chat/add-text-image-card-dialog.md).

### Custom Payload

To send other types of Google Chat messages, you can use a [custom payload](https://docs.cloud.google.com/dialogflow/es/docs/intents-rich-messages#custom).

Google Chat Custom Payload lets you create more advanced cards. One card can have one or many sections. Each section could have a header. You can have a look into the [Google Workspace Add-on extend Chat cards reference guide](./collect-information.md), to see some of the combinations you can create with this. However, using custom payloads means that you will have to provide the JSON format.

Here is an example of a custom payload for creating a message with a card:

```
{ "hangouts": { "hostAppDataAction": { "chatDataAction": {
  "createMessageAction": { "message": { "cardsV2": [{
    "cardId": "pizza",
    "card": {
      "header": {
        "title": "Pizza Delivery Customer Support",
        "subtitle": "pizzadelivery@example.com",
        "imageUrl": "https://goo.gl/aeDtrS"
      },
      "sections": [{ "widgets": [{ "textParagraph": {
        "text": " Your pizza is here!"
      }}]}]
    }
  }]}}
}}}}
```

## Limits and considerations

- When using Google Workspace add-ons with Dialogflow, [Chat event objects](../concepts/event-objects.md#chat-event-object) have the following limitations and considerations:
	- **App Home Events:** Support for `APP_HOME` events is not yet available.
		- **Dialogflow Query Input:** The text sent as query input to the Dialogflow agent depends on the event type:
		- **`MESSAGE`:** The value of the `argumentText` field from the Chat message.
				- **`APP_COMMAND`:** The string `"APP_COMMAND_PAYLOAD"`.
				- **`ADDED_TO_SPACE`:** A default [welcome event](https://docs.cloud.google.com/dialogflow/es/docs/intents-default#welcome) is sent.
				- **`REMOVED_FROM_SPACE`:** The string `"REMOVED_FROM_SPACE_PAYLOAD"`.
				- **`CARD_CLICKED`:** The string `"BUTTON_CLICKED_PAYLOAD"`.
				- **`WIDGET_UPDATED`:** The string `"WIDGET_UPDATED_PAYLOAD"` (used for autocomplete).
		- **Full Event Payload:** The full JSON payload of the Chat interaction event is sent to Dialogflow within the `WebhookRequest.payload` field. You can access this in your Dialogflow webhook. For more information, see the [Dialogflow ES webhook request documentation](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook).
- Considerations for responding to [commands](./commands.md) and [receiving data from cards or dialogs](./collect-information.md):
	- If the Dialogflow agent needs to process the [Chat interaction event JSON payload](../concepts/event-objects.md#chat-event-object), it can do so by using a [Dialogflow webhook](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook) to inspect the custom payload in the query parameter.
		- To display a [dialog](./dialogs.md) from the Dialogflow Agent, respond with a single custom JSON payload that contains a [`RenderActions` object with the navigation `pushCard`](./dialogs.md#request).
		- To process data entered from cards, you can use a [Dialogflow webhook](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook) and respond with a single custom JSON payload containing the appropriate [action](./collect-information.md).
- [Link previews](../../chat/preview-links.md) aren't supported.
- If the Dialogflow agent responds with just one message, then the message is sent to Google Chat synchronously. If the Dialogflow agent responds with multiple messages, then all messages are sent to Chat asynchronously by calling the [`create`](../../chat/api/reference/rest/v1/spaces.messages/create.md) method on the `spaces.messages` resource in Chat API once for each message.
- When using the Dialogflow ES integration with Chat, the Dialogflow agent and the Chat app must be set up in the same Google Cloud project.

## Troubleshoot

To debug your Chat app, start by reviewing the error logs. Since this app uses Dialogflow, you have several logging and troubleshooting resources available:

- **Google Workspace add-on Logs:** Query logs for detailed information about the add-on's behavior, including its interactions with Chat. See [Query logs for Google Workspace Add-ons](../guides/query-logs.md).
- **Google Google Chat app Errors:** For general Chat app error messages and fixes, refer to [Troubleshoot and fix Chat app errors](../../chat/troubleshoot-fix-chat-errors.md).
- **Dialogflow ES Conversation History:** [History | Dialogflow ES](https://cloud.google.com/dialogflow/es/docs/history)
- **Dialogflow General Troubleshooting:** [Troubleshooting | Dialogflow](https://cloud.google.com/dialogflow/docs/support/troubleshooting)

## Clean up

To avoid incurring charges to your account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.cloud.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Related topics

- [Dialogflow CX](https://cloud.google.com/dialogflow/cx/docs) is another way to use Dialogflow with a Chat app.
