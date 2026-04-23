---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets
root: workspace
fetched_at: 2026-04-23T15:31:28.127Z
---

# REST Resource: spreadsheets

## Resource: Spreadsheet

Resource that represents a spreadsheet.

JSON representation

```
{
  "spreadsheetId": string,
  "properties": {
    object (SpreadsheetProperties)
  },
  "sheets": [
    {
      object (Sheet)
    }
  ],
  "namedRanges": [
    {
      object (NamedRange)
    }
  ],
  "spreadsheetUrl": string,
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ],
  "dataSources": [
    {
      object (DataSource)
    }
  ],
  "dataSourceSchedules": [
    {
      object (DataSourceRefreshSchedule)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet. This field is read-only.</p></td></tr><tr><td><code>properties</code></td><td><p><code>object (<code>SpreadsheetProperties</code>)</code></p><p>Overall properties of a spreadsheet.</p></td></tr><tr><td><code>sheets[]</code></td><td><p><code>object (<code>Sheet</code>)</code></p><p>The sheets that are part of a spreadsheet.</p></td></tr><tr><td><code>namedRanges[]</code></td><td><p><code>object (<code>NamedRange</code>)</code></p><p>The named ranges defined in a spreadsheet.</p></td></tr><tr><td><code>spreadsheetUrl</code></td><td><p><code>string</code></p><p>The url of the spreadsheet. This field is read-only.</p></td></tr><tr><td><code>dataSources[]</code></td><td><p><code>object (<code>DataSource</code>)</code></p><p>A list of external data sources connected with the spreadsheet.</p></td></tr><tr><td><code>dataSourceSchedules[]</code></td><td><p><code>object (<code>DataSourceRefreshSchedule</code>)</code></p><p>Output only. A list of data source refresh schedules.</p></td></tr></tbody></table>

## SpreadsheetProperties

Properties of a spreadsheet.

JSON representation

```
{
  "title": string,
  "locale": string,
  "autoRecalc": enum (RecalculationInterval),
  "timeZone": string,
  "defaultFormat": {
    object (CellFormat)
  },
  "iterativeCalculationSettings": {
    object (IterativeCalculationSettings)
  },
  "spreadsheetTheme": {
    object (SpreadsheetTheme)
  },
  "importFunctionsExternalUrlAccessAllowed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the spreadsheet.</p></td></tr><tr><td><code>locale</code></td><td><p><code>string</code></p><p>The locale of the spreadsheet in one of the following formats:</p><ul><li><p>an ISO 639-1 language code such as <code>en</code></p></li><li><p>an ISO 639-2 language code such as <code>fil</code>, if no 639-1 code exists</p></li><li><p>a combination of the ISO language code and country code, such as <code>en_US</code></p></li></ul><p>Note: when updating this field, not all locales/languages are supported.</p></td></tr><tr><td><code>autoRecalc</code></td><td><p><code>enum (<code>RecalculationInterval</code>)</code></p><p>The amount of time to wait before volatile functions are recalculated.</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>The time zone of the spreadsheet, in CLDR format such as <code>America/New_York</code>. If the time zone isn't recognized, this may be a custom time zone such as <code>GMT-07:00</code>.</p></td></tr><tr><td><code>defaultFormat</code></td><td><p><code>object (<code>CellFormat</code>)</code></p><p>The default format of all cells in the spreadsheet. <code>CellData.effectiveFormat</code> will not be set if the cell's format is equal to this default format. This field is read-only.</p></td></tr><tr><td><code>iterativeCalculationSettings</code></td><td><p><code>object (<code>IterativeCalculationSettings</code>)</code></p><p>Determines whether and how circular references are resolved with iterative calculation. Absence of this field means that circular references result in calculation errors.</p></td></tr><tr><td><code>spreadsheetTheme</code></td><td><p><code>object (<code>SpreadsheetTheme</code>)</code></p><p>Theme applied to the spreadsheet.</p></td></tr><tr><td><code>importFunctionsExternalUrlAccessAllowed</code></td><td><p><code>boolean</code></p><p>Whether to allow external URL access for image and import functions. Read only when true. When false, you can set to true. This value will be bypassed and always return true if the admin has enabled the <a href="https://support.google.com/a?p=url_allowlist">allowlisting feature</a>.</p></td></tr></tbody></table>

## RecalculationInterval

An enumeration of the possible recalculation interval options.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RECALCULATION_INTERVAL_UNSPECIFIED</code></td><td>Default value. This value must not be used.</td></tr><tr><td><code>ON_CHANGE</code></td><td>Volatile functions are updated on every change.</td></tr><tr><td><code>MINUTE</code></td><td>Volatile functions are updated on every change and every minute.</td></tr><tr><td><code>HOUR</code></td><td>Volatile functions are updated on every change and hourly.</td></tr></tbody></table>

## IterativeCalculationSettings

Settings to control how circular dependencies are resolved with iterative calculation.

JSON representation

```
{
  "maxIterations": integer,
  "convergenceThreshold": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>maxIterations</code></td><td><p><code>integer</code></p><p>When iterative calculation is enabled, the maximum number of calculation rounds to perform.</p></td></tr><tr><td><code>convergenceThreshold</code></td><td><p><code>number</code></p><p>When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop.</p></td></tr></tbody></table>

## SpreadsheetTheme

Represents spreadsheet theme

JSON representation

```
{
  "primaryFontFamily": string,
  "themeColors": [
    {
      object (ThemeColorPair)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>primaryFontFamily</code></td><td><p><code>string</code></p><p>Name of the primary font family.</p></td></tr><tr><td><code>themeColors[]</code></td><td><p><code>object (<code>ThemeColorPair</code>)</code></p><p>The spreadsheet theme color pairs. To update you must provide all theme color pairs.</p></td></tr></tbody></table>

## ThemeColorPair

A pair mapping a spreadsheet theme color type to the concrete color it represents.

JSON representation

```
{
  "colorType": enum (ThemeColorType),
  "color": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>colorType</code></td><td><p><code>enum (<code>ThemeColorType</code>)</code></p><p>The type of the spreadsheet theme color.</p></td></tr><tr><td><code>color</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The concrete color corresponding to the theme color type.</p></td></tr></tbody></table>

## NamedRange

A named range.

JSON representation

```
{
  "namedRangeId": string,
  "name": string,
  "range": {
    object (GridRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The ID of the named range.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the named range.</p></td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>The range this represents.</p></td></tr></tbody></table>

## DataSource

Information about an external data source in the spreadsheet.

JSON representation

```
{
  "dataSourceId": string,
  "spec": {
    object (DataSourceSpec)
  },
  "calculatedColumns": [
    {
      object (DataSourceColumn)
    }
  ],
  "sheetId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365.</p></td></tr><tr><td><code>spec</code></td><td><p><code>object (<code>DataSourceSpec</code>)</code></p><p>The <code>DataSourceSpec</code> for the data source connected with this spreadsheet.</p></td></tr><tr><td><code>calculatedColumns[]</code></td><td><p><code>object (<code>DataSourceColumn</code>)</code></p><p>All calculated columns in the data source.</p></td></tr><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The ID of the <code>Sheet</code> connected with the data source. The field cannot be changed once set.</p><p>When creating a data source, an associated <code>DATA_SOURCE</code> sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated.</p></td></tr></tbody></table>

## DataSourceSpec

This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.

JSON representation

```
{
  "parameters": [
    {
      object (DataSourceParameter)
    }
  ],

  "bigQuery": {
    object (BigQueryDataSourceSpec)
  },
  "looker": {
    object (LookerDataSourceSpec)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parameters[]</code></td><td><p><code>object (<code>DataSourceParameter</code>)</code></p><p>The parameters of the data source, used when querying the data source.</p></td></tr><tr><td colspan="2">Union field <code>spec</code>. The actual specification per data source type. <code>spec</code> can be only one of the following:</td></tr><tr><td><code>bigQuery</code></td><td><p><code>object (<code>BigQueryDataSourceSpec</code>)</code></p><p>A <code>BigQueryDataSourceSpec</code>.</p></td></tr><tr><td><code>looker</code></td><td><p><code>object (<code>LookerDataSourceSpec</code>)</code></p><p>A [LookerDatasourceSpec][].</p></td></tr></tbody></table>

## BigQueryDataSourceSpec

The specification of a BigQuery data source that's connected to a sheet.

JSON representation

```
{
  "projectId": string,

  "querySpec": {
    object (BigQueryQuerySpec)
  },
  "tableSpec": {
    object (BigQueryTableSpec)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>projectId</code></td><td><p><code>string</code></p><p>The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged.</p></td></tr><tr><td colspan="2">Union field <code>spec</code>. The actual specification. <code>spec</code> can be only one of the following:</td></tr><tr><td><code>querySpec</code></td><td><p><code>object (<code>BigQueryQuerySpec</code>)</code></p><p>A <code>BigQueryQuerySpec</code>.</p></td></tr><tr><td><code>tableSpec</code></td><td><p><code>object (<code>BigQueryTableSpec</code>)</code></p><p>A <code>BigQueryTableSpec</code>.</p></td></tr></tbody></table>

## BigQueryQuerySpec

Specifies a custom BigQuery query.

JSON representation

```
{
  "rawQuery": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rawQuery</code></td><td><p><code>string</code></p><p>The raw query string.</p></td></tr></tbody></table>

## BigQueryTableSpec

Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) are allowed.

JSON representation

```
{
  "tableProjectId": string,
  "tableId": string,
  "datasetId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableProjectId</code></td><td><p><code>string</code></p><p>The ID of a BigQuery project the table belongs to. If not specified, the <code>projectId</code> is assumed.</p></td></tr><tr><td><code>tableId</code></td><td><p><code>string</code></p><p>The BigQuery table id.</p></td></tr><tr><td><code>datasetId</code></td><td><p><code>string</code></p><p>The BigQuery dataset id.</p></td></tr></tbody></table>

## LookerDataSourceSpec

The specification of a Looker data source.

JSON representation

```
{
  "instanceUri": string,
  "model": string,
  "explore": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>instanceUri</code></td><td><p><code>string</code></p><p>A Looker instance URL.</p></td></tr><tr><td><code>model</code></td><td><p><code>string</code></p><p>Name of a Looker model.</p></td></tr><tr><td><code>explore</code></td><td><p><code>string</code></p><p>Name of a Looker model explore.</p></td></tr></tbody></table>

## DataSourceParameter

A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.

JSON representation

```
{

  "name": string
  "namedRangeId": string,
  "range": {
    object (GridRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>identifier</code>. The parameter identifier. <code>identifier</code> can be only one of the following:</td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Named parameter. Must be a legitimate identifier for the <code>DataSource</code> that supports it. For example, <a href="https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers">BigQuery identifier</a>.</p></td></tr><tr><td colspan="2">Union field <code>value</code>. The parameter value. <code>value</code> can be only one of the following:</td></tr><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>ID of a <code>NamedRange</code>. Its size must be 1x1.</p></td></tr><tr><td><code>range</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>A range that contains the value of the parameter. Its size must be 1x1.</p></td></tr></tbody></table>

## DataSourceRefreshSchedule

Schedule for refreshing the data source.

Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8 AM, the refresh will take place between 8 AM and 12 PM every day.

JSON representation

```
{
  "enabled": boolean,
  "refreshScope": enum (DataSourceRefreshScope),
  "nextRun": {
    object (Interval)
  },

  "dailySchedule": {
    object (DataSourceRefreshDailySchedule)
  },
  "weeklySchedule": {
    object (DataSourceRefreshWeeklySchedule)
  },
  "monthlySchedule": {
    object (DataSourceRefreshMonthlySchedule)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enabled</code></td><td><p><code>boolean</code></p><p>True if the refresh schedule is enabled, or false otherwise.</p></td></tr><tr><td><code>refreshScope</code></td><td><p><code>enum (<code>DataSourceRefreshScope</code>)</code></p><p>The scope of the refresh. Must be <code>ALL_DATA_SOURCES</code>.</p></td></tr><tr><td><code>nextRun</code></td><td><p><code>object (<code>Interval</code>)</code></p><p>Output only. The time interval of the next run.</p></td></tr><tr><td colspan="2">Union field <code>schedule_config</code>. Schedule configurations <code>schedule_config</code> can be only one of the following:</td></tr><tr><td><code>dailySchedule</code></td><td><p><code>object (<code>DataSourceRefreshDailySchedule</code>)</code></p><p>Daily refresh schedule.</p></td></tr><tr><td><code>weeklySchedule</code></td><td><p><code>object (<code>DataSourceRefreshWeeklySchedule</code>)</code></p><p>Weekly refresh schedule.</p></td></tr><tr><td><code>monthlySchedule</code></td><td><p><code>object (<code>DataSourceRefreshMonthlySchedule</code>)</code></p><p>Monthly refresh schedule.</p></td></tr></tbody></table>

## DataSourceRefreshScope

The data source refresh scopes.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>ALL_DATA_SOURCES</code></td><td>Refreshes all data sources and their associated data source objects in the spreadsheet.</td></tr></tbody></table>

## DataSourceRefreshDailySchedule

A schedule for data to refresh every day in a given time interval.

JSON representation

```
{
  "startTime": {
    object (TimeOfDay)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startTime</code></td><td><p><code>object (<code>TimeOfDay</code>)</code></p><p>The start time of a time interval in which a data source refresh is scheduled. Only <code>hours</code> part is used. The time interval size defaults to that in the Sheets editor.</p></td></tr></tbody></table>

## TimeOfDay

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are `google.type.Date` and `google.protobuf.Timestamp`.

JSON representation

```
{
  "hours": integer,
  "minutes": integer,
  "seconds": integer,
  "nanos": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hours</code></td><td><p><code>integer</code></p><p>Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.</p></td></tr><tr><td><code>minutes</code></td><td><p><code>integer</code></p><p>Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.</p></td></tr><tr><td><code>seconds</code></td><td><p><code>integer</code></p><p>Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.</p></td></tr><tr><td><code>nanos</code></td><td><p><code>integer</code></p><p>Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.</p></td></tr></tbody></table>

## DataSourceRefreshWeeklySchedule

A weekly schedule for data to refresh on specific days in a given time interval.

JSON representation

```
{
  "startTime": {
    object (TimeOfDay)
  },
  "daysOfWeek": [
    enum (DayOfWeek)
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startTime</code></td><td><p><code>object (<code>TimeOfDay</code>)</code></p><p>The start time of a time interval in which a data source refresh is scheduled. Only <code>hours</code> part is used. The time interval size defaults to that in the Sheets editor.</p></td></tr><tr><td><code>daysOfWeek[]</code></td><td><p><code>enum (<code>DayOfWeek</code>)</code></p><p>Days of the week to refresh. At least one day must be specified.</p></td></tr></tbody></table>

## DayOfWeek

Represents a day of the week.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DAY_OF_WEEK_UNSPECIFIED</code></td><td>The day of the week is unspecified.</td></tr><tr><td><code>MONDAY</code></td><td>Monday</td></tr><tr><td><code>TUESDAY</code></td><td>Tuesday</td></tr><tr><td><code>WEDNESDAY</code></td><td>Wednesday</td></tr><tr><td><code>THURSDAY</code></td><td>Thursday</td></tr><tr><td><code>FRIDAY</code></td><td>Friday</td></tr><tr><td><code>SATURDAY</code></td><td>Saturday</td></tr><tr><td><code>SUNDAY</code></td><td>Sunday</td></tr></tbody></table>

## DataSourceRefreshMonthlySchedule

A monthly schedule for data to refresh on specific days in the month in a given time interval.

JSON representation

```
{
  "startTime": {
    object (TimeOfDay)
  },
  "daysOfMonth": [
    integer
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startTime</code></td><td><p><code>object (<code>TimeOfDay</code>)</code></p><p>The start time of a time interval in which a data source refresh is scheduled. Only <code>hours</code> part is used. The time interval size defaults to that in the Sheets editor.</p></td></tr><tr><td><code>daysOfMonth[]</code></td><td><p><code>integer</code></p><p>Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At least one day must be specified.</p></td></tr></tbody></table>

## Interval

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).

The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

JSON representation

```
{
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. Inclusive start of the interval.</p><p>If specified, a Timestamp matching this interval will have to be the same or after the start.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. Exclusive end of the interval.</p><p>If specified, a Timestamp matching this interval will have to be before the end.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchUpdate</h3></td><td>Applies one or more updates to the spreadsheet.</td></tr><tr><td><h3>create</h3></td><td>Creates a spreadsheet, returning the newly created spreadsheet.</td></tr><tr><td><h3>get</h3></td><td>Returns the spreadsheet at the given ID.</td></tr><tr><td><h3>getByDataFilter</h3></td><td>Returns the spreadsheet at the given ID.</td></tr></tbody></table>
