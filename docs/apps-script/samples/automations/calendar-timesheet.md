---
source: https://developers.google.com/apps-script/samples/automations/calendar-timesheet
root: apps-script
fetched_at: 2026-04-23T15:22:15.176Z
---

# Record time & activities in Google Calendar & Google Sheets

## Page Summary

- This solution is a beginner-level automation project that takes 15 minutes to set up, using a custom menu to sync Google Calendar events with Google Sheets to create a timesheet or import activities.
- The script uses a sidebar to configure sync settings, including selecting calendars and time periods, and optionally overwriting event details with information from the spreadsheet.
- Key Apps Script services utilized are the HTML service for the sidebar, Properties service for storing settings, Calendar service for retrieving events, and Spreadsheet service for managing data in the sheet and updating Calendar.
- Prerequisites include a Google Account and internet access, and the setup involves creating a Google Calendar and making a copy of the provided sample spreadsheet with the attached Apps Script project.
- The script allows you to categorize time by customer, project, and task in the Sheets file, providing a dashboard view of total time spent by these categories.

**Coding level**: Beginner **Duration**: 15 minutes **Project type**: Automation with a [custom menu](https://developers.google.com/apps-script/guides/menus)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up your environment.
- Set up the script.
- Run the script.

## About this solution

Keep track of time spent on projects for customers. You can record your project-related time in Google Calendar, then sync it with Google Sheets to create a timesheet or import your activity into another timesheet management system. You can categorize your time by customer, project, and task.

![Events in Calendar and Sheets](https://developers.google.com/static/apps-script/samples/images/record-time.png)

![](https://developers.google.com/static/apps-script/samples/images/record-time.png)

### How it works

The script provides a sidebar that lets you select the calendars to sync, the time period to sync with, and whether to overwrite event titles and descriptions with information entered in the spreadsheet. Once those settings are configured, you can sync events and view your activities on a dashboard.

The script brings in events from the calendars and time period you specify from Calendar to the spreadsheet. You can add customers, projects, and tasks to the **categories** sheet and then tag the events accordingly in the **hours** sheet. This way, when you view the **dashboard** sheet, you can view total time by customer, project, and task.

### Apps Script services

This solution uses the following services:

- [HTML service](https://developers.google.com/apps-script/reference/html): Builds the sidebar used to configure synchronization settings.
- [Properties service](https://developers.google.com/apps-script/reference/properties): Stores the settings the user selects on the sidebar.
- [Calendar service](https://developers.google.com/apps-script/reference/calendar): Sends the event information to the spreadsheet.
- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet): Writes the events to the spreadsheet, and if configured, sends updated title and description information to Calendar.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up your environment

If you plan to use an existing calendar, you can skip this step.

1. Go to [calendar.google.com](https://calendar.google.com/calendar).
2. Next to **Other calendars**, click Add other calendars \> **Create new calendar**.
3. Name your calendar and click **Create calendar**.
4. Add some events to the calendar.

## Set up the script

Click the following button to make a copy of the **Record time and activities** sample Sheets spreadsheet:

[Make a copy](https://docs.google.com/spreadsheets/d/1WNJyhhvyiQpDTXkASKzDj6OzIGfPaWWZ2Akanz7vDQ0/copy)

## Run the script

The following sections guide you through running the script.

### Sync calendar events

1. Click **myTime** \> **Settings**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script. <<../\_snippets/oauth.md>>
3. Click **myTime** \> **Settings** again.
4. From the list of available calendars, select the calendar you created and any other calendars you want to sync.
5. Configure the rest of the settings and click **Save**.
6. Click **myTime** \> **Sync calendar events**.

### Set up the dashboard

1. Go to the **Categories** sheet.
2. Add customers, projects, and tasks.
3. Go to the **Hours** sheet.
4. For each synced event, select the customer, project, and task.
5. Go to the **Dashboard** sheet.
	- The first section provides daily totals. To update the list of dates for the daily totals, change the date in cell `A1`.
		- The next section provides weekly totals and corresponds to the date selected in `A1`.
		- The last three sections provide overall totals by task, project, and customer.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/calendar-timesheet

/*
Copyright 2022 Jasper Duizendstra

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
 * Runs when the spreadsheet is opened and adds the menu options
 * to the spreadsheet menu
 */
const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu("myTime")
    .addItem("Sync calendar events", "run")
    .addItem("Settings", "settings")
    .addToUi();
};

/**
 * Opens the sidebar
 */
const settings = () => {
  const html =
    HtmlService.createHtmlOutputFromFile("Page").setTitle("Settings");

  SpreadsheetApp.getUi().showSidebar(html);
};

/**
 * returns the settings from the script properties
 */
const getSettings = () => {
  const settings = {};

  // get the current settings
  const savedCalendarSettings = JSON.parse(
    PropertiesService.getScriptProperties().getProperty("calendar") || "[]",
  );

  // get the primary calendar
  const primaryCalendar = CalendarApp.getAllCalendars()
    .filter((cal) => cal.isMyPrimaryCalendar())
    .map((cal) => ({
      name: "Primary calendar",
      id: cal.getId(),
    }));

  // get the secondary calendars
  const secundaryCalendars = CalendarApp.getAllCalendars()
    .filter((cal) => cal.isOwnedByMe() && !cal.isMyPrimaryCalendar())
    .map((cal) => ({
      name: cal.getName(),
      id: cal.getId(),
    }));

  // the current available calendars
  const availableCalendars = primaryCalendar.concat(secundaryCalendars);

  // find any calendars that were removed
  const unavailebleCalendars = [];
  for (const savedCalendarSetting of savedCalendarSettings) {
    if (
      !availableCalendars.find(
        (availableCalendar) => availableCalendar.id === savedCalendarSetting.id,
      )
    ) {
      unavailebleCalendars.push(savedCalendarSetting);
    }
  }

  // map the current settings to the available calendars
  const calendarSettings = availableCalendars.map((availableCalendar) => {
    if (
      savedCalendarSettings.find(
        (savedCalendar) => savedCalendar.id === availableCalendar.id,
      )
    ) {
      availableCalendar.sync = true;
    }
    return availableCalendar;
  });

  // add the calendar settings to the settings
  settings.calendarSettings = calendarSettings;

  const savedFrom =
    PropertiesService.getScriptProperties().getProperty("syncFrom");
  settings.syncFrom = savedFrom;

  const savedTo = PropertiesService.getScriptProperties().getProperty("syncTo");
  settings.syncTo = savedTo;

  const savedIsUpdateTitle =
    PropertiesService.getScriptProperties().getProperty("isUpdateTitle") ===
    "true";
  settings.isUpdateCalendarItemTitle = savedIsUpdateTitle;

  const savedIsUseCategoriesAsCalendarItemTitle =
    PropertiesService.getScriptProperties().getProperty(
      "isUseCategoriesAsCalendarItemTitle",
    ) === "true";
  settings.isUseCategoriesAsCalendarItemTitle =
    savedIsUseCategoriesAsCalendarItemTitle;

  const savedIsUpdateDescription =
    PropertiesService.getScriptProperties().getProperty(
      "isUpdateDescription",
    ) === "true";
  settings.isUpdateCalendarItemDescription = savedIsUpdateDescription;

  return settings;
};

/**
 * Saves the settings from the sidebar
 */
const saveSettings = (settings) => {
  PropertiesService.getScriptProperties().setProperty(
    "calendar",
    JSON.stringify(settings.calendarSettings),
  );
  PropertiesService.getScriptProperties().setProperty(
    "syncFrom",
    settings.syncFrom,
  );
  PropertiesService.getScriptProperties().setProperty(
    "syncTo",
    settings.syncTo,
  );
  PropertiesService.getScriptProperties().setProperty(
    "isUpdateTitle",
    settings.isUpdateCalendarItemTitle,
  );
  PropertiesService.getScriptProperties().setProperty(
    "isUseCategoriesAsCalendarItemTitle",
    settings.isUseCategoriesAsCalendarItemTitle,
  );
  PropertiesService.getScriptProperties().setProperty(
    "isUpdateDescription",
    settings.isUpdateCalendarItemDescription,
  );
  return "Settings saved";
};

/**
 * Builds the myTime object and runs the synchronisation
 */
const run = () => {
  myTime({
    mainSpreadsheetId: SpreadsheetApp.getActiveSpreadsheet().getId(),
  }).run();
};

/**
 * The main function used for the synchronisation
 * @param {Object} par The main parameter object.
 * @return {Object} The myTime Object.
 */
const myTime = (par) => {
  /**
   * Format the sheet
   */
  const formatSheet = () => {
    // sort decending on start date
    hourSheet.sort(3, false);

    // hide the technical columns
    hourSheet.hideColumns(1, 2);

    // remove any extra rows
    if (
      hourSheet.getLastRow() > 1 &&
      hourSheet.getLastRow() < hourSheet.getMaxRows()
    ) {
      hourSheet.deleteRows(
        hourSheet.getLastRow() + 1,
        hourSheet.getMaxRows() - hourSheet.getLastRow(),
      );
    }

    // set the validation for the customers
    let rule = SpreadsheetApp.newDataValidation()
      .requireValueInRange(categoriesSheet.getRange("A2:A"), true)
      .setAllowInvalid(true)
      .build();
    hourSheet.getRange("I2:I").setDataValidation(rule);

    // set the validation for the projects
    rule = SpreadsheetApp.newDataValidation()
      .requireValueInRange(categoriesSheet.getRange("B2:B"), true)
      .setAllowInvalid(true)
      .build();
    hourSheet.getRange("J2:J").setDataValidation(rule);

    // set the validation for the tsaks
    rule = SpreadsheetApp.newDataValidation()
      .requireValueInRange(categoriesSheet.getRange("C2:C"), true)
      .setAllowInvalid(true)
      .build();
    hourSheet.getRange("K2:K").setDataValidation(rule);

    if (isUseCategoriesAsCalendarItemTitle) {
      hourSheet
        .getRange("L2:L")
        .setFormulaR1C1(
          'IF(OR(R[0]C[-3]="tbd";R[0]C[-2]="tbd";R[0]C[-1]="tbd");""; CONCATENATE(R[0]C[-3];"|";R[0]C[-2];"|";R[0]C[-1];"|"))',
        );
    }
    // set the hours, month, week and number collumns
    hourSheet
      .getRange("P2:P")
      .setFormulaR1C1('=IF(R[0]C[-12]="";"";R[0]C[-12]-R[0]C[-13])');
    hourSheet
      .getRange("Q2:Q")
      .setFormulaR1C1('=IF(R[0]C[-13]="";"";month(R[0]C[-13]))');
    hourSheet
      .getRange("R2:R")
      .setFormulaR1C1('=IF(R[0]C[-14]="";"";WEEKNUM(R[0]C[-14];2))');
    hourSheet.getRange("S2:S").setFormulaR1C1("=R[0]C[-3]");
  };

  /**
   * Activate the synchronisation
   */
  function run() {
    console.log("Started processing hours.");

    const processCalendar = (setting) => {
      SpreadsheetApp.flush();

      // current calendar info
      const calendarName = setting.name;
      const calendarId = setting.id;

      console.log(
        \`processing ${calendarName} with the id ${calendarId} from ${syncStartDate} to ${syncEndDate}\`,
      );

      // get the calendar
      const calendar = CalendarApp.getCalendarById(calendarId);

      // get the calendar events and create lookups
      const events = calendar.getEvents(syncStartDate, syncEndDate);
      const eventsLookup = events.reduce((jsn, event) => {
        jsn[event.getId()] = event;
        return jsn;
      }, {});

      // get the sheet events and create lookups
      const existingEvents = hourSheet.getDataRange().getValues().slice(1);
      const existingEventsLookUp = existingEvents.reduce((jsn, row, index) => {
        if (row[0] !== calendarId) {
          return jsn;
        }
        jsn[row[1]] = {
          event: row,
          row: index + 2,
        };
        return jsn;
      }, {});

      // handle a calendar event
      const handleEvent = (event) => {
        const eventId = event.getId();

        // new event
        if (!existingEventsLookUp[eventId]) {
          hourSheet.appendRow([
            calendarId,
            eventId,
            event.getStartTime(),
            event.getEndTime(),
            calendarName,
            event.getCreators().join(","),
            event.getTitle(),
            event.getDescription(),
            event.getTag("Client") || "tbd",
            event.getTag("Project") || "tbd",
            event.getTag("Task") || "tbd",
            isUpdateCalendarItemTitle ? "" : event.getTitle(),
            isUpdateCalendarItemDescription ? "" : event.getDescription(),
            event
              .getGuestList()
              .map((guest) => guest.getEmail())
              .join(","),
            event.getLocation(),
            undefined,
            undefined,
            undefined,
            undefined,
          ]);
          return true;
        }

        // existing event
        const exisitingEvent = existingEventsLookUp[eventId].event;
        const exisitingEventRow = existingEventsLookUp[eventId].row;

        if (event.getStartTime() - exisitingEvent[startTimeColumn - 1] !== 0) {
          hourSheet
            .getRange(exisitingEventRow, startTimeColumn)
            .setValue(event.getStartTime());
        }

        if (event.getEndTime() - exisitingEvent[endTimeColumn - 1] !== 0) {
          hourSheet
            .getRange(exisitingEventRow, endTimeColumn)
            .setValue(event.getEndTime());
        }

        if (
          event.getCreators().join(",") !== exisitingEvent[creatorsColumn - 1]
        ) {
          hourSheet
            .getRange(exisitingEventRow, creatorsColumn)
            .setValue(event.getCreators()[0]);
        }

        if (
          event
            .getGuestList()
            .map((guest) => guest.getEmail())
            .join(",") !== exisitingEvent[guestListColumn - 1]
        ) {
          hourSheet.getRange(exisitingEventRow, guestListColumn).setValue(
            event
              .getGuestList()
              .map((guest) => guest.getEmail())
              .join(","),
          );
        }

        if (event.getLocation() !== exisitingEvent[locationColumn - 1]) {
          hourSheet
            .getRange(exisitingEventRow, locationColumn)
            .setValue(event.getLocation());
        }

        if (event.getTitle() !== exisitingEvent[titleColumn - 1]) {
          if (!isUpdateCalendarItemTitle) {
            hourSheet
              .getRange(exisitingEventRow, titleColumn)
              .setValue(event.getTitle());
          }
          if (isUpdateCalendarItemTitle) {
            event.setTitle(exisitingEvent[titleColumn - 1]);
          }
        }

        if (event.getDescription() !== exisitingEvent[descriptionColumn - 1]) {
          if (!isUpdateCalendarItemDescription) {
            hourSheet
              .getRange(exisitingEventRow, descriptionColumn)
              .setValue(event.getDescription());
          }
          if (isUpdateCalendarItemDescription) {
            event.setDescription(exisitingEvent[descriptionColumn - 1]);
          }
        }

        return true;
      };

      // process each event for the calendar
      events.every(handleEvent);

      // remove any events in the sheet that are not in de calendar
      existingEvents.every((event, index) => {
        if (event[0] !== calendarId) {
          return true;
        }

        if (eventsLookup[event[1]]) {
          return true;
        }

        if (event[3] < syncStartDate) {
          return true;
        }

        hourSheet.getRange(index + 2, 1, 1, 20).clear();
        return true;
      });

      return true;
    };

    // process the calendars
    settings.calendarSettings
      .filter((calenderSetting) => calenderSetting.sync === true)
      .every(processCalendar);

    formatSheet();
    SpreadsheetApp.setActiveSheet(hourSheet);

    console.log("Finished processing hours.");
  }

  const mainSpreadSheetId = par.mainSpreadsheetId;
  const mainSpreadsheet = SpreadsheetApp.openById(mainSpreadSheetId);
  const hourSheet = mainSpreadsheet.getSheetByName("Hours");
  const categoriesSheet = mainSpreadsheet.getSheetByName("Categories");
  const settings = getSettings();

  const syncStartDate = new Date();
  syncStartDate.setDate(syncStartDate.getDate() - Number(settings.syncFrom));

  const syncEndDate = new Date();
  syncEndDate.setDate(syncEndDate.getDate() + Number(settings.syncTo));

  const isUpdateCalendarItemTitle = settings.isUpdateCalendarItemTitle;
  const isUseCategoriesAsCalendarItemTitle =
    settings.isUseCategoriesAsCalendarItemTitle;
  const isUpdateCalendarItemDescription =
    settings.isUpdateCalendarItemDescription;

  const startTimeColumn = 3;
  const endTimeColumn = 4;
  const creatorsColumn = 6;
  const originalTitleColumn = 7;
  const originalDescriptionColumn = 8;
  const clientColumn = 9;
  const projectColumn = 10;
  const taskColumn = 11;
  const titleColumn = 12;
  const descriptionColumn = 13;
  const guestListColumn = 14;
  const locationColumn = 15;

  return Object.freeze({
    run: run,
  });
};
```

```
</section>
<section>
  <h3>Page.html</h3>
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

<head>
    <link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons1.css">
    <style>
        #main {
            display: none
        }

        #categories-as-item-title {
            display: none
        }

        #show_title_warning {
            display: none
        }

        #show_description_warning {
            display: none
        }

        .red {
            color: red;
        }

        .branding-below {
            bottom: 56px;
            top: 0;
        }

        input[type=number] {
            width: 50px;
            height: 15px;
        }
    </style>
</head>

<body>
    <div class="sidebar branding-below" id="wait">
        Please wait...
    </div>
    <div class="sidebar branding-below" id="main">
        <div class="block" id="checks">
            <b>Synchronise calendars</b>
            <div>
                <span class="error" id="calendar-message"></span>
            </div>
        </div>

        <div class="block">
            <b>Synchronisation period</b>
            <br>Synchronise from the last <input type="number" name="sync-from" id="sync-from"> days
            <br>Synchronise up to the coming <input type="number" name="sync-to" id="sync-to"> days
        </div>

        <div class="block">
            <b>Update the calendar items</b><br>
            <input type="checkbox" id="is-update-calendar-item-title">
            <label for="is-update-calendar-item-title">Overwrite the calendar item title</label>
            <span class="secondary" id="show_title_warning">The calendar title will be overwritten with the values in
                title
                column of the sheet</span>
        </div>
        <div id="categories-as-item-title">
            <input type="checkbox" id="is-use-categories-as-item-title">
            <label for="is-use-categories-as-item-title">Use categories as the calendar item title</label>
        </div>
        <div class="block">
            <input type="checkbox" id="is-update-calendar-item-description">
            <label for="is-update-calendar-item-description">Overwrite the calendar item description</label>
            <span class="secondary" id="show_description_warning">The calendar description will be overwritten with the
                values in description column of the sheet</span>
        </div>
        <div class="block">
            <button class="blue" onClick="saveSettings()">Save</button>
        </div>
        <div class="block">
            <span class="error" id="generic-error"></span>
            <span class="gray" id="generic-message"></span>
        </div>

    </div>
    <div class="sidebar bottom">
        <span class="gray">
            myTime v1.2.0</span>
    </div>
</body>
<script>
    // event handler for categrories
    document.getElementById('is-update-calendar-item-title').addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('categories-as-item-title').style.display = "block";
            document.getElementById('show_title_warning').style.display = "block";
        } else {
            document.getElementById('categories-as-item-title').style.display = "none";
            document.getElementById('is-use-categories-as-item-title').checked = false;
            document.getElementById('show_title_warning').style.display = "none";
        }
    })

    document.getElementById('is-update-calendar-item-description').addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('show_description_warning').style.display = "block";
        } else {
            document.getElementById('show_description_warning').style.display = "none";
        }
    })

    // generic error handler
    const onFailure = (error) => {
        console.debug(error);
        document.getElementById('generic-error').innerHTML = error.message;
    }

    // receiving the settings
    const onSuccessGetSettings = (settings) => {
        console.debug(settings);

        settings.calendarSettings.forEach((calendar, index) => {
            const div = document.createElement('div');

            const check = document.createElement('input');
            check.className = 'calendar-check';
            check.className = 'calendar-check red';
            check.type = 'checkbox';
            check.id = 'calendar' + index;
            check.value = (calendar.id);
            check.name = (calendar.name);
            check.checked = (calendar.sync);

            const label = document.createElement('label')
            label.htmlFor = "calendar" + index;
            label.appendChild(document.createTextNode(calendar.name));
            if (index == 0) {
                label.className = 'red';
            }

            div.appendChild(check);
            div.appendChild(label);

            document.getElementById('checks').appendChild(div);
        });

        document.getElementById('sync-from').value = settings.syncFrom || 31;
        document.getElementById('sync-to').value = settings.syncTo || 31;
        document.getElementById('is-update-calendar-item-title').checked = settings.isUpdateCalendarItemTitle;

        if (settings.isUpdateCalendarItemTitle) {
            document.getElementById('categories-as-item-title').style.display = "block";
            document.getElementById('is-use-categories-as-item-title').checked = settings.isUseCategoriesAsCalendarItemTitle;
            document.getElementById('show_title_warning').style.display = "block";
        }

        if (settings.isUpdateCalendarItemDescription) {
            document.getElementById('is-update-calendar-item-description').checked = settings.isUpdateCalendarItemDescription;
            document.getElementById('show_description_warning').style.display = "block";
        }
        document.getElementById('wait').style.display = "none";
        document.getElementById('main').style.display = "block";

    }

    // receiving the settings saved confirmation
    const onSuccessSaveSettings = (msg) => {
        console.debug(msg);
        document.getElementById('generic-message').innerHTML = msg;
    }

    // save the settings
    const saveSettings = () => {
        document.getElementById('generic-message').innerHTML = '';
        const checks = document.getElementsByClassName('calendar-check');
        const calendarSettings = [];
        for (let check of checks) {
            if (!check.checked) {
                continue;
            }
            calendarSettings.push({
                name: check.name,
                id: check.value,
                sync: check.checked
            });
        }

        const settings = {};
        settings.calendarSettings = calendarSettings;
        settings.syncFrom = document.getElementById('sync-from').value;
        settings.syncTo = document.getElementById('sync-to').value;
        settings.isUpdateCalendarItemTitle = document.getElementById('is-update-calendar-item-title').checked;
        if (settings.isUpdateCalendarItemTitle) {
            settings.isUseCategoriesAsCalendarItemTitle = document.getElementById('is-use-categories-as-item-title').checked;
        }
        if (!settings.isUpdateCalendarItemTitle) {
            settings.isUseCategoriesAsCalendarItemTitle = false;
        }

        settings.isUpdateCalendarItemDescription = document.getElementById('is-update-calendar-item-description').checked;
        console.debug(settings)

        google.script.run
            .withFailureHandler(onFailure)
            .withSuccessHandler(onSuccessSaveSettings)
            .saveSettings(settings);
    }

    // get the initial settings
    google.script.run
        .withFailureHandler(onFailure)
        .withSuccessHandler(onSuccessGetSettings)
        .getSettings();
</script>

</html>
```

```
</section>
```

## Contributors

This sample was created by Jasper Duizendstra, Google Cloud Architect and Google Developer Expert. Find Jasper on Twitter [@Duizendstra](https://twitter.com/duizendstra).

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom menus in Google Workspace](https://developers.google.com/apps-script/guides/menus)
- [Calendar service reference](https://developers.google.com/apps-script/reference/calendar)
