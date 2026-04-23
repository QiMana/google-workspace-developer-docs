---
source: https://developers.google.com/workspace/chat/authenticate-authorize-chat-app
root: workspace
fetched_at: 2026-04-23T15:25:11.355Z
---

# Authenticate as a Google Chat app

## Page Summary

- A service account acts as the Chat app's identity for authentication and interaction with the Google Chat API, requiring a private key for secure access.
- Administrator approval is necessary for specific authorization scopes, ensuring controlled access to resources and functionalities.
- Developers can utilize provided code samples in Java, Python, Node.js, or Apps Script to build Chat apps using the service account for authentication.
- Securely storing the private key and selecting appropriate authorization scopes are crucial for preventing unauthorized access and ensuring desired functionality.
- If user-specific actions are needed, user authentication should be implemented instead of relying solely on the service account.

This guide explains how to set up and use a service account to access the [Google Chat API](https://developers.google.com/workspace/chat/api/reference/rest) on behalf of a Chat app. First, it walks you through how to create a service account. Then, it demonstrates how to write a script that uses the service account to authenticate with the Chat API and post a message in a Chat space.

When authenticated with a service account, to get data about or perform actions in a Chat space, Chat apps must have membership in the space. For example, to list members of a space, or to create a message in a space, the Chat app has to itself be a member of the space. The only exception is when a Chat apps creates a space with app authentication, in which case the app creates the space and then automatically becomes a member.

Google Chat API methods that support app authorization with authorization scopes that have names that begin `https://www.googleapis.com/auth/chat.app.*` require one-time [administrator approval](https://support.google.com/a?p=chat-app-auth). Google Chat API methods that support app authorization with the `https://www.googleapis.com/auth/chat.bot` authorization scope don't require additional approval.

If your Chat app needs to access user data or perform actions on a user's behalf, [authenticate as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) instead. If you're a domain administrator, you can grant domain-wide delegation of authority to authorize a Chat app's service account to access your user's data without requiring each user to give consent. For more information, see [Authenticate and authorize using domain-wide delegation](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#domain-wide-delegation).

To learn more about when Chat apps require authentication and what kind of authentication to use, see [Types of required authentication](https://developers.google.com/workspace/chat/authenticate-authorize#types_of_required_authentication) in the Chat API authentication and authorization overview.

## Prerequisites

### Java

- [JDK](https://openjdk.org/install) 1.7 or greater
- The [Maven](https://maven.apache.org/) package management tool
- An initialized Maven project. To initialize a new project, run the following command in your command-line interface:
	```
	mvn archetype:generate -DgroupId=com.google.chat.app.authsample -DartifactId=auth-sample-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
	```
- A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).
- Add the Chat app to a space. To add the Chat app, see [Test interactive features for Google Chat apps](https://developers.google.com/workspace/chat/test-interactive-features).

### Python

- Python 3.6 or greater
- The [pip](https://pypi.python.org/pypi/pip) package management tool
- A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).
- Add the Chat app to a space. To add the Chat app, see [Test interactive features for Google Chat apps](https://developers.google.com/workspace/chat/test-interactive-features).

### Node.js

- [Node.js 14 or greater](https://nodejs.org/en/download)
- The [npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) package management tool
- An initialized Node.js project. To initialize a new project, create and switch into a new folder, then run the following command in your command-line interface:
	```
	npm init
	```
- A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).
- Add the Chat app to a space. To add the Chat app, see [Test interactive features for Google Chat apps](https://developers.google.com/workspace/chat/test-interactive-features).

### Apps Script

- A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app in Apps Script, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/apps-script-app).
- Add the Chat app to a space. To add the Chat app, see [Test interactive features for Google Chat apps](https://developers.google.com/workspace/chat/test-interactive-features).

## Step 1: Create a service account in Google Cloud console

Create a service account that your Chat app can use to access Google APIs.

### Create a service account

To create a service account, follow these steps:

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click **Create service account**.
3. Fill in the service account details, then click **Create and continue**.
4. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).
5. Click **Continue**.
6. Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to [Managing service account impersonation](https://cloud.google.com/iam/docs/impersonating-service-accounts).
7. Click **Done**. Make a note of the email address for the service account.

### gcloud CLI

1. Create the service account:
	```
	gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
	  --display-name="SERVICE_ACCOUNT_NAME"
	```
2. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

The service account appears on the service account page. Next, create a private key for the service account.

### Create a private key

To create and download a private key for the service account, follow these steps:

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Keys** \> **Add key** \> **Create new key**.
4. Select **JSON**, then click **Create**.
	Your new public/private key pair is generated and downloaded to your machine as a new file. Save the downloaded JSON file as `credentials.json` in your working directory. This file is the only copy of this key. For information about how to store your key securely, see [Managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
5. Click **Close**.

For more information about service accounts, see [service accounts](https://cloud.google.com/iam/docs/service-accounts) in the Google Cloud IAM documentation.

Next, create a Google Workspace Marketplace-compatible OAuth client for this service account.

### Receive administrator approval

To use the `https://www.googleapis.com/auth/chat.bot` authorization scope, no administrator approval is required. Go to [Step 2: Install the Google client library and other dependencies](#step_2_install_the_google_client_library_and_other_dependencies). The example in this guide uses the `https://www.googleapis.com/auth/chat.bot` authorization scope, so if you are following the example, go to step 2.

To use an authorization scope that begins with `https://www.googleapis.com/auth/chat.app.*`, your Chat app must get a one-time [administrator approval](https://support.google.com/a?p=chat-app-auth).

To receive administrator approval, you must prepare your Chat app's service account with the following information:

- A Google Workspace Marketplace-compatible OAuth client.
- App configuration in the Google Workspace Marketplace SDK.

#### Create a Google Workspace Marketplace-compatible OAuth client

To create a Google Workspace Marketplace-compatible OAuth client, follow these steps:

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click the service account you created for your Chat app.
3. Click **Advanced settings**.
4. Click **Create Google Workspace Marketplace-compatible OAuth client**.
5. Click **Continue**.

A confirmation message appears that says a Google Workspace Marketplace-compatible OAuth client has been created.

#### Configure the Chat app in the Google Workspace Marketplace SDK

To configure the Chat app in the Google Workspace Marketplace SDK, follow these steps:

1. In the Google Cloud console, enable the Google Workspace Marketplace SDK.
	[Enable the Google Workspace Marketplace SDK](https://console.cloud.google.com/flows/enableapi?apiid=appsmarket-component.googleapis.com)
2. In the Google Cloud console, go to go to **Menu** \> **APIs & Services** \> **Enabled APIs & services** \> **Google Workspace Marketplace SDK** \> **App Configuration**.
	[Go to App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk)
3. Complete the App Configuration page. How you configure your Chat app depends on who your intended audience is and other factors. For help completing the app configuration page, see [Configure your app in the Google Workspace Marketplace SDK](https://developers.google.com/workspace/marketplace/enable-configure-sdk). For the purposes of this guide, enter the following information:
	1. Under **App visibility**, select **Private**.
		2. Under **Installation settings**, select **Individual + admin install**.
		3. Under **App integrations**, select **Chat app**.
		4. Under **OAuth scopes**, enter all the [authentication scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) your Chat app uses.
		5. Under **Developer information**, enter your **Developer name**, **Developer website URL**, and **Developer email**.
		6. Click **Save draft**.

#### Get administrator approval

Now that your service account is configured to receive administrator approval, obtain it from a Google Workspace administrator who can grant approval by following the steps in [Set up authorization for Chat apps](https://support.google.com/a?p=chat-app-auth).

## Step 2: Install the Google client library and other dependencies

Install the Google client library and other dependencies required for the project.

### Java

To add the Google client libraries and other required dependencies to your Maven project, edit the file `pom.xml` in your project's directory and add the following dependencies:

```
<dependencies>
  <!-- ... existing dependencies ... -->
  <dependency>
    <groupId>com.google.apis</groupId>
    <artifactId>google-api-services-chat</artifactId>
    <version>v1-rev20230905-2.0.0</version>
  </dependency>
  <dependency>
    <groupId>com.google.auth</groupId>
    <artifactId>google-auth-library-oauth2-http</artifactId>
    <version>1.19.0</version>
  </dependency>
  <dependency>
      <groupId>com.google.code.gson</groupId>
      <artifactId>gson</artifactId>
      <version>2.10.1</version>
  </dependency>
</dependencies>
```

### Python

If you haven't already installed the Google client libraries for Python, run the following command in your command-line interface:

```
pip3 install --upgrade google-api-python-client google-auth
```

### Node.js

To add the Google client libraries to your Node.js project, switch into your project's directory and run the following command in your command-line interface:

```
npm install "@googleapis/chat"
```

### Apps Script

This sample uses the [OAuth2 for Apps Script library](https://github.com/googleworkspace/apps-script-oauth2) to generate a JWT token for service account authentication. To add the library to your Apps Script project:

1. At the left, click **Editor** .
2. At the left, next to **Libraries**, click **Add a library** .
3. Enter the script ID `1B7FSrk5Zi6L1rSxxTDgDEUsPzlukDsi4KGuTMorsTQHhGBzBkMun4iDF`.
4. Click **Look up**, then click **Add**.

This sample uses the [Advanced Chat service](https://developers.google.com/apps-script/advanced/chat) to call Google Chat API. To turn on the service for your Apps Script project:

1. At the left, click **Editor** .
2. At the left, next to **Services**, click **Add a service** .
3. Select **Google Chat API**.
4. In **Version**, select **v1**.
5. Click **Add**.

You can use any language supported by our [client libraries](https://developers.google.com/api-client-library).

## Step 3: Write a script that uses the service account to authenticate with Chat API

The following code authenticates with the [Chat API](https://developers.google.com/workspace/chat/api/reference/rest) using a service account, then posts a message to a Chat space:

### Java

1. In your project's directory, open the file `src/main/java/com/google/chat/app/authsample/App.java`.
2. Replace the contents in `App.java` with the following code:
	```
	package com.google.chat.app.authsample;
	import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
	import com.google.api.client.http.HttpRequestInitializer;
	import com.google.api.client.json.gson.GsonFactory;
	import com.google.api.services.chat.v1.HangoutsChat;
	import com.google.api.services.chat.v1.model.Message;
	import com.google.auth.http.HttpCredentialsAdapter;
	import com.google.auth.oauth2.GoogleCredentials;
	/**
	 * Authenticates with Chat API using service account credentials,
	 * then creates a Chat message.
	 */
	public class App {
	    // Specify required scopes.
	    private static final String CHAT_SCOPE = "https://www.googleapis.com/auth/chat.bot";
	    // Specify service account details.
	    private static final String PRIVATE_KEY_RESOURCE_URI = "/credentials.json";
	    public static void main( String[] args ) {
	        try {
	            // Run app.
	            Message response = App.createChatMessage();
	            // Print details about the created message.
	            System.out.println(response);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
	    private static Message createChatMessage() throws Exception {
	        // Build the Chat API client and authenticate with the service account.
	        GoogleCredentials credentials = GoogleCredentials.fromStream(
	            App.class.getResourceAsStream(PRIVATE_KEY_RESOURCE_URI))
	            .createScoped(CHAT_SCOPE);
	        HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(credentials);
	        HangoutsChat chatService = new HangoutsChat.Builder(
	            GoogleNetHttpTransport.newTrustedTransport(),
	            GsonFactory.getDefaultInstance(),
	            requestInitializer)
	            .setApplicationName("auth-sample-app")
	            .build();
	        // The space to create the message in.
	        //
	        // Replace SPACE_NAME with a space name.
	        // Obtain the space name from the spaces resource of Chat API,
	        // or from a space's URL.
	        String spaceName = "spaces/SPACE_NAME";
	        // Create a Chat message.
	        Message message = new Message().setText("Hello, world!");
	        return chatService.spaces().messages().create(spaceName, message).execute();
	    }
	}
	```
3. In the code, replace `SPACE_NAME` with a space name, which you can obtain from the [`spaces.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method in Chat API, or from a space's URL.
4. Create a new subdirectory named `resources` within your project's directory.
5. Make sure that the private key file for your service account is named `credentials.json` and copy it to the `resources` subdirectory.
6. To configure Maven to include the private key file in the project package, edit the file `pom.xml` in your project's directory and add the following configuration to the `<build>` section:
	```
	<build>
	  <!-- ... existing configurations ... -->
	  <resources>
	    <resource>
	      <directory>resources</directory>
	    </resource>
	  </resources>
	</build>
	```
7. To configure Maven to include the dependencies in the project package and to execute your application's main class, edit the file `pom.xml` in your project's directory and add the following configuration to the `<plugins>` section:
	```
	<plugins>
	  <!-- ... existing configurations ... -->
	  <plugin>
	    <artifactId>maven-assembly-plugin</artifactId>
	    <configuration>
	      <archive>
	        <manifest>
	          <mainClass>com.google.chat.app.authsample.App</mainClass>
	        </manifest>
	      </archive>
	      <descriptorRefs>
	        <descriptorRef>jar-with-dependencies</descriptorRef>
	      </descriptorRefs>
	    </configuration>
	  </plugin>
	</plugins>
	```

### Python

1. In your working directory, create a file named `chat_app_auth.py`.
2. Include the following code in `chat_app_auth.py`:
	```
	from apiclient.discovery import build
	from google.oauth2 import service_account
	# Specify required scopes.
	SCOPES = ['https://www.googleapis.com/auth/chat.bot']
	# Specify service account details.
	creds = service_account.Credentials.from_service_account_file(
	    'credentials.json', scopes=SCOPES)
	# Build the URI and authenticate with the service account.
	chat = build('chat', 'v1', credentials=creds)
	# Create a Chat message.
	result = chat.spaces().messages().create(
	    # The space to create the message in.
	    #
	    # Replace SPACE_NAME with a space name.
	    # Obtain the space name from the spaces resource of Chat API,
	    # or from a space's URL.
	    parent='spaces/SPACE_NAME',
	    # The message to create.
	    body={'text': 'Hello, world!'}
	).execute()
	# Prints details about the created message.
	print(result)
	```
3. In the code, replace `SPACE_NAME` with a space name, which you can obtain from the [`spaces.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method in Chat API, or from a space's URL. Make sure that the private key file for your service account is named `credentials.json`.

### Node.js

1. In your project's directory, create a file named `chat_app_auth.js`.
2. Include the following code in `chat_app_auth.js`:
	```
	const chat = require('@googleapis/chat');
	async function createMessage() {
	  const auth = new chat.auth.GoogleAuth({
	    // Specify service account details.
	    keyFilename: 'credentials.json',
	    // Specify required scopes.
	    scopes: ['https://www.googleapis.com/auth/chat.bot']
	  });
	  const authClient = await auth.getClient();
	  // Create the Chat API client and authenticate with the service account.
	  const chatClient = await chat.chat({
	    version: 'v1',
	    auth: authClient
	  });
	  // Create a Chat message.
	  const result = await chatClient.spaces.messages.create({
	    // The space to create the message in.
	    //
	    // Replace SPACE_NAME with a space name.
	    // Obtain the space name from the spaces resource of Chat API,
	    // or from a space's URL.
	    parent: 'spaces/SPACE_NAME',
	    // The message to create.
	    requestBody: { 'text': 'Hello, world!' }
	  });
	  return result;
	}
	// Execute function then print details about the created message.
	createMessage().then(console.log);
	```
3. In the code, replace `SPACE_NAME` with a space name, which you can obtain from the [`spaces.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method in Chat API, or from a space's URL. Make sure that the private key file for your service account is named `credentials.json`.

### Apps Script

1. In the Apps Script editor, edit the file `appsscript.json` and add the OAuth scope necessary to make external requests to obtain the service account OAuth token:
	```
	"oauthScopes": [
	  "https://www.googleapis.com/auth/script.external_request"
	]
	```
2. Save the following code in a file named `ChatAppAuth.gs` in your Apps Script project:
	```
	// Specify the contents of the file credentials.json.
	const CREDENTIALS = CREDENTIALS;
	const SCOPE = 'https://www.googleapis.com/auth/chat.bot';
	// The space to create the message in.
	//
	// Replace SPACE_NAME with a space name.
	// Obtain the space name from the spaces resource of Chat API,
	// or from a space's URL.
	const PARENT = 'spaces/SPACE_NAME'
	/**
	 * Authenticates with Chat API using app credentials, then posts a message.
	 */
	function createMessageWithAppCredentials() {
	  try {
	    const service = getService_();
	    if (!service.hasAccess()) {
	      console.error(service.getLastError());
	      return;
	    }
	    // Specify the message to create.
	    const message = {'text': 'Hello world!'};
	    // Call Chat API with a service account to create a message.
	    const result = Chat.Spaces.Messages.create(
	        message,
	        PARENT,
	        {},
	        // Authenticate with the service account token.
	        {'Authorization': 'Bearer ' + service.getAccessToken()});
	    // Log details about the created message.
	    console.log(result);
	  } catch (err) {
	    // TODO (developer) - Handle exception.
	    console.log('Failed to create message with error %s', err.message);
	  }
	}
	/**
	 * Configures the OAuth library to authenticate with the service account.
	 */
	function getService_() {
	  return OAuth2.createService(CREDENTIALS.client_email)
	      .setTokenUrl('https://oauth2.googleapis.com/token')
	      .setPrivateKey(CREDENTIALS.private_key)
	      .setIssuer(CREDENTIALS.client_email)
	      .setSubject(CREDENTIALS.client_email)
	      .setScope(SCOPE)
	      .setPropertyStore(PropertiesService.getScriptProperties());
	}
	```
3. In the code, replace `CREDENTIALS` with the contents of the file `credentials.json`.
4. In the code, replace `SPACE_NAME` with a space name, which you can obtain from the [`spaces.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method in Chat API, or from a space's URL.

## Step 4: Run the complete example

In your working directory, build and run the sample:

### Java

```
mvn compile assembly:single
java -jar target/auth-sample-app-1.0-SNAPSHOT-jar-with-dependencies.jar
```

### Python

```
python3 chat_app_auth.py
```

### Node.js

```
node chat_app_auth.js
```

### Apps Script

Open the file `ChatAppAuth.gs` in the Apps Script Editor and click **Run**.

Your script makes an authenticated request to the [Chat API](https://developers.google.com/workspace/chat/api/reference/rest), which responds by posting a message in a Chat space as a Chat app.

## Troubleshoot the example

This section describes common issues that you might encounter while attempting to run this sample.

### You are not permitted to use this app

When running the script, you might receive an error that says:

```
<HttpError 403 when requesting https://chat.googleapis.com/v1/spaces/{space}/messages?alt=json returned "You are not permitted to use this app". Details: "You are not permitted to use this app">
```

This error message means that the Chat app doesn't have permission to create Chat messages in the specified Chat space.

To resolve the error, [add the Chat app to the Chat space](https://support.google.com/chat/answer/7653881) specified in the script.

### The administrator must grant the app the required OAuth authorization scope for this action

When running the script, you might receive an error that says:

```
<HttpError 403 when requesting https://chat.googleapis.com/v1/spaces/{space}?alt=json returned "The administrator must grant the app the required OAuth authorization scope for this action.". Details: "The administrator must grant the app the required OAuth authorization scope for this action.">
```

This error message means that a Google Workspace administrator hasn't yet granted one-time approval to the Chat app to use authorization scopes that begin with the name `https://www.googleapis.com/auth/chat.app.*`.

To resolve the error:

- Ask the Google Workspace administrator to [grant approval to your Chat app](https://support.google.com/a?p=chat-app-auth). When handling this error in your Chat app logic, consider [sending a message](https://developers.google.com/workspace/chat/create-messages) announcing that the Chat app needs administrator approval to perform the requested action, perhaps: `To perform this action, I need approval. <https://support.google.com/a?p=chat-app-auth|Learn more>.`
- If the Google Chat API method supports the `https://www.googleapis.com/auth/chat.bot` authorization scope, which doesn't require administrator approval, consider using it instead. To check which authorization scopes a method supports, see the [Google Chat API reference documentation](https://developers.google.com/workspace/chat/api-overview).

## Related topics

- Learn what else Chat API can do by reviewing the Chat API [reference documentation](https://developers.google.com/workspace/chat/api/reference/rest).
- If using an OAuth authorization scopes that begins with `https://www.googleapis.com/auth/chat.app.*`, learn how [administrators grant one-time approval](https://support.google.com/a?p=chat-app-auth).
