---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1
root: workspace
fetched_at: 2026-04-23T15:25:01.084Z
---

# Cards v1

## Page Summary

- Cards v1 is deprecated; use Cards v2 instead for creating interactive UI elements within Google Chat.
- Cards are UI elements that can contain widgets like text, images, and buttons, arranged within sections and headers.
- Widgets display content and actions, including text paragraphs, images, key-value pairs, and buttons with associated functionalities.
- Cards support interactive elements like buttons that can trigger actions such as opening links or invoking Apps Script functions.
- Developers can leverage formatted text and image styles to enhance the visual presentation of information within cards.

### Card

A card is a UI element that can contain UI widgets such as text and images.

JSON representation

```
{
  "header": {
    object (CardHeader)
  },
  "sections": [
    {
      object (Section)
    }
  ],
  "cardActions": [
    {
      object (CardAction)
    }
  ],
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>header</code></td><td><p><code>object (<code>CardHeader</code>)</code></p><p>The header of the card. A header usually contains a title and an image.</p></td></tr><tr><td><code>sections[]</code></td><td><p><code>object (<code>Section</code>)</code></p><p>Sections are separated by a line divider.</p></td></tr><tr><td><code>cardActions[]</code></td><td><p><code>object (<code>CardAction</code>)</code></p><p>The actions of this card.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the card.</p></td></tr></tbody></table>

### CardHeader

JSON representation

```
{
  "title": string,
  "subtitle": string,
  "imageStyle": enum (ImageStyle),
  "imageUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines.</p></td></tr><tr><td><code>subtitle</code></td><td><p><code>string</code></p><p>The subtitle of the card header.</p></td></tr><tr><td><code>imageStyle</code></td><td><p><code>enum (<code>ImageStyle</code>)</code></p><p>The image's type (for example, square border or circular border).</p></td></tr><tr><td><code>imageUrl</code></td><td><p><code>string</code></p><p>The URL of the image in the card header.</p></td></tr></tbody></table>

### ImageStyle

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>IMAGE_STYLE_UNSPECIFIED</code></td><td></td></tr><tr><td><code>IMAGE</code></td><td>Square border.</td></tr></tbody></table>

### Section

A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float).

JSON representation

```
{
  "header": string,
  "widgets": [
    {
      object (WidgetMarkup)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>header</code></td><td><p><code>string</code></p><p>The header of the section. Formatted text is supported. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>widgets[]</code></td><td><p><code>object (<code>WidgetMarkup</code>)</code></p><p>A section must contain at least one widget.</p></td></tr></tbody></table>

### WidgetMarkup

A widget is a UI element that presents text and images.

JSON representation

```
{
  "buttons": [
    {
      object (Button)
    }
  ],

  "textParagraph": {
    object (TextParagraph)
  },
  "image": {
    object (Image)
  },
  "keyValue": {
    object (KeyValue)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>buttons[]</code></td><td><p><code>object (<code>Button</code>)</code></p><p>A list of buttons. Buttons is also <code>oneof data</code> and only one of these fields should be set.</p></td></tr><tr><td colspan="2">Union field <code>data</code>. A <code>WidgetMarkup</code> can only have one of the following items. You can use multiple <code>WidgetMarkup</code> fields to display more items. <code>data</code> can be only one of the following:</td></tr><tr><td><code>textParagraph</code></td><td><p><code>object (<code>TextParagraph</code>)</code></p><p>Display a text paragraph in this widget.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>Display an image in this widget.</p></td></tr><tr><td><code>keyValue</code></td><td><p><code>object (<code>KeyValue</code>)</code></p><p>Display a key value item in this widget.</p></td></tr></tbody></table>

### TextParagraph

A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](../../../../format-messages.md#card-formatting) and [Formatting text in Google Workspace Add-ons](../../../../../add-ons/concepts/widgets.md#text_formatting).

JSON representation

```
{
  "text": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### Image

An image that's specified by a URL and can have an `onclick` action.

JSON representation

```
{
  "imageUrl": string,
  "onClick": {
    object (OnClick)
  },
  "aspectRatio": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>imageUrl</code></td><td><p><code>string</code></p><p>The URL of the image.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>The <code>onclick</code> action.</p></td></tr><tr><td><code>aspectRatio</code></td><td><p><code>number</code></p><p>The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image.</p></td></tr></tbody></table>

### OnClick

An `onclick` action (for example, open a link).

JSON representation

```
{

  "action": {
    object (FormAction)
  },
  "openLink": {
    object (OpenLink)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>data</code>.</p><p><code>data</code> can be only one of the following:</p></td></tr><tr><td><code>action</code></td><td><p><code>object (<code>FormAction</code>)</code></p><p>A form action is triggered by this <code>onclick</code> action if specified.</p></td></tr><tr><td><code>openLink</code></td><td><p><code>object (<code>OpenLink</code>)</code></p><p>This <code>onclick</code> action triggers an open link action if specified.</p></td></tr></tbody></table>

### FormAction

A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.

JSON representation

```
{
  "actionMethodName": string,
  "parameters": [
    {
      object (ActionParameter)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actionMethodName</code></td><td><p><code>string</code></p><p>The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior.</p></td></tr><tr><td><code>parameters[]</code></td><td><p><code>object (<code>ActionParameter</code>)</code></p><p>List of action parameters.</p></td></tr></tbody></table>

### ActionParameter

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters.

JSON representation

```
{
  "key": string,
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p><p>The name of the parameter for the action script.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value of the parameter.</p></td></tr></tbody></table>

### OpenLink

A link that opens a new window.

JSON representation

```
{
  "url": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>The URL to open.</p></td></tr></tbody></table>

### KeyValue

A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button.

JSON representation

```
{
  "topLabel": string,
  "content": string,
  "contentMultiline": boolean,
  "bottomLabel": string,
  "onClick": {
    object (OnClick)
  },

  "icon": enum (Icon),
  "iconUrl": string
  "button": {
    object (Button)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>topLabel</code></td><td><p><code>string</code></p><p>The text of the top label. Formatted text supported. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>content</code></td><td><p><code>string</code></p><p>The text of the content. Formatted text supported and always required. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>contentMultiline</code></td><td><p><code>boolean</code></p><p>If the content should be multiline.</p></td></tr><tr><td><code>bottomLabel</code></td><td><p><code>string</code></p><p>The text of the bottom label. Formatted text supported. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>The <code>onclick</code> action. Only the top label, bottom label, and content region are clickable.</p></td></tr><tr><td colspan="2">Union field <code>icons</code>. At least one of icons, <code>top_label</code> and <code>bottom_label</code> must be defined. <code>icons</code> can be only one of the following:</td></tr><tr><td><code>icon</code></td><td><p><code>enum (<code>Icon</code>)</code></p><p>An enum value that's replaced by the Chat API with the corresponding icon image.</p></td></tr><tr><td><code>iconUrl</code></td><td><p><code>string</code></p><p>The icon specified by a URL.</p></td></tr><tr><td colspan="2">Union field <code>control</code>. A control widget. You can set either <code>button</code> or <code>switch_widget</code>, but not both. <code>control</code> can be only one of the following:</td></tr><tr><td><code>button</code></td><td><p><code>object (<code>Button</code>)</code></p><p>A button that can be clicked to trigger an action.</p></td></tr></tbody></table>

### Icon

The set of supported icons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ICON_UNSPECIFIED</code></td><td></td></tr><tr><td><code>AIRPLANE</code></td><td></td></tr><tr><td><code>BOOKMARK</code></td><td></td></tr><tr><td><code>BUS</code></td><td></td></tr><tr><td><code>CAR</code></td><td></td></tr><tr><td><code>CLOCK</code></td><td></td></tr><tr><td><code>CONFIRMATION_NUMBER_ICON</code></td><td></td></tr><tr><td><code>DOLLAR</code></td><td></td></tr><tr><td><code>DESCRIPTION</code></td><td></td></tr><tr><td><code>EMAIL</code></td><td></td></tr><tr><td><code>EVENT_PERFORMER</code></td><td></td></tr><tr><td><code>EVENT_SEAT</code></td><td></td></tr><tr><td><code>FLIGHT_ARRIVAL</code></td><td></td></tr><tr><td><code>FLIGHT_DEPARTURE</code></td><td></td></tr><tr><td><code>HOTEL</code></td><td></td></tr><tr><td><code>HOTEL_ROOM_TYPE</code></td><td></td></tr><tr><td><code>INVITE</code></td><td></td></tr><tr><td><code>MAP_PIN</code></td><td></td></tr><tr><td><code>MEMBERSHIP</code></td><td></td></tr><tr><td><code>MULTIPLE_PEOPLE</code></td><td></td></tr><tr><td><code>OFFER</code></td><td></td></tr><tr><td><code>PERSON</code></td><td></td></tr><tr><td><code>PHONE</code></td><td></td></tr><tr><td><code>RESTAURANT_ICON</code></td><td></td></tr><tr><td><code>SHOPPING_CART</code></td><td></td></tr><tr><td><code>STAR</code></td><td></td></tr><tr><td><code>STORE</code></td><td></td></tr><tr><td><code>TICKET</code></td><td></td></tr><tr><td><code>TRAIN</code></td><td></td></tr><tr><td><code>VIDEO_CAMERA</code></td><td></td></tr><tr><td><code>VIDEO_PLAY</code></td><td></td></tr></tbody></table>

### Button

A button. Can be a text button or an image button.

JSON representation

```
{

  "textButton": {
    object (TextButton)
  },
  "imageButton": {
    object (ImageButton)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>type</code>.</p><p><code>type</code> can be only one of the following:</p></td></tr><tr><td><code>textButton</code></td><td><p><code>object (<code>TextButton</code>)</code></p><p>A button with text and <code>onclick</code> action.</p></td></tr><tr><td><code>imageButton</code></td><td><p><code>object (<code>ImageButton</code>)</code></p><p>A button with image and <code>onclick</code> action.</p></td></tr></tbody></table>

### TextButton

A button with text and `onclick` action.

JSON representation

```
{
  "text": string,
  "onClick": {
    object (OnClick)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text of the button.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>The <code>onclick</code> action of the button.</p></td></tr></tbody></table>

### ImageButton

An image button with an `onclick` action.

JSON representation

```
{
  "onClick": {
    object (OnClick)
  },
  "name": string,

  "icon": enum (Icon),
  "iconUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>The <code>onclick</code> action.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of this <code>imageButton</code> that's used for accessibility. Default value is provided if this name isn't specified.</p></td></tr><tr><td colspan="2">Union field <code>icons</code>. The icon can be specified by an <code>Icon</code> <code>enum</code> or a URL. <code>icons</code> can be only one of the following:</td></tr><tr><td><code>icon</code></td><td><p><code>enum (<code>Icon</code>)</code></p><p>The icon specified by an <code>enum</code> that indices to an icon provided by Chat API.</p></td></tr><tr><td><code>iconUrl</code></td><td><p><code>string</code></p><p>The icon specified by a URL.</p></td></tr></tbody></table>

### CardAction

A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.

Not supported by Google Chat apps.

JSON representation

```
{
  "actionLabel": string,
  "onClick": {
    object (OnClick)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actionLabel</code></td><td><p><code>string</code></p><p>The label used to be displayed in the action menu item.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>The onclick action for this action item.</p></td></tr></tbody></table>
