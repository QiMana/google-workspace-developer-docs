---
source: https://developers.google.com/workspace/chat/add-text-image-card-dialog
root: workspace
fetched_at: 2026-04-23T15:24:58.490Z
---

# Add text and images to cards

## Page Summary

- This page guides you on adding and formatting text and images within Google Chat cards to enhance their visual appeal and interactivity.
- You can incorporate images, icons, and formatted text paragraphs using various widgets and HTML formatting options.
- Learn how to use `Image`, `imageComponent`, `Icon`, `TextParagraph`, and `DecoratedText` widgets to build engaging cards.
- Leverage built-in or custom icons, apply cropping and border styles to images, and add interactive elements like buttons or hyperlinks.
- Refer to the troubleshooting section for assistance if you encounter any errors while implementing these features.

This page explains how to add and format text and images to cards.

To learn more about building cards, see [Build cards for Google Chat apps](https://developers.google.com/workspace/chat/design-components-card-dialog).

---

Use the Card Builder to design and preview messaging and user interfaces for Chat apps:

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

---

## Prerequisites

A Google Chat app that's configured to receive and respond to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app, complete one of the following quickstarts based on the [app architecture](https://developers.google.com/workspace/chat/structure) that you want to use:

- [HTTP service](https://developers.google.com/workspace/chat/quickstart/gcf-app) with Google Cloud Functions
- [Google Apps Script](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [Google Cloud Dialogflow CX](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- [Google Cloud Pub/Sub](https://developers.google.com/workspace/chat/quickstart/pub-sub)

## Add images or icons

This section explains how to add visual elements to cards such as images, image components, and icons.

### Add an image

[`Image` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#image) displays a PNG or JPG image hosted on an HTTPS URL. The displayed image's width fills the entire width of the displayed card, and its height adjusts to maintain the image's aspect ratio. The `Image` widget supports [`onclick` actions](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#OnClick_1) that occur when users click the image. Example of `onclick` actions include:

- Open a hyperlink with [`OpenLink`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#OpenLink_1), such as a hyperlink to the Google Chat developer documentation, `https://developers.google.com/chat`.
- Run an [action](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#action) that runs a custom function, like calling an API.

The `Image` widget has the following limitations:

- Only PNG and JPG images are supported.
- The host URL must be `HTTPS`.
- To ensure performant cards, maximum recommended image size is 2MB.

The following is a card consisting of an `Image` widget. It displays the Google Chat developer documentation landing page image. When users click the image, the Google Chat developer documentation opens in a new tab.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=image&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with image"></iframe>

### Add an image component

The `Image` widget is an image with limited styling. An [`imageCompent` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#imagecomponent) lets you apply `cropStyle` and `borderStyle` to an image.

The following example shows two images in a grid where one of the images is cropped:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=image-crop-style&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with image component"></iframe>

You can adjust the shape of an image component by applying a [`cropStyle`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#imagecropstyle). There are several shapes to apply to an image:

- Use `SQUARE` to apply a square crop.
- Use `CIRCLE` to apply a circular crop.
- Use `RECTANGLE_CUSTOM` to apply a rectangular crop with a custom aspect ratio. For example, you can use `RECTANGLE_4_3` to apply a rectangular crop with a 4:3 aspect ratio.

The following example shows five images in a grid with a different `cropStyle` applied to each image:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=image-crop-type&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with image component"></iframe>

### Add an icon

The [`Icon` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textparagraph) represents either a [built-in](https://developers.google.com/workspace/chat/format-messages#builtinicons) icon or [custom](https://developers.google.com/workspace/chat/format-messages#customicons) icon. You add icons to cards to do any of the following:

- Display a standalone icon.
- Display an icon in front of related text, as part of a [`DecoratedText`](https://developers.google.com/workspace/chat/decorated-text) widget.
- Display an icon as an interactive button, as part of a [`ButtonList`](https://developers.google.com/workspace/chat/button-list) widget.

The following is a card consisting of an `Icon` component with a built-in icon:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=icon&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with icon"></iframe>

The following table lists the built-in icons that are available for card messages:

|  | **AIRPLANE** |  | **BOOKMARK** |
| --- | --- | --- | --- |
|  | **BUS** |  | **CAR** |
|  | **CLOCK** |  | **CONFIRMATION\_NUMBER\_ICON** |
|  | **DESCRIPTION** |  | **DOLLAR** |
|  | **EMAIL** |  | **EVENT\_SEAT** |
|  | **FLIGHT\_ARRIVAL** |  | **FLIGHT\_DEPARTURE** |
|  | **HOTEL** |  | **HOTEL\_ROOM\_TYPE** |
|  | **INVITE** |  | **MAP\_PIN** |
|  | **MEMBERSHIP** |  | **MULTIPLE\_PEOPLE** |
|  | **PERSON** |  | **PHONE** |
|  | **RESTAURANT\_ICON** |  | **SHOPPING\_CART** |
|  | **STAR** |  | **STORE** |
|  | **TICKET** |  | **TRAIN** |
|  | **VIDEO\_CAMERA** |  | **VIDEO\_PLAY** |

## Add text to a card

This section explains how to add and format text in a card.

### Add a paragraph of formatted text

The [`TextParagraph` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textparagraph) displays a paragraph of text with optional HTML formatting. When setting the text content of these widgets, just include the corresponding HTML tags. For more information about which HTML tags are supported, see [Format text that appears in cards](https://developers.google.com/workspace/chat/format-messages#card-formatting).

For example, the following formatting is available for paragraph text:

- Display bold, underlined, or italicized text with HTML `<b>`, `<u>`, `<i>` tags.
- Link to websites with HTML `<a href="https://www.google.com">hyperlinks</a>`.
- Add some color with HTML `<font color="#ea9999">font tags</font>`.

Each `TextParagraph` widget renders as a new paragraph, and can be thought of as similar to an HTML `<p>` tag.

The following is a card consisting of two `TextParagraph` widgets used to display two paragraphs with simple HTML formatting:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=text-paragraph&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card displaying a paragraph of text"></iframe>

#### Add a collapsible text paragraph

The collapsible text paragraphs let users reveal more information on demand. This widget is perfect for presenting lengthy content or additional details that can be explored when selected, creating a dynamic and interactive user experience.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=text-paragraph-collapsible&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with a collapsible text paragraph"></iframe>

### Display text with decorative elements

The [`DecoratedText` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#DecoratedText) displays text with optional layout and capabilities. For example:

- Display an `icon` in front of the text with `startIcon`.
- Show a title before the text with `topLabel`.
- Add a clickable button with `button` or switchable toggle with `switchControl`.

Use the `DecoratedText` widget when you need to present information in an easy-to-consume and interactive way. The widget is perfect for use cases such as contact cards, order status updates, and work ticket notifications.

The `DecoratedText` widget supports simple text HTML formatting. When setting the text content of these widgets, just include the corresponding HTML tags. For more information about which HTML tags are supported, see [Card text formatting](https://developers.google.com/workspace/chat/format-messages#view_text_formatting_sent_in_a_message).

The following is a card consisting of a `DecoratedText` widget used to display contact details, such as email address, online status, phone number, and website:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=decorated-text&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with decorated text"></iframe>

## Troubleshoot

When a Google Chat app or [card](https://developers.google.com/workspace/chat/create-messages#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](https://developers.google.com/workspace/chat/troubleshoot).

## Related topics

- [View Chat app samples](https://developers.google.com/workspace/chat/samples) that use cards.
- [`Image`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#image)
- [`imageCompent`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#imagecomponent)
- [`cropStyle`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#imagecropstyle)
- [`Icon`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textparagraph)
- [`TextParagraph`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textparagraph)
- [`DecoratedText`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#DecoratedText)
