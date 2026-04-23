---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/text-format-icon
root: apps-script
fetched_at: 2026-04-23T15:18:42.579Z
---

# Class TextFormatIcon

An icon that is displayed in a `TextFormatChip`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const icon = AddOnsResponseService.newTextFormatIcon()
      .setMaterialIconName("check_box");
```

## Detailed documentation

### setIconUrl(iconUrl)

Sets the icon URL.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `iconUrl` | `String` | The destination URL of the icon. |

#### Return

`TextFormatIcon` — This text format icon object.

---

### setMaterialIconName(materialIconName)

Sets the material icon name defined in Google Material Icons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `materialIconName` | `String` | The material icon name to set. |

#### Return

`TextFormatIcon` — This text format icon object.
