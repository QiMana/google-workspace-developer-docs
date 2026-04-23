---
source: https://developers.google.com/apps-script/reference/charts/string-filter-builder
root: apps-script
fetched_at: 2026-04-23T15:19:19.889Z
---

# Class StringFilterBuilder

## Page Summary

- StringFilterBuilder is a builder for string filter controls, which are simple text input fields used to filter data based on string matching in a specified column.
- The `setCaseSensitive(caseSensitive)` method allows you to determine if the string matching should be case sensitive.
- The `setMatchType(matchType)` method lets you set whether the control should match exact values, prefixes, or any substring.
- The `setRealtimeTrigger(realtimeTrigger)` method controls whether the filtering occurs as each key is pressed or only when the input field changes.

A builder for string filter controls.

A string filter is a simple text input field that lets the user filter data via string matching. Given a column of type string and matching options, this control filters out the rows that don't match the term that's in the input field.

For more details, see the Gviz [documentation](https://developers.google.com/chart/interactive/docs/gallery/controls#stringfilter).

## Detailed documentation

### setCaseSensitive(caseSensitive)

Sets whether matching should be case sensitive or not.

```
// Builds a case insensitive string filter to filter column "Col1".
const stringFilter = Charts.newStringFilter()
                         .setFilterColumnLabel('Col1')
                         .setCaseSensitive(false)
                         .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `caseSensitive` | `Boolean` | If `true`, enables string matching case sensitivity. |

#### Return

`StringFilterBuilder` — This builder, useful for chaining.

---

### setMatchType(matchType)

Sets whether the control should match exact values only (`MatchType.EXACT`), prefixes starting from the beginning of the value (`MatchType.PREFIX`), or any substring (`MatchType.ANY`).

```
// Builds a string filter to filter column "Col1" matching the prefix.
const stringFilter = Charts.newStringFilter()
                         .setFilterColumnLabel('Col1')
                         .setMatchType(Charts.MatchType.PREFIX)
                         .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `matchType` | `MatchType` | The string matching type. |

#### Return

`StringFilterBuilder` — This builder, useful for chaining.

#### See also

- `MatchType`

---

### setRealtimeTrigger(realtimeTrigger)

Sets whether the control should match any time a key is pressed or only when the input field 'changes' (loss of focus or pressing the Enter key).

```
// Builds a string filter to filter column "Col1" that checks the match any time
// a key is pressed.
const stringFilter = Charts.newStringFilter()
                         .setFilterColumnLabel('Col1')
                         .setRealtimeTrigger(true)
                         .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `realtimeTrigger` | `Boolean` | If `true`, sets events to be triggered at real time (when a key is pressed). |

#### Return

`StringFilterBuilder` — This builder, useful for chaining.
