---
source: https://developers.google.com/apps-script/samples/automations/employee-certificate
root: apps-script
fetched_at: 2026-04-23T15:22:13.769Z
---

# Send personalized appreciation certificates to employees

## Page Summary

- This solution automatically customizes Google Slides employee certificates with employee data from Google Sheets and sends them via Gmail.
- The script uses the Drive, Spreadsheet, Slides, and Gmail Apps Script services to copy templates, retrieve data, replace placeholders, and send emails with PDF attachments.
- To set up the environment, you need to copy the provided Google Slides template and create a new folder in Google Drive to hold the certificates.
- Setting up the script involves copying the provided Google Sheets spreadsheet with the attached Apps Script project and updating variables in the script with the IDs of your copied presentation and folder.
- The script is run from a custom menu in the spreadsheet to create and send certificates, requiring authorization the first time.

**Coding level**: Beginner  
**Duration**: 15 minutes  
**Project type**: Automation with a [custom menu](../../guides/menus.md)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up your environment.
- Set up the script.
- Run the script.

## About this solution

Automatically customize the Google Slides Employee Certificate template with employee data in Google Sheets, then send the certificates using Gmail.

![Automated process for creating employee certificates](https://developers.google.com/static/apps-script/samples/images/employee-certificate-creation.gif)

![](https://developers.google.com/static/apps-script/samples/images/employee-certificate-creation.gif)

### How it works

The script uses the Employee Certificate presentation template from Slides and a Sheets spreadsheet with the employee details. The script copies the template and replaces the placeholders with data from the spreadsheet. Once the script creates a slide for every employee, it extracts each individual slide as a PDF attachment and sends the certificates to the employees.

### Apps Script services

This solution uses the following services:

- [Google Drive service](../../reference/drive.md): Copies the Slides Employee Certificate template.
- [Spreadsheet service](../../reference/spreadsheet.md): Provides the employee details and updates the status against each listed employee.
- [Slides service](../../reference/slides.md): Replaces the placeholders in the presentation with the employee data from the spreadsheet.
- [Gmail service](../../reference/gmail.md): Gets the individual slides as PDFs and sends them to the employees.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up your environment

1. Click the following button to make a copy of the **Employee certificates** Slides template.

[Make a copy](https://docs.google.com/presentation/d/1gEHDjlSqnKnfi_Ahbt9Jhhz4oW2badtd8kLKjzC_tM0/copy)

1. Take note of your presentation ID for use in a later step. You can find the ID in the URL:
	`https://docs.google.com/presentation/d/PRESENTATION_ID/edit`
2. In Drive, create a new folder to hold the certificates.
3. Take note of your folder ID for use in a later step. You can find the ID in the URL: `https://drive.google.com/drive/folders/FOLDER_ID`

## Set up the script

1. Click the following button to make a copy of the **Employee certificates** sample Sheets spreadsheet. The Apps Script project for this solution is attached to the spreadsheet:
	[Make a copy](https://docs.google.com/spreadsheets/d/14qudjFSn9PP7-aZ1JkmUmd37-lpZMyfE-0IdD5ZW5Uo/copy)
2. In the spreadsheet, open the Apps Script project by clicking **Extensions** \> **Apps Script**.
3. For the `slideTemplateId` variable, replace `PRESENTATION_ID` with the ID of your presentation.
4. For the `tempFolderId` variable, replace `FOLDER_ID` with the ID of your folder.
5. Click Save ![Save icon in the Apps Script editor](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).

## Run the script

1. Switch back to the spreadsheet and click **Appreciation** \> **Create certificates**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script. <<../\_snippets/oauth.md>>
3. Click **Appreciation** \> **Create certificates** again.
4. Once the status column of all the rows has been updated to **Created**, click **Appreciation** \> **Send certificates**.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/employee-certificate

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

const slideTemplateId = "PRESENTATION_ID";
const tempFolderId = "FOLDER_ID"; // Create an empty folder in Google Drive

/**
 * Creates a custom menu "Appreciation" in the spreadsheet
 * with drop-down options to create and send certificates
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Appreciation")
    .addItem("Create certificates", "createCertificates")
    .addSeparator()
    .addItem("Send certificates", "sendCertificates")
    .addToUi();
}

/**
 * Creates a personalized certificate for each employee
 * and stores every individual Slides doc on Google Drive
 */
function createCertificates() {
  // Load the Google Slide template file
  const template = DriveApp.getFileById(slideTemplateId);

  // Get all employee data from the spreadsheet and identify the headers
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const empNameIndex = headers.indexOf("Employee Name");
  const dateIndex = headers.indexOf("Date");
  const managerNameIndex = headers.indexOf("Manager Name");
  const titleIndex = headers.indexOf("Title");
  const compNameIndex = headers.indexOf("Company Name");
  const empEmailIndex = headers.indexOf("Employee Email");
  const empSlideIndex = headers.indexOf("Employee Slide");
  const statusIndex = headers.indexOf("Status");

  // Iterate through each row to capture individual details
  for (let i = 1; i < values.length; i++) {
    const rowData = values[i];
    const empName = rowData[empNameIndex];
    const date = rowData[dateIndex];
    const managerName = rowData[managerNameIndex];
    const title = rowData[titleIndex];
    const compName = rowData[compNameIndex];

    // Make a copy of the Slide template and rename it with employee name
    const tempFolder = DriveApp.getFolderById(tempFolderId);
    const empSlideId = template.makeCopy(tempFolder).setName(empName).getId();
    const empSlide = SlidesApp.openById(empSlideId).getSlides()[0];

    // Replace placeholder values with actual employee related details
    empSlide.replaceAllText("Employee Name", empName);
    empSlide.replaceAllText(
      "Date",
      \`Date: ${Utilities.formatDate(
        date,
        Session.getScriptTimeZone(),
        "MMMM dd, yyyy",
      )}\`,
    );
    empSlide.replaceAllText("Your Name", managerName);
    empSlide.replaceAllText("Title", title);
    empSlide.replaceAllText("Company Name", compName);

    // Update the spreadsheet with the new Slide Id and status
    sheet.getRange(i + 1, empSlideIndex + 1).setValue(empSlideId);
    sheet.getRange(i + 1, statusIndex + 1).setValue("CREATED");
    SpreadsheetApp.flush();
  }
}

/**
 * Send an email to each individual employee
 * with a PDF attachment of their appreciation certificate
 */
function sendCertificates() {
  // Get all employee data from the spreadsheet and identify the headers
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const empNameIndex = headers.indexOf("Employee Name");
  const dateIndex = headers.indexOf("Date");
  const managerNameIndex = headers.indexOf("Manager Name");
  const titleIndex = headers.indexOf("Title");
  const compNameIndex = headers.indexOf("Company Name");
  const empEmailIndex = headers.indexOf("Employee Email");
  const empSlideIndex = headers.indexOf("Employee Slide");
  const statusIndex = headers.indexOf("Status");

  // Iterate through each row to capture individual details
  for (let i = 1; i < values.length; i++) {
    const rowData = values[i];
    const empName = rowData[empNameIndex];
    const date = rowData[dateIndex];
    const managerName = rowData[managerNameIndex];
    const title = rowData[titleIndex];
    const compName = rowData[compNameIndex];
    const empSlideId = rowData[empSlideIndex];
    const empEmail = rowData[empEmailIndex];

    // Load the employee's personalized Google Slide file
    const attachment = DriveApp.getFileById(empSlideId);

    // Setup the required parameters and send them the email
    const senderName = "CertBot";
    const subject = \`${empName}, you're awesome!\`;
    const body = \`Please find your employee appreciation certificate attached.\n\n${compName} team\`;
    GmailApp.sendEmail(empEmail, subject, body, {
      attachments: [attachment.getAs(MimeType.PDF)],
      name: senderName,
    });

    // Update the spreadsheet with email status
    sheet.getRange(i + 1, statusIndex + 1).setValue("SENT");
    SpreadsheetApp.flush();
  }
}
```

```
</section>
```

## Contributors

This sample was created by Sourabh Choraria, blogger and Google Developer Expert.

- Find Sourabh on Twitter [@schoraria911](https://twitter.com/schoraria911).
- Read Sourabh's [blog](https://script.gs/).

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom menus in Google Workspace](../../guides/menus.md)
