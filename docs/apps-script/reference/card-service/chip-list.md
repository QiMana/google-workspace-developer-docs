---
source: https://developers.google.com/apps-script/reference/card-service/chip-list
root: apps-script
fetched_at: 2026-04-23T15:19:03.008Z
---

# Class ChipList

## Page Summary

- A ChipList holds a set of Chip objects displayed in a row, wrapping to the next line or allowing horizontal scrolling.
- It is available for Google Chat apps and in developer preview for Google Workspace add-ons.
- Key methods include `addChip(chip)` to add chips and `setLayout(layout)` to set the display layout.

Holds a set of objects that are displayed in a row, wrapping to the next line to horizontal scrollable.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const chip = CardService.newChip();
// Finish building the text chip...

const chipList = CardService.newChipList()
                     .setLayout(CardService.ChipListLayout.WRAPPED)
                     .addChip(chip);
```

## Detailed documentation

### addChip(chip)

Adds a chip.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `chip` |  | The chip to add. |

#### Return

`ChipList` — This object, for chaining.

---

### addEventAction(eventAction)

Adds the event action that can be performed on the widget.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eventAction` | `EventAction` | The `EventAction` to be added. |

#### Return

`Widget` — The Object, for chaining.

---

### setId(id)

Sets the unique ID assigned that's used to identify the widget to be mutated. Widget mutation is only supported in Add-Ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The id of the widget, with a limit of 64 characters and in format of \`\[a-zA-Z0-9-\]+\`. |

#### Return

`Widget` — This object, for chaining.

---

### setLayout(layout)

Sets the chip list layout. If unset, it defaults to `ChipListLayout.WRAPPED` layout.

```
const chip = CardService.newChip();
// Finish building the text chip...

const chipList =
    CardService.newChipList()
        .setLayout(CardService.ChipListLayout.HORIZONTAL_SCROLLABLE)
        .addChip(chip);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `layout` | `ChipListLayout` | The chip list layout. |

#### Return

`ChipList` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
