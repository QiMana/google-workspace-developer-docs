---
source: https://developers.google.com/apps-script/reference/charts/match-type
root: apps-script
fetched_at: 2026-04-23T15:19:18.479Z
---

# Enum MatchType

## Page Summary

- MatchType is an enumeration used to define how a string value should be matched.
- Matching a string using MatchType is a boolean operation returning `true` based on EXACT, PREFIX, or ANY match types.
- MatchType can be used by a string filter control to filter data table rows based on a specified column and filter value.
- You can access MatchType enum values by calling their parent class, name, and property, like `Charts.MatchType.EXACT`.

An enumeration of how a string value should be matched. Matching a string is a boolean operation. Given a string, a match term (string), and a match type, the operation outputs `true` in the following cases:

1. If the match type equals EXACT and the match term equals the string.
2. If the match type equals PREFIX and the match term is a prefix of the string.
3. If the match type equals ANY and the match term is a substring of the string.

This enumeration can be used in by a string filter control to decide which rows to filter out of the data table. Given a column to filter on, leave only the rows that match the value entered in the filter input box, using one of the above matching types.

To call an enum, you call its parent class, name, and property. For example, ` Charts.MatchType.EXACT`.

## Detailed documentation

### getName()

Returns the name of the match type to be used in the options JSON.

#### Return

`String` — The name of the type.
