---
source: https://developers.google.com/apps-script/manifest/calendar-addons
root: apps-script
fetched_at: 2026-04-23T15:18:30.614Z
---

# Calendar manifest resource

## Page Summary

- The resource configuration is used to define Google Workspace add-on content and behavior within Google Calendar.
- Google Workspace add-on manifests must have all components marked as **Required** if they extend Calendar.
- The Calendar configuration details the manifest settings for Google Calendar extensions, including optional and required fields for various triggers and conferencing solutions.
- The `currentEventAccess` field determines the level of access an add-on has to user-generated event data in Google Calendar.
- ConferenceSolution configurations are only required for add-ons providing third-party conferencing solutions and specify details like ID, logo URL, name, and the function to call for creation.

The resource configuration used to define [Google Workspace add-on](../../workspace/add-ons/concepts/types.md#g_suite_add-ons) content and behavior within Google Calendar. Google Workspace add-on manifests must include all components marked as **Required** if they extend Calendar.

## Calendar

The Google Workspace add-on manifest configuration for Calendar extensions. See [Extending Calendar with Google Workspace add-ons](../../workspace/add-ons/calendar.md) for more information.

JSON representation

```
{
  "createSettingsUrlFunction": string,
  "conferenceSolution": [
    {
      object (ConferenceSolution)
    }
  ],
  "currentEventAccess": string,
  "eventOpenTrigger": {
    object (EventOpenTrigger)
  },
  "eventUpdateTrigger": {
    object (EventUpdateTrigger)
  },
  "eventAttachmentTrigger": {
    object (EventAttachmentTrigger)
  },
  "homepageTrigger": {
    object (HomepageTrigger)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>createSettingsUrlFunction</code></td><td><p><code>string</code></p><b>Only used if the add-on provides <a href="https://developers.google.com/workspace/add-ons/calendar/conferencing/overview#conference_solutions">conferencing solutions</a>.</b> Optional. The name of the Apps Script function that generates a URL leading to the add-on settings page.<br><br>See <a href="https://developers.google.com/workspace/add-ons/calendar/conferencing/add-settings">Adding conferencing add-on settings</a> for details.</td></tr><tr><td><code>conferenceSolution[]</code></td><td><p><code>object (ConferenceSolution)
        </code></p><b>Only used if the add-on provides <a href="https://developers.google.com/workspace/add-ons/calendar/conferencing/overview#conference_solutions">conferencing solutions</a>; at least one solution must be defined.</b> The conferencing solutions offered by the add-on. Each solution appears as an option in the Calendar **Edit event** UI.</td></tr><tr><td><code>currentEventAccess</code></td><td><p><code>string</code></p><p>Determines the access level the add-on has to event data. If omitted, the host doesn't pass event metadata. Valid settings include:</p><ul><li><code>METADATA</code>: Access to basic event metadata.</li><li><code>READ</code>: Access to read event data and metadata.</li><li><code>WRITE</code>: Access to write event data.</li><li><code>READ_WRITE</code>: Access to read and write event data and metadata.</li></ul><p>If set to <code>READ</code> or <code>READ_WRITE</code>, the add-on must include the <code>https://www.googleapis.com/auth/calendar.addons.current.event.read</code> <a href="https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#scopes">scope</a>.<br><br>If set to <code>WRITE</code> or <code>READ_WRITE</code>, the add-on must include the <code>https://www.googleapis.com/auth/calendar.addons.current.event.write</code> <a href="https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#scopes">scope</a>.</p></td></tr><tr><td><code>eventOpenTrigger</code></td><td><p><code>object (EventOpenTrigger)</code></p><p>Trigger specification for event open triggers in Calendar.</p></td></tr><tr><td><code>eventUpdateTrigger</code></td><td><p><code>object (EventUpdateTrigger)</code></p><p><b>Required to provide contextual event update interfaces in Calendar</b>. Trigger specification for event update triggers.</p></td></tr><tr><td><code>eventAttachmentTrigger</code></td><td><p><code>object (EventAttachmentTrigger)</code></p><p>Trigger specification for event attachment triggers in Calendar.</p></td></tr><tr><td><code>homepageTrigger</code></td><td><p><code>object (HomepageTrigger)</code></p><p>The trigger function for the add-on <a href="https://developers.google.com/workspace/add-ons/concepts/homepages">homepage</a> in Calendar. This overrides <a href="https://developers.google.com/apps-script/manifest/addons#Common.FIELDS.homepageTrigger"><code>addOns.common.homepageTrigger</code></a>.</p></td></tr></tbody></table>

### ConferenceSolution

This manifest object is only required for add-ons that extend Calendar with third-party conferencing solutions.

The configuration of a [conferencing solution](../../workspace/add-ons/calendar/conferencing/overview.md) offered by the add-on. Each solution appears as an option in the Google Calendar **Edit event** UI.

JSON representation

```
{
  "id": string,
  "logoUrl": string,
  "name": string,
  "onCreateFunction": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><b>Required</b>. An identifier for the conferencing solution. It must be unique within the set of conference solutions. Do not change the ID once chosen.</td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><b>Required</b>. The name of the conferencing solution shown in the Google Calendar UI.</td></tr><tr><td><code>onCreateFunction</code></td><td><p><code>string</code></p><b>Required</b>. The name of the Apps Script function called when Google Calendar attempts to create this conference type. You must <a href="https://developers.google.com/workspace/add-ons/calendar/conferencing/create-conference">implement this function</a> for each supported solution.</td></tr></tbody></table>

### EventOpenTrigger

A configuration for a contextual trigger that fires when a user opens a Google Calendar event. See [Extending the Calendar event interface](../../workspace/add-ons/calendar/building-calendar-interfaces.md#extending_the_calendar_event_interface) for details.

JSON representation

```
{
  "runFunction": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p>The name of the Apps Script function that runs when a user opens a Calendar event. The function must return an array of <a href="https://developers.google.com/apps-script/reference/card-service/card"><code>Card</code></a> objects for the UI.</td></tr></tbody></table>

### EventUpdateTrigger

A configuration for a contextual trigger that fires when a user edits and saves a Google Calendar event. See [Updating Calendar events](../../workspace/add-ons/calendar/building-calendar-interfaces.md#updating_calendar_events) for details.

JSON representation

```
{
  "runFunction": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p>The name of the Apps Script function that runs when a user saves an edited Calendar event. The function must return an array of <a href="https://developers.google.com/apps-script/reference/card-service/card"><code>Card</code></a> objects for the UI.</td></tr></tbody></table>

### EventAttachmentTrigger

A configuration for a contextual trigger that fires when a user selects the add-on attachment provider in the Calendar menu.

JSON representation

```
{
  "runFunction": string,
  "label": string,
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><b>Required.</b> The name of the Apps Script function that runs when the user selects the provider. The function must return an array of <a href="https://developers.google.com/apps-script/reference/card-service/card"><code>Card</code></a> objects for the UI.</td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><b>Required.</b> The menu text identifying the attachment provider.</td></tr></tbody></table>
