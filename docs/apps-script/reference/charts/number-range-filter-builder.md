---
source: https://developers.google.com/apps-script/reference/charts/number-range-filter-builder
root: apps-script
fetched_at: 2026-04-23T15:19:18.588Z
---

# Class NumberRangeFilterBuilder

## Page Summary

- A NumberRangeFilterBuilder is used to create number range filter controls, which are sliders allowing users to select ranges of numeric values to filter data.
- The builder provides methods such as setMaxValue, setMinValue, setOrientation, setShowRangeValues, and setTicks to customize the number range filter.
- These methods allow you to set the maximum and minimum values, the slider's orientation, whether to display range values next to the slider, and the number of fixed positions on the slider.

A builder for number range filter controls.

A number range filter is a slider with two thumbs that lets the user select ranges of numeric values. Given a column of type number and matching options, this control filters out the rows that don't match the range that was selected.

For more details, see the Gviz [documentation.](http://developers.google.com/chart/interactive/docs/gallery/controls.html#numberrangefilter)

## Detailed documentation

### setMaxValue(maxValue)

Sets the maximum allowed value for the range lower extent. If undefined, the value is inferred from the contents of the DataTable managed by the control.

```
// Builds a number range filter and sets the maximum value to 100.
const numberRangeFilter = Charts.newNumberRangeFilter()
                              .setFilterColumnLabel('Col2')
                              .setMaxValue(100)
                              .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `maxValue` | `Integer` | The maximum value of the slider. |

#### Return

`NumberRangeFilterBuilder` — This builder, useful for chaining.

---

### setMinValue(minValue)

Sets the minimum allowed value for the range lower extent. If undefined, the value is inferred from the contents of the DataTable managed by the control.

```
// Builds a number range filter and sets the minimum value to 10.
const numberRangeFilter = Charts.newNumberRangeFilter()
                              .setFilterColumnLabel('Col2')
                              .setMinValue(10)
                              .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minValue` | `Integer` | The minimum value of the slider. |

#### Return

`NumberRangeFilterBuilder` — This builder, useful for chaining.

---

### setOrientation(orientation)

Sets the slider orientation.

```
// Builds a number range filter and sets it to have a horizontal orientation.
const numberRangeFilter = Charts.newNumberRangeFilter()
                              .setFilterColumnLabel('Col2')
                              .setOrientation(Charts.Orientation.HORIZONTAL)
                              .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `orientation` | `Orientation` | The slider orientation to set. |

#### Return

`NumberRangeFilterBuilder` — This builder, useful for chaining.

#### See also

- `Orientation`

---

### setShowRangeValues(showRangeValues)

Sets whether to have labels next to the slider displaying extents of the selected range.

```
// Builds a number range filter and enables showing of the number range values.
const numberRangeFilter = Charts.newNumberRangeFilter()
                              .setFilterColumnLabel('Col2')
                              .setShowRangeValues(true)
                              .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `showRangeValues` | `Boolean` | If `true`, enables showing of labels next to the slider. |

#### Return

`NumberRangeFilterBuilder` — This builder, useful for chaining.

---

### setTicks(ticks)

Sets the number of ticks (fixed positions in a range bar) a number range filter slider thumbs can fall in.

```
// Builds a number range filter and sets the number of ticks for the range
// to 10.
const numberRangeFilter = Charts.newNumberRangeFilter()
                              .setFilterColumnLabel('Col2')
                              .setTicks(10)
                              .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ticks` | `Integer` | The number of ticks on the slider. |

#### Return

`NumberRangeFilterBuilder` — This builder, useful for chaining.
