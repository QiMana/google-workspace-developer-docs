---
source: https://developers.google.com/apps-script/reference/card-service/column
root: apps-script
fetched_at: 2026-04-23T15:19:02.348Z
---

# Class Column

## Page Summary

- Columns are available for Google Chat apps and Google Workspace add-ons.
- You can add various widgets like TextParagraph, Image, and TextInput to a column using the `addWidget()` method.
- The appearance of a column can be customized using methods like `setHorizontalAlignment()`, `setHorizontalSizeStyle()`, and `setVerticalAlignment()`.
- Each method returns the Column object for chaining.

A column.

Available for Google Chat apps and Google Workspace add-ons.

```
const columnWidget = CardService.newTextParagraph();
const column =
    CardService.newColumn()
        .setHorizontalSizeStyle(
            CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
        .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
        .setVerticalAlignment(CardService.VerticalAlignment.CENTER)
        .addWidget(columnWidget);
```

## Detailed documentation

### addWidget(widget)

Adds a widget to the column.

Widgets are displayed in the order they are added. You can add the following widgets to a column:

- `TextParagraph`
- `Image`
- `DecoratedText`
- `ButtonSet`
- `TextInput`
- `SelectionInput`
- `DateTimePicker`

```
const column = CardService.newColumn().addWidget(
    CardService.newTextParagraph().setText('This is a text paragraph widget'),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widget` | `Widget` | The widget to add to the column. |

#### Return

`Column` — This object, for chaining.

---

### setHorizontalAlignment(horizontalAlignment)

Sets the `HorizontalAlignment` of the `Column`. Optional.

```
const column = CardService.newColumn().setHorizontalAlignment(
    CardService.HorizontalAlignment.CENTER,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontalAlignment` | `HorizontalAlignment` | The horizontal alignment of the column. |

#### Return

`Column` — This object, for chaining.

---

### setHorizontalSizeStyle(horizontalSizeStyle)

Sets the `HorizontalSizeStyle` of the Column. Optional.

```
const column = CardService.newColumn().setHorizontalSizeStyle(
    CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontalSizeStyle` | `HorizontalSizeStyle` | The horizontal size of the column. |

#### Return

`Column` — This object, for chaining.

---

### setVerticalAlignment(verticalAlignment)

Sets the `VerticalAlignment` of the `Column`. Optional.

```
const column = CardService.newColumn().setVerticalAlignment(
    CardService.VerticalAlignment.CENTER,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `verticalAlignment` | `VerticalAlignment` | The vertical alignment of the column. |

#### Return

`Column` — This object, for chaining.
