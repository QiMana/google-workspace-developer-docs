---
source: https://developers.google.com/apps-script/guides/triggers/events
root: apps-script
fetched_at: 2026-04-23T15:18:28.740Z
---

# Event Objects

## Page Summary

- Apps Script can run a function automatically using simple or installable triggers when a specific event occurs.
- When a trigger fires, an event object (`e`) containing contextual information is passed to the function as an argument.
- This page details the fields within the event object for various trigger types across different Google services like Sheets, Docs, Slides, Forms, Calendar, and Workspace add-ons.
- Events produced by installable triggers include a `triggerUid` to identify the specific trigger.
- Calendar triggers indicate that a sync operation is needed, not which specific event changed.

[Simple triggers](https://developers.google.com/apps-script/guides/triggers) and [installable triggers](https://developers.google.com/apps-script/guides/triggers/installable) let Google Apps Script run a function automatically if a certain event occurs. When a trigger fires, Apps Script passes the function an event object as an argument, typically `e`. The event object contains information about the context that caused the trigger to fire. For example, the following sample code shows a simple `onEdit(e)` trigger for a Google Sheets script that uses the event object to determine which cell was edited.

```
function onEdit(e){
  // Set a comment on the edited cell to indicate when it was changed.
  var range = e.range;
  range.setNote('Last modified: ' + new Date());
}
```

This page describes the fields in the event object for different types of triggers.

Events produced by installable triggers contain a `triggerUid` identifying the trigger that produced the event. This helps scripts that have multiple installable triggers.

## Google Sheets events

The various Google Sheets-specific triggers let scripts respond to a user's actions in a spreadsheet.

<table><tbody><tr><th colspan="2"><h3>Open</h3>(<a href="https://developers.google.com/apps-script/guides/triggers#onopen">simple</a> and <a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>LIMITED</code></pre></div></td></tr><tr><td><code>source</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet"><code>Spreadsheet</code></a> object, representing the Sheets file to which the script is bound.</p><div><pre><code>Spreadsheet</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event (installable triggers only).</p><div><pre><code>4034124084959907503</code></pre></div></td></tr><tr><td><code>user</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/base/user"><code>User</code></a> object, representing the active user, if available (<a href="https://developers.google.com/apps-script/reference/base/session#getActiveUser()">depending on a complex set of security restrictions</a>).</p><div><pre><code>amin@example.com</code></pre></div></td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Change</h3>(<a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>FULL</code></pre></div></td></tr><tr><td><code>changeType</code></td><td><p>The type of change (<code>EDIT</code>, <code>INSERT_ROW</code>, <code>INSERT_COLUMN</code>, <code>REMOVE_ROW</code>, <code>REMOVE_COLUMN</code>, <code>INSERT_GRID</code>, <code>REMOVE_GRID</code>, <code>FORMAT</code>, or <code>OTHER</code>).</p><div><pre><code>INSERT_ROW</code></pre></div></td></tr><tr><td><code>source</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet"><code>Spreadsheet</code></a> object, representing the Sheets file to which the script is bound.</p><div><pre><code>Spreadsheet</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event.</p><div><pre><code>4034124084959907503</code></pre></div></td></tr><tr><td><code>user</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/base/user"><code>User</code></a> object, representing the active user, if available (<a href="https://developers.google.com/apps-script/reference/base/session#getActiveUser()">depending on a complex set of security restrictions</a>).</p><div><pre><code>amin@example.com</code></pre></div></td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Edit</h3>(<a href="https://developers.google.com/apps-script/guides/triggers#onedit">simple</a> and <a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>LIMITED</code></pre></div></td></tr><tr><td><code>oldValue</code></td><td><p>Cell value prior to the edit, if any. Only available if the edited range is a single cell. Is undefined if the cell had no previous content.</p><div><pre><code>1234</code></pre></div></td></tr><tr><td><code>range</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/spreadsheet/range"><code>Range</code></a> object, representing the cell or range of cells that were edited.</p><div><pre><code>Range</code></pre></div></td></tr><tr><td><code>source</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet"><code>Spreadsheet</code></a> object, representing the Sheets file to which the script is bound.</p><div><pre><code>Spreadsheet</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event (installable triggers only).</p><div><pre><code>4034124084959907503</code></pre></div></td></tr><tr><td><code>user</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/base/user"><code>User</code></a> object, representing the active user, if available (<a href="https://developers.google.com/apps-script/reference/base/session#getActiveUser()">depending on a complex set of security restrictions</a>).</p><div><pre><code>amin@example.com</code></pre></div></td></tr><tr><td><code>value</code></td><td><p>New cell value after the edit. Only available if the edited range is a single cell.</p><div><pre><code>10</code></pre></div></td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Form submit</h3>(<a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td colspan="2"></td></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>FULL</code></pre></div></td></tr><tr><td><code>namedValues</code></td><td><p>An object containing the question names and values from the form submission.</p><div><pre><code>{
  'First Name': ['Jane'],
  'Timestamp': ['6/7/2015 20:54:13'],
  'Last Name': ['Doe']
}</code></pre></div></td></tr><tr><td><code>range</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/spreadsheet/range"><code>Range</code></a> object, representing the cell or range of cells that were edited.</p><div><pre><code>Range</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event.</p><div><pre><code>4034124084959907503</code></pre></div></td></tr><tr><td><code>values</code></td><td><p>Array with values in the same order as they appear in the spreadsheet.</p><div><pre><code>['2015/05/04 15:00', 'amin@example.com', 'Bob', '27', 'Bill',
'28', 'Susan', '25']</code></pre></div></td></tr></tbody></table>

## Google Docs events

Triggers allow Docs to respond when a user opens a document.

<table><tbody><tr><th colspan="2"><h3>Open</h3>(<a href="https://developers.google.com/apps-script/guides/triggers#onopen">simple</a> and <a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>LIMITED</code></pre></div></td></tr><tr><td><code>source</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/document/document"><code>Document</code></a> object, representing the Docs file to which the script is bound.</p><div><pre><code>Document</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event (installable triggers only).</p><div><pre><code>4034124084959907503</code></pre></div></td></tr><tr><td><code>user</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/base/user"><code>User</code></a> object, representing the active user, if available (<a href="https://developers.google.com/apps-script/reference/base/session#getActiveUser()">depending on a complex set of security restrictions</a>).</p><div><pre><code>amin@example.com</code></pre></div></td></tr></tbody></table>

## Google Slides events

Triggers allow Slides to respond when a user opens a presentation.

<table><tbody><tr><th colspan="2"><h3>Open</h3>(<a href="https://developers.google.com/apps-script/guides/triggers#onopen">simple</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>LIMITED</code></pre></div></td></tr><tr><td><code>source</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/slides/presentation"><code>Presentation</code></a> object, representing the Slides file to which the script is bound.</p><div><pre><code>Presentation</code></pre></div></td></tr><tr><td><code>user</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/base/user"><code>User</code></a> object, representing the active user, if available (<a href="https://developers.google.com/apps-script/reference/base/session#getActiveUser()">depending on a complex set of security restrictions</a>).</p><div><pre><code>amin@example.com</code></pre></div></td></tr></tbody></table>

## Google Forms events

The Forms-specific triggers let scripts respond when a user edits a form or submits a response.

<table><tbody><tr><th colspan="2"><h3>Open</h3>* (<a href="https://developers.google.com/apps-script/guides/triggers#onopen">simple</a> and <a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>LIMITED</code></pre></div></td></tr><tr><td><code>source</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/forms/form"><code>Form</code></a> object, representing the Forms file to which the script is bound.</p><div><pre><code>Form</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event (installable triggers only).</p><div><pre><code>4034124084959907503</code></pre></div></td></tr><tr><td><code>user</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/base/user"><code>User</code></a> object, representing the active user, if available (<a href="https://developers.google.com/apps-script/reference/base/session#getActiveUser()">depending on a complex set of security restrictions</a>).</p><div><pre><code>amin@example.com</code></pre></div></td></tr></tbody></table>

\* This event does not occur when a user opens a form to respond, but rather when an editor opens the form to modify it.

<table><tbody><tr><th colspan="2"><h3>Form submit</h3>(<a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td colspan="2"></td></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>FULL</code></pre></div></td></tr><tr><td><code>response</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/forms/form-response"><code>FormResponse</code></a> object, representing the user's response to the form as a whole.</p><div><pre><code>FormResponse</code></pre></div></td></tr><tr><td><code>source</code></td><td><p>A <a href="https://developers.google.com/apps-script/reference/forms/form"><code>Form</code></a> object, representing the Forms file to which the script is bound.</p><div><pre><code>Form</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event.</p><div><pre><code>4034124084959907503</code></pre></div></td></tr></tbody></table>

## Google Calendar events

Google Calendar triggers fire when a user's calendar events are updated (created, edited, or deleted).

These triggers do not tell you which event changed or how it changed. Instead, they indicate that your code needs to do an incremental sync operation to pick up recent changes to the calendar. For a full description of this procedure, see the [Synchronizing resources guide](https://developers.google.com/calendar/v3/sync) for the [Calendar API](https://developers.google.com/calendar/overview).

To synchronize with Calendar in Apps Script, perform the following steps:

1. Enable the [Calendar advanced service](https://developers.google.com/apps-script/advanced/calendar) for the script project. The built-in [Calendar service](https://developers.google.com/apps-script/reference/calendar) isn't sufficient for this workflow.
2. Determine what calendars to synchronize. For each calendar, perform an [initial sync](https://developers.google.com/calendar/api/guides/sync#initial_full_sync) operation using the Calendar advanced service's [Events.list()](https://developers.google.com/calendar/v3/reference/events/list) method.
3. The initial sync returns a `nextSyncToken` for that calendar. Store this token for later use.
4. When the Apps Script `EventUpdated` trigger fires indicating a calendar event change, perform an [incremental sync](https://developers.google.com/calendar/api/guides/sync#incremental_sync) for the affected calendar using the stored `nextSyncToken`. This is essentially another [Events.list()](https://developers.google.com/calendar/api/v3/reference/events/list) request, but providing the `nextSyncToken` limits the response to only events that have changed since the last sync.
5. Examine the response of the sync to learn what events were updated and have your code respond appropriately. For example, log the change, update a spreadsheet, send email notices, or take other actions.
6. Update the `nextSyncToken` stored for that calendar with the one returned by the incremental sync request. This forces the next sync operation to only return the most current changes.

Occasionally sync tokens are invalidated by the server, resulting in a `410` error. When this happens, your code should conduct a [full sync](https://developers.google.com/calendar/api/guides/sync#full_sync_required_by_server) and replace all the stored synced data and tokens for that calendar.

<table><tbody><tr><th colspan="2"><h3>EventUpdated</h3>(<a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>FULL</code></pre></div></td></tr><tr><td><code>calendarId</code></td><td><p>The string ID of the calendar where the event update occurred.</p><div><pre><code>susan@example.com</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event.</p><div><pre><code>4034124084959907503</code></pre></div></td></tr></tbody></table>

## Google Workspace add-on events

The [`onInstall()` trigger](https://developers.google.com/apps-script/guides/triggers#oninstall) runs automatically when a user installs an [add-on](https://developers.google.com/workspace/add-ons/overview).

<table><tbody><tr><th colspan="2"><h3>Install</h3>(<a href="https://developers.google.com/apps-script/guides/triggers#oninstall">simple</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>FULL</code></pre></div></td></tr></tbody></table>

## Google Chat app events

To learn about event objects in Google Chat, see [Receive and respond to interactions with your Google Chat app](https://developers.google.com/chat/api/guides/message-formats).

## Time-driven events

[Time-driven triggers](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers) (also called clock triggers) let scripts execute at a particular time or on a recurring interval.

<table><tbody><tr><th colspan="2">Time-driven (<a href="https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers">installable</a>)</th></tr><tr><td><code>authMode</code></td><td><p>A value from the <a href="https://developers.google.com/apps-script/reference/script/auth-mode"><code>ScriptApp.AuthMode</code></a> enum.</p><div><pre><code>FULL</code></pre></div></td></tr><tr><td><code>day-of-month</code></td><td><p>Between <code>1</code> and <code>31</code>.</p><p>Because this property name contains dashes it must be accessed via <code>e['day-of-month']</code> rather than dot notation.</p><div><pre><code>31</code></pre></div></td></tr><tr><td><code>day-of-week</code></td><td><p>Between <code>1</code> (Monday) and <code>7</code> (Sunday).</p><p>Because this property name contains dashes it must be accessed via <code>e['day-of-week']</code> rather than dot notation.</p><div><pre><code>7</code></pre></div></td></tr><tr><td><code>hour</code></td><td><p>Between <code>0</code> and <code>23</code>.</p><div><pre><code>23</code></pre></div></td></tr><tr><td><code>minute</code></td><td><p>Between <code>0</code> and <code>59</code>.</p><div><pre><code>59</code></pre></div></td></tr><tr><td><code>month</code></td><td><p>Between <code>1</code> and <code>12</code>.</p><div><pre><code>12</code></pre></div></td></tr><tr><td><code>second</code></td><td><p>Between <code>0</code> and <code>59</code>.</p><div><pre><code>59</code></pre></div></td></tr><tr><td><code>timezone</code></td><td><p>The time zone.</p><div><pre><code>UTC</code></pre></div></td></tr><tr><td><code>triggerUid</code></td><td><p>ID of trigger that produced this event.</p><div><pre><code>4034124084959907503</code></pre></div></td></tr><tr><td><code>week-of-year</code></td><td><p>Between <code>1</code> and <code>52</code>.</p><p>Because this property name contains dashes it must be accessed via <code>e['week-of-year']</code> rather than dot notation.</p><div><pre><code>52</code></pre></div></td></tr><tr><td><code>year</code></td><td><p>The year.</p><div><pre><code>2015</code></pre></div></td></tr></tbody></table>
