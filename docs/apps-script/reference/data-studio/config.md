---
source: https://developers.google.com/apps-script/reference/data-studio/config
root: apps-script
fetched_at: 2026-04-23T15:19:28.998Z
---

# Class Config

## Page Summary

- Config contains the configuration entries for a connector, defining the questions asked when adding a new connector.
- The `build()` method validates the Config object and returns it in the format needed by Data Studio.
- Config offers methods to create various configuration entry types like checkbox, info, select multiple, select single, text area, and text input.
- Methods like `setDateRangeRequired()` and `setIsSteppedConfig()` allow for setting specific behaviors for the connector configuration.

Contains the configuration entries for a connector. These configuration entries define what questions are asked when adding a new connector.

```
const cc = DataStudioApp.createCommunityConnector();
const config = cc.getConfig();

const info_entry = config.newInfo().setId('info_id').setHelpText(
    'This connector can connect to multiple data endpoints.');
```

## Detailed documentation

### build()

Validates this object and returns it in the format needed by Data Studio.

#### Return

`Object` — The validated `Config` object.

---

### newCheckbox()

Returns a new checkbox configuration entry.

#### Return

`Checkbox` — A new checkbox configuration entry.

---

### newInfo()

Returns a new info configuration entry.

#### Return

`Info` — A new info configuration entry.

---

### newOptionBuilder()

Returns a new options builder.

#### Return

`OptionBuilder` — A new options builder.

---

### newSelectMultiple()

Returns a new select multiple configuration entry.

#### Return

`SelectMultiple` — A new select multiple configuration entry.

---

### newSelectSingle()

Returns a new select single configuration entry.

#### Return

`SelectSingle` — A new select single configuration entry.

---

### newTextArea()

Returns a new text area configuration entry.

#### Return

`TextArea` — A new text area configuration entry.

---

### newTextInput()

Returns a new text input configuration entry.

#### Return

`TextInput` — A new text input configuration entry.

---

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setDateRangeRequired(dateRangeRequired)

If `true`, a date range is provided for getData() requests.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dateRangeRequired` | `Boolean` | Whether or not a date range should be provided to `getData()` requests. |

#### Return

`Config` — This builder, for chaining.

---

### setIsSteppedConfig(isSteppedConfig)

If `true`, `getConfig()` is called again with the current user configuration.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isSteppedConfig` | `Boolean` | The stepped config status to set. |

#### Return

`Config` — This builder, for chaining.
