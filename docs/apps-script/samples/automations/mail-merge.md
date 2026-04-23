---
source: https://developers.google.com/apps-script/samples/automations/mail-merge
root: apps-script
fetched_at: 2026-04-23T15:22:25.219Z
---

# Create a mail merge with Gmail & Google Sheets

## Page Summary

- This solution automatically populates an email template with data from Google Sheets and sends the emails from your Gmail account.
- The process involves creating a Gmail draft with placeholders that correspond to column headers in a Google Sheet.
- The script uses the Gmail and Spreadsheet services of Apps Script to get and send emails, and fill in placeholders with personalized data.
- Setting up the script involves copying a sample spreadsheet, updating recipient information, and creating a Gmail draft email template.
- To run the script, you use a custom "Mail Merge" menu in the spreadsheet and authorize the script when prompted.

**Coding level**: Beginner  
**Duration**: 10 minutes  
**Project type**: Automation with a [custom menu](https://developers.google.com/apps-script/guides/menus)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Automatically populate an email template with data from Sheets. The emails are sent from your Gmail account so that you can respond to recipient replies.

**Important**: This mail merge sample is subject to the email limits described in [Quotas for Google services](https://developers.google.com/apps-script/guides/services/quotas).

![Mail merge automation pulling data from Google Sheets into a Gmail draft.](https://developers.google.com/static/apps-script/samples/images/mail-merge.gif)

![](https://developers.google.com/static/apps-script/samples/images/mail-merge.gif)

### How it works

You create a Gmail draft template with placeholders that correspond to data in a Sheets spreadsheet. Each column header in a sheet represents a placeholder tag. The script sends the information for each placeholder from the spreadsheet to the location of the corresponding placeholder tag in your email draft.

### Apps Script services

This solution uses the following services:

- [Gmail service](https://developers.google.com/apps-script/reference/gmail): Gets, reads, and sends the draft email you want to send to your recipients.
	- If your email includes unicode characters like emoji, use the [Mail service](https://developers.google.com/apps-script/reference/mail) instead. Learn how to update the code to [include unicode characters in your email](#unicode).
- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet): Fills in the email placeholders with the personalized information for each of the recipients.

| ![](https://fonts.gstatic.com/s/i/productlogos/youtube/v9/192px.svg) | Prefer to learn through video?  The Google Workspace Developers channel offers videos about tips, tricks, and the latest features.  [Subscribe now](https://www.youtube.com/channel/UCUcg6az6etU_gRtZVAhBXaw) |
| --- | --- |

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

Complete the following steps to set up the script.

### Create the Apps Script project

1. Click the following button to make a copy of the **Gmail/Sheets Mail Merge** sample spreadsheet. The Apps Script project for this solution is attached to the spreadsheet.
	[Make a copy](https://docs.google.com/spreadsheets/d/1w8bnEEei0U5fYcOJXfA7ItdyXxnUGnQGJ4vFZrZE04Q/copy)
2. In your copied spreadsheet, update the **Recipients** column with email addresses you want to use in the mail merge.
3. (Optional) Add, edit, or remove columns to customize the data you want to include in your email template.

If you change the name of the **Recipient** or **Email Sent** columns, you must update the corresponding code in the Apps Script project. You can open the Apps Script project from the spreadsheet by selecting **Extensions** \> **Apps Script**.

### Create an email template

1. In your Gmail account, create an email draft. To include data from the spreadsheet in your email, use placeholders that correspond to column names surrounded by curly braces, such as `{{First name}}`.
	- If you format the text in the email, you must also format the placeholder brackets.
		- Placeholders are case sensitive and must exactly match the column headers.
2. Copy the subject line of your email draft.

## Run the script

1. In the spreadsheet, click **Mail Merge** \> **Send Emails**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script.
	If the OAuth consent screen displays the warning, **This app isn't verified**, continue by selecting **Advanced** \> **Go to {Project Name} (unsafe)**.
3. Click **Mail Merge** \> **Send Emails** again.
4. Paste the email template subject line and click **OK**.

If you applied a filter to the sheet, the script still emails the filtered participants, but it won't add the timestamp.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/mail-merge

/*
Copyright 2022 Martin Hawksey

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
 * @OnlyCurrentDoc
 */

/**
 * Change these to match the column names you are using for email
 * recipient addresses and email sent column.
 */
const RECIPIENT_COL = "Recipient";
const EMAIL_SENT_COL = "Email Sent";

/**
 * Creates the menu item "Mail Merge" for user to run scripts on drop-down.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Mail Merge").addItem("Send Emails", "sendEmails").addToUi();
}

/**
 * Sends emails from sheet data.
 * @param {string} subjectLine (optional) for the email draft message
 * @param {Sheet} sheet to read data from
 */
function sendEmails(subjectLine, sheet = SpreadsheetApp.getActiveSheet()) {
  // option to skip browser prompt if you want to use this code in other projects
  let processedSubjectLine = subjectLine;
  if (!processedSubjectLine) {
    processedSubjectLine = Browser.inputBox(
      "Mail Merge",
      "Type or copy/paste the subject line of the Gmail " +
        "draft message you would like to mail merge with:",
      Browser.Buttons.OK_CANCEL,
    );

    if (processedSubjectLine === "cancel" || processedSubjectLine === "") {
      // If no subject line, finishes up
      return;
    }
  }

  // Gets the draft Gmail message to use as a template
  const emailTemplate = getGmailTemplateFromDrafts_(processedSubjectLine);

  // Gets the data from the passed sheet
  const dataRange = sheet.getDataRange();
  // Fetches displayed values for each row in the Range HT Andrew Roberts
  // https://mashe.hawksey.info/2020/04/a-bulk-email-mail-merge-with-gmail-and-google-sheets-solution-evolution-using-v8/#comment-187490
  // @see https://developers.google.com/apps-script/reference/spreadsheet/range#getdisplayvalues
  const data = dataRange.getDisplayValues();

  // Assumes row 1 contains our column headings
  const heads = data.shift();

  // Gets the index of the column named 'Email Status' (Assumes header names are unique)
  // @see http://ramblings.mcpher.com/Home/excelquirks/gooscript/arrayfunctions
  const emailSentColIdx = heads.indexOf(EMAIL_SENT_COL);

  // Converts 2d array into an object array
  // See https://stackoverflow.com/a/22917499/1027723
  // For a pretty version, see https://mashe.hawksey.info/?p=17869/#comment-184945
  const obj = data.map((r) =>
    heads.reduce((o, k, i) => {
      o[k] = r[i] || "";
      return o;
    }, {}),
  );

  // Creates an array to record sent emails
  const out = [];

  // Loops through all the rows of data
  obj.forEach((row, rowIdx) => {
    // Only sends emails if email_sent cell is blank and not hidden by a filter
    if (row[EMAIL_SENT_COL] === "") {
      try {
        const msgObj = fillInTemplateFromObject_(emailTemplate.message, row);

        // See https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)
        // If you need to send emails with unicode/emoji characters change GmailApp for MailApp
        // Uncomment advanced parameters as needed (see docs for limitations)
        GmailApp.sendEmail(row[RECIPIENT_COL], msgObj.subject, msgObj.text, {
          htmlBody: msgObj.html,
          // bcc: 'a.bcc@email.com',
          // cc: 'a.cc@email.com',
          // from: 'an.alias@email.com',
          // name: 'name of the sender',
          // replyTo: 'a.reply@email.com',
          // noReply: true, // if the email should be sent from a generic no-reply email address (not available to gmail.com users)
          attachments: emailTemplate.attachments,
          inlineImages: emailTemplate.inlineImages,
        });
        // Edits cell to record email sent date
        out.push([new Date()]);
      } catch (e) {
        // modify cell to record error
        out.push([e.message]);
      }
    } else {
      out.push([row[EMAIL_SENT_COL]]);
    }
  });

  // Updates the sheet with new data
  sheet.getRange(2, emailSentColIdx + 1, out.length).setValues(out);

  /**
   * Get a Gmail draft message by matching the subject line.
   * @param {string} subject_line to search for draft message
   * @return {object} containing the subject, plain and html message body and attachments
   */
  function getGmailTemplateFromDrafts_(subject_line) {
    try {
      // get drafts
      const drafts = GmailApp.getDrafts();
      // filter the drafts that match subject line
      const draft = drafts.filter(subjectFilter_(subject_line))[0];
      // get the message object
      const msg = draft.getMessage();

      // Handles inline images and attachments so they can be included in the merge
      // Based on https://stackoverflow.com/a/65813881/1027723
      // Gets all attachments and inline image attachments
      const allInlineImages = draft.getMessage().getAttachments({
        includeInlineImages: true,
        includeAttachments: false,
      });
      const attachments = draft
        .getMessage()
        .getAttachments({ includeInlineImages: false });
      const htmlBody = msg.getBody();

      // Creates an inline image object with the image name as key
      // (can't rely on image index as array based on insert order)
      const img_obj = allInlineImages.reduce((obj, i) => {
        obj[i.getName()] = i;
        return obj;
      }, {});

      //Regexp searches for all img string positions with cid
      const imgexp = /<img.*?src="cid:(.*?)".*?alt="(.*?)"[^\>]+>/g;
      const matches = [...htmlBody.matchAll(imgexp)];

      //Initiates the allInlineImages object
      const inlineImagesObj = {};
      for (const match of matches) {
        inlineImagesObj[match[1]] = img_obj[match[2]];
      }

      return {
        message: {
          subject: subject_line,
          text: msg.getPlainBody(),
          html: htmlBody,
        },
        attachments: attachments,
        inlineImages: inlineImagesObj,
      };
    } catch (e) {
      throw new Error("Oops - can't find Gmail draft");
    }

    /**
     * Filter draft objects with the matching subject linemessage by matching the subject line.
     * @param {string} subject_line to search for draft message
     * @return {object} GmailDraft object
     */
    function subjectFilter_(subject_line) {
      return (element) => {
        if (element.getMessage().getSubject() === subject_line) {
          return element;
        }
      };
    }
  }

  /**
   * Fill template string with data object
   * @see https://stackoverflow.com/a/378000/1027723
   * @param {string} template string containing {{}} markers which are replaced with data
   * @param {object} data object used to replace {{}} markers
   * @return {object} message replaced with data
   */
  function fillInTemplateFromObject_(template, data) {
    // We have two templates one for plain text and the html body
    // Stringifing the object means we can do a global replace
    let template_string = JSON.stringify(template);

    // Token replacement
    template_string = template_string.replace(/{{[^{}]+}}/g, (key) => {
      return escapeData_(data[key.replace(/[{}]+/g, "")] || "");
    });
    return JSON.parse(template_string);
  }

  /**
   * Escape cell data to make JSON safe
   * @see https://stackoverflow.com/a/9204218/1027723
   * @param {string} str to escape JSON special characters from
   * @return {string} escaped string
   */
  function escapeData_(str) {
    return str
      .replace(/[\\]/g, "\\\\")
      .replace(/[\"]/g, '\\"')
      .replace(/[\/]/g, "\\/")
      .replace(/[\b]/g, "\\b")
      .replace(/[\f]/g, "\\f")
      .replace(/[\n]/g, "\\n")
      .replace(/[\r]/g, "\\r")
      .replace(/[\t]/g, "\\t");
  }
}
```

## Modifications

You can edit the mail merge automation to fit your needs. The following examples demonstrate a few optional changes you can make to the source code.

#### Add Bcc, Cc, ReplyTo, or From email parameters

The sample code includes a number of additional parameters, which are commented out, that let you control the name of the account the email is sent from, reply to email addresses, as well as Bcc and Cc email addresses.

Activate the parameters you want to add by removing the forward slashes `//` in front of each one.

The following sample shows an excerpt from the `sendEmails` function that activates most of the email parameters:

```
GmailApp.sendEmail(row[RECIPIENT_COL], msgObj.subject, msgObj.text, {
         htmlBody: msgObj.html,
         bcc: 'bcc@example.com',
         cc: 'cc@example.com',
         from: 'from.alias@example.com',
         name: 'name of the sender',
         replyTo: 'reply@example.com',
        // noReply: true, // if the email should be sent from a generic no-reply email address (not available to gmail.com users)
```

In the preceding sample, the `noReply` parameter is still commented out because the `replyTo` parameter is set.

#### Include unicode characters in your emails

If you want to include unicode characters, such as emoji, in your emails, you must update the code to use Mail service instead of Gmail service.

In the sample code, update the following line:

```
GmailApp.sendEmail(row[RECIPIENT_COL], msgObj.subject, msgObj.text, {
```

Replace the line with the following code:

```
MailApp.sendEmail(row[RECIPIENT_COL], msgObj.subject, msgObj.text, {
```

## Contributors

The sample was created by Martin Hawksey, Learning Design and Technology Lead at Edinburgh Futures Institute, blogger, and Google Developer Expert.

- Find Martin on Twitter [@mhawksey](https://twitter.com/mhawksey).
- Read Martin's Apps Script related [blog posts](https://mashe.hawksey.info/category/google-apps-script/).
- Watch Martin's YouTube show, [Totally Unscripted](https://www.youtube.com/c/TotallyUnscriptedShow).

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom menus in Google Workspace](https://developers.google.com/apps-script/guides/menus)
- [Extend Sheets](https://developers.google.com/apps-script/guides/sheets)
