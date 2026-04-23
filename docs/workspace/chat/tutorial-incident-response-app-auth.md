---
source: https://developers.google.com/workspace/chat/tutorial-incident-response-app-auth
root: workspace
fetched_at: 2026-04-23T15:25:37.649Z
---

# Respond to incidents with Google Chat, Vertex AI, and Google Apps Script

This tutorial shows you how to make a Google Chat app that responds to incidents in real time. When responding to an incident, the app creates and populates a Chat space, facilitates incident resolution with messages, slash commands, and dialogs, and uses AI to summarize the incident response in a Google Docs document.

This tutorial uses authorization scopes that begins with `https://www.googleapis.com/auth/chat.app.*`. For the Chat app to use those scopes, you must get a one-time [administrator approval](https://support.google.com/a?p=chat-app-auth).

An *incident* is an event that requires the immediate attention of a team of people to resolve. Examples of incidents include:

- A time-sensitive case is created in a Customer Relationship Management (CRM) platform, requiring a service team to collaborate on a resolution.
- A system goes offline, alerting a group of site reliability engineers (SREs) so that they can work together to bring it back online.
- A high magnitude earthquake occurs, and emergency workers need to coordinate their response.

For the purposes of this tutorial, the incident alert starts when someone reports the incident with a button click from a web page. The web page simulates an incident by asking users to enter basic incident information: title, description, and email addresses of the responders.

See the incident management Chat app in action:

- ![The website that starts an incident.](https://developers.google.com/static/workspace/chat/images/incident-response-app-auth-1.png)
	Figure 1. The website where someone can report an incident.
- ![Notification that the incident Chat space is created.](https://developers.google.com/static/workspace/chat/images/incident-response-app-auth-2.png)
	**Figure 2.** Notification that the incident Chat space is created.
- ![The incident response Chat space.](https://developers.google.com/static/workspace/chat/images/incident-response-app-auth-3.png)
	**Figure 3.** The incident response Chat space.
- ![Resolving the incident with a slash command.](https://developers.google.com/static/workspace/chat/images/incident-response-app-auth-4.png)
	**Figure 4.** Resolving the incident with a slash command.
- ![Incident resolution dialog.](https://developers.google.com/static/workspace/chat/images/incident-response-app-auth-5.png)
	**Figure 5.** Incident resolution dialog.
- ![Incident resolution Google Docs document shared in space.](https://developers.google.com/static/workspace/chat/images/incident-response-app-auth-6.png)
	**Figure 6.** Incident resolution Google Docs document shared in space.
- ![The AI summary incident resolution Google Doc.](https://developers.google.com/static/workspace/chat/images/incident-response-app-auth-7.png)
	**Figure 7.** The AI summary incident resolution Google Docs document.

## Prerequisites

If you need any of these prerequisites turned on for your organization, ask your Google Workspace administrator to turn them on:

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- To have [Directory](https://support.google.com/a/answer/60218) (contact sharing) turned on for Google Workspace. The incident app uses the directory to look up the incident responders' contact info, like name and email address. Incident responders must be users with a Chat account in your Google Workspace organization.

## Objectives

- Build a Chat app that responds to incidents.
- Help users respond to incidents by doing the following:
	- Creating incident response spaces.
		- Posting messages summarizing incidents and responses.
		- Supporting collaboration with interactive Chat app features.
- Summarize conversations and resolutions with Vertex AI.

## Architecture

The following diagram shows the architecture of the Google Workspace and Google Cloud resources used by the incident response Chat app.

![Architecture of the incident response Chat app](https://developers.google.com/static/workspace/chat/images/tutorial-incident-response-architecture-diagram.png)

The architecture shows how the incident response Chat app processes an incident and resolution.

1. A user starts an incident from an external website hosted on Apps Script.
2. The website sends an asynchronous HTTP request to the Chat app, also hosted on Apps Script.
3. The incident response Chat app processes the request:
	1. The Apps Script Admin SDK service gets team member information, like user ID and email address.
		2. With a set of HTTP requests to Chat API using the Apps Script Advanced Chat service, the incident response Chat app creates an incident Chat space, populates it with team members, and sends a message to the space.
4. Team members discuss the incident in the Chat space.
5. A team member invokes a slash command to signal a resolution to the incident.
	1. An HTTP call to Chat API using the Apps Script Advanced Chat service lists all the Chat space's messages.
		2. Vertex AI receives the listed messages and generates a summary.
		3. The Apps Script `DocumentApp` service creates a Docs document and adds Vertex AI's summary to the document.
		4. The incident response Chat app calls Chat API to send a message sharing a link to the summary Docs document.

## Prepare the environment

This section shows how to create and configure a Google Cloud project for the Chat app.

### Create a Google Cloud project

### Google API Console

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Create a Project**.
	[Go to Create a Project](https://console.developers.google.com/projectcreate)
2. In the **Project Name** field, enter a descriptive name for your project.
	Optional: To edit the **Project ID**, click **Edit**. The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.
3. In the **Location** field, click **Browse** to display potential locations for your project. Then, click **Select**.
4. Click **Create**. The Google API Console navigates to the Dashboard page and your project is created within a few minutes.

### gcloud CLI

In one of the following development environments, access the Google Cloud CLI (`gcloud`):

- **Cloud Shell**: To use an online terminal with the gcloud CLI already set up, activate Cloud Shell.  
	[Activate Cloud Shell](https://console.developers.google.com/?cloudshell=true)
- **Local Shell**: To use a local development environment, [install](https://cloud.google.com/sdk/docs/install) and [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI.  
	To create a Cloud project, use the `gcloud projects create` command:
	```
	gcloud projects create PROJECT_ID
	```
	Replace PROJECT\_ID by setting the ID for the project you want to create.

### Enable billing for the Cloud project

### Google API Console

1. In the Google API Console, go to **Billing**. Click **Menu** \> **Billing** \> **My Projects**.
	[Go to Billing for My Projects](https://console.developers.google.com/billing/projects)
2. In **Select an organization**, choose the organization associated with your Google Cloud project.
3. In the project row, open the **Actions** menu (), click **Change billing**, and choose the Cloud Billing account.
4. Click **Set account**.

### gcloud CLI

1. To list available billing accounts, run:
	```
	gcloud billing accounts list
	```
2. Link a billing account with a Google Cloud project:
	```
	gcloud billing projects link PROJECT_ID --billing-account=BILLING_ACCOUNT_ID
	```
	Replace the following:
	- `PROJECT_ID` is the **Project ID** for the Cloud project for which you want to enable billing.
		- `BILLING_ACCOUNT_ID` is the **billing account ID** to link with the Google Cloud project.

### Enable the APIs

### Google API Console

1. In the Google API Console, enable the Google Chat API, the Google Docs API, the Admin SDK API, the Google Workspace Marketplace SDK, and the Vertex AI API.
	[Enable the APIs](https://console.developers.google.com/flows/enableapi?apiid=chat.googleapis.com,%20docs.googleapis.com,%20admin.googleapis.com,%20aiplatform.googleapis.com,%20appsmarket-component.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

### gcloud CLI

1. If necessary, set the current Cloud project to the one you created with the `gcloud config set project` command:
	```
	gcloud config set project PROJECT_ID
	```
	Replace PROJECT\_ID with the **Project ID** of the Cloud project you created.
2. Enable the Google Chat API, Google Docs API, Admin SDK API, Google Workspace Marketplace SDK, and Vertex AI API with the `gcloud services enable` command:
	```
	gcloud services enable chat.googleapis.com docs.googleapis.com admin.googleapis.com aiplatform.googleapis.com appsmarket-component.googleapis.com
	```

## Set up authentication and authorization

The Chat app accesses Google Chat API using the Chat app's credentials. The app accesses the Admin SDK API and Google Docs API with user credentials.

### Set up user authentication and authorization

Authentication and authorization lets the Chat app access resources in Google Workspace and Google Cloud to process an incident response. Specifically, user authentication is used to call Docs API and Admin SDK API.

In this tutorial, you publish the app internally to your Workspace domain, so it's acceptable to use placeholder information. Before publishing the app externally, replace placeholder information with real information in the consent screen.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
	1. Under **App Information**, in **App name**, type `Incident Management`.
		2. In **User support email**, select your email address or an appropriate Google group.
		3. Click **Next**.
		4. Under **Audience**, select **Internal**. If you can't select **Internal**, select **External**.
		5. Click **Next**.
		6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
		7. Click **Next**.
		8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
		9. Click **Continue**.
		10. Click **Create**.
		11. If you selected **External** for user type, add test users:
		1. Click **Audience**.
				2. Under **Test users**, click **Add users**.
				3. Enter your email address and any other authorized test users, then click **Save**.
3. Click **Data Access** \> **Add or Remove Scopes**. A panel appears with a list of scopes for each API that you've enabled in your Google Cloud project.
	1. Under **Manually add scopes**, paste the following scopes:
		- `https://www.googleapis.com/auth/documents`
				- `https://www.googleapis.com/auth/admin.directory.user.readonly`
				- `https://www.googleapis.com/auth/script.external_request`
				- `https://www.googleapis.com/auth/userinfo.email`
				- `https://www.googleapis.com/auth/cloud-platform`
		2. Click **Add to Table**.
		3. Click **Update**.
		4. After selecting the scopes required by your app, on the **Data Access** page, click **Save**.

### Set up app authentication and authorization

App Authentication is used to call Chat API.

#### Create a service account in Google Cloud console

To create a service account, follow these steps:

### Google API Console

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.developers.google.com/iam-admin/serviceaccounts)
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

#### Create a private key

To create and download a private key for the service account, follow these steps:

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Keys** \> **Add key** \> **Create new key**.
4. Select **JSON**, then click **Create**.
	Your new public/private key pair is generated and downloaded to your machine as a new file. Save the downloaded JSON file as `credentials.json` in your working directory. This file is the only copy of this key. For information about how to store your key securely, see [Managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
5. Click **Close**.

For more information about service accounts, see [service accounts](https://cloud.google.com/iam/docs/service-accounts) in the Google Cloud IAM documentation.

#### Create a Google Workspace Marketplace-compatible OAuth client

To create a Google Workspace Marketplace-compatible OAuth client, follow these steps:

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.developers.google.com/iam-admin/serviceaccounts)
2. Click the service account you created for your Chat app.
3. Click **Advanced settings**.
4. Click **Create Google Workspace Marketplace-compatible OAuth client**.
5. Click **Continue**.

A confirmation message appears that says a Google Workspace Marketplace-compatible OAuth client has been created.

## Create and deploy the Chat app

In the following section, you copy and update an entire Apps Script project that contains all the required application code for your Chat app, so there's no need to copy and paste each file.

Some functions include underscores at the end of their names, like `processSlashCommand_()` from `ChatApp.gs`. The underscore hides the function from the incident initialization web page when it's open in a browser. For more information, see [Private functions](../../apps-script/guides/html/communication.md#private_functions).

Apps Script supports two file types, `.gs` scripts and `.html` files. To abide by this support, the app's client-side JavaScript is included inside `<script />` tags and its CSS is included inside `<style />` tags inside an HTML file.

Optionally, you can view the entire project on GitHub.

[View on GitHub](https://github.com/googleworkspace/google-chat-samples/tree/main/apps-script/incident-response-app-auth)

Here's an overview of each file:

`Consts.gs`

Defines constants referenced by other code files, including your Cloud project ID, Vertex AI location ID, app credentials for the service account and the slash command ID for closing an incident.

#### View Consts.gs code

```
const PROJECT_ID = 'replace-with-your-project-id';
const CLOSE_INCIDENT_COMMAND_ID = 1;
const APP_CREDENTIALS = 'replace-with-your-app-credentials';
const APP_CREDENTIALS_SCOPES = 'https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.spaces.create';
const VERTEX_AI_LOCATION_ID = 'us-central1';
const MODEL_ID = 'gemini-1.5-flash-002';
```

`ChatApp.gs`

Handles Chat interaction events, including messages, card clicks, slash commands, and dialogs. Responds to the `/closeIncident` slash command by opening a dialog to gather incident resolution details. Reads messages in the space by calling the `spaces.messages.list` method in the Chat API. Gets user IDs using the Admin SDK Directory service in Apps Script.

#### View ChatApp.gs code

```
/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * This app only responds to a slash command with the ID 1 ("/closeIncident").
 * It will respond to any other message with a simple "Hello" text message.
 *
 * @param {Object} event the event object from Google Chat
 */
function onMessage(event) {
  if (event.message.slashCommand) {
    return processSlashCommand_(event);
  }
  return { "text": "Hello from Incident Response app!" };
}

/**
 * Responds to a CARD_CLICKED event in Google Chat.
 *
 * This app only responds to one kind of dialog (Close Incident).
 *
 * @param {Object} event the event object from Google Chat
 */
function onCardClick(event) {
  if (event.isDialogEvent) {
    if (event.dialogEventType == 'SUBMIT_DIALOG') {
      return processSubmitDialog_(event);
    }
    return {
      actionResponse: {
        type: "DIALOG",
        dialogAction: {
          actionStatus: "OK"
        }
      }
    };
  }
}

/**
 * Responds to a MESSAGE event with a Slash command in Google Chat.
 *
 * This app only responds to a slash command with the ID 1 ("/closeIncident")
 * by returning a Dialog.
 *
 * @param {Object} event the event object from Google Chat
 */
function processSlashCommand_(event) {
  if (event.message.slashCommand.commandId != CLOSE_INCIDENT_COMMAND_ID) {
    return {
      "text": "Command not recognized. Use the command \`/closeIncident\` to close the incident managed by this space."
    };
  }
  const sections = [
    {
      header: "Close Incident",
      widgets: [
        {
          textInput: {
            label: "Please describe the incident resolution",
            type: "MULTIPLE_LINE",
            name: "description"
          }
        },
        {
          buttonList: {
            buttons: [
              {
                text: "Close Incident",
                onClick: {
                  action: {
                    function: "closeIncident"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  ];
  return {
    actionResponse: {
      type: "DIALOG",
      dialogAction: {
        dialog: {
          body: {
            sections,
          }
        }
      }
    }
  };
}

/**
 * Responds to a CARD_CLICKED event with a Dialog submission in Google Chat.
 *
 * This app only responds to one kind of dialog (Close Incident).
 * It creates a Doc with a summary of the incident information and posts a message
 * to the space with a link to the Doc.
 *
 * @param {Object} event the event object from Google Chat
 */
function processSubmitDialog_(event) {
  const resolution = event.common.formInputs.description[""].stringInputs.value[0];
  const chatHistory = concatenateAllSpaceMessages_(event.space.name);
  const chatSummary = summarizeChatHistory_(chatHistory);
  const docUrl = createDoc_(event.space.displayName, resolution, chatHistory, chatSummary);
  return {
    actionResponse: {
      type: "NEW_MESSAGE",
    },
    text: \`Incident closed with the following resolution: ${resolution}\n\nHere is the automatically generated post-mortem:\n${docUrl}\`
  };
}

/**
 * Lists all the messages in the Chat space, then concatenate all of them into
 * a single text containing the full Chat history.
 *
 * For simplicity for this demo, it only fetches the first 100 messages.
 *
 * Messages with slash commands are filtered out, so the returned history will
 * contain only the conversations between users and not app command invocations.
 *
 * @return {string} a text containing all the messages in the space in the format:
 *          Sender's name: Message
 */
function concatenateAllSpaceMessages_(spaceName) {
  // Call Chat API method spaces.messages.list
  const response = Chat.Spaces.Messages.list(spaceName, { 'pageSize': 100 });
  const messages = response.messages;
  // Fetch the display names of the message senders and returns a text
  // concatenating all the messages.
  let userMap = new Map();
  return messages
    .filter(message => message.slashCommand === undefined)
    .map(message => \`${getUserDisplayName_(userMap, message.sender.name)}: ${message.text}\`)
    .join('\n');
}

/**
 * Obtains the display name of a user by using the Admin Directory API.
 *
 * The fetched display name is cached in the provided map, so we only call the API
 * once per user.
 *
 * If the user does not have a display name, then the full name is used.
 *
 * @param {Map} userMap a map containing the display names previously fetched
 * @param {string} userName the resource name of the user
 * @return {string} the user's display name
 */
function getUserDisplayName_(userMap, userName) {
  if (userMap.has(userName)) {
    return userMap.get(userName);
  }
  let displayName = 'Unknown User';
  try {
    const user = AdminDirectory.Users.get(
      userName.replace("users/", ""),
      { projection: 'BASIC', viewType: 'domain_public' });
    displayName = user.name.displayName ? user.name.displayName : user.name.fullName;
  } catch (e) {
    // Ignore error if the API call fails (for example, because it's an
    // out-of-domain user or Chat app)) and just use 'Unknown User'.
  }
  userMap.set(userName, displayName);
  return displayName;
}
```

`ChatSpaceCreator.gs`

Receives form data users enter on the incident initialization web page, and uses it to set up a Chat space by creating and populating it, and then posts a message about the incident.

#### View ChatSpaceCreator.gs code

```
/**
 * Handles an incident by creating a chat space, adding members, and posting a message.
 * All the actions are done using application credentials.
 *
 * @param {Object} formData - The data submitted by the user. It should contain the fields:
 *                           - title: The display name of the chat space.
 *                           - description: The description of the incident.
 *                           - users: A comma-separated string of user emails to be added to the space.
 * @return {string} The resource name of the new space.
 */
function handleIncident(formData) {
  const users = formData.users.trim().length > 0 ? formData.users.split(',') : [];
  const service = getService_();
  if (!service.hasAccess()) {
    console.error(service.getLastError());
    return;
   }
  const spaceName = createChatSpace_(formData.title, service);
  createHumanMembership_(spaceName, getUserEmail(), service);
  for (const user of users ){
    createHumanMembership_(spaceName, user, service);
  }
  createMessage_(spaceName, formData.description, service);
  return spaceName;
}
/**
 * Creates a chat space with application credentials.
 *
 * @param {string} displayName - The name of the chat space.
 * @param {object} service - The credentials of the service account.
 * @returns {string} The resource name of the new space.
*/
function createChatSpace_(displayName, service) {
  try {
    // For private apps, the alias can be used
    const my_customer_alias = "customers/my_customer";
    // Specify the space to create.
    const space = {
        displayName: displayName,
        spaceType: 'SPACE',                
        customer: my_customer_alias
    };
    // Call Chat API with a service account to create a message.
    const createdSpace = Chat.Spaces.create(
        space,
        {},
        // Authenticate with the service account token.
        {'Authorization': 'Bearer ' + service.getAccessToken()});
    return createdSpace.name;
  } catch (err) {
    // TODO (developer) - Handle exception.
    console.log('Failed to create space with error %s', err.message);
  }
}
/*
 * Creates a chat message with application credentials.
 *
 * @param {string} spaceName - The resource name of the space.
 * @param {string} message - The text to be posted.
 * @param {object} service - The credentials of the service account.
 * @return {string} the resource name of the new space.
 */
function createMessage_(spaceName, message, service) {
  try {
    // Call Chat API with a service account to create a message.
    const result = Chat.Spaces.Messages.create(
        {'text': message},
        spaceName,
        {},
        // Authenticate with the service account token.
        {'Authorization': 'Bearer ' + service.getAccessToken()});

  } catch (err) {
    // TODO (developer) - Handle exception.
    console.log('Failed to create message with error %s', err.message);
  }
}
/**
 * Creates a human membership in a chat space with application credentials.
 *
 * @param {string} spaceName - The resource name of the space.
 * @param {string} email - The email of the user to be added.
 * @param {object} service - The credentials of the service account.
 */
function createHumanMembership_(spaceName, email, service){
  try{
    const membership = {
      member: {
        name: 'users/'+email,
        // User type for the membership
        type: 'HUMAN'
      }
    };
    const result = Chat.Spaces.Members.create(
      membership,
      spaceName,
      {},
      {'Authorization': 'Bearer ' + service.getAccessToken()}
    );
  } catch (err){
    console.log('Failed to create membership with error %s', err.message)
  }

}

 /*
 * Creates a service for the service account.
 * @return {object}  - The credentials of the service account.
 */
function getService_() {
  return OAuth2.createService(APP_CREDENTIALS.client_email)
      .setTokenUrl('https://oauth2.googleapis.com/token')
      .setPrivateKey(APP_CREDENTIALS.private_key)
      .setIssuer(APP_CREDENTIALS.client_email)
      .setSubject(APP_CREDENTIALS.client_email)
      .setScope(APP_CREDENTIALS_SCOPES)
      .setPropertyStore(PropertiesService.getScriptProperties());
}
```

`DocsApi.gs`

Calls the Docs API to create a Docs document in a user's Google Drive and writes a summary of the incident information, created in `VertexAiApi.gs`, to the document.

#### View DocsApi.gs code

```
/**
 * Creates a Doc in the user's Google Drive and writes a summary of the incident information to it.
 *
 * @param {string} title The title of the incident
 * @param {string} resolution Incident resolution described by the user
 * @param {string} chatHistory The whole Chat history be included in the document
 * @param {string} chatSummary A summary of the Chat conversation to be included in the document
 * @return {string} the URL of the created Doc
 */
function createDoc_(title, resolution, chatHistory, chatSummary) {
  let doc = DocumentApp.create(title);
  let body = doc.getBody();
  body.appendParagraph(\`Post-Mortem: ${title}\`).setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph("Resolution").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(resolution);
  body.appendParagraph("Summary of the conversation").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(chatSummary);
  body.appendParagraph("Full Chat history").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(chatHistory);
  return doc.getUrl();
}
```

`VertexAiApi.gs`

Summarizes the conversation in the Chat space using Vertex AI API. This summary is posted in a specially-created document in `DocsAPI.gs`.

#### View VertexAiApi.gs code

```
/**
 * Summarizes a Chat conversation using the Vertex AI text prediction API.
 *
 * @param {string} chatHistory The Chat history that will be summarized.
 * @return {string} The content from the text prediction response.
 */

function summarizeChatHistory_(chatHistory) {

  const API_ENDPOINT = \`https://${VERTEX_AI_LOCATION_ID}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${VERTEX_AI_LOCATION_ID}/publishers/google/models/${MODEL_ID}:generateContent\`;
  const prompt = "Summarize the following conversation between Engineers resolving an incident"
      + " in a few sentences. Use only the information from the conversation.\n\n" + chatHistory;
  // Get the access token.
  const accessToken = ScriptApp.getOAuthToken();

  const headers = {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  };
  const payload = {
    'contents': {
      'role': 'user',
      'parts' : [
        {
          'text': prompt
        }
      ]
    }
  }
  const options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true,
  };
  try {
    const response = UrlFetchApp.fetch(API_ENDPOINT, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    if (responseCode === 200) {
      const jsonResponse = JSON.parse(responseText);
      console.log(jsonResponse)
      if (jsonResponse.candidates && jsonResponse.candidates.length > 0) {
        return jsonResponse.candidates[0].content.parts[0].text; // Access the summarized text
      } else {
        return "No summary found in response.";
      }

    } else {
      console.error("Vertex AI API Error:", responseCode, responseText);
      return \`Error: ${responseCode} - ${responseText}\`;
    }
  } catch (e) {
    console.error("UrlFetchApp Error:", e);
    return "Error: " + e.toString();
  }
}
```

`WebController.gs`

Serves the incident initialization website.

#### View WebController.gs code

```
/**
 * Serves the web page from Index.html.
 */
function doGet() {
  return HtmlService
    .createTemplateFromFile('Index')
    .evaluate();
}

/**
 * Serves the web content from the specified filename.
 */
function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}

/**
 * Returns the email address of the user running the script.
 */
function getUserEmail() {
  return Session.getActiveUser().getEmail();
}
```

`Index.html`

The HTML comprising the incident initialization website.

#### View Index.html code

```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <?!= include('Stylesheet'); ?>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <h1>Incident Manager</h1>
        <form id="incident-form" onsubmit="handleFormSubmit(this)">
          <div id="form">
            <p>
              <label for="title">Incident title</label><br/>
              <input type="text" name="title" id="title" />
            </p>
            <p>
              <label for="users">Incident responders</label><br/>
              <small>
                Please enter a comma-separated list of email addresses of the users
                that should be added to the space.
                Do not include <?= getUserEmail() ?> as it will be added automatically.
              </small><br/>
              <input type="text" name="users" id="users" />
            </p>
            <p>
              <label for="description">Initial message</label></br>
              <small>This message will be posted after the space is created.</small><br/>
              <textarea name="description" id="description"></textarea>
            </p>
            <p class="text-center">
              <input type="submit" value="CREATE CHAT SPACE" />
            </p>
          </div>
          <div id="output" class="hidden"></div>
          <div id="clear" class="hidden">
            <input type="reset" value="CREATE ANOTHER INCIDENT" onclick="onReset()" />
          </div>
        </form>
      </div>
    </div>
    <?!= include('JavaScript'); ?>
  </body>
</html>
```

`JavaScript.html`

Handles form behavior including submits, errors, and clears, for the incident initialization website. It's included into `Index.html` by the custom `include` function in `WebController.gs`.

#### View JavaScript.html code

```
<script>
  var formDiv = document.getElementById('form');
  var outputDiv = document.getElementById('output');
  var clearDiv = document.getElementById('clear');

  function handleFormSubmit(formObject) {
    event.preventDefault();
    outputDiv.innerHTML = 'Please wait while we create the space...';
    hide(formDiv);
    show(outputDiv);
    google.script.run
      .withSuccessHandler(updateOutput)
      .withFailureHandler(onFailure)
      .handleIncident(formObject);
  }

  function updateOutput(response) {
    var spaceId = response.replace('spaces/', '');
    outputDiv.innerHTML =
      '<p>Space created!</p><p><a href="https://mail.google.com/chat/#chat/space/'
        + spaceId
        + '" target="_blank">Open space</a></p>';
    show(outputDiv);
    show(clearDiv);
  }

  function onFailure(error) {
    outputDiv.innerHTML = 'ERROR: ' + error.message;
    outputDiv.classList.add('error');
    show(outputDiv);
    show(clearDiv);
  }

  function onReset() {
    outputDiv.innerHTML = '';
    outputDiv.classList.remove('error');
    show(formDiv);
    hide(outputDiv);
    hide(clearDiv);
  }

  function hide(element) {
    element.classList.add('hidden');
  }

  function show(element) {
    element.classList.remove('hidden');
  }
</script>
```

`Stylesheet.html`

The CSS for the incident initialization website. It's included into `Index.html` by the custom `include` function in `WebController.gs`.

#### View Stylesheet.html code

```
<style>
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
  }
  div.content {
    width: 80%;
    max-width: 1000px;
    padding: 1rem;
    border: 1px solid #999;
    border-radius: 0.25rem;
    box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.08), 0 2px 4px 2px rgba(66, 66, 66, 0.16);
  }
  h1 {
    text-align: center;
    padding-bottom: 1rem;
    margin: 0 -1rem 1rem -1rem;
    border-bottom: 1px solid #999;
  }
 #output {
    text-align: center;
    min-height: 250px;
  }
  div#clear {
    text-align: center;
    padding-top: 1rem;
    margin: 1rem -1rem 0 -1rem;
    border-top: 1px solid #999;
  }
  input[type=text], textarea {
    width: 100%;
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;
    border: 0;
    border-bottom: 1px solid #999;
    background-color: #f0f0f0;
  }
  textarea {
    height: 5rem;
  }
  small {
    color: #999;
  }
  input[type=submit], input[type=reset] {
    padding: 1rem;
    border: none;
    background-color: #6200ee;
    color: #fff;
    border-radius: 0.25rem;
    width: 25%;
  }
  .hidden {
    display: none;
  }
  .text-center {
    text-align: center;
  }
  .error {
    color: red;
  }
</style>
```

### Find your Cloud project number and ID

1. In the Google API Console, go to your Cloud project.
	[Go to Google API Console](https://console.developers.google.com/)
2. Click Settings and Utilities \> **Project settings**.
3. Note the values in the **Project number** and **Project ID** fields. You use them in the following sections.

### Create the Apps Script project

To create an Apps Script project and connect it with your Cloud project:

1. Click the following button to open the **Respond to incidents with Google Chat** Apps Script project.  
	[Open the project](https://script.google.com/d/1rPyW_0NO6ZgBhObmCDDFGBzIvXNdsFnvNJMOx6qWBbMCZ0oaQ21gkRwR/edit?usp=sharing)
2. Click **Overview**.
3. On the overview page, click ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Make a copy**.
4. Name your copy of the Apps Script project:
	1. Click **Copy of Respond to incidents with Google Chat**.
		2. In **Project title**, type `Incident Management Chat app`.
		3. Click **Rename**.
5. In your copy of the Apps Script project, go to the `Consts.gs` file and replace `YOUR_PROJECT_ID` with the ID of your Cloud project.

### Set the Apps Script project's Cloud project

1. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) **Project Settings**.
2. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
3. In **GCP project number**, paste the project number of your Cloud project.
4. Click **Set project**. The Cloud project and Apps Script project are now connected.

### Create an Apps Script deployment

Now that all the code is in place, deploy the Apps Script project. You use the deployment ID when you configure the Chat app in the Google Cloud.

1. In Apps Script, open the incident response app's project.
	[Go to Apps Script](https://script.google.com/)
2. Click **Deploy** > **New deployment**.
3. If **Add-on** and **Web app** aren't already selected, next to **Select type**, click deployment types ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) and select **Add-on** and **Web app**.
4. In **Description**, enter a description for this version, like `Complete version of incident management app`.
5. In **Execute as**, select **User accessing the web app**
6. In **Who has access**, select **Anyone within your Workspace organization**, where "your Workspace organization" is the name of your Google Workspace organization.
7. Click **Deploy**. Apps Script reports successful deployment and provides a deployment ID and a URL for the incident initialization web page.
8. Make note of the **Web app** URL to visit later when you start an incident. Copy the **Deployment ID**. You use this ID while configuring the Chat app in Google API Console.
9. Click **Done**.

## Configure the Chat app in the Google API Console

This section shows how to configure the Google Chat API in the Google API Console with information about your Chat app, including the ID of the deployment that you just created from your Apps Script project.

1. In the Google API Console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**.
	[Go to Chat API configuration](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Clear **Build this Chat app as a Google Workspace add-on**. A dialog opens asking you to confirm. In the dialog, click **Disable**.
3. In **App name**, type `Incident Management`.
4. In **Avatar URL**, type `https://developers.google.com/chat/images/quickstart-app-avatar.png`.
5. In **Description**, type `Responds to incidents.`.
6. Click the **Enable Interactive features** toggle to the on position.
7. Under **Functionality**, select **Join spaces and group conversations**.
8. Under **Connection settings**, select **Apps Script**.
9. In **Deployment ID**, paste the Apps Script Deployment ID that you copied earlier from the Apps Script project deployment.
10. Register a [slash command](./commands.md) that the fully implemented Chat app uses:
	1. Under **Commands**, click **Add a command**.
		2. In **Command ID**, type `1`.
		3. In **Description**, type `Closes the incident being discussed in the space.`
		4. Under **Command type**, select **Slash command**.
		5. In **Slash command name**, type `/closeIncident`.
		6. Select **Opens a dialog**.
		7. Click **Done**. The slash command is registered and listed.
11. Under **Visibility**, select **Make this Chat app available to specific people and groups in Your Workspace Domain** and enter your email address.
12. Under **Logs**, select **Log errors to Logging**.
13. Click **Save**. A configuration saved message appears, meaning the app is ready to test.

## Receive administrator approval

To receive administrator approval, you must configure the Chat app in the Google Workspace Marketplace SDK.

### Configure the Chat app in the Google Workspace Marketplace SDK

To configure the Chat app in the Google Workspace Marketplace SDK, follow these steps:

1. In the Google API Console, go to go to **Menu** \> **APIs & Services** \> **Enabled APIs & services** \> **Google Workspace Marketplace SDK** \> **App Configuration**.
	[Go to App Configuration](https://console.developers.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk)
2. Complete the App Configuration page. How you configure your Chat app depends on who your intended audience is and other factors. For help completing the app configuration page, see [Configure your app in the SDK](../marketplace/enable-configure-sdk.md). For the purposes of this guide, enter the following information:
	1. Under **App visibility**, select **Private**.
		2. Under **Installation settings**, select **Admin install**.
		3. Under **App integrations**, select **Chat app**.
		4. Under **OAuth scopes**, enter the following scopes:
		- `https://www.googleapis.com/auth/chat.app.spaces`
				- `https://www.googleapis.com/auth/chat.app.memberships`
		5. Under **Developer information**, enter your **Developer name**, **Developer website URL**, and **Developer email**.
		6. Click **Save draft**.

After configuring the app, update the store listing:

1. In the Google Cloud console, go to go to **Menu** > **APIs & Services** > **Enabled APIs & services** > **Google Workspace Marketplace SDK** > **Store Listing**.
2. In **App details**, select Web Development as a Category.
3. In **Graphic Assets**, upload applications icons in requested formats.
4. In **Screenshots**, upload a screenshot of the application.
5. In **Support Links**, populate a Terms of Service URL, Privacy URL and Support URL.
6. In **Distribution**, Select the regions where this application will be available.
7. Click **Publish**.

### Get administrator approval

Now that your service account is configured to receive administrator approval, obtain it from a Google Workspace administrator who can grant approval by following the steps in [Set up authorization for Chat apps](https://support.google.com/a/answer/15137461?visit_id=638783856097573816-203044261&p=chat-app-auth&rd=1).

## Test the Chat app

To test the incident management Chat app, initiate an incident from the web page and verify that the Chat app works as expected:

1. Go to the Apps Script deployment web app URL.
2. When Apps Script asks permission to access your data, click **Review permissions**, sign in with an appropriate Google Account in your Google Workspace domain, and click **Allow**.
3. The incident initialization web page opens. Enter test information:
	1. In **Incident title**, type `The First Incident`.
		2. Optionally, in **Incident responders**, enter the email addresses of your fellow incident responders. They must be users with a Google Chat account in your Google Workspace organization or space creation fails. Don't enter your own email address because it's included automatically.
		3. In **Initial message**, type `Testing the incident management Chat app.`
4. Click **Create Chat Space**. A `creating space` message appears.
5. After the space is created, a `Space created!` message appears. Click **Open space**, which opens the space in Chat in a new tab.
6. Optionally, you and the other incident responders can send messages in the space. The app summarizes these messages using Vertex AI and shares a retrospective document.
7. To end the incident response and begin the resolution process, in the Chat space, type `/closeIncident`. An incident management dialog opens.
8. In **Close incident**, enter a description for the incident resolution, like `Test complete`.
9. Click **Close Incident**.

The Incident Management app lists the messages in the space, summarizes them with Vertex AI, pastes the summary in a Google Docs document, and shares the document in the space.

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.developers.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Related topics

- The incident response app authenticates with user credentials to call APIs and invoke Google Cloud services, like the Chat API and Vertex AI API. This means that the user initializing an incident must have access to these services. To make the app more robust, consider calling the Vertex AI API with as service account instead of the user credentials of the user invoking the `/closeIncident` slash command. For help configuring a service account for the Vertex AI API, see [Use a custom service account](https://cloud.google.com/vertex-ai/docs/general/custom-service-account).
