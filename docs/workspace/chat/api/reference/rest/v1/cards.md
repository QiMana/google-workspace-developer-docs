---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/cards
root: workspace
fetched_at: 2026-04-23T15:25:03.795Z
---

# Cards v2

## Page Summary

- Cards are UI elements in Google Chat and Workspace Add-ons used to present information and guide user actions through interactive components.
- Developers can utilize various widgets like text paragraphs, images, buttons, and input fields to build rich and interactive cards.
- Cards are structured using JSON, defining the layout, components, and actions associated with each element.
- Resources like the Card Builder and design guidelines are available to aid in card development for both Google Chat and Workspace Add-ons.
- Cards support a wide range of functionalities, including data input, dynamic content updates, and triggering server-side actions.

### Card

A card interface displayed in a Google Chat message or Google Workspace add-on.

Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step.

Design and preview cards with the Card Builder.

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

To learn how to build cards, see the following documentation:

- For Google Chat apps, see [Design the components of a card or dialog](https://developers.google.com/workspace/chat/design-components-card-dialog).
- For Google Workspace add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards).

Note: You can add up to 100 widgets per card. If a section's widgets push the total count above 100, that entire section and all following sections are ignored. This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.

**Example: Card message for a Google Chat app**

![Example contact card](https://developers.google.com/workspace/chat/images/card_api_reference.png)

To create the sample card message in Google Chat, use the following JSON:

```
{
  "cardsV2": [
    {
      "cardId": "unique-card-id",
      "card": {
        "header": {
           "title": "Sasha",
           "subtitle": "Software Engineer",
           "imageUrl":
           "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png",
           "imageType": "CIRCLE",
           "imageAltText": "Avatar for Sasha"
         },
         "sections": [
           {
             "header": "Contact Info",
             "collapsible": true,
             "uncollapsibleWidgetsCount": 1,
             "widgets": [
               {
                 "decoratedText": {
                   "startIcon": {
                     "knownIcon": "EMAIL"
                   },
                   "text": "sasha@example.com"
                 }
               },
               {
                 "decoratedText": {
                   "startIcon": {
                     "knownIcon": "PERSON"
                   },
                   "text": "<font color=\"#80e27e\">Online</font>"
                 }
               },
               {
                 "decoratedText": {
                   "startIcon": {
                     "knownIcon": "PHONE"
                   },
                   "text": "+1 (555) 555-1234"
                 }
               },
               {
                 "buttonList": {
                   "buttons": [
                     {
                       "text": "Share",
                       "onClick": {
                        "openLink": {
                           "url": "https://example.com/share"
                         }
                       }
                     },
                     {
                       "text": "Edit",
                       "onClick": {
                         "action": {
                           "function": "goToView",
                           "parameters": [
                             {
                               "key": "viewType",
                               "value": "EDIT"
                             }
                           ]
                         }
                       }
                     }
                   ]
                 }
               }
             ]
           }
         ]
       }
    }
  ]
}
```

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
  "sectionDividerStyle": enum (DividerStyle),
  "cardActions": [
    {
      object (CardAction)
    }
  ],
  "name": string,
  "fixedFooter": {
    object (CardFixedFooter)
  },
  "displayStyle": enum (DisplayStyle),
  "peekCardHeader": {
    object (CardHeader)
  },
  "expressionData": [
    {
      object (ExpressionData)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>header</code></td><td><p><code>object (<code>CardHeader</code>)</code></p><p>The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.</p></td></tr><tr><td><code>sections[]</code></td><td><p><code>object (<code>Section</code>)</code></p><p>Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see <a href="https://developers.google.com/workspace/chat/design-components-card-dialog#define_a_section_of_a_card">Define a section of a card</a>.</p></td></tr><tr><td><code>sectionDividerStyle</code></td><td><p><code>enum (<code>DividerStyle</code>)</code></p><p>The divider style between the header, sections and footer.</p></td></tr><tr><td><code>cardActions[]</code></td><td><p><code>object (<code>CardAction</code>)</code></p><p>The card's actions. Actions are added to the card's toolbar menu.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p><p>For example, the following JSON constructs a card action menu with <code>Settings</code> and <code>Send Feedback</code> options:</p><div><pre><code>"cardActions": [
  {
    "actionLabel": "Settings",
    "onClick": {
      "action": {
        "functionName": "goToView",
        "parameters": [
          {
            "key": "viewType",
            "value": "SETTING"
         }
        ],
        "loadIndicator": "LoadIndicator.SPINNER"
      }
    }
  },
  {
    "actionLabel": "Send Feedback",
    "onClick": {
      "openLink": {
        "url": "https://example.com/feedback"
      }
    }
  }
]</code></pre></div></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the card. Used as a card identifier in card navigation.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr><tr><td><code>displayStyle</code></td><td><p><code>enum (<code>DisplayStyle</code>)</code></p><p>In Google Workspace add-ons, sets the display properties of the <code>peekCardHeader</code>.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr><tr><td><code>peekCardHeader</code></td><td><p><code>object (<code>CardHeader</code>)</code></p><p>When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr><tr><td><code>expressionData[]</code></td><td><p><code>object (<code>ExpressionData</code>)</code></p><p>The expression data for the card.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr></tbody></table>

### CardHeader

Represents a card header. For an example in Google Chat apps, see [Add a header](https://developers.google.com/workspace/chat/design-components-card-dialog#add_a_header).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "title": string,
  "subtitle": string,
  "imageType": enum (ImageType),
  "imageUrl": string,
  "imageAltText": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.</p></td></tr><tr><td><code>subtitle</code></td><td><p><code>string</code></p><p>The subtitle of the card header. If specified, appears on its own line below the <code>title</code>.</p></td></tr><tr><td><code>imageType</code></td><td><p><code>enum (<code>ImageType</code>)</code></p><p>The shape used to crop the image.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr><tr><td><code>imageUrl</code></td><td><p><code>string</code></p><p>The HTTPS URL of the image in the card header.</p></td></tr><tr><td><code>imageAltText</code></td><td><p><code>string</code></p><p>The alternative text of this image that's used for accessibility.</p></td></tr></tbody></table>

### ImageType

The shape used to crop the image.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SQUARE</code></td><td>Default value. Applies a square mask to the image. For example, a 4x3 image becomes 3x3.</td></tr><tr><td><code>CIRCLE</code></td><td>Applies a circular mask to the image. For example, a 4x3 image becomes a circle with a diameter of 3.</td></tr></tbody></table>

### Section

A section contains a collection of widgets that are rendered vertically in the order that they're specified.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "header": string,
  "widgets": [
    {
      object (Widget)
    }
  ],
  "collapsible": boolean,
  "uncollapsibleWidgetsCount": integer,
  "id": string,
  "collapseControl": {
    object (CollapseControl)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>header</code></td><td><p><code>string</code></p><p>Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace add-ons</a>.</p></td></tr><tr><td><code>widgets[]</code></td><td><p><code>object (<code>Widget</code>)</code></p><p>All the widgets in the section. Must contain at least one widget.</p></td></tr><tr><td><code>collapsible</code></td><td><p><code>boolean</code></p><p>Indicates whether this section is collapsible.</p><p>Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking <strong>Show more</strong>. Users can hide the widgets again by clicking <strong>Show less</strong>.</p><p>To determine which widgets are hidden, specify <code>uncollapsibleWidgetsCount</code>.</p></td></tr><tr><td><code>uncollapsibleWidgetsCount</code></td><td><p><code>integer</code></p><p>The number of uncollapsible widgets which remain visible even when a section is collapsed.</p><p>For example, when a section contains five widgets and the <code>uncollapsibleWidgetsCount</code> is set to <code>2</code>, the first two widgets are always shown and the last three are collapsed by default. The <code>uncollapsibleWidgetsCount</code> is taken into account only when <code>collapsible</code> is <code>true</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>A unique ID assigned to the section that's used to identify the section to be mutated. The ID has a character limit of 64 characters and should be in the format of <code>[a-zA-Z0-9-]+</code>.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr><tr><td><code>collapseControl</code></td><td><p><code>object (<code>CollapseControl</code>)</code></p><p>Optional. Define the expand and collapse button of the section. This button will be shown only if the section is collapsible. If this field isn't set, the default button is used.</p></td></tr></tbody></table>

### Widget

Each card is made up of widgets.

A widget is a composite object that can represent one of text, images, buttons, and other object types.

JSON representation

```
{
  "horizontalAlignment": enum (HorizontalAlignment),
  "id": string,
  "visibility": enum (Visibility),
  "eventActions": [
    {
      object (EventAction)
    }
  ],

  "textParagraph": {
    object (TextParagraph)
  },
  "image": {
    object (Image)
  },
  "decoratedText": {
    object (DecoratedText)
  },
  "buttonList": {
    object (ButtonList)
  },
  "textInput": {
    object (TextInput)
  },
  "selectionInput": {
    object (SelectionInput)
  },
  "dateTimePicker": {
    object (DateTimePicker)
  },
  "divider": {
    object (Divider)
  },
  "grid": {
    object (Grid)
  },
  "columns": {
    object (Columns)
  },
  "carousel": {
    object (Carousel)
  },
  "chipList": {
    object (ChipList)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>horizontalAlignment</code></td><td><p><code>enum (<code>HorizontalAlignment</code>)</code></p><p>Specifies whether widgets align to the left, right, or center of a column.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>A unique ID assigned to the widget that's used to identify the widget to be mutated. The ID has a character limit of 64 characters and should be in the format of <code>[a-zA-Z0-9-]+</code> and.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr><tr><td><code>visibility</code></td><td><p><code>enum (<code>Visibility</code>)</code></p><p>Specifies whether the widget is visible or hidden. The default value is <code>VISIBLE</code>.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr><tr><td><code>eventActions[]</code></td><td><p><code>object (<code>EventAction</code>)</code></p><p>Specifies the event actions that can be performed on the widget.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr><tr><td colspan="2">Union field <code>data</code>. A widget can only have one of the following items. You can use multiple widget fields to display more items. <code>data</code> can be only one of the following:</td></tr><tr><td><code>textParagraph</code></td><td><p><code>object (<code>TextParagraph</code>)</code></p><p>Displays a text paragraph. Supports simple HTML formatted text. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace add-ons</a>.</p><p>For example, the following JSON creates a bolded text:</p><div><pre><code>"textParagraph": {
  "text": "  <b>bold text</b>"
}</code></pre></div></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>Displays an image.</p><p>For example, the following JSON creates an image with alternative text:</p><div><pre><code>"image": {
  "imageUrl":
  "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png",
  "altText": "Chat app avatar"
}</code></pre></div></td></tr><tr><td><code>decoratedText</code></td><td><p><code>object (<code>DecoratedText</code>)</code></p><p>Displays a decorated text item.</p><p>For example, the following JSON creates a decorated text widget showing email address:</p><div><pre><code>"decoratedText": {
  "icon": {
    "knownIcon": "EMAIL"
  },
  "topLabel": "Email Address",
  "text": "sasha@example.com",
  "bottomLabel": "This is a new Email address!",
  "switchControl": {
    "name": "has_send_welcome_email_to_sasha",
    "selected": false,
    "controlType": "CHECKBOX"
  }
}</code></pre></div></td></tr><tr><td><code>buttonList</code></td><td><p><code>object (<code>ButtonList</code>)</code></p><p>A list of buttons.</p><p>For example, the following JSON creates two buttons. The first is a blue text button and the second is an image button that opens a link:</p><div><pre><code>"buttonList": {
  "buttons": [
    {
      "text": "Edit",
      "color": {
        "red": 0,
        "green": 0,
        "blue": 1,
      },
      "disabled": true,
    },
    {
      "icon": {
        "knownIcon": "INVITE",
        "altText": "check calendar"
      },
      "onClick": {
        "openLink": {
          "url": "https://example.com/calendar"
        }
      }
    }
  ]
}</code></pre></div></td></tr><tr><td><code>textInput</code></td><td><p><code>object (<code>TextInput</code>)</code></p><p>Displays a text box that users can type into.</p><p>For example, the following JSON creates a text input for an email address:</p><div><pre><code>"textInput": {
  "name": "mailing_address",
  "label": "Mailing Address"
}</code></pre></div><p>As another example, the following JSON creates a text input for a programming language with static suggestions:</p><div><pre><code>"textInput": {
  "name": "preferred_programing_language",
  "label": "Preferred Language",
  "initialSuggestions": {
    "items": [
      {
        "text": "C++"
      },
      {
        "text": "Java"
      },
      {
        "text": "JavaScript"
      },
      {
        "text": "Python"
      }
    ]
  }
}</code></pre></div></td></tr><tr><td><code>selectionInput</code></td><td><p><code>object (<code>SelectionInput</code>)</code></p><p>Displays a selection control that lets users select items. Selection controls can be checkboxes, radio buttons, switches, or dropdown menus.</p><p>For example, the following JSON creates a dropdown menu that lets users choose a size:</p><div><pre><code>"selectionInput": {
  "name": "size",
  "label": "Size"
  "type": "DROPDOWN",
  "items": [
    {
      "text": "S",
      "value": "small",
      "selected": false
    },
    {
      "text": "M",
      "value": "medium",
      "selected": true
    },
    {
      "text": "L",
      "value": "large",
      "selected": false
    },
    {
      "text": "XL",
      "value": "extra_large",
      "selected": false
    }
  ]
}</code></pre></div></td></tr><tr><td><code>dateTimePicker</code></td><td><p><code>object (<code>DateTimePicker</code>)</code></p><p>Displays a widget that lets users input a date, time, or date and time.</p><p>For example, the following JSON creates a date time picker to schedule an appointment:</p><div><pre><code>"dateTimePicker": {
  "name": "appointment_time",
  "label": "Book your appointment at:",
  "type": "DATE_AND_TIME",
  "valueMsEpoch": 796435200000
}</code></pre></div></td></tr><tr><td><code>divider</code></td><td><p><code>object (<code>Divider</code>)</code></p><p>Displays a horizontal line divider between widgets.</p><p>For example, the following JSON creates a divider:</p><div><pre><code>"divider": {
}</code></pre></div></td></tr><tr><td><code>grid</code></td><td><p><code>object (<code>Grid</code>)</code></p><p>Displays a grid with a collection of items.</p><p>A grid supports any number of columns and items. The number of rows is determined by the upper bounds of the number items divided by the number of columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p><p>For example, the following JSON creates a 2 column grid with a single item:</p><div><pre><code>"grid": {
  "title": "A fine collection of items",
  "columnCount": 2,
  "borderStyle": {
    "type": "STROKE",
    "cornerRadius": 4
  },
  "items": [
    {
      "image": {
        "imageUri": "https://www.example.com/image.png",
        "cropStyle": {
          "type": "SQUARE"
        },
        "borderStyle": {
          "type": "STROKE"
        }
      },
      "title": "An item",
      "textAlignment": "CENTER"
    }
  ],
  "onClick": {
    "openLink": {
      "url": "https://www.example.com"
    }
  }
}</code></pre></div></td></tr><tr><td><code>columns</code></td><td><p><code>object (<code>Columns</code>)</code></p><p>Displays up to 2 columns.</p><p>To include more than 2 columns, or to use rows, use the <code>Grid</code> widget.</p><p>For example, the following JSON creates 2 columns that each contain text paragraphs:</p><div><pre><code>"columns": {
  "columnItems": [
    {
      "horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
      "horizontalAlignment": "CENTER",
      "verticalAlignment": "CENTER",
      "widgets": [
        {
          "textParagraph": {
            "text": "First column text paragraph"
          }
        }
      ]
    },
    {
      "horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
      "horizontalAlignment": "CENTER",
      "verticalAlignment": "CENTER",
      "widgets": [
        {
          "textParagraph": {
            "text": "Second column text paragraph"
          }
        }
      ]
    }
  ]
}</code></pre></div></td></tr><tr><td><code>carousel</code></td><td><p><code>object (<code>Carousel</code>)</code></p><p>A carousel contains a collection of nested widgets. For example, this is a JSON representation of a carousel that contains two text paragraphs.</p><div><pre><code>{
  "widgets": [
    {
      "textParagraph": {
        "text": "First text paragraph in the carousel."
      }
    },
    {
      "textParagraph": {
        "text": "Second text paragraph in the carousel."
      }
    }
  ]
}</code></pre></div></td></tr><tr><td><code>chipList</code></td><td><p><code>object (<code>ChipList</code>)</code></p><p>A list of chips.</p><p>For example, the following JSON creates two chips. The first is a text chip and the second is an icon chip that opens a link:</p><div><pre><code>"chipList": {
  "chips": [
    {
      "text": "Edit",
      "disabled": true,
    },
    {
      "icon": {
        "knownIcon": "INVITE",
        "altText": "check calendar"
      },
      "onClick": {
        "openLink": {
          "url": "https://example.com/calendar"
        }
      }
    }
  ]
}</code></pre></div></td></tr></tbody></table>

### TextParagraph

A paragraph of text that supports formatting. For an example in Google Chat apps, see [Add a paragraph of formatted text](https://developers.google.com/workspace/chat/add-text-image-card-dialog#add_a_paragraph_of_formatted_text). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "text": string,
  "maxLines": integer,
  "textSyntax": enum (TextSyntax)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text that's shown in the widget.</p></td></tr><tr><td><code>maxLines</code></td><td><p><code>integer</code></p><p>The maximum number of lines of text that are displayed in the widget. If the text exceeds the specified maximum number of lines, the excess content is concealed behind a <strong>show more</strong> button. If the text is equal or shorter than the specified maximum number of lines, a <strong>show more</strong> button isn't displayed.</p><p>The default value is 0, in which case all context is displayed. Negative values are ignored.</p></td></tr><tr><td><code>textSyntax</code></td><td><p><code>enum (<code>TextSyntax</code>)</code></p><p>The syntax of the text. If not set, the text is rendered as HTML.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons.</p></td></tr></tbody></table>

### TextSyntax

Syntax to use for formatting text.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TEXT_SYNTAX_UNSPECIFIED</code></td><td>The text is rendered as HTML if unspecified.</td></tr><tr><td><code>HTML</code></td><td>The text is rendered as HTML. This is the default value.</td></tr><tr><td><code>MARKDOWN</code></td><td>The text is rendered as Markdown.</td></tr></tbody></table>

### Image

An image that is specified by a URL and can have an `onClick` action. For an example, see [Add an image](https://developers.google.com/workspace/chat/add-text-image-card-dialog#add_an_image).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "imageUrl": string,
  "onClick": {
    object (OnClick)
  },
  "altText": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>imageUrl</code></td><td><p><code>string</code></p><p>The HTTPS URL that hosts the image.</p><p>For example:</p><div><pre><code>https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png</code></pre></div></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>When a user clicks the image, the click triggers this action.</p></td></tr><tr><td><code>altText</code></td><td><p><code>string</code></p><p>The alternative text of this image that's used for accessibility.</p></td></tr></tbody></table>

### OnClick

Represents how to respond when users click an interactive element on a card, such as a button.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{

  "action": {
    object (Action)
  },
  "openLink": {
    object (OpenLink)
  },
  "openDynamicLinkAction": {
    object (Action)
  },
  "card": {
    object (Card)
  },
  "overflowMenu": {
    object (OverflowMenu)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>data</code>.</p><p><code>data</code> can be only one of the following:</p></td></tr><tr><td><code>action</code></td><td><p><code>object (<code>Action</code>)</code></p><p>If specified, an action is triggered by this <code>onClick</code>.</p></td></tr><tr><td><code>openLink</code></td><td><p><code>object (<code>OpenLink</code>)</code></p><p>If specified, this <code>onClick</code> triggers an open link action.</p></td></tr><tr><td><code>openDynamicLinkAction</code></td><td><p><code>object (<code>Action</code>)</code></p><p>An add-on triggers this action when the action needs to open a link. This differs from the <code>openLink</code> above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr><tr><td><code>card</code></td><td><p><code>object (<code>Card</code>)</code></p><p>A new card is pushed to the card stack after clicking if specified.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr><tr><td><code>overflowMenu</code></td><td><p><code>object (<code>OverflowMenu</code>)</code></p><p>If specified, this <code>onClick</code> opens an overflow menu.</p></td></tr></tbody></table>

### Action

An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "function": string,
  "parameters": [
    {
      object (ActionParameter)
    }
  ],
  "loadIndicator": enum (LoadIndicator),
  "persistValues": boolean,
  "interaction": enum (Interaction),
  "requiredWidgets": [
    string
  ],
  "allWidgetsAreRequired": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>function</code></td><td><p><code>string</code></p><p>A custom function to invoke when the containing element is clicked or otherwise activated.</p><p>For example usage, see <a href="https://developers.google.com/workspace/chat/read-form-data">Read form data</a>.</p></td></tr><tr><td><code>parameters[]</code></td><td><p><code>object (<code>ActionParameter</code>)</code></p><p>List of action parameters.</p></td></tr><tr><td><code>loadIndicator</code></td><td><p><code>enum (<code>LoadIndicator</code>)</code></p><p>Specifies the loading indicator that the action displays while making the call to the action.</p></td></tr><tr><td><code>persistValues</code></td><td><p><code>boolean</code></p><p>Indicates whether form values persist after the action. The default value is <code>false</code>.</p><p>If <code>true</code>, form values remain after the action is triggered. To let the user make changes while the action is being processed, set <a href="https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator"><code>LoadIndicator</code></a> to <code>NONE</code>. For <a href="https://developers.google.com/workspace/chat/api/guides/v1/messages/create#create">card messages</a> in Chat apps, you must also set the action's <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#responsetype"><code>ResponseType</code></a> to <code>UPDATE_MESSAGE</code> and use the same <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#CardWithId"><code>cardId</code></a> from the card that contained the action.</p><p>If <code>false</code>, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set <a href="https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator"><code>LoadIndicator</code></a> to <code>SPINNER</code>.</p></td></tr><tr><td><code>requiredWidgets[]</code></td><td><p><code>string</code></p><p>Optional. Fill this list with the names of widgets that this Action needs for a valid submission.</p><p>If the widgets listed here don't have a value when this Action is invoked, the form submission is aborted.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr><tr><td><code>allWidgetsAreRequired</code></td><td><p><code>boolean</code></p><p>Optional. If this is true, then all widgets are considered required by this action.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr></tbody></table>

### ActionParameter

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters.

To learn more, see [`CommonEventObject`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#commoneventobject).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "key": string,
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p><p>The name of the parameter for the action script.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value of the parameter.</p></td></tr></tbody></table>

### LoadIndicator

Specifies the loading indicator that the action displays while making the call to the action.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPINNER</code></td><td>Displays a spinner to indicate that content is loading.</td></tr><tr><td><code>NONE</code></td><td>Nothing is displayed.</td></tr></tbody></table>

### OpenLink

Represents an `onClick` event that opens a hyperlink.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "url": string,
  "openAs": enum (OpenAs),
  "onClose": enum (OnClose)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>The URL to open. HTTP URLs are converted to HTTPS.</p></td></tr><tr><td><code>openAs</code></td><td><p><code>enum (<code>OpenAs</code>)</code></p><p>How to open a link.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr><tr><td><code>onClose</code></td><td><p><code>enum (<code>OnClose</code>)</code></p><p>Whether the client forgets about a link after opening it, or observes it until the window closes.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr></tbody></table>

### OpenAs

When an `OnClick` action opens a link, then the client can either open it as a full-size window (if that's the frame used by the client), or an overlay (such as a pop-up). The implementation depends on the client platform capabilities, and the value selected might be ignored if the client doesn't support it. `FULL_SIZE` is supported by all clients.

![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Workspace add-ons and unavailable for Google Chat apps.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>FULL_SIZE</code></td><td>The link opens as a full-size window (if that's the frame used by the client).</td></tr><tr><td><code>OVERLAY</code></td><td>The link opens as an overlay, such as a pop-up.</td></tr></tbody></table>

### OnClose

What the client does when a link opened by an `OnClick` action is closed.

Implementation depends on client platform capabilities. For example, a web browser might open a link in a pop-up window with an `OnClose` handler.

If both `OnOpen` and `OnClose` handlers are set, and the client platform can't support both values, `OnClose` takes precedence.

![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Workspace add-ons and unavailable for Google Chat apps.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NOTHING</code></td><td>Default value. The card doesn't reload; nothing happens.</td></tr><tr><td><code>RELOAD</code></td><td><p>Reloads the card after the child window closes.</p><p>If used in conjunction with <a href="https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#openas"><code>OpenAs.OVERLAY</code></a>, the child window acts as a modal dialog and the parent card is blocked until the child window closes.</p></td></tr></tbody></table>

### OverflowMenu

A widget that presents a pop-up menu with one or more actions that users can invoke. For example, showing non-primary actions in a card. You can use this widget when actions don't fit in the available space. To use, specify this widget in the `OnClick` action of widgets that support it. For example, in a `Button`.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "items": [
    {
      object (OverflowMenuItem)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p><code>object (<code>OverflowMenuItem</code>)</code></p><p>Required. The list of menu options.</p></td></tr></tbody></table>

### OverflowMenuItem

An option that users can invoke in an overflow menu.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "startIcon": {
    object (Icon)
  },
  "text": string,
  "onClick": {
    object (OnClick)
  },
  "disabled": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIcon</code></td><td><p><code>object (<code>Icon</code>)</code></p><p>The icon displayed in front of the text.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Required. The text that identifies or describes the item to users.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>Required. The action invoked when a menu option is selected. This <code>OnClick</code> cannot contain an <code>OverflowMenu</code>, any specified <code>OverflowMenu</code> is dropped and the menu item disabled.</p></td></tr><tr><td><code>disabled</code></td><td><p><code>boolean</code></p><p>Whether the menu option is disabled. Defaults to false.</p></td></tr></tbody></table>

### Icon

An icon displayed in a widget on a card. For an example in Google Chat apps, see [Add an icon](https://developers.google.com/workspace/chat/add-text-image-card-dialog#add_an_icon).

Supports [built-in](https://developers.google.com/workspace/chat/format-messages#builtinicons) and [custom](https://developers.google.com/workspace/chat/format-messages#customicons) icons.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "altText": string,
  "imageType": enum (ImageType),

  "knownIcon": string,
  "iconUrl": string,
  "materialIcon": {
    object (MaterialIcon)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>altText</code></td><td><p><code>string</code></p><p>Optional. A description of the icon used for accessibility. If unspecified, the default value <code>Button</code> is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, <code>A user's account portrait</code>, or <code>Opens a new browser tab and navigates to the Google Chat developer
                    documentation at https://developers.google.com/workspace/chat</code>.</p><p>If the icon is set in a <code><code>Button</code></code>, the <code>altText</code> appears as helper text when the user hovers over the button. However, if the button also sets <code>text</code>, the icon's <code>altText</code> is ignored.</p></td></tr><tr><td><code>imageType</code></td><td><p><code>enum (<code>ImageType</code>)</code></p><p>The crop style applied to the image. In some cases, applying a <code>CIRCLE</code> crop causes the image to be drawn larger than a built-in icon.</p></td></tr><tr><td colspan="2">Union field <code>icons</code>. The icon displayed in the widget on the card. <code>icons</code> can be only one of the following:</td></tr><tr><td><code>knownIcon</code></td><td><p><code>string</code></p><p>Display one of the built-in icons provided by Google Workspace.</p><p>For example, to display an airplane icon, specify <code>AIRPLANE</code>. For a bus, specify <code>BUS</code>.</p><p>For a full list of supported icons, see <a href="https://developers.google.com/workspace/chat/format-messages#builtinicons">built-in icons</a>.</p></td></tr><tr><td><code>iconUrl</code></td><td><p><code>string</code></p><p>Display a custom icon hosted at an HTTPS URL.</p><p>For example:</p><div><pre><code>"iconUrl":
"https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png"</code></pre></div><p>Supported file types include <code>.png</code> and <code>.jpg</code>.</p></td></tr><tr><td><code>materialIcon</code></td><td><p><code>object (<code>MaterialIcon</code>)</code></p><p>Display one of the <a href="https://fonts.google.com/icons">Google Material Icons</a>.</p><p>For example, to display a <a href="https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck_box%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048">checkbox icon</a>, use</p><div><pre><code>"materialIcon": {
  "name": "check_box"
}</code></pre></div><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons.</p></td></tr></tbody></table>

### MaterialIcon

A [Google Material Icon](https://fonts.google.com/icons), which includes over 2500+ options.

For example, to display a [checkbox icon](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck_box%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048) with customized weight and grade, write the following:

```
{
  "name": "check_box",
  "fill": true,
  "weight": 300,
  "grade": -25
}
```

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

JSON representation

```
{
  "name": string,
  "fill": boolean,
  "weight": integer,
  "grade": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The icon name defined in the <a href="https://fonts.google.com/icons">Google Material Icon</a>, for example, <code>check_box</code>. Any invalid names are abandoned and replaced with empty string and results in the icon failing to render.</p></td></tr><tr><td><code>fill</code></td><td><p><code>boolean</code></p><p>Whether the icon renders as filled. Default value is false.</p><p>To preview different icon settings, go to <a href="https://fonts.google.com/icons">Google Font Icons</a> and adjust the settings under <strong>Customize</strong>.</p></td></tr><tr><td><code>weight</code></td><td><p><code>integer</code></p><p>The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700}. If absent, default value is 400. If any other value is specified, the default value is used.</p><p>To preview different icon settings, go to <a href="https://fonts.google.com/icons">Google Font Icons</a> and adjust the settings under <strong>Customize</strong>.</p></td></tr><tr><td><code>grade</code></td><td><p><code>integer</code></p><p>Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0, 200}. If absent, default value is 0. If any other value is specified, the default value is used.</p><p>To preview different icon settings, go to <a href="https://fonts.google.com/icons">Google Font Icons</a> and adjust the settings under <strong>Customize</strong>.</p></td></tr></tbody></table>

### DecoratedText

A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Display text with decorative text](https://developers.google.com/workspace/chat/add-text-image-card-dialog#display_text_with_decorative_elements).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "icon": {
    object (Icon)
  },
  "startIcon": {
    object (Icon)
  },
  "startIconVerticalAlignment": enum (VerticalAlignment),
  "topLabel": string,
  "topLabelText": {
    object (TextParagraph)
  },
  "text": string,
  "contentText": {
    object (TextParagraph)
  },
  "wrapText": boolean,
  "bottomLabel": string,
  "bottomLabelText": {
    object (TextParagraph)
  },
  "onClick": {
    object (OnClick)
  },

  "button": {
    object (Button)
  },
  "switchControl": {
    object (SwitchControl)
  },
  "endIcon": {
    object (Icon)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>icon
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>object (<code>Icon</code>)</code></p><p>Deprecated in favor of <code>startIcon</code>.</p></td></tr><tr><td><code>startIcon</code></td><td><p><code>object (<code>Icon</code>)</code></p><p>The icon displayed in front of the text.</p></td></tr><tr><td><code>startIconVerticalAlignment</code></td><td><p><code>enum (<code>VerticalAlignment</code>)</code></p><p>Optional. Vertical alignment of the start icon. If not set, the icon will be vertically centered.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons.</p></td></tr><tr><td><code>topLabel</code></td><td><p><code>string</code></p><p>The text that appears above <code>text</code>. Always truncates.</p></td></tr><tr><td><code>topLabelText</code></td><td><p><code>object (<code>TextParagraph</code>)</code></p><p><code>TextParagraph</code> equivalent of <code>topLabel</code>. Always truncates. Allows for more complex formatting than <code>topLabel</code>.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Required. The primary text.</p><p>Supports simple formatting. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace add-ons</a>.</p></td></tr><tr><td><code>contentText</code></td><td><p><code>object (<code>TextParagraph</code>)</code></p><p><code>TextParagraph</code> equivalent of <code>text</code>. Allows for more complex formatting than <code>text</code>.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons.</p></td></tr><tr><td><code>wrapText</code></td><td><p><code>boolean</code></p><p>The wrap text setting. If <code>true</code>, the text wraps and displays on multiple lines. Otherwise, the text is truncated.</p><p>Only applies to <code>text</code>, not <code>topLabel</code> and <code>bottomLabel</code>.</p></td></tr><tr><td><code>bottomLabel</code></td><td><p><code>string</code></p><p>The text that appears below <code>text</code>. Always wraps.</p></td></tr><tr><td><code>bottomLabelText</code></td><td><p><code>object (<code>TextParagraph</code>)</code></p><p><code>TextParagraph</code> equivalent of <code>bottomLabel</code>. Always wraps. Allows for more complex formatting than <code>bottomLabel</code>.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>This action is triggered when users click <code>topLabel</code> or <code>bottomLabel</code>.</p></td></tr><tr><td colspan="2">Union field <code>control</code>. A button, switch, checkbox, or image that appears to the right-hand side of text in the <code>decoratedText</code> widget. <code>control</code> can be only one of the following:</td></tr><tr><td><code>button</code></td><td><p><code>object (<code>Button</code>)</code></p><p>A button that a user can click to trigger an action.</p></td></tr><tr><td><code>switchControl</code></td><td><p><code>object (<code>SwitchControl</code>)</code></p><p>A switch widget that a user can click to change its state and trigger an action.</p></td></tr><tr><td><code>endIcon</code></td><td><p><code>object (<code>Icon</code>)</code></p><p>An icon displayed after the text.</p><p>Supports <a href="https://developers.google.com/workspace/chat/format-messages#builtinicons">built-in</a> and <a href="https://developers.google.com/workspace/chat/format-messages#customicons">custom</a> icons.</p></td></tr></tbody></table>

### VerticalAlignment

Represents vertical alignment attribute.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>VERTICAL_ALIGNMENT_UNSPECIFIED</code></td><td>Unspecified type. Do not use.</td></tr><tr><td><code>TOP</code></td><td>Alignment to the top position.</td></tr><tr><td><code>MIDDLE</code></td><td>Alignment to the middle position.</td></tr><tr><td><code>BOTTOM</code></td><td>Alignment to the bottom position.</td></tr></tbody></table>

### Button

A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Add a button](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add_a_button).

To make an image a clickable button, specify an `` `Image` `` (not an `` `ImageComponent` ``) and set an `onClick` action.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "text": string,
  "icon": {
    object (Icon)
  },
  "color": {
    object (Color)
  },
  "onClick": {
    object (OnClick)
  },
  "disabled": boolean,
  "altText": string,
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text displayed inside the button.</p></td></tr><tr><td><code>icon</code></td><td><p><code>object (<code>Icon</code>)</code></p><p>An icon displayed inside the button. If both <code>icon</code> and <code>text</code> are set, then the icon appears before the text.</p></td></tr><tr><td><code>color</code></td><td><p><code>object (<code>Color</code>)</code></p><p>Optional. The color of the button. If set, the button <code>type</code> is set to <code>FILLED</code> and the color of <code>text</code> and <code>icon</code> fields are set to a contrasting color for readability. For example, if the button color is set to blue, any text or icons in the button are set to white.</p><p>To set the button color, specify a value for the <code>red</code>, <code>green</code>, and <code>blue</code> fields. The value must be a float number between 0 and 1 based on the RGB color value, where <code>0</code> (0/255) represents the absence of color and <code>1</code> (255/255) represents the maximum intensity of the color.</p><p>For example, the following sets the color to red at its maximum intensity:</p><div><pre><code>"color": {
   "red": 1,
   "green": 0,
   "blue": 0,
}</code></pre></div><p>The <code>alpha</code> field is unavailable for button color. If specified, this field is ignored.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>Required. The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function.</p></td></tr><tr><td><code>disabled</code></td><td><p><code>boolean</code></p><p>If <code>true</code>, the button is displayed in an inactive state and doesn't respond to user actions.</p></td></tr><tr><td><code>altText</code></td><td><p><code>string</code></p><p>The alternative text that's used for accessibility.</p><p>Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at <a href="https://developers.google.com/workspace/chat">https://developers.google.com/workspace/chat"</a>.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>Optional. The type of a button. If unset, button type defaults to <code>OUTLINED</code>. If the <code>color</code> field is set, the button type is forced to <code>FILLED</code> and any value set for this field is ignored.</p></td></tr></tbody></table>

### Color

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

var protoToCssColor = function(rgb_color) {
   var redFrac = rgb_color.red || 0.0;
   var greenFrac = rgb_color.green || 0.0;
   var blueFrac = rgb_color.blue || 0.0;
   var red = Math.floor(redFrac * 255);
   var green = Math.floor(greenFrac * 255);
   var blue = Math.floor(blueFrac * 255);

   if (!('alpha' in rgb_color)) {
      return rgbToCssColor(red, green, blue);
   }

   var alphaFrac = rgb_color.alpha.value || 0.0;
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

### Type

Optional. The [type](https://m3.material.io/components/all-buttons#9134ac95-678e-49ae-a50a-e71948011b05) of a button. If `color` field is set, the `type` is forced to `FILLED`.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>OUTLINED</code></td><td>Outlined buttons are medium-emphasis buttons. They usually contain actions that are important, but aren’t the primary action in a Chat app or an add-on.</td></tr><tr><td><code>FILLED</code></td><td>A filled button has a container with a solid color. It has the most visual impact and is recommended for the important and primary action in a Chat app or an add-on.</td></tr><tr><td><code>FILLED_TONAL</code></td><td>A filled tonal button is an alternative middle ground between filled and outlined buttons. They’re useful in contexts where a lower-priority button requires slightly more emphasis than an outline button would give.</td></tr><tr><td><code>BORDERLESS</code></td><td>A button does not have an invisible container in its default state. It is often used for the lowest priority actions, especially when presenting multiple options.</td></tr></tbody></table>

### SwitchControl

Either a toggle-style switch or a checkbox inside a `decoratedText` widget.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

Only supported in the `decoratedText` widget.

JSON representation

```
{
  "name": string,
  "value": string,
  "selected": boolean,
  "onChangeAction": {
    object (Action)
  },
  "controlType": enum (ControlType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name by which the switch widget is identified in a form input event.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value entered by a user, returned as part of a form input event.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>selected</code></td><td><p><code>boolean</code></p><p>When <code>true</code>, the switch is selected.</p></td></tr><tr><td><code>onChangeAction</code></td><td><p><code>object (<code>Action</code>)</code></p><p>The action to perform when the switch state is changed, such as what function to run.</p></td></tr><tr><td><code>controlType</code></td><td><p><code>enum (<code>ControlType</code>)</code></p><p>How the switch appears in the user interface.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr></tbody></table>

### ControlType

How the switch appears in the user interface.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SWITCH</code></td><td>A toggle-style switch.</td></tr><tr><td><code>CHECKBOX</code></td><td>Deprecated in favor of <code>CHECK_BOX</code>.</td></tr><tr><td><code>CHECK_BOX</code></td><td>A checkbox.</td></tr></tbody></table>

### ButtonList

A list of buttons layed out horizontally. For an example in Google Chat apps, see [Add a button](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add_a_button).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "buttons": [
    {
      object (Button)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>buttons[]</code></td><td><p><code>object (<code>Button</code>)</code></p><p>An array of buttons.</p></td></tr></tbody></table>

### TextInput

A field in which users can enter text. Supports suggestions and on-change actions. Supports form submission validation. When `Action.all_widgets_are_required` is set to `true` or this widget is specified in `Action.required_widgets`, the submission action is blocked unless a value is entered. For an example in Google Chat apps, see [Add a field in which a user can enter text](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add_a_field_in_which_a_user_can_enter_text).

Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).

When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the `SelectionInput` widget.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "name": string,
  "label": string,
  "hintText": string,
  "value": string,
  "type": enum (Type),
  "onChangeAction": {
    object (Action)
  },
  "initialSuggestions": {
    object (Suggestions)
  },
  "autoCompleteAction": {
    object (Action)
  },
  "validation": {
    object (Validation)
  },
  "placeholderText": string,

  "hostAppDataSource": {
    object (HostAppDataSourceMarkup)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name by which the text input is identified in a form input event.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>The text that appears above the text input field in the user interface.</p><p>Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write <code>surname</code> instead of <code>name</code>.</p><p>Required if <code>hintText</code> is unspecified. Otherwise, optional.</p></td></tr><tr><td><code>hintText</code></td><td><p><code>string</code></p><p>Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible.</p><p>Required if <code>label</code> is unspecified. Otherwise, optional.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value entered by a user, returned as part of a form input event.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>How a text input field appears in the user interface. For example, whether the field is single or multi-line.</p></td></tr><tr><td><code>onChangeAction</code></td><td><p><code>object (<code>Action</code>)</code></p><p>What to do when a change occurs in the text input field. For example, a user adding to the field or deleting text.</p><p>Examples of actions to take include running a custom function or opening a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a> in Google Chat.</p></td></tr><tr><td><code>initialSuggestions</code></td><td><p><code>object (<code>Suggestions</code>)</code></p><p>Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed.</p><p>For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing <code>Jav</code>, the list of suggestions filters to show just <code>Java</code> and <code>JavaScript</code>.</p><p>Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter <code>javascript</code> and others <code>java script</code>. Suggesting <code>JavaScript</code> can standardize how users interact with your app.</p><p>When specified, <code>TextInput.type</code> is always <code>SINGLE_LINE</code>, even if it's set to <code>MULTIPLE_LINE</code>.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr><tr><td><code>autoCompleteAction</code></td><td><p><code>object (<code>Action</code>)</code></p><p>Optional. Specify what action to take when the text input field provides suggestions to users who interact with it.</p><p>If unspecified, the suggestions are set by <code>initialSuggestions</code> and are processed by the client.</p><p>If specified, the app takes the action specified here, such as running a custom function.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Workspace add-ons and unavailable for Google Chat apps.</p></td></tr><tr><td><code>validation</code></td><td><p><code>object (<code>Validation</code>)</code></p><p>Specify the input format validation necessary for this text field.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr><tr><td><code>placeholderText</code></td><td><p><code>string</code></p><p>Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, <code>Enter a
                    number from 0 to 100</code>.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons.</p></td></tr><tr><td colspan="2"><p>Union field <code>data_source</code>.</p><p><code>data_source</code> can be only one of the following:</p></td></tr><tr><td><code>hostAppDataSource</code></td><td><p><code>object (<code>HostAppDataSourceMarkup</code>)</code></p><p>A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr></tbody></table>

### Type

How a text input field appears in the user interface. For example, whether it's a single line input field, or a multi-line input. If `initialSuggestions` is specified, `type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SINGLE_LINE</code></td><td>The text input field has a fixed height of one line.</td></tr><tr><td><code>MULTIPLE_LINE</code></td><td>The text input field has a fixed height of multiple lines.</td></tr></tbody></table>

### RenderActions

A set of render instructions that tells a card to perform an action, or tells the add-on host app or the Chat app to perform an app-specific action.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>action</code></td><td><p><code><code>Action</code></code></p></td></tr></tbody></table>

### Action

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>navigations[]</code></td><td><p><code>Navigation</code></p><p>Pushes, pops, or updates a card.</p><p><a href="https://developers.google.com/workspace/add-ons/chat">Add-ons in Google Chat</a>.</p></td></tr></tbody></table>

Add a new card to the stack (navigate forward). For Chat apps, only available for [app home](https://developers.google.com/workspace/chat/send-app-home-card-message).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

```
navigations: {
  pushCard: CARD
}
```

Replace the top card with a new card. For Chat apps, only available for [app home](https://developers.google.com/workspace/chat/send-app-home-card-message).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

```
navigations: {
  updateCard: CARD
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>navigate_action</code>.</p><p><code>navigate_action</code> can be only one of the following:</p></td></tr><tr><td><code>pushCard</code></td><td><p><code>Card</code></p><p>Pushes a card onto the card stack.</p><p>For <a href="https://developers.google.com/workspace/add-ons/chat/dialogs">dialogs in Google Chat</a>, opens or updates a dialog.</p></td></tr><tr><td><code>updateCard</code></td><td><p><code>Card</code></p><p>Updates the top card with a new card and preserves filled form fields values. For a non-equivalent field, the value is dropped.</p><p>For <a href="https://developers.google.com/workspace/add-ons/chat/dialogs">dialogs in Google Chat</a>, opens or updates a dialog.</p></td></tr></tbody></table>

### Suggestions

Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed.

For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`.

Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app.

When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "items": [
    {
      object (SuggestionItem)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p><code>object (<code>SuggestionItem</code>)</code></p><p>A list of suggestions used for autocomplete recommendations in text input fields.</p></td></tr></tbody></table>

### SuggestionItem

One suggested value that users can enter in a text input field.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{

  "text": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>content</code>.</p><p><code>content</code> can be only one of the following:</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>The value of a suggested input to a text input field. This is equivalent to what users enter themselves.</p></td></tr></tbody></table>

### Validation

Represents the necessary data for validating the widget it's attached to.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "characterLimit": integer,
  "inputType": enum (InputType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>characterLimit</code></td><td><p><code>integer</code></p><p>Specify the character limit for text input widgets. Note that this is only used for text input and is ignored for other widgets.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr><tr><td><code>inputType</code></td><td><p><code>enum (<code>InputType</code>)</code></p><p>Specify the type of the input widgets.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr></tbody></table>

### InputType

The type of the input widget.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>INPUT_TYPE_UNSPECIFIED</code></td><td>Unspecified type. Do not use.</td></tr><tr><td><code>TEXT</code></td><td>Regular text that accepts all characters.</td></tr><tr><td><code>INTEGER</code></td><td>An integer value.</td></tr><tr><td><code>FLOAT</code></td><td>A float value.</td></tr><tr><td><code>EMAIL</code></td><td>An email address.</td></tr><tr><td><code>EMOJI_PICKER</code></td><td>A emoji selected from system-provided emoji picker.</td></tr></tbody></table>

### HostAppDataSourceMarkup

A data source from a Google Workspace application. The data source populates available items for a widget.

JSON representation

```
{

  "chatDataSource": {
    object (ChatClientDataSourceMarkup)
  },
  "workflowDataSource": {
    object (WorkflowDataSourceMarkup)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>data_source</code>. The Google Workspace application that populates available items for a widget. <code>data_source</code> can be only one of the following:</td></tr><tr><td><code>chatDataSource</code></td><td><p><code>object (<code>ChatClientDataSourceMarkup</code>)</code></p><p>A data source from Google Chat.</p></td></tr><tr><td><code>workflowDataSource</code></td><td><p><code>object (<code>WorkflowDataSourceMarkup</code>)</code></p><p>A data source from Google Workflow.</p></td></tr></tbody></table>

### ChatClientDataSourceMarkup

For a `` `SelectionInput` `` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

JSON representation

```
{

  "spaceDataSource": {
    object (SpaceDataSource)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>source</code>. The Google Chat data source. <code>source</code> can be only one of the following:</td></tr><tr><td><code>spaceDataSource</code></td><td><p><code>object (<code>SpaceDataSource</code>)</code></p><p>Google Chat spaces that the user is a member of.</p></td></tr></tbody></table>

### SpaceDataSource

A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

JSON representation

```
{
  "defaultToCurrentSpace": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>defaultToCurrentSpace</code></td><td><p><code>boolean</code></p><p>If set to <code>true</code>, the multiselect menu selects the current Google Chat space as an item by default.</p></td></tr></tbody></table>

### WorkflowDataSourceMarkup

\* Only supported by Google Workspace Workflow, but not Google Chat apps or Google Workspace add-ons.

In a `` `TextInput` `` or `` `SelectionInput` `` widget with MULTI\_SELECT type or a `` `DateTimePicker` ``, provide data source from Google.

JSON representation

```
{
  "includeVariables": boolean,
  "type": enum (Type)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeVariables</code></td><td><p><code>boolean</code></p><p>Whether to include variables from the previous step in the data source.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of data source.</p></td></tr></tbody></table>

### Type

An enum that represents the type of the workflow data source.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN</code></td><td>Default value. Don't use.</td></tr><tr><td><code>USER</code></td><td>Google Workspace users. The user can only view and select users from their Google Workspace organization.</td></tr><tr><td><code>SPACE</code></td><td>Google Chat spaces that the user is a member of.</td></tr><tr><td><code>USER_WITH_FREE_FORM</code></td><td>Users can choose to view and select existing members from their Google Workspace organization or manually enter an email address or a valid domain.</td></tr></tbody></table>

### SelectionInput

A widget that creates one or more UI items that users can select. Supports form submission validation for `dropdown` and `multiselect` menus only. When `Action.all_widgets_are_required` is set to `true` or this widget is specified in `Action.required_widgets`, the submission action is blocked unless a value is selected. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Add selectable UI elements](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add_selectable_ui_elements).

Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).

To collect undefined or abstract data from users, use the `TextInput` widget.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "name": string,
  "label": string,
  "type": enum (SelectionType),
  "items": [
    {
      object (SelectionItem)
    }
  ],
  "onChangeAction": {
    object (Action)
  },
  "multiSelectMinQueryLength": integer,
  "dataSourceConfigs": [
    {
      object (DataSourceConfig)
    }
  ],
  "multiSelectMaxSelectedItems": integer,
  "hintText": string,

  "externalDataSource": {
    object (Action)
  },
  "platformDataSource": {
    object (PlatformDataSource)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The name that identifies the selection input in a form input event.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>The text that appears above the selection input field in the user interface.</p><p>Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>SelectionType</code>)</code></p><p>The type of items that are displayed to users in a <code>SelectionInput</code> widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>SelectionItem</code>)</code></p><p>An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.</p></td></tr><tr><td><code>onChangeAction</code></td><td><p><code>object (<code>Action</code>)</code></p><p>If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>multiSelectMinQueryLength</code></td><td><p><code>integer</code></p><p>For multiselect menus, the number of text characters that a user inputs before the menu returns suggested selection items.</p><p>If unset, the multiselect menu uses the following default values:</p><ul><li>If the menu uses a static array of <code>SelectionInput</code> items, defaults to 0 characters and immediately populates items from the array.</li><li>If the menu uses a dynamic data source ( <code>multi_select_data_source</code>), defaults to 3 characters before querying the data source to return suggested items.</li></ul></td></tr><tr><td><code>dataSourceConfigs[]</code></td><td><p><code>object (<code>DataSourceConfig</code>)</code></p><p>Optional. The data source configs for the selection control. This field provides more fine-grained control over the data source.</p><p>If specified, the <code>multiSelectMaxSelectedItems</code> field, <code>multiSelectMinQueryLength</code> field, <code>externalDataSource</code> field and <code>platformDataSource</code> field are ignored.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio.</p><p>Available for the <code>
         <code>Dropdown
                    widget</code>
        </code> in Google Chat apps. For the <code>Dropdown</code> widget in Google Chat apps, only one <code>DataSourceConfig</code> is supported. If multiple <code>DataSourceConfig</code> s are set, only the first one is used.</p></td></tr><tr><td><code>multiSelectMaxSelectedItems</code></td><td><p><code>integer</code></p><p>For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items.</p></td></tr><tr><td><code>hintText</code></td><td><p><code>string</code></p><p>Optional. Text that appears below the selection input field meant to assist users by prompting them to enter a certain value. This text is always visible.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr><tr><td colspan="2"><p>Union field <code>multi_select_data_source</code>. For a multiselect menu, a data source that dynamically populates selection items.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> Available for Google Chat apps and unavailable for Google Workspace add-ons. <code>multi_select_data_source</code> can be only one of the following:</p></td></tr><tr><td><code>externalDataSource</code></td><td><p><code>object (<code>Action</code>)</code></p><p>An external data source, such as a relational database.</p></td></tr><tr><td><code>platformDataSource</code></td><td><p><code>object (<code>PlatformDataSource</code>)</code></p><p>A data source from Google Workspace.</p></td></tr></tbody></table>

### SelectionType

The format for the items that users can select. Different options support different types of interactions. For example, users can select multiple checkboxes, but can only select one item from a dropdown menu.

Each selection input supports one type of selection. Mixing checkboxes and switches, for example, isn't supported.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHECK_BOX</code></td><td>A set of checkboxes. Users can select one or more checkboxes.</td></tr><tr><td><code>RADIO_BUTTON</code></td><td>A set of radio buttons. Users can select one radio button.</td></tr><tr><td><code>SWITCH</code></td><td>A set of switches. Users can turn on one or more switches.</td></tr><tr><td><code>MULTI_SELECT</code></td><td><p>A menu with a text box. Users can type and select one or more items. For Google Workspace add-ons, you must populate items using a static array of <code>SelectionItem</code> objects.</p><p>For Google Chat apps, you can also populate items using a dynamic data source and autosuggest items as users type in the menu. For example, users can start typing the name of a Google Chat space and the widget autosuggests the space. To dynamically populate items for a multiselect menu, use one of the following types of data sources:</p><ul><li>Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.</li><li>External data: Items are populated from an external data source outside of Google Workspace.</li></ul><p>For examples of how to implement multiselect menus for Chat apps, see <a href="https://developers.google.com/workspace/chat/design-interactive-card-dialog#multiselect-menu">Add a multiselect menu</a>.</p><p><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg"> <img src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"> Available for Google Chat apps and Google Workspace add-ons.</p></td></tr></tbody></table>

### SelectionItem

An item that users can select in a selection input, such as a checkbox or switch. Supports up to 100 items.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "text": string,
  "value": string,
  "selected": boolean,
  "bottomText": string,

  "startIconUri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text that identifies or describes the item to users.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value associated with this item. The client should use this as a form input value.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>selected</code></td><td><p><code>boolean</code></p><p>Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.</p></td></tr><tr><td><code>bottomText</code></td><td><p><code>string</code></p><p>For multiselect menus, a text description or label that's displayed below the item's <code>text</code> field.</p></td></tr><tr><td colspan="2">Union field <code>start_icon</code>. For multiselect menus, the URL for the icon displayed next to the item's <code>text</code> field. Supports PNG and JPEG files. Must be an <code>HTTPS</code> URL. For example, <code>https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png</code>. <code>start_icon</code> can be only one of the following:</td></tr><tr><td><code>startIconUri</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### PlatformDataSource

For a `` `SelectionInput` `` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

JSON representation

```
{

  "commonDataSource": enum (CommonDataSource),
  "hostAppDataSource": {
    object (HostAppDataSourceMarkup)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>data_source</code>. The data source. <code>data_source</code> can be only one of the following:</td></tr><tr><td><code>commonDataSource</code></td><td><p><code>enum (<code>CommonDataSource</code>)</code></p><p>A data source shared by all Google Workspace applications, such as users in a Google Workspace organization.</p></td></tr><tr><td><code>hostAppDataSource</code></td><td><p><code>object (<code>HostAppDataSourceMarkup</code>)</code></p><p>A data source that's unique to a Google Workspace host application, such spaces in Google Chat.</p><p>This field supports the Google API Client Libraries but isn't available in the Cloud Client Libraries. To learn more, see <a href="https://developers.google.com/workspace/chat/libraries">Install the client libraries</a>.</p></td></tr></tbody></table>

### CommonDataSource

A data source shared by all [Google Workspace applications](https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN</code></td><td>Default value. Don't use.</td></tr><tr><td><code>USER</code></td><td>Google Workspace users. The user can only view and select users from their Google Workspace organization.</td></tr></tbody></table>

### DataSourceConfig

A configuration object that helps configure the data sources for a widget.

Available for Google Chat apps and Google Workspace add-ons that extend Google Workspace Studio.

JSON representation

```
{

  "remoteDataSource": {
    object (Action)
  },
  "platformDataSource": {
    object (PlatformDataSource)
  }
  "minCharactersTrigger": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>data_source</code>. The data source. <code>data_source</code> can be only one of the following:</td></tr><tr><td><code>remoteDataSource</code></td><td><p><code>object (<code>Action</code>)</code></p><p>The data is from a remote data provider.</p></td></tr><tr><td><code>platformDataSource</code></td><td><p><code>object (<code>PlatformDataSource</code>)</code></p><p>The data is from a Google Workspace application.</p></td></tr><tr><td><code>minCharactersTrigger</code></td><td><p><code>integer</code></p><p>The minimum number of characters the user must enter before this data provider is triggered (i.e., before it starts returning results).</p></td></tr></tbody></table>

### DateTimePicker

Lets users input a date, a time, or both a date and a time. Supports form submission validation. When `Action.all_widgets_are_required` is set to `true` or this widget is specified in `Action.required_widgets`, the submission action is blocked unless a value is selected. For an example in Google Chat apps, see [Let a user pick a date and time](https://developers.google.com/workspace/chat/design-interactive-card-dialog#let_a_user_pick_a_date_and_time).

Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "name": string,
  "label": string,
  "type": enum (DateTimePickerType),
  "valueMsEpoch": string,
  "timezoneOffsetDate": integer,
  "onChangeAction": {
    object (Action)
  },

  "hostAppDataSource": {
    object (HostAppDataSourceMarkup)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name by which the <code>DateTimePicker</code> is identified in a form input event.</p><p>For details about working with form inputs, see <a href="https://developers.google.com/workspace/chat/read-form-data">Receive form data</a>.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as <code>Appointment date</code> or <code>Appointment date and time</code>.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>DateTimePickerType</code>)</code></p><p>Whether the widget supports inputting a date, a time, or the date and time.</p></td></tr><tr><td><code>valueMsEpoch</code></td><td><p><code>string (int64
        format)</code></p><p>The default value displayed in the widget, in milliseconds since <a href="https://en.wikipedia.org/wiki/Unix_time">Unix epoch time</a>.</p><p>Specify the value based on the type of picker ( <code>DateTimePickerType</code>):</p><ul><li><code>DATE_AND_TIME</code>: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use <code>1672574400000</code>.</li><li><code>DATE_ONLY</code>: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use <code>1672531200000</code>.</li><li><code>TIME_ONLY</code>: a time in UTC. For example, to represent 12:00 PM, use <code>43200000</code> (or <code>12 * 60 * 60 * 1000</code>).</li></ul></td></tr><tr><td><code>timezoneOffsetDate</code></td><td><p><code>integer</code></p><p>The number representing the time zone offset from UTC, in minutes. If set, the <code>valueMsEpoch</code> is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting.</p></td></tr><tr><td><code>onChangeAction</code></td><td><p><code>object (<code>Action</code>)</code></p><p>Triggered when the user clicks <strong>Save</strong> or <strong>Clear</strong> from the <code>DateTimePicker</code> interface.</p></td></tr><tr><td colspan="2">Union field <code>data_source</code>. The data source specified to represent a date and time. <code>data_source</code> can be only one of the following:</td></tr><tr><td><code>hostAppDataSource</code></td><td><p><code>object (<code>HostAppDataSourceMarkup</code>)</code></p><p>A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages.</p><p>Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.</p></td></tr></tbody></table>

### DateTimePickerType

The format for the date and time in the `DateTimePicker` widget. Determines whether users can input a date, a time, or both a date and time.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATE_AND_TIME</code></td><td>Users input a date and time.</td></tr><tr><td><code>DATE_ONLY</code></td><td>Users input a date.</td></tr><tr><td><code>TIME_ONLY</code></td><td>Users input a time.</td></tr></tbody></table>

### Divider

This type has no fields.

Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Add a horizontal divider between widgets](https://developers.google.com/workspace/chat/format-structure-card-dialog#add_a_horizontal_divider_between_widgets).

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

For example, the following JSON creates a divider:

```
"divider": {}
```

### Grid

Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `` `Columns` ``. For an example in Google Chat apps, see [Display a Grid with a collection of items](https://developers.google.com/workspace/chat/format-structure-card-dialog#display_a_grid_with_a_collection_of_items).

A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

For example, the following JSON creates a 2 column grid with a single item:

```
"grid": {
  "title": "A fine collection of items",
  "columnCount": 2,
  "borderStyle": {
    "type": "STROKE",
    "cornerRadius": 4
  },
  "items": [
    {
      "image": {
        "imageUri": "https://www.example.com/image.png",
        "cropStyle": {
          "type": "SQUARE"
        },
        "borderStyle": {
          "type": "STROKE"
        }
      },
      "title": "An item",
      "textAlignment": "CENTER"
    }
  ],
  "onClick": {
    "openLink": {
      "url": "https://www.example.com"
    }
  }
}
```

JSON representation

```
{
  "title": string,
  "items": [
    {
      object (GridItem)
    }
  ],
  "borderStyle": {
    object (BorderStyle)
  },
  "columnCount": integer,
  "onClick": {
    object (OnClick)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The text that displays in the grid header.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>GridItem</code>)</code></p><p>The items to display in the grid.</p></td></tr><tr><td><code>borderStyle</code></td><td><p><code>object (<code>BorderStyle</code>)</code></p><p>The border style to apply to each grid item.</p></td></tr><tr><td><code>columnCount</code></td><td><p><code>integer</code></p><p>The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.</p></td></tr></tbody></table>

### GridItem

Represents an item in a grid layout. Items can contain text, an image, or both text and an image.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "id": string,
  "image": {
    object (ImageComponent)
  },
  "title": string,
  "subtitle": string,
  "layout": enum (GridItemLayout)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>A user-specified identifier for this grid item. This identifier is returned in the parent grid's <code>onClick</code> callback parameters.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>ImageComponent</code>)</code></p><p>The image that displays in the grid item.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The grid item's title.</p></td></tr><tr><td><code>subtitle</code></td><td><p><code>string</code></p><p>The grid item's subtitle.</p></td></tr><tr><td><code>layout</code></td><td><p><code>enum (<code>GridItemLayout</code>)</code></p><p>The layout to use for the grid item.</p></td></tr></tbody></table>

### ImageComponent

Represents an image.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "imageUri": string,
  "altText": string,
  "cropStyle": {
    object (ImageCropStyle)
  },
  "borderStyle": {
    object (BorderStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>imageUri</code></td><td><p><code>string</code></p><p>The image URL.</p></td></tr><tr><td><code>altText</code></td><td><p><code>string</code></p><p>The accessibility label for the image.</p></td></tr><tr><td><code>cropStyle</code></td><td><p><code>object (<code>ImageCropStyle</code>)</code></p><p>The crop style to apply to the image.</p></td></tr><tr><td><code>borderStyle</code></td><td><p><code>object (<code>BorderStyle</code>)</code></p><p>The border style to apply to the image.</p></td></tr></tbody></table>

### ImageCropStyle

Represents the crop style applied to an image.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

For example, here's how to apply a 16:9 aspect ratio:

```
cropStyle {
 "type": "RECTANGLE_CUSTOM",
 "aspectRatio": 16/9
}
```

JSON representation

```
{
  "type": enum (ImageCropType),
  "aspectRatio": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>ImageCropType</code>)</code></p><p>The crop type.</p></td></tr><tr><td><code>aspectRatio</code></td><td><p><code>number</code></p><p>The aspect ratio to use if the crop type is <code>RECTANGLE_CUSTOM</code>.</p><p>For example, here's how to apply a 16:9 aspect ratio:</p><div><pre><code>cropStyle {
 "type": "RECTANGLE_CUSTOM",
 "aspectRatio": 16/9
}</code></pre></div></td></tr></tbody></table>

### ImageCropType

Represents the crop style applied to an image.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>IMAGE_CROP_TYPE_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>SQUARE</code></td><td>Default value. Applies a square crop.</td></tr><tr><td><code>CIRCLE</code></td><td>Applies a circular crop.</td></tr><tr><td><code>RECTANGLE_CUSTOM</code></td><td>Applies a rectangular crop with a custom aspect ratio. Set the custom aspect ratio with <code>aspectRatio</code>.</td></tr><tr><td><code>RECTANGLE_4_3</code></td><td>Applies a rectangular crop with a 4:3 aspect ratio.</td></tr></tbody></table>

### BorderStyle

The style options for the border of a card or widget, including the border type and color.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "type": enum (BorderType),
  "strokeColor": {
    object (Color)
  },
  "cornerRadius": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>BorderType</code>)</code></p><p>The border type.</p></td></tr><tr><td><code>strokeColor</code></td><td><p><code>object (<code>Color</code>)</code></p><p>The colors to use when the type is <code>BORDER_TYPE_STROKE</code>.</p><p>To set the stroke color, specify a value for the <code>red</code>, <code>green</code>, and <code>blue</code> fields. The value must be a float number between 0 and 1 based on the RGB color value, where <code>0</code> (0/255) represents the absence of color and <code>1</code> (255/255) represents the maximum intensity of the color.</p><p>For example, the following sets the color to red at its maximum intensity:</p><div><pre><code>"color": {
   "red": 1,
   "green": 0,
   "blue": 0,
}</code></pre></div><p>The <code>alpha</code> field is unavailable for stroke color. If specified, this field is ignored.</p></td></tr><tr><td><code>cornerRadius</code></td><td><p><code>integer</code></p><p>The corner radius for the border.</p></td></tr></tbody></table>

### BorderType

Represents the border types applied to widgets.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BORDER_TYPE_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>NO_BORDER</code></td><td>No border.</td></tr><tr><td><code>STROKE</code></td><td>Default value. Outline.</td></tr></tbody></table>

### GridItemLayout

Represents the various layout options available for a grid item.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>GRID_ITEM_LAYOUT_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>TEXT_BELOW</code></td><td>The title and subtitle are shown below the grid item's image.</td></tr><tr><td><code>TEXT_ABOVE</code></td><td>The title and subtitle are shown above the grid item's image.</td></tr></tbody></table>

### Columns

The `Columns` widget displays up to 2 columns in a card or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Display cards and dialogs in columns](https://developers.google.com/workspace/chat/format-structure-card-dialog#display_cards_and_dialogs_in_columns).

The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns.

Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first:

- On web, the second column wraps if the screen width is less than or equal to 480 pixels.
- On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt.
- On Android devices, the second column wraps if the screen width is less than or equal to 320 dp.

To include more than two columns, or to use rows, use the `` `Grid` `` widget.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons. The add-on UIs that support columns include:

- The dialog displayed when users open the add-on from an email draft.
- The dialog displayed when users open the add-on from the **Add attachment** menu in a Google Calendar event.

JSON representation

```
{
  "columnItems": [
    {
      object (Column)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>columnItems[]</code></td><td><p><code>object (<code>Column</code>)</code></p><p>An array of columns. You can include up to 2 columns in a card or dialog.</p></td></tr></tbody></table>

### Column

A column.

[Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend)

JSON representation

```
{
  "horizontalSizeStyle": enum (HorizontalSizeStyle),
  "horizontalAlignment": enum (HorizontalAlignment),
  "verticalAlignment": enum (VerticalAlignment),
  "widgets": [
    {
      object (Widgets)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>horizontalSizeStyle</code></td><td><p><code>enum (<code>HorizontalSizeStyle</code>)</code></p><p>Specifies how a column fills the width of the card.</p></td></tr><tr><td><code>horizontalAlignment</code></td><td><p><code>enum (<code>HorizontalAlignment</code>)</code></p><p>Specifies whether widgets align to the left, right, or center of a column.</p></td></tr><tr><td><code>verticalAlignment</code></td><td><p><code>enum (<code>VerticalAlignment</code>)</code></p><p>Specifies whether widgets align to the top, bottom, or center of a column.</p></td></tr><tr><td><code>widgets[]</code></td><td><p><code>object (<code>Widgets</code>)</code></p><p>An array of widgets included in a column. Widgets appear in the order that they are specified.</p></td></tr></tbody></table>

### HorizontalSizeStyle

Specifies how a column fills the width of the card. The width of each column depends on both the `HorizontalSizeStyle` and the width of the widgets within the column.

[Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend)

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HORIZONTAL_SIZE_STYLE_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>FILL_AVAILABLE_SPACE</code></td><td>Default value. Column fills the available space, up to 70% of the card's width. If both columns are set to <code>FILL_AVAILABLE_SPACE</code>, each column fills 50% of the space.</td></tr><tr><td><code>FILL_MINIMUM_SPACE</code></td><td>Column fills the least amount of space possible and no more than 30% of the card's width.</td></tr></tbody></table>

### HorizontalAlignment

Specifies whether widgets align to the left, right, or center of a column.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HORIZONTAL_ALIGNMENT_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>START</code></td><td>Default value. Aligns widgets to the start position of the column. For left-to-right layouts, aligns to the left. For right-to-left layouts, aligns to the right.</td></tr><tr><td><code>CENTER</code></td><td>Aligns widgets to the center of the column.</td></tr><tr><td><code>END</code></td><td>Aligns widgets to the end position of the column. For left-to-right layouts, aligns widgets to the right. For right-to-left layouts, aligns widgets to the left.</td></tr></tbody></table>

### VerticalAlignment

Specifies whether widgets align to the top, bottom, or center of a column.

[Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend)

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>VERTICAL_ALIGNMENT_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>CENTER</code></td><td>Default value. Aligns widgets to the center of a column.</td></tr><tr><td><code>TOP</code></td><td>Aligns widgets to the top of a column.</td></tr><tr><td><code>BOTTOM</code></td><td>Aligns widgets to the bottom of a column.</td></tr></tbody></table>

### Widgets

The supported widgets that you can include in a column.

[Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend)

JSON representation

```
{

  "textParagraph": {
    object (TextParagraph)
  },
  "image": {
    object (Image)
  },
  "decoratedText": {
    object (DecoratedText)
  },
  "buttonList": {
    object (ButtonList)
  },
  "textInput": {
    object (TextInput)
  },
  "selectionInput": {
    object (SelectionInput)
  },
  "dateTimePicker": {
    object (DateTimePicker)
  },
  "chipList": {
    object (ChipList)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>data</code>.</p><p><code>data</code> can be only one of the following:</p></td></tr><tr><td><code>textParagraph</code></td><td><p><code>object (<code>TextParagraph</code>)</code></p><p><code>TextParagraph</code> widget.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p><code>Image</code> widget.</p></td></tr><tr><td><code>decoratedText</code></td><td><p><code>object (<code>DecoratedText</code>)</code></p><p><code>DecoratedText</code> widget.</p></td></tr><tr><td><code>buttonList</code></td><td><p><code>object (<code>ButtonList</code>)</code></p><p><code>ButtonList</code> widget.</p></td></tr><tr><td><code>textInput</code></td><td><p><code>object (<code>TextInput</code>)</code></p><p><code>TextInput</code> widget.</p></td></tr><tr><td><code>selectionInput</code></td><td><p><code>object (<code>SelectionInput</code>)</code></p><p><code>SelectionInput</code> widget.</p></td></tr><tr><td><code>dateTimePicker</code></td><td><p><code>object (<code>DateTimePicker</code>)</code></p><p><code>DateTimePicker</code> widget.</p></td></tr><tr><td><code>chipList</code></td><td><p><code>object (<code>ChipList</code>)</code></p><p><code>ChipList</code> widget.</p></td></tr></tbody></table>

### ChipList

A list of chips layed out horizontally, which can either scroll horizontally or wrap to the next line.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "layout": enum (Layout),
  "chips": [
    {
      object (Chip)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>layout</code></td><td><p><code>enum (<code>Layout</code>)</code></p><p>Specified chip list layout.</p></td></tr><tr><td><code>chips[]</code></td><td><p><code>object (<code>Chip</code>)</code></p><p>An array of chips.</p></td></tr></tbody></table>

### Layout

The chip list layout.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>LAYOUT_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>WRAPPED</code></td><td>Default value. The chip list wraps to the next line if there isn't enough horizontal space.</td></tr><tr><td><code>HORIZONTAL_SCROLLABLE</code></td><td>The chips scroll horizontally if they don't fit in the available space.</td></tr></tbody></table>

### Chip

A text, icon, or text and icon chip that users can click.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "icon": {
    object (Icon)
  },
  "label": string,
  "onClick": {
    object (OnClick)
  },
  "enabled": boolean,
  "disabled": boolean,
  "altText": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>icon</code></td><td><p><code>object (<code>Icon</code>)</code></p><p>The icon image. If both <code>icon</code> and <code>text</code> are set, then the icon appears before the text.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>The text displayed inside the chip.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>Optional. The action to perform when a user clicks the chip, such as opening a hyperlink or running a custom function.</p></td></tr><tr><td><code>enabled
       <br>
       <b>
        (deprecated)
       </b></code></td><td><p><code>boolean</code></p><p>Whether the chip is in an active state and responds to user actions. Defaults to <code>true</code>. Deprecated. Use <code>disabled</code> instead.</p></td></tr><tr><td><code>disabled</code></td><td><p><code>boolean</code></p><p>Whether the chip is in an inactive state and ignores user actions. Defaults to <code>false</code>.</p></td></tr><tr><td><code>altText</code></td><td><p><code>string</code></p><p>The alternative text that's used for accessibility.</p><p>Set descriptive text that lets users know what the chip does. For example, if a chip opens a hyperlink, write: "Opens a new browser tab and navigates to the Google Chat developer documentation at <a href="https://developers.google.com/workspace/chat">https://developers.google.com/workspace/chat"</a>.</p></td></tr></tbody></table>

### Carousel

A carousel, also known as a slider, rotates and displays a list of widgets in a slideshow format, with buttons navigating to the previous or next widget.

For example, this is a JSON representation of a carousel that contains three text paragraph widgets.

```
{
  "carouselCards": [
    {
      "widgets": [
        {
          "textParagraph": {
            "text": "First text paragraph in carousel",
          }
        }
      ]
    },
    {
      "widgets": [
        {
          "textParagraph": {
            "text": "Second text paragraph in carousel",
          }
        }
      ]
    },
    {
      "widgets": [
        {
          "textParagraph": {
            "text": "Third text paragraph in carousel",
          }
        }
      ]
    }
  ]
}
```

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

JSON representation

```
{
  "carouselCards": [
    {
      object (CarouselCard)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>carouselCards[]</code></td><td><p><code>object (<code>CarouselCard</code>)</code></p><p>A list of cards included in the carousel.</p></td></tr></tbody></table>

### CarouselCard

A card that can be displayed as a carousel item. ![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

JSON representation

```
{
  "widgets": [
    {
      object (NestedWidget)
    }
  ],
  "footerWidgets": [
    {
      object (NestedWidget)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>widgets[]</code></td><td><p><code>object (<code>NestedWidget</code>)</code></p><p>A list of widgets displayed in the carousel card. The widgets are displayed in the order that they are specified.</p></td></tr></tbody></table>

### NestedWidget

A list of widgets that can be displayed in a containing layout, such as a `CarouselCard`. ![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

JSON representation

```
{

  "textParagraph": {
    object (TextParagraph)
  },
  "buttonList": {
    object (ButtonList)
  },
  "image": {
    object (Image)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>data</code>.</p><p><code>data</code> can be only one of the following:</p></td></tr><tr><td><code>textParagraph</code></td><td><p><code>object (<code>TextParagraph</code>)</code></p><p>A text paragraph widget.</p></td></tr><tr><td><code>buttonList</code></td><td><p><code>object (<code>ButtonList</code>)</code></p><p>A button list widget.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>An image widget.</p></td></tr></tbody></table>

### Visibility

Specifies whether an UI element is visible or hidden.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>VISIBILITY_UNSPECIFIED</code></td><td>Unspecified visibility. Do not use.</td></tr><tr><td><code>VISIBLE</code></td><td>The UI element is visible.</td></tr><tr><td><code>HIDDEN</code></td><td>The UI element is hidden.</td></tr></tbody></table>

### EventAction

Represents an actionthat can be performed on an ui element.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

JSON representation

```
{
  "actionRuleId": string,
  "postEventTriggers": [
    {
      object (Trigger)
    }
  ],

  "commonWidgetAction": {
    object (CommonWidgetAction)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actionRuleId</code></td><td><p><code>string</code></p><p>The unique identifier of the ActionRule.</p></td></tr><tr><td><code>postEventTriggers[]</code></td><td><p><code>object (<code>Trigger</code>)</code></p><p>The list of triggers that will be triggered after the EventAction is executed.</p></td></tr><tr><td colspan="2">Union field <code>action</code>. The action to perform. <code>action</code> can be only one of the following:</td></tr><tr><td><code>commonWidgetAction</code></td><td><p><code>object (<code>CommonWidgetAction</code>)</code></p><p>Common widget action.</p></td></tr></tbody></table>

### Trigger

Represents a trigger.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

JSON representation

```
{
  "actionRuleId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actionRuleId</code></td><td><p><code>string</code></p><p>The unique identifier of the ActionRule.</p></td></tr></tbody></table>

### CommonWidgetAction

Represents an action that is not specific to a widget.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

JSON representation

```
{

  "updateVisibilityAction": {
    object (UpdateVisibilityAction)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>action</code>. The action to perform. <code>action</code> can be only one of the following:</td></tr><tr><td><code>updateVisibilityAction</code></td><td><p><code>object (<code>UpdateVisibilityAction</code>)</code></p><p>The action to update the visibility of a widget.</p></td></tr></tbody></table>

### UpdateVisibilityAction

Represents an action that updates the visibility of a widget.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

JSON representation

```
{
  "visibility": enum (Visibility)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>visibility</code></td><td><p><code>enum (<code>Visibility</code>)</code></p><p>The new visibility.</p></td></tr></tbody></table>

### CollapseControl

Represent an expand and collapse control.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

JSON representation

```
{
  "horizontalAlignment": enum (HorizontalAlignment),
  "expandButton": {
    object (Button)
  },
  "collapseButton": {
    object (Button)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>horizontalAlignment</code></td><td><p><code>enum (<code>HorizontalAlignment</code>)</code></p><p>The horizontal alignment of the expand and collapse button.</p></td></tr><tr><td><code>expandButton</code></td><td><p><code>object (<code>Button</code>)</code></p><p>Optional. Define a customizable button to expand the section. Both expandButton and collapseButton field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used.</p></td></tr><tr><td><code>collapseButton</code></td><td><p><code>object (<code>Button</code>)</code></p><p>Optional. Define a customizable button to collapse the section. Both expandButton and collapseButton field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used.</p></td></tr></tbody></table>

### DividerStyle

The divider style of a card. Currently only used for dividers betweens card sections.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) ![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Chat apps and Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DIVIDER_STYLE_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>SOLID_DIVIDER</code></td><td>Default option. Render a solid divider.</td></tr><tr><td><code>NO_DIVIDER</code></td><td>If set, no divider is rendered. This style completely removes the divider from the layout. The result is equivalent to not adding a divider at all.</td></tr></tbody></table>

### CardAction

A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.

![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Workspace add-ons and unavailable for Google Chat apps.

JSON representation

```
{
  "actionLabel": string,
  "onClick": {
    object (OnClick)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actionLabel</code></td><td><p><code>string</code></p><p>The label that displays as the action menu item.</p></td></tr><tr><td><code>onClick</code></td><td><p><code>object (<code>OnClick</code>)</code></p><p>The <code>onClick</code> action for this action item.</p></td></tr></tbody></table>

### CardFixedFooter

JSON representation

```
{
  "primaryButton": {
    object (Button)
  },
  "secondaryButton": {
    object (Button)
  }
}
```

### DisplayStyle

In Google Workspace add-ons, determines how a card is displayed.

![](https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg) Available for Google Workspace add-ons and unavailable for Google Chat apps.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DISPLAY_STYLE_UNSPECIFIED</code></td><td>Don't use. Unspecified.</td></tr><tr><td><code>PEEK</code></td><td>The header of the card appears at the bottom of the sidebar, partially covering the current top card of the stack. Clicking the header pops the card into the card stack. If the card has no header, a generated header is used instead.</td></tr><tr><td><code>REPLACE</code></td><td>Default value. The card is shown by replacing the view of the top card in the card stack.</td></tr></tbody></table>

### ExpressionData

Represents the data that is used to evaluate an expression.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

JSON representation

```
{
  "id": string,
  "expression": string,
  "conditions": [
    {
      object (Condition)
    }
  ],
  "eventActions": [
    {
      object (EventAction)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique identifier of the ExpressionData.</p></td></tr><tr><td><code>expression</code></td><td><p><code>string</code></p><p>The uncompiled expression.</p></td></tr><tr><td><code>conditions[]</code></td><td><p><code>object (<code>Condition</code>)</code></p><p>The list of conditions that are determined by the expression evaluation result.</p></td></tr><tr><td><code>eventActions[]</code></td><td><p><code>object (<code>EventAction</code>)</code></p><p>The list of actions that the ExpressionData can be used.</p></td></tr></tbody></table>

### Condition

Represents a condition that can be used to trigger an action.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

JSON representation

```
{
  "actionRuleId": string,

  "expressionDataCondition": {
    object (ExpressionDataCondition)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actionRuleId</code></td><td><p><code>string</code></p><p>The unique identifier of the ActionRule.</p></td></tr><tr><td colspan="2">Union field <code>condition</code>. The condition. <code>condition</code> can be only one of the following:</td></tr><tr><td><code>expressionDataCondition</code></td><td><p><code>object (<code>ExpressionDataCondition</code>)</code></p><p>The condition that is determined by the expression data.</p></td></tr></tbody></table>

### ExpressionDataCondition

Represents a condition that is evaluated using CEL.

Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.

JSON representation

```
{
  "conditionType": enum (ConditionType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>conditionType</code></td><td><p><code>enum (<code>ConditionType</code>)</code></p><p>The type of the condition.</p></td></tr></tbody></table>

### ConditionType

The type of the condition.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CONDITION_TYPE_UNSPECIFIED</code></td><td>Unspecified condition type.</td></tr><tr><td><code>EXPRESSION_EVALUATION_SUCCESS</code></td><td>The expression evaluation was successful.</td></tr><tr><td><code>EXPRESSION_EVALUATION_FAILURE</code></td><td>The expression evaluation was unsuccessful.</td></tr></tbody></table>
