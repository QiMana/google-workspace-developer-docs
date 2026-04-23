---
source: https://developers.google.com/apps-script/reference/card-service/columns
root: apps-script
fetched_at: 2026-04-23T15:19:03.195Z
---

# Class Columns

## Page Summary

- The Columns widget displays up to 2 columns in a card or dialog, where widgets can be added to each column and appear in the order specified.
- The height of both columns is determined by the taller column, and rows or widget alignment between columns cannot be defined.
- Columns are displayed side-by-side, and their width can be customized, with the second column wrapping below the first on narrower screens at specific pixel widths for web, iOS, and Android devices.
- This feature is available for Google Chat apps and Google Workspace add-ons, specifically in dialogs displayed from email drafts and the Add attachment menu in Google Calendar events.
- The `addColumn(column)` method adds up to two child columns to the Columns widget, and the `setWrapStyle(wrapStyle)` method controls how the columns resize based on screen width.

The `Columns` widget displays up to 2 columns in a card or dialog. You can add widgets to each ; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Columns](../../../workspace/chat/design-components-card-dialog.md#display_cards_and_dialogs_in_columns).

The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns.

Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first:

- On web, the second column wraps if the screen width is less than or equal to 480 pixels.
- On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt.
- On Android devices, the second column wraps if the screen width is less than or equal to 320 dp.

Available for Google Chat apps and Google Workspace add-ons. The add-on UIs that support columns include:

- The dialog displayed when users open the add-on from an email draft.
- The dialog displayed when users open the add-on from the **Add attachment** menu in a Google Calendar event.
	```
	// Build a column that is aligned in the center and fills the space:
	const column =
	    CardService.newColumn()
	        .setHorizontalSizeStyle(
	            CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
	        .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
	        .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
	const columns = CardService.newColumns().addColumn(column).setWrapStyle(
	    CardService.WrapStyle.WRAP);
	```

## Detailed documentation

### addColumn(column)

Adds a to the Columns widget. Columns are displayed in the order in which they're added. You can add up to two columns.

```
const columns = CardService.newColumns().addColumn(CardService.newColumn());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` |  | A child column to add to the Columns widget. |

#### Return

`Columns` — This object, for chaining.

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

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.

---

### setWrapStyle(wrapStyle)

Sets the wrap style of the columns, controls how the column resizes based on screen width.

```
const columns = CardService.newColumns()
                    .addColumn(CardService.newColumn())
                    .setWrapStyle(CardService.WrapStyle.WRAP);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `wrapStyle` | `WrapStyle` | The wrap style to set for the columns. |

#### Return

`Columns` — This object, for chaining.
