---
source: https://developers.google.com/apps-script/reference/charts/chart-options.html
root: apps-script
fetched_at: 2026-04-23T15:19:16.544Z
---

# Class ChartOptions

## Page Summary

- ChartOptions exposes configurable options for a Chart, such as height and color.
- Chart options are immutable.
- The `get(option)` method returns a configured option, or `null` if not set.
- The `getOrDefault(option)` method returns a configured option, or its default value if available.

Exposes options currently configured for a , such as height, color, etc.

Please see the [visualization reference](https://developers.google.com/chart/interactive/docs/customizing_charts) documentation for information on what options are available. Specific options for each chart can be found by clicking on the specific chart in the [chart gallery](https://developers.google.com/chart/interactive/docs/gallery).

These options are immutable.

## Detailed documentation

### get(option)

Returns a configured option for this chart.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `option` | `String` | The string representing the desired option. |

#### Return

`Object` — The value currently set for the specified option or `null` if the option was not set.

---

### getOrDefault(option)

Returns a configured option for this chart. If the chart option is not set, returns the default value of this option if available, or returns `null` if the default value is not available.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `option` | `String` | The string representing the desired option. |

#### Return

`Object` — The value currently set for the specified option. If the option was not set and the default value is available, returns the default value.
