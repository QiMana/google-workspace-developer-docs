---
source: https://developers.google.com/apps-script/reference/spreadsheet/named-range
root: apps-script
fetched_at: 2026-04-23T15:21:41.723Z
---

# Class NamedRange

## Page Summary

- Named ranges are spreadsheet ranges with associated string aliases that can be created, accessed, and modified.
- Methods available for NamedRange include getting and setting the name and range, and removing the named range.
- Accessing or modifying NamedRange properties requires specific authorization scopes.

Create, access and modify named ranges in a spreadsheet. Named ranges are ranges that have associated string aliases. They can be viewed and edited via the Sheets UI under the **Data > Named ranges...** menu.

## Detailed documentation

### getName()

Gets the name of this named range.

#### Return

`String` — the name of this named range

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange()

Gets the range referenced by this named range.

#### Return

`Range` — the spreadsheet range that is associated with this named range

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Deletes this named range.

```
// The code below deletes all the named ranges in the spreadsheet.
const namedRanges = SpreadsheetApp.getActive().getNamedRanges();
for (let i = 0; i < namedRanges.length; i++) {
  namedRanges[i].remove();
}
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setName(name)

Sets/updates the name of the named range.

```
// The code below updates the name for the first named range.
const namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
if (namedRanges.length > 1) {
  namedRanges[0].setName('UpdatedNamedRange');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The new name of the named range. |

#### Return

`NamedRange` — the range whose name was set by the call

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRange(range)

Sets/updates the range for this named range.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The spreadsheet range to associate with this named range. |

#### Return

`NamedRange` — the named range for which the spreadsheet range was set

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
