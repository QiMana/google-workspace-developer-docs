---
source: https://developers.google.com/workspace/chat/design-components-card-dialog
root: workspace
fetched_at: 2026-04-23T15:25:22.964Z
---

# Build cards for Google Chat apps

## Page Summary

- This page provides guidance on building interactive cards for Google Chat apps, covering structures like headers, sections, and footers.
- Cards can be displayed in Chat messages, homepages, and dialogs to present and collect user information.
- Developers can use widgets like `CardHeader`, `CardSection`, and `CardFixedFooter` to construct card elements.
- The page also includes advanced card layouts with columns and grids for organizing content and interactive elements.
- Troubleshooting and debugging information is available for resolving card-related errors in Google Chat apps.

This page describes how to build the components and structure of a [card](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#card). Cards are user interfaces that Google Chat apps can use to present and collect information from Chat users. Chat apps can build and display cards in the following interfaces:

- [Messages](https://developers.google.com/workspace/chat/messages-overview#anatomy-card) that contain one or more cards.
- [Homepages](https://developers.google.com/workspace/chat/send-app-home-card-message), which is a card that appears from the **Home** tab in direct messages with the Chat app.
- [Dialogs](https://developers.google.com/workspace/chat/dialogs), which are cards that open in a new window from messages and homepages.

In this page, you learn about the following components of a card:

## Prerequisites

A Google Chat app that's configured to receive and respond to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app, complete one of the following quickstarts based on the [app architecture](https://developers.google.com/workspace/chat/structure) that you want to use:

- [HTTP service](https://developers.google.com/workspace/chat/quickstart/gcf-app) with Google Cloud Functions
- [Google Apps Script](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [Google Cloud Dialogflow CX](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- [Google Cloud Pub/Sub](https://developers.google.com/workspace/chat/quickstart/pub-sub)

---

Use the Card Builder to design and preview messaging and user interfaces for Chat apps:

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

---

## Add a header

The [`CardHeader`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#cardheader) widget represents the header of a card. Headers can include a title, subtitle, and an avatar image for your card.

The following is an example of a `CardHeader`:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=header-image&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with header and image"></iframe>

## Add one or more card sections

The [`CardSection`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#section) widget is a high-level container within a card. You use card sections to group widgets within a card. For each card section, you can include a header and one or more widgets.

The following is an example of a `CardSection` that contains two `textParagraph` widgets:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=section&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with section"></iframe>

### Add a horizontal divider between widgets

The [`divider` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#divider) displays a horizontal line spanning the width of a card between vertically stacked widgets. The line is a visual divider that helps users distinguish between one widget and another, making cards easier to scan and understand.

The following is a card consisting of `divider` widget between other types of widgets:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=divider&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with divider widget."></iframe>

### Add columns

The [`columns` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#columns) displays up to 2 columns in a card. You can add widgets to each column; the widgets appear in the order that they're' specified. To include more than 2 columns, or to use rows, use the `grid` widget.

The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns.

The following example displays a card with a `columns` widget that features 2 columns of text. To view only the columns layout and to collapse the code sample, click **Collapse**. When space is constrained, like in the following example, the second column wraps below the first column.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=columns-two-text&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with 2 columns"></iframe>

#### Define the column width

Columns are displayed side-by-side. You can customize the width of each column using the [`horizontalSizeStyle` field](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#horizontalsizestyle). If the user's screen width is too narrow, the second column wraps below the first:

- On web, the second column wraps if the screen width is less than or equal to 480 pixels.
- On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt.
- On Android devices, the second column wraps if the screen width is less than or equal to 320 dp.

The following example displays a card with a `columns` widget that features 2 columns of text with 4 items in the columns. Each item in the columns has `horizontalSizeStyle` applied in order to manipulate how much space the text fills each column:

- The first text paragraph uses `FILL_MINIMUM_SPACE` to fill no more than 30% of the card's width.
- The second text paragraph uses `FILL_AVAILABLE_SPACE` to fill the available space in the card's width. In this example, it fills 70% of the card's width.
- The third text paragraph doesn't define `horizontalSizeStyle` so it defaults to fill the available space of the card's space.
- The fourth text paragraph uses `FILL_MINIMUM_SPACE` to fill no more than 30% of the card's width.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=horizontal-size-style&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with columns and horizontalSizeStyle"></iframe>

#### Define the horizontal alignment of a column

You can align widgets horizontally to the left, right, or center of a column by defining the [`horizontalAligment` field](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#horizontalalignment). If the `horizontalAlignment` fiield is undefined, widgets are aligned to the left in a column.

The following example horizontally aligns text within a column to the left:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=horizontal-alignment-start&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with columns and widgets aligned to the left"></iframe>

The following example horizontally aligns text within a column in the center:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=horizontal-alignment-center&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with columns and widgets horizontally aligned in the center"></iframe>

The following example horizontally aligns text within a column to the right:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=horizontal-alignment-end&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with columns and widgets aligned to the right"></iframe>

#### Define the vertical alignment of a column

You can align widgets vertically to the top, bottom, or center of a column by defining the [`verticalAlignment` field](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#verticalalignment). If the `verticalAlignment` field is undefined, widgets in a column are aligned to the top.

The following example vertically aligns text within a column to the top:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=vertical-alignment-top&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with columns and widgets aligned to the top"></iframe>

The following example vertically aligns text within a column in the center:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=vertical-alignment-center&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with columns and widgets aligned vertically to the center"></iframe>

The following example vertically aligns text within a column in the bottom:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=vertical-alignment-bottom&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with columns and widgets aligned to the bottom"></iframe>

### Add a grid to display a collection of items

The [`grid` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#grid) displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows.

The widget supports suggestions, which help users enter uniform data, and on-change actions, which are [`Actions`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Action) that run when a change occurs in the text input field, like a user adding or deleting text.

The following example is a 2 column grid with a single item:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=grid&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with grid"></iframe>

To define where text appears with an image in a grid, you can specify the [`gridItemLayout` field](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#griditemlayout). This field lets you define whether the text appears above or below the item in the grid. If `gridItemLayout` is undefined, the text defaults to appear below the item in the grid.

The following example is a three-column grid with text and an image in each grid. The first grid defines text to appear above the image, the second grid defines text to appear below the image, and the third grid doesn't define the position of the text.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=grid-item-layout&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with grid and position of text defined"></iframe>

### Add a border to a grid or column

For items that appear in a `column` or a `grid` widget, you can add a border to these UI elements by defining a [`borderType` field](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#borderType) and a [`borderStyle` field](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#borderstyle). If no `borderStyle` field is defined, it defaults to showing no border. You can define a `borderType` to apply to all items within a widget or apply the styling to each individual item within a widget.

The following example is a 2 column grid with an image in each grid where the border type, style, and color has been defined to apply to all items within the grid.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=border-style-all&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with images in a grid with a border"></iframe>

The following example is a 3 column grid with an image in each grid and the border style and type defined individually. The first image has a border defined as `STROKE`. The second image has a border defined as `NO_BORDER`. The third image has no border defined.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=border-type&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with images in a grid with different borders"></iframe>

### Add a carousel

The [`Carousel`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#carousel) widget shows a collection of [`CarouselCard`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#carouselcard) objects that can be scrolled on and off the screen. You can add multiple widgets to each `CarouselCard`.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=carousel&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="600px" width="90%" title="Card with carousel"></iframe>

## Add a persistent footer

The [`CardFixedFooter`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#cardfixedfooter) widget represents the footer of a dialog message sent by a Chat app. Footers can include a primary button and a secondary button.

The `CardFixedFooter` widget is only available for [dialogs](https://developers.google.com/workspace/chat/dialogs).

The following is an example of a `CardFixedFooter` widget with two buttons:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=card-footer&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with footer"></iframe>

## Troubleshoot

When a Google Chat app or [card](https://developers.google.com/workspace/chat/create-messages#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](https://developers.google.com/workspace/chat/troubleshoot).

## Related topics

- [Card headers](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#cardheader)
- [Card sections](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#section)
- [Card footers](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#cardfixedfooter)
