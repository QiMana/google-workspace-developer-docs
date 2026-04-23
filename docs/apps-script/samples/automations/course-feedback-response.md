---
source: https://developers.google.com/apps-script/samples/automations/course-feedback-response
root: apps-script
fetched_at: 2026-04-23T15:22:13.119Z
---

# Respond to feedback

## Page Summary

- This solution automatically creates draft email replies to feedback submitted through Google Forms.
- The script uses an event-driven trigger to run each time a form is submitted.
- Draft emails are created in Gmail, addressed to the form submitter, and include their responses and a thank-you message.
- The solution utilizes the Apps Script Script, Spreadsheet, and Gmail services.
- Setting up involves copying a sample spreadsheet with the attached Apps Script project and enabling the auto draft replies through a custom menu.

**Coding level**: Beginner  
**Duration**: 15 minutes  
**Project type**: Automation with a [custom menu](../../guides/menus.md) and an [event-driven trigger](../../guides/triggers/installable.md#event-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Automatically create draft email replies to feedback from Google Forms. This solution focuses on course feedback from students, but you can apply it to any use case for which you receive feedback using Google Forms.

![Form submission responses being sent from Gmail](https://developers.google.com/static/apps-script/samples/images/courseFeedbackResponse.gif)

![](https://developers.google.com/static/apps-script/samples/images/courseFeedbackResponse.gif)

### How it works

The script installs an event-driven trigger that runs each time a user submits a form. With each form submission, the script creates an email draft in Gmail. The email is addressed to the person who submitted the form and includes the form responses and a generic thank-you message. You can edit the email before you send it.

### Apps Script services

This solution uses the following services:

- [Script service](../../reference/script.md): Installs the event-driven trigger that fires when someone submits a form.
- [Spreadsheet service](../../reference/spreadsheet.md): Sends the form responses to Gmail.
- [Gmail service](../../reference/gmail.md): Creates the email draft with the thank-you message and form responses.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

Click the following button to make a copy of the **Respond to feedback** sample Sheets spreadsheet:

[Make a copy](https://docs.google.com/spreadsheets/d/18cHBZp8iCICnoqECeSqMWbem3XJdIQnLd9xyVEAI1JM/copy)

## Run the script

1. Click **Form reply tool** \> **Enable auto draft replies**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script. <<../\_snippets/oauth.md>>
3. Click **Form reply tool** \> **Enable auto draft replies** again.
4. Click **Tools** \> **Manage form** \> **Go to live form**.
5. Fill out the form and click **Submit**.
6. Open Gmail and check your drafts. You should have a new draft with the form response.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/course-feedback-response

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

/**
 * Creates custom menu for user to run scripts.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Form Reply Tool")
    .addItem("Enable auto draft replies", "installTrigger")
    .addToUi();
}

/**
 * Installs a trigger on the Spreadsheet for when a Form response is submitted.
 */
function installTrigger() {
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onFormSubmit()
    .create();
}

/**
 * Creates a draft email for every response on a form
 *
 * @param {Object} event - Form submit event
 */
function onFormSubmit(e) {
  const responses = e.namedValues;

  // parse form response data
  const timestamp = responses.Timestamp[0];
  const email = responses["Email address"][0].trim();

  // create email body
  const emailBody = createEmailBody(responses);

  // create draft email
  createDraft(timestamp, email, emailBody);
}

/**
 * Creates email body and includes feedback from Google Form.
 *
 * @param {string} responses - The form response data
 * @return {string} - The email body as an HTML string
 */
function createEmailBody(responses) {
  // parse form response data
  const name = responses.Name[0].trim();
  const industry = responses["What industry do you work in?"][0];
  const source = responses["How did you find out about this course?"][0];
  const rating =
    responses["On a scale of 1 - 5 how would you rate this course?"][0];
  const productFeedback =
    responses["What could be different to make it a 5 rating?"][0];
  const otherFeedback = responses["Any other feedback?"][0];

  // create email body
  const htmlBody = \`Hi ${name},<br><br>Thanks for responding to our course feedback questionnaire.<br><br>It's really useful to us to help improve this course.<br><br>Have a great day!<br><br>Thanks,<br>Course Team<br><br>****************************************************************<br><br><i>Your feedback:<br><br>What industry do you work in?<br><br>${industry}<br><br>How did you find out about this course?<br><br>${source}<br><br>On a scale of 1 - 5 how would you rate this course?<br><br>${rating}<br><br>What could be different to make it a 5 rating?<br><br>${productFeedback}<br><br>Any other feedback?<br><br>${otherFeedback}<br><br></i>\`;

  return htmlBody;
}

/**
 * Create a draft email with the feedback
 *
 * @param {string} timestamp Timestamp for the form response
 * @param {string} email Email address from the form response
 * @param {string} emailBody The email body as an HTML string
 */
function createDraft(timestamp, email, emailBody) {
  console.log("draft email create process started");

  // create subject line
  const subjectLine = \`Thanks for your course feedback! ${timestamp}\`;

  // create draft email
  GmailApp.createDraft(email, subjectLine, "", {
    htmlBody: emailBody,
  });
}
```

```
</section>
```

## Contributors

This sample was created by Ben Collins, Educator at [benlcollins.com](https://www.benlcollins.com/) and Google Developer Expert.

- Find Ben on Twitter [@benlcollins](https://twitter.com/benlcollins).
- Read Ben's [blog](https://www.benlcollins.com/).

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Event-driven triggers](../../guides/triggers/installable.md#event-driven_triggers)
- [Custom menus in Google Workspace](../../guides/menus.md)
