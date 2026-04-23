---
source: https://developers.google.com/workspace/add-ons/samples/tutorial-incident-response-user-auth
root: workspace
fetched_at: 2026-04-23T15:23:12.418Z
---

# Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication

This tutorial shows how to make a Google Chat app that responds to incidents in real time. When responding to an incident, the app creates and populates a Chat space, facilitates incident resolution with messages, app commands, and dialogs, and uses AI to summarize the incident response in a Google Docs document.

An *incident* is an event that requires the immediate attention of a team of people to resolve. Examples of incidents include:

- A time-sensitive case is created in a Customer Relationship Management (CRM) platform, requiring a service team to collaborate on a resolution.
- A system goes offline, alerting a group of site reliability engineers (SREs) so that they can work together to bring it back online.
- A high magnitude earthquake occurs, and emergency workers need to coordinate their response.

For the purposes of this tutorial, the incident alert starts when someone reports the incident with a button click from a web page. The web page simulates an incident by asking users to enter basic incident information: title, description, and email addresses of the responders.

See the incident management Chat app in action:

- ![The website that starts an incident.](https://developers.google.com/static/workspace/add-ons/samples/images/incident-response-1.png)
	Figure 1. The website where someone can report an incident.
- ![Notification that the incident Chat space is created.](https://developers.google.com/static/workspace/add-ons/samples/images/incident-response-2.png)
	**Figure 2.** Notification that the incident Chat space is created.
- ![The incident response Chat space.](https://developers.google.com/static/workspace/add-ons/samples/images/incident-response-3.png)
	**Figure 3.** The incident response Chat space.
- ![Resolving the incident with a quick command.](https://developers.google.com/static/workspace/add-ons/samples/images/incident-response-4.png)
	**Figure 4.** Resolving the incident with a quick command.
- ![Incident resolution dialog.](https://developers.google.com/static/workspace/add-ons/samples/images/incident-response-5.png)
	**Figure 5.** Incident resolution dialog.
- ![Incident resolution Google Docs document shared in space.](https://developers.google.com/static/workspace/add-ons/samples/images/incident-response-6.png)
	**Figure 6.** Incident resolution Google Docs document shared in space.
- ![The AI summary incident resolution Google Doc.](https://developers.google.com/static/workspace/add-ons/samples/images/incident-response-7.png)
	**Figure 7.** The AI summary incident resolution Google Docs document.

## Prerequisites

If you need any of these prerequisites turned on for your organization, ask your Google Workspace administrator to turn them on:

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- To have [Directory](https://support.google.com/a/answer/60218) (contact sharing) turned on for Google Workspace. The incident app uses the directory to look up the incident responders' contact info, like name and email address. Incident responders must be users with a Google Chat account in your Google Workspace organization.

## Objectives

- Build a Chat app that responds to incidents.
- Help users respond to incidents by doing the following:
	- Creating incident response spaces.
		- Posting messages summarizing incidents and responses.
		- Supporting collaboration with interactive Chat app features.
- Summarize conversations and resolutions with Vertex AI.

## Architecture

The following diagram shows the architecture of the Google Workspace and Google Cloud resources used by the incident response Google Chat app.

![Architecture of the incident response Google Chat app](https://developers.google.com/static/workspace/add-ons/samples/images/tutorial-incident-response-architecture-diagram.png)

The architecture shows how the incident response Google Chat app processes an incident and resolution.

1. A user starts an incident from an external website hosted on Apps Script.
2. The website sends an asynchronous HTTP request to the Google Chat app, also hosted on Apps Script.
3. The incident response Google Chat app processes the request:
	1. The Apps Script Admin SDK service gets team member information, like user ID and email address.
		2. With a set of HTTP requests to Chat API using the Apps Script Advanced Chat service, the incident response Google Chat app creates an incident Chat space, populates it with team members, and sends a message to the space.
4. Team members discuss the incident in the Chat space.
5. A team member invokes a quick command to signal a resolution to the incident.
	1. An HTTP call to Chat API using the Apps Script Advanced Chat service lists all the Chat space's messages.
		2. Vertex AI receives the listed messages and generates a summary.
		3. The Apps Script `DocumentApp` service creates a Docs document and adds Vertex AI's summary to the document.
		4. The incident response Google Chat app calls Chat API to send a message sharing a link to the summary Docs document.

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

1. In the Google API Console, enable the Google Chat API, the Google Docs API, the Admin SDK API, and the Vertex AI API.
	[Enable the APIs](https://console.developers.google.com/flows/enableapi?apiid=chat.googleapis.com,%20docs.googleapis.com,%20admin.googleapis.com,%20aiplatform.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

### gcloud CLI

1. If necessary, set the current Cloud project to the one you created with the `gcloud config set project` command:
	```
	gcloud config set project PROJECT_ID
	```
	Replace PROJECT\_ID with the **Project ID** of the Cloud project you created.
2. Enable the Google Chat API, Google Docs API, Admin SDK API, and Vertex AI API with the `gcloud services enable` command:
	```
	gcloud services enable chat.googleapis.com docs.googleapis.com admin.googleapis.com aiplatform.googleapis.com
	```

### Set up authentication and authorization

Authentication and authorization lets the Chat app access resources in Google Workspace and Google Cloud to process an incident response.

In this tutorial, you publish the app internally so it's OK to use placeholder information. Before publishing the app externally, replace placeholder information with real information for the consent screen.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
	1. Under **App Information**, in **App name**, type `Incident Management with User Auth`.
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
		- `https://www.googleapis.com/auth/chat.spaces.create`
				- `https://www.googleapis.com/auth/chat.memberships`
				- `https://www.googleapis.com/auth/chat.memberships.app`
				- `https://www.googleapis.com/auth/chat.messages`
				- `https://www.googleapis.com/auth/documents`
				- `https://www.googleapis.com/auth/admin.directory.user.readonly`
				- `https://www.googleapis.com/auth/script.external_request`
				- `https://www.googleapis.com/auth/userinfo.email`
				- `https://www.googleapis.com/auth/cloud-platform`
		2. Click **Add to Table**.
		3. Click **Update**.
		4. After selecting the scopes required by your app, on the **Data Access** page, click **Save**.

## Create and deploy the Chat app

In the following section, you copy and update an entire Apps Script project that contains all the required application code for your Chat app, so there's no need to copy and paste each file.

Some functions include underscores at the end of their names, like `concatenateAllSpaceMessages_()` from `ChatApp.gs`. The underscore hides the function from the incident initialization web page when it's open in a browser. For more information, see [Private functions](../../../apps-script/guides/html/communication.md#private_functions).

Apps Script supports two file types, `.gs` scripts and `.html` files. To abide by this support, the app's client-side JavaScript is included inside `<script />` tags and its CSS is included inside `<style />` tags inside an HTML file.

Optionally, you can view the entire project on GitHub.

[View on GitHub](https://github.com/googleworkspace/add-ons-samples/tree/main/apps-script/chat/incident-response-user-auth)

Here's an overview of each file:

`Consts.gs`

Defines constants referenced by other code files, including your Cloud project ID, Vertex AI location ID, the quick command ID for closing an incident, and the Gemini model.

#### View Consts.gs code

```
const PROJECT_ID = 'replace-with-your-project-id';
const VERTEX_AI_LOCATION_ID = 'us-central1';
const CLOSE_INCIDENT_COMMAND_ID = 1;
const MODEL_ID = 'gemini-2.5-flash-lite';
```

`ChatApp.gs`

Handles Chat interaction events, including messages, button clicks, app commands, and dialogs. Responds to the `Close incident` quick command by opening a dialog to gather incident resolution details. Reads messages in the space by calling the `spaces.messages.list` method in the Chat API. Gets user IDs using the Admin SDK Directory service in Apps Script.

#### View ChatApp.gs code

```
/**
 * Responds to a MESSAGE event in Google Chat.
 * 
 * It always responds with a simple "Hello" text message.
 *
 * @param {Object} event the event object from Google Chat
 */
function onMessage(event) {
  return { hostAppDataAction: { chatDataAction: { createMessageAction: { message: {
    text: "Hello from Incident Response app!"
  }}}}};
}

/**
 * Responds to an APP_COMMAND event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onAppCommand(event) {
  if (event.chat.appCommandPayload.appCommandMetadata.appCommandId != CLOSE_INCIDENT_COMMAND_ID) {
    return { hostAppDataAction: { chatDataAction: { createMessageAction: { message: {
      text: "Command not recognized. Use the quick command \`Close incident\` to close the incident managed by this space."
    }}}}};
  }
  return { action: { navigations: [{ pushCard: { sections: [{
    header: "Close Incident",
    widgets: [{
      textInput: {
        label: "Please describe the incident resolution",
        type: "MULTIPLE_LINE",
        name: "description"
      }
    }, {
      buttonList: { buttons: [{
        text: "Close Incident",
        onClick: { action: { function: "closeIncident" }}
      }]}
    }]
  }]}}]}};
}

/**
 * Responds to a BUTTON_CLICKED event in Google Chat from Close Incident dialog.
 *
 * @param {Object} event the event object from Google Chat
 */
function closeIncident(event) {
  if (event.chat.buttonClickedPayload.isDialogEvent) {
    if (event.chat.buttonClickedPayload.dialogEventType == 'SUBMIT_DIALOG') {
      return processSubmitDialog_(event);
    }
    return { action: { navigations: [{ endNavigation: {
      action: "CLOSE_DIALOG" }
    }]}};
  }
}

/**
 * Responds to a BUTTON_CLICKED event in Google Chat from Close Incident dialog submission.
 *
 * It creates a Doc with a summary of the incident information and posts a message
 * to the space with a link to the Doc.
 *
 * @param {Object} event the event object from Google Chat
 */
function processSubmitDialog_(event) {
  const resolution = event.commonEventObject.formInputs.description.stringInputs.value[0];
  const space = event.chat.buttonClickedPayload.space;
  const chatHistory = concatenateAllSpaceMessages_(space.name);
  const chatSummary = summarizeChatHistory_(chatHistory);
  const docUrl = createDoc_(space.displayName, resolution, chatHistory, chatSummary);
  return { hostAppDataAction: { chatDataAction: { createMessageAction: { message: {
    text: \`Incident closed with the following resolution: ${resolution}\n\nHere is the automatically generated post-mortem:\n${docUrl}\`
  }}}}};
}

/**
 * Lists all the messages in the Chat space, then concatenate all of them into
 * a single text containing the full Chat history.
 *
 * For simplicity for this demo, it only fetches the first 100 messages.
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
    // out-of-domain user or Chat app) and just use 'Unknown User'.
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
 * Handles an incident by creating a chat space with the provided title and members, and posting a message.
 * All the actions are done using user credentials.
 *
 * @param {Object} formData - The data submitted by the user. It should contain the fields:
 *                           - title: The display name of the chat space.
 *                           - description: The description of the incident.
 *                           - users: A comma-separated string of user emails to be added to the space.
 * @return {string} The resource name of the new space.
 */
function handleIncident(formData) {
  const users = formData.users.trim().length > 0 ? formData.users.split(',') : [];
  const spaceName = setUpSpace_(formData.title, users);
  addAppToSpace_(spaceName);
  createMessage_(spaceName, formData.description);
  return spaceName;
}

/**
 * Creates a chat space.
 *
 * @return {string} the resource name of the new space.
 */
function setUpSpace_(displayName, users) {
  const memberships = users.map(email => ({
    member: {
      name: \`users/${email}\`,
      type: "HUMAN"
    }
  }));
  const request = {
    space: {
      displayName: displayName,
      spaceType: "SPACE"
    },
    memberships: memberships
  };
  // Call Chat API method spaces.setup
  const space = Chat.Spaces.setup(request);
  return space.name;
}

/**
 * Adds this Chat app to the space.
 *
 * @return {string} the resource name of the new membership.
 */
function addAppToSpace_(spaceName) {
  const request = {
    member: {
      name: "users/app",
      type: "BOT"
    }
  };
  // Call Chat API method spaces.members.create
  const membership = Chat.Spaces.Members.create(request, spaceName);
  return membership.name;
}

/**
 * Creates a chat message.
 *
 * @param {string} spaceName - The resource name of the space.
 * @param {string} message - The text to be posted.
 * @return {string} the resource name of the new message.
 */
function createMessage_(spaceName, message) {
  const request = {
    text: message
  };
  // Call Chat API method spaces.messages.create
  const result = Chat.Spaces.Messages.create(request, spaceName);
  return result.name;
}
```

`DocsApi.gs`

Calls the Google Docs API to create a Google Docs document in a user's Google Drive and writes a summary of the incident information, created in `VertexAiApi.gs`, to the document.

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

Summarizes the conversation in the Chat space using Vertex AI. This summary is posted in a specially-created document in `DocsAPI.gs`.

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
  const prompt =
    "Summarize the following conversation between Engineers resolving an incident"
      + " in a few sentences. Use only the information from the conversation.\n\n"
      + chatHistory;
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

1. Click the following button to open the **Incident Management Chat app with User Auth** Apps Script project.  
	[Open the project](https://script.google.com/d/1JklUisqWthIDPlWsbRUO65u6kyQlvpIrLbCRSfdltW0O3EEn3CEgkO2N/edit?usp=sharing)
2. Click **Overview**.
3. On the overview page, click ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Make a copy**.
4. Name your copy of the Apps Script project:
	1. Click **Copy of Incident Management Chat app with User Auth**.
		2. In **Project title**, type `Incident Management Chat app with User Auth`.
		3. Click **Rename**.
5. In your copy of the Apps Script project, go to the `Consts.gs` file and set `PROJECT_ID` with the ID of your Cloud project.

### Set the Apps Script project's Cloud project

1. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) **Project Settings**.
2. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
3. In **GCP project number**, paste the project number of your Cloud project.
4. Click **Set project**. The Cloud project and Apps Script project are now connected.

### Create an Apps Script test deployment

Now that all the code is in place, deploy the Apps Script project. You use the deployment ID when you configure the Chat app in the Google Cloud.

1. In Apps Script, open the incident response app's project.
	[Go to Apps Script](https://script.google.com/)
2. Click **Deploy** > **Test deployments**.
3. If **Google Workspace Add-on** and **Web app** aren't already selected, next to **Select type**, click deployment types ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) and select **Google Workspace Add-on** and **Web app**.
4. Apps Script provides a deployment ID and a URL for the web app.
5. Make note of the **Web app** URL to visit later when you start an incident. Copy the **Deployment ID**. You use this ID while configuring the Chat app in Google API Console.
6. Click **Done**.

### Configure the Chat app in the Google API Console

This section shows how to configure the Google Chat API in the Google API Console with information about your Chat app, including the ID of the deployment that you just created from your Apps Script project.

1. In the Google API Console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**.
	[Go to Chat API configuration](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. In **App name**, type `Incident Management with User Auth`.
3. In **Avatar URL**, type `https://developers.google.com/chat/images/quickstart-app-avatar.png`.
4. In **Description**, type `Responds to incidents`.
5. Click the **Enable Interactive features** toggle to the on position.
6. Under **Functionality**, select **Join spaces and group conversations**.
7. Under **Connection settings**, select **Apps Script**.
8. In **Deployment ID**, paste the Apps Script Deployment ID that you copied earlier from the Apps Script project deployment.
9. Register a [quick command](../chat/commands.md) that the fully implemented Chat app uses:
	1. Under **Commands**, click **Add a command**.
		2. In **Command ID**, type `1`.
		3. In **Description**, type `Closes the incident being discussed in the space.`
		4. Under **Command type**, select **Quick command**.
		5. In **Quick command name**, type `Close incident`.
		6. Select **Dialog**.
		7. Click **Done**. The command is registered and listed.
10. Under **Visibility**, select **Make this Chat app available to specific people and groups in Your Workspace Domain** and enter your email address.
11. Under **Logs**, select **Log errors to Logging**.
12. Click **Save**. A configuration saved message appears, meaning the app is ready to test.

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
7. To end the incident response and begin the resolution process, in the Chat space, launch the quick command `Close incident`. An incident management dialog opens.
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

- [Plan travels with an AI agent accessible across Google Workspace](./travel-concierge.md)
- [Answer questions based on Chat conversations with a Gemini AI Chat app](./tutorial-ai-knowledge-assistant.md)
- [Manage projects with Google Chat, Vertex AI, and Firestore](./tutorial-project-management.md)
- [Fact-check statements with an ADK AI agent and Gemini model](../../../apps-script/samples/custom-functions/fact-check.md)
- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
- [Build a Chat app as a Google Workspace add-on with Apps Script](https://youtube.com/watch?v=pDthZ2xssDc)
