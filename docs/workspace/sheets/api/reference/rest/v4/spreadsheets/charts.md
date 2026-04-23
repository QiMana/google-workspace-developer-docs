---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/charts
root: workspace
fetched_at: 2026-04-23T15:31:32.149Z
---

# Charts

## EmbeddedChart

A chart embedded in a sheet.

JSON representation

```
{
  "chartId": integer,
  "spec": {
    object (ChartSpec)
  },
  "position": {
    object (EmbeddedObjectPosition)
  },
  "border": {
    object (EmbeddedObjectBorder)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>chartId</code></td><td><p><code>integer</code></p><p>The ID of the chart.</p></td></tr><tr><td><code>spec</code></td><td><p><code>object (<code>ChartSpec</code>)</code></p><p>The specification of the chart.</p></td></tr><tr><td><code>position</code></td><td><p><code>object (<code>EmbeddedObjectPosition</code>)</code></p><p>The position of the chart.</p></td></tr><tr><td><code>border</code></td><td><p><code>object (<code>EmbeddedObjectBorder</code>)</code></p><p>The border of the chart.</p></td></tr></tbody></table>

## ChartSpec

The specifications of a chart.

JSON representation

```
{
  "title": string,
  "altText": string,
  "titleTextFormat": {
    object (TextFormat)
  },
  "titleTextPosition": {
    object (TextPosition)
  },
  "subtitle": string,
  "subtitleTextFormat": {
    object (TextFormat)
  },
  "subtitleTextPosition": {
    object (TextPosition)
  },
  "fontName": string,
  "maximized": boolean,
  "backgroundColor": {
    object (Color)
  },
  "backgroundColorStyle": {
    object (ColorStyle)
  },
  "dataSourceChartProperties": {
    object (DataSourceChartProperties)
  },
  "filterSpecs": [
    {
      object (FilterSpec)
    }
  ],
  "sortSpecs": [
    {
      object (SortSpec)
    }
  ],
  "hiddenDimensionStrategy": enum (ChartHiddenDimensionStrategy),

  "basicChart": {
    object (BasicChartSpec)
  },
  "pieChart": {
    object (PieChartSpec)
  },
  "bubbleChart": {
    object (BubbleChartSpec)
  },
  "candlestickChart": {
    object (CandlestickChartSpec)
  },
  "orgChart": {
    object (OrgChartSpec)
  },
  "histogramChart": {
    object (HistogramChartSpec)
  },
  "waterfallChart": {
    object (WaterfallChartSpec)
  },
  "treemapChart": {
    object (TreemapChartSpec)
  },
  "scorecardChart": {
    object (ScorecardChartSpec)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the chart.</p></td></tr><tr><td><code>altText</code></td><td><p><code>string</code></p><p>The alternative text that describes the chart. This is often used for accessibility.</p></td></tr><tr><td><code>titleTextFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The title text format. Strikethrough, underline, and link are not supported.</p></td></tr><tr><td><code>titleTextPosition</code></td><td><p><code>object (<code>TextPosition</code>)</code></p><p>The title text position. This field is optional.</p></td></tr><tr><td><code>subtitle</code></td><td><p><code>string</code></p><p>The subtitle of the chart.</p></td></tr><tr><td><code>subtitleTextFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The subtitle text format. Strikethrough, underline, and link are not supported.</p></td></tr><tr><td><code>subtitleTextPosition</code></td><td><p><code>object (<code>TextPosition</code>)</code></p><p>The subtitle text position. This field is optional.</p></td></tr><tr><td><code>fontName</code></td><td><p><code>string</code></p><p>The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name.</p></td></tr><tr><td><code>maximized</code></td><td><p><code>boolean</code></p><p>True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.)</p></td></tr><tr><td><code>backgroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color of the entire chart. Not applicable to Org charts. Deprecated: Use <code>backgroundColorStyle</code>.</p></td></tr><tr><td><code>backgroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color of the entire chart. Not applicable to Org charts. If <code>backgroundColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>dataSourceChartProperties</code></td><td><p><code>object (<code>DataSourceChartProperties</code>)</code></p><p>If present, the field contains data source chart specific properties.</p></td></tr><tr><td><code>filterSpecs[]</code></td><td><p><code>object (<code>FilterSpec</code>)</code></p><p>The filters applied to the source data of the chart. Only supported for data source charts.</p></td></tr><tr><td><code>sortSpecs[]</code></td><td><p><code>object (<code>SortSpec</code>)</code></p><p>The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts.</p></td></tr><tr><td><code>hiddenDimensionStrategy</code></td><td><p><code>enum (<code>ChartHiddenDimensionStrategy</code>)</code></p><p>Determines how the charts will use hidden rows or columns.</p></td></tr><tr><td colspan="2">Union field <code>chart</code>. The specific chart specification, exactly one value must be set. <code>chart</code> can be only one of the following:</td></tr><tr><td><code>basicChart</code></td><td><p><code>object (<code>BasicChartSpec</code>)</code></p><p>A basic chart specification, can be one of many kinds of charts. See <code>BasicChartType</code> for the list of all charts this supports.</p></td></tr><tr><td><code>pieChart</code></td><td><p><code>object (<code>PieChartSpec</code>)</code></p><p>A pie chart specification.</p></td></tr><tr><td><code>bubbleChart</code></td><td><p><code>object (<code>BubbleChartSpec</code>)</code></p><p>A bubble chart specification.</p></td></tr><tr><td><code>candlestickChart</code></td><td><p><code>object (<code>CandlestickChartSpec</code>)</code></p><p>A candlestick chart specification.</p></td></tr><tr><td><code>orgChart</code></td><td><p><code>object (<code>OrgChartSpec</code>)</code></p><p>An org chart specification.</p></td></tr><tr><td><code>histogramChart</code></td><td><p><code>object (<code>HistogramChartSpec</code>)</code></p><p>A histogram chart specification.</p></td></tr><tr><td><code>waterfallChart</code></td><td><p><code>object (<code>WaterfallChartSpec</code>)</code></p><p>A waterfall chart specification.</p></td></tr><tr><td><code>treemapChart</code></td><td><p><code>object (<code>TreemapChartSpec</code>)</code></p><p>A treemap chart specification.</p></td></tr><tr><td><code>scorecardChart</code></td><td><p><code>object (<code>ScorecardChartSpec</code>)</code></p><p>A scorecard chart specification.</p></td></tr></tbody></table>

## TextPosition

Position settings for text.

JSON representation

```
{
  "horizontalAlignment": enum (HorizontalAlign)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>horizontalAlignment</code></td><td><p><code>enum (<code>HorizontalAlign</code>)</code></p><p>Horizontal alignment setting for the piece of text.</p></td></tr></tbody></table>

## DataSourceChartProperties

Properties of a data source chart.

JSON representation

```
{
  "dataSourceId": string,
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>ID of the data source that the chart is associated with.</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>Output only. The data execution status.</p></td></tr></tbody></table>

## BasicChartSpec

The specification for a basic chart. See `BasicChartType` for the list of charts this supports.

JSON representation

```
{
  "chartType": enum (BasicChartType),
  "legendPosition": enum (BasicChartLegendPosition),
  "axis": [
    {
      object (BasicChartAxis)
    }
  ],
  "domains": [
    {
      object (BasicChartDomain)
    }
  ],
  "series": [
    {
      object (BasicChartSeries)
    }
  ],
  "headerCount": integer,
  "threeDimensional": boolean,
  "interpolateNulls": boolean,
  "stackedType": enum (BasicChartStackedType),
  "lineSmoothing": boolean,
  "compareMode": enum (BasicChartCompareMode),
  "totalDataLabel": {
    object (DataLabel)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>chartType</code></td><td><p><code>enum (<code>BasicChartType</code>)</code></p><p>The type of the chart.</p></td></tr><tr><td><code>legendPosition</code></td><td><p><code>enum (<code>BasicChartLegendPosition</code>)</code></p><p>The position of the chart legend.</p></td></tr><tr><td><code>axis[]</code></td><td><p><code>object (<code>BasicChartAxis</code>)</code></p><p>The axis on the chart.</p></td></tr><tr><td><code>domains[]</code></td><td><p><code>object (<code>BasicChartDomain</code>)</code></p><p>The domain of data this is charting. Only a single domain is supported.</p></td></tr><tr><td><code>series[]</code></td><td><p><code>object (<code>BasicChartSeries</code>)</code></p><p>The data this chart is visualizing.</p></td></tr><tr><td><code>headerCount</code></td><td><p><code>integer</code></p><p>The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data.</p><p>(Note that <code>BasicChartAxis.title</code> may override the axis title inferred from the header values.)</p></td></tr><tr><td><code>threeDimensional</code></td><td><p><code>boolean</code></p><p>True to make the chart 3D. Applies to Bar and Column charts.</p></td></tr><tr><td><code>interpolateNulls</code></td><td><p><code>boolean</code></p><p>If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts.</p></td></tr><tr><td><code>stackedType</code></td><td><p><code>enum (<code>BasicChartStackedType</code>)</code></p><p>The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts.</p></td></tr><tr><td><code>lineSmoothing</code></td><td><p><code>boolean</code></p><p>Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts.</p></td></tr><tr><td><code>compareMode</code></td><td><p><code>enum (<code>BasicChartCompareMode</code>)</code></p><p>The behavior of tooltips and data highlighting when hovering on data and chart area.</p></td></tr><tr><td><code>totalDataLabel</code></td><td><p><code>object (<code>DataLabel</code>)</code></p><p>Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. These data labels can only be set when <code>chartType</code> is one of <code>AREA</code>, <code>BAR</code>, <code>COLUMN</code>, <code>COMBO</code> or <code>STEPPED_AREA</code> and <code>stackedType</code> is either <code>STACKED</code> or <code>PERCENT_STACKED</code>. In addition, for <code>COMBO</code>, this will only be supported if there is only one type of stackable series <code>type</code> or one type has more series than the others and each of the other types have no more than one series. For example, if a chart has two stacked bar series and one area series, the total data labels will be supported. If it has three bar series and two area series, total data labels are not allowed. Neither <code>CUSTOM</code> nor <code>placement</code> can be set on the <code>totalDataLabel</code>.</p></td></tr></tbody></table>

## BasicChartType

How the chart should be visualized.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC_CHART_TYPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>BAR</code></td><td>A <a href="https://developers.google.com/chart/interactive/docs/gallery/barchart">bar chart</a>.</td></tr><tr><td><code>LINE</code></td><td>A <a href="https://developers.google.com/chart/interactive/docs/gallery/linechart">line chart</a>.</td></tr><tr><td><code>AREA</code></td><td>An <a href="https://developers.google.com/chart/interactive/docs/gallery/areachart">area chart</a>.</td></tr><tr><td><code>COLUMN</code></td><td>A <a href="https://developers.google.com/chart/interactive/docs/gallery/columnchart">column chart</a>.</td></tr><tr><td><code>SCATTER</code></td><td>A <a href="https://developers.google.com/chart/interactive/docs/gallery/scatterchart">scatter chart</a>.</td></tr><tr><td><code>COMBO</code></td><td>A <a href="https://developers.google.com/chart/interactive/docs/gallery/combochart">combo chart</a>.</td></tr><tr><td><code>STEPPED_AREA</code></td><td>A <a href="https://developers.google.com/chart/interactive/docs/gallery/steppedareachart">stepped area chart</a>.</td></tr></tbody></table>

## BasicChartLegendPosition

Where the legend of the chart should be positioned.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC_CHART_LEGEND_POSITION_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>BOTTOM_LEGEND</code></td><td>The legend is rendered on the bottom of the chart.</td></tr><tr><td><code>LEFT_LEGEND</code></td><td>The legend is rendered on the left of the chart.</td></tr><tr><td><code>RIGHT_LEGEND</code></td><td>The legend is rendered on the right of the chart.</td></tr><tr><td><code>TOP_LEGEND</code></td><td>The legend is rendered on the top of the chart.</td></tr><tr><td><code>NO_LEGEND</code></td><td>No legend is rendered.</td></tr></tbody></table>

## BasicChartAxis

An axis of the chart. A chart may not have more than one axis per `axis position`.

JSON representation

```
{
  "position": enum (BasicChartAxisPosition),
  "title": string,
  "format": {
    object (TextFormat)
  },
  "titleTextPosition": {
    object (TextPosition)
  },
  "viewWindowOptions": {
    object (ChartAxisViewWindowOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>position</code></td><td><p><code>enum (<code>BasicChartAxisPosition</code>)</code></p><p>The position of this axis.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of this axis. If set, this overrides any title inferred from headers of the data.</p></td></tr><tr><td><code>format</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The format of the title. Only valid if the axis is not associated with the domain. The link field is not supported.</p></td></tr><tr><td><code>titleTextPosition</code></td><td><p><code>object (<code>TextPosition</code>)</code></p><p>The axis title text position.</p></td></tr><tr><td><code>viewWindowOptions</code></td><td><p><code>object (<code>ChartAxisViewWindowOptions</code>)</code></p><p>The view window options for this axis.</p></td></tr></tbody></table>

## BasicChartAxisPosition

The position of a chart axis.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC_CHART_AXIS_POSITION_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>BOTTOM_AXIS</code></td><td>The axis rendered at the bottom of a chart. For most charts, this is the standard major axis. For bar charts, this is a minor axis.</td></tr><tr><td><code>LEFT_AXIS</code></td><td>The axis rendered at the left of a chart. For most charts, this is a minor axis. For bar charts, this is the standard major axis.</td></tr><tr><td><code>RIGHT_AXIS</code></td><td>The axis rendered at the right of a chart. For most charts, this is a minor axis. For bar charts, this is an unusual major axis.</td></tr></tbody></table>

## ChartAxisViewWindowOptions

The options that define a "view window" for a chart (such as the visible values in an axis).

JSON representation

```
{
  "viewWindowMin": number,
  "viewWindowMax": number,
  "viewWindowMode": enum (ViewWindowMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>viewWindowMin</code></td><td><p><code>number</code></p><p>The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data.</p></td></tr><tr><td><code>viewWindowMax</code></td><td><p><code>number</code></p><p>The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data.</p></td></tr><tr><td><code>viewWindowMode</code></td><td><p><code>enum (<code>ViewWindowMode</code>)</code></p><p>The view window's mode.</p></td></tr></tbody></table>

## ViewWindowMode

The view window's mode. It defines how to treat the min and max of the view window.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEFAULT_VIEW_WINDOW_MODE</code></td><td>The default view window mode used in the Sheets editor for this chart type. In most cases, if set, the default mode is equivalent to <code>PRETTY</code>.</td></tr><tr><td><code>VIEW_WINDOW_MODE_UNSUPPORTED</code></td><td>Do not use. Represents that the currently set mode is not supported by the API.</td></tr><tr><td><code>EXPLICIT</code></td><td>Follows the min and max exactly if specified. If a value is unspecified, it will fall back to the <code>PRETTY</code> value.</td></tr><tr><td><code>PRETTY</code></td><td>Chooses a min and max that make the chart look good. Both min and max are ignored in this mode.</td></tr></tbody></table>

## BasicChartDomain

The domain of a chart. For example, if charting stock prices over time, this would be the date.

JSON representation

```
{
  "domain": {
    object (ChartData)
  },
  "reversed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domain</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data of the domain. For example, if charting stock prices over time, this is the data representing the dates.</p></td></tr><tr><td><code>reversed</code></td><td><p><code>boolean</code></p><p>True to reverse the order of the domain values (horizontal axis).</p></td></tr></tbody></table>

## ChartData

The data included in a domain or series.

JSON representation

```
{
  "groupRule": {
    object (ChartGroupRule)
  },
  "aggregateType": enum (ChartAggregateType),

  "sourceRange": {
    object (ChartSourceRange)
  },
  "columnReference": {
    object (DataSourceColumnReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>groupRule</code></td><td><p><code>object (<code>ChartGroupRule</code>)</code></p><p>The rule to group the data by if the ChartData backs the domain of a data source chart. Only supported for data source charts.</p></td></tr><tr><td><code>aggregateType</code></td><td><p><code>enum (<code>ChartAggregateType</code>)</code></p><p>The aggregation type for the series of a data source chart. Only supported for data source charts.</p></td></tr><tr><td colspan="2">Union field <code>type</code>. The type of data included, exactly one value must be set. <code>type</code> can be only one of the following:</td></tr><tr><td><code>sourceRange</code></td><td><p><code>object (<code>ChartSourceRange</code>)</code></p><p>The source ranges of the data.</p></td></tr><tr><td><code>columnReference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>The reference to the data source column that the data reads from.</p></td></tr></tbody></table>

## ChartSourceRange

Source ranges for a chart.

JSON representation

```
{
  "sources": [
    {
      object (GridRange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sources[]</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous across the domain and series.</p><p>For example, these are valid configurations:</p><div><pre><code>domain sources: A1:A5
series1 sources: B1:B5
series2 sources: D6:D10

domain sources: A1:A5, C10:C12
series1 sources: B1:B5, D10:D12
series2 sources: C1:C5, E10:E12</code></pre></div></td></tr></tbody></table>

## ChartGroupRule

An optional setting on the `ChartData` of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value.

For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the `aggregateType`.

JSON representation

```
{

  "dateTimeRule": {
    object (ChartDateTimeRule)
  },
  "histogramRule": {
    object (ChartHistogramRule)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>rule</code>. The rule to apply to the <code>ChartData</code>. <code>rule</code> can be only one of the following:</td></tr><tr><td><code>dateTimeRule</code></td><td><p><code>object (<code>ChartDateTimeRule</code>)</code></p><p>A <code>ChartDateTimeRule</code>.</p></td></tr><tr><td><code>histogramRule</code></td><td><p><code>object (<code>ChartHistogramRule</code>)</code></p><p>A <code>ChartHistogramRule</code></p></td></tr></tbody></table>

## ChartDateTimeRule

Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.

JSON representation

```
{
  "type": enum (ChartDateTimeRuleType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>ChartDateTimeRuleType</code>)</code></p><p>The type of date-time grouping to apply.</p></td></tr></tbody></table>

## ChartDateTimeRuleType

The available types of date-time grouping rules.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED</code></td><td>The default type, do not use.</td></tr><tr><td><code>SECOND</code></td><td>Group dates by second, from 0 to 59.</td></tr><tr><td><code>MINUTE</code></td><td>Group dates by minute, from 0 to 59.</td></tr><tr><td><code>HOUR</code></td><td>Group dates by hour using a 24-hour system, from 0 to 23.</td></tr><tr><td><code>HOUR_MINUTE</code></td><td>Group dates by hour and minute using a 24-hour system, for example 19:45.</td></tr><tr><td><code>HOUR_MINUTE_AMPM</code></td><td>Group dates by hour and minute using a 12-hour system, for example 7:45 PM. The AM/PM designation is translated based on the spreadsheet locale.</td></tr><tr><td><code>DAY_OF_WEEK</code></td><td>Group dates by day of week, for example Sunday. The days of the week will be translated based on the spreadsheet locale.</td></tr><tr><td><code>DAY_OF_YEAR</code></td><td>Group dates by day of year, from 1 to 366. Note that dates after Feb. 29 fall in different buckets in leap years than in non-leap years.</td></tr><tr><td><code>DAY_OF_MONTH</code></td><td>Group dates by day of month, from 1 to 31.</td></tr><tr><td><code>DAY_MONTH</code></td><td>Group dates by day and month, for example 22-Nov. The month is translated based on the spreadsheet locale.</td></tr><tr><td><code>MONTH</code></td><td>Group dates by month, for example Nov. The month is translated based on the spreadsheet locale.</td></tr><tr><td><code>QUARTER</code></td><td>Group dates by quarter, for example Q1 (which represents Jan-Mar).</td></tr><tr><td><code>YEAR</code></td><td>Group dates by year, for example 2008.</td></tr><tr><td><code>YEAR_MONTH</code></td><td>Group dates by year and month, for example 2008-Nov. The month is translated based on the spreadsheet locale.</td></tr><tr><td><code>YEAR_QUARTER</code></td><td>Group dates by year and quarter, for example 2008 Q4.</td></tr><tr><td><code>YEAR_MONTH_DAY</code></td><td>Group dates by year, month, and day, for example 2008-11-22.</td></tr></tbody></table>

## ChartHistogramRule

Allows you to organize numeric values in a source data column into buckets of constant size.

JSON representation

```
{
  "minValue": number,
  "maxValue": number,
  "intervalSize": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minValue</code></td><td><p><code>number</code></p><p>The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value.</p></td></tr><tr><td><code>maxValue</code></td><td><p><code>number</code></p><p>The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value.</p></td></tr><tr><td><code>intervalSize</code></td><td><p><code>number</code></p><p>The size of the buckets that are created. Must be positive.</p></td></tr></tbody></table>

## ChartAggregateType

The type of aggregation for chart series.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHART_AGGREGATE_TYPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>AVERAGE</code></td><td>Average aggregate function.</td></tr><tr><td><code>COUNT</code></td><td>Count aggregate function.</td></tr><tr><td><code>MAX</code></td><td>Maximum aggregate function.</td></tr><tr><td><code>MEDIAN</code></td><td>Median aggregate function.</td></tr><tr><td><code>MIN</code></td><td>Minimum aggregate function.</td></tr><tr><td><code>SUM</code></td><td>Sum aggregate function.</td></tr></tbody></table>

## BasicChartSeries

A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".

JSON representation

```
{
  "series": {
    object (ChartData)
  },
  "targetAxis": enum (BasicChartAxisPosition),
  "type": enum (BasicChartType),
  "lineStyle": {
    object (LineStyle)
  },
  "dataLabel": {
    object (DataLabel)
  },
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  },
  "pointStyle": {
    object (PointStyle)
  },
  "styleOverrides": [
    {
      object (BasicSeriesDataPointStyleOverride)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>series</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data being visualized in this chart series.</p></td></tr><tr><td><code>targetAxis</code></td><td><p><code>enum (<code>BasicChartAxisPosition</code>)</code></p><p>The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the chart's <code>type</code>.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>BasicChartType</code>)</code></p><p>The type of this series. Valid only if the <code>chartType</code> is <code>COMBO</code>. Different types will change the way the series is visualized. Only <code>LINE</code>, <code>AREA</code>, and <code>COLUMN</code> are supported.</p></td></tr><tr><td><code>lineStyle</code></td><td><p><code>object (<code>LineStyle</code>)</code></p><p>The line style of this series. Valid only if the <code>chartType</code> is <code>AREA</code>, <code>LINE</code>, or <code>SCATTER</code>. <code>COMBO</code> charts are also supported if the <code>series chart type</code> is <code>AREA</code> or <code>LINE</code>.</p></td></tr><tr><td><code>dataLabel</code></td><td><p><code>object (<code>DataLabel</code>)</code></p><p>Information about the data labels for this series.</p></td></tr><tr><td><code>color
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. Deprecated: Use <code>colorStyle</code>.</p></td></tr><tr><td><code>colorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. If <code>color</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>pointStyle</code></td><td><p><code>object (<code>PointStyle</code>)</code></p><p>The style for points associated with this series. Valid only if the <code>chartType</code> is <code>AREA</code>, <code>LINE</code>, or <code>SCATTER</code>. <code>COMBO</code> charts are also supported if the <code>series chart type</code> is <code>AREA</code>, <code>LINE</code>, or <code>SCATTER</code>. If empty, a default point style is used.</p></td></tr><tr><td><code>styleOverrides[]</code></td><td><p><code>object (<code>BasicSeriesDataPointStyleOverride</code>)</code></p><p>Style override settings for series data points.</p></td></tr></tbody></table>

## LineStyle

Properties that describe the style of a line.

JSON representation

```
{
  "width": integer,
  "type": enum (LineDashType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>width</code></td><td><p><code>integer</code></p><p>The thickness of the line, in px.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>LineDashType</code>)</code></p><p>The dash type of the line.</p></td></tr></tbody></table>

## LineDashType

The dash type of a line.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>LINE_DASH_TYPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>CUSTOM</code></td><td>A custom dash for a line. Modifying the exact custom dash style is currently unsupported.</td></tr><tr><td><code>SOLID</code></td><td>A solid line.</td></tr><tr><td><code>DOTTED</code></td><td>A dotted line.</td></tr><tr><td><code>MEDIUM_DASHED</code></td><td>A dashed line where the dashes have "medium" length.</td></tr><tr><td><code>MEDIUM_DASHED_DOTTED</code></td><td>A line that alternates between a "medium" dash and a dot.</td></tr><tr><td><code>LONG_DASHED</code></td><td>A dashed line where the dashes have "long" length.</td></tr><tr><td><code>LONG_DASHED_DOTTED</code></td><td>A line that alternates between a "long" dash and a dot.</td></tr></tbody></table>

## DataLabel

Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.

JSON representation

```
{
  "type": enum (DataLabelType),
  "textFormat": {
    object (TextFormat)
  },
  "placement": enum (DataLabelPlacement),
  "customLabelData": {
    object (ChartData)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>DataLabelType</code>)</code></p><p>The type of the data label.</p></td></tr><tr><td><code>textFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The text format used for the data label. The link field is not supported.</p></td></tr><tr><td><code>placement</code></td><td><p><code>enum (<code>DataLabelPlacement</code>)</code></p><p>The placement of the data label relative to the labeled data.</p></td></tr><tr><td><code>customLabelData</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>Data to use for custom labels. Only used if <code>type</code> is set to <code>CUSTOM</code>. This data must be the same length as the series or other element this data label is applied to. In addition, if the series is split into multiple source ranges, this source data must come from the next column in the source data. For example, if the series is B2:B4,E6:E8 then this data must come from C2:C4,F6:F8.</p></td></tr></tbody></table>

## DataLabelType

The type of a data label.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATA_LABEL_TYPE_UNSPECIFIED</code></td><td>The data label type is not specified and will be interpreted depending on the context of the data label within the chart.</td></tr><tr><td><code>NONE</code></td><td>The data label is not displayed.</td></tr><tr><td><code>DATA</code></td><td>The data label is displayed using values from the series data.</td></tr><tr><td><code>CUSTOM</code></td><td>The data label is displayed using values from a custom data source indicated by <code>customLabelData</code>.</td></tr></tbody></table>

## DataLabelPlacement

The placement of a data label relative to the labeled data.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATA_LABEL_PLACEMENT_UNSPECIFIED</code></td><td>The positioning is determined automatically by the renderer.</td></tr><tr><td><code>CENTER</code></td><td>Center within a bar or column, both horizontally and vertically.</td></tr><tr><td><code>LEFT</code></td><td>To the left of a data point.</td></tr><tr><td><code>RIGHT</code></td><td>To the right of a data point.</td></tr><tr><td><code>ABOVE</code></td><td>Above a data point.</td></tr><tr><td><code>BELOW</code></td><td>Below a data point.</td></tr><tr><td><code>INSIDE_END</code></td><td>Inside a bar or column at the end (top if positive, bottom if negative).</td></tr><tr><td><code>INSIDE_BASE</code></td><td>Inside a bar or column at the base.</td></tr><tr><td><code>OUTSIDE_END</code></td><td>Outside a bar or column at the end.</td></tr></tbody></table>

## PointStyle

The style of a point on the chart.

JSON representation

```
{
  "size": number,
  "shape": enum (PointShape)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>size</code></td><td><p><code>number</code></p><p>The point size. If empty, a default size is used.</p></td></tr><tr><td><code>shape</code></td><td><p><code>enum (<code>PointShape</code>)</code></p><p>The point shape. If empty or unspecified, a default shape is used.</p></td></tr></tbody></table>

## PointShape

The shape of a point.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>POINT_SHAPE_UNSPECIFIED</code></td><td>Default value.</td></tr><tr><td><code>CIRCLE</code></td><td>A circle shape.</td></tr><tr><td><code>DIAMOND</code></td><td>A diamond shape.</td></tr><tr><td><code>HEXAGON</code></td><td>A hexagon shape.</td></tr><tr><td><code>PENTAGON</code></td><td>A pentagon shape.</td></tr><tr><td><code>SQUARE</code></td><td>A square shape.</td></tr><tr><td><code>STAR</code></td><td>A star shape.</td></tr><tr><td><code>TRIANGLE</code></td><td>A triangle shape.</td></tr><tr><td><code>X_MARK</code></td><td>An x-mark shape.</td></tr></tbody></table>

## BasicSeriesDataPointStyleOverride

Style override settings for a single series data point.

JSON representation

```
{
  "index": integer,
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  },
  "pointStyle": {
    object (PointStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The zero-based index of the series data point.</p></td></tr><tr><td><code>color
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>Color of the series data point. If empty, the series default is used. Deprecated: Use <code>colorStyle</code>.</p></td></tr><tr><td><code>colorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>Color of the series data point. If empty, the series default is used. If <code>color</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>pointStyle</code></td><td><p><code>object (<code>PointStyle</code>)</code></p><p>Point style of the series data point. Valid only if the <code>chartType</code> is <code>AREA</code>, <code>LINE</code>, or <code>SCATTER</code>. <code>COMBO</code> charts are also supported if the <code>series chart type</code> is <code>AREA</code>, <code>LINE</code>, or <code>SCATTER</code>. If empty, the series default is used.</p></td></tr></tbody></table>

## BasicChartStackedType

When charts are stacked, range (vertical axis) values are rendered on top of one another rather than from the horizontal axis. For example, the two values 20 and 80 would be drawn from 0, with 80 being 80 units away from the horizontal axis. If they were stacked, 80 would be rendered from 20, putting it 100 units away from the horizontal axis.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC_CHART_STACKED_TYPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>NOT_STACKED</code></td><td>Series are not stacked.</td></tr><tr><td><code>STACKED</code></td><td>Series values are stacked, each value is rendered vertically beginning from the top of the value below it.</td></tr><tr><td><code>PERCENT_STACKED</code></td><td>Vertical stacks are stretched to reach the top of the chart, with values laid out as percentages of each other.</td></tr></tbody></table>

## BasicChartCompareMode

The compare mode type, which describes the behavior of tooltips and data highlighting when hovering on data and chart area.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC_CHART_COMPARE_MODE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>DATUM</code></td><td>Only the focused data element is highlighted and shown in the tooltip.</td></tr><tr><td><code>CATEGORY</code></td><td>All data elements with the same category (e.g., domain value) are highlighted and shown in the tooltip.</td></tr></tbody></table>

## PieChartSpec

A [pie chart](https://developers.google.com/chart/interactive/docs/gallery/piechart).

JSON representation

```
{
  "legendPosition": enum (PieChartLegendPosition),
  "domain": {
    object (ChartData)
  },
  "series": {
    object (ChartData)
  },
  "threeDimensional": boolean,
  "pieHole": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>legendPosition</code></td><td><p><code>enum (<code>PieChartLegendPosition</code>)</code></p><p>Where the legend of the pie chart should be drawn.</p></td></tr><tr><td><code>domain</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data that covers the domain of the pie chart.</p></td></tr><tr><td><code>series</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data that covers the one and only series of the pie chart.</p></td></tr><tr><td><code>threeDimensional</code></td><td><p><code>boolean</code></p><p>True if the pie is three dimensional.</p></td></tr><tr><td><code>pieHole</code></td><td><p><code>number</code></p><p>The size of the hole in the pie chart.</p></td></tr></tbody></table>

## PieChartLegendPosition

Where the legend of the chart should be positioned.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PIE_CHART_LEGEND_POSITION_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>BOTTOM_LEGEND</code></td><td>The legend is rendered on the bottom of the chart.</td></tr><tr><td><code>LEFT_LEGEND</code></td><td>The legend is rendered on the left of the chart.</td></tr><tr><td><code>RIGHT_LEGEND</code></td><td>The legend is rendered on the right of the chart.</td></tr><tr><td><code>TOP_LEGEND</code></td><td>The legend is rendered on the top of the chart.</td></tr><tr><td><code>NO_LEGEND</code></td><td>No legend is rendered.</td></tr><tr><td><code>LABELED_LEGEND</code></td><td>Each pie slice has a label attached to it.</td></tr></tbody></table>

## BubbleChartSpec

A [bubble chart](https://developers.google.com/chart/interactive/docs/gallery/bubblechart).

JSON representation

```
{
  "legendPosition": enum (BubbleChartLegendPosition),
  "bubbleLabels": {
    object (ChartData)
  },
  "domain": {
    object (ChartData)
  },
  "series": {
    object (ChartData)
  },
  "groupIds": {
    object (ChartData)
  },
  "bubbleSizes": {
    object (ChartData)
  },
  "bubbleOpacity": number,
  "bubbleBorderColor": {
    object (Color)
  },
  "bubbleBorderColorStyle": {
    object (ColorStyle)
  },
  "bubbleMaxRadiusSize": integer,
  "bubbleMinRadiusSize": integer,
  "bubbleTextStyle": {
    object (TextFormat)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>legendPosition</code></td><td><p><code>enum (<code>BubbleChartLegendPosition</code>)</code></p><p>Where the legend of the chart should be drawn.</p></td></tr><tr><td><code>bubbleLabels</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the bubble labels. These do not need to be unique.</p></td></tr><tr><td><code>domain</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the bubble x-values. These values locate the bubbles in the chart horizontally.</p></td></tr><tr><td><code>series</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the bubble y-values. These values locate the bubbles in the chart vertically.</p></td></tr><tr><td><code>groupIds</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the bubble group IDs. All bubbles with the same group ID are drawn in the same color. If <code>bubbleSizes</code> is specified then this field must also be specified but may contain blank values. This field is optional.</p></td></tr><tr><td><code>bubbleSizes</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the bubble sizes. Bubble sizes are used to draw the bubbles at different sizes relative to each other. If specified, <code>groupIds</code> must also be specified. This field is optional.</p></td></tr><tr><td><code>bubbleOpacity</code></td><td><p><code>number</code></p><p>The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque.</p></td></tr><tr><td><code>bubbleBorderColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The bubble border color. Deprecated: Use <code>bubbleBorderColorStyle</code>.</p></td></tr><tr><td><code>bubbleBorderColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The bubble border color. If <code>bubbleBorderColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>bubbleMaxRadiusSize</code></td><td><p><code>integer</code></p><p>The max radius size of the bubbles, in pixels. If specified, the field must be a positive value.</p></td></tr><tr><td><code>bubbleMinRadiusSize</code></td><td><p><code>integer</code></p><p>The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value.</p></td></tr><tr><td><code>bubbleTextStyle</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The format of the text inside the bubbles. Strikethrough, underline, and link are not supported.</p></td></tr></tbody></table>

## BubbleChartLegendPosition

Where the legend of the chart should be positioned.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>BOTTOM_LEGEND</code></td><td>The legend is rendered on the bottom of the chart.</td></tr><tr><td><code>LEFT_LEGEND</code></td><td>The legend is rendered on the left of the chart.</td></tr><tr><td><code>RIGHT_LEGEND</code></td><td>The legend is rendered on the right of the chart.</td></tr><tr><td><code>TOP_LEGEND</code></td><td>The legend is rendered on the top of the chart.</td></tr><tr><td><code>NO_LEGEND</code></td><td>No legend is rendered.</td></tr><tr><td><code>INSIDE_LEGEND</code></td><td>The legend is rendered inside the chart area.</td></tr></tbody></table>

## CandlestickChartSpec

A [candlestick chart](https://developers.google.com/chart/interactive/docs/gallery/candlestickchart).

JSON representation

```
{
  "domain": {
    object (CandlestickDomain)
  },
  "data": [
    {
      object (CandlestickData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domain</code></td><td><p><code>object (<code>CandlestickDomain</code>)</code></p><p>The domain data (horizontal axis) for the candlestick chart. String data will be treated as discrete labels, other data will be treated as continuous values.</p></td></tr><tr><td><code>data[]</code></td><td><p><code>object (<code>CandlestickData</code>)</code></p><p>The Candlestick chart data. Only one CandlestickData is supported.</p></td></tr></tbody></table>

## CandlestickDomain

The domain of a CandlestickChart.

JSON representation

```
{
  "data": {
    object (ChartData)
  },
  "reversed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data of the CandlestickDomain.</p></td></tr><tr><td><code>reversed</code></td><td><p><code>boolean</code></p><p>True to reverse the order of the domain values (horizontal axis).</p></td></tr></tbody></table>

## CandlestickData

The Candlestick chart data, each containing the low, open, close, and high values for a series.

JSON representation

```
{
  "lowSeries": {
    object (CandlestickSeries)
  },
  "openSeries": {
    object (CandlestickSeries)
  },
  "closeSeries": {
    object (CandlestickSeries)
  },
  "highSeries": {
    object (CandlestickSeries)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>lowSeries</code></td><td><p><code>object (<code>CandlestickSeries</code>)</code></p><p>The range data (vertical axis) for the low/minimum value for each candle. This is the bottom of the candle's center line.</p></td></tr><tr><td><code>openSeries</code></td><td><p><code>object (<code>CandlestickSeries</code>)</code></p><p>The range data (vertical axis) for the open/initial value for each candle. This is the bottom of the candle body. If less than the close value the candle will be filled. Otherwise the candle will be hollow.</p></td></tr><tr><td><code>closeSeries</code></td><td><p><code>object (<code>CandlestickSeries</code>)</code></p><p>The range data (vertical axis) for the close/final value for each candle. This is the top of the candle body. If greater than the open value the candle will be filled. Otherwise the candle will be hollow.</p></td></tr><tr><td><code>highSeries</code></td><td><p><code>object (<code>CandlestickSeries</code>)</code></p><p>The range data (vertical axis) for the high/maximum value for each candle. This is the top of the candle's center line.</p></td></tr></tbody></table>

## CandlestickSeries

The series of a CandlestickData.

JSON representation

```
{
  "data": {
    object (ChartData)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data of the CandlestickSeries.</p></td></tr></tbody></table>

## OrgChartSpec

An [org chart](https://developers.google.com/chart/interactive/docs/gallery/orgchart). Org charts require a unique set of labels in `labels` and may optionally include `parentLabels` and `tooltips`. `parentLabels` contain, for each node, the label identifying the parent node. `tooltips` contain, for each node, an optional tooltip.

For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have `labels` contain "Alice", "Bob", "Cathy", `parentLabels` contain "", "Alice", "Alice" and `tooltips` contain "CEO", "President", "VP Sales".

JSON representation

```
{
  "nodeSize": enum (OrgChartNodeSize),
  "nodeColor": {
    object (Color)
  },
  "nodeColorStyle": {
    object (ColorStyle)
  },
  "selectedNodeColor": {
    object (Color)
  },
  "selectedNodeColorStyle": {
    object (ColorStyle)
  },
  "labels": {
    object (ChartData)
  },
  "parentLabels": {
    object (ChartData)
  },
  "tooltips": {
    object (ChartData)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>nodeSize</code></td><td><p><code>enum (<code>OrgChartNodeSize</code>)</code></p><p>The size of the org chart nodes.</p></td></tr><tr><td><code>nodeColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the org chart nodes. Deprecated: Use <code>nodeColorStyle</code>.</p></td></tr><tr><td><code>nodeColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the org chart nodes. If <code>nodeColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>selectedNodeColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the selected org chart nodes. Deprecated: Use <code>selectedNodeColorStyle</code>.</p></td></tr><tr><td><code>selectedNodeColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the selected org chart nodes. If <code>selectedNodeColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>labels</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the labels for all the nodes in the chart. Labels must be unique.</p></td></tr><tr><td><code>parentLabels</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the label of the parent for the corresponding node. A blank value indicates that the node has no parent and is a top-level node. This field is optional.</p></td></tr><tr><td><code>tooltips</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data containing the tooltip for the corresponding node. A blank value results in no tooltip being displayed for the node. This field is optional.</p></td></tr></tbody></table>

## OrgChartNodeSize

The size of the org chart nodes.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ORG_CHART_LABEL_SIZE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>SMALL</code></td><td>The small org chart node size.</td></tr><tr><td><code>MEDIUM</code></td><td>The medium org chart node size.</td></tr><tr><td><code>LARGE</code></td><td>The large org chart node size.</td></tr></tbody></table>

## HistogramChartSpec

A [histogram chart](https://developers.google.com/chart/interactive/docs/gallery/histogram). A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.

JSON representation

```
{
  "series": [
    {
      object (HistogramSeries)
    }
  ],
  "legendPosition": enum (HistogramChartLegendPosition),
  "showItemDividers": boolean,
  "bucketSize": number,
  "outlierPercentile": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>series[]</code></td><td><p><code>object (<code>HistogramSeries</code>)</code></p><p>The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series.</p></td></tr><tr><td><code>legendPosition</code></td><td><p><code>enum (<code>HistogramChartLegendPosition</code>)</code></p><p>The position of the chart legend.</p></td></tr><tr><td><code>showItemDividers</code></td><td><p><code>boolean</code></p><p>Whether horizontal divider lines should be displayed between items in each column.</p></td></tr><tr><td><code>bucketSize</code></td><td><p><code>number</code></p><p>By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional.</p></td></tr><tr><td><code>outlierPercentile</code></td><td><p><code>number</code></p><p>The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5.</p></td></tr></tbody></table>

## HistogramSeries

A histogram series containing the series color and data.

JSON representation

```
{
  "barColor": {
    object (Color)
  },
  "barColorStyle": {
    object (ColorStyle)
  },
  "data": {
    object (ChartData)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>barColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the column representing this series in each bucket. This field is optional. Deprecated: Use <code>barColorStyle</code>.</p></td></tr><tr><td><code>barColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the column representing this series in each bucket. This field is optional. If <code>barColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>data</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data for this histogram series.</p></td></tr></tbody></table>

## HistogramChartLegendPosition

Where the legend of the chart should be positioned.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>BOTTOM_LEGEND</code></td><td>The legend is rendered on the bottom of the chart.</td></tr><tr><td><code>LEFT_LEGEND</code></td><td>The legend is rendered on the left of the chart.</td></tr><tr><td><code>RIGHT_LEGEND</code></td><td>The legend is rendered on the right of the chart.</td></tr><tr><td><code>TOP_LEGEND</code></td><td>The legend is rendered on the top of the chart.</td></tr><tr><td><code>NO_LEGEND</code></td><td>No legend is rendered.</td></tr><tr><td><code>INSIDE_LEGEND</code></td><td>The legend is rendered inside the chart area.</td></tr></tbody></table>

## WaterfallChartSpec

A waterfall chart.

JSON representation

```
{
  "domain": {
    object (WaterfallChartDomain)
  },
  "series": [
    {
      object (WaterfallChartSeries)
    }
  ],
  "stackedType": enum (WaterfallChartStackedType),
  "firstValueIsTotal": boolean,
  "hideConnectorLines": boolean,
  "connectorLineStyle": {
    object (LineStyle)
  },
  "totalDataLabel": {
    object (DataLabel)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domain</code></td><td><p><code>object (<code>WaterfallChartDomain</code>)</code></p><p>The domain data (horizontal axis) for the waterfall chart.</p></td></tr><tr><td><code>series[]</code></td><td><p><code>object (<code>WaterfallChartSeries</code>)</code></p><p>The data this waterfall chart is visualizing.</p></td></tr><tr><td><code>stackedType</code></td><td><p><code>enum (<code>WaterfallChartStackedType</code>)</code></p><p>The stacked type.</p></td></tr><tr><td><code>firstValueIsTotal</code></td><td><p><code>boolean</code></p><p>True to interpret the first value as a total.</p></td></tr><tr><td><code>hideConnectorLines</code></td><td><p><code>boolean</code></p><p>True to hide connector lines between columns.</p></td></tr><tr><td><code>connectorLineStyle</code></td><td><p><code>object (<code>LineStyle</code>)</code></p><p>The line style for the connector lines.</p></td></tr><tr><td><code>totalDataLabel</code></td><td><p><code>object (<code>DataLabel</code>)</code></p><p>Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. <code>stackedType</code> must be <code>STACKED</code> and neither <code>CUSTOM</code> nor <code>placement</code> can be set on the <code>totalDataLabel</code>.</p></td></tr></tbody></table>

## WaterfallChartDomain

The domain of a waterfall chart.

JSON representation

```
{
  "data": {
    object (ChartData)
  },
  "reversed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data of the WaterfallChartDomain.</p></td></tr><tr><td><code>reversed</code></td><td><p><code>boolean</code></p><p>True to reverse the order of the domain values (horizontal axis).</p></td></tr></tbody></table>

## WaterfallChartSeries

A single series of data for a waterfall chart.

JSON representation

```
{
  "data": {
    object (ChartData)
  },
  "positiveColumnsStyle": {
    object (WaterfallChartColumnStyle)
  },
  "negativeColumnsStyle": {
    object (WaterfallChartColumnStyle)
  },
  "subtotalColumnsStyle": {
    object (WaterfallChartColumnStyle)
  },
  "hideTrailingSubtotal": boolean,
  "customSubtotals": [
    {
      object (WaterfallChartCustomSubtotal)
    }
  ],
  "dataLabel": {
    object (DataLabel)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data being visualized in this series.</p></td></tr><tr><td><code>positiveColumnsStyle</code></td><td><p><code>object (<code>WaterfallChartColumnStyle</code>)</code></p><p>Styles for all columns in this series with positive values.</p></td></tr><tr><td><code>negativeColumnsStyle</code></td><td><p><code>object (<code>WaterfallChartColumnStyle</code>)</code></p><p>Styles for all columns in this series with negative values.</p></td></tr><tr><td><code>subtotalColumnsStyle</code></td><td><p><code>object (<code>WaterfallChartColumnStyle</code>)</code></p><p>Styles for all subtotal columns in this series.</p></td></tr><tr><td><code>hideTrailingSubtotal</code></td><td><p><code>boolean</code></p><p>True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series.</p></td></tr><tr><td><code>customSubtotals[]</code></td><td><p><code>object (<code>WaterfallChartCustomSubtotal</code>)</code></p><p>Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point.</p></td></tr><tr><td><code>dataLabel</code></td><td><p><code>object (<code>DataLabel</code>)</code></p><p>Information about the data labels for this series.</p></td></tr></tbody></table>

## WaterfallChartColumnStyle

Styles for a waterfall chart column.

JSON representation

```
{
  "label": string,
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>label</code></td><td><p><code>string</code></p><p>The label of the column's legend.</p></td></tr><tr><td><code>color
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the column. Deprecated: Use <code>colorStyle</code>.</p></td></tr><tr><td><code>colorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the column. If <code>color</code> is also set, this field takes precedence.</p></td></tr></tbody></table>

## WaterfallChartCustomSubtotal

A custom subtotal column for a waterfall chart series.

JSON representation

```
{
  "subtotalIndex": integer,
  "label": string,
  "dataIsSubtotal": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subtotalIndex</code></td><td><p><code>integer</code></p><p>The zero-based index of a data point within the series. If <code>dataIsSubtotal</code> is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>A label for the subtotal column.</p></td></tr><tr><td><code>dataIsSubtotal</code></td><td><p><code>boolean</code></p><p>True if the data point at <code>subtotalIndex</code> is the subtotal. If false, the subtotal will be computed and appear after the data point.</p></td></tr></tbody></table>

## WaterfallChartStackedType

Stacked type options for waterfall charts.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>WATERFALL_STACKED_TYPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>STACKED</code></td><td>Values corresponding to the same domain (horizontal axis) value will be stacked vertically.</td></tr><tr><td><code>SEQUENTIAL</code></td><td>Series will spread out along the horizontal axis.</td></tr></tbody></table>

## TreemapChartSpec

A [Treemap chart](https://developers.google.com/chart/interactive/docs/gallery/treemap).

JSON representation

```
{
  "labels": {
    object (ChartData)
  },
  "parentLabels": {
    object (ChartData)
  },
  "sizeData": {
    object (ChartData)
  },
  "colorData": {
    object (ChartData)
  },
  "textFormat": {
    object (TextFormat)
  },
  "levels": integer,
  "hintedLevels": integer,
  "minValue": number,
  "maxValue": number,
  "headerColor": {
    object (Color)
  },
  "headerColorStyle": {
    object (ColorStyle)
  },
  "colorScale": {
    object (TreemapChartColorScale)
  },
  "hideTooltips": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labels</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data that contains the treemap cell labels.</p></td></tr><tr><td><code>parentLabels</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data the contains the treemap cells' parent labels.</p></td></tr><tr><td><code>sizeData</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data that determines the size of each treemap data cell. This data is expected to be numeric. The cells corresponding to non-numeric or missing data will not be rendered. If <code>colorData</code> is not specified, this data is used to determine data cell background colors as well.</p></td></tr><tr><td><code>colorData</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data that determines the background color of each treemap data cell. This field is optional. If not specified, <code>sizeData</code> is used to determine background colors. If specified, the data is expected to be numeric. <code>colorScale</code> will determine how the values in this data map to data cell background colors.</p></td></tr><tr><td><code>textFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The text format for all labels on the chart. The link field is not supported.</p></td></tr><tr><td><code>levels</code></td><td><p><code>integer</code></p><p>The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified.</p></td></tr><tr><td><code>hintedLevels</code></td><td><p><code>integer</code></p><p>The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified.</p></td></tr><tr><td><code>minValue</code></td><td><p><code>number</code></p><p>The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from <code>colorData</code>, or the minimum value from <code>sizeData</code> if <code>colorData</code> is not specified.</p></td></tr><tr><td><code>maxValue</code></td><td><p><code>number</code></p><p>The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from <code>colorData</code>, or the maximum value from <code>sizeData</code> if <code>colorData</code> is not specified.</p></td></tr><tr><td><code>headerColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color for header cells. Deprecated: Use <code>headerColorStyle</code>.</p></td></tr><tr><td><code>headerColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color for header cells. If <code>headerColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>colorScale</code></td><td><p><code>object (<code>TreemapChartColorScale</code>)</code></p><p>The color scale for data cells in the treemap chart. Data cells are assigned colors based on their color values. These color values come from <code>colorData</code>, or from <code>sizeData</code> if <code>colorData</code> is not specified. Cells with color values less than or equal to <code>minValue</code> will have <code>minValueColor</code> as their background color. Cells with color values greater than or equal to <code>maxValue</code> will have <code>maxValueColor</code> as their background color. Cells with color values between <code>minValue</code> and <code>maxValue</code> will have background colors on a gradient between <code>minValueColor</code> and <code>maxValueColor</code>, the midpoint of the gradient being <code>midValueColor</code>. Cells with missing or non-numeric color values will have <code>noDataColor</code> as their background color.</p></td></tr><tr><td><code>hideTooltips</code></td><td><p><code>boolean</code></p><p>True to hide tooltips.</p></td></tr></tbody></table>

## TreemapChartColorScale

A color scale for a treemap chart.

JSON representation

```
{
  "minValueColor": {
    object (Color)
  },
  "minValueColorStyle": {
    object (ColorStyle)
  },
  "midValueColor": {
    object (Color)
  },
  "midValueColorStyle": {
    object (ColorStyle)
  },
  "maxValueColor": {
    object (Color)
  },
  "maxValueColorStyle": {
    object (ColorStyle)
  },
  "noDataColor": {
    object (Color)
  },
  "noDataColorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minValueColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color for cells with a color value less than or equal to <code>minValue</code>. Defaults to #dc3912 if not specified. Deprecated: Use <code>minValueColorStyle</code>.</p></td></tr><tr><td><code>minValueColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color for cells with a color value less than or equal to <code>minValue</code>. Defaults to #dc3912 if not specified. If <code>minValueColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>midValueColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color for cells with a color value at the midpoint between <code>minValue</code> and <code>maxValue</code>. Defaults to #efe6dc if not specified. Deprecated: Use <code>midValueColorStyle</code>.</p></td></tr><tr><td><code>midValueColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color for cells with a color value at the midpoint between <code>minValue</code> and <code>maxValue</code>. Defaults to #efe6dc if not specified. If <code>midValueColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>maxValueColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color for cells with a color value greater than or equal to <code>maxValue</code>. Defaults to #109618 if not specified. Deprecated: Use <code>maxValueColorStyle</code>.</p></td></tr><tr><td><code>maxValueColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color for cells with a color value greater than or equal to <code>maxValue</code>. Defaults to #109618 if not specified. If <code>maxValueColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>noDataColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. Deprecated: Use <code>noDataColorStyle</code>.</p></td></tr><tr><td><code>noDataColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. If <code>noDataColor</code> is also set, this field takes precedence.</p></td></tr></tbody></table>

## ScorecardChartSpec

A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.

JSON representation

```
{
  "keyValueData": {
    object (ChartData)
  },
  "baselineValueData": {
    object (ChartData)
  },
  "aggregateType": enum (ChartAggregateType),
  "keyValueFormat": {
    object (KeyValueFormat)
  },
  "baselineValueFormat": {
    object (BaselineValueFormat)
  },
  "scaleFactor": number,
  "numberFormatSource": enum (ChartNumberFormatSource),
  "customFormatOptions": {
    object (ChartCustomNumberFormatOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>keyValueData</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data for scorecard key value.</p></td></tr><tr><td><code>baselineValueData</code></td><td><p><code>object (<code>ChartData</code>)</code></p><p>The data for scorecard baseline value. This field is optional.</p></td></tr><tr><td><code>aggregateType</code></td><td><p><code>enum (<code>ChartAggregateType</code>)</code></p><p>The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the <code>ChartData.aggregateType</code> field of the <code>keyValueData</code> or <code>baselineValueData</code> instead for data source charts. This field is optional.</p></td></tr><tr><td><code>keyValueFormat</code></td><td><p><code>object (<code>KeyValueFormat</code>)</code></p><p>Formatting options for key value.</p></td></tr><tr><td><code>baselineValueFormat</code></td><td><p><code>object (<code>BaselineValueFormat</code>)</code></p><p>Formatting options for baseline value. This field is needed only if <code>baselineValueData</code> is specified.</p></td></tr><tr><td><code>scaleFactor</code></td><td><p><code>number</code></p><p>Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional.</p></td></tr><tr><td><code>numberFormatSource</code></td><td><p><code>enum (<code>ChartNumberFormatSource</code>)</code></p><p>The number format source used in the scorecard chart. This field is optional.</p></td></tr><tr><td><code>customFormatOptions</code></td><td><p><code>object (<code>ChartCustomNumberFormatOptions</code>)</code></p><p>Custom formatting options for numeric key/baseline values in scorecard chart. This field is used only when <code>numberFormatSource</code> is set to . This field is optional.</p></td></tr></tbody></table>

## KeyValueFormat

Formatting options for key value.

JSON representation

```
{
  "textFormat": {
    object (TextFormat)
  },
  "position": {
    object (TextPosition)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>textFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>Text formatting options for key value. The link field is not supported.</p></td></tr><tr><td><code>position</code></td><td><p><code>object (<code>TextPosition</code>)</code></p><p>Specifies the horizontal text positioning of key value. This field is optional. If not specified, default positioning is used.</p></td></tr></tbody></table>

## BaselineValueFormat

Formatting options for baseline value.

JSON representation

```
{
  "comparisonType": enum (ComparisonType),
  "textFormat": {
    object (TextFormat)
  },
  "position": {
    object (TextPosition)
  },
  "description": string,
  "positiveColor": {
    object (Color)
  },
  "positiveColorStyle": {
    object (ColorStyle)
  },
  "negativeColor": {
    object (Color)
  },
  "negativeColorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>comparisonType</code></td><td><p><code>enum (<code>ComparisonType</code>)</code></p><p>The comparison type of key value with baseline value.</p></td></tr><tr><td><code>textFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>Text formatting options for baseline value. The link field is not supported.</p></td></tr><tr><td><code>position</code></td><td><p><code>object (<code>TextPosition</code>)</code></p><p>Specifies the horizontal text positioning of baseline value. This field is optional. If not specified, default positioning is used.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Description which is appended after the baseline value. This field is optional.</p></td></tr><tr><td><code>positiveColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>Color to be used, in case baseline value represents a positive change for key value. This field is optional. Deprecated: Use <code>positiveColorStyle</code>.</p></td></tr><tr><td><code>positiveColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>Color to be used, in case baseline value represents a positive change for key value. This field is optional. If <code>positiveColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>negativeColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>Color to be used, in case baseline value represents a negative change for key value. This field is optional. Deprecated: Use <code>negativeColorStyle</code>.</p></td></tr><tr><td><code>negativeColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>Color to be used, in case baseline value represents a negative change for key value. This field is optional. If <code>negativeColor</code> is also set, this field takes precedence.</p></td></tr></tbody></table>

## ComparisonType

The comparison type of key value with baseline value.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COMPARISON_TYPE_UNDEFINED</code></td><td>Default value, do not use.</td></tr><tr><td><code>ABSOLUTE_DIFFERENCE</code></td><td>Use absolute difference between key and baseline value.</td></tr><tr><td><code>PERCENTAGE_DIFFERENCE</code></td><td>Use percentage difference between key and baseline value.</td></tr></tbody></table>

## ChartNumberFormatSource

The number formatting source options for chart attributes.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHART_NUMBER_FORMAT_SOURCE_UNDEFINED</code></td><td>Default value, do not use.</td></tr><tr><td><code>FROM_DATA</code></td><td>Inherit number formatting from data.</td></tr><tr><td><code>CUSTOM</code></td><td>Apply custom formatting as specified by <code>ChartCustomNumberFormatOptions</code>.</td></tr></tbody></table>

## ChartCustomNumberFormatOptions

Custom number formatting options for chart attributes.

JSON representation

```
{
  "prefix": string,
  "suffix": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>prefix</code></td><td><p><code>string</code></p><p>Custom prefix to be prepended to the chart attribute. This field is optional.</p></td></tr><tr><td><code>suffix</code></td><td><p><code>string</code></p><p>Custom suffix to be appended to the chart attribute. This field is optional.</p></td></tr></tbody></table>

## ChartHiddenDimensionStrategy

Determines how charts should handle source rows that are hidden. Hidden rows include both manually hidden and hidden by a filter.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>SKIP_HIDDEN_ROWS_AND_COLUMNS</code></td><td>Charts will skip hidden rows and columns.</td></tr><tr><td><code>SKIP_HIDDEN_ROWS</code></td><td>Charts will skip hidden rows only.</td></tr><tr><td><code>SKIP_HIDDEN_COLUMNS</code></td><td>Charts will skip hidden columns only.</td></tr><tr><td><code>SHOW_ALL</code></td><td>Charts will not skip any hidden rows or columns.</td></tr></tbody></table>

## EmbeddedObjectBorder

A border along an embedded object.

JSON representation

```
{
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the border. Deprecated: Use <code>colorStyle</code>.</p></td></tr><tr><td><code>colorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the border. If <code>color</code> is also set, this field takes precedence.</p></td></tr></tbody></table>
