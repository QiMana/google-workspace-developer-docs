---
source: https://developers.google.com/apps-script/reference/spreadsheet/selection
root: apps-script
fetched_at: 2026-04-23T15:22:02.697Z
---

# Class Selection

## Page Summary

- A selection is the set of cells the user has highlighted in the sheet, which can include non-adjacent ranges.
- The current cell within a selection is where the user's focus is, highlighted with a darker border in the Google Sheets UI.
- The `Selection` object provides methods to access the active range, list of active ranges, the active sheet, and the current cell.
- Methods like `getActiveRange()`, `getActiveRangeList()`, `getActiveSheet()`, and `getCurrentCell()` allow programmatic interaction with the user's selection.
- The `getNextDataRange()` method helps find the next data region edge based on the current cell and active range.

Access the current active selection in the active sheet. A selection is the set of cells the user has highlighted in the sheet, which can be non-adjacent ranges. One cell in the selection is the *current cell*, where the user's current focus is. The current cell is highlighted with a darker border in the Google Sheets UI.

```
const activeSheet = SpreadsheetApp.getActiveSheet();
const rangeList = activeSheet.getRangeList(['A1:B4', 'D1:E4']);
rangeList.activate();

const selection = activeSheet.getSelection();
// Current Cell: D1
console.log(\`Current Cell: ${selection.getCurrentCell().getA1Notation()}\`);
// Active Range: D1:E4
console.log(\`Active Range: ${selection.getActiveRange().getA1Notation()}\`);
// Active Ranges: A1:B4, D1:E4
const ranges = selection.getActiveRangeList().getRanges();
for (let i = 0; i < ranges.length; i++) {
  console.log(\`Active Ranges: ${ranges[i].getA1Notation()}\`);
}
console.log(\`Active Sheet: ${selection.getActiveSheet().getName()}\`);
```

## Detailed documentation

### getActiveRange()

Returns the selected range in the active sheet, or `null` if there is no active range. If multiple ranges are selected this method returns only the last selected range.

```
const selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
const activeRange = selection.getActiveRange();
```

#### Return

`Range|null` — The active range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveRangeList()

Returns the list of active ranges in the active sheet or `null` if there are no active ranges.

If there is a single range selected, this behaves as a `getActiveRange()` call.

```
const sheet = SpreadsheetApp.getActiveSheet();
// Returns the list of active ranges.
const activeRangeList = sheet.getActiveRangeList();
```

#### Return

`RangeList|null` — The list of active ranges.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveSheet()

Returns the active sheet in the spreadsheet.

```
const selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
const activeSheet = selection.getActiveSheet();
```

#### Return

`Sheet` — The active sheet in the spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCurrentCell()

Returns the current (highlighted) cell that is selected in one of the active ranges or `null` if there is no current cell.

```
const selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
// Returns the current highlighted cell in the one of the active ranges.
const currentCell = selection.getCurrentCell();
```

#### Return

`Range|null` — The current cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNextDataRange(direction)

Starting from the `current cell` and `active range` and moving in the given direction, returns an adjusted range where the appropriate edge of the range has been shifted to cover the `next data cell` while still covering the current cell. If the active range is unbounded along the `dimension` of the direction, the original active range is returned. If there is no current cell or active range, `null` is returned. This is equivalent to selecting a range in the editor and hitting `Ctrl+Shift+[arrow key]`.

```
// Assume the active spreadsheet is blank.
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Makes C3 the current cell and C3:E5 the active range.
sheet.getRange('C3:E5').activate();
// Logs 'C1:E3'
console.log(
    SpreadsheetApp.getSelection()
        .getNextDataRange(SpreadsheetApp.Direction.UP)
        .getA1Notation(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | `Direction` | The direction in which to find the next data region edge cell. |

#### Return

`Range|null` — The adjusted range that includes the data cell, or `null` if there is no selection.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
