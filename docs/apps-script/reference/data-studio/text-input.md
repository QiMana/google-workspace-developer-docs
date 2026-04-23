---
source: https://developers.google.com/apps-script/reference/data-studio/text-input
root: apps-script
fetched_at: 2026-04-23T15:19:29.871Z
---

# Class TextInput

## Page Summary

- TextInput is used in Data Studio configurations to display text input fields.
- Various methods like `setAllowOverride`, `setHelpText`, `setId`, `setIsDynamic`, `setName`, and `setPlaceholder` are available to configure the TextInput's properties.
- These methods allow for setting unique IDs, display names, help text, placeholder text, overriding capabilities, and dynamic behavior for the text input field.

Contains text input information for the config. Its properties determine how the text input is displayed in Data Studio.

```
const cc = DataStudioApp.createCommunityConnector();
const config = cc.getConfig();

const info1 = config.newTextInput()
                  .setId('info1')
                  .setName('Search')
                  .setHelpText('for example, Coldplay')
                  .setAllowOverride(true)
                  .setPlaceholder('Search for an artist for all songs.');
```

## Detailed documentation

### setAllowOverride(allowOverride)

Enables overriding for this config entry. If set to `true`, data source creators have the option to enable this for report editors

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `allowOverride` | `Boolean` | Whether or not this config entry can be overridden in reports. |

#### Return

`TextInput` — This builder, for chaining.

---

### setHelpText(helpText)

Sets the help text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `helpText` | `String` | The helpText to set. |

#### Return

`TextInput` — This builder, for chaining.

---

### setId(id)

Sets the unique ID for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID to set. |

#### Return

`TextInput` — This builder, for chaining.

---

### setIsDynamic(isDynamic)

Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isDynamic` | `Boolean` | The dynamic status to set. |

#### Return

`TextInput` — This builder, for chaining.

---

### setName(name)

Sets the display name for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`TextInput` — This builder, for chaining.

---

### setPlaceholder(placeholder)

Sets the placeholder text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `placeholder` | `String` | The placeholder text to set. |

#### Return

`TextInput` — This builder, for chaining.
