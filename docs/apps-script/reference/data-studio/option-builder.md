---
source: https://developers.google.com/apps-script/reference/data-studio/option-builder
root: apps-script
fetched_at: 2026-04-23T15:19:29.522Z
---

# Class OptionBuilder

## Page Summary

- OptionBuilder is used to create options for SelectSingle and SelectMultiple objects.
- The `setLabel()` method sets the text that the user sees for an option.
- The `setValue()` method sets the value that is passed to the code when an option is selected.

A builder for creating options for `SelectSingle` s and `SelectMultiple` s.

```
const cc = DataStudioApp.createCommunityConnector();
const config = cc.getConfig();

const option1 =
    config.newOptionBuilder().setLabel('option label').setValue('option_value');

const option2 = config.newOptionBuilder()
                    .setLabel('second option label')
                    .setValue('option_value_2');

const info1 = config.newSelectSingle()
                  .setId('api_endpoint')
                  .setName('Data Type')
                  .setHelpText('Select the data type you\'re interested in.')
                  .addOption(option1)
                  .addOption(option2);
```

## Detailed documentation

### setLabel(label)

Sets the label of this option builder. Labels are the text that the user sees when selecting one or more options from the dropdown.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `String` | The label to set. |

#### Return

`OptionBuilder` — This builder, for chaining.

---

### setValue(value)

Sets the value of this option builder. Values are what is passed to the code when a user selects one or more options from the dropdown.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The value to set. |

#### Return

`OptionBuilder` — This builder, for chaining.
