---
source: https://developers.google.com/workspace/chat/design-interactive-card-dialog
root: workspace
fetched_at: 2026-04-23T15:25:24.050Z
---

# Add interactive UI elements to cards

## Page Summary

- Google Chat app cards can be enhanced with interactive UI elements like buttons, dropdown menus, and text input fields for collecting user information.
- Developers can use widgets like `ButtonList`, `TextInput`, and `SelectionInput` to create dynamic and engaging user interfaces within Chat cards.
- Data validation can be implemented using `requiredWidgets` or `all_widgets_are_required` to ensure data integrity before card actions are performed.
- Selection input widgets like dropdown menus can be populated dynamically using external data sources and functions like `getContacts` for a customized user experience.
- Features like data validation for actions are currently in Developer Preview, providing early access to upcoming functionalities for Google Chat app development.

This page explains how to add widgets and UI elements to cards so that users can interact with your Google Chat app, such as by clicking a button or submitting information.

Chat apps can use the following Chat interfaces to build interactive cards:

- [Messages](https://developers.google.com/workspace/chat/messages-overview#anatomy-card) that contain one or more cards.
- [Homepages](https://developers.google.com/workspace/chat/send-app-home-card-message), which is a card that appears from the **Home** tab in direct messages with the Chat app.
- [Dialogs](https://developers.google.com/workspace/chat/dialogs), which are cards that open in a new window from messages and homepages.

When users interact with cards, Chat apps can use the data that they receive to process and respond accordingly. For details, see [Collect and process information from Google Chat users](https://developers.google.com/workspace/chat/read-form-data).

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

## Add a button

The [`ButtonList` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#buttonlist) displays a set of buttons. Buttons can display text, an icon, or both text and an icon. Each [`Button`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#button) supports an [`OnClick` action](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#OnClick_1) that occurs when users click the button. For example:

- Open a hyperlink with [`OpenLink`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#OpenLink_1), in order to provide users with additional information.
- Run an [`action`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#action) that runs a custom function, like calling an API.

For accessibility, buttons support alternative text.

### Add a button that runs a custom function

The following is a card consisting of a `ButtonList` widget with two buttons. One button opens the Google Chat developer documentation in a new tab. The other button runs a custom function called `goToView()` and passes the `viewType="BIRD EYE VIEW"` parameter.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=button-list&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with button list"></iframe>

### Add a button with Material Design style

The following displays a set of buttons in different Material Design button styles.

To apply Material Design style, don't include the 'color' attribute.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=button-material-design-style&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with Material Design buttons"></iframe>

### Add a button with custom color and a deactivated button

You can prevent users from clicking a button by setting `"disabled": "true"`.

The following displays a card consisting of a `ButtonList` widget with two buttons. One button uses the [`Color` field](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#color) to customize the button's background color. The other button is deactivated with the `Disabled` field, which prevents the user from clicking the button and executing the function.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=button-list-custom-color&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with colored and deactivated buttons"></iframe>

### Add a button with an icon

The following displays a card consisting of a `ButtonList` widget with two icon `Button` widgets. One button uses the [`knownIcon`](https://developers.google.com/workspace/chat/format-messages#builtinicons) field to display Google Chat's built-in email icon. The other button uses the `iconUrl` field to display a [custom icon widget](https://developers.google.com/workspace/chat/format-messages#customicons).

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=button-icon&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with button and icons"></iframe>

### Add a button with an icon and text

The following displays a card consisting of a `ButtonList` widget that prompts the user to send an email. The first button displays an email icon and the second button displays text. The user can click either the icon or text button to run the `sendEmail` function.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=button-icon-text&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with button, icon, and text"></iframe>

### Customize the button for a collapsible section

Customize the control button that collapses and expands sections within a card. Choose from a range of icons or images to visually represent the section's content, making it easier for users to understand and interact with the information.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=section-collapsible&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with customizable control"></iframe>

## Add an Overflow Menu

The [`Overflow menu`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Message.OverflowMenu) can be used in Chat cards to offer additional options and actions. It lets you include more options without cluttering the card's interface, ensuring a clean and organized design.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=overflow-menu&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with a Overflow Menu"></iframe>

## Add a Chips list

The [`ChipList`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Message.ChipList) widget provides a versatile and visually appealing way to display information. Use chip lists to represent tags, categories, or other relevant data, making it easier for users to navigate and interact with your content.

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=chip-list&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with a Chips list"></iframe>

## Collect information from users

This section explains how you can add widgets that collect information, such as text or selections.

To learn how to process what users input, see [Collect and process information from Google Chat users](https://developers.google.com/workspace/chat/read-form-data).

### Collect text

The [`TextInput` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textinput) provides a field in which users can enter text. The widget supports suggestions, which help users enter uniform data, and on-change actions, which are [`Actions`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Action) that run when a change occurs in the text input field, like a user adding or deleting text.

When you need to collect abstract or unknown data from users, use this `TextInput` widget. To collect defined data from users, use the [`SelectionInput`](https://developers.google.com/workspace/chat/selection-input) widget instead.

The following is a card consisting of a `TextInput` widget:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=text-input&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with text input widget"></iframe>

### Collect dates or times

The [`DateTimePicker` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#datetimepicker) lets users input a date, a time, or both a date and a time. Or, users can use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly.

The following displays a card consisting of three different types of `DateTimePicker` widgets:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=date-time-picker&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with date time picker."></iframe>

### Let users select items

The [`SelectionInput` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#selectioninput) provides a set of selectable items, such as checkboxes, radio buttons, switches, or a drop-down menu. You can use this widget to collect defined and standardized data from users. To collect undefined data from users, use the [`TextInput`](https://developers.google.com/workspace/chat/text-input) widget instead.

The `SelectionInput` widget supports suggestions, which help users enter uniform data, and on-change actions, which are [`Actions`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Action) that run when a change occurs in a selection input field, such as a user selecting or un-selecting an item.

Chat apps can receive and process the value of selected items. For details about working with form inputs, see [Process information inputted by users](https://developers.google.com/workspace/chat/read-form-data).

This section provides examples of cards that use the `SelectionInput` widget. The examples use different types of section inputs:

#### Add a checkbox

The following displays a card that asks the user to specify whether a contact is professional, personal, or both, with a `SelectionInput` widget that uses checkboxes:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=selection-checkboxes&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" height="500px" width="100%" title="Card with selection input widget"></iframe>

#### Add a radio button

The following displays a card that asks the user to specify whether a contact is professional or personal with a `SelectionInput` widget that uses radio buttons:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=selection-radio&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="100%" title="Card with selection input widget"></iframe>

#### Add a switch

The following displays a card that asks the user to specify whether a contact is professional, personal, or both with a `SelectionInput` widget that uses switches:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=selection-switch&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="100%" title="Card with selection input widget"></iframe>

#### Add a drop-down menu

The following displays a card that asks the user to specify whether a contact is professional or personal with a `SelectionInput` widget that uses a drop-down menu:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=selection-input&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="100%" title="Card with selection input widget"></iframe>

#### Dynamically populate drop-down menus

Available for Google Chat apps.

You can dynamically populate items for a drop-down menu from data sources in Google Workspace or from an external data source. To use dynamic data sources, you specify the `data_source_configs` field, which is an array of [`DataSourceConfig`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Message.DataSourceConfig) objects. Each `DataSourceConfig` can contain either a `platformDataSource` or a `remoteDataSource`. Only one `DataSourceConfig` is supported at this time.

##### Populate items from Google Workspace

To populate items from Google Workspace data sources, such as Google Workspace users, you specify the [`platformDataSource`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#Message.PlatformDataSource) field within a `DataSourceConfig`. Unlike using static `items`, you omit [`SelectionItem`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#selectionitem) objects, because these selection items are dynamically sourced from Google Workspace.

The following code shows a drop-down menu that populates Google Workspace users:

### JSON

```
{
  "sections": [
    {
      "header": "Section Header",
      "widgets": [
        {
          "selectionInput": {
            "name": "contacts",
            "type": "DROPDOWN",
            "label": "Select contact from organization",
            "data_source_configs": [
              {
                "platformDataSource": {
                  "commonDataSource": "USER"
                },
                "min_characters_trigger": 1
              }
            ]
          }
        }
      ]
    }
  ]
}
```

##### Populate items from an external data source

To populate items from a third-party or external data source, such as a customer relationship management (CRM) system, you use the `remoteDataSource` field within a `DataSourceConfig` to specify a function that returns items from the data source.

The following code shows a drop-down menu that populates items from an external set of contacts by running the function `getCrmLeads`:

### JSON

```
{
  "sections": [
    {
      "header": "Section Header",
      "widgets": [
        {
          "selectionInput": {
            "name": "crm_leads",
            "type": "DROPDOWN",
            "label": "Select CRM Lead",
            "data_source_configs": [
              {
                "remoteDataSource": {
                  "function": "getCrmLeads"
                },
                "min_characters_trigger": 2
              }
            ],
            "items": [
              {
                "text": "Suggested Lead 1",
                "value": "lead-1"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

To reduce requests to a dynamic data source, you can include suggested items that appear in the drop-down menu before users type. You can also configure the drop-down to autocomplete items based on what users type by setting `min_characters_trigger` within the `DataSourceConfig`. When a user types at least the number of characters specified in `min_characters_trigger`, the function specified in `remoteDataSource` is triggered. The event object passed to your function includes the user's input in the `autocomplete_widget_query` key.

#### Add a multiselect menu

The following displays a card that asks the user to select contacts from a multiselect menu:

<iframe src="https://addons.gsuite.google.com/uikit/builder?template=multiselect&amp;origin=https://developers.google.com&amp;origin=https://developers.devsite.corp.google.com" allow="clipboard-read; clipboard-write" height="500px" width="90%" title="Card with selection input widget"></iframe>

You can populate items for a multiselect menu from the following data sources in Google Workspace:

- **Google Workspace users**: You can only populate users within the same Google Workspace organization.
- **Chat spaces**: The user inputting items in the multiselect menu can only view and select spaces that they belong to within their Google Workspace organization.

To use Google Workspace data sources, you specify the [`platformDataSource`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#PlatformDataSource) field. Unlike other selection input types, you omit [`SelectionItem`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#selectionitem) objects, because these selection items are dynamically sourced from Google Workspace.

The following code shows a multiselect menu of Google Workspace users. To populate users, the selection input sets `commonDataSource` to `USER`:

### JSON

```
{
  "selectionInput": {
    "name": "contacts",
    "type": "MULTI_SELECT",
    "label": "Selected contacts",
    "multiSelectMaxSelectedItems": 5,
    "multiSelectMinQueryLength": 1,
    "platformDataSource": {
      "commonDataSource": "USER"
    }
  }
}
```

The following code shows a multiselect menu of Chat spaces. To populate spaces, the selection input specifies the `hostAppDataSource` field. The multiselect menu also sets `defaultToCurrentSpace` to `true`, which makes the current space the default selection in the menu:

### JSON

```
{
  "selectionInput": {
    "name": "spaces",
    "type": "MULTI_SELECT",
    "label": "Selected contacts",
    "multiSelectMaxSelectedItems": 3,
    "multiSelectMinQueryLength": 1,
    "platformDataSource": {
      "hostAppDataSource": {
        "chatDataSource": {
          "spaceDataSource": {
            "defaultToCurrentSpace": true
          }
        }
      }
    }
  }
}
```

Multiselect menus can also populate items from a third-party or external data source. For example, you can use multiselect menus to help a user select from a list of sales leads from a customer relationship management (CRM) system.

To use an external data source, you use the `externalDataSource` field to specify a function that returns items from the data source.

To reduce the requests to an external data source, you can include suggested items that appear in the multiselect menu before users type in the menu. For example, you can populate recently searched contacts for the user. To populate suggested items from an external data source, specify [`SelectionItem`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#SelectionItem) objects.

The following code shows a multiselect menu of items from an external set of contacts for the user. The menu displays one contact by default and runs the function `getContacts` to retrieve and populate items from the external data source:

### Node.js

```
selectionInput: {
  name: "contacts",
  type: "MULTI_SELECT",
  label: "Selected contacts",
  multiSelectMaxSelectedItems: 3,
  multiSelectMinQueryLength: 1,
  externalDataSource: { function: "getContacts" },
  // Suggested items loaded by default.
  // The list is static here but it could be dynamic.
  items: [getContact("3")]
}
```

### Python

```
'selectionInput': {
  'name': "contacts",
  'type': "MULTI_SELECT",
  'label': "Selected contacts",
  'multiSelectMaxSelectedItems': 3,
  'multiSelectMinQueryLength': 1,
  'externalDataSource': { 'function': "getContacts" },
  # Suggested items loaded by default.
  # The list is static here but it could be dynamic.
  'items': [get_contact("3")]
}
```

### Java

```
.setSelectionInput(new GoogleAppsCardV1SelectionInput()
  .setName("contacts")
  .setType("MULTI_SELECT")
  .setLabel("Selected contacts")
  .setMultiSelectMaxSelectedItems(3)
  .setMultiSelectMinQueryLength(1)
  .setExternalDataSource(new GoogleAppsCardV1Action().setFunction("getContacts"))
  .setItems(List.of(getContact("3")))))))))));
```

### Apps Script

```
selectionInput: {
  name: "contacts",
  type: "MULTI_SELECT",
  label: "Selected contacts",
  multiSelectMaxSelectedItems: 3,
  multiSelectMinQueryLength: 1,
  externalDataSource: { function: "getContacts" },
  // Suggested items loaded by default.
  // The list is static here but it could be dynamic.
  items: [getContact("3")]
}
```

For external data sources, you can also autocomplete items that users start typing in the multiselect menu. For example, if a user starts typing `Atl` for a menu that populates cities in the United States, your Chat app can autosuggest `Atlanta` before the user finishes typing. You can autocomplete up to 100 items.

To autocomplete items, you create a function that queries the external data source and returns items whenever a user types in the multiselect menu. The function must do the following:

- Pass an event object that represents the user interaction with the menu.
- Identify that the interaction event's [`invokedFunction`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#CommonEventObject.FIELDS.invoked_function) value matches the function from the `externalDataSource` field.
- When the functions match, return suggested items from the external data source. To suggest items based on what the user types, get the value for the `autocomplete_widget_query` key. This value represents what the user types in the menu.

The following code autocompletes items from an external data resource. Using the previous example, the Chat app suggests items based on when the function `getContacts` is triggered:

### Node.js

```
/**
 * Responds to a WIDGET_UPDATE event in Google Chat.
 *
 * @param {Object} event The event object from Chat API.
 * @return {Object} Response from the Chat app.
 */
function onWidgetUpdate(event) {
  if (event.common["invokedFunction"] === "getContacts") {
    const query = event.common.parameters["autocomplete_widget_query"];
    return { actionResponse: {
      type: "UPDATE_WIDGET",
      updatedWidget: { suggestions: { items: [
        // The list is static here but it could be dynamic.
        getContact("1"), getContact("2"), getContact("3"), getContact("4"), getContact("5")
      // Only return items based on the query from the user
      ].filter(e => !query || e.text.includes(query))}}
    }};
  }
}

/**
 * Generate a suggested contact given an ID.
 *
 * @param {String} id The ID of the contact to return.
 * @return {Object} The contact formatted as a suggested item for selectors.
 */
function getContact(id) {
  return {
    value: id,
    startIconUri: "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
    text: "Contact " + id
  };
}
```

### Python

```
def on_widget_update(event: dict) -> dict:
  """Responds to a WIDGET_UPDATE event in Google Chat."""
  if "getContacts" == event.get("common").get("invokedFunction"):
    query = event.get("common").get("parameters").get("autocomplete_widget_query")
    return { 'actionResponse': {
      'type': "UPDATE_WIDGET",
      'updatedWidget': { 'suggestions': { 'items': list(filter(lambda e: query is None or query in e["text"], [
        # The list is static here but it could be dynamic.
        get_contact("1"), get_contact("2"), get_contact("3"), get_contact("4"), get_contact("5")
      # Only return items based on the query from the user
      ]))}}
    }}

def get_contact(id: str) -> dict:
  """Generate a suggested contact given an ID."""
  return {
    'value': id,
    'startIconUri': "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
    'text': "Contact " + id
  }
```

### Java

```
// Responds to a WIDGET_UPDATE event in Google Chat.
Message onWidgetUpdate(JsonNode event) {
  if ("getContacts".equals(event.at("/invokedFunction").asText())) {
    String query = event.at("/common/parameters/autocomplete_widget_query").asText();
    return new Message().setActionResponse(new ActionResponse()
      .setType("UPDATE_WIDGET")
      .setUpdatedWidget(new UpdatedWidget()
        .setSuggestions(new SelectionItems().setItems(List.of(
          // The list is static here but it could be dynamic.
          getContact("1"), getContact("2"), getContact("3"), getContact("4"), getContact("5")
        // Only return items based on the query from the user
        ).stream().filter(e -> query == null || e.getText().indexOf(query) > -1).toList()))));
  }
  return null;
}

// Generate a suggested contact given an ID.
GoogleAppsCardV1SelectionItem getContact(String id) {
  return new GoogleAppsCardV1SelectionItem()
    .setValue(id)
    .setStartIconUri("https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png")
    .setText("Contact " + id);
}
```

### Apps Script

```
/**
 * Responds to a WIDGET_UPDATE event in Google Chat.
 *
 * @param {Object} event The event object from Chat API.
 * @return {Object} Response from the Chat app.
 */
function onWidgetUpdate(event) {
  if (event.common["invokedFunction"] === "getContacts") {
    const query = event.common.parameters["autocomplete_widget_query"];
    return { actionResponse: {
      type: "UPDATE_WIDGET",
      updatedWidget: { suggestions: { items: [
        // The list is static here but it could be dynamic.
        getContact("1"), getContact("2"), getContact("3"), getContact("4"), getContact("5")
      // Only return items based on the query from the user
      ].filter(e => !query || e.text.includes(query))}}
    }};
  }
}

/**
 * Generate a suggested contact given an ID.
 *
 * @param {String} id The ID of the contact to return.
 * @return {Object} The contact formatted as a suggested item for selectors.
 */
function getContact(id) {
  return {
    value: id,
    startIconUri: "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
    text: "Contact " + id
  };
}
```

### Validate data inputted to cards

This page explains how to validate data inputted to a card's [`action`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#action) and widgets. For example, you can validate that a text input field has text entered by the user, or that it contains a certain number of characters.

#### Set required widgets for actions

As part of the card's [`action`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#action), add names of widgets that an action needs to its `requiredWidgets` list.

If any widgets listed here don't have a value when this action is invoked, then the form action submission is cancelled.

When `"all_widgets_are_required": "true"` is set for an action, then all widgets in the card are required by this action.

##### Set an all\_widgets\_are\_required action in multiselect

### JSON

```
{
  "sections": [
    {
      "header": "Select contacts",
      "widgets": [
        {
          "selectionInput": {
            "type": "MULTI_SELECT",
            "label": "Selected contacts",
            "name": "contacts",
            "multiSelectMaxSelectedItems": 3,
            "multiSelectMinQueryLength": 1,
            "onChangeAction": {
              "all_widgets_are_required": true
            },
            "items": [
              {
                "value": "contact-1",
                "startIconUri": "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
                "text": "Contact 1",
                "bottomText": "Contact one description",
                "selected": false
              },
              {
                "value": "contact-2",
                "startIconUri": "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
                "text": "Contact 2",
                "bottomText": "Contact two description",
                "selected": false
              },
              {
                "value": "contact-3",
                "startIconUri": "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
                "text": "Contact 3",
                "bottomText": "Contact three description",
                "selected": false
              },
              {
                "value": "contact-4",
                "startIconUri": "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
                "text": "Contact 4",
                "bottomText": "Contact four description",
                "selected": false
              },
              {
                "value": "contact-5",
                "startIconUri": "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
                "text": "Contact 5",
                "bottomText": "Contact five description",
                "selected": false
              }
            ]
          }
        }
      ]
    }
  ]
}
```

##### Set an all\_widgets\_are\_required action in dateTimePicker

### JSON

```
{
  "sections": [
    {
      "widgets": [
        {
          "textParagraph": {
            "text": "A datetime picker widget with both date and time:"
          }
        },
        {
          "divider": {}
        },
        {
          "dateTimePicker": {
            "name": "date_time_picker_date_and_time",
            "label": "meeting",
            "type": "DATE_AND_TIME"
          }
        },
        {
          "textParagraph": {
            "text": "A datetime picker widget with just date:"
          }
        },
        {
          "divider": {}
        },
        {
          "dateTimePicker": {
            "name": "date_time_picker_date_only",
            "label": "Choose a date",
            "type": "DATE_ONLY",
            "onChangeAction":{
              "all_widgets_are_required": true
            }
          }
        },
        {
          "textParagraph": {
            "text": "A datetime picker widget with just time:"
          }
        },
        {
          "divider": {}
        },
        {
          "dateTimePicker": {
            "name": "date_time_picker_time_only",
            "label": "Select a time",
            "type": "TIME_ONLY"
          }
        }
      ]
    }
  ]
}
```

##### Set an all\_widgets\_are\_required action in drop-down menu

### JSON

```
{
  "sections": [
    {
      "header": "Section Header",
      "collapsible": true,
      "uncollapsibleWidgetsCount": 1,
      "widgets": [
        {
          "selectionInput": {
            "name": "location",
            "label": "Select Color",
            "type": "DROPDOWN",
            "onChangeAction": {
              "all_widgets_are_required": true
            },
            "items": [
              {
                "text": "Red",
                "value": "red",
                "selected": false
              },
              {
                "text": "Green",
                "value": "green",
                "selected": false
              },
              {
                "text": "White",
                "value": "white",
                "selected": false
              },
              {
                "text": "Blue",
                "value": "blue",
                "selected": false
              },
              {
                "text": "Black",
                "value": "black",
                "selected": false
              }
            ]
          }
        }
      ]
    }
  ]
}
```

#### Set the validation for a text input widget

In the [`textInput`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textinput) widget's validation field, it can specify the character limit and input type for this text input widget.

##### Set a character limit for a text input widget

### JSON

```
{
  "sections": [
    {
      "header": "Tell us about yourself",
      "collapsible": true,
      "uncollapsibleWidgetsCount": 2,
      "widgets": [
        {
          "textInput": {
            "name": "favoriteColor",
            "label": "Favorite color",
            "type": "SINGLE_LINE",
            "validation": {"character_limit":15},
            "onChangeAction":{
              "all_widgets_are_required": true
            }
          }
        }
      ]
    }
  ]
}
```

##### Set the input type for a text input widget

### JSON

```
{
  "sections": [
    {
      "header": "Validate text inputs by input types",
      "collapsible": true,
      "uncollapsibleWidgetsCount": 2,
      "widgets": [
        {
          "textInput": {
            "name": "mailing_address",
            "label": "Please enter a valid email address",
            "type": "SINGLE_LINE",
            "validation": {
              "input_type": "EMAIL"
            },
            "onChangeAction": {
              "all_widgets_are_required": true
            }
          }
        },
        {
          "textInput": {
            "name": "validate_integer",
            "label": "Please enter a number",
              "type": "SINGLE_LINE",
            "validation": {
              "input_type": "INTEGER"
            }
          }
        },
        {
          "textInput": {
            "name": "validate_float",
            "label": "Please enter a number with a decimal",
            "type": "SINGLE_LINE",
            "validation": {
              "input_type": "FLOAT"
            }
          }
        }
      ]
    }
  ]
}
```

## Troubleshoot

When a Google Chat app or [card](https://developers.google.com/workspace/chat/create-messages#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](https://developers.google.com/workspace/chat/troubleshoot).

## Related topics

- [`ButtonList`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#buttonlist)
- [`Button`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#button)
- [`Color`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#color)
- [`knownIcon`](https://developers.google.com/workspace/chat/format-messages#builtinicons)
- [`SelectionInput`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#selectioninput)
- [`TextInput`](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textinput)
- [`DateTimePicker` widget](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#datetimepicker)
