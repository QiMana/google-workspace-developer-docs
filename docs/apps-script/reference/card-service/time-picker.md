---
source: https://developers.google.com/apps-script/reference/card-service/time-picker
root: apps-script
fetched_at: 2026-04-23T15:19:12.157Z
---

# Class TimePicker

## Page Summary

- TimePicker is an input field for users to input a time, available for Google Workspace add-ons and Google Chat apps.
- Key methods include setting the field name, title, default hours and minutes, and an action to perform when the input changes.
- The `setFieldName` method requires a unique name to identify the picker in UI interaction events.
- `setHours` and `setMinutes` allow setting prefilled time values, which are represented as strings in form callback parameters.
- `setOnChangeAction` allows associating a script action with changes made to the picker's input.

An input field that allows users to input a time.

Available for Google Workspace add-ons and Google Chat apps.

```
const dateTimePicker =
    CardService.newTimePicker()
        .setTitle('Enter the time.')
        .setFieldName('time_field')
        // Set default value as 3:30 AM.
        .setHours(3)
        .setMinutes(30)
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

`TimePicker` — This picker, for chaining.

---

### setHours(hours)

Sets the prefilled hours value to set in the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hours` | `Integer` | The default hour value placed in the input, range from 0 to 23. It is always represented as a string in the form callback parameters. |

#### Return

`TimePicker` — This picker, for chaining.

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

### setMinutes(minutes)

Sets the prefilled minutes value to set in the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minutes` | `Integer` | The default minutes value placed in the input, range from 0 to 59. It is always represented as a string in the form callback parameters. |

#### Return

`TimePicker` — This picker, for chaining.

---

### setOnChangeAction(action)

Sets an `Action` that the script performs whenever the picker input changes.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The action to take. |

#### Return

`TimePicker` — This picker, for chaining.

---

### setTitle(title)

Sets the title displayed above the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The input field title. |

#### Return

`TimePicker` — This picker, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
