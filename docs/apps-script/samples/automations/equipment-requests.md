---
source: https://developers.google.com/apps-script/samples/automations/equipment-requests
root: apps-script
fetched_at: 2026-04-23T15:22:21.929Z
---

# Manage new employee equipment requests

## Page Summary

- This solution automates the process of requesting and managing system access and equipment for new employees using Google Forms and Apps Script.
- The script utilizes Apps Script services like Forms, Spreadsheet, Mail, and Script to create forms, manage responses, send email notifications, and set up triggers.
- The workflow is initiated when a form is submitted, sending an email notification to the designated contact, and another notification is sent to the requester when the status is marked "Completed" in the spreadsheet, at which point the request is moved to a completed sheet.

**Coding level**: Beginner  
**Duration**: 10 minutes  
**Project type**: Automation with an [event-driven trigger](../../guides/triggers/installable.md#event-driven_triggers) and a [time-driven trigger](../../guides/triggers/installable.md#time-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

New employees usually require system access and equipment from IT. To manage these requests, you can create a form with Google Forms for users to indicate what access and devices employees need. Once IT completes the request and updates its status, requesters receive an email notification.

![Google Form for new employee equipment requests.](https://developers.google.com/static/apps-script/samples/images/equipment-request-form.png)

![](https://developers.google.com/static/apps-script/samples/images/equipment-request-form.png)

### How it works

The script creates an equipment request form. You can customize the items on the form in the [sample script's code](#create_the_apps_script_project). When someone submits the form, the script sends an email notification to the designated point of contact for requests. Once the request status in the spreadsheet is changed to "Completed," the script sends a confirmation email to the person who submitted the form.

### Apps Script services

This solution uses the following services:

- [Forms service](../../reference/forms.md): Creates the form for IT requests.
- [Spreadsheet service](../../reference/spreadsheet.md): Checks to see if the request form already exists to mitigate duplicates. Manages the form responses by moving them to the **Pending** and **Completed** sheets as needed.
- [Mail service](../../reference/mail.md): Creates and sends the request and completion notification emails.
- [Script service](../../reference/script.md): Creates the triggers. One runs when a form is submitted and the other runs every five minutes to check if a request's status is marked as "Completed."

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

Complete the following steps to set up the script.

### Create the Apps Script project

1. Click the following button to make a copy of the **Manage employee equipment requests** spreadsheet. The Apps Script project for this solution is attached to the spreadsheet:
	[Make a copy](https://docs.google.com/spreadsheets/d/1p-dCXOIXrqT30JoyqBulDMSdedtQlimf-Zh0Fmx_mbk/copy)
2. Click **Extensions** \> **Apps Script**.
3. Next to the `REQUEST_NOTIFICATION_EMAIL` variable, replace the sample email with your email.
4. Click Save ![Save project in the Apps Script editor](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).

### Set up the spreadsheet

1. Return to the spreadsheet and click **Equipment requests** \> **Set up**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script. <<../\_snippets/oauth.md>>
3. Click **Equipment requests** \> **Set up** again.

## Run the script

1. Click **Tools** \> **Manage form** \> **Go to live form**.
2. Fill out and submit the form.
3. Check your email for a notification about the equipment request.
4. Return to the spreadsheet and on the **Pending requests** sheet, change the status of the request to **Completed**.
5. Within 5 minutes, the script sends another email notifying you that the request has been completed. The script moves the request from the **Pending requests** sheet to the **Completed requests** sheet.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/equipment-requests

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

// Update this variable with the email address you want to send equipment requests to.
const REQUEST_NOTIFICATION_EMAIL = "request_intake@example.com";

// Update the following variables with your own equipment options.
const AVAILABLE_LAPTOPS = [
  '15" high Performance Laptop (OS X)',
  '15" high Performance Laptop (Windows)',
  '15" high performance Laptop (Linux)',
  '13" lightweight laptop (Windows)',
];
const AVAILABLE_DESKTOPS = [
  "Standard workstation (Windows)",
  "Standard workstation (Linux)",
  "High performance workstation (Windows)",
  "High performance workstation (Linux)",
  "Mac Pro (OS X)",
];
const AVAILABLE_MONITORS = ['Single 27"', 'Single 32"', 'Dual 24"'];

// Form field titles, used for creating the form and as keys when handling
// responses.
/**
 * Adds a custom menu to the spreadsheet.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Equipment requests")
    .addItem("Set up", "setup_")
    .addItem("Clean up", "cleanup_")
    .addToUi();
}

/**
 * Creates the form and triggers for the workflow.
 */
function setup_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss.getFormUrl()) {
    const msg = "Form already exists. Unlink the form and try again.";
    SpreadsheetApp.getUi().alert(msg);
    return;
  }
  const form = FormApp.create("Equipment Requests")
    .setCollectEmail(true)
    .setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId())
    .setLimitOneResponsePerUser(false);
  form.addTextItem().setTitle("Employee name").setRequired(true);
  form.addTextItem().setTitle("Desk location").setRequired(true);
  form.addDateItem().setTitle("Due date").setRequired(true);
  form.addListItem().setTitle("Laptop").setChoiceValues(AVAILABLE_LAPTOPS);
  form.addListItem().setTitle("Desktop").setChoiceValues(AVAILABLE_DESKTOPS);
  form.addListItem().setTitle("Monitor").setChoiceValues(AVAILABLE_MONITORS);

  // Hide the raw form responses.
  for (const sheet of ss.getSheets()) {
    if (sheet.getFormUrl() === ss.getFormUrl()) {
      sheet.hideSheet();
    }
  }
  // Start workflow on each form submit
  ScriptApp.newTrigger("onFormSubmit_").forForm(form).onFormSubmit().create();
  // Archive completed items every 5m.
  ScriptApp.newTrigger("processCompletedItems_")
    .timeBased()
    .everyMinutes(5)
    .create();
}

/**
 * Cleans up the project (stop triggers, form submission, etc.)
 */
function cleanup_() {
  const formUrl = SpreadsheetApp.getActiveSpreadsheet().getFormUrl();
  if (!formUrl) {
    return;
  }
  for (const trigger of ScriptApp.getProjectTriggers()) {
    ScriptApp.deleteTrigger(trigger);
  }
  FormApp.openByUrl(formUrl).deleteAllResponses().setAcceptingResponses(false);
}

/**
 * Handles new form submissions to trigger the workflow.
 *
 * @param {Object} event - Form submit event
 */
function onFormSubmit_(event) {
  const response = mapResponse_(event.response);
  sendNewEquipmentRequestEmail_(response);
  const equipmentDetails = Utilities.formatString(
    "%s\n%s\n%s",
    response.Laptop,
    response.Desktop,
    response.Monitor,
  );
  const row = [
    "New",
    "",
    response["Due date"],
    response["Employee name"],
    response["Desk location"],
    equipmentDetails,
    response.email,
  ];
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Pending requests");
  sheet.appendRow(row);
}

/**
 * Sweeps completed and cancelled requests, notifying the requestors and archiving them
 * to the completed sheet.
 *
 * @param {Object} event
 */
function processCompletedItems_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const pending = ss.getSheetByName("Pending requests");
  const completed = ss.getSheetByName("Completed requests");
  const rows = pending.getDataRange().getValues();
  for (let i = rows.length; i >= 2; i--) {
    const row = rows[i - 1];
    const status = row[0];
    if (status === "Completed" || status === "Cancelled") {
      pending.deleteRow(i);
      completed.appendRow(row);
      console.log(\`Deleted row: ${i}\`);
      sendEquipmentRequestCompletedEmail_({
        "Employee name": row[3],
        "Desk location": row[4],
        email: row[6],
      });
    }
  }
}

/**
 * Sends an email notification that a new equipment request has been submitted.
 *
 * @param {Object} request - Request details
 */
function sendNewEquipmentRequestEmail_(request) {
  const template = HtmlService.createTemplateFromFile(
    "new-equipment-request.html",
  );
  template.request = request;
  template.sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const msg = template.evaluate();
  MailApp.sendEmail({
    to: REQUEST_NOTIFICATION_EMAIL,
    subject: "New equipment request",
    htmlBody: msg.getContent(),
  });
}

/**
 * Sends an email notifying the requestor that the request is complete.
 *
 * @param {Object} request - Request details
 */
function sendEquipmentRequestCompletedEmail_(request) {
  const template = HtmlService.createTemplateFromFile("request-complete.html");
  template.request = request;
  const msg = template.evaluate();
  MailApp.sendEmail({
    to: request.email,
    subject: "Equipment request completed",
    htmlBody: msg.getContent(),
  });
}

/**
 * Converts a form response to an object keyed by the item titles. Allows easier
 * access to response values.
 *
 * @param {FormResponse} response
 * @return {Object} Form values keyed by question title
 */
function mapResponse_(response) {
  const initialValue = {
    email: response.getRespondentEmail(),
    timestamp: response.getTimestamp(),
  };
  return response.getItemResponses().reduce((obj, itemResponse) => {
    const key = itemResponse.getItem().getTitle();
    obj[key] = itemResponse.getResponse();
    return obj;
  }, initialValue);
}
```

```
</section>
<section>
  <h3>new-equipment-request.html</h3>
```

```
<!DOCTYPE html>
<!--
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<html>
  <body>
    <p>
    A new equipment request has been made by <?= request.email ?>.
    </p>

    <p>
    Employee name: <?= request['Employee name'] ?><br/>
    Desk location name: <?= request['Desk location'] ?><br/>
    Due date: <?= request['Due date'] ?><br/>
    Laptop model: <?= request['Laptop'] ?><br/>
    Desktop model: <?= request['Desktop'] ?><br/>
    Monitor(s): <?= request['Monitor'] ?><br/>
    </p>

    See <a href="<?= sheetUrl ?>">the spreadsheet</a> to take or assign this item.
  </body>
</html>
```

```
</section>
<section>
  <h3>request-complete.html</h3>
```

```
<!DOCTYPE html>
<!--
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<html>
  <body>
    <p>
    An equipment request has been completed.
    </p>

    <p>
    Employee name: <?= request['Employee name'] ?><br/>
    Desk location name: <?= request['Desk location'] ?><br/>
    </p>
  </body>
</html>
```

```
</section>
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Event-driven triggers](../../guides/triggers/installable.md#event-driven_triggers)
- [Time-driven triggers](../../guides/triggers/installable.md#time-driven_triggers)
