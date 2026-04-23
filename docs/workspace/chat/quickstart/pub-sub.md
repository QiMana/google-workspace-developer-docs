---
source: https://developers.google.com/workspace/chat/quickstart/pub-sub
root: workspace
fetched_at: 2026-04-23T15:25:30.544Z
---

# Build a Google Chat app behind a firewall with Pub/Sub

## Page Summary

- Build a Google Chat app that uses Pub/Sub for asynchronous communication, ideal for scenarios with firewall restrictions or when utilizing the Google Workspace Events API.
- The Chat app cannot use dialogs and card updates are limited to patching the entire message; use card messages for interactions.
- Setup involves enabling APIs, configuring Pub/Sub (topic, permissions, subscriptions), and writing a script (Java, Python, or Node.js) to handle messages and send responses.
- The architecture involves user interaction triggering a Pub/Sub message, which is then received by your application server to process and respond via the Chat API.
- Prerequisites include a Google Workspace account, a Google Cloud Project with billing enabled, and specific language requirements (Java, Python, or Node.js).

This page explains how to create a Chat app using [Pub/Sub](https://cloud.google.com/pubsub/docs/). This type of architecture for a Chat app is useful if your organization has a firewall, which can prevent Chat from sending messages to your Chat app, or if the Chat app uses the [Google Workspace Events API](https://developers.google.com/workspace/events/guides). However, this architecture has the following limitations due to the fact that these Chat apps can only send and receive [asynchronous messages](https://developers.google.com/workspace/chat/concepts/structure#multiple_responses_asynchronous):

- Can't use [dialogs](https://developers.google.com/workspace/chat/how-tos/dialogs) in messages. Instead, use a [card message](https://developers.google.com/workspace/chat/api/guides/v1/messages/create#create).
- Can't update individual cards with a synchronous response. Instead, update the entire message by calling the [`patch`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch) method.

The following diagram shows the architecture of a Chat app built with Pub/Sub:

![Architecture of a Chat app implemented with Pub/Sub.](https://developers.google.com/static/workspace/chat/images/design-patterns/secured-firewall.svg)

In the preceding diagram, a user interacting with a Pub/Sub Chat app has the following flow of information:

1. A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space, or an event happens in a Chat space for which the Chat app has an active [subscription](https://developers.google.com/workspace/events/guides).
2. Chat sends the message to a Pub/Sub topic.
3. An application server, that is either a cloud or on-premises system that contains the Chat app logic, subscribes to the Pub/Sub topic in order to receive the message through the firewall.
4. Optionally, the Chat app can call the Chat API to asynchronously post messages or perform other operations.

## Prerequisites

When you build your Chat app you must clear **Build this Chat app as a Google Workspace add-on** on the Chat API configuration page in Google Cloud console. See [Publish the app to Google Chat](#publish-app).

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- [Node.js 14 or greater](https://nodejs.org/en/download)
- The [npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) package management tool
- An initialized Node.js project. To initialize a new project, create and switch into a new folder, then run the following command in your command-line interface:
	```
	npm init
	```

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- Python 3.6 or greater
- The [pip](https://pypi.python.org/pypi/pip) package management tool

### Java

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- Java 11 or greater
- The [Maven](https://maven.apache.org/) package management tool

## Set up the environment

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Chat API and the Pub/Sub API.
	[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com,pubsub.googleapis.com)

## Set up Pub/Sub

1. [Create a Pub/Sub topic](https://cloud.google.com/pubsub/docs/create-topic#create_a_topic_2) that the Chat API can send messages to. We recommend that you use a single topic per Chat app.
2. [Grant Chat permission to publish](https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role) to the topic by assigning the **Pub/Sub Publisher** role to the following service account:
	```
	chat-api-push@system.gserviceaccount.com
	```
3. [Create a service account](https://developers.google.com/workspace/chat/api/guides/auth/service-accounts) for the Chat app to authorize with Pub/Sub and Chat and save the private key file to your working directory.
4. [Create a pull subscription](https://cloud.google.com/pubsub/docs/create-subscription#pubsub_create_pull_subscription-console) to the topic.
5. [Assign the **Pub/Sub Subscriber Role** on the subscription](https://cloud.google.com/pubsub/docs/access-control#console) for the service account that you previously created.

## Write the script

### Node.js

1. In a CLI, [provide service account credentials](https://cloud.google.com/docs/authentication/getting-started):
	```
	export GOOGLE_APPLICATION_CREDENTIALS=SERVICE_ACCOUNT_FILE_PATH
	```
2. In a CLI, provide the Google Cloud project ID:
	```
	export PROJECT_ID=PROJECT_ID
	```
3. In a CLI, provide the subscription ID for the Pub/Sub subscription that you previously created:
	```
	export SUBSCRIPTION_ID=SUBSCRIPTION_ID
	```
4. In your working directory, create a file named `package.json`.
5. In the `package.json` file, paste the following code:
	```
	{
	  "name": "pub-sub-app",
	  "version": "1.0.0",
	  "description": "Google Chat App that listens for messages via Cloud Pub/Sub",
	  "main": "index.js",
	  "scripts": {
	    "start": "node index.js",
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "dependencies": {
	    "@google-apps/chat": "^0.4.0",
	    "@google-cloud/pubsub": "^4.5.0"
	  },
	  "license": "Apache-2.0"
	}
	```
6. In your working directory, create a file named `index.js`.
7. In `index.js`, paste the following code:
	```
	const {ChatServiceClient} = require('@google-apps/chat');
	const {MessageReplyOption} = require('@google-apps/chat').protos.google.chat.v1.CreateMessageRequest;
	const {PubSub} = require('@google-cloud/pubsub');
	const {SubscriberClient} = require('@google-cloud/pubsub/build/src/v1');
	// Receives messages from a pull subscription.
	function receiveMessages() {
	  const chat = new ChatServiceClient({
	    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
	    scopes: ['https://www.googleapis.com/auth/chat.bot'],
	  });
	  const subscriptionPath = new SubscriberClient()
	    .subscriptionPath(process.env.PROJECT_ID, process.env.SUBSCRIPTION_ID)
	  const subscription = new PubSub()
	    .subscription(subscriptionPath);
	  // Handle incoming message, then ack/nack the received message
	  const messageHandler = message => {
	    console.log(\`Id : ${message.id}\`);
	    const event = JSON.parse(message.data);
	    console.log(\`Data : ${JSON.stringify(event)}\`);
	    // Post the response to Google Chat.
	    const request = formatRequest(event);
	    if (request != null) {
	      chat.createMessage(request);
	    }
	    // Ack the message.
	    message.ack();
	  }
	  subscription.on('message', messageHandler);
	  console.log(\`Listening for messages on ${subscriptionPath}\`);
	  // Keep main thread from exiting while waiting for messages
	  setTimeout(() => {
	    subscription.removeListener('message', messageHandler);
	    console.log(\`Stopped listening for messages.\`);
	  }, 60 * 1000);
	}
	// Send message to Google Chat based on the type of event
	function formatRequest(event) {
	  const spaceName = event.space.name;
	  const eventType = event.type;
	  // If the app was removed, we don't respond.
	  if (event.type == 'REMOVED_FROM_SPACE') {
	    console.log(\`App removed rom space ${spaceName}\`);
	    return null;
	  } else if (eventType == 'ADDED_TO_SPACE' && !eventType.message) {
	    // An app can also be added to a space by @mentioning it in a
	    // message. In that case, we fall through to the message case
	    // and let the app respond. If the app was added using the
	    // invite flow, we just post a thank you message in the space.
	    return {
	      parent: spaceName,
	      message: { text: 'Thank you for adding me!' }
	    };
	  } else if (eventType == 'ADDED_TO_SPACE' || eventType == 'MESSAGE') {
	    // In case of message, post the response in the same thread.
	    return {
	      parent: spaceName,
	      messageReplyOption: MessageReplyOption.REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD,
	      message: {
	        text: 'You said: \`' + event.message.text + '\`',
	        thread: { name: event.message.thread.name }
	      }
	    };
	  }
	}
	if (!process.env.PROJECT_ID) {
	  console.log('Missing PROJECT_ID env var.');
	  process.exit(1);
	}
	if (!process.env.SUBSCRIPTION_ID) {
	  console.log('Missing SUBSCRIPTION_ID env var.');
	  process.exit(1);
	}
	if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
	  console.log('Missing GOOGLE_APPLICATION_CREDENTIALS env var.');
	  process.exit(1);
	}
	receiveMessages();
	```

### Python

1. In a CLI, [provide service account credentials](https://cloud.google.com/docs/authentication/getting-started):
	```
	export GOOGLE_APPLICATION_CREDENTIALS=SERVICE_ACCOUNT_FILE_PATH
	```
2. In a CLI, provide the Google Cloud project ID:
	```
	export PROJECT_ID=PROJECT_ID
	```
3. In a CLI, provide the subscription ID for the Pub/Sub subscription that you previously created:
	```
	export SUBSCRIPTION_ID=SUBSCRIPTION_ID
	```
4. In your working directory, create a file named `requirements.txt`.
5. In the `requirements.txt` file, paste the following code:
	```
	google-cloud-pubsub>=2.23.0
	google-apps-chat==0.1.9
	```
6. In your working directory, create a file named `app.py`.
7. In `app.py`, paste the following code:
	```
	import json
	import logging
	import os
	import sys
	import time
	from google.apps import chat_v1 as google_chat
	from google.cloud import pubsub_v1
	from google.oauth2.service_account import Credentials
	def receive_messages():
	  """Receives messages from a pull subscription."""
	  scopes = ['https://www.googleapis.com/auth/chat.bot']
	  service_account_key_path = os.environ.get(
	    'GOOGLE_APPLICATION_CREDENTIALS')
	  creds = Credentials.from_service_account_file(
	    service_account_key_path)
	  chat = google_chat.ChatServiceClient(
	    credentials = creds,
	    client_options = {
	      "scopes": scopes
	    })
	  project_id = os.environ.get('PROJECT_ID')
	  subscription_id = os.environ.get('SUBSCRIPTION_ID')
	  subscriber = pubsub_v1.SubscriberClient()
	  subscription_path = subscriber.subscription_path(
	      project_id, subscription_id)
	  # Handle incoming message, then ack/nack the received message
	  def callback(message):
	    event = json.loads(message.data)
	    logging.info('Data : %s', event)
	    space_name = event['space']['name']
	    # Post the response to Google Chat.
	    request = format_request(event)
	    if request is not None:
	      chat.create_message(request)
	    # Ack the message.
	    message.ack()
	  subscriber.subscribe(subscription_path, callback = callback)
	  logging.info('Listening for messages on %s', subscription_path)
	  # Keep main thread from exiting while waiting for messages
	  while True:
	    time.sleep(60)
	def format_request(event):
	  """Send message to Google Chat based on the type of event.
	  Args:
	    event: A dictionary with the event data.
	  """
	  space_name = event['space']['name']
	  event_type = event['type']
	  # If the app was removed, we don't respond.
	  if event['type'] == 'REMOVED_FROM_SPACE':
	    logging.info('App removed rom space %s', space_name)
	    return
	  elif event_type == 'ADDED_TO_SPACE' and 'message' not in event:
	    # An app can also be added to a space by @mentioning it in a
	    # message. In that case, we fall through to the message case
	    # and let the app respond. If the app was added using the
	    # invite flow, we just post a thank you message in the space.
	    return google_chat.CreateMessageRequest(
	        parent = space_name,
	        message = {
	          'text': 'Thank you for adding me!'
	        }
	    )
	  elif event_type in ['ADDED_TO_SPACE', 'MESSAGE']:
	    # In case of message, post the response in the same thread.
	    return google_chat.CreateMessageRequest(
	        parent = space_name,
	        message_reply_option = google_chat.CreateMessageRequest.MessageReplyOption.REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD,
	        message = {
	          'text': 'You said: \`' + event['message']['text'] + '\`',
	          'thread': {
	            'name': event['message']['thread']['name']
	          }
	        }
	    )
	if __name__ == '__main__':
	  if 'PROJECT_ID' not in os.environ:
	    logging.error('Missing PROJECT_ID env var.')
	    sys.exit(1)
	  if 'SUBSCRIPTION_ID' not in os.environ:
	    logging.error('Missing SUBSCRIPTION_ID env var.')
	    sys.exit(1)
	  if 'GOOGLE_APPLICATION_CREDENTIALS' not in os.environ:
	    logging.error('Missing GOOGLE_APPLICATION_CREDENTIALS env var.')
	    sys.exit(1)
	  logging.basicConfig(
	      level=logging.INFO,
	      style='{',
	      format='{levelname:.1}{asctime} {filename}:{lineno}] {message}')
	  receive_messages()
	```

### Java

1. In a CLI, [provide service account credentials](https://cloud.google.com/docs/authentication/getting-started):
	```
	export GOOGLE_APPLICATION_CREDENTIALS=SERVICE_ACCOUNT_FILE_PATH
	```
2. In a CLI, provide the Google Cloud project ID:
	```
	export PROJECT_ID=PROJECT_ID
	```
3. In a CLI, provide the subscription ID for the Pub/Sub subscription that you previously created:
	```
	export SUBSCRIPTION_ID=SUBSCRIPTION_ID
	```
4. In your working directory, create a file named `pom.xml`.
5. In the `pom.xml` file, paste the following code:
	```
	<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	  <modelVersion>4.0.0</modelVersion>
	  <groupId>com.google.chat</groupId>
	  <artifactId>pub-sub-app</artifactId>
	  <version>0.1.0</version>
	  <name>pub-sub-app-java</name>
	  <properties>
	    <maven.compiler.release>21</maven.compiler.release>
	    <maven.compiler.source>1.8</maven.compiler.source>
	    <maven.compiler.target>1.8</maven.compiler.target>
	  </properties>
	  <dependencies>
	    <!-- Google Chat GAPIC library -->
	    <dependency>
	      <groupId>com.google.api.grpc</groupId>
	      <artifactId>proto-google-cloud-chat-v1</artifactId>
	      <version>0.8.0</version>
	    </dependency>
	    <dependency>
	      <groupId>com.google.api</groupId>
	      <artifactId>gax</artifactId>
	      <version>2.48.1</version>
	    </dependency>
	    <dependency>
	      <groupId>com.google.cloud</groupId>
	      <artifactId>google-cloud-chat</artifactId>
	      <version>0.1.0</version>
	    </dependency>
	    <!-- Google Cloud Pub/Sub library -->
	    <dependency>
	      <groupId>com.google.cloud</groupId>
	      <artifactId>google-cloud-pubsub</artifactId>
	    <version>1.125.8</version>
	    </dependency>
	    <!-- JSON utilities -->
	    <dependency>
	      <groupId>com.fasterxml.jackson.core</groupId>
	      <artifactId>jackson-databind</artifactId>
	      <version>2.14.2</version>
	    </dependency>
	  </dependencies>
	</project>
	```
6. In your working directory, create the directory structure `src/main/java`.
7. In the `src/main/java` directory, create a file named `Main.java`.
8. In `Main.java`, paste the following code:
	```
	import com.fasterxml.jackson.databind.JsonNode;
	import com.fasterxml.jackson.databind.ObjectMapper;
	import com.google.api.gax.core.FixedCredentialsProvider;
	import com.google.auth.oauth2.GoogleCredentials;
	import com.google.chat.v1.ChatServiceClient;
	import com.google.chat.v1.ChatServiceSettings;
	import com.google.chat.v1.CreateMessageRequest;
	import com.google.chat.v1.CreateMessageRequest.MessageReplyOption;
	import com.google.chat.v1.Message;
	import com.google.chat.v1.Thread;
	import com.google.cloud.pubsub.v1.AckReplyConsumer;
	import com.google.cloud.pubsub.v1.MessageReceiver;
	import com.google.cloud.pubsub.v1.Subscriber;
	import com.google.pubsub.v1.ProjectSubscriptionName;
	import com.google.pubsub.v1.PubsubMessage;
	import java.io.FileInputStream;
	import java.util.Collections;
	public class Main {
	  public static final String PROJECT_ID_ENV_PROPERTY = "PROJECT_ID";
	  public static final String SUBSCRIPTION_ID_ENV_PROPERTY = "SUBSCRIPTION_ID";
	  public static final String CREDENTIALS_PATH_ENV_PROPERTY = "GOOGLE_APPLICATION_CREDENTIALS";
	  public static void main(String[] args) throws Exception {
	    ProjectSubscriptionName subscriptionName = ProjectSubscriptionName.of(
	      System.getenv(Main.PROJECT_ID_ENV_PROPERTY),
	      System.getenv(Main.SUBSCRIPTION_ID_ENV_PROPERTY));
	    // Instantiate app, which implements an asynchronous message receiver.
	    EchoApp echoApp = new EchoApp();
	    // Create a subscriber for <var>SUBSCRIPTION_ID</var> bound to the message receiver
	    final Subscriber subscriber = Subscriber.newBuilder(subscriptionName, echoApp).build();
	    System.out.println("Subscriber is listening to events...");
	    subscriber.startAsync();
	    // Wait for termination
	    subscriber.awaitTerminated();
	  }
	}
	/**
	 * A demo app which implements {@link MessageReceiver} to receive messages. It simply echoes the
	 * incoming messages.
	 */
	class EchoApp implements MessageReceiver {
	  // Path to the private key JSON file of the service account to be used for posting response
	  // messages to Google Chat.
	  // In this demo, we are using the same service account for authorizing with Cloud Pub/Sub to
	  // receive messages and authorizing with Google Chat to post messages. If you are using
	  // different service accounts, please set the path to the private key JSON file of the service
	  // account used to post messages to Google Chat here.
	  private static final String SERVICE_ACCOUNT_KEY_PATH =
	    System.getenv(Main.CREDENTIALS_PATH_ENV_PROPERTY);
	  // Developer code for Google Chat API scope.
	  private static final String GOOGLE_CHAT_API_SCOPE = "https://www.googleapis.com/auth/chat.bot";
	  private static final String ADDED_RESPONSE = "Thank you for adding me!";
	  ChatServiceClient chatServiceClient;
	  EchoApp() throws Exception {
	    GoogleCredentials credential = GoogleCredentials
	      .fromStream(new FileInputStream(SERVICE_ACCOUNT_KEY_PATH))
	      .createScoped(Collections.singleton(GOOGLE_CHAT_API_SCOPE));
	    // Create the ChatServiceSettings with the app credentials
	    ChatServiceSettings chatServiceSettings = ChatServiceSettings.newBuilder()
	      .setCredentialsProvider(FixedCredentialsProvider.create(credential)).build();
	    // Set the Chat service client
	    chatServiceClient = ChatServiceClient.create(chatServiceSettings);
	  }
	  // Called when a message is received by the subscriber.
	  @Override
	  public void receiveMessage(PubsubMessage pubsubMessage, AckReplyConsumer consumer) {
	    System.out.println("Id : " + pubsubMessage.getMessageId());
	    // Handle incoming message, then ack/nack the received message
	    try {
	      ObjectMapper mapper = new ObjectMapper();
	      JsonNode dataJson = mapper.readTree(pubsubMessage.getData().toStringUtf8());
	      System.out.println("Data : " + dataJson.toString());
	      handle(dataJson);
	      consumer.ack();
	    } catch (Exception e) {
	      System.out.println(e);
	      consumer.nack();
	    }
	  }
	  // Send message to Google Chat based on the type of event.
	  public void handle(JsonNode eventJson) throws Exception {
	    CreateMessageRequest createMessageRequest;
	    switch (eventJson.get("type").asText()) {
	      case "ADDED_TO_SPACE":
	        // An app can also be added to a space by @mentioning it in a message. In that case, we fall
	        // through to the MESSAGE case and let the app respond. If the app was added using the
	        // invite flow, we just post a thank you message in the space.
	        if (!eventJson.has("message")) {
	          createMessageRequest = CreateMessageRequest.newBuilder()
	            .setParent(eventJson.get("space").get("name").asText())
	            .setMessage(Message.newBuilder().setText(ADDED_RESPONSE).build()).build();
	          break;
	        }
	      case "MESSAGE":
	        // In case of message, post the response in the same thread.
	        createMessageRequest = CreateMessageRequest.newBuilder()
	          .setParent(eventJson.get("space").get("name").asText())
	          .setMessageReplyOption(MessageReplyOption.REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD)
	          .setMessage(Message.newBuilder()
	            .setText("You said: \`" + eventJson.get("message").get("text").asText() + "\`")
	            .setThread(Thread.newBuilder()
	              .setName(eventJson.get("message").get("thread").get("name").asText())
	              .build()).build()).build();
	        break;
	      case "REMOVED_FROM_SPACE":
	      default:
	        // Do nothing
	        return;
	    }
	    // Post the response to Google Chat.
	    chatServiceClient.createMessage(createMessageRequest);
	  }
	}
	```

## Publish the app to Chat

1. In the Google Cloud console, go to **Menu \> APIs & Services \> Enabled APIs & Services \> Google Chat API \> Configuration**.
	[Go to Configuration](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Configure the Chat app for Pub/Sub:
	1. Clear **Build this Chat app as a Google Workspace add-on**. A dialog opens asking you to confirm. In the dialog, click **Disable**.
		2. In **App name**, enter `Quickstart App`.
		3. In **Avatar URL**, enter `https://developers.google.com/chat/images/quickstart-app-avatar.png`.
		4. In **Description**, enter `Quickstart app`.
		5. Under **Functionality**, select **Join spaces and group conversations**.
		6. Under **Connection settings**, select **Cloud Pub/Sub** and paste the name of the Pub/Sub topic that you previously created.
		7. Under **Visibility**, select **Make this Google Chat app available to specific people and groups** in your domain and enter your email address.
		8. Under **Logs**, select **Log errors to Logging**.
3. Click **Save**.

The app is ready to receive and respond to messages on Chat.

## Run the script

In a CLI, switch into your working directory and run the script:

### Node.js

```
npm install
npm start
```

### Python

```
python -m venv env
source env/bin/activate
pip install -r requirements.txt -U
python app.py
```

### Java

```
mvn compile exec:java -Dexec.mainClass=Main
```

When you run the code, the application starts listening to messages published to the Pub/Sub topic.

## Test your Chat app

To test your Chat app, open a direct message space with the Chat app and send a message:

1. Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.
	[Go to Google Chat](https://chat.google.com/)
2. Click **New chat**.
3. In the **Add 1 or more people** field, type the name of your Chat app.
4. Select your Chat app from the results. A direct message opens.
5. In the new direct message with the app, type `Hello` and press `enter`.

To add trusted testers and learn more about testing interactive features, see [Test interactive features for Google Chat apps](https://developers.google.com/workspace/chat/test-interactive-chat-apps).

## Troubleshoot

When a Google Chat app or [card](https://developers.google.com/workspace/chat/create-messages#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](https://developers.google.com/workspace/chat/troubleshoot).

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google Cloud console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.cloud.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Related topics

- To add more features to your Chat app, see the following:
	- [Create interactive card messages](https://developers.google.com/workspace/chat/api/guides/v1/messages/create#create)
		- [Respond to slash commands](https://developers.google.com/workspace/chat/how-tos/slash-commands)
- [Choose a Chat app architecture](https://developers.google.com/workspace/chat/concepts/structure)
