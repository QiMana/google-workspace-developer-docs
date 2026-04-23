---
source: https://developers.google.com/apps-script/reference/spreadsheet/text-finder
root: apps-script
fetched_at: 2026-04-23T15:22:03.769Z
---

# Class TextFinder

## Page Summary

- TextFinder is used to find or replace text within a range, sheet, or spreadsheet with customizable search options.
- Key methods include finding all matches, navigating through matches, getting the current match, and replacing text.
- Search behavior can be configured to ignore diacritics, match case, match entire cells, or search within formulas.
- TextFinder allows starting a search from a specific range and supports using regular expressions.

Find or replace text within a range, sheet or spreadsheet. Can also specify search options.

## Detailed documentation

### findAll()

Returns all cells matching the search criteria.

#### Return

`Range[]` — All the matching cells.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### findNext()

Returns the next cell matching the search criteria.

#### Return

`Range` — The next matching cell, or `null` if there are no previous matches.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### findPrevious()

Returns the previous cell matching the search criteria.

#### Return

`Range` — The previous matching cell, or `null` if there are no previous matches.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCurrentMatch()

Returns the current cell matching the search criteria.

#### Return

`Range` — The current matching cell, or `null` if there are no further matches.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### ignoreDiacritics(ignoreDiacritics)

If `true`, configures the search to ignore diacritics while matching; otherwise the search matches diacritics. A diacritic is a sign, such as an accent or cedilla, which when written above or below a letter indicates a difference in pronunciation from the same letter when unmarked or differently marked.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ignoreDiacritics` | `Boolean` | Whether the search considers diacritics. |

#### Return

`TextFinder` — This text finder, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### matchCase(matchCase)

If `true`, configures the search to match the search text's case exactly, otherwise the search defaults to case-insensitive matching.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `matchCase` | `Boolean` | Whether the matching is case-sensitive. |

#### Return

`TextFinder` — This text finder, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### matchEntireCell(matchEntireCell)

If `true`, configures the search to match the entire contents of a cell; otherwise, the search defaults to partial matching.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `matchEntireCell` | `Boolean` | Whether the entire cell is matched. |

#### Return

`TextFinder` — This text finder, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### matchFormulaText(matchFormulaText)

If `true`, configures the search to return matches that appear within formula text; otherwise cells with formulas are considered based on their displayed value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `matchFormulaText` | `Boolean` | Whether the search examines formula text. |

#### Return

`TextFinder` — This text finder, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### replaceAllWith(replaceText)

Replaces all matches with the specified text. Returns the number of occurrences replaced, which may be different from the number of matched cells.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `replaceText` | `String` | The text that replaces the text in the matched cells. |

#### Return

`Integer` — The number of occurrences replaced.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### replaceWith(replaceText)

Replaces the search text in the currently matched cell with the specified text and returns the number of occurrences replaced.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `replaceText` | `String` | The text that replaces the content in the currently matched cell. |

#### Return

`Integer` — The number of occurrences replaced.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### startFrom(startRange)

Configures the search to start searching immediately after the specified cell range.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startRange` | `Range` | The cell range after which the search should start. |

#### Return

`TextFinder` — This text finder, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### useRegularExpression(useRegEx)

If `true`, configures the search to interpret the search string as a regular expression; otherwise the search interprets the search string as normal text. For more details on how to use regular expressions, refer to the [Find and replace support page.](https://support.google.com/docs/answer/62754?p=spreadsheets_find_replace&visit_id=1-636603693162634183-3185740572&rd=1)

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `useRegEx` | `Boolean` | Whether to interpret the search string as a regular expression. |

#### Return

`TextFinder` — This text finder, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
