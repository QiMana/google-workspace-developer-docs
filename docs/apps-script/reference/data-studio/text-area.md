---
source: https://developers.google.com/apps-script/reference/data-studio/text-area
root: apps-script
fetched_at: 2026-04-23T15:19:30.980Z
---

# Class TextArea

## Page Summary

- TextArea in Data Studio config controls how text input is displayed.
- TextArea properties can be set using methods like setId, setName, setHelpText, setAllowOverride, and setPlaceholder.
- The setAllowOverride method allows data source creators to enable overriding for report editors.
- The setIsDynamic method, when set to true and modified, clears subsequent configuration entries.
- All setting methods for TextArea return the TextArea object for method chaining.

Contains text area information for the config. Its properties determine how the text input is displayed in Data Studio.

Usage:

```
const cc = DataStudioApp.createCommunityConnector();
const config = cc.getConfig();

const textArea1 = config.newTextArea()
                      .setId('textArea1')
                      .setName('Search')
                      .setHelpText('for example, Coldplay')
                      .setAllowOverride(true)
                      .setPlaceholder('Search for an artist for all songs.');
```

## Detailed documentation

### setAllowOverride(allowOverride)

Enables overriding for this config entry. If set to `true`, data source creators have the option to enable this for report editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `allowOverride` | `Boolean` | Whether or not this config entry can be overridden in reports. |

#### Return

`TextArea` — This builder, for chaining.

---

### setHelpText(helpText)

Sets the help text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `helpText` | `String` | The helpText to set. |

#### Return

`TextArea` — This builder, for chaining.

---

### setId(id)

Sets the unique ID for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID to set. |

#### Return

`TextArea` — This builder, for chaining.

---

### setIsDynamic(isDynamic)

Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isDynamic` | `Boolean` | The dynamic status to set. |

#### Return

`TextArea` — This builder, for chaining.

---

### setName(name)

Sets the display name for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`TextArea` — This builder, for chaining.

---

### setPlaceholder(placeholder)

Sets the placeholder text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `placeholder` | `String` | The placeholder text to set. |

#### Return

`TextArea` — This builder, for chaining.
