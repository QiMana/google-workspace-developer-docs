---
source: https://developers.google.com/apps-script/reference/data-studio/select-single
root: apps-script
fetched_at: 2026-04-23T15:19:29.997Z
---

# Class SelectSingle

## Page Summary

- SelectSingle contains configuration information for how a select single is displayed in Data Studio.
- You can add select options, enable overriding, set help text, ID, dynamic status, and display name for a SelectSingle config entry.
- The provided code example demonstrates how to create a SelectSingle instance and add options to it.

Contains select single information for the config. Its properties determine how the select single is displayed in Data Studio.

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
                  .setAllowOverride(true)
                  .addOption(option1)
                  .addOption(option2);
```

## Detailed documentation

### addOption(optionBuilder)

Adds a new select option.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `optionBuilder` | `OptionBuilder` | A builder for an option. |

#### Return

`SelectSingle` — This builder, for chaining.

---

### setAllowOverride(allowOverride)

Enables overriding for this config entry. If set to `true`, data source creators have the option to enable this for report editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `allowOverride` | `Boolean` | Whether or not this config entry can be overridden in reports. |

#### Return

`SelectSingle` — This builder, for chaining.

---

### setHelpText(helpText)

Sets the help text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `helpText` | `String` | The helpText to set. |

#### Return

`SelectSingle` — This builder, for chaining.

---

### setId(id)

Sets the unique ID for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID to set. |

#### Return

`SelectSingle` — This builder, for chaining.

---

### setIsDynamic(isDynamic)

Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isDynamic` | `Boolean` | The dynamic status to set. |

#### Return

`SelectSingle` — This builder, for chaining.

---

### setName(name)

Sets the display name for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`SelectSingle` — This builder, for chaining.
