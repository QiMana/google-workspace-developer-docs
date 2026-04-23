---
source: https://developers.google.com/apps-script/reference/spreadsheet/group
root: apps-script
fetched_at: 2026-04-23T15:21:41.597Z
---

# Class Group

## Page Summary

- Spreadsheet groups associate contiguous rows or columns that can be expanded or collapsed to hide or show content.
- Each group has a control toggle to expand or collapse the group as a whole.
- The depth of a group indicates its nested position within larger groups.
- The collapsed state determines if a group remains collapsed or expanded after a parent group is expanded.
- Groups can be manipulated using methods like collapse(), expand(), and remove().

Access and modify spreadsheet groups. Groups are an association between an interval of contiguous rows or columns that can be expanded or collapsed as a unit to hide/show the rows or columns. Each group has a *control toggle* on the row or column directly before or after the group (depending on settings) that can expand or collapse the group as a whole.

The *depth* of a group refers to the nested position of the group and how many larger groups contain the group. The *collapsed state* of a group refers to whether the group should remain collapsed or expanded after a parent group has been expanded. Additionally, at the time that a group is collapsed or expanded, the rows or columns within the group are hidden or set visible, though individual rows or columns can be hidden or set visible irrespective of the collapsed state.

## Detailed documentation

### collapse()

Collapses this group.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getRange('2:3');
range.shiftRowGroupDepth(1);
const group = sheet.getRowGroup(2, 1);

// Collapses this group.
group.collapse();
```

#### Return

`Group` — This group, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### expand()

Expands this group.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getRange('2:3');
range.shiftRowGroupDepth(1);
const group = sheet.getRowGroup(2, 1);

// Expands this group.
group.expand();
```

#### Return

`Group` — This group, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getControlIndex()

Returns the control toggle index of this group. This is the index just before the range when the control toggle is shown before the group, or the index just after the range otherwise.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
sheet.setRowGroupControlAfter(true);
const range = sheet.getRange('2:3');
range.shiftRowGroupDepth(1);
const group = sheet.getRowGroup(2, 1);

// Returns 4
const controlIndex = group.getControlIndex();
```

#### Return

`Integer` — The control toggle index of this group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDepth()

Returns the depth of this group.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getRange('2:3');
range.shiftRowGroupDepth(1);
const group = sheet.getRowGroup(2, 1);

// Returns 1 if the group is at depth 1.
const depth = group.getDepth();
```

#### Return

`Integer` — The depth of this group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange()

Returns the range over which this group exists.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
let range = sheet.getRange('2:3');
range.shiftRowGroupDepth(1);
const group = sheet.getRowGroup(1, 1);

// Returns the range 2:3 if the group is over rows 2:3
range = group.getRange();
```

#### Return

`Range` — The range over which the group exists.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isCollapsed()

Returns `true` if this group is collapsed.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getRange('2:3');
range.shiftRowGroupDepth(1);
const group = sheet.getRowGroup(2, 1);

// Returns true if the group is collapsed.
const isCollapsed = group.isCollapsed();
```

#### Return

`Boolean` — `true` If this group is collapsed; returns `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes this group from the sheet, reducing the group depth of the `range` by one. This may modify other groups. After calling this, the group object becomes invalid to use.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
let range = sheet.getRange('2:3');
range.shiftRowGroupDepth(1);
const group = sheet.getRowGroup(2, 1);

// Removes this group
range = group.remove();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `Range.shiftRowGroupDepth(delta)`
- `Range.shiftColumnGroupDepth(delta)`
