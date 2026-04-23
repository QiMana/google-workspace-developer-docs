---
source: https://developers.google.com/apps-script/reference/card-service/date-time-picker
root: apps-script
fetched_at: 2026-04-23T15:19:04.148Z
---

# Class DateTimePicker

## Page Summary

- The DateTimePicker is an input field for selecting a date and time, supporting form submission validation.
- It is available for Google Workspace add-ons and Google Chat apps.
- Key methods include setting the field name, defining an action on change, setting the time zone offset, setting the title, and setting the default value in milliseconds since the epoch.

An input field that allows users to input a date and time.

Supports form submission validation. When `Action.setAllWidgetsAreRequired(allWidgetsAreRequired)` is set to `true` or this widget is specified through `Action.addRequiredWidget(requiredWidget)`, the submission action is blocked unless a value is selected.

Available for Google Workspace add-ons and Google Chat apps.

```
const dateTimePicker =
    CardService.newDateTimePicker()
        .setTitle('Enter the date and time.')
        .setFieldName('date_time_field')
        // Set default value as Jan 1, 2018, 3:00 AM UTC. Either a number or
        // string is acceptable.
        .setValueInMsSinceEpoch(1514775600)
        // EDT time is 5 hours behind UTC.
        .setTimeZoneOffsetInMins(-5 * 60)
        .setOnChangeAction(
            CardService.newAction().setFunctionName('handleDateTimeChange'),
        );
```

## Detailed documentation

### addEventAction(eventAction)

Adds the event action that can be performed on the widget.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eventAction` | `EventAction` | The `EventAction` to be added. |

#### Return

`Widget` — The Object, for chaining.

---

### setFieldName(fieldName)

Sets the field name that identifies this picker in the event object that is generated when there is a UI interaction. The field name is visible to the user. Required; the specified field name must be unique.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fieldName` | `String` | The name to assign to this input. |

#### Return

`DateTimePicker` — This picker, for chaining.

---

### setHostAppDataSource(hostAppDataSource)

In a Google Workspace Studio agent, lets [input variables](../../../workspace/add-ons/studio/input-variables.md) accept datetime outputs from other steps in the agent. For example, receive the time a gmail message was sent or the date on which a calendar event is scheduled.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const workflowDataSource =
    CardService.newWorkflowDataSource().setIncludeVariables(true);

const hostAppDataSource =
    CardService.newHostAppDataSource().setWorkflowDataSource(workflowDataSource);

const dateTimePicker = CardService.newDateTimePicker()
                          .setTitle('Enter the date and time.')
                          .setFieldName('date_time_field')
                          .setHostAppDataSource(hostAppDataSource);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hostAppDataSource` | `HostAppDataSource` | The data source. |

#### Return

`DateTimePicker` — This picker, for chaining.

---

### setId(id)

Sets the unique ID assigned that's used to identify the widget to be mutated. Widget mutation is only supported in Add-Ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The id of the widget, with a limit of 64 characters and in format of \`\[a-zA-Z0-9-\]+\`. |

#### Return

`Widget` — This object, for chaining.

---

### setOnChangeAction(action)

Sets an `Action` that the script performs whenever the picker input changes.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The action to take. |

#### Return

`DateTimePicker` — This picker, for chaining.

---

### setTimeZoneOffsetInMins(timeZoneOffsetMins)

Sets the number of minutes that the time zone should be offset from UTC. If set, the date and time is displayed in the specified time zone. If not set, the time is displayed in the user's time zone.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timeZoneOffsetMins` | `Integer` | The number of minutes that the time zone is offset from UTC. |

#### Return

`DateTimePicker` — This picker, for chaining.

---

### setTitle(title)

Sets the title displayed above the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The input field title. |

#### Return

`DateTimePicker` — This picker, for chaining.

---

### setValueInMsSinceEpoch(valueMsEpoch)

Sets the prefilled value to be set in the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `valueMsEpoch` | `Number` | The default value placed in the input as a number, in milliseconds since the epoch. It is always represented as a string in the form callback parameters. |

#### Return

`DateTimePicker` — This picker, for chaining.

---

### setValueInMsSinceEpoch(valueMsEpoch)

Sets the prefilled value to be set in the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `valueMsEpoch` | `String` | The default value placed in the input as a string, in milliseconds since the epoch. It is always represented as a string in the form callback parameters. |

#### Return

`DateTimePicker` — This picker, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
