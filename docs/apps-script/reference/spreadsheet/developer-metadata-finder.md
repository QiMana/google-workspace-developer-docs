---
source: https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder
root: apps-script
fetched_at: 2026-04-23T15:21:30.543Z
---

# Class DeveloperMetadataFinder

## Page Summary

- DeveloperMetadataFinder is used to search for developer metadata in a spreadsheet.
- You can create a DeveloperMetadataFinder using methods on Range, Sheet, or Spreadsheet objects.
- The `find()` method executes the search and returns matching metadata.
- You can refine your search using methods like `withId()`, `withKey()`, `withLocationType()`, `withValue()`, and `withVisibility()`.
- `onIntersectingLocations()` is an option specifically for range-scoped searches to consider intersecting locations with metadata.

Search for developer metadata in a spreadsheet. To create new developer metadata finder use `Range.createDeveloperMetadataFinder()`, `Sheet.createDeveloperMetadataFinder()`, or `Spreadsheet.createDeveloperMetadataFinder()`.

## Detailed documentation

### find()

Executes this search and returns the matching metadata.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### onIntersectingLocations()

Configures the search to consider intersecting locations that have metadata. This option is only valid for range-scoped searches.

#### Return

`DeveloperMetadataFinder` — The developer metadata finder, for chaining.

---

### withId(id)

Limits this search to consider only metadata that match the specified ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `Integer` | The ID to match when searching for metadata. |

#### Return

`DeveloperMetadataFinder` — The developer metadata finder, for chaining.

---

### withKey(key)

Limits this search to consider only metadata that match the specified key.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key to match when searching for metadata. |

#### Return

`DeveloperMetadataFinder` — The developer metadata finder, for chaining.

---

### withValue(value)

Limits this search to consider only metadata that match the specified value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The value to match when searching for metadata. |

#### Return

`DeveloperMetadataFinder` — The developer metadata finder, for chaining.
