---
source: https://developers.google.com/workspace/chat/send-app-home-card-message
root: workspace
fetched_at: 2026-04-23T15:25:34.917Z
---

# Build a homepage for a Google Chat app

## Page Summary

- Google Chat apps can have a customizable homepage, called "app home," in direct message spaces for sharing tips or accessing external tools.
- Building an app home requires configuring your Chat app to receive `APP_HOME` events and designing a card interface using the Card Builder or code.
- App home cards can include interactive widgets like buttons that trigger events, which your app needs to handle to update the displayed content.
- You can open dialogs from app home to gather information from users or perform other actions, and these dialogs can be sequential.
- When users interact with widgets in app home or dialogs, your app responds by returning `RenderActions` to update the card or navigate within the app.

This page explains how to build a homepage for direct messages with your Google Chat app. A homepage, referred to as *app home* in the Google Chat API, is a customizable card interface that appears in the **Home** tab of [direct message spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype) between a user and a Chat app.

![App home card with two widgets.](https://developers.google.com/static/workspace/chat/images/app-home-card-message.png)

Figure 1: An example of a homepage that appears in direct messages with a Chat app.

You can use app home to share tips for interacting with the Chat app or letting users access and use an [external service or tool](https://developers.google.com/workspace/chat/connect-web-services-tools) from Chat.

---

Use the Card Builder to design and preview messaging and user interfaces for Chat apps:

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

---

## Prerequisites

### Node.js

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).

### Python

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).

### Java

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app using an HTTP service, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/gcf-app).

### Apps Script

A Google Chat app that receives and responds to [interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions). To create an interactive Chat app in Apps Script, complete this [quickstart](https://developers.google.com/workspace/chat/quickstart/apps-script-app).

## Configure app home for your Chat app

To support app home, you must configure your Chat app to receive [`APP_HOME` interaction events](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event), Your Chat app receives this event whenever a user clicks the **Home** tab from a direct message with the Chat app.

To update your configuration settings in the Google Cloud console, do the following:

1. In the Google Cloud console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**. [Go to Chat API configuration](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under **Interactive features**, go to the **Functionality** section, and select **Support App Home**.
3. If your Chat app uses an HTTP service, go to **Connection settings** and specify an endpoint for the **App Home URL** field. You can use the same URL that you specified in the **HTTP endpoint URL** field.
4. Click **Save**.

## Build an app home card

When a user opens app home, your Chat app must handle the `APP_HOME` interaction event by returning an instance of [`RenderActions`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#renderactions) with `pushCard` navigation and a [`Card`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#card). To create an interactive experience, the card can contain interactive widgets such as buttons or text inputs that the Chat app can process and respond to with additional cards, or a dialog.

In the following example, the Chat app displays an initial app home card that displays the time the card was created and a button. When a user clicks the button, the Chat app returns an updated card that displays the time the updated card was created.

### Node.js

```
app.post('/', async (req, res) => {
  let event = req.body.chat;

  let body = {};
  if (event.type === 'APP_HOME') {
    // App home is requested
    body = { action: { navigations: [{
      pushCard: getHomeCard()
    }]}}
  } else if (event.type === 'SUBMIT_FORM') {
    // The update button from app home is clicked
    commonEvent = req.body.commonEventObject;
    if (commonEvent && commonEvent.invokedFunction === 'updateAppHome') {
      body = updateAppHome()
    }
  }

  return res.json(body);
});

// Create the app home card
function getHomeCard() {
  return { sections: [{ widgets: [
    { textParagraph: {
      text: "Here is the app home 🏠 It's " + new Date().toTimeString()
    }},
    { buttonList: { buttons: [{
      text: "Update app home",
      onClick: { action: {
        function: "updateAppHome"
      }}
    }]}}
  ]}]};
}
```

### Python

```
@app.route('/', methods=['POST'])
def post() -> Mapping[str, Any]:
  """Handle requests from Google Chat

  Returns:
      Mapping[str, Any]: the response
  """
  event = request.get_json()
  match event['chat'].get('type'):

    case 'APP_HOME':
      # App home is requested
      body = { "action": { "navigations": [{
        "pushCard": get_home_card()
      }]}}

    case 'SUBMIT_FORM':
      # The update button from app home is clicked
      event_object = event.get('commonEventObject')
      if event_object is not None:
        if 'update_app_home' == event_object.get('invokedFunction'):
          body = update_app_home()

    case _:
      # Other response types are not supported
      body = {}

  return json.jsonify(body)

def get_home_card() -> Mapping[str, Any]:
  """Create the app home card

  Returns:
      Mapping[str, Any]: the card
  """
  return { "sections": [{ "widgets": [
    { "textParagraph": {
      "text": "Here is the app home 🏠 It's " +
        datetime.datetime.now().isoformat()
    }},
    { "buttonList": { "buttons": [{
      "text": "Update app home",
      "onClick": { "action": {
        "function": "update_app_home"
      }}
    }]}}
  ]}]}
```

### Java

```
// Process Google Chat events
@PostMapping("/")
@ResponseBody
public GenericJson onEvent(@RequestBody JsonNode event) throws Exception {
  switch (event.at("/chat/type").asText()) {
    case "APP_HOME":
      // App home is requested
      GenericJson navigation = new GenericJson();
      navigation.set("pushCard", getHomeCard());

      GenericJson action = new GenericJson();
      action.set("navigations", List.of(navigation));

      GenericJson response = new GenericJson();
      response.set("action", action);
      return response;
    case "SUBMIT_FORM":
      // The update button from app home is clicked
      if (event.at("/commonEventObject/invokedFunction").asText().equals("updateAppHome")) {
        return updateAppHome();
      }
  }

  return new GenericJson();
}

// Create the app home card
GoogleAppsCardV1Card getHomeCard() {
  return new GoogleAppsCardV1Card()
    .setSections(List.of(new GoogleAppsCardV1Section()
      .setWidgets(List.of(
        new GoogleAppsCardV1Widget()
          .setTextParagraph(new GoogleAppsCardV1TextParagraph()
            .setText("Here is the app home 🏠 It's " + new Date())),
        new GoogleAppsCardV1Widget()
          .setButtonList(new GoogleAppsCardV1ButtonList().setButtons(List.of(new GoogleAppsCardV1Button()
            .setText("Update app home")
            .setOnClick(new GoogleAppsCardV1OnClick()
              .setAction(new GoogleAppsCardV1Action()
                .setFunction("updateAppHome"))))))))));
}
```

### Apps Script

Implement the `onAppHome` function that is called after all `APP_HOME` interaction events:

This example sends a card message by returning [card JSON](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards). You can also use the [Apps Script card service](https://developers.google.com/apps-script/reference/card-service).

```
/**
 * Responds to a APP_HOME event in Google Chat.
 */
function onAppHome() {
  return { action: { navigations: [{
    pushCard: getHomeCard()
  }]}};
}

/**
 * Returns the app home card.
 */
function getHomeCard() {
  return { sections: [{ widgets: [
    { textParagraph: {
      text: "Here is the app home 🏠 It's " + new Date().toTimeString()
    }},
    { buttonList: { buttons: [{
      text: "Update app home",
      onClick: { action: {
        function: "updateAppHome"
      }}
    }]}}
  ]}]};
}
```

## Respond to app home interactions

If your initial app home card contains interactive widgets, such as buttons or selection inputs, your Chat app must handle the related interaction events by returning an instance of [`RenderActions`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#renderactions) with `updateCard` navigation. To learn more about handling interactive widgets, see [Process information inputted by users](https://developers.google.com/workspace/chat/read-form-data).

In the previous example, the initial app home card included a button. Whenever a user clicks the button, a [`CARD_CLICKED` interaction event](https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType) triggers the function `updateAppHome` to refresh the app home card, as shown in the following code:

### Node.js

```
// Update the app home
function updateAppHome() {
  return { renderActions: { action: { navigations: [{
    updateCard: getHomeCard()
  }]}}}
};
```

### Python

```
def update_app_home() -> Mapping[str, Any]:
  """Update the app home

  Returns:
      Mapping[str, Any]: the update card render action
  """
  return { "renderActions": { "action": { "navigations": [{
    "updateCard": get_home_card()
  }]}}}
```

### Java

```
// Update the app home
GenericJson updateAppHome() {
  GenericJson navigation = new GenericJson();
  navigation.set("updateCard", getHomeCard());

  GenericJson action = new GenericJson();
  action.set("navigations", List.of(navigation));

  GenericJson renderActions = new GenericJson();
  renderActions.set("action", action);

  GenericJson response = new GenericJson();
  response.set("renderActions", renderActions);
  return response;
}
```

### Apps Script

This example sends a card message by returning [card JSON](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards). You can also use the [Apps Script card service](https://developers.google.com/apps-script/reference/card-service).

```
/**
 * Updates the home app.
 */
function updateAppHome() {
  return { renderActions: { action: { navigations: [{
    updateCard: getHomeCard()
  }]}}};
}
```

### Open dialogs

Your Chat app can also respond to interactions in app home by opening [dialogs](https://developers.google.com/workspace/chat/dialogs).

![A dialog featuring a variety of different widgets.](https://developers.google.com/static/workspace/chat/images/dialogs-card-1.png)

Figure 3: A dialog that prompts a user to add a contact.

To open a dialog from app home, process the related interaction event by returning `renderActions` with `updateCard` navigation that contains a `Card` object. In the following example, a Chat app responds to a button click from an app home card by processing the `CARD_CLICKED` interaction event and opening a dialog:

```
{ renderActions: { action: { navigations: [{ updateCard: { sections: [{
  header: "Add new contact",
  widgets: [{ "textInput": {
    label: "Name",
    type: "SINGLE_LINE",
    name: "contactName"
  }}, { textInput: {
    label: "Address",
    type: "MULTIPLE_LINE",
    name: "address"
  }}, { decoratedText: {
    text: "Add to favorites",
    switchControl: {
      controlType: "SWITCH",
      name: "saveFavorite"
    }
  }}, { decoratedText: {
    text: "Merge with existing contacts",
    switchControl: {
      controlType: "SWITCH",
      name: "mergeContact",
      selected: true
    }
  }}, { buttonList: { buttons: [{
    text: "Next",
    onClick: { action: { function: "openSequentialDialog" }}
  }]}}]
}]}}]}}}
```

To close a dialog, process the following interaction events:

- `CLOSE_DIALOG`: Closes the dialog and returns to the Chat app's initial app home card.
- `CLOSE_DIALOG_AND_EXECUTE`: Closes the dialog and refreshes the app home card.

The following code sample uses `CLOSE_DIALOG` to close a dialog and return to the app home card:

```
{ renderActions: { action: {
  navigations: [{ endNavigation: { action: "CLOSE_DIALOG" }}]
}}}
```

To collect information from users, you can also build sequential dialogs. To learn how to build sequential dialogs, see [Open and respond to dialogs](https://developers.google.com/workspace/chat/dialogs#open-sequential).

## Related topics

- [View Chat app samples](https://developers.google.com/workspace/chat/samples) that use app home.
- [Open and respond to dialogs](https://developers.google.com/workspace/chat/dialogs).
