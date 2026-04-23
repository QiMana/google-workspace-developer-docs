---
source: https://developers.google.com/apps-script/reference/data-studio/select-multiple
root: apps-script
fetched_at: 2026-04-23T15:19:32.523Z
---

# Class SelectMultiple

## Page Summary

- SelectMultiple contains information for the config and determines how the select multiple is displayed in Data Studio.
- Key methods include adding options, setting override capabilities, help text, unique IDs, dynamic status, and display names.
- The `addOption` method adds a new select option using an `OptionBuilder`.
- The `setAllowOverride` method enables or disables overriding for the config entry.
- The `setId` method sets the unique identifier for the configuration entry.
- The `setIsDynamic` method sets the dynamic status, clearing subsequent entries if modified.

Contains select multiple information for the config. Its properties determine how the select multiple is displayed in Data Studio.

Usage:

```
const cc = DataStudioApp.createCommunityConnector();
const config = cc.getConfig();
const option1 =
    config.newOptionBuilder().setLabel('option label').setValue('option_value');

const option2 = config.newOptionBuilder()
                    .setLabel('second option label')
                    .setValue('option_value_2');

const info1 = config.newSelectMultiple()
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

`SelectMultiple` — This builder, for chaining.

---

### setAllowOverride(allowOverride)

Enables overriding for this config entry. If set to `true`, data source creators have the option to enable this for report editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `allowOverride` | `Boolean` | Whether or not this config entry can be overridden in reports. |

#### Return

`SelectMultiple` — This builder, for chaining.

---

### setHelpText(helpText)

Sets the help text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `helpText` | `String` | The help text to set. |

#### Return

`SelectMultiple` — This builder, for chaining.

---

### setId(id)

Sets the unique ID for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID to set. |

#### Return

`SelectMultiple` — This builder, for chaining.

---

### setIsDynamic(isDynamic)

Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isDynamic` | `Boolean` | The dynamic status to set. |

#### Return

`SelectMultiple` — This builder, for chaining.

---

### setName(name)

Sets the display name for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`SelectMultiple` — This builder, for chaining.
