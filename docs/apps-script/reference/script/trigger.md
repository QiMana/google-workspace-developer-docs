---
source: https://developers.google.com/apps-script/reference/script/trigger
root: apps-script
fetched_at: 2026-04-23T15:20:58.758Z
---

# Class Trigger

## Page Summary

- `getEventType()` returns the type of event that causes the trigger to fire.
- `getHandlerFunction()` returns the name of the script function that runs when the trigger fires.
- `getTriggerSource()` identifies the origin of the event that activates the trigger.
- `getTriggerSourceId()` provides an ID specific to the event source, like a spreadsheet ID.
- `getUniqueId()` returns a unique identifier for the trigger itself.

A script trigger.

## Detailed documentation

### getEventType()

Returns the event type that the trigger fires on.

```
const triggers = ScriptApp.getProjectTriggers();
for (let i = 0; i < triggers.length; i++) {
  if (triggers[i].getEventType() === ScriptApp.EventType.CLOCK) {
    // Some code here - other options are:
    // ScriptApp.EventType.ON_EDIT
    // ScriptApp.EventType.ON_FORM_SUBMIT
    // ScriptApp.EventType.ON_OPEN
  }
}
```

#### Return

`EventType` — The event type that this is a trigger for.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.scriptapp`

---

### getHandlerFunction()

Returns the function that is called when the trigger fires.

```
// Create a trigger for the script.
ScriptApp.newTrigger('myFunction')
    .forSpreadsheet('id of my spreadsheet')
    .onEdit()
    .create();
Logger.log(ScriptApp.getProjectTriggers()[0]
               .getHandlerFunction());  // logs "myFunction"
```

#### Return

`String` — The method name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.scriptapp`

---

### getTriggerSource()

Returns the source of events that causes the trigger to fire.

For example, a spreadsheet onEdit trigger returns SPREADSHEETS, or a time based trigger returns CLOCK.

```
const triggers = ScriptApp.getProjectTriggers();
for (let i = 0; i < triggers.length; i++) {
  if (triggers[i].getTriggerSource() === ScriptApp.TriggerSource.CLOCK) {
    Logger.log(\`${triggers[i].getUniqueId()} source is clock\`);
  } else if (
      triggers[i].getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS) {
    Logger.log(\`${triggers[i].getUniqueId()} source is spreadsheets\`);
  }
}
```

#### Return

`TriggerSource` — The publisher this is a trigger for.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.scriptapp`

---

### getTriggerSourceId()

Returns the id specific to the source.

For example, if the trigger source is a spreadsheet, this is the id of the spreadsheet. For clock events this returns `null`.

#### Return

`String` — The id of the entity in the publisher that this is a trigger for.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.scriptapp`

---

### getUniqueId()

Returns a unique identifier that can be used to distinguish triggers from each other.

#### Return

`String` — The unique identifier of the trigger.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.scriptapp`
