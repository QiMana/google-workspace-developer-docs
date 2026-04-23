---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/text-format-chip
root: apps-script
fetched_at: 2026-04-23T15:18:41.552Z
---

# Class TextFormatChip

A clickable chip in the text format.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const chip = AddOnsResponseService.newChip()
    .setTextFormatIcon(AddOnsResponseService.newTextFormatIcon()
      .setIconUrl("https://www.google.com/icon.png"))
    .setLabel("test_label")
    .setUrl("https://www.google.com/chip.png");

}
```

## Detailed documentation

### setLabel(label)

Sets the text displayed in the chip.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `String` | The text label of the chip. |

#### Return

`TextFormatChip` — This chip object, for chaining.

---

### setTextFormatIcon(icon)

Sets the icon displayed in the chip.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `TextFormatIcon` | The `TextFormatIcon` to set in the chip. |

#### Return

`TextFormatChip` — This chip object, for chaining.

---

### setUrl(url)

Sets the URL to navigate to when the chip is clicked.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The destination URL to the chip. |

#### Return

`TextFormatChip` — This chip object, for chaining.
