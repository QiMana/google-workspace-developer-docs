---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/text-format-element
root: apps-script
fetched_at: 2026-04-23T15:18:42.148Z
---

# Class TextFormatElement

A text format element, which can be a `TextFormatChip`, `StyledText`, `Hyperlink`, or `ListContainer`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const sampleChip = AddOnsResponseService.newTextFormatChip()
        .setLabel("Label!");
const textFormatElement = AddOnsResponseService.newTextFormatElement()
        .setTextFormatChip(sampleChip);
```

## Detailed documentation

### setHyperlink(hyperlink)

Sets the text format element as a `Hyperlink`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hyperlink` | `Hyperlink` | The `Hyperlink` of the text format element. |

#### Return

`TextFormatElement` — This text format element object.

---

### setListContainer(listContainer)

Sets the text format element as a `ListContainer`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `listContainer` | `ListContainer` | The `ListContainer` of the text format element. |

#### Return

`TextFormatElement` — This text format element object.

---

### setStyledText(styledText)

Sets the text format element as a `StyledText`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `styledText` | `StyledText` | The `StyledText` of the text format element. |

#### Return

`TextFormatElement` — This text format element object.

---

### setText(text)

Sets the text format element as a text string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text of the text format element. |

#### Return

`TextFormatElement` — This text format element object.

---

### setTextFormatChip(chip)

Sets the text format element as a `TextFormatChip`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `chip` | `TextFormatChip` | The `TextFormatChip` of the text format element. |

#### Return

`TextFormatElement` — This text format element object.
