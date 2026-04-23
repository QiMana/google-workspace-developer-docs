---
source: https://developers.google.com/workspace/chat/messages-overview
root: workspace
fetched_at: 2026-04-23T15:25:29.492Z
---

# Google Chat messages overview

## Page Summary

- Google Chat apps use text messages for basic information and cards for interactive elements or richer content.
- Text messages appear inline within the chat, similar to regular user messages.
- Cards provide a structured format to include images, buttons, and other interactive widgets within a message.
- Card messages are represented as JSON objects using the `cardsV2` field in the Google Chat API.
- The Card Builder tool can be used to design and preview cards for Chat apps.

This page explains the differences between text and card messages.

When Chat apps send text messages to convey basic information, the messages appear inline, just like how people in Google Chat write messages. To create messages that contain more than text, or to create messages that users can interact with, Chat apps can use [cards](./create-messages.md#create). Chat apps can also append a text message with a card. To prompt users to finish multi-step processes such as completing a form, Chat apps can also create cards that open in a new window as [dialogs](./dialogs.md).

## Anatomy of a text message

In the Google Chat API, messages are represented as JSON objects. Within a message, a text message is represented as a [`text`](./api/reference/rest/v1/spaces.messages.md#Message.FIELDS.text) object.

In the following example, a Chat app creates a text message in a space for a team of software developers that a code freeze is approaching:

```
{
  "text": "Attention <users/all>: Code freeze starts at \`11:59 am\` Pacific Standard Time! If you need a little more time, type \`/moreTime\` and I'll push the code freeze back one hour."
}
```

The JSON returns the following message:

![Example text message in Google Chat that announces code freeze.](https://developers.google.com/static/workspace/chat/images/design-principles-interactivity-notifications.png)

## Anatomy of a card message

In the Google Chat API, messages are represented as JSON objects. Within a message a card is represented as a [`cardsV2`](./api/reference/rest/v1/spaces.messages.md#Message.FIELDS.cards_v2) array and consists of the following:

- One or more [`CardWithId` objects](./api/reference/rest/v1/spaces.messages.md#CardWithId).
- A `cardId`, used to identify the card and scoped within a given message. (Cards in different messages can have the same ID.)
- A `card` object, which consists of the following:
	- A [`header` object](./api/reference/rest/v1/cards.md#CardHeader_1) that specifies things like a title, subtitle, and avatar-style image.
		- One or more [`section` objects](./api/reference/rest/v1/cards.md#section) that each contain at least one widget.
		- One or more [`widget` objects](./api/reference/rest/v1/cards.md#Widget). Each widget is a composite object that can represent text, images, buttons, and other object types.

As an example, the following card message contains [`header`](./api/reference/rest/v1/cards.md#CardHeader_1), [`section`](./api/reference/rest/v1/cards.md#section), and [`widget`](./api/reference/rest/v1/cards.md#Widget) objects:

![A Chat app running a poll in a Chat
space using a card
message](https://developers.google.com/static/workspace/chat/images/ui/card-message-anatomy.png)

The following code represents the JSON of the card message:

### JSON

```
{
  "cardsV2": [
    {
      "cardId": "unique-card-id",
      "card": {
        "header": {
          "title": "Sasha",
          "subtitle": "Software Engineer",
          "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png",
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

---

Use the Card Builder to design and preview messaging and user interfaces for Chat apps:

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

---

## Related topics

- [Send a message](./create-messages.md)
- [Format messages](./format-messages.md)
