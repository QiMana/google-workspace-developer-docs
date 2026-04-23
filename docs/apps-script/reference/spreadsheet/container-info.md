---
source: https://developers.google.com/apps-script/reference/spreadsheet/container-info
root: apps-script
fetched_at: 2026-04-23T15:21:25.355Z
---

# Class ContainerInfo

## Page Summary

- ContainerInfo is used to access and update a chart's position within a sheet.
- The position can be modified using the `EmbeddedChart.modify()` function.
- Methods are available to get the anchor column and row, and the X and Y offsets in pixels.

Access the chart's position within a sheet. Can be updated using the `EmbeddedChart.modify()` function.

```
const sheet = SpreadsheetApp.getActiveSheet();
const chart = sheet.getCharts()[0];
const modifiedChart = chart.modify().setPosition(5, 5, 0, 0).build();
sheet.updateChart(modifiedChart);
```

## Detailed documentation

### getAnchorColumn()

The chart's left side is anchored in this column.

#### Return

`Integer` — 1-indexed column (that is, column C is 3).

---

### getAnchorRow()

The chart's top side is anchored in this row.

#### Return

`Integer` — 1-indexed row (that is, row 5 returns 5).

---

### getOffsetX()

The chart's upper left hand corner is offset from the anchor column by this many pixels.

#### Return

`Integer` — The horizontal offset in pixels for the upper left hand corner of the chart.

---

### getOffsetY()

The chart's upper left hand corner is offset from the anchor row by this many pixels.

#### Return

`Integer` — The vertical offset in pixels for the upper left hand corner of the chart.
