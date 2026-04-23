---
source: https://developers.google.com/apps-script/reference/charts/text-style
root: apps-script
fetched_at: 2026-04-23T15:19:20.503Z
---

# Class TextStyle

## Page Summary

- A TextStyle object is used to configure text style for elements in charts options.
- It can be applied to elements like title, horizontal axis, vertical axis, legend, and tooltip.
- You can set properties like color, font size, and font name for text styles.
- Methods like getColor(), getFontName(), and getFontSize() allow you to retrieve the configured text style properties.

A text style configuration object. Used in charts options to configure text style for elements that accepts it, such as title, horizontal axis, vertical axis, legend and tooltip.

```
// This example creates a chart specifying different text styles for the title
// and axes.
const sampleData = Charts.newDataTable()
                       .addColumn(Charts.ColumnType.STRING, 'Seasons')
                       .addColumn(Charts.ColumnType.NUMBER, 'Rainy Days')
                       .addRow(['Winter', 5])
                       .addRow(['Spring', 12])
                       .addRow(['Summer', 8])
                       .addRow(['Fall', 8])
                       .build();

const titleTextStyleBuilder =
    Charts.newTextStyle().setColor('#0000FF').setFontSize(26).setFontName(
        'Ariel');
const axisTextStyleBuilder =
    Charts.newTextStyle().setColor('#3A3A3A').setFontSize(20).setFontName(
        'Ariel');
const titleTextStyle = titleTextStyleBuilder.build();
const axisTextStyle = axisTextStyleBuilder.build();

const chart = Charts.newLineChart()
                  .setTitleTextStyle(titleTextStyle)
                  .setXAxisTitleTextStyle(axisTextStyle)
                  .setYAxisTitleTextStyle(axisTextStyle)
                  .setTitle('Rainy Days Per Season')
                  .setXAxisTitle('Season')
                  .setYAxisTitle('Number of Rainy Days')
                  .setDataTable(sampleData)
                  .build();
```

## Detailed documentation

### getColor()

Gets the color of the text style.

```
// Creates a new text style that uses blue text and logs the color.
const textStyle = Charts.newTextStyle().setColor('blue').build();
Logger.log(textStyle.getColor());
```

#### Return

`String` — The CSS value for the color (such as `"blue"` or `"#00f"`).

---

### getFontName()

Gets the font name of the text style.

```
// Creates a new text style that uses Ariel font and logs the font name.
const textStyle = Charts.newTextStyle().setFontName('Ariel').build();
Logger.log(textStyle.getFontName());
```

#### Return

`String` — The font name.

---

### getFontSize()

Gets the font size of the text style.

```
// Creates a new text style that uses 18 pixel font size and logs the font size.
const textStyle = Charts.newTextStyle().setFontSize(18).build();
Logger.log(textStyle.getFontSize());
```

#### Return

`Number` — The font size in pixels.
