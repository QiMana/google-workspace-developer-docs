---
source: https://developers.google.com/workspace/chat/quickstart/gcf-app
root: workspace
fetched_at: 2026-04-23T15:25:33.599Z
---

# Build an HTTP Google Chat app

## Page Summary

- This guide demonstrates building a basic Google Chat app that responds to user messages with their avatar and name using Cloud Functions.
- The app follows an HTTP-based architecture where user messages trigger HTTP requests to a Cloud Function, which processes the request and sends a response back to Chat.
- Prerequisites include a Google Workspace account and a Google Cloud project with billing enabled.
- Setup involves enabling APIs, creating and deploying a Cloud Function, and authorizing Chat.
- After deployment, you can test the app by sending messages in Chat, and it will respond with a card displaying your avatar and name.

This page explains how to create an HTTP Chat app. There are different ways to implement this architecture. On Google Cloud, you can use Cloud Run and App Engine. In this quickstart, you write and deploy a [Cloud Run function](https://cloud.google.com/run/docs/functions-with-run) that the Chat app uses to respond to a user's message.

With this architecture, you configure Chat to integrate with Google Cloud or an on-premises server by using HTTP, as shown in the following diagram:

![Architecture of a Chat app using a web service in an on-premises server.](https://developers.google.com/static/workspace/chat/images/design-patterns/public-webservice.svg)

In the preceding diagram, a user interacting with an HTTP Chat app has the following flow of information:

1. A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space.
2. An HTTP request is sent to a web server that is either a cloud or on-premises system that contains the Chat app logic.
3. Optionally, the Chat app logic can integrate with Google Workspace services (like Calendar and Sheets), other Google services (like Maps, YouTube, and Vertex AI), or other web services (like a project management system or ticketing tool).
4. The web server sends an HTTP response back to the Chat app service in Chat.
5. The response is delivered to the user.
6. Optionally, the Chat app can call the Chat API to asynchronously post messages or perform other operations.

This architecture provides you the flexibility to use existing libraries and components that already exist in your system because these Chat apps can be designed using different programming languages.

## Objectives

- Set up your environment.
- Create and deploy a Cloud Run function.
- Publish the app to Chat.
- Test the app.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](../../guides/create-project.md).

## Set up the environment

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google API Console, enable the Google Chat API, Cloud Build API, Cloud Functions API, Cloud Pub/Sub API, Cloud Logging API, Artifact Registry API, and Cloud Run API.
	[Enable the APIs](https://console.developers.google.com/flows/enableapi?apiid=chat.googleapis.com,cloudbuild.googleapis.com,cloudfunctions.googleapis.com,pubsub.googleapis.com,logging.googleapis.com,artifactregistry.googleapis.com,run.googleapis.com)

## Create and deploy a Cloud Run function

Create and deploy a Cloud Run function that generates a Chat card with the sender's display name and avatar image. When the Chat app receives a message, it runs the function and responds with the card.

To create and deploy the function for your Chat app, complete the following steps:

### Node.js

1. In the Google API Console, go to the Cloud Run page:
	[Go to Cloud Run](https://console.developers.google.com/run)
	Make sure that the project for your Chat app is selected.
2. Click **Write a function**.
3. On the **Create service** page, set up your function:
	1. In the **Service name** field, enter `quickstartchatapp`.
		2. In the **Region** list, select a region.
		3. In the **Runtime** list, select the most recent version of Node.js.
		4. In the **Authentication** section, select **Require authentication**.
		5. Click **Create**, and wait for Cloud Run to create the service. The console redirects you to the **Source** tab.
4. In the **Source** tab:
	1. In **Entry point**, delete the default text and enter `avatarApp`.
		2. Replace the contents of `index.js` with the following code:
		```
		const functions = require('@google-cloud/functions-framework');
		// Command IDs (configure these in Google Chat API)
		const ABOUT_COMMAND_ID = 1; // ID for the "/about" slash command
		const HELP_COMMAND_ID = 2; // ID for the "Help" quick command
		/**
		 * Google Cloud Function that handles HTTP requests from Google Chat.
		 *
		 * @param {Object} req - The HTTP request object sent from Google Chat.
		 * @param {Object} res - The HTTP response object.
		 */
		functions.http('avatarApp', (req, res) => {
		  const event = req.body;
		  if (event.appCommandMetadata) {
		    handleAppCommands(event, res);
		  } else {
		    handleRegularMessage(event, res);
		  }
		});
		/**
		 * Handles slash and quick commands.
		 *
		 * @param {Object} event - The Google Chat event.
		 * @param {Object} res - The HTTP response object.
		 */
		function handleAppCommands(event, res) {
		  const {appCommandId, appCommandType} = event.appCommandMetadata;
		  switch (appCommandId) {
		    case ABOUT_COMMAND_ID:
		      return res.send({
		        privateMessageViewer: event.user,
		        text: 'The Avatar app replies to Google Chat messages.'
		      });
		    case HELP_COMMAND_ID:
		      return res.send({
		        privateMessageViewer: event.user,
		        text: 'The Avatar app replies to Google Chat messages.'
		      });
		  }
		}
		/**
		 * Handles regular messages (not commands).
		 *
		 * @param {Object} event - The Google Chat event.
		 * @param {Object} res - The HTTP response object.
		 */
		function handleRegularMessage(event, res) {
		  const messageData = createMessage(event.user);
		  res.send(messageData);
		}
		/**
		 * Creates a card message with the user's avatar.
		 *
		 * @param {Object} user - The user who sent the message.
		 * @param {string} user.displayName - The user's display name.
		 * @param {string} user.avatarUrl - The URL of the user's avatar.
		 * @return {Object} - The card message object.
		 */
		function createMessage({displayName, avatarUrl}) {
		  return {
		    text: 'Here\'s your avatar',
		    cardsV2: [{
		      cardId: 'avatarCard',
		      card: {
		        name: 'Avatar Card',
		        header: {
		          title: \`Hello ${displayName}!\`,
		        },
		        sections: [{
		          widgets: [
		            {textParagraph: {text: 'Your avatar picture:'}},
		            {image: {imageUrl: avatarUrl}},
		          ],
		        }],
		      },
		    }],
		  };
		}
		```
		3. Click **Save and redeploy**.

### Python

1. In the Google API Console, go to the Cloud Run page:
	[Go to Cloud Run](https://console.developers.google.com/run)
	Make sure that the project for your Chat app is selected.
2. Click **Write a function**.
3. On the **Create service** page, set up your function:
	1. In the **Service name** field, enter `quickstartchatapp`.
		2. In the **Region** list, select a region.
		3. In the **Runtime** list, select the most recent version of Python.
		4. In the **Authentication** section, select **Require authentication**.
		5. Click **Create**, and wait for Cloud Run to create the service. The console redirects you to the **Source** tab.
4. In the **Source** tab:
	1. In **Entry point**, delete the default text and enter `avatar_app`.
		2. Replace the contents of `main.py` with the following code:
		```
		from typing import Any, Mapping
		import flask
		import functions_framework
		# Command IDs (configure these in Google Chat API)
		ABOUT_COMMAND_ID = 1  # ID for the "/about" slash command
		HELP_COMMAND_ID = 2  # ID for the "Help" quick command
		@functions_framework.http
		def avatar_app(req: flask.Request) -> Mapping[str, Any]:
		    """Google Cloud Function that handles HTTP requests from Google Chat.
		    Args:
		        flask.Request: the request
		    Returns:
		        Mapping[str, Any]: the response
		    """
		    event = req.get_json(silent=True)
		    if event and "appCommandMetadata" in event:
		        return handle_app_commands(event)
		    else:
		        return handle_regular_message(event)
		def handle_app_commands(event: Mapping[str, Any]) -> Mapping[str, Any]:
		    """Handles slash and quick commands.
		    Args:
		        Mapping[str, Any] event: The Google Chat event.
		    Returns:
		        Mapping[str, Any]: the response
		    """
		    app_command_id = event["appCommandMetadata"]["appCommandId"]
		    if app_command_id == ABOUT_COMMAND_ID:
		        return {
		            "privateMessageViewer": event["user"],
		            "text": "The Avatar app replies to Google Chat messages.",
		        }
		    elif app_command_id == HELP_COMMAND_ID:
		        return {
		            "privateMessageViewer": event["user"],
		            "text": "The Avatar app replies to Google Chat messages.",
		        }
		    return {}
		def handle_regular_message(event: Mapping[str, Any]) -> Mapping[str, Any]:
		    """Handles regular messages (not commands).
		    Args:
		        Mapping[str, Any] event: The Google Chat event.
		    Returns:
		        Mapping[str, Any]: the response
		    """
		    if not event or "user" not in event:
		        return "Invalid request."
		    message_data = create_message(event["user"])
		    return message_data
		def create_message(user: Mapping[str, Any]) -> Mapping[str, Any]:
		    """Creates a card message with the user's avatar.
		    Args:
		        Mapping[str, Any] user: The user who sent the message.
		    Returns:
		        Mapping[str, Any]: a card with the user's avatar.
		    """
		    display_name = user.get("displayName", "")
		    avatar_url = user.get("avatarUrl", "")
		    return {
		        "text": "Here's your avatar",
		        "cardsV2": [
		            {
		                "cardId": "avatarCard",
		                "card": {
		                    "name": "Avatar Card",
		                    "header": {"title": f"Hello {display_name}!"},
		                    "sections": [
		                        {
		                            "widgets": [
		                                {"textParagraph": {"text": "Your avatar picture:"}},
		                                {"image": {"imageUrl": avatar_url}},
		                            ]
		                        }
		                    ],
		                },
		            }
		        ],
		    }
		```
		3. Click **Save and redeploy**.

### Java

1. In the Google API Console, go to the Cloud Run page:
	[Go to Cloud Run](https://console.developers.google.com/run)
	Make sure that the project for your Chat app is selected.
2. Click **Write a function**.
3. On the **Create service** page, set up your function:
	1. In the **Service name** field, enter `quickstartchatapp`.
		2. In the **Region** list, select a region.
		3. In the **Runtime** list, select the most recent version of Java.
		4. In the **Authentication** section, select **Require authentication**.
		5. Click **Create**, and wait for Cloud Run to create the service. The console redirects you to the **Source** tab.
4. In the **Source** tab:
	1. In **Entry point**, delete the default text and enter `App`.
		2. Rename `src/main/java/com/example/Example.java` to `src/main/java/AvatarApp.java`.
		3. Replace the contents of `AvatarApp.java` with the following code:
		```
		import com.google.api.services.chat.v1.model.CardWithId;
		import com.google.api.services.chat.v1.model.GoogleAppsCardV1Card;
		import com.google.api.services.chat.v1.model.GoogleAppsCardV1CardHeader;
		import com.google.api.services.chat.v1.model.GoogleAppsCardV1Image;
		import com.google.api.services.chat.v1.model.GoogleAppsCardV1Section;
		import com.google.api.services.chat.v1.model.GoogleAppsCardV1TextParagraph;
		import com.google.api.services.chat.v1.model.GoogleAppsCardV1Widget;
		import com.google.api.services.chat.v1.model.Message;
		import com.google.api.services.chat.v1.model.User;
		import com.google.cloud.functions.HttpFunction;
		import com.google.cloud.functions.HttpRequest;
		import com.google.cloud.functions.HttpResponse;
		import com.google.gson.Gson;
		import com.google.gson.JsonObject;
		import java.util.List;
		public class AvatarApp implements HttpFunction {
		  private static final Gson gson = new Gson();
		  // Command IDs (configure these in Google Chat API)
		  private static final int ABOUT_COMMAND_ID = 1; // ID for the "/about" slash command
		  private static final int HELP_COMMAND_ID = 2; // ID for the "Help" quick command
		  @Override
		  public void service(HttpRequest request, HttpResponse response) throws Exception {
		    JsonObject event = gson.fromJson(request.getReader(), JsonObject.class);
		    if (event.has("appCommandMetadata")) {
		      handleAppCommands(event, response);
		    } else {
		      handleRegularMessage(event, response);
		    }
		  }
		  /**
		   * Handles slash and quick commands.
		   *
		   * @param event    The Google Chat event.
		   * @param response The HTTP response object.
		   */
		  private void handleAppCommands(JsonObject event, HttpResponse response) throws Exception {
		    int appCommandId = event.getAsJsonObject("appCommandMetadata").get("appCommandId").getAsInt();
		    switch (appCommandId) {
		      case ABOUT_COMMAND_ID:
		        Message aboutMessage = new Message();
		        aboutMessage.setText("The Avatar app replies to Google Chat messages.");
		        aboutMessage.setPrivateMessageViewer(new User()
		            .setName(event.getAsJsonObject("user").get("name").getAsString()));
		        response.getWriter().write(gson.toJson(aboutMessage));
		        return;
		      case HELP_COMMAND_ID:
		        Message helpMessage = new Message();
		        helpMessage.setText("The Avatar app replies to Google Chat messages.");
		        helpMessage.setPrivateMessageViewer(new User()
		            .setName(event.getAsJsonObject("user").get("name").getAsString()));
		        response.getWriter().write(gson.toJson(helpMessage));
		        return;
		    }
		  }
		  /**
		   * Handles regular messages (not commands).
		   *
		   * @param event    The Google Chat event.
		   * @param response The HTTP response object.
		   */
		  private void handleRegularMessage(JsonObject event, HttpResponse response) throws Exception {
		    if (!event.has("user")) {
		      response.getWriter().write("Invalid request.");
		      return;
		    }
		    JsonObject user = event.getAsJsonObject("user");
		    String displayName = user.has("displayName") ? user.get("displayName").getAsString() : "";
		    String avatarUrl = user.has("avatarUrl") ? user.get("avatarUrl").getAsString() : "";
		    Message message = createMessage(displayName, avatarUrl);
		    response.getWriter().write(gson.toJson(message));
		  }
		  /**
		   * Creates a card message with the user's avatar.
		   *
		   * @param displayName The user's display name.
		   * @param avatarUrl   The URL of the user's avatar.
		   * @return The card message object.
		   */
		  private Message createMessage(String displayName, String avatarUrl) {
		    return new Message()
		        .setText("Here's your avatar")
		        .setCardsV2(List.of(new CardWithId()
		            .setCardId("avatarCard")
		            .setCard(new GoogleAppsCardV1Card()
		                .setName("Avatar Card")
		                .setHeader(new GoogleAppsCardV1CardHeader()
		                    .setTitle(String.format("Hello %s!", displayName)))
		                .setSections(List.of(new GoogleAppsCardV1Section().setWidgets(List.of(
		                    new GoogleAppsCardV1Widget()
		                        .setTextParagraph(new GoogleAppsCardV1TextParagraph()
		                            .setText("Your avatar picture:")),
		                    new GoogleAppsCardV1Widget()
		                        .setImage(new GoogleAppsCardV1Image().setImageUrl(avatarUrl)))))))));
		  }
		}
		```
		4. Replace the contents of `pom.xml` with the following code:
		```
		<project xmlns="http://maven.apache.org/POM/4.0.0"
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>gcfv2</groupId>
		  <artifactId>avatar-app</artifactId>
		  <version>0.0.1</version>
		  <name>Avatar App</name>
		  <properties>
		    <maven.compiler.release>21</maven.compiler.release>
		  </properties>
		  <dependencies>
		    <dependency>
		      <groupId>com.google.cloud.functions</groupId>
		      <artifactId>functions-framework-api</artifactId>
		      <version>1.1.4</version>
		    </dependency>
		    <!-- https://mvnrepository.com/artifact/com.google.code.gson/gson -->
		    <dependency>
		      <groupId>com.google.code.gson</groupId>
		      <artifactId>gson</artifactId>
		      <version>2.12.1</version>
		    </dependency>
		    <!-- https://mvnrepository.com/artifact/com.google.apis/google-api-services-chat -->
		    <dependency>
		      <groupId>com.google.apis</groupId>
		      <artifactId>google-api-services-chat</artifactId>
		      <version>v1-rev20250116-2.0.0</version>
		    </dependency>
		  </dependencies>
		</project>
		```
		5. Click **Save and redeploy**.

### Authorize Google Chat to invoke your function

To authorize Google Chat to invoke your function, add the Google Chat service account with the **Cloud Run Invoker** role.

1. In the Google API Console, go to the Cloud Run page:
	[Go to Cloud Run](https://console.developers.google.com/run)
2. In the Cloud Run services list, select the checkbox next to the receiving function. (Don't click the function itself.)
3. Click **Permissions**. The **Permissions** panel opens.
4. Click **Add principal**.
5. In **New principals**, enter `chat@system.gserviceaccount.com`.
6. In **Select a role**, select **Cloud Run** > **Cloud Run Invoker**.
7. Click **Save**.

## Configure the Chat app

After the Cloud Run function is deployed, follow these steps to turn it into a Google Chat app:

1. In the Google API Console, go to the Cloud Run page:
	[Go to Cloud Run](https://console.developers.google.com/run)
	Make sure that the project for which you enabled Cloud Run is selected.
2. In the list of services, click **quickstartchatapp**.
3. On the **Service details** page, copy the **URL** for the function.
4. Search for "Google Chat API" and click **Google Chat API**, then click **Manage**.
	[Go to Chat API](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
5. Click **Configuration** and set up the Google Chat app:
	1. Clear **Build this Chat app as a Google Workspace add-on**. A dialog opens asking you to confirm. In the dialog, click **Disable**.
		2. In **App name**, enter `Quickstart App`.
		3. In **Avatar URL**, enter `https://developers.google.com/chat/images/quickstart-app-avatar.png`.
		4. In **Description**, enter `Quickstart app`.
		5. Under **Functionality**, select **Join spaces and group conversations**.
		6. Under **Connection settings**, select **HTTP endpoint URL**.
		7. Under **Triggers**, select **Use a common HTTP endpoint URL for all triggers**, and paste the URL for the Cloud Run function trigger into the box.
		8. Under **Visibility**, select **Make this Chat app available to specific people and groups** in your domain and enter your email address.
		9. Under **Logs**, select **Log errors to Logging**.
6. Click **Save**.

The Chat app is ready to receive and respond to messages on Chat.

## Test your Chat app

To test your Chat app, open a direct message space with the Chat app and send a message:

1. Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.
	[Go to Google Chat](https://chat.google.com/)
2. Click **New chat**.
3. In the **Add 1 or more people** field, type the name of your Chat app.
4. Select your Chat app from the results. A direct message opens.
5. In the new direct message with the app, type `Hello` and press `enter`.

The Chat app's response contains a [card message](../create-messages.md#create) that displays the sender's name and avatar image, as demonstrated in the following image:

![Chat app responding with a card featuring the sender's display name and avatar
image](https://developers.google.com/static/workspace/chat/images/quickstart-app-cloud-functions.png)

To add trusted testers and learn more about testing interactive features, see [Test interactive features for Google Chat apps](../test-interactive-features.md).

## Troubleshoot

When a Google Chat app or [card](../create-messages.md#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](../troubleshoot-fix-chat-errors.md).

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.developers.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Related topics

- To add more features to your Chat app, see the following:
	- [Create interactive card messages](../create-messages.md#create)
		- [Respond to slash commands](../commands.md)
		- [Open and respond to dialogs](../dialogs.md)
- [Choose a Chat app architecture](../structure.md)
- [Verify requests from Google Chat](../verify-requests-from-chat.md)
