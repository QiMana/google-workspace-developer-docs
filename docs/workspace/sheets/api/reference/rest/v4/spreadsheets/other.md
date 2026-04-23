---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other
root: workspace
fetched_at: 2026-04-23T15:31:33.127Z
---

# Other

## Color

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript.

This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space.

When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`.

Example (Java):

```
import com.google.type.Color;

// ...
public static java.awt.Color fromProto(Color protocolor) {
  float alpha = protocolor.hasAlpha()
      ? protocolor.getAlpha().getValue()
      : 1.0;

  return new java.awt.Color(
      protocolor.getRed(),
      protocolor.getGreen(),
      protocolor.getBlue(),
      alpha);
}

public static Color toProto(java.awt.Color color) {
  float red = (float) color.getRed();
  float green = (float) color.getGreen();
  float blue = (float) color.getBlue();
  float denominator = 255.0;
  Color.Builder resultBuilder =
      Color
          .newBuilder()
          .setRed(red / denominator)
          .setGreen(green / denominator)
          .setBlue(blue / denominator);
  int alpha = color.getAlpha();
  if (alpha != 255) {
    result.setAlpha(
        FloatValue
            .newBuilder()
            .setValue(((float) alpha) / denominator)
            .build());
  }
  return resultBuilder.build();
}
// ...
```

Example (iOS / Obj-C):

```
// ...
 static UIColor* fromProto(Color* protocolor) {
    float red = [protocolor red];
    float green = [protocolor green];
    float blue = [protocolor blue];
    FloatValue* alpha_wrapper = [protocolor alpha];
    float alpha = 1.0;
    if (alpha_wrapper != nil) {
      alpha = [alpha_wrapper value];
    }
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
 }

 static Color* toProto(UIColor* color) {
     CGFloat red, green, blue, alpha;
     if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
       return nil;
     }
     Color* result = [[Color alloc] init];
     [result setRed:red];
     [result setGreen:green];
     [result setBlue:blue];
     if (alpha <= 0.9999) {
       [result setAlpha:floatWrapperWithValue(alpha)];
     }
     [result autorelease];
     return result;
}
// ...
```

Example (JavaScript):

```
// ...

var protoToCssColor = function(rgbColor) {
   var redFrac = rgbColor.red || 0.0;
   var greenFrac = rgbColor.green || 0.0;
   var blueFrac = rgbColor.blue || 0.0;
   var red = Math.floor(redFrac * 255);
   var green = Math.floor(greenFrac * 255);
   var blue = Math.floor(blueFrac * 255);

   if (!('alpha' in rgbColor)) {
      return rgbToCssColor(red, green, blue);
   }

   var alphaFrac = rgbColor.alpha.value || 0.0;
   var rgbParams = [red, green, blue].join(',');
   return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
};

var rgbToCssColor = function(red, green, blue) {
  var rgbNumber = new Number((red << 16) | (green << 8) | blue);
  var hexString = rgbNumber.toString(16);
  var missingZeros = 6 - hexString.length;
  var resultBuilder = ['#'];
  for (var i = 0; i < missingZeros; i++) {
     resultBuilder.push('0');
  }
  resultBuilder.push(hexString);
  return resultBuilder.join('');
};

// ...
```

JSON representation

```
{
  "red": number,
  "green": number,
  "blue": number,
  "alpha": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>red</code></td><td><p><code>number</code></p><p>The amount of red in the color as a value in the interval [0, 1].</p></td></tr><tr><td><code>green</code></td><td><p><code>number</code></p><p>The amount of green in the color as a value in the interval [0, 1].</p></td></tr><tr><td><code>blue</code></td><td><p><code>number</code></p><p>The amount of blue in the color as a value in the interval [0, 1].</p></td></tr><tr><td><code>alpha</code></td><td><p><code>number</code></p><p>The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation:</p><p><code>pixel color = alpha * (this color) + (1.0 - alpha) * (background color)</code></p><p>This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).</p></td></tr></tbody></table>

## ColorStyle

A color value.

JSON representation

```
{

  "rgbColor": {
    object (Color)
  },
  "themeColor": enum (ThemeColorType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of color value. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>rgbColor</code></td><td><p><code>object (<code>Color</code>)</code></p><p>RGB color. The <a href="https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#Color.FIELDS.alpha"><code>alpha</code></a> value in the <a href="https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#color"><code>Color</code></a> object isn't generally supported.</p></td></tr><tr><td><code>themeColor</code></td><td><p><code>enum (<code>ThemeColorType</code>)</code></p><p>Theme color.</p></td></tr></tbody></table>

## ThemeColorType

Theme color types.

contain a that defines a mapping of these theme color types to concrete colors.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>THEME_COLOR_TYPE_UNSPECIFIED</code></td><td>Unspecified theme color</td></tr><tr><td><code>TEXT</code></td><td>Represents the primary text color</td></tr><tr><td><code>BACKGROUND</code></td><td>Represents the primary background color</td></tr><tr><td><code>ACCENT1</code></td><td>Represents the first accent color</td></tr><tr><td><code>ACCENT2</code></td><td>Represents the second accent color</td></tr><tr><td><code>ACCENT3</code></td><td>Represents the third accent color</td></tr><tr><td><code>ACCENT4</code></td><td>Represents the fourth accent color</td></tr><tr><td><code>ACCENT5</code></td><td>Represents the fifth accent color</td></tr><tr><td><code>ACCENT6</code></td><td>Represents the sixth accent color</td></tr><tr><td><code>LINK</code></td><td>Represents the color to use for hyperlinks</td></tr></tbody></table>

## HorizontalAlign

The horizontal alignment of text in a cell.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HORIZONTAL_ALIGN_UNSPECIFIED</code></td><td>The horizontal alignment is not specified. Do not use this.</td></tr><tr><td><code>LEFT</code></td><td>The text is explicitly aligned to the left of the cell.</td></tr><tr><td><code>CENTER</code></td><td>The text is explicitly aligned to the center of the cell.</td></tr><tr><td><code>RIGHT</code></td><td>The text is explicitly aligned to the right of the cell.</td></tr></tbody></table>

## TextFormat

The format of a run of text in a cell. Absent values indicate that the field isn't specified.

JSON representation

```
{
  "foregroundColor": {
    object (Color)
  },
  "foregroundColorStyle": {
    object (ColorStyle)
  },
  "fontFamily": string,
  "fontSize": integer,
  "bold": boolean,
  "italic": boolean,
  "strikethrough": boolean,
  "underline": boolean,
  "link": {
    object (Link)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>foregroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The foreground color of the text. Deprecated: Use <code>foregroundColorStyle</code>.</p></td></tr><tr><td><code>foregroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The foreground color of the text. If <code>foregroundColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>fontFamily</code></td><td><p><code>string</code></p><p>The font family.</p></td></tr><tr><td><code>fontSize</code></td><td><p><code>integer</code></p><p>The size of the font.</p></td></tr><tr><td><code>bold</code></td><td><p><code>boolean</code></p><p>True if the text is bold.</p></td></tr><tr><td><code>italic</code></td><td><p><code>boolean</code></p><p>True if the text is italicized.</p></td></tr><tr><td><code>strikethrough</code></td><td><p><code>boolean</code></p><p>True if the text has a strikethrough.</p></td></tr><tr><td><code>underline</code></td><td><p><code>boolean</code></p><p>True if the text is underlined.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>The link destination of the text, if any. Setting the link field in a <code>TextFormatRun</code> will clear the cell's existing links or a cell-level link set in the same request. When a link is set, the text foreground color will be set to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults.</p></td></tr></tbody></table>

## Link

An external or local reference.

JSON representation

```
{

  "uri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>destination</code>. The link destination. <code>destination</code> can be only one of the following:</td></tr><tr><td><code>uri</code></td><td><p><code>string</code></p><p>The link identifier.</p></td></tr></tbody></table>

## DataSourceColumn

A column in a data source.

JSON representation

```
{
  "reference": {
    object (DataSourceColumnReference)
  },
  "formula": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>The column reference.</p></td></tr><tr><td><code>formula</code></td><td><p><code>string</code></p><p>The formula of the calculated column.</p></td></tr></tbody></table>

## DataSourceColumnReference

An unique identifier that references a data source column.

JSON representation

```
{
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The display name of the column. It should be unique within a data source.</p></td></tr></tbody></table>

## DataExecutionStatus

The data execution status.

A data execution is created to sync a data source object with the latest data from a . It is usually scheduled to run at background, you can check its `state` to tell if an execution completes

There are several scenarios where a data execution is triggered to run:

- `Adding a data source` creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet.
- `Updating a data source` creates a data execution to refresh the associated data source sheet similarly.
- You can send `refresh request` to explicitly refresh one or multiple data source objects.

JSON representation

```
{
  "state": enum (DataExecutionState),
  "errorCode": enum (DataExecutionErrorCode),
  "errorMessage": string,
  "lastRefreshTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>state</code></td><td><p><code>enum (<code>DataExecutionState</code>)</code></p><p>The state of the data execution.</p></td></tr><tr><td><code>errorCode</code></td><td><p><code>enum (<code>DataExecutionErrorCode</code>)</code></p><p>The error code.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>The error message, which may be empty.</p></td></tr><tr><td><code>lastRefreshTime</code></td><td><p><code>string (<code>Timestamp</code>
        format)</code></p><p>Gets the time the data last successfully refreshed.</p></td></tr></tbody></table>

## DataExecutionState

An enumeration of data execution states.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATA_EXECUTION_STATE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>NOT_STARTED</code></td><td>The data execution has not started.</td></tr><tr><td><code>RUNNING</code></td><td>The data execution has started and is running.</td></tr><tr><td><code>CANCELLING</code></td><td>The data execution is currently being cancelled.</td></tr><tr><td><code>SUCCEEDED</code></td><td>The data execution has completed successfully.</td></tr><tr><td><code>FAILED</code></td><td>The data execution has completed with errors.</td></tr></tbody></table>

## DataExecutionErrorCode

An enumeration of data execution error code.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATA_EXECUTION_ERROR_CODE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>TIMED_OUT</code></td><td>The data execution timed out.</td></tr><tr><td><code>TOO_MANY_ROWS</code></td><td>The data execution returns more rows than the limit.</td></tr><tr><td><code>TOO_MANY_COLUMNS</code></td><td>The data execution returns more columns than the limit.</td></tr><tr><td><code>TOO_MANY_CELLS</code></td><td>The data execution returns more cells than the limit.</td></tr><tr><td><code>ENGINE</code></td><td>Error is received from the backend data execution engine (e.g. BigQuery). Check <code>errorMessage</code> for details.</td></tr><tr><td><code>PARAMETER_INVALID</code></td><td>One or some of the provided data source parameters are invalid.</td></tr><tr><td><code>UNSUPPORTED_DATA_TYPE</code></td><td>The data execution returns an unsupported data type.</td></tr><tr><td><code>DUPLICATE_COLUMN_NAMES</code></td><td>The data execution returns duplicate column names or aliases.</td></tr><tr><td><code>INTERRUPTED</code></td><td>The data execution is interrupted. Please refresh later.</td></tr><tr><td><code>CONCURRENT_QUERY</code></td><td>The data execution is currently in progress, can not be refreshed until it completes.</td></tr><tr><td><code>OTHER</code></td><td>Other errors.</td></tr><tr><td><code>TOO_MANY_CHARS_PER_CELL</code></td><td>The data execution returns values that exceed the maximum characters allowed in a single cell.</td></tr><tr><td><code>DATA_NOT_FOUND</code></td><td>The database referenced by the data source is not found. */</td></tr><tr><td><code>PERMISSION_DENIED</code></td><td>The user does not have access to the database referenced by the data source.</td></tr><tr><td><code>MISSING_COLUMN_ALIAS</code></td><td>The data execution returns columns with missing aliases.</td></tr><tr><td><code>OBJECT_NOT_FOUND</code></td><td>The data source object does not exist.</td></tr><tr><td><code>OBJECT_IN_ERROR_STATE</code></td><td>The data source object is currently in error state. To force refresh, set <code>force</code> in <code>RefreshDataSourceRequest</code>.</td></tr><tr><td><code>OBJECT_SPEC_INVALID</code></td><td>The data source object specification is invalid.</td></tr><tr><td><code>DATA_EXECUTION_CANCELLED</code></td><td>The data execution has been cancelled.</td></tr></tbody></table>

## ExtendedValue

The kinds of value that a cell in a spreadsheet can have.

JSON representation

```
{

  "numberValue": number,
  "stringValue": string,
  "boolValue": boolean,
  "formulaValue": string,
  "errorValue": {
    object (ErrorValue)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>value</code>. The type of value in a cell. If no field is set, the cell has no data. <code>value</code> can be only one of the following:</td></tr><tr><td><code>numberValue</code></td><td><p><code>number</code></p><p>Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in <code>SERIAL_NUMBER</code> format.</p></td></tr><tr><td><code>stringValue</code></td><td><p><code>string</code></p><p>Represents a string value. Leading single quotes are not included. For example, if the user typed <code>'123</code> into the UI, this would be represented as a <code>stringValue</code> of <code>"123"</code>.</p></td></tr><tr><td><code>boolValue</code></td><td><p><code>boolean</code></p><p>Represents a boolean value.</p></td></tr><tr><td><code>formulaValue</code></td><td><p><code>string</code></p><p>Represents a formula.</p></td></tr><tr><td><code>errorValue</code></td><td><p><code>object (<code>ErrorValue</code>)</code></p><p>Represents an error. This field is read-only.</p></td></tr></tbody></table>

## ErrorValue

An error in a cell.

JSON representation

```
{
  "type": enum (ErrorType),
  "message": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>ErrorType</code>)</code></p><p>The type of error.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>A message with more information about the error (in the spreadsheet's locale).</p></td></tr></tbody></table>

## ErrorType

The type of error.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ERROR_TYPE_UNSPECIFIED</code></td><td>The default error type, do not use this.</td></tr><tr><td><code>ERROR</code></td><td>Corresponds to the <code>#ERROR!</code> error.</td></tr><tr><td><code>NULL_VALUE</code></td><td>Corresponds to the <code>#NULL!</code> error.</td></tr><tr><td><code>DIVIDE_BY_ZERO</code></td><td>Corresponds to the <code>#DIV/0</code> error.</td></tr><tr><td><code>VALUE</code></td><td>Corresponds to the <code>#VALUE!</code> error.</td></tr><tr><td><code>REF</code></td><td>Corresponds to the <code>#REF!</code> error.</td></tr><tr><td><code>NAME</code></td><td>Corresponds to the <code>#NAME?</code> error.</td></tr><tr><td><code>NUM</code></td><td>Corresponds to the <code>#NUM!</code> error.</td></tr><tr><td><code>N_A</code></td><td>Corresponds to the <code>#N/A</code> error.</td></tr></tbody></table>

## BooleanCondition

A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.

JSON representation

```
{
  "type": enum (ConditionType),
  "values": [
    {
      object (ConditionValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>ConditionType</code>)</code></p><p>The type of condition.</p></td></tr><tr><td><code>values[]</code></td><td><p><code>object (<code>ConditionValue</code>)</code></p><p>The values of the condition. The number of supported values depends on the <code>condition type</code>. Some support zero values, others one or two values, and supports an arbitrary number of values.</p></td></tr></tbody></table>

## ConditionType

The type of condition.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CONDITION_TYPE_UNSPECIFIED</code></td><td>The default value, do not use.</td></tr><tr><td><code>NUMBER_GREATER</code></td><td>The cell's value must be greater than the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>NUMBER_GREATER_THAN_EQ</code></td><td>The cell's value must be greater than or equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>NUMBER_LESS</code></td><td>The cell's value must be less than the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>NUMBER_LESS_THAN_EQ</code></td><td>The cell's value must be less than or equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>NUMBER_EQ</code></td><td>The cell's value must be equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code> for data validation, conditional formatting, and filters on non-data source objects and at least one <code>ConditionValue</code> for filters on data source objects.</td></tr><tr><td><code>NUMBER_NOT_EQ</code></td><td>The cell's value must be not equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code> for data validation, conditional formatting, and filters on non-data source objects and at least one <code>ConditionValue</code> for filters on data source objects.</td></tr><tr><td><code>NUMBER_BETWEEN</code></td><td>The cell's value must be between the two condition values. Supported by data validation, conditional formatting and filters. Requires exactly two <code>ConditionValues</code>.</td></tr><tr><td><code>NUMBER_NOT_BETWEEN</code></td><td>The cell's value must not be between the two condition values. Supported by data validation, conditional formatting and filters. Requires exactly two <code>ConditionValues</code>.</td></tr><tr><td><code>TEXT_CONTAINS</code></td><td>The cell's value must contain the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>TEXT_NOT_CONTAINS</code></td><td>The cell's value must not contain the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>TEXT_STARTS_WITH</code></td><td>The cell's value must start with the condition's value. Supported by conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>TEXT_ENDS_WITH</code></td><td>The cell's value must end with the condition's value. Supported by conditional formatting and filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>TEXT_EQ</code></td><td>The cell's value must be exactly the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code> for data validation, conditional formatting, and filters on non-data source objects and at least one <code>ConditionValue</code> for filters on data source objects.</td></tr><tr><td><code>TEXT_IS_EMAIL</code></td><td>The cell's value must be a valid email address. Supported by data validation. Requires no <code>ConditionValues</code>.</td></tr><tr><td><code>TEXT_IS_URL</code></td><td>The cell's value must be a valid URL. Supported by data validation. Requires no <code>ConditionValues</code>.</td></tr><tr><td><code>DATE_EQ</code></td><td>The cell's value must be the same date as the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code> for data validation, conditional formatting, and filters on non-data source objects and at least one <code>ConditionValue</code> for filters on data source objects.</td></tr><tr><td><code>DATE_BEFORE</code></td><td>The cell's value must be before the date of the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code> that may be a <code>relative date</code>.</td></tr><tr><td><code>DATE_AFTER</code></td><td>The cell's value must be after the date of the condition's value. Supported by data validation, conditional formatting and filters. Requires a single <code>ConditionValue</code> that may be a <code>relative date</code>.</td></tr><tr><td><code>DATE_ON_OR_BEFORE</code></td><td>The cell's value must be on or before the date of the condition's value. Supported by data validation. Requires a single <code>ConditionValue</code> that may be a <code>relative date</code>.</td></tr><tr><td><code>DATE_ON_OR_AFTER</code></td><td>The cell's value must be on or after the date of the condition's value. Supported by data validation. Requires a single <code>ConditionValue</code> that may be a <code>relative date</code>.</td></tr><tr><td><code>DATE_BETWEEN</code></td><td>The cell's value must be between the dates of the two condition values. Supported by data validation. Requires exactly two <code>ConditionValues</code>.</td></tr><tr><td><code>DATE_NOT_BETWEEN</code></td><td>The cell's value must be outside the dates of the two condition values. Supported by data validation. Requires exactly two <code>ConditionValues</code>.</td></tr><tr><td><code>DATE_IS_VALID</code></td><td>The cell's value must be a date. Supported by data validation. Requires no <code>ConditionValues</code>.</td></tr><tr><td><code>ONE_OF_RANGE</code></td><td>The cell's value must be listed in the grid in condition value's range. Supported by data validation. Requires a single <code>ConditionValue</code>, and the value must be a valid range in A1 notation.</td></tr><tr><td><code>ONE_OF_LIST</code></td><td>The cell's value must be in the list of condition values. Supported by data validation. Supports any number of <code>condition values</code>, one per item in the list. Formulas are not supported in the values.</td></tr><tr><td><code>BLANK</code></td><td>The cell's value must be empty. Supported by conditional formatting and filters. Requires no <code>ConditionValues</code>.</td></tr><tr><td><code>NOT_BLANK</code></td><td>The cell's value must not be empty. Supported by conditional formatting and filters. Requires no <code>ConditionValues</code>.</td></tr><tr><td><code>CUSTOM_FORMULA</code></td><td>The condition's formula must evaluate to true. Supported by data validation, conditional formatting and filters. Not supported by data source sheet filters. Requires a single <code>ConditionValue</code>.</td></tr><tr><td><code>BOOLEAN</code></td><td>The cell's value must be TRUE/FALSE or in the list of condition values. Supported by data validation. Renders as a cell checkbox. Supports zero, one or two <code>ConditionValues</code>. No values indicates the cell must be TRUE or FALSE, where TRUE renders as checked and FALSE renders as unchecked. One value indicates the cell will render as checked when it contains that value and unchecked when it is blank. Two values indicate that the cell will render as checked when it contains the first value and unchecked when it contains the second value. For example, ["Yes","No"] indicates that the cell will render a checked box when it has the value "Yes" and an unchecked box when it has the value "No".</td></tr><tr><td><code>TEXT_NOT_EQ</code></td><td>The cell's value must be exactly not the condition's value. Supported by filters on data source objects. Requires at least one <code>ConditionValue</code>.</td></tr><tr><td><code>DATE_NOT_EQ</code></td><td>The cell's value must be exactly not the condition's value. Supported by filters on data source objects. Requires at least one <code>ConditionValue</code>.</td></tr><tr><td><code>FILTER_EXPRESSION</code></td><td>The cell's value must follow the pattern specified. Requires a single <code>ConditionValue</code>.</td></tr></tbody></table>

## ConditionValue

The value of the condition.

JSON representation

```
{

  "relativeDate": enum (RelativeDate),
  "userEnteredValue": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>value</code>. The value of the condition, exactly one must be set. <code>value</code> can be only one of the following:</td></tr><tr><td><code>relativeDate</code></td><td><p><code>enum (<code>RelativeDate</code>)</code></p><p>A relative date (based on the current date). Valid only if the <code>type</code> is <code>DATE_BEFORE</code>, <code>DATE_AFTER</code>, <code>DATE_ON_OR_BEFORE</code> or <code>DATE_ON_OR_AFTER</code>.</p><p>Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters.</p></td></tr><tr><td><code>userEnteredValue</code></td><td><p><code>string</code></p><p>A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an <code>=</code> or a '+').</p></td></tr></tbody></table>

## RelativeDate

Controls how a date condition is evaluated.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RELATIVE_DATE_UNSPECIFIED</code></td><td>Default value, do not use.</td></tr><tr><td><code>PAST_YEAR</code></td><td>The value is one year before today.</td></tr><tr><td><code>PAST_MONTH</code></td><td>The value is one month before today.</td></tr><tr><td><code>PAST_WEEK</code></td><td>The value is one week before today.</td></tr><tr><td><code>YESTERDAY</code></td><td>The value is yesterday.</td></tr><tr><td><code>TODAY</code></td><td>The value is today.</td></tr><tr><td><code>TOMORROW</code></td><td>The value is tomorrow.</td></tr></tbody></table>

## GridRange

A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- \[startIndex, endIndex). Missing indexes indicate the range is unbounded on that side.

For example, if `"Sheet1"` is sheet ID 123456, then:

`Sheet1!A1:A1 == sheetId: 123456,                             startRowIndex: 0, endRowIndex: 1,                             startColumnIndex: 0, endColumnIndex: 1`

`Sheet1!A3:B4 == sheetId: 123456,                             startRowIndex: 2, endRowIndex: 4,                             startColumnIndex: 0, endColumnIndex: 2`

`Sheet1!A:B == sheetId: 123456,                           startColumnIndex: 0, endColumnIndex: 2`

`Sheet1!A5:B == sheetId: 123456,                            startRowIndex: 4,                            startColumnIndex: 0, endColumnIndex: 2`

`Sheet1 == sheetId: 123456`

The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.

JSON representation

```
{
  "sheetId": integer,
  "startRowIndex": integer,
  "endRowIndex": integer,
  "startColumnIndex": integer,
  "endColumnIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet this range is on.</p></td></tr><tr><td><code>startRowIndex</code></td><td><p><code>integer</code></p><p>The start row (inclusive) of the range, or not set if unbounded.</p></td></tr><tr><td><code>endRowIndex</code></td><td><p><code>integer</code></p><p>The end row (exclusive) of the range, or not set if unbounded.</p></td></tr><tr><td><code>startColumnIndex</code></td><td><p><code>integer</code></p><p>The start column (inclusive) of the range, or not set if unbounded.</p></td></tr><tr><td><code>endColumnIndex</code></td><td><p><code>integer</code></p><p>The end column (exclusive) of the range, or not set if unbounded.</p></td></tr></tbody></table>

## SortOrder

A sort order.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SORT_ORDER_UNSPECIFIED</code></td><td>Default value, do not use this.</td></tr><tr><td><code>ASCENDING</code></td><td>Sort ascending.</td></tr><tr><td><code>DESCENDING</code></td><td>Sort descending.</td></tr></tbody></table>

## FilterSpec

The filter criteria associated with a specific column.

JSON representation

```
{
  "filterCriteria": {
    object (FilterCriteria)
  },

  "columnIndex": integer,
  "dataSourceColumnReference": {
    object (DataSourceColumnReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filterCriteria</code></td><td><p><code>object (<code>FilterCriteria</code>)</code></p><p>The criteria for the column.</p></td></tr><tr><td colspan="2">Union field <code>reference</code>. Reference to the filtered column. <code>reference</code> can be only one of the following:</td></tr><tr><td><code>columnIndex</code></td><td><p><code>integer</code></p><p>The zero-based column index.</p></td></tr><tr><td><code>dataSourceColumnReference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>Reference to a data source column.</p></td></tr></tbody></table>

## FilterCriteria

Criteria for showing or hiding rows in a filter or filter view.

JSON representation

```
{
  "hiddenValues": [
    string
  ],
  "condition": {
    object (BooleanCondition)
  },
  "visibleBackgroundColor": {
    object (Color)
  },
  "visibleBackgroundColorStyle": {
    object (ColorStyle)
  },
  "visibleForegroundColor": {
    object (Color)
  },
  "visibleForegroundColorStyle": {
    object (ColorStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hiddenValues[]</code></td><td><p><code>string</code></p><p>Values that should be hidden.</p></td></tr><tr><td><code>condition</code></td><td><p><code>object (<code>BooleanCondition</code>)</code></p><p>A condition that must be <code>true</code> for values to be shown. (This does not override <code>hiddenValues</code> -- if a value is listed there, it will still be hidden.)</p></td></tr><tr><td><code>visibleBackgroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background fill color to filter by; only cells with this fill color are shown. Mutually exclusive with <code>visibleForegroundColor</code>. Deprecated: Use <code>visibleBackgroundColorStyle</code>.</p></td></tr><tr><td><code>visibleBackgroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background fill color to filter by; only cells with this fill color are shown. This field is mutually exclusive with <code>visibleForegroundColor</code>, and must be set to an RGB-type color. If <code>visibleBackgroundColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>visibleForegroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The foreground color to filter by; only cells with this foreground color are shown. Mutually exclusive with <code>visibleBackgroundColor</code>. Deprecated: Use <code>visibleForegroundColorStyle</code>.</p></td></tr><tr><td><code>visibleForegroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The foreground color to filter by; only cells with this foreground color are shown. This field is mutually exclusive with <code>visibleBackgroundColor</code>, and must be set to an RGB-type color. If <code>visibleForegroundColor</code> is also set, this field takes precedence.</p></td></tr></tbody></table>

## SortSpec

A sort order associated with a specific column or row.

JSON representation

```
{
  "sortOrder": enum (SortOrder),
  "foregroundColor": {
    object (Color)
  },
  "foregroundColorStyle": {
    object (ColorStyle)
  },
  "backgroundColor": {
    object (Color)
  },
  "backgroundColorStyle": {
    object (ColorStyle)
  },

  "dimensionIndex": integer,
  "dataSourceColumnReference": {
    object (DataSourceColumnReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOrder</code>)</code></p><p>The order data should be sorted.</p></td></tr><tr><td><code>foregroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with <code>backgroundColor</code>. Deprecated: Use <code>foregroundColorStyle</code>.</p></td></tr><tr><td><code>foregroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with <code>backgroundColor</code>, and must be an RGB-type color. If <code>foregroundColor</code> is also set, this field takes precedence.</p></td></tr><tr><td><code>backgroundColor
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Color</code>)</code></p><p>The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with <code>foregroundColor</code>. Deprecated: Use <code>backgroundColorStyle</code>.</p></td></tr><tr><td><code>backgroundColorStyle</code></td><td><p><code>object (<code>ColorStyle</code>)</code></p><p>The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with <code>foregroundColor</code>, and must be an RGB-type color. If <code>backgroundColor</code> is also set, this field takes precedence.</p></td></tr><tr><td colspan="2">Union field <code>reference</code>. Reference to the sorted dimension. <code>reference</code> can be only one of the following:</td></tr><tr><td><code>dimensionIndex</code></td><td><p><code>integer</code></p><p>The dimension the sort should be applied to.</p></td></tr><tr><td><code>dataSourceColumnReference</code></td><td><p><code>object (<code>DataSourceColumnReference</code>)</code></p><p>Reference to a data source column.</p></td></tr></tbody></table>

## EmbeddedObjectPosition

The position of an embedded object such as a chart.

JSON representation

```
{

  "sheetId": integer,
  "overlayPosition": {
    object (OverlayPosition)
  },
  "newSheet": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>location</code>. The location of the object. Exactly one value must be set. <code>location</code> can be only one of the following:</td></tr><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.</p></td></tr><tr><td><code>overlayPosition</code></td><td><p><code>object (<code>OverlayPosition</code>)</code></p><p>The position at which the object is overlaid on top of a grid.</p></td></tr><tr><td><code>newSheet</code></td><td><p><code>boolean</code></p><p>If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing.</p></td></tr></tbody></table>

## OverlayPosition

The location an object is overlaid on top of a grid.

JSON representation

```
{
  "anchorCell": {
    object (GridCoordinate)
  },
  "offsetXPixels": integer,
  "offsetYPixels": integer,
  "widthPixels": integer,
  "heightPixels": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>anchorCell</code></td><td><p><code>object (<code>GridCoordinate</code>)</code></p><p>The cell the object is anchored to.</p></td></tr><tr><td><code>offsetXPixels</code></td><td><p><code>integer</code></p><p>The horizontal offset, in pixels, that the object is offset from the anchor cell.</p></td></tr><tr><td><code>offsetYPixels</code></td><td><p><code>integer</code></p><p>The vertical offset, in pixels, that the object is offset from the anchor cell.</p></td></tr><tr><td><code>widthPixels</code></td><td><p><code>integer</code></p><p>The width of the object, in pixels. Defaults to 600.</p></td></tr><tr><td><code>heightPixels</code></td><td><p><code>integer</code></p><p>The height of the object, in pixels. Defaults to 371.</p></td></tr></tbody></table>

## GridCoordinate

A coordinate in a sheet. All indexes are zero-based.

JSON representation

```
{
  "sheetId": integer,
  "rowIndex": integer,
  "columnIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet this coordinate is on.</p></td></tr><tr><td><code>rowIndex</code></td><td><p><code>integer</code></p><p>The row index of the coordinate.</p></td></tr><tr><td><code>columnIndex</code></td><td><p><code>integer</code></p><p>The column index of the coordinate.</p></td></tr></tbody></table>
