---
source: https://developers.google.com/apps-script/samples/automations/timesheets
root: apps-script
fetched_at: 2026-04-23T15:22:22.458Z
---

# Collect & review timesheets from employees

## Page Summary

- This solution automates collecting, calculating, approving, and notifying employees about their weekly timesheets using Google Forms, Google Sheets, and Apps Script.
- The script uses the Spreadsheet service to manage form responses and add calculation and approval columns, the Forms service to create the timesheet form, and the Mail service to send approval status emails.
- Setting up the script involves copying a sample spreadsheet with the attached Apps Script project and authorizing the script.
- Running the script requires adding data through the form, setting approval statuses in the spreadsheet, and using the custom menu to calculate columns and notify employees.

**Coding level**: Beginner  
**Duration**: 15 minutes  
**Project type**: Automation with a [custom menu](https://developers.google.com/apps-script/guides/menus)

## Objectives

- Understand what the solution does.
- Understand what the Google Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Collect employees' weekly timesheets using a form with Google Forms. From Google Sheets, calculate employees' pay, approve or disapprove their timesheets, and send emails notifying them of their approval status.

![Google Sheet showing timesheet form responses.](https://developers.google.com/static/apps-script/samples/images/collect-timesheets.gif)

![](https://developers.google.com/static/apps-script/samples/images/collect-timesheets.gif)

### How it works

The script creates a form and links the responses to the spreadsheet. The script adds columns to the form responses sheet that calculate employees' total hours and weekly pay. Once a timesheet is reviewed, the script emails the employee the approval status.

### Apps Script services

This solution uses the following services:

- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet): Receives form responses and writes columns to the sheet to manage approvals.
- [Forms service](https://developers.google.com/apps-script/reference/forms): Creates a form for employees to enter their weekly timesheets.
- [Mail service](https://developers.google.com/apps-script/reference/mail): Sends emails to employees to notify them when their timesheets have been approved or not.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

To set up this solution, you first need to create an Apps Script project.

### Create the Apps Script project

1. To make a copy of the **Collect and review timesheets** sample spreadsheet, click the following button: [Make a copy](https://docs.google.com/spreadsheets/d/1wFeXui004icYoBPOtQY3Ouw-DLjPmYav7aIwrfJF7vY/copy) The Apps Script project for this solution is attached to the spreadsheet.
2. In your copied spreadsheet, click **Timesheets** \> **Form setup**. You might need to refresh the page for this custom menu to appear.
3. When prompted, authorize the script. <<../\_snippets/oauth.md>>
4. After you authorize the script, click **Timesheets** \> **Form setup** again.

### Add data

1. Click **Tools** \> **Manage form** \> **Go to live form**.
2. Fill out and submit the form with test data.

## Run the script

1. Switch back to the spreadsheet.
2. From the **Form Responses** sheet, click **Timesheets** \> **Column setup**.
3. In the **Approval** column, mark your sample responses as **Approved** or **Not Approved**.
4. Click **Timesheets** \> **Notify employees**.
5. Check your email to confirm you received an approval or rejection email.

## Review the code

To review the Apps Script code for this solution, click **View source code** in the following section:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/timesheets

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

// Global variables representing the index of certain columns.
const COLUMN_NUMBER = {
  EMAIL: 2,
  HOURS_START: 4,
  HOURS_END: 8,
  HOURLY_PAY: 9,
  TOTAL_HOURS: 10,
  CALC_PAY: 11,
  APPROVAL: 12,
  NOTIFY: 13,
};

// Global variables:
const APPROVED_EMAIL_SUBJECT = "Weekly Timesheet APPROVED";
const REJECTED_EMAIL_SUBJECT = "Weekly Timesheet NOT APPROVED";
const APPROVED_EMAIL_MESSAGE = "Your timesheet has been approved.";
const REJECTED_EMAIL_MESSAGE = "Your timesheet has not been approved.";

/**
 * Creates the menu item "Timesheets" for user to run scripts on drop-down.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Timesheets")
    .addItem("Form setup", "setUpForm")
    .addItem("Column setup", "columnSetup")
    .addItem("Notify employees", "checkApprovedStatusToNotify")
    .addToUi();
}

/**
 * Adds "WEEKLY PAY" column with calculated values using array formulas.
 * Adds an "APPROVAL" column at the end of the sheet, containing
 * drop-down menus to either approve/disapprove employee timesheets.
 * Adds a "NOTIFIED STATUS" column indicating whether or not an
 * employee has yet been e mailed.
 */
function columnSetup() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastCol = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();
  const frozenRows = sheet.getFrozenRows();
  const beginningRow = frozenRows + 1;
  const numRows = lastRow - frozenRows;

  // Calls helper functions to add new columns.
  addCalculatePayColumn(sheet, beginningRow);
  addApprovalColumn(sheet, beginningRow, numRows);
  addNotifiedColumn(sheet, beginningRow, numRows);
}

/**
 * Adds TOTAL HOURS and CALCULATE PAY columns and automatically calculates
 * every employee's weekly pay.
 *
 * @param {Object} sheet Spreadsheet object of current sheet.
 * @param {Integer} beginningRow Index of beginning row.
 */
function addCalculatePayColumn(sheet, beginningRow) {
  sheet.insertColumnAfter(COLUMN_NUMBER.HOURLY_PAY);
  sheet.getRange(1, COLUMN_NUMBER.TOTAL_HOURS).setValue("TOTAL HOURS");
  sheet.getRange(1, COLUMN_NUMBER.CALC_PAY).setValue("WEEKLY PAY");

  // Calculates weekly total hours.
  sheet
    .getRange(beginningRow, COLUMN_NUMBER.TOTAL_HOURS)
    .setFormula("=ArrayFormula(D2:D+E2:E+F2:F+G2:G+H2:H)");
  // Calculates weekly pay.
  sheet
    .getRange(beginningRow, COLUMN_NUMBER.CALC_PAY)
    .setFormula("=ArrayFormula(I2:I * J2:J)");
}

/**
 * Adds an APPROVAL column allowing managers to approve/
 * disapprove of each employee's timesheet.
 *
 * @param {Object} sheet Spreadsheet object of current sheet.
 * @param {Integer} beginningRow Index of beginning row.
 * @param {Integer} numRows Number of rows currently in use.
 */
function addApprovalColumn(sheet, beginningRow, numRows) {
  sheet.insertColumnAfter(COLUMN_NUMBER.CALC_PAY);
  sheet.getRange(1, COLUMN_NUMBER.APPROVAL).setValue("APPROVAL");

  // Make sure approval column is all drop-down menus.
  const approvalColumnRange = sheet.getRange(
    beginningRow,
    COLUMN_NUMBER.APPROVAL,
    numRows,
    1,
  );
  const dropdownValues = ["APPROVED", "NOT APPROVED", "IN PROGRESS"];
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(dropdownValues)
    .build();
  approvalColumnRange.setDataValidation(rule);
  approvalColumnRange.setValue("IN PROGRESS");
}

/**
 * Adds a NOTIFIED column allowing managers to see which employees
 * have/have not yet been notified of their approval status.
 *
 * @param {Object} sheet Spreadsheet object of current sheet.
 * @param {Integer} beginningRow Index of beginning row.
 * @param {Integer} numRows Number of rows currently in use.
 */
function addNotifiedColumn(sheet, beginningRow, numRows) {
  sheet.insertColumnAfter(COLUMN_NUMBER.APPROVAL); // global
  sheet.getRange(1, COLUMN_NUMBER.APPROVAL + 1).setValue("NOTIFIED STATUS");

  // Make sure notified column is all drop-down menus.
  const notifiedColumnRange = sheet.getRange(
    beginningRow,
    COLUMN_NUMBER.APPROVAL + 1,
    numRows,
    1,
  );
  const dropdownValues = ["NOTIFIED", "PENDING"];
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(dropdownValues)
    .build();
  notifiedColumnRange.setDataValidation(rule);
  notifiedColumnRange.setValue("PENDING");
}

/**
 * Sets the notification status to NOTIFIED for employees
 * who have received a notification email.
 *
 * @param {Object} sheet Current Spreadsheet.
 * @param {Object} notifiedValues Array of notified values.
 * @param {Integer} i Current status in the for loop.
 * @parma {Integer} beginningRow Row where iterations began.
 */
function updateNotifiedStatus(sheet, notifiedValues, i, beginningRow) {
  // Update notification status.
  notifiedValues[i][0] = "NOTIFIED";
  sheet.getRange(i + beginningRow, COLUMN_NUMBER.NOTIFY).setValue("NOTIFIED");
}

/**
 * Checks the approval status of every employee, and calls helper functions
 * to notify employees via email & update their notification status.
 */
function checkApprovedStatusToNotify() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  // lastCol here is the NOTIFIED column.
  const frozenRows = sheet.getFrozenRows();
  const beginningRow = frozenRows + 1;
  const numRows = lastRow - frozenRows;

  // Gets ranges of email, approval, and notified values for every employee.
  const emailValues = sheet
    .getRange(beginningRow, COLUMN_NUMBER.EMAIL, numRows, 1)
    .getValues();
  const approvalValues = sheet
    .getRange(beginningRow, COLUMN_NUMBER.APPROVAL, lastRow - frozenRows, 1)
    .getValues();
  const notifiedValues = sheet
    .getRange(beginningRow, COLUMN_NUMBER.NOTIFY, numRows, 1)
    .getValues();

  // Traverses through employee's row.
  for (let i = 0; i < numRows; i++) {
    // Do not notify twice.
    if (notifiedValues[i][0] === "NOTIFIED") {
      continue;
    }
    const emailAddress = emailValues[i][0];
    const approvalValue = approvalValues[i][0];

    // Sends notifying emails & update status.
    if (approvalValue === "IN PROGRESS") {
    } else if (approvalValue === "APPROVED") {
      MailApp.sendEmail(
        emailAddress,
        APPROVED_EMAIL_SUBJECT,
        APPROVED_EMAIL_MESSAGE,
      );
      updateNotifiedStatus(sheet, notifiedValues, i, beginningRow);
    } else if (approvalValue === "NOT APPROVED") {
      MailApp.sendEmail(
        emailAddress,
        REJECTED_EMAIL_SUBJECT,
        REJECTED_EMAIL_MESSAGE,
      );
      updateNotifiedStatus(sheet, notifiedValues, i, beginningRow);
    }
  }
}

/**
 * Set up the Timesheets Responses form, & link the form's trigger to
 * send manager an email when a new request is submitted.
 */
function setUpForm() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  if (sheet.getFormUrl()) {
    const msg = "Form already exists. Unlink the form and try again.";
    SpreadsheetApp.getUi().alert(msg);
    return;
  }

  // Create the form.
  const form = FormApp.create("Weekly Timesheets")
    .setCollectEmail(true)
    .setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId())
    .setLimitOneResponsePerUser(false);
  form.addTextItem().setTitle("Employee Name:").setRequired(true);
  form.addTextItem().setTitle("Monday Hours:").setRequired(true);
  form.addTextItem().setTitle("Tuesday Hours:").setRequired(true);
  form.addTextItem().setTitle("Wednesday Hours:").setRequired(true);
  form.addTextItem().setTitle("Thursday Hours:").setRequired(true);
  form.addTextItem().setTitle("Friday Hours:").setRequired(true);
  form.addTextItem().setTitle("HourlyWage:").setRequired(true);

  // Set up on form submit trigger.
  ScriptApp.newTrigger("onFormSubmit").forForm(form).onFormSubmit().create();
}

/**
 * Handle new form submissions to trigger the workflow.
 *
 * @param {Object} event Form submit event
 */
function onFormSubmit(event) {
  const response = getResponsesByName(event.response);

  // Load form responses into a new row.
  const row = [
    "New",
    "",
    response["Emoloyee Email:"],
    response["Employee Name:"],
    response["Monday Hours:"],
    response["Tuesday Hours:"],
    response["Wednesday Hours:"],
    response["Thursday Hours:"],
    response["Friday Hours:"],
    response["Hourly Wage:"],
  ];
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.appendRow(row);
}

/**
 * Converts a form response to an object keyed by the item titles. Allows easier
 * access to response values.
 *
 * @param {FormResponse} response
 * @return {Object} Form values keyed by question title
 */
function getResponsesByName(response) {
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

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom menus in Google Workspace](https://developers.google.com/apps-script/guides/menus)
- [Extend Sheets](https://developers.google.com/apps-script/guides/sheets)
