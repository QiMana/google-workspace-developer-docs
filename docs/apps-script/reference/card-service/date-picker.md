---
source: https://developers.google.com/apps-script/reference/card-service/date-picker
root: apps-script
fetched_at: 2026-04-23T15:19:04.609Z
---

# Class DatePicker

## Page Summary

- DatePicker is an input field for selecting a date in Google Workspace add-ons and Google Chat apps.
- Key methods include setting the field name, title, and default value, as well as defining an action when the input changes.
- The `setValueInMsSinceEpoch` method can accept the default date value as either a number or a string representing milliseconds since the epoch.

An input field that allows inputing a date.

Available for Google Workspace add-ons and Google Chat apps.

```
const dateTimePicker =
    CardService.newDatePicker()
        .setTitle('Enter the date.')
        .setFieldName('date_field')
        // Set default value as Jan 1, 2018 UTC. Either a number or string is
        // acceptable.
        .setValueInMsSinceEpoch(1514775600)
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

`DatePicker` — This picker, for chaining.

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

`DatePicker` — This picker, for chaining.

---

### setTitle(title)

Sets the title displayed above the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The input field title. |

#### Return

`DatePicker` — This picker, for chaining.

---

### setValueInMsSinceEpoch(valueMsEpoch)

Sets the prefilled value to be set in the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `valueMsEpoch` | `Number` | The default value placed in the input as a number, in milliseconds since the epoch. Only the date of the epoch time is used, and the time of the epoch time is discarded. It is always represented as a string in the form callback parameters. |

#### Return

`DatePicker` — This picker, for chaining.

---

### setValueInMsSinceEpoch(valueMsEpoch)

Sets the prefilled value to be set in the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `valueMsEpoch` | `String` | The default value placed in the input as a string, in milliseconds since the epoch. Only the date of the epoch time is used, and the time of the epoch time is discarded. It is always represented as a string in the form callback parameters. |

#### Return

`DatePicker` — This picker, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
