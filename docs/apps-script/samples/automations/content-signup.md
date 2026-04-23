---
source: https://developers.google.com/apps-script/samples/automations/content-signup
root: apps-script
fetched_at: 2026-04-23T15:22:16.846Z
---

# Send curated content

## Page Summary

- This solution uses Google Forms to let users select content they want to receive and automatically emails them their chosen content using Apps Script.
- The script installs an event-driven trigger that activates upon each form submission, generating and sending an email from a Google Docs template.
- The content offered can be any type linked by a URL.
- Setting up the script involves making a copy of a Google Sheet and running a specific function in Apps Script to install the trigger.
- The solution utilizes the Script, Document, Mail, and Spreadsheet Apps Script services to manage triggers, access document templates, send emails, and update the form responses sheet.

**Coding level**: Beginner  
**Duration**: 20 minutes  
**Project type**: Automation with an [event-driven trigger](https://developers.google.com/apps-script/guides/triggers/installable#event-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

If you have various types of content you'd like to offer your audience, you can let users choose what content they receive from you with Google Forms. This solution lets users select the topics they're interested in, then automatically emails them their chosen content.

![Demo of sending content with Google Forms and Gmail](https://developers.google.com/static/apps-script/samples/images/send-curated-content-demo.gif)

![](https://developers.google.com/static/apps-script/samples/images/send-curated-content-demo.gif)

### How it works

The script installs an event-driven trigger that runs each time a user submits a form. With each form submission, the script creates and sends an email from a Google Docs template. The email includes the user's name and the content they selected. The content you offer can be of any type as long as it's referenced by a URL.

### Apps Script services

This solution uses the following services:

- [Script service](https://developers.google.com/apps-script/reference/script): Installs the event-driven trigger that runs whenever someone submits the form.
- [Document service](https://developers.google.com/apps-script/reference/document): Opens the Docs template that the script uses to create the email.
- [Mail service](https://developers.google.com/apps-script/reference/mail): Creates and sends the email with the user's name and content selection.
- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet): Adds a confirmation to the **Form responses** sheet after the script sends the email.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

1. Click the following button to make a copy of the **Send curated content** Sheets spreadsheet. The Apps Script project for this solution is attached to the spreadsheet:
	[Make a copy](https://docs.google.com/spreadsheets/d/1jYee3vEwI_v7tixJY68TH1mzcNuRm4O4O8YvXGsbNgc/copy)
2. In your copied spreadsheet, click **Extensions** \> **Apps Script**.
3. In the function drop-down, select **installTrigger**.
4. Click **Run**.
5. When prompted, authorize the script. <<../\_snippets/oauth.md>>

**Important**: If you run **installTrigger** more than once, the script creates multiple triggers that each send an email when a user submits the form. To delete extra triggers and avoid duplicate emails, click **Triggers** . Right-click on each extra trigger and click **Delete trigger**.

## Run the script

1. Switch back to the spreadsheet and click **Tools** \> **Manage form** \> **Go to live form**.
2. Fill out the form and click **Submit**.
3. Check your email for an email with links to the content you selected.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/content-signup

/*
Copyright 2022 Google LLC

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

// To use your own template doc, update the below variable with the URL of your own Google Doc template.
// Make sure you update the sharing settings so that 'anyone'  or 'anyone in your organization' can view.
const EMAIL_TEMPLATE_DOC_URL =
  "https://docs.google.com/document/d/1enes74gWsMG3dkK3SFO08apXkr0rcYBd3JHKOb2Nksk/edit?usp=sharing";
// Update this variable to customize the email subject.
const EMAIL_SUBJECT = "Hello, here is the content you requested";

// Update this variable to the content titles and URLs you want to offer. Make sure you update the form so that the content titles listed here match the content titles you list in the form.
const topicUrls = {
  "Google Calendar how-to videos":
    "https://www.youtube.com/playlist?list=PLU8ezI8GYqs7IPb_UdmUNKyUCqjzGO9PJ",
  "Google Drive how-to videos":
    "https://www.youtube.com/playlist?list=PLU8ezI8GYqs7Y5d1cgZm2Obq7leVtLkT4",
  "Google Docs how-to videos":
    "https://www.youtube.com/playlist?list=PLU8ezI8GYqs4JKwZ-fpBP-zSoWPL8Sit7",
  "Google Sheets how-to videos":
    "https://www.youtube.com/playlist?list=PLU8ezI8GYqs61ciKpXf_KkV7ZRbRHVG38",
};

/**
 * Installs a trigger on the spreadsheet for when someone submits a form.
 */
function installTrigger() {
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onFormSubmit()
    .create();
}

/**
 * Sends a customized email for every form response.
 *
 * @param {Object} event - Form submit event
 */
function onFormSubmit(e) {
  const responses = e.namedValues;

  // If the question title is a label, it can be accessed as an object field.
  // If it has spaces or other characters, it can be accessed as a dictionary.
  const timestamp = responses.Timestamp[0];
  const email = responses["Email address"][0].trim();
  const name = responses.Name[0].trim();
  const topicsString = responses.Topics[0].toLowerCase();

  // Parse topics of interest into a list (since there are multiple items
  // that are saved in the row as blob of text).
  const topics = Object.keys(topicUrls).filter((topic) => {
    // indexOf searches for the topic in topicsString and returns a non-negative
    // index if the topic is found, or it will return -1 if it's not found.
    return topicsString.indexOf(topic.toLowerCase()) !== -1;
  });

  // If there is at least one topic selected, send an email to the recipient.
  let status = "";
  if (topics.length > 0) {
    MailApp.sendEmail({
      to: email,
      subject: EMAIL_SUBJECT,
      htmlBody: createEmailBody(name, topics),
    });
    status = "Sent";
  } else {
    status = "No topics selected";
  }

  // Append the status on the spreadsheet to the responses' row.
  const sheet = SpreadsheetApp.getActiveSheet();
  const row = sheet.getActiveRange().getRow();
  const column = e.values.length + 1;
  sheet.getRange(row, column).setValue(status);

  console.log(\`status=${status}; responses=${JSON.stringify(responses)}\`);
}

/**
 * Creates email body and includes the links based on topic.
 *
 * @param {string} recipient - The recipient's email address.
 * @param {string[]} topics - List of topics to include in the email body.
 * @return {string} - The email body as an HTML string.
 */
function createEmailBody(name, topics) {
  let topicsHtml = topics
    .map((topic) => {
      const url = topicUrls[topic];
      return \`<li><a href="${url}">${topic}</a></li>\`;
    })
    .join("");
  topicsHtml = \`<ul>${topicsHtml}</ul>\`;

  // Make sure to update the emailTemplateDocId at the top.
  const docId = DocumentApp.openByUrl(EMAIL_TEMPLATE_DOC_URL).getId();
  let emailBody = docToHtml(docId);
  emailBody = emailBody.replace(/{{NAME}}/g, name);
  emailBody = emailBody.replace(/{{TOPICS}}/g, topicsHtml);
  return emailBody;
}

/**
 * Downloads a Google Doc as an HTML string.
 *
 * @param {string} docId - The ID of a Google Doc to fetch content from.
 * @return {string} The Google Doc rendered as an HTML string.
 */
function docToHtml(docId) {
  // Downloads a Google Doc as an HTML string.
  const url = \`https://docs.google.com/feeds/download/documents/export/Export?id=${docId}&exportFormat=html\`;
  const param = {
    method: "get",
    headers: { Authorization: \`Bearer ${ScriptApp.getOAuthToken()}\` },
    muteHttpExceptions: true,
  };
  return UrlFetchApp.fetch(url, param).getContentText();
}
```

```
</section>
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Event-driven triggers](https://developers.google.com/apps-script/guides/triggers/installable#event-driven_triggers)
- [Spreadsheet service reference](https://developers.google.com/apps-script/reference/spreadsheet)
