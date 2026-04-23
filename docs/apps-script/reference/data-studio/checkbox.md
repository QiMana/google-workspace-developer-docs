---
source: https://developers.google.com/apps-script/reference/data-studio/checkbox
root: apps-script
fetched_at: 2026-04-23T15:19:28.294Z
---

# Class Checkbox

## Page Summary

- Checkbox contains configuration information determining how it's displayed in Data Studio.
- Methods available for Checkbox include setting allow override, help text, ID, dynamic status, and name.
- Each method returns the Checkbox builder for chaining.

Contains checkbox information for the config. Its properties determine how the checkbox is displayed in Data Studio.

```
const config = DataStudioApp.createCommunityConnector().getConfig();
const checkbox = config.newCheckbox()
                     .setId('use_https')
                     .setName('Use Https?')
                     .setHelpText('Whether or not https should be used.')
                     .setAllowOverride(true);
```

## Detailed documentation

### setAllowOverride(allowOverride)

Enables overriding for this config entry. If set to `true`, data source creators have the option to enable this for report editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `allowOverride` | `Boolean` | Whether or not this config entry can be overridden in reports. |

#### Return

`Checkbox` — This builder, for chaining.

---

### setHelpText(helpText)

Sets the help text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `helpText` | `String` | The helpText to set. |

#### Return

`Checkbox` — This builder, for chaining.

---

### setId(id)

Sets the unique ID for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID to set. |

#### Return

`Checkbox` — This builder, for chaining.

---

### setIsDynamic(isDynamic)

Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isDynamic` | `Boolean` | The dynamic status to set. |

#### Return

`Checkbox` — This builder, for chaining.

---

### setName(name)

Sets the display name for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`Checkbox` — This builder, for chaining.
