---
source: https://developers.google.com/apps-script/samples/automations/event-session-signup
root: apps-script
fetched_at: 2026-04-23T15:22:22.927Z
---

# Create a sign-up for sessions at a conference

## Page Summary

- This solution creates an automated event registration system using a custom menu in Google Sheets.
- The script uses conference data from a spreadsheet to create a Google Calendar, a sign-up form, and automatically emails personalized itineraries to attendees.
- The process involves setting up the script by making a copy of a sample spreadsheet and authorizing the script.
- Running the script includes filling out and submitting the generated form, then verifying attendee addition in the Conference Calendar.
- Optional steps are provided to reset the solution, allowing for re-use or customization with different event information.

**Coding level**: Beginner  
**Duration**: 5 minutes  
**Project type**: Automation with a [custom menu](https://developers.google.com/apps-script/guides/menus) and an [event-driven trigger](https://developers.google.com/apps-script/guides/triggers/installable#event-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Create an end-to-end event registration system. If you have an event coming up, like a conference, you can set up a new calendar for conference sessions, create a sign-up form, and automatically email attendees personalized itineraries.

![Information from Sheets being transferred to Forms and Calendar](https://developers.google.com/static/apps-script/samples/images/event-signup.jpeg)

![](https://developers.google.com/static/apps-script/samples/images/event-signup.jpeg)

### How it works

This solution uses a custom menu in Google Sheets to implement an automated event registration system. The script creates a calendar with the conference events listed in the Sheets spreadsheet. Then, the script creates a form with the list of events that attendees can sign up for. After attendees fill out the form, the script adds the attendees to the calendar events and emails itineraries to them.

### Apps Script services

This solution uses the following services:

- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet): Provides the event information to the other services.
- [Google Calendar service](https://developers.google.com/apps-script/reference/calendar): Creates a new calendar for the event, adds events to the calendar, and adds attendees to the events they sign up for.
- [Properties service](https://developers.google.com/apps-script/reference/properties): Stores the ID of the calendar created by the Calendar service. When a user clicks **Set up conference** from the custom **Conference** menu, the Properties service checks whether the event registration system has already been set up by checking if the calendar ID property is present. Doing so helps avoid the creation of duplicate forms and calendars.
- [Google Forms service](https://developers.google.com/apps-script/reference/forms): Creates a form from the information in the spreadsheet that lets attendees sign up for sessions.
- [Script service](https://developers.google.com/apps-script/reference/script): Creates a trigger that fires when an attendee fills out the form.
- [Document service](https://developers.google.com/apps-script/reference/document): Gets the event information for the events an attendee signs up for and adds a list of the events to a new document. The script gives the attendee permission to edit the document.
- [Mail service](https://developers.google.com/apps-script/reference/mail): Emails the itinerary document to the attendee.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

1. Click the following button to make a copy of the **Create a sign-up for sessions at a conference** sample Sheets spreadsheet. The Apps Script project for this solution is attached to the spreadsheet:
	[Make a copy](https://docs.google.com/spreadsheets/d/1sBvEM89tddRGOf6oaE4xO8iZc3eCLzuEw6NGihwQ8CY/copy)
2. Click **Conference** \> **Set up conference**. You might need to refresh the page for this custom menu to appear.
3. When prompted, authorize the script. <<../\_snippets/oauth.md>>
4. Click **Conference** \> **Set up conference** again.

## Run the script

1. Click **Tools** \> **Manage Form** \> **Go to live form**.
2. Fill out and submit the form.
3. Go to [calendar.google.com](https://calendar.google.com/).
4. At the left, make sure the box next to **Conference Calendar** is checked.
5. Go to the dates of the events you signed up for and confirm you've been added as an attendee.

### (Optional) Reset the solution

If you want to try this solution over again, or customize it to use your own event information, you need to reset some items that were set up when you first ran the script. To view the steps to reset the solution, click **Reset the solution**:

#### Reset the solution

#### Step 1: Reset the stored script properties

If you try to run the script more than once, you'll be prompted with, **Your conference is already set up. Look in Google Drive for your sign-up form!** This happens because once the Conference Calendar is created, the calendar ID is stored as a script property. When the script runs, it checks if the calendar ID property already exists, and stops running if it does.

Follow these steps to remove the existing calendar ID property:

1. In the spreadsheet, click **Extensions** \> **Apps Script**.
2. In the Apps Script editor, select `resetProperties` from the function drop-down list and click **Run**.

#### Step 2: Delete the Conference Calendar

Every time the script runs, it creates a new calendar. If you don't want to keep the original calendar that was created, follow these steps:

1. Go to [calendar.google.com](https://calendar.google.com/).
2. Next to Conference Calendar, click Options for Conference Calendar ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/more_vert/default/24px.svg) \> **Settings and sharing**.
3. Go to the bottom of the settings and click **Delete**.

#### Step 3: Delete the form submit trigger

The script creates a trigger for form submissions each time you run it. To avoid multiple triggers that result in duplicate emails, remove the original trigger. Follow these steps:

1. In the spreadsheet, click **Extensions** \> **Apps Script**.
2. In the Apps Script project, at the left, click **Triggers** ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/alarm/default/24px.svg).
3. Next to the trigger, click More ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/more_vert/default/24px.svg) \> **Delete trigger**.

#### Step 4: Unlink and delete the form

Each time you run the script, it creates a new form. Follow these steps to unlink the form from your spreadsheet and delete it:

1. In the spreadsheet, right-click the **Form responses** sheet and click **Unlink form** \> **Ok**.
2. Right-click the **Form responses** sheet again and click **Delete** \> **Ok**.
3. Go to [forms.google.com](https://forms.google.com/).
4. Right-click **Conference Form** and click **Remove** \> **Move to trash**.

Once you've reset the solution you can add your own data, or continue to use the sample data, and run the script again.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/event-session-signup

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
 * Inserts a custom menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Conference")
    .addItem("Set up conference", "setUpConference_")
    .addToUi();
}

/**
 * Uses the conference data in the spreadsheet to create
 * Google Calendar events, a Google Form, and a trigger that allows the script
 * to react to form responses.
 */
function setUpConference_() {
  const scriptProperties = PropertiesService.getScriptProperties();
  if (scriptProperties.getProperty("calId")) {
    Browser.msgBox(
      "Your conference is already set up. Look in Google Drive for your" +
        " sign-up form!",
    );
    return;
  }
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName("Conference Setup");
  const range = sheet.getDataRange();
  const values = range.getValues();
  setUpCalendar_(values, range);
  setUpForm_(ss, values);
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(ss)
    .onFormSubmit()
    .create();
}

/**
 * Creates a Google Calendar with events for each conference session in the
 * spreadsheet, then writes the event IDs to the spreadsheet for future use.
 * @param {Array<string[]>} values Cell values for the spreadsheet range.
 * @param {Range} range A spreadsheet range that contains conference data.
 */
function setUpCalendar_(values, range) {
  const cal = CalendarApp.createCalendar("Conference Calendar");
  // Start at 1 to skip the header row.
  for (let i = 1; i < values.length; i++) {
    const session = values[i];
    const title = session[0];
    const start = joinDateAndTime_(session[1], session[2]);
    const end = joinDateAndTime_(session[1], session[3]);
    const options = { location: session[4], sendInvites: true };
    const event = cal
      .createEvent(title, start, end, options)
      .setGuestsCanSeeGuests(false);
    session[5] = event.getId();
  }
  range.setValues(values);

  // Stores the ID for the Calendar, which is needed to retrieve events by ID.
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty("calId", cal.getId());
}

/**
 * Creates a single Date object from separate date and time cells.
 *
 * @param {Date} date A Date object from which to extract the date.
 * @param {Date} time A Date object from which to extract the time.
 * @return {Date} A Date object representing the combined date and time.
 */
function joinDateAndTime_(date_, time) {
  const processedDate = new Date(date_);
  processedDate.setHours(time.getHours());
  processedDate.setMinutes(time.getMinutes());
  return processedDate;
}

/**
 * Creates a Google Form that allows respondents to select which conference
 * sessions they would like to attend, grouped by date and start time in the
 * caller's time zone.
 *
 * @param {Spreadsheet} ss The spreadsheet that contains the conference data.
 * @param {Array<String[]>} values Cell values for the spreadsheet range.
 */
function setUpForm_(ss, values) {
  // Group the sessions by date and time so that they can be passed to the form.
  const schedule = {};
  // Start at 1 to skip the header row.
  for (let i = 1; i < values.length; i++) {
    const session = values[i];
    const day = session[1].toLocaleDateString();
    const time = session[2].toLocaleTimeString();
    if (!schedule[day]) {
      schedule[day] = {};
    }
    if (!schedule[day][time]) {
      schedule[day][time] = [];
    }
    schedule[day][time].push(session[0]);
  }

  // Creates the form and adds a multiple-choice question for each timeslot.
  const form = FormApp.create("Conference Form");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  form.addTextItem().setTitle("Name").setRequired(true);
  form.addTextItem().setTitle("Email").setRequired(true);
  for (const day of Object.keys(schedule)) {
    form.addSectionHeaderItem().setTitle(\`Sessions for ${day}\`);
    for (const time of Object.keys(schedule[day])) {
      form
        .addMultipleChoiceItem()
        .setTitle(\`${time} ${day}\`)
        .setChoiceValues(schedule[day][time]);
    }
  }
}

/**
 * Sends out calendar invitations and a
 * personalized Google Docs itinerary after a user responds to the form.
 *
 * @param {Object} e The event parameter for form submission to a spreadsheet;
 *     see https://developers.google.com/apps-script/understanding_events
 */
function onFormSubmit(e) {
  const user = {
    name: e.namedValues.Name[0],
    email: e.namedValues.Email[0],
  };

  // Grab the session data again so that we can match it to the user's choices.
  const response = [];
  const values = SpreadsheetApp.getActive()
    .getSheetByName("Conference Setup")
    .getDataRange()
    .getValues();
  for (let i = 1; i < values.length; i++) {
    const session = values[i];
    const title = session[0];
    const day = session[1].toLocaleDateString();
    const time = session[2].toLocaleTimeString();
    const timeslot = \`${time} ${day}\`;

    // For every selection in the response, find the matching timeslot and title
    // in the spreadsheet and add the session data to the response array.
    if (e.namedValues[timeslot] && e.namedValues[timeslot] === title) {
      response.push(session);
    }
  }
  sendInvites_(user, response);
  sendDoc_(user, response);
}

/**
 * Add the user as a guest for every session he or she selected.
 * @param {object} user An object that contains the user's name and email.
 * @param {Array<String[]>} response An array of data for the user's session choices.
 */
function sendInvites_(user, response) {
  const id = ScriptProperties.getProperty("calId");
  const cal = CalendarApp.getCalendarById(id);
  for (let i = 0; i < response.length; i++) {
    cal.getEventSeriesById(response[i][5]).addGuest(user.email);
  }
}

/**
 * Creates and shares a personalized Google Doc that shows the user's itinerary.
 * @param {object} user An object that contains the user's name and email.
 * @param {Array<string[]>} response An array of data for the user's session choices.
 */
function sendDoc_(user, response) {
  const doc = DocumentApp.create(
    \`Conference Itinerary for ${user.name}\`,
  ).addEditor(user.email);
  const body = doc.getBody();
  let table = [["Session", "Date", "Time", "Location"]];
  for (let i = 0; i < response.length; i++) {
    table.push([
      response[i][0],
      response[i][1].toLocaleDateString(),
      response[i][2].toLocaleTimeString(),
      response[i][4],
    ]);
  }
  body
    .insertParagraph(0, doc.getName())
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  table = body.appendTable(table);
  table.getRow(0).editAsText().setBold(true);
  doc.saveAndClose();

  // Emails a link to the Doc as well as a PDF copy.
  MailApp.sendEmail({
    to: user.email,
    subject: doc.getName(),
    body: \`Thanks for registering! Here's your itinerary: ${doc.getUrl()}\`,
    attachments: doc.getAs(MimeType.PDF),
  });
}

/**
 * Removes the calId script property so that the 'setUpConference_()' can be run again.
 */
function resetProperties() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.deleteAllProperties();
}
```

```
</section>
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom menus in Google Workspace](https://developers.google.com/apps-script/guides/menus)
- [Event-driven triggers](https://developers.google.com/apps-script/guides/triggers/installable#event-driven_triggers)
