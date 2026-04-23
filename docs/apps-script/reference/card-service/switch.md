---
source: https://developers.google.com/apps-script/reference/card-service/switch
root: apps-script
fetched_at: 2026-04-23T15:19:11.203Z
---

# Class Switch

## Page Summary

- A Switch is a UI element that can be toggled on or off and must be used within a DecoratedText widget.
- Switches are available for Google Workspace add-ons and Google Chat apps.
- Key methods for Switch include setting the control type, field name, on-change action, selected state, and value.
- The setFieldName method is required and identifies the switch in the event object upon UI interaction.
- The setValue method sets the string value sent as form input when the switch is toggled on.

A UI element that supports being toggled on or off. This can only be used within a `DecoratedText` widget.

Available for Google Workspace add-ons and Google Chat apps.

```
const switchDecoratedText =
    CardService.newDecoratedText()
        .setTopLabel('Switch decorated text widget label')
        .setText('This is a decorated text widget with a switch on the right')
        .setWrapText(true)
        .setSwitchControl(
            CardService.newSwitch()
                .setFieldName('form_input_switch_key')
                .setValue('form_input_switch_value')
                .setOnChangeAction(
                    CardService.newAction().setFunctionName(
                        'handleSwitchChange'),
                    ),
        );
```

## Detailed documentation

### setControlType(controlType)

Sets the control type of the switch. Defaults to `SWITCH`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `controlType` | `SwitchControlType` | The switch control type. |

#### Return

`Switch` — This object, for chaining.

---

### setFieldName(fieldName)

Sets the key that identifies this switch in the event object that is generated when there is a UI interaction. Not visible to the user. Required.

Unlike other form fields, this field name does not need to be unique. The form input values for switches using the same field name are returned as an array. The array consists of the values for all enabled switches with that field name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fieldName` | `String` | The key that is used to identify this switch. |

#### Return

`Switch` — This object, for chaining.

---

### setOnChangeAction(action)

Sets the action to take when the switch is toggled.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The action to take when the switch is toggled. |

#### Return

`Switch` — This object, for chaining.

---

### setSelected(selected)

Sets whether this switch should start as selected or unselected.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `selected` | `Boolean` | The starting switch state setting. |

#### Return

`Switch` — This object, for chaining.

---

### setValue(value)

Sets the value that is sent as the form input when this switch is toggled on.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The value associated with the name when the switch is on. When this is sent to the form callback, it is always represented as a string. |

#### Return

`Switch` — This object, for chaining.
