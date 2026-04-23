---
source: https://developers.google.com/workspace/chat/troubleshoot-cards
root: workspace
fetched_at: 2026-04-23T15:25:34.326Z
---

# Troubleshoot and fix cards and dialogs

## Page Summary

- This guide helps you troubleshoot and fix common errors related to cards in Google Chat apps.
- Card errors can manifest as missing or incorrectly rendered elements, or issues with dialogs.
- Common causes include missing or misspelled JSON fields in card definitions.
- Refer to the Cards v2 reference documentation for detailed field requirements and structure.
- For asynchronous app architectures, consider using card messages instead of dialogs for interactive elements.

This guide describes common [card](https://developers.google.com/workspace/chat/create-messages#create) -related errors that you might encounter, and how to fix them.

---

Use the Card Builder to design and preview messaging and user interfaces for Chat apps:

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

---

## How card errors appear

Card errors manifest in several ways:

- Part of a card, like a widget or component, doesn't appear or renders in an unexpected way.
- The entire card doesn't appear.
- A dialog closes, doesn't open, or doesn't load.

If you encounter behavior like this, it means there's an error with your app's card.

## For reference: a working, error-free card message and dialog

Before examining erroneous card examples, first consider this working card message and dialog. To illustrate each example error and its fix, this card's JSON is modified by introducing errors.

### An error-free card message

Here's the working, error-free card message detailing contact information that features a header, sections, and widgets like decorated text and buttons:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=contact-header-widgets&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with footer"></iframe>

### An error-free dialog

Here's the working, error-free dialog that creates a contact by collecting information from users, featuring a footer, and editable widgets like text input and switches, and buttons:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=create-contact-dialog&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with footer"></iframe>

## Error: Part of a card doesn't appear

Sometimes cards render, but part of a card that you expected to see doesn't appear; the likely causes are:

- A required JSON field is missing.
- A JSON field is misspelled or incorrectly capitalized.

### Cause: Missing a required JSON field

In this example error, a required JSON field, `title`, is missing. As a result, the card renders, but parts of the card that are expected to appear don't. It can be difficult to predict how cards render when required fields are omitted.

To fix this error, add the required JSON field; in this example, `title`.

To learn whether or not a JSON field is required, see the [Cards v2 reference documentation](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards). In this example, refer to the description of the [`title` field on `CardHeader`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#cardheader).

Here are two examples:

#### Example 1: Specifying subtitle but omitting the required title causes the entire header to appear blank:

![This card's header doesn't display because a required field, title, is missing.](https://developers.google.com/static/workspace/chat/images/troubleshoot/troubleshoot-cards-missing-required-entity-header-title-1.png)

Figure 1: This card's header doesn't display because a required field, title, is missing.

#### View erroneous card JSON snippet

Error: A required field, `title`, is missing from `header`.

```
. . .
"header": {

        "subtitle": "Software Engineer"
      }
. . .
```

#### View correct card JSON snippet

Fixed: The required field, `title`, is part of the `header` specification.

```
. . .
"header": {
        "title": "Sasha",
        "subtitle": "Software Engineer"
      }
. . .
```

#### Example 2: Specifying subtitle, imageUrl, imageType, and imageAltText but omitting the required title causes the image to render as expected, but not the subtitle:

![This card's header doesn't display because a required field, title, is missing.](https://developers.google.com/static/workspace/chat/images/troubleshoot/troubleshoot-cards-missing-required-entity-header-title-2.png)

Figure 2: This card's header doesn't display the subtitle because a required field, title, is missing, but the image renders as expected.

#### View erroneous card JSON snippet

Error: A required field, `title`, is missing from `header`.

```
. . .
"header": {

        "subtitle": "Software Engineer",
        "imageUrl":
        "https://developers.google.com/chat/images/quickstart-app-avatar.png",
        "imageType": "CIRCLE",
        "imageAltText": "Avatar for Sasha",
      }
. . .
```

#### View correct card JSON snippet

Fixed: The required field, `title`, is part of the `header` specification.

```
. . .
"header": {
        "title": "Sasha",
        "subtitle": "Software Engineer",
        "imageUrl":
        "https://developers.google.com/chat/images/quickstart-app-avatar.png",
        "imageType": "CIRCLE",
        "imageAltText": "Avatar for Sasha",
      }
. . .
```

### Cause: Incorrectly spelled or capitalized JSON

In this example error, the card JSON includes all the requisite fields, but one field, `imageUrl` is capitalized incorrectly as `imageURL` (capital `R` capital `L`), which causes an error: the image it points to doesn't render.

To fix this error, and others like it, use the correct JSON formatting. In this case, `imageUrl` is correct. When in doubt, check card JSON against the [card](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) reference document.

![This card's header doesn't display because a required field, title, is missing.](https://developers.google.com/static/workspace/chat/images/troubleshoot/troubleshoot-cards-imageURL-instead-of-imageUrl.png)

Figure 3: This card's header doesn't display the subtitle because a required field, title, is missing, but the image renders as expected.

#### View erroneous card JSON snippet

Error: The field `imageURL` is capitalized incorrectly. It should be `imageUrl`.

```
. . .
"header": {
  "title": "Sasha",
  "subtitle": "Software Engineer",
  "imageURL":
  "https://developers.google.com/chat/images/quickstart-app-avatar.png",
  "imageType": "CIRCLE",
  "imageAltText": "Avatar for Sasha",
}
. . .
```

#### View correct card JSON snippet

Fixed: The field `imageUrl` is capitalized correctly.

```
. . .
"header": {
        "title": "Sasha",
        "subtitle": "Software Engineer",
        "imageUrl":
        "https://developers.google.com/chat/images/quickstart-app-avatar.png",
        "imageType": "CIRCLE",
        "imageAltText": "Avatar for Sasha",
      }
. . .
```

## Error: An entire card doesn't appear

Sometimes the card itself doesn't appear; the likely causes are:

- A [`ButtonList` widget](https://developers.google.com/workspace/chat/button-list) is specified incorrectly.
- A [`CardFixedFooter` widget](https://developers.google.com/workspace/chat/card-fixed-footer) has an incorrectly specified button.

### Cause: Incorrectly specified buttonList or cardFixedFooter

If a card message or dialog includes an incorrectly specified [`ButtonList` widget](https://developers.google.com/workspace/chat/button-list) or a [`CardFixedFooter` widget](https://developers.google.com/workspace/chat/card-fixed-footer) with incorrectly specified buttons, the entire card doesn't display, and nothing appears in its place. Incorrect specifications could include missing fields, incorrectly spelled or capitalized fields, or improperly structured JSON, such as a missing comma, quote, or curly brace.

To fix this error, check card JSON against the [card](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) reference document. In particular, compare any `ButtonList` widgets with the [`ButtonList` widget guide](https://developers.google.com/workspace/chat/button-list).

**Example:** In a [`ButtonList` widget guide](https://developers.google.com/workspace/chat/button-list), passing an incomplete `onClick` action in the first button prevents the entire card from rendering.

#### View erroneous card JSON snippet

Error: The `onClick` object has no fields specified, so the entire card doesn't appear.

```
. . .
{
  "buttonList": {
    "buttons": [
      {
        "text": "Share",
        "onClick": {

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
                "value": "EDIT",
              }
            ],
          }
        }
      },
    ],
  },
}
. . .
```

#### View correct card JSON snippet

Fixed: The `onClick` object now has an `openLink` field, so the card appears as expected.

```
. . .
{
  "buttonList": {
    "buttons": [
      {
        "text": "Share",
        "onClick": {
          "openLink": {
            "url": "https://example.com/share",
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
                "value": "EDIT",
              }
            ],
          }
        }
      },
    ],
  },
}
. . .
```

## Error: A dialog closes, stalls, or doesn't open

If a [dialog](https://developers.google.com/workspace/chat/dialogs) closes unexpectedly, fails to load, or doesn't open, the likely cause is an issue with its card interface.

These are the most common reasons:

- The [`CardFixedFooter` widget](https://developers.google.com/workspace/chat/card-fixed-footer) has no `primaryButton`.
- A button in the [`CardFixedFooter` widget](https://developers.google.com/workspace/chat/card-fixed-footer) has no `onClick` action, or its `onClick` action is specified incorrectly.
- A [`TextInput` widget](https://developers.google.com/workspace/chat/text-input) is missing a `name` field.

### Cause: CardFixedFooter has no primaryButton

In [dialogs](https://developers.google.com/workspace/chat/dialogs) with a [`CardFixedFooter` widget](https://developers.google.com/workspace/chat/card-fixed-footer), specifying a `primaryButton` with both text and color is required. Omitting the `primaryButton` or setting it incorrectly prevents the entire dialog from appearing.

To fix this error, make sure the `CardFixedFooter` widget includes a correctly specified `primaryButton`.

#### View erroneous card JSON snippet

Error: The `fixedFooter` object has no `primaryButton` field specified, causing the dialog to fail to load or open.

```
. . .
"fixedFooter": {

    "onClick": {
      . . .
  },
  "secondaryButton": {
    . . .
    }
  }
}
. . .
```

#### View correct card JSON snippet

Fixed: The `fixedFooter` now has a `primaryButton` field specified, so the dialog works as expected.

```
. . .
"fixedFooter": {
  "primaryButton": {
    "text": "Submit",
    "color": {
      "red": 0,
      "blue": 1,
      "green": 0
    },
    "onClick": {
      . . .
  },
  "secondaryButton": {
    . . .
    }
  }
}
. . .
```

### Cause: Incorrect onClick setting in FixedFooter

In [dialogs](https://developers.google.com/workspace/chat/dialogs) with a [`CardFixedFooter` widget](https://developers.google.com/workspace/chat/card-fixed-footer), specifying the `onClick` setting on any button incorrectly, or omitting it, causing the dialog to close, fail to load, or not open.

To fix this error, make sure each button includes a correctly specified `onClick` setting.

#### View erroneous card JSON snippet

Error: The `primaryButton` object has an `onClick` field with a misspelled \`parameters\` array, causing the dialog to fail to load or open.

```
. . .
"fixedFooter": {
  "primaryButton": {
    "text": "Submit",
    "color": {
      "red": 0,
      "blue": 1,
      "green": 0
    },
    "onClick": {
      "action": {
        "function": "setLanguageType",
        "parrammetters": [
          {
            "key": "languageType",
            "value": "C++"
          }
        ]
      }
    }
  },
  "secondaryButton": {
    "text": "Cancel",
    "onClick": {
      "action": {
        "function": "reset"
      }
    }
  }
}
. . .
```

#### View correct card JSON snippet

Fixed: The `primaryButton` object has an `onClick` field with a correctly spelled \`parameters\` array, so the dialog works as expected.

```
. . .
"fixedFooter": {
  "primaryButton": {
    "text": "Submit",
    "color": {
      "red": 0,
      "blue": 1,
      "green": 0
    },
    "onClick": {
      "action": {
        "function": "setLanguageType",
        "parameters": [
          {
            "key": "languageType",
            "value": "C++"
          }
        ]
      }
    }
  },
  "secondaryButton": {
    "text": "Cancel",
    "onClick": {
      "action": {
        "function": "reset"
      }
    }
  }
}
. . .
```

### Cause: TextInput has no name

If a dialog includes a [`TextInput` widget](https://developers.google.com/workspace/chat/text-input) that excludes the `name` field, the dialog doesn't behave as expected. It might close, open but fail to load, or not open.

To fix this error, make sure each `TextInput` widget includes an appropriate `name` field. Make sure each `name` field in the card is unique.

#### View erroneous card JSON snippet

Error: The `textInput` object has no `name` field specified, causing the dialog to close, fail to load, or fail to open.

```
. . .
{
  "textInput": {
    "label": "Name",
    "type": "SINGLE_LINE",

  }
}
. . .
```

#### View correct card JSON snippet

Fixed: The `textInput` now has a `name` field specified, so the dialog works as expected.

```
. . .
{
  "textInput": {
    "label": "Name",
    "type": "SINGLE_LINE",
    "name": "contactName"
  }
}
. . .
```

## Dialog open, submit, or cancel actions fail with an asynchronous app architecture

If your Chat app returns the error message `Could not load dialog. Invalid response returned by bot.` while working with [dialogs](https://developers.google.com/workspace/chat/dialogs), it might be because your app uses an asynchronous [architecture](https://developers.google.com/workspace/chat/structure), like [Cloud Pub/Sub](https://developers.google.com/workspace/chat/quickstart/pub-sub) or the [Create Message](https://developers.google.com/workspace/chat/create-messages) API method.

Opening, submitting, or canceling a [dialog](https://developers.google.com/workspace/chat/dialogs) requires a synchronous response from a Chat app with a [`DialogEventType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/DialogEventType). Accordingly, dialogs aren't supported by apps built with an asynchronous [architecture](https://developers.google.com/workspace/chat/structure).

As a workaround, consider using a [card message](https://developers.google.com/workspace/chat/create-messages#create) instead of a dialog.

## Other card and dialog errors

If the fixes described on this page don't resolve the card-related error your app experiences, [query the app's error logs](https://developers.google.com/workspace/chat/query-logs). Querying the logs can help find errors in card JSON or app code, and the logs include descriptive error messages to help you fix them.

## Related topics

For help fixing Google Chat app errors, see [Troubleshoot and fix Google Chat app](https://developers.google.com/workspace/chat/troubleshoot-chat-apps) and [Debug Chat apps](https://developers.google.com/workspace/chat/debug-apps).
