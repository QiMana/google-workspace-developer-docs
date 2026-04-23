---
source: https://developers.google.com/apps-script/samples/automations/vacation-calendar
root: apps-script
fetched_at: 2026-04-23T15:22:19.746Z
---

# Populate a team vacation calendar

## Page Summary

- This solution automatically populates a shared team vacation calendar by syncing events from individual team members' Google Calendars.
- The script scans the personal calendars of members in a specified Google Group for events containing keywords like "Vacation" or "Out of office" and adds them to the shared calendar.
- The automation runs hourly using a time-driven trigger in Apps Script, which can be modified to change the scanning frequency.
- The solution utilizes the Apps Script Groups service to identify group members and the Calendar advanced service to access and manage calendar events.
- Prerequisites include having a Google Account and access to the internet, and the setup involves creating a team vacation calendar and configuring an Apps Script project.

**Coding level**: Beginner  
**Duration**: 15 min  
**Project type**: Automation with a [time-driven trigger](../../guides/triggers/installable.md#time-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Google Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

A shared vacation calendar is a great tool for helping your team collaborate; anyone can determine who's out of the office at a glance. This solution lets you see when your colleagues are out of the office, with no manual entry required.

![Example of a team vacation calendar populated with out-of-office events](https://developers.google.com/static/apps-script/samples/images/team-vacation.gif)

![](https://developers.google.com/static/apps-script/samples/images/team-vacation.gif)

### How it works

This solution populates a shared vacation calendar based on the individual calendars of each person in a Google group. When someone books time off, they add an event to their personal Google Calendar using a keyword like "Vacation" or "Out of office."

Every hour, the script scans the calendars of the members in the group and syncs appropriate events to the shared calendar. You can [change how often the script scans for new events](#change_how_often_the_script_scans_for_new_events).

This solution only accesses Calendar events that your colleagues have made visible to you using their privacy settings.

### Apps Script services

This solution uses the following services:

- [Google Groups service](../../reference/groups.md): Determines the members of the Google Groups group.
- [Calendar advanced service](../../advanced/calendar.md): Provides access to the [Google Calendar API](../../../workspace/calendar/api/guides/overview.md) and searches for events on the group members' calendars.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

To set up the script for populating the team vacation calendar, complete the following steps:

### Create a team vacation calendar

1. Open [Calendar](https://calendar.google.com/).
2. [Create a new calendar](https://support.google.com/calendar/answer/37095) called "Team Vacations."
3. In the calendar's settings, under **Integrate calendar**, copy the **Calendar ID**.

### Create the Apps Script project

1. To open the **Vacation Calendar** Apps Script project, click the following button: [Open the project](https://script.google.com/d/1jvPSSwJcuLzlDLDy2dr-qorjihiTNAW2H6B5k-dJxHjEPX6hMcNghzSh/edit)
2. Click **Overview** .
3. On the overview page, click Make a copy ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg).
4. In your copied Apps Script project, set the variable `TEAM_CALENDAR_ID` to the ID of the calendar you created earlier.
5. Set the variable `GROUP_EMAIL` to the email address of a Google Groups group containing your team members.
6. Next to **Services**, click Add a service .
7. Select **Google Calendar API** and click **Add**.

## Run the script

1. In your copied Apps Script project, in the function drop-down, select **setup**.
2. Click **Run**.
3. When prompted, authorize the script. <<../\_snippets/oauth.md>>
4. When complete, return to Calendar to confirm the Team Vacations calendar is populated with events.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/vacation-calendar

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

// Set the ID of the team calendar to add events to. You can find the calendar's
// ID on the settings page.
const TEAM_CALENDAR_ID = "ENTER_TEAM_CALENDAR_ID_HERE";
// Set the email address of the Google Group that contains everyone in the team.
// Ensure the group has less than 500 members to avoid timeouts.
// Change to an array in order to add indirect members frrm multiple groups, for example:
// let GROUP_EMAIL = ['ENTER_GOOGLE_GROUP_EMAIL_HERE', 'ENTER_ANOTHER_GOOGLE_GROUP_EMAIL_HERE'];
const GROUP_EMAIL = "ENTER_GOOGLE_GROUP_EMAIL_HERE";

const ONLY_DIRECT_MEMBERS = false;

const KEYWORDS = ["vacation", "ooo", "out of office", "offline"];
const MONTHS_IN_ADVANCE = 3;

/**
 * Sets up the script to run automatically every hour.
 */
function setup() {
  const triggers = ScriptApp.getProjectTriggers();
  if (triggers.length > 0) {
    throw new Error("Triggers are already setup.");
  }
  ScriptApp.newTrigger("sync").timeBased().everyHours(1).create();
  // Runs the first sync immediately.
  sync();
}

/**
 * Looks through the group members' public calendars and adds any
 * 'vacation' or 'out of office' events to the team calendar.
 */
function sync() {
  // Defines the calendar event date range to search.
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + MONTHS_IN_ADVANCE);

  // Determines the time the the script was last run.
  let lastRun = PropertiesService.getScriptProperties().getProperty("lastRun");
  lastRun = lastRun ? new Date(lastRun) : null;

  // Gets the list of users in the Google Group.
  let users = getAllMembers(GROUP_EMAIL);
  if (ONLY_DIRECT_MEMBERS) {
    users = GroupsApp.getGroupByEmail(GROUP_EMAIL).getUsers();
  } else if (Array.isArray(GROUP_EMAIL)) {
    users = getUsersFromGroups(GROUP_EMAIL);
  }

  // For each user, finds events having one or more of the keywords in the event
  // summary in the specified date range. Imports each of those to the team
  // calendar.
  let count = 0;
  for (const user of users) {
    const username = user.getEmail().split("@")[0];
    const events = findEvents(user, today, maxDate, lastRun);
    for (const event of events) {
      importEvent(username, event);
      count++;
    }
  }

  PropertiesService.getScriptProperties().setProperty("lastRun", today);
  console.log(\`Imported ${count} events\`);
}

/**
 * Imports the given event from the user's calendar into the shared team
 * calendar.
 * @param {string} username The team member that is attending the event.
 * @param {Calendar.Event} event The event to import.
 */
function importEvent(username, event) {
  event.summary = \`[${username}] ${event.summary}\`;
  event.organizer = {
    id: TEAM_CALENDAR_ID,
  };
  event.attendees = [];

  // If the event is not of type 'default', it can't be imported, so it needs
  // to be changed.
  if (event.eventType !== "default") {
    event.eventType = "default";
    event.outOfOfficeProperties = undefined;
    event.focusTimeProperties = undefined;
  }

  console.log("Importing: %s", event.summary);
  try {
    Calendar.Events.import(event, TEAM_CALENDAR_ID);
  } catch (e) {
    console.error(
      "Error attempting to import event: %s. Skipping.",
      e.toString(),
    );
  }
}

/**
 * In a given user's calendar, looks for occurrences of the given keyword
 * in events within the specified date range and returns any such events
 * found.
 * @param {Session.User} user The user to retrieve events for.
 * @param {string} keyword The keyword to look for.
 * @param {Date} start The starting date of the range to examine.
 * @param {Date} end The ending date of the range to examine.
 * @param {Date} optSince A date indicating the last time this script was run.
 * @return {Calendar.Event[]} An array of calendar events.
 */
function findEvents(user, start, end, optSince) {
  const params = {
    eventTypes: "outOfOffice",
    timeMin: formatDateAsRFC3339(start),
    timeMax: formatDateAsRFC3339(end),
    showDeleted: true,
  };
  if (optSince) {
    // This prevents the script from examining events that have not been
    // modified since the specified date (that is, the last time the
    // script was run).
    params.updatedMin = formatDateAsRFC3339(optSince);
  }
  let pageToken = null;
  let events = [];
  do {
    params.pageToken = pageToken;
    let response;
    try {
      response = Calendar.Events.list(user.getEmail(), params);
    } catch (e) {
      console.error(
        "Error retriving events for %s, %s: %s; skipping",
        user,
        keyword,
        e.toString(),
      );
      continue;
    }
    events = events.concat(response.items);
    pageToken = response.nextPageToken;
  } while (pageToken);
  return events;
}

/**
 * Returns an RFC3339 formated date String corresponding to the given
 * Date object.
 * @param {Date} date a Date.
 * @return {string} a formatted date string.
 */
function formatDateAsRFC3339(date) {
  return Utilities.formatDate(date, "UTC", "yyyy-MM-dd'T'HH:mm:ssZ");
}

/**
 * Get both direct and indirect members (and delete duplicates).
 * @param {string} the e-mail address of the group.
 * @return {object} direct and indirect members.
 */
function getAllMembers(groupEmail) {
  const group = GroupsApp.getGroupByEmail(groupEmail);
  let users = group.getUsers();
  const childGroups = group.getGroups();
  for (let i = 0; i < childGroups.length; i++) {
    const childGroup = childGroups[i];
    users = users.concat(getAllMembers(childGroup.getEmail()));
  }
  // Remove duplicate members
  const uniqueUsers = [];
  const userEmails = {};
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!userEmails[user.getEmail()]) {
      uniqueUsers.push(user);
      userEmails[user.getEmail()] = true;
    }
  }
  return uniqueUsers;
}

/**
 * Get indirect members from multiple groups (and delete duplicates).
 * @param {array} the e-mail addresses of multiple groups.
 * @return {object} indirect members of multiple groups.
 */
function getUsersFromGroups(groupEmails) {
  const users = [];
  for (const groupEmail of groupEmails) {
    const groupUsers = GroupsApp.getGroupByEmail(groupEmail).getUsers();
    for (const user of groupUsers) {
      if (!users.some((u) => u.getEmail() === user.getEmail())) {
        users.push(user);
      }
    }
  }
  return users;
}
```

## Modifications

You can edit the team vacation calendar automation as much as you'd like to fit your needs. The following is an optional change to modify the trigger.

#### Change how often the script scans for new events

To change how often the script runs, take the following steps:

1. In the Apps Script project, click **Triggers** .
2. Next to the trigger, click Edit Trigger .
3. Select your changes and click **Save**.

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Time-driven triggers](../../guides/triggers/installable.md#time-driven_triggers)
- [Calendar events](../../guides/triggers/events.md#google_calendar_events)
