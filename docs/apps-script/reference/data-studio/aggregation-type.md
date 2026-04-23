---
source: https://developers.google.com/apps-script/reference/data-studio/aggregation-type
root: apps-script
fetched_at: 2026-04-23T15:19:27.554Z
---

# Enum AggregationType

## Page Summary

- AggregationType is an enum in Apps Script that defines aggregation types for a Field.
- You access enum values through its parent class, name, and property, like `DataStudioApp.AggregationType.AVG`.
- Available aggregation types include AVG, COUNT, COUNT\_DISTINCT, MAX, MIN, SUM, and AUTO.
- The `AUTO` property is used for calculated fields referencing an aggregated field.
- The `NO_AGGREGATION` property is deprecated and should be replaced with `AUTO`.

An enum that defines the aggregation types that can be set for a `Field`.

To call an enum, you call its parent class, name, and property. For example, ` DataStudioApp.AggregationType.AVG`.
