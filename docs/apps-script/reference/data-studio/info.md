---
source: https://developers.google.com/apps-script/reference/data-studio/info
root: apps-script
fetched_at: 2026-04-23T15:19:32.667Z
---

# Class Info

## Page Summary

- The `Info` object contains data for the configuration and determines how it is displayed in Data Studio.
- You can create a new `Info` object using `config.newInfo()`.
- The `Info` object has methods like `setId(id)` and `setText(text)` to set its unique ID and descriptive text.

Contains info data for the config. Its properties determine how the info is displayed in Data Studio.

```
const cc = DataStudioApp.createCommunityConnector();
const config = cc.getConfig();

const info1 = config.newInfo().setId('info1').setText(
    'This text gives some context on the configuration.');
```

## Detailed documentation

### setId(id)

Sets the unique ID for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID to set. |

#### Return

`Info` — This builder, for chaining.

---

### setText(text)

Sets the text for this configuration entry.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text to set. |

#### Return

`Info` — This builder, for chaining.
