---
source: https://developers.google.com/apps-script/reference/card-service/text-input
root: apps-script
fetched_at: 2026-04-23T15:19:13.250Z
---

# Class TextInput

## Page Summary

- TextInput is an input field widget for accepting text input.
- It supports form submission validation to ensure a value is entered when required.
- TextInput is available for use in Google Workspace add-ons and Google Chat apps.
- Various methods are available to configure the TextInput widget, such as setting the field name, title, hint, and handling changes or suggestions.

A input field widget that accepts text input.

Supports form submission validation. When `Action.setAllWidgetsAreRequired(allWidgetsAreRequired)` is set to `true` or this widget is specified through `Action.addRequiredWidget(requiredWidget)`, the submission action is blocked unless a value is entered.

Available for Google Workspace add-ons and Google Chat apps.

```
const textInput = CardService.newTextInput()
                      .setFieldName('text_input_form_input_key')
                      .setTitle('Text input title')
                      .setHint('Text input hint');
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

Sets the key that identifies this text input in the event object that is generated when there is a UI interaction. Not visible to the user. Required, must be unique.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fieldName` | `String` | The key that is used to identify this input. |

#### Return

`TextInput` — This object, for chaining.

---

### setHint(hint)

Sets a hint for the text input. Used to give the user extra guidance on what to input. For example, a hint could describe formatting ("xxx-xxx-xxxx") for a phone number field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hint` | `String` | The text hint to display below the input field. This text is always visible. |

#### Return

`TextInput` — This object, for chaining.

---

### setHostAppDataSource(hostAppDataSource)

Sets a data source from Google Workspace applications. Currently supports users and Chat spaces.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const workflowDataSource =
    CardService.newWorkflowDataSource().setIncludeVariables(true);

const hostAppDataSource =
    CardService.newHostAppDataSource().setWorkflowDataSource(workflowDataSource);

const textInput = CardService.newTextInput()
                      .setFieldName('text_input_form_input_key')
                      .setTitle('Text input title')
                      .setHint('Text input hint')
                      .setHostAppDataSource(hostAppDataSource);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hostAppDataSource` | `HostAppDataSource` | The data source. |

#### Return

`TextInput` — This object, for chaining.

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

### setInputMode(inputMode)

Sets whether this text input field supports variable insertion.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const textInput = CardService.newTextInput()
                      .setFieldName('text_input_form_input_key')
                      .setTitle('Text input title')
                      .setInputMode(CardService.TextInputMode.PLAIN_TEXT);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `inputMode` | `TextInputMode` | The type of input allowed for this text input field, use RICH\_TEXT to support variable insertion. |

#### Return

`TextInput` — This object, for chaining.

---

### setMultiline(multiline)

Sets whether the input text shows on one line or multiple lines.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `multiline` | `Boolean` | The multiline setting. |

#### Return

`TextInput` — This object, for chaining.

---

### setOnChangeAction(action)

Sets an action to be performed whenever the text input changes.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The action to take. |

#### Return

`TextInput` — This object, for chaining.

---

### setSuggestions(suggestions)

Sets the suggestions for autocompletion in the text field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `suggestions` | `Suggestions` | The collection of suggestions to use. |

#### Return

`TextInput` — This object, for chaining.

---

### setSuggestionsAction(suggestionsAction)

Sets the callback action to fetch suggestions based on user input for autocompletion. The `Action` parameter must specify a callback function that returns a `SuggestionsResponse` object.

```
const action = CardService.newAction()
                   .setFunctionName('suggestionCallback')
                   .setParameters({numSuggestions: 3});

CardService.newTextInput()
    .setFieldName('option-field')
    .setTitle('Option Selected')
    .setSuggestionsAction(action);

// ...

function suggestionCallback(e) {
  const suggestions = CardService.newSuggestions();
  const numSuggestions = Number.parseInt(e.parameter.numSuggestions);
  for (let i = 1; i <= numSuggestions; i++) {
    suggestions.addSuggestion(\`Suggestion ${i}\`);
  }
  return CardService.newSuggestionsResponseBuilder()
      .setSuggestions(suggestions)
      .build();
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `suggestionsAction` | `Action` | The action that fetches suggestions for this input. |

#### Return

`TextInput` — This object, for chaining.

---

### setTitle(title)

Sets the title to be shown above the input field. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The text label for this input. |

#### Return

`TextInput` — This object, for chaining.

---

### setValidation(validation)

Sets the validation rule for this widget.

```
const validation = CardService.newValidation().setCharacterLimit('10').setType(
    CardService.InputType.TEXT);

const input = CardService.newTextInput()
                  .setFieldName('text_name_xxx1')
                  .setTitle('Max 10 characters')
                  .setValidation(validation);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `validation` | `Validation` | The validation rule for this `TextInput` widget. |

#### Return

`TextInput` — This object, for chaining.

---

### setValue(value)

Sets the pre-filled value to be set in the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The default value placed in the input. It is always represented as a string in the form callback parameters. |

#### Return

`TextInput` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
