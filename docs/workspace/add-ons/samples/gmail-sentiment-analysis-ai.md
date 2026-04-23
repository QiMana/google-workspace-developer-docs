---
source: https://developers.google.com/workspace/add-ons/samples/gmail-sentiment-analysis-ai
root: workspace
fetched_at: 2026-04-23T15:23:13.087Z
---

# Analyze and label Gmail messages with Gemini and Vertex AI

This solution uses Vertex AI and Gemini to analyze Gmail messages and label them based on their sentiment.

**Coding level**: Intermediate  
**Duration**: 30 minutes  
**Project type**: Google Workspace add-on

- ![A Google Workspace add-on that extends Gmail in a sidebar.](https://developers.google.com/static/workspace/add-ons/images/gmail-addon-sentiment-inbox.png)
	Figure 1: The Sentiment Analysis add-on displays a sidebar in Gmail where users can prompt Gemini to analyze and apply labels to messages based on the sentiment.
- ![A Gmail message with neutral sentiment.](https://developers.google.com/static/workspace/add-ons/images/gmail-addon-sentiment-neutral.png)
	Figure 2: The add-on labels a Gmail message with the label NEUTRAL TONE 😐.
- ![A Gmail message with happy sentiment.](https://developers.google.com/static/workspace/add-ons/images/gmail-addon-sentiment-happy.png)
	Figure 3: The add-on labels a Gmail message with the label HAPPY TONE 😊.
- ![A Gmail message with upset sentiment.](https://developers.google.com/static/workspace/add-ons/images/gmail-addon-sentiment-upset.png)
	Figure 4: The add-on labels a Gmail message with the label UPSET TONE 😡.

## Objectives

- Understand what the solution does.
- Understand what the Google services do within the solution.
- Set up the environment.
- Set up the Google Apps Script project.
- Run the script.

## About this solution

![Screenshot of the Sentiment Analysis Google Workspace add-on](https://developers.google.com/static/workspace/add-ons/images/gmail-addon-sentiment-sidebar.png)

![](https://developers.google.com/static/workspace/add-ons/images/gmail-addon-sentiment-sidebar.png)

This solution is a Google Workspace add-on that applies labels based on the sentiment of Gmail messages. To analyze the message content, the add-on uses Vertex AI to prompt the Gemini 2.5 Flash model and return one of the following sentiments:

- Positive
- Negative
- Neutral

With the response from Gemini, the add-on applies a corresponding Gmail label to the message.

To limit the request to the Vertex AI API, this add-on only analyzes and applies labels to the 10 most recent messages in the Gmail user's inbox. To learn more about quotas and limits, visit the [Vertex AI documentation](https://cloud.google.com/vertex-ai/docs/quotas).

### How it works

This solution is built in Google Apps Script and uses the following Google services and products:

- [Vertex AI API](https://cloud.google.com/vertex-ai/docs/reference/rest) –Prompts the [Gemini 2.5 Flash model](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flash) to analyze the content of Gmail messages and identify the sentiment.
- Apps Script services:
	- [Gmail service](../../../apps-script/reference/gmail.md) –Retrieves and applies labels to Gmail messages. Optionally, creates sample messages for testing the add-on.
		- [Card service](../../../apps-script/reference/card-service.md) –Creates the user interface of the add-on that appears as a sidebar in Gmail.
		- [Url Fetch service](../../../apps-script/reference/url-fetch.md) –Connects to Vertex AI API for sentiment analysis.
		- [Script service](../../../apps-script/reference/script.md) – To call the Vertex AI API, gets a OAuth 2.0 access token for the add-on using the [`getOAuthToken`](../../../apps-script/reference/script/script-app.md#getoauthtoken) method.

## Prerequisites

- A [Google Cloud project](../../guides/create-project.md) with billing enabled. To learn if you have access, see [Permissions required to enable billing](https://cloud.google.com/billing/docs/how-to/modify-project#required-permissions-enable).

## Set up your environment

This section explains how to configure and set up your environment in the Google Cloud console and Apps Script.

### Configure your Cloud project in the Google Cloud console

This section shows you how to enable the Vertex AI API and configure the OAuth consent screen in your Cloud project.

#### Enable the Vertex AI API

1. In the Google Cloud console, open your Google Cloud project and enable the Vertex AI API:
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com)
2. Confirm that you're enabling the API in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct API, then click **Enable**.

#### Configure the OAuth consent screen

Google Workspace add-ons require a consent screen configuration. Configuring your add-on's OAuth consent screen defines what Google displays to users.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter a name for the app.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select **Internal**.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../guides/configure-oauth-consent.md) guide.

### Create and set up your Apps Script project

To create and set up your Apps Script project for the add-on, complete the following steps:

1. Click the following button to open the **Gmail Sentiment Analysis with Gemini and Vertex AI** Apps Script project.  
	[Open the Apps Script project](https://script.google.com/d/1Z2gfvr0oYn68ppDtQbv0qIuKKVWhvwOTr-gCE0GFKVjNk8NDlpfJAGAr/edit?usp=sharing)
2. Click **Overview** .
3. On the overview page, click Make a copy ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg).
4. Get the number of your Cloud project:
	1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Settings**.
		[Go to IAM & Admin Settings](https://console.developers.google.com/iam-admin/settings)
		2. In the **Project number** field, copy the value.
5. Connect your Cloud project with your Apps Script project:
	1. In your copied Apps Script project, click **Project Settings** ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg).
		2. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
		3. In **GCP project number**, paste the Cloud project number.
		4. Click **Set project**.

## Test the add-on

To try out the add-on, install a test deployment and then open the add-on in Gmail:

1. Create and install an Apps Script test deployment:
	1. In your copied Apps Script project, click **Editor** .
		2. Open the `Code.gs` file and click **Run**. When prompted, authorize the script.
		3. Click **Deploy** \> **Test deployments**.
		4. Click **Install** \> **Done**.
2. Open Gmail.
	[Go to Gmail](https://mail.google.com/)
3. On the right sidebar, open the add-on **Sentiment Analysis**.
4. If prompted, authorize the add-on.
5. Optional: To create messages to test with your add-on, click **Generate sample emails**. Three messages appear in your inbox. If you don't see them, refresh the page.
6. To add labels, click **Analyze emails**.

The add-on reviews the latest 10 messages in your inbox and then applies one of the following labels based on the message content:

- **HAPPY TONE 😊**
- **NEUTRAL TONE 😐**
- **UPSET TONE 😡**

## Review the code

Review the Apps Script code for this solution:

#### View source code

### Code.gs

```
/*
Copyright 2024 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Triggered when the add-on is opened from the Gmail homepage.
 *
 * @param {Object} e - The event object.
 * @returns {Card} - The homepage card.
 */
function onHomepageTrigger(e) {
  return buildHomepageCard();
}
```

### Cards.gs

```
/*
Copyright 2024-2025 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Builds the main card displayed on the Gmail homepage.
 *
 * @returns {Card} - The homepage card.
 */
function buildHomepageCard() {
  // Create a new card builder
  const cardBuilder = CardService.newCardBuilder();

  // Create a card header
  const cardHeader = CardService.newCardHeader();
  cardHeader.setImageUrl(
    "https://fonts.gstatic.com/s/i/googlematerialicons/mail/v6/black-24dp/1x/gm_mail_black_24dp.png",
  );
  cardHeader.setImageStyle(CardService.ImageStyle.CIRCLE);
  cardHeader.setTitle("Analyze your Gmail");

  // Add the header to the card
  cardBuilder.setHeader(cardHeader);

  // Create a card section
  const cardSection = CardService.newCardSection();

  // Create buttons for generating sample emails and analyzing sentiment
  const buttonSet = CardService.newButtonSet();

  // Create "Generate sample emails" button
  const generateButton = createFilledButton(
    "Generate sample emails",
    "generateSampleEmails",
    "#34A853",
  );
  buttonSet.addButton(generateButton);

  // Create "Analyze emails" button
  const analyzeButton = createFilledButton(
    "Analyze emails",
    "analyzeSentiment",
    "#FF0000",
  );
  buttonSet.addButton(analyzeButton);

  // Add the button set to the section
  cardSection.addWidget(buttonSet);

  // Add the section to the card
  cardBuilder.addSection(cardSection);

  // Build and return the card
  return cardBuilder.build();
}

/**
 * Creates a filled text button with the specified text, function, and color.
 *
 * @param {string} text - The text to display on the button.
 * @param {string} functionName - The name of the function to call when the button is clicked.
 * @param {string} color - The background color of the button.
 * @returns {TextButton} - The created text button.
 */
function createFilledButton(text, functionName, color) {
  // Create a new text button
  const textButton = CardService.newTextButton();

  // Set the button text
  textButton.setText(text);

  // Set the action to perform when the button is clicked
  const action = CardService.newAction();
  action.setFunctionName(functionName);
  textButton.setOnClickAction(action);

  // Set the button style to filled
  textButton.setTextButtonStyle(CardService.TextButtonStyle.FILLED);

  // Set the background color
  textButton.setBackgroundColor(color);

  return textButton;
}

/**
 * Creates a notification response with the specified text.
 *
 * @param {string} notificationText - The text to display in the notification.
 * @returns {ActionResponse} - The created action response.
 */
function buildNotificationResponse(notificationText) {
  // Create a new notification
  const notification = CardService.newNotification();
  notification.setText(notificationText);

  // Create a new action response builder
  const actionResponseBuilder = CardService.newActionResponseBuilder();

  // Set the notification for the action response
  actionResponseBuilder.setNotification(notification);

  // Build and return the action response
  return actionResponseBuilder.build();
}
```

### Gmail.gs

```
/*
Copyright 2024-2025 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Analyzes the sentiment of the first 10 threads in the inbox
 * and labels them accordingly.
 *
 * @returns {ActionResponse} - A notification confirming completion.
 */
function analyzeSentiment() {
  // Analyze and label emails
  analyzeAndLabelEmailSentiment();

  // Return a notification
  return buildNotificationResponse("Successfully completed sentiment analysis");
}

/**
 * Analyzes the sentiment of emails and applies appropriate labels.
 */
function analyzeAndLabelEmailSentiment() {
  // Define label names
  const labelNames = ["HAPPY TONE 😊", "NEUTRAL TONE 😐", "UPSET TONE 😡"];

  // Get or create labels for each sentiment
  const positiveLabel =
    GmailApp.getUserLabelByName(labelNames[0]) ||
    GmailApp.createLabel(labelNames[0]);
  const neutralLabel =
    GmailApp.getUserLabelByName(labelNames[1]) ||
    GmailApp.createLabel(labelNames[1]);
  const negativeLabel =
    GmailApp.getUserLabelByName(labelNames[2]) ||
    GmailApp.createLabel(labelNames[2]);

  // Get the first 10 threads in the inbox
  const threads = GmailApp.getInboxThreads(0, 10);

  // Iterate through each thread
  for (const thread of threads) {
    // Iterate through each message in the thread
    const messages = thread.getMessages();
    for (const message of messages) {
      // Get the plain text body of the message
      const emailBody = message.getPlainBody();

      // Analyze the sentiment of the email body
      const sentiment = processSentiment(emailBody);

      // Apply the appropriate label based on the sentiment
      if (sentiment === "positive") {
        thread.addLabel(positiveLabel);
      } else if (sentiment === "neutral") {
        thread.addLabel(neutralLabel);
      } else if (sentiment === "negative") {
        thread.addLabel(negativeLabel);
      }
    }
  }
}

/**
 * Generates sample emails for testing the sentiment analysis.
 *
 * @returns {ActionResponse} - A notification confirming email generation.
 */
function generateSampleEmails() {
  // Get the current user's email address
  const userEmail = Session.getActiveUser().getEmail();

  // Define sample emails
  const sampleEmails = [
    {
      subject: "Thank you for amazing service!",
      body: "Hi, I really enjoyed working with you. Thank you again!",
      name: "Customer A",
    },
    {
      subject: "Request for information",
      body: "Hello, I need more information on your recent product launch. Thank you.",
      name: "Customer B",
    },
    {
      subject: "Complaint!",
      body: "",
      htmlBody: \`<p>Hello, You are late in delivery, again.</p>
<p>Please contact me ASAP before I cancel our subscription.</p>\`,
      name: "Customer C",
    },
  ];

  // Send each sample email
  for (const email of sampleEmails) {
    GmailApp.sendEmail(userEmail, email.subject, email.body, {
      name: email.name,
      htmlBody: email.htmlBody,
    });
  }

  // Return a notification
  return buildNotificationResponse("Successfully generated sample emails");
}
```

### Vertex.gs

```
/*
Copyright 2024-2025 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Replace with your project ID
const PROJECT_ID = "[ADD YOUR GCP PROJECT ID HERE]";

// Location for your Vertex AI model
const VERTEX_AI_LOCATION = "us-central1";

// Model ID to use for sentiment analysis
const MODEL_ID = "gemini-2.5-flash";

/**
 * Sends the email text to Vertex AI for sentiment analysis.
 *
 * @param {string} emailText - The text of the email to analyze.
 * @returns {string} - The sentiment of the email ('positive', 'negative', or 'neutral').
 */
function processSentiment(emailText) {
  // Construct the API endpoint URL
  const apiUrl = \`https://${VERTEX_AI_LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${VERTEX_AI_LOCATION}/publishers/google/models/${MODEL_ID}:generateContent\`;

  // Prepare the request payload
  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: \`Analyze the sentiment of the following message: ${emailText}\`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.9,
      maxOutputTokens: 1024,
      responseMimeType: "application/json",
      // Expected response format for simpler parsing.
      responseSchema: {
        type: "object",
        properties: {
          response: {
            type: "string",
            enum: ["positive", "negative", "neutral"],
          },
        },
      },
    },
  };

  // Prepare the request options
  const options = {
    method: "POST",
    headers: {
      Authorization: \`Bearer ${ScriptApp.getOAuthToken()}\`,
    },
    contentType: "application/json",
    muteHttpExceptions: true, // Set to true to inspect the error response
    payload: JSON.stringify(payload),
  };

  // Make the API request
  const response = UrlFetchApp.fetch(apiUrl, options);

  // Parse the response. There are two levels of JSON responses to parse.
  const parsedResponse = JSON.parse(response.getContentText());
  const sentimentResponse = JSON.parse(
    parsedResponse.candidates[0].content.parts[0].text,
  ).response;

  // Return the sentiment
  return sentimentResponse;
}
```

### appsscript.json

```
{
  "timeZone": "America/Toronto",
  "oauthScopes": [
    "https://www.googleapis.com/auth/cloud-platform",
    "https://www.googleapis.com/auth/gmail.addons.execute",
    "https://www.googleapis.com/auth/gmail.labels",
    "https://www.googleapis.com/auth/gmail.modify",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/userinfo.email"
  ],
  "addOns": {
    "common": {
      "name": "Sentiment Analysis",
      "logoUrl": "https://fonts.gstatic.com/s/i/googlematerialicons/sentiment_extremely_dissatisfied/v6/black-24dp/1x/gm_sentiment_extremely_dissatisfied_black_24dp.png"
    },
    "gmail": {
      "homepageTrigger": {
        "runFunction": "onHomepageTrigger",
        "enabled": true
      }
    }
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.developers.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Next steps

- [Extending Gmail with Google Workspace add-ons](https://developers.google.com/workspace/add-ons/samples/workspace/add-ons/gmail)
- [Extend the Google Workspace UI](../../extend.md)
- [Build Google Workspace add-ons](../how-tos/building-workspace-addons.md)
