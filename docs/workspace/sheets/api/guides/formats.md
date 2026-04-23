---
source: https://developers.google.com/workspace/sheets/api/guides/formats
root: workspace
fetched_at: 2026-04-23T15:31:21.782Z
---

# Date and number formats

This document describes how to define new date and number format patterns, which you can include in your API request.

Date-time and number formats let you control how your data appears in a sheet. Google Sheets provides some common formats to choose from, but you can also define your own formats.

In the Sheets UI, you apply number and date formats to cells using the **Format** > **Number** menu. In the Google Sheets API, you set these formats using a [`spreadsheets.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method call to send an [`UpdateCellsRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatecellsrequest) or [`RepeatCellRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#repeatcellrequest).

The sample [Set a custom datetime or decimal format for a range](https://developers.google.com/workspace/sheets/api/samples/formatting#custom-format) shows how to set a format pattern using the Sheets API. Note that the actual rendering of the format depends on the spreadsheet's [`locale`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets#SpreadsheetProperties.FIELDS.locale). This document assumes the `locale` is `en_US`. You can determine the `locale` of a spreadsheet by reading the [`SpreadsheetProperties`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets#spreadsheetproperties) object using the [`spreadsheets.get`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get) method on the [`spreadsheets`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets) resource.

For more samples, see [Basic formatting](https://developers.google.com/workspace/sheets/api/samples/formatting) and [Conditional formatting](https://developers.google.com/workspace/sheets/api/samples/conditional-formatting).

## About date and time values

Sheets, like most other spreadsheet applications, treats date and time values as decimal values. This lets you perform arithmetic on them in formulas, so you can increment days or weeks, add or subtract two dates and times, and perform other similar operations.

Sheets uses a form of [epoch date](https://en.wikipedia.org/wiki/Epoch_\(computing\)) that's commonly used in spreadsheets. The whole number portion of the value (left of the decimal) counts the days since December 30, 1899. The fractional portion (right of the decimal) counts the time as a fraction of one day. For example, January 1, 1900 at noon is `2.5`, `2` because it's 2 days after December 30, 1899, and `0.5` because noon is half a day. February 1, 1900 at 3 PM is `33.625`.

Sheets correctly treats the year 1900 as a common year, not a leap year.

## Date and time format patterns

A *date-time format pattern* is a string of token substrings that, when parsed, are replaced with the corresponding date-time elements (such as the month or hour).

### Date and time format tokens

The following table defines the token substrings you can use in a date-time format pattern. A `+` character indicates that the previous character can appear one or more times and still match the pattern. Characters not listed in this table are treated as literals, and are output without changes.

<table><colgroup><col width="12%"></colgroup><tbody><tr><th>Token</th><th>Description</th></tr><tr><td><code>h</code></td><td>Hour of the day. Switches between 12 and 24-hour format depending on whether an AM or PM indicator is present in the string.</td></tr><tr><td><code>hh+</code></td><td>Same as previous, but with a leading 0 for 1-9.</td></tr><tr><td><code>m</code></td><td>If the previous non-literal token was hours or the subsequent one is seconds, it represents minutes in the hour (without a leading 0). Otherwise, it represents the month of the year as a number (without a leading 0).</td></tr><tr><td><code>M</code></td><td>The month of the year without a leading 0. Use this token to expressly state a month, instead of a minute, in your pattern.</td></tr><tr><td><code>mm</code></td><td>Same as <code>m</code>, but with a leading 0 for both cases.</td></tr><tr><td><code>MM</code></td><td>The month of the year with a leading 0. Use this token to expressly state a month, instead of a minute, in your pattern.</td></tr><tr><td><code>mmm</code></td><td>Three letter month abbreviation (for example, "Feb").</td></tr><tr><td><code>mmmm</code></td><td>Full month name. <code>mmmmmm+</code> also matches this.</td></tr><tr><td><code>mmmmm</code></td><td>First letter of the month (for example, "J" for June).</td></tr><tr><td><code>s</code></td><td>Seconds in the minute without a leading 0.</td></tr><tr><td><code>ss</code></td><td>Seconds in the minute with a leading 0.</td></tr><tr><td><code>[h+]</code></td><td>Number of elapsed hours in a time duration. Number of letters indicates minimum number of digits (adds leading 0s).</td></tr><tr><td><code>[m+]</code></td><td>Number of elapsed minutes in a time duration. Number of letters indicates minimum number of digits (adds leading 0s).</td></tr><tr><td><code>[s+]</code></td><td>Number of elapsed seconds in a time duration. Number of letters indicates minimum number of digits (adds leading 0s).</td></tr><tr><td><code>d</code></td><td>Day of the month, without a leading 0 for numbers less than 10.</td></tr><tr><td><code>dd</code></td><td>Day of the month, with a leading 0 for numbers less than 10.</td></tr><tr><td><code>ddd</code></td><td>Day of the week, three-letter abbreviation (for example, "Mon").</td></tr><tr><td><code>dddd+</code></td><td>Day of the week, full name.</td></tr><tr><td><code>y</code></td><td rowspan="2">2-digit year.</td></tr><tr><td><code>yy</code></td></tr><tr><td><code>yyy</code></td><td rowspan="2">4-digit year.</td></tr><tr><td><code>yyyy+</code></td></tr><tr><td><code>a/p</code></td><td>Displays "a" for AM, and "p" for PM. Also changes hours to 12-hour format. If the token letter is capitalized, the output is, too.</td></tr><tr><td><code>am/pm</code></td><td>As above, but displays "AM" or "PM" instead and is always capitalized.</td></tr><tr><td><code>0</code></td><td>Tenths of seconds. You can increase the precision to two digits with <code>00</code> or three digits (milliseconds) with <code>000</code>.</td></tr><tr><td><code> \ </code></td><td>Treats the next character as a literal value and not any special meaning it might have.</td></tr><tr><td><code>"text"</code></td><td>Displays whatever text is inside the quotation marks as a literal.</td></tr></tbody></table>

### Date and time format examples

Given the date and time `Tuesday, April 5, 2016, 4:08:53.528 PM`, the following table shows some example patterns and their corresponding date-time rendering. The second section of the table shows examples of elapsed time formats for an elapsed time of `3 hours, 13 minutes, 41.255 seconds`:

| Date-time Patterns | `Tuesday, April 5, 2016, 4:08:53.528 PM` |
| --- | --- |
| `h:mm:ss.00 a/p` | 4:08:53.53 p |
| `hh:mm A/P".M."` | 04:08 P.M. |
| `yyyy-mm-dd` | 2016-04-05 |
| `mmmm d \[dddd\]` | April 5 \[Tuesday\] |
| `h PM, ddd mmm dd` | 4 PM, Tue Apr 05 |
| `dddd, m/d/yy at h:mm` | Tuesday, 4/5/16 at 16:08 |
| Elapsed Time Patterns | `3 hours, 13 minutes, 41.255 seconds` |
| `[hh]` | 03 |
| `[mmmm]` | 0193 |
| `[ss]` | 11621 |

## Number format patterns

A *number format pattern* is a string of token substrings that, when parsed, are replaced with the corresponding number representations. A number format pattern can consist of up to four sections, separated by semicolons, which define the separate formats used for positive numbers, negative numbers, zero, and text (in that order):

```
[POSITIVE FORMAT];[NEGATIVE FORMAT];[ZERO FORMAT];[TEXT FORMAT]
```

You don't need to include all four sections in a format. If you only include one section, that format is used for all values. Using two sections causes the first format to be applied to zero and positive numbers and the second format to negative numbers. Using three sections defines separate formats for positive, negative, and zero numbers. For example:

```
[NUMBER FORMAT]
[POSITIVE/ZERO FORMAT];[NEGATIVE FORMAT]
[POSITIVE FORMAT];[NEGATIVE FORMAT];[ZERO FORMAT]
```

However, if there are two or more sections and the final section is a text format, that section is treated as the text format and the others behave as if there's one less section. Thus, by including a final text format it's possible to define formats such as:

```
[POSITIVE/ZERO FORMAT];[NEGATIVE FORMAT];[TEXT FORMAT]
[NUMBER FORMAT];[TEXT FORMAT]
```

The parsing of a format into sections occurs before other parsing, so it's possible to have a date or time format included as one of the sections (though this is of limited utility).

### Number format tokens

The following table defines the token substrings you can use in a format section to define how to represent the values for that section.

<table><colgroup><col width="12%"></colgroup><tbody><tr><th>Token</th><th>Description</th></tr><tr><td><code>0</code></td><td>Represents a digit in the number. If the digit is an insignificant 0, it's rendered as 0. For example, the number format <code>00.0</code> renders the number 3 as " <code>03.0</code> ".</td></tr><tr><td><code>#</code></td><td>Represents a digit in the number. If the digit is an insignificant 0, it's not rendered. For example, the number format <code>##0</code> renders the number 12 as " <code>12</code> ".</td></tr><tr><td><code>?</code></td><td>Represents a digit in the number. If the digit is an insignificant 0, it's rendered as a space. This is often used to align the decimal point in a column when using fixed-width fonts. For example, the number format <code>???.???</code> renders the number 12.4 as: " <code>12.4</code> ".</td></tr><tr><td><code>.</code></td><td>The first period represents the decimal point in the number. Subsequent periods are rendered as literals. If you include a decimal point in the format, it's always rendered, even for whole numbers. For example, <code>#0.#</code> renders the number 3 as " <code>3.</code>".</td></tr><tr><td><code>%</code></td><td>Appears as a literal but also causes existing numbers to be multiplied by 100 before being rendered to make percentages more readable. For example, the number format <code>#%</code> renders the number 0.25 as " <code>25%</code> ".</td></tr><tr><td><code>,</code></td><td>If it appears between two-digit characters (<code>0</code>, <code>#</code>, or <code>?</code>), it renders the entire number with grouping separators (grouping by the thousands). If it follows the digit characters, it scales the digits by one thousand per comma (for example, the format <code>#0.0,,</code> renders the number 12,200,000 as <code>12.2</code>).</td></tr><tr><td><code>E-</code></td><td rowspan="4">Renders the number in scientific format, with the formatting to the left of the <code>E</code> used for the non-exponent portion and the formatting to the right of the E used for the exponent portion. <code>E+</code> shows a <code>+</code> sign for positive exponents. <code>E-</code> only shows a sign for negative exponents. If lowercase is used, the output <code>e</code> is in lowercase as well. For example, the number format <code>##0.00#E+##</code> renders the number 0.0000001 as " <code>100.00E-9</code> ".</td></tr><tr><td><code>E+</code></td></tr><tr><td><code>e-</code></td></tr><tr><td><code>e+</code></td></tr><tr><td><code>/</code></td><td>If it appears between two-digit characters (<code>0</code>, <code>#</code>, or <code>?</code>), it treats those digit groups as a fractional format. For example, the number format <code>0 #/#</code> renders the number 23.25 as <code>23 1/4</code>. The denominator can also be a literal integer, in which case it enforces that integer as the denominator. The number format <code>0 #/8</code> displays the number 23.25 as <code>23 2/8</code>. The fraction part is not rendered if the numerator becomes 0. The number 23.1 with the number format <code>0 #/3</code> renders as just <code>23</code> (because the 0.1 is rounded to 0/3). <code>/</code> is not compatible with scientific format or a format with a decimal point in it.</td></tr><tr><td><code>*</code></td><td>This is included for compatibility with Microsoft Excel number formats. It's ignored.</td></tr><tr><td><code>_</code></td><td>The underscore token skips the next character and renders a space. This is used to line up number formats where the negative value is surrounded by parentheses.</td></tr><tr><td><code> \ </code></td><td>Treats the next character as a literal value and not any special meaning it might have. For example, the number format <code>\#0</code> renders the number 10 as " <code>#10</code> ".</td></tr><tr><td><code>"text"</code></td><td>Displays whatever text is inside the quotation marks as a literal.</td></tr><tr><td><code>@</code></td><td>If the cell has text input, it inserts the raw text for the cell. Not compatible with any of the other special characters and it doesn't display for numeric values (which are displayed as general format).</td></tr><tr><td><code>$ - + ( ) : space</code></td><td>Sheets treats these characters as literals and displays them unchanged.</td></tr></tbody></table>

### Meta instructions

In addition, each of the format sections can have optional meta instructions, enclosed in `[]` characters, that precede the format and provide additional instructions. There are two meta instruction types and a given section can use both:

| Instruction | Description |
| --- | --- |
| `[condition]` | Replaces the default positive, negative, or zero comparison of the section with another conditional expression. For example, `[<100]"Low";[>1000]"High";000` renders the word "Low" for values below 100, "High" for values above 1000, and a three-digit number (with leading 0s) for anything in between. Conditions can only be applied to the first two sub-formats and if a number matches more than one, it uses the first one it matches. If there's a third format, it's used for "everything else", otherwise if a number doesn't match either format, it's rendered as all "#"s filling up the cell width. If it exists, the fourth format is always used for text. |
| `[Color] or [Color#]` | Causes any value this sub-format renders to appear with the given text color. Valid values for Color are Black, Blue, Cyan, Green, Magenta, Red, White, or Yellow. Valid values for the "#" in Color# are from 1 to 56. Number format colors override any user-entered colors on the cell, but don't override colors set by conditional formatting. This [color palette](https://dmcritchie.mvps.org/excel/colors.htm) shows a list of colors that correspond to each number. They're based on the [`ColorIndex`](https://learn.microsoft.com/en-us/office/vba/api/excel.colorindex) property in Microsoft Excel. |

### Number format examples

The following table shows some example patterns and their corresponding formatted number rendering:

<table><tbody><tr><th>Number</th><th>Pattern</th><th>Formatted Value</th></tr><tr><td>12345.125</td><td><code>####.#</code></td><td>12345.1</td></tr><tr><td>12.34</td><td><code>000.0000</code></td><td>012.3400</td></tr><tr><td>12</td><td><code>#.0#</code></td><td>12.0</td></tr><tr><td>5.125</td><td><code># ???/???</code></td><td>5 1/8</td></tr><tr><td>12000</td><td><code>#,###</code></td><td>12,000</td></tr><tr><td>1230000</td><td><code>0.0,,"M"</code></td><td>1.2M</td></tr><tr><td>1234500000</td><td><code>0.00e+00</code></td><td>1.23e+09</td></tr><tr><td>123114.15115<br>MyText</td><td><code>###0.000;"TEXT: "_(@_)</code></td><td>123114.151<br>TEXT: MyText</td></tr><tr><td>1234<br>-1234<br>0<br>MyText</td><td><code>[Blue]#,##0;[Red]#,##0;[Green]0.0;[Magenta]_(@_)</code></td><td><font>1,234</font><br><font>1,234</font><br><font>0.0</font><br><font>MyText</font></td></tr><tr><td>1005<br>32<br>527</td><td rowspan="3"><code>[>1000]"HIGH";[Color43][<=200]"LOW";0000</code></td><td>HIGH<br><font>LOW</font><br>0527</td></tr></tbody></table>

## Related topics

- [Samples overview](https://developers.google.com/workspace/sheets/api/samples)
