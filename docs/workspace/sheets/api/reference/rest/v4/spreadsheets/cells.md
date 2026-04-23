---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/cells
root: workspace
fetched_at: 2026-04-23T15:31:30.352Z
---

# Cells

## CellData

Data about a specific cell.

JSON representation

```
{
  "userEnteredValue": {
    object (ExtendedValue)
  },
  "effectiveValue": {
    object (ExtendedValue)
  },
  "formattedValue": string,
  "userEnteredFormat": {
    object (CellFormat)
  },
  "effectiveFormat": {
    object (CellFormat)
  },
  "hyperlink": string,
  "note": string,
  "textFormatRuns": [
    {
      object (TextFormatRun)
    }
  ],
  "dataValidation": {
    object (DataValidationRule)
  },
  "pivotTable": {
    object (PivotTable)
  },
  "dataSourceTable": {
    object (DataSourceTable)
  },
  "dataSourceFormula": {
    object (DataSourceFormula)
  },
  "chipRuns": [
    {
      object (ChipRun)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>userEnteredValue</code></td><td><p><code>object (<code>ExtendedValue</code>)</code></p><p>The value the user entered in the cell. e.g., <code>1234</code>, <code>'Hello'</code>, or <code>=NOW()</code> Note: Dates, Times and DateTimes are represented as doubles in <code>serial number</code> format.</p></td></tr><tr><td><code>effectiveValue</code></td><td><p><code>object (<code>ExtendedValue</code>)</code></p><p>The effective value of the cell. For cells with formulas, this is the calculated value. For cells with literals, this is the same as the userEnteredValue. This field is read-only.</p></td></tr><tr><td><code>formattedValue</code></td><td><p><code>string</code></p><p>The formatted value of the cell. This is the value as it's shown to the user. This field is read-only.</p></td></tr><tr><td><code>userEnteredFormat</code></td><td><p><code>object (<code>CellFormat</code>)</code></p><p>The format the user entered for the cell.</p><p>When writing, the new format will be merged with the existing format.</p></td></tr><tr><td><code>effectiveFormat</code></td><td><p><code>object (<code>CellFormat</code>)</code></p><p>The effective format being used by the cell. This includes the results of applying any conditional formatting and, if the cell contains a formula, the computed number format. If the effective format is the default format, effective format will not be written. This field is read-only.</p></td></tr><tr><td><code>hyperlink</code></td><td><p><code>string</code></p><p>A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a <code>=HYPERLINK</code> formula in the <code>userEnteredValue.formulaValue</code> field. A cell-level link can also be set from the <code>userEnteredFormat.textFormat</code> field. Alternatively, set a hyperlink in the <code>textFormatRun.format.link</code> field that spans the entire cell.</p></td></tr><tr><td><code>note</code></td><td><p><code>string</code></p><p>Any note on the cell.</p></td></tr><tr><td><code>textFormatRuns[]</code></td><td><p><code>object (<code>TextFormatRun</code>)</code></p><p>Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed.</p><p>When writing, the new runs will overwrite any prior runs. When writing a new <code>userEnteredValue</code>, previous runs are erased.</p></td></tr><tr><td><code>dataValidation</code></td><td><p><code>object (<code>DataValidationRule</code>)</code></p><p>A data validation rule on the cell, if any.</p><p>When writing, the new data validation rule will overwrite any prior rule.</p></td></tr><tr><td><code>pivotTable</code></td><td><p><code>object (<code>PivotTable</code>)</code></p><p>A pivot table anchored at this cell. The size of pivot table itself is computed dynamically based on its data, grouping, filters, values, etc. Only the top-left cell of the pivot table contains the pivot table definition. The other cells will contain the calculated values of the results of the pivot in their <code>effectiveValue</code> fields.</p></td></tr><tr><td><code>dataSourceTable</code></td><td><p><code>object (<code>DataSourceTable</code>)</code></p><p>A data source table anchored at this cell. The size of data source table itself is computed dynamically based on its configuration. Only the first cell of the data source table contains the data source table definition. The other cells will contain the display values of the data source table result in their <code>effectiveValue</code> fields.</p></td></tr><tr><td><code>dataSourceFormula</code></td><td><p><code>object (<code>DataSourceFormula</code>)</code></p><p>Output only. Information about a data source formula on the cell. The field is set if <code>userEnteredValue</code> is a formula referencing some <code>DATA_SOURCE</code> sheet, e.g. <code>=SUM(DataSheet!Column)</code>.</p></td></tr><tr><td><code>chipRuns[]</code></td><td><p><code>object (<code>ChipRun</code>)</code></p><p>Optional. Runs of chips applied to subsections of the cell. Properties of a run start at a specific index in the text and continue until the next run.</p><p>When reading, all chipped and non-chipped runs are included. Non-chipped runs will have an empty <code>Chip</code>.</p><p>When writing, only runs with chips are included. Runs containing chips are of length 1 and are represented in the user-entered text by an “@” placeholder symbol. New runs will overwrite any prior runs. Writing a new <code>userEnteredValue</code> will erase previous runs.</p></td></tr></tbody></table>

## CellFormat

The format of a cell.

JSON representation

```
{
  "numberFormat": {
    object (NumberFormat)
  },
  "backgroundColor": {
    object (Color)
  },
  "backgroundColorStyle": {
    object (ColorStyle)
  },
  "borders": {
    object (Borders)
  },
  "padding": {
    object (Padding)
  },
  "horizontalAlignment": enum (HorizontalAlign),
  "verticalAlignment": enum (VerticalAlign),
  "wrapStrategy": enum (WrapStrategy),
  "textDirection": enum (TextDirection),
  "textFormat": {
    object (TextFormat)
  },
  "hyperlinkDisplayType": enum (HyperlinkDisplayType),
  "textRotation": {
    object (TextRotation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>numberFormat</code></td><td><p><code>object (<code>NumberFormat</code>)</code></p><p>A format describing how number values should be represented to the user.</p></td></tr><tr><td><code>backgroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background color of the cell. Deprecated: Use <code>backgroundColorStyle</code>.</p></td></tr><tr><td><code>backgroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background color of the cell. If <code>backgroundColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>borders</code></td><td><p><code>object (<code>Borders</code>)</code></p><p>The borders of the cell.</p></td></tr><tr><td><code>padding</code></td><td><p><code>object (<code>Padding</code>)</code></p><p>The padding of the cell.</p></td></tr><tr><td><code>horizontalAlignment</code></td><td><p><code>enum (<code>HorizontalAlign</code>)</code></p><p>The horizontal alignment of the value in the cell.</p></td></tr><tr><td><code>verticalAlignment</code></td><td><p><code>enum (<code>VerticalAlign</code>)</code></p><p>The vertical alignment of the value in the cell.</p></td></tr><tr><td><code>wrapStrategy</code></td><td><p><code>enum (<code>WrapStrategy</code>)</code></p><p>The wrap strategy for the value in the cell.</p></td></tr><tr><td><code>textDirection</code></td><td><p><code>enum (<code>TextDirection</code>)</code></p><p>The direction of the text in the cell.</p></td></tr><tr><td><code>textFormat</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The format of the text in the cell (unless overridden by a format run). Setting a cell-level link here clears the cell's existing links. Setting the link field in a <code>TextFormatRun</code> takes precedence over the cell-level link.</p></td></tr><tr><td><code>hyperlinkDisplayType</code></td><td><p><code>enum (<code>HyperlinkDisplayType</code>)</code></p><p>If one exists, how a hyperlink should be displayed in the cell.</p></td></tr><tr><td><code>textRotation</code></td><td><p><code>object (<code>TextRotation</code>)</code></p><p>The rotation applied to text in the cell.</p></td></tr></tbody></table>

## NumberFormat

The number format of a cell.

JSON representation

```
{
  "type": enum (NumberFormatType),
  "pattern": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>NumberFormatType</code>)</code></p><p>The type of the number format. When writing, this field must be set.</p></td></tr><tr><td><code>pattern</code></td><td><p><code>string</code></p><p>Pattern string used for formatting. If not set, a default pattern based on the spreadsheet's locale will be used if necessary for the given type. See the <a href="https://developers.google.com/workspace/sheets/api/guides/formats">Date and Number Formats guide</a> for more information about the supported patterns.</p></td></tr></tbody></table>

## NumberFormatType

The number format of the cell. In this documentation the locale is assumed to be en\_US, but the actual format depends on the locale of the spreadsheet.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NUMBER_FORMAT_TYPE_UNSPECIFIED</code></td><td>The number format is not specified and is based on the contents of the cell. Do not explicitly use this.</td></tr><tr><td><code>TEXT</code></td><td>Text formatting, e.g <code>1000.12</code></td></tr><tr><td><code>NUMBER</code></td><td>Number formatting, e.g, <code>1,000.12</code></td></tr><tr><td><code>PERCENT</code></td><td>Percent formatting, e.g <code>10.12%</code></td></tr><tr><td><code>CURRENCY</code></td><td>Currency formatting, e.g <code>$1,000.12</code></td></tr><tr><td><code>DATE</code></td><td>Date formatting, e.g <code>9/26/2008</code></td></tr><tr><td><code>TIME</code></td><td>Time formatting, e.g <code>3:59:00 PM</code></td></tr><tr><td><code>DATE_TIME</code></td><td>Date+Time formatting, e.g <code>9/26/08 15:59:00</code></td></tr><tr><td><code>SCIENTIFIC</code></td><td>Scientific number formatting, e.g <code>1.01E+03</code></td></tr></tbody></table>

## Borders

The borders of the cell.

JSON representation

```
{
  "top": {
    object (Border)
  },
  "bottom": {
    object (Border)
  },
  "left": {
    object (Border)
  },
  "right": {
    object (Border)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>top</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The top border of the cell.</p></td></tr><tr><td><code>bottom</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The bottom border of the cell.</p></td></tr><tr><td><code>left</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The left border of the cell.</p></td></tr><tr><td><code>right</code></td><td><p><code>object (<code>Border</code>)</code></p><p>The right border of the cell.</p></td></tr></tbody></table>

## Border

A border along a cell.

JSON representation

```
{
  "style": enum (Style),
  "width": integer,
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>style</code></td><td><p><code>enum (<code>Style</code>)</code></p><p>The style of the border.</p></td></tr><tr><td><code>width
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>integer</code></p><p>The width of the border, in pixels. Deprecated; the width is determined by the "style" field.</p></td></tr><tr><td><code>color
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the border. Deprecated: Use <code>colorStyle</code>.</p></td></tr><tr><td><code>colorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The color of the border. If <code>color</code> is also set, this field takes precedence.</p></td></tr></tbody></table>

## Style

The style of a border.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STYLE_UNSPECIFIED</code></td><td>The style is not specified. Do not use this.</td></tr><tr><td><code>DOTTED</code></td><td>The border is dotted.</td></tr><tr><td><code>DASHED</code></td><td>The border is dashed.</td></tr><tr><td><code>SOLID</code></td><td>The border is a thin solid line.</td></tr><tr><td><code>SOLID_MEDIUM</code></td><td>The border is a medium solid line.</td></tr><tr><td><code>SOLID_THICK</code></td><td>The border is a thick solid line.</td></tr><tr><td><code>NONE</code></td><td>No border. Used only when updating a border in order to erase it.</td></tr><tr><td><code>DOUBLE</code></td><td>The border is two solid lines.</td></tr></tbody></table>

## Padding

The amount of padding around the cell, in pixels. When updating padding, every field must be specified.

JSON representation

```
{
  "top": integer,
  "right": integer,
  "bottom": integer,
  "left": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>top</code></td><td><p><code>integer</code></p><p>The top padding of the cell.</p></td></tr><tr><td><code>right</code></td><td><p><code>integer</code></p><p>The right padding of the cell.</p></td></tr><tr><td><code>bottom</code></td><td><p><code>integer</code></p><p>The bottom padding of the cell.</p></td></tr><tr><td><code>left</code></td><td><p><code>integer</code></p><p>The left padding of the cell.</p></td></tr></tbody></table>

## VerticalAlign

The vertical alignment of text in a cell.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>VERTICAL_ALIGN_UNSPECIFIED</code></td><td>The vertical alignment is not specified. Do not use this.</td></tr><tr><td><code>TOP</code></td><td>The text is explicitly aligned to the top of the cell.</td></tr><tr><td><code>MIDDLE</code></td><td>The text is explicitly aligned to the middle of the cell.</td></tr><tr><td><code>BOTTOM</code></td><td>The text is explicitly aligned to the bottom of the cell.</td></tr></tbody></table>

## WrapStrategy

How to wrap text in a cell.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>WRAP_STRATEGY_UNSPECIFIED</code></td><td>The default value, do not use.</td></tr><tr><td><code>OVERFLOW_CELL</code></td><td><p>Lines that are longer than the cell width will be written in the next cell over, so long as that cell is empty. If the next cell over is non-empty, this behaves the same as <code>CLIP</code>. The text will never wrap to the next line unless the user manually inserts a new line. Example:</p><div><pre><code>| First sentence. |
| Manual newline that is very long. <- Text continues into next cell
| Next newline.   |</code></pre></div></td></tr><tr><td><code>LEGACY_WRAP</code></td><td><p>This wrap strategy represents the old Google Sheets wrap strategy where words that are longer than a line are clipped rather than broken. This strategy is not supported on all platforms and is being phased out. Example:</p><div><pre><code>| Cell has a |
| loooooooooo| <- Word is clipped.
| word.      |</code></pre></div></td></tr><tr><td><code>CLIP</code></td><td><p>Lines that are longer than the cell width will be clipped. The text will never wrap to the next line unless the user manually inserts a new line. Example:</p><div><pre><code>| First sentence. |
| Manual newline t| <- Text is clipped
| Next newline.   |</code></pre></div></td></tr><tr><td><code>WRAP</code></td><td><p>Words that are longer than a line are wrapped at the character level rather than clipped. Example:</p><div><pre><code>| Cell has a |
| loooooooooo| <- Word is broken.
| ong word.  |</code></pre></div></td></tr></tbody></table>

## TextDirection

The direction of text in a cell.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TEXT_DIRECTION_UNSPECIFIED</code></td><td>The text direction is not specified. Do not use this.</td></tr><tr><td><code>LEFT_TO_RIGHT</code></td><td>The text direction of left-to-right was set by the user.</td></tr><tr><td><code>RIGHT_TO_LEFT</code></td><td>The text direction of right-to-left was set by the user.</td></tr></tbody></table>

## HyperlinkDisplayType

Whether to explicitly render a hyperlink. If not specified, the hyperlink is linked.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HYPERLINK_DISPLAY_TYPE_UNSPECIFIED</code></td><td>The default value: the hyperlink is rendered. Do not use this.</td></tr><tr><td><code>LINKED</code></td><td>A hyperlink should be explicitly rendered.</td></tr><tr><td><code>PLAIN_TEXT</code></td><td>A hyperlink should not be rendered.</td></tr></tbody></table>

## TextRotation

The rotation applied to text in a cell.

JSON representation

```
{

  "angle": integer,
  "vertical": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>type</code>. The type of rotation, vertical or angled. <code>type</code> can be only one of the following:</td></tr><tr><td><code>angle</code></td><td><p><code>integer</code></p><p>The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards.</p><p>Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction</p></td></tr><tr><td><code>vertical</code></td><td><p><code>boolean</code></p><p>If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example:</p><div><pre><code>| V |
| e |
| r |
| t |
| i |
| c |
| a |
| l |</code></pre></div></td></tr></tbody></table>

## TextFormatRun

A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.

JSON representation

```
{
  "startIndex": integer,
  "format": {
    object (TextFormat)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The zero-based character index where this run starts, in UTF-16 code units.</p></td></tr><tr><td><code>format</code></td><td><p><code>object (<code>TextFormat</code>)</code></p><p>The format of this run. Absent values inherit the cell's format.</p></td></tr></tbody></table>

## DataValidationRule

A data validation rule.

JSON representation

```
{
  "condition": {
    object (BooleanCondition)
  },
  "inputMessage": string,
  "strict": boolean,
  "showCustomUi": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>condition</code></td><td><p><code>object (<code>BooleanCondition</code>)</code></p><p>The condition that data in the cell must match.</p></td></tr><tr><td><code>inputMessage</code></td><td><p><code>string</code></p><p>A message to show the user when adding data to the cell.</p></td></tr><tr><td><code>strict</code></td><td><p><code>boolean</code></p><p>True if invalid data should be rejected.</p></td></tr><tr><td><code>showCustomUi</code></td><td><p><code>boolean</code></p><p>True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown.</p></td></tr></tbody></table>

## DataSourceTable

A data source table, which allows the user to import a static table of data from the into Sheets. This is also known as "Extract" in the Sheets editor.

JSON representation

```
{
  "dataSourceId": string,
  "columnSelectionType": enum (DataSourceTableColumnSelectionType),
  "columns": [
    {
      object (DataSourceColumnReference)
    }
  ],
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
  "rowLimit": integer,
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>The ID of the data source the data source table is associated with.</p></td></tr><tr><td><code>columnSelectionType</code></td><td><p><code>enum (<code>DataSourceTableColumnSelectionType</code>)</code></p><p>The type to select columns for the data source table. Defaults to <code>SELECTED</code>.</p></td></tr><tr><td><code>columns[]</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>Columns selected for the data source table. The <code>columnSelectionType</code> must be <code>SELECTED</code>.</p></td></tr><tr><td><code>filterSpecs[]</code></td><td><p><code>object (<code>FilterSpec</code>)</code></p><p>Filter specifications in the data source table.</p></td></tr><tr><td><code>sortSpecs[]</code></td><td><p><code>object (<code>SortSpec</code>)</code></p><p>Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order.</p></td></tr><tr><td><code>rowLimit</code></td><td><p><code>integer</code></p><p>The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit.</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>Output only. The data execution status.</p></td></tr></tbody></table>

## DataSourceTableColumnSelectionType

The data source table column selection types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED</code></td><td>The default column selection type, do not use.</td></tr><tr><td><code>SELECTED</code></td><td>Select columns specified by <code>columns</code> field.</td></tr><tr><td><code>SYNC_ALL</code></td><td><p>Sync all current and future columns in the data source.</p><p>If set, the data source table fetches all the columns in the data source at the time of refresh.</p></td></tr></tbody></table>

## DataSourceFormula

A data source formula.

JSON representation

```
{
  "dataSourceId": string,
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataSourceId</code></td><td><p><code>string</code></p><p>The ID of the data source the formula is associated with.</p></td></tr><tr><td><code>dataExecutionStatus</code></td><td><p><code>object (<code>DataExecutionStatus</code>)</code></p><p>Output only. The data execution status.</p></td></tr></tbody></table>

## ChipRun

The run of a chip. The chip continues until the start index of the next run.

JSON representation

```
{
  "startIndex": integer,
  "chip": {
    object (Chip)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>Required. The zero-based character index where this run starts, in UTF-16 code units.</p></td></tr><tr><td><code>chip</code></td><td><p><code>object (<code>Chip</code>)</code></p><p>Optional. The chip of this run.</p></td></tr></tbody></table>

## Chip

The Smart Chip.

JSON representation

```
{

  "personProperties": {
    object (PersonProperties)
  },
  "richLinkProperties": {
    object (RichLinkProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>properties</code>. The properties of the chip. <code>properties</code> can be only one of the following:</td></tr><tr><td><code>personProperties</code></td><td><p><code>object (<code>PersonProperties</code>)</code></p><p>Properties of a linked person.</p></td></tr><tr><td><code>richLinkProperties</code></td><td><p><code>object (<code>RichLinkProperties</code>)</code></p><p>Properties of a rich link.</p></td></tr></tbody></table>

## PersonProperties

Properties specific to a linked person.

JSON representation

```
{
  "email": string,
  "displayFormat": enum (DisplayFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>Required. The email address linked to this person. This field is always present.</p></td></tr><tr><td><code>displayFormat</code></td><td><p><code>enum (<code>DisplayFormat</code>)</code></p><p>Optional. The display format of the person chip. If not set, the default display format is used.</p></td></tr></tbody></table>

## DisplayFormat

Preferred display format when available.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DISPLAY_FORMAT_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>DEFAULT</code></td><td>Default display format.</td></tr><tr><td><code>LAST_NAME_COMMA_FIRST_NAME</code></td><td>Last name, first name display format.</td></tr><tr><td><code>EMAIL</code></td><td>Email display format.</td></tr></tbody></table>

## RichLinkProperties

Properties of a link to a Google resource (such as a file in Drive, a YouTube video, a Maps address, or a Calendar event). Only Drive files can be written as chips. All other rich link types are read only.

URIs cannot exceed 2000 bytes when writing.

NOTE: Writing Drive file chips requires at least one of the `drive.file`, `drive.readonly`, or `drive` OAuth scopes.

JSON representation

```
{
  "uri": string,
  "mimeType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p><p>Required. The URI to the link. This is always present.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Output only. The <a href="https://developers.google.com/drive/api/v3/mime-types">MIME type</a> of the link, if there's one (for example, when it's a file in Drive).</p></td></tr></tbody></table>
