---
source: https://developers.google.com/apps-script/guides/slides/presentations
root: apps-script
fetched_at: 2026-04-23T15:18:27.641Z
---

# Structure of a presentation

## Page Summary

- A Google Slides Presentation is composed of pages, and a Page can have one or more page elements.
- There are various types of pages a presentation can contain, including Slide, Master, Layout, NotesPage, and NotesMasters.
- Each PageElement on a page can be one of several types, such as Shape, Line, Image, SheetsChart, Video, Table, WordArt, or Group.
- The visual appearance, size, and position of some page elements can be modified.

This guide describes the data types that make up a Slides presentation. For additional detail on pages, page elements, and their properties, see the corresponding section of the [Google Slides API documentation](../../../workspace/slides/api/concepts/page-elements.md).

A Slides [`Presentation`](../../reference/slides/presentation.md) is composed of pages. A [`Page`](../../reference/slides/page.md) can have one or more page elements.

![Diagram showing the hierarchical structure of a Google Slides presentation, with Presentation at the top, containing Pages, and Pages containing Page Elements.](https://developers.google.com/static/slides/api/images/presentation-architecture.png)

## Page types

There are various different types of pages that a presentation can contain. A [`Page`](../../reference/slides/page.md) can be one of the following types:

| Page type | Description |
| --- | --- |
| [`Slide`](../../reference/slides/slide.md) | The pages that users see and |

flip between when the presentation is rendered on a screen. [`Master`](../../reference/slides/master.md) | Contains placeholders that establish default text styles, as well as background and other shapes that make up the default background for all slides based on that master. [`Layout`](../../reference/slides/layout.md) | Determines how content is arranged on each type of slide. [`NotesPage`](../../reference/slides/notes-page.md) | Used for speaker's notes. [`NotesMasters`](../../reference/slides/notes-master.md) | Used for speaker's notes.

## Page element types

Each [`PageElement`](../../reference/slides/page-element.md) on a page can be one of the following types:

| Page element type | Description |
| --- | --- |
| [`Shape`](../../reference/slides/shape.md) | A plain visual object, such as |

rectangles, ellipses, and text boxes. Shapes can contain text, so they are the most common page elements to build slides. [`Line`](../../reference/slides/line.md) | A visual line, curve, or connector. [`Image`](../../reference/slides/image.md) | A graphic imported into Slides. [`SheetsChart`](../../reference/slides/sheets-chart.md) | A chart imported into Slides from Google Sheets. [`Video`](../../reference/slides/video.md) | A video imported into Slides. [`Table`](../../reference/slides/table.md) | A grid of content. [`WordArt`](../../reference/slides/word-art.md) | A visual text element that behaves more like a shape. [`Group`](../../reference/slides/group.md) | A set of page elements that are treated as an individual unit. They can be moved, scaled, and rotated together.

The visual appearance of some page elements can be modified by changing their [fill](../../reference/slides/fill.md), [border](../../reference/slides/border.md), and [text](../../reference/slides/text-range.md). Also change a page element's [size and position](./moving-elements.md).
