---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/Event
root: workspace
fetched_at: 2026-04-23T15:25:01.460Z
---

# Event

## Page Summary

- A Google Chat app interaction event represents data about a user's interaction with a Chat app, including space events and user interactions.
- The `Event` object contains details such as event type, timestamp, user, space, and any associated form actions or dialog interactions.
- `CommonEventObject` provides information about the user's client, including locale, platform, timezone, and data submitted by users in cards or dialogs.
- User inputs are captured via different types like `StringInputs`, `DateTimeInput`, `DateInput`, and `TimeInput`, depending on the widget used.
- Timezone information is provided through the `TimeZone` object, containing the timezone ID and offset from UTC.

A Google Chat app interaction event that represents and contains data about a user's interaction with a Chat app. To configure your Chat app to receive interaction events, see [Receive and respond to user interactions](../../../../receive-respond-interactions.md).

In addition to receiving events from user interactions, Chat apps can receive events about changes to spaces, such as when a new member is added to a space. To learn about space events, see [Work with events from Google Chat](../../../../events-overview.md).

Note: This event is only used for [Chat interaction events](../../../../receive-respond-interactions.md). If your Chat app is built as a [Google Workspace add-on](../../../../../add-ons/chat/build.md), see [Chat event objects](../../../../../add-ons/concepts/event-objects.md#chat-event-object) in the add-ons documentation.

JSON representation

```
{
  "type": enum (EventType),
  "eventTime": string,
  "token": string,
  "threadKey": string,
  "message": {
    object (Message)
  },
  "user": {
    object (User)
  },
  "thread": {
    object (Thread)
  },
  "space": {
    object (Space)
  },
  "action": {
    object (FormAction)
  },
  "configCompleteRedirectUrl": string,
  "isDialogEvent": boolean,
  "dialogEventType": enum (DialogEventType),
  "common": {
    object (CommonEventObject)
  },
  "appCommandMetadata": {
    object (AppCommandMetadata)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>EventType</code>)</code></p><p>The <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType">type</a> of user interaction with the Chat app, such as <code>MESSAGE</code> or <code>ADDED_TO_SPACE</code>.</p></td></tr><tr><td><code>eventTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The timestamp indicating when the interaction event occurred.</p></td></tr><tr><td><code>token</code></td><td><p><code>string</code></p><p>A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the <a href="https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat">Chat API configuration page</a> in the Google Cloud Console.</p><p>Modern Chat apps don't use this field. It is absent from API responses and the <a href="https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat">Chat API configuration page</a>.</p></td></tr><tr><td><code>threadKey</code></td><td><p><code>string</code></p><p>The Chat app-defined key for the thread related to the interaction event. See <a href="https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key"><code>spaces.messages.thread.threadKey</code></a> for more information.</p></td></tr><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p><p>For <code>ADDED_TO_SPACE</code>, <code>CARD_CLICKED</code>, and <code>MESSAGE</code> interaction events, the message that triggered the interaction event, if applicable.</p></td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user that interacted with the Chat app.</p></td></tr><tr><td><code>thread</code></td><td><p><code>object (<code>Thread</code>)</code></p><p>The thread in which the user interacted with the Chat app. This could be in a new thread created by a newly sent message. This field is populated if the interaction event is associated with a specific message or thread.</p></td></tr><tr><td><code>space</code></td><td><p><code>object (<code>Space</code>)</code></p><p>The space in which the user interacted with the Chat app.</p></td></tr><tr><td><code>action</code></td><td><p><code>object (<code>FormAction</code>)</code></p><p>For <code>CARD_CLICKED</code> interaction events, the form action data associated when a user clicks a card or dialog. To learn more, see <a href="https://developers.google.com/workspace/chat/read-form-data">Read form data input by users on cards</a>.</p></td></tr><tr><td><code>configCompleteRedirectUrl</code></td><td><p><code>string</code></p><p>This URL is populated for <code>MESSAGE</code>, <code>ADDED_TO_SPACE</code>, and <code>APP_COMMAND</code> interaction events. After completing an authorization or configuration flow outside of Google Chat, users must be redirected to this URL to signal to Google Chat that the authorization or configuration flow was successful. For more information, see <a href="https://developers.google.com/workspace/chat/connect-web-services-tools">Connect a Chat app with other services and tools</a>.</p></td></tr><tr><td><code>isDialogEvent</code></td><td><p><code>boolean</code></p><p>For <code>CARD_CLICKED</code> and <code>MESSAGE</code> interaction events, whether the user is interacting with or about to interact with a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a>.</p></td></tr><tr><td><code>dialogEventType</code></td><td><p><code>enum (<code>DialogEventType</code>)</code></p><p>The type of <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a> interaction event received.</p></td></tr><tr><td><code>common</code></td><td><p><code>object (<code>CommonEventObject</code>)</code></p><p>Represents information about the user's client, such as locale, host app, and platform. For Chat apps, <code>CommonEventObject</code> includes information submitted by users interacting with <a href="https://developers.google.com/workspace/chat/dialogs">dialogs</a>, like data entered on a card.</p></td></tr></tbody></table>

## CommonEventObject

The common event object is the portion of the overall event object that carries general, host-independent information to the add-on from the user's client. This information includes details such as the user's locale, host app, and platform.

In addition to homepage and contextual triggers, add-ons construct and pass event objects to [action callback functions](../../../../../add-ons/concepts/actions.md#callback_functions) when the user interacts with widgets. Your add-on's callback function can query the common event object to determine the contents of open widgets in the user's client. For example, your add-on can locate the text a user has entered into a [TextInput](../../../../../../apps-script/reference/card-service/text-input.md) widget in the `eventObject.commentEventObject.formInputs` object.

For Chat apps, the name of the function that the user invoked when interacting with a widget.

JSON representation

```
{
  "userLocale": string,
  "hostApp": enum (HostApp),
  "platform": enum (Platform),
  "timeZone": {
    object (TimeZone)
  },
  "formInputs": {
    string: {
      object (Inputs)
    },
    ...
  },
  "parameters": {
    string: string,
    ...
  },
  "invokedFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>userLocale</code></td><td><p><code>string</code></p><p><strong>Disabled by default.</strong> The user's language and country/region identifier in the format of <a href="https://wikipedia.org/wiki/ISO_639_macrolanguage">ISO 639</a> language code- <a href="https://wikipedia.org/wiki/ISO_3166">ISO 3166</a> country/region code. For example, <code>en-US</code>.</p><p>To turn on this field, you must set <code>addOns.common.useLocaleFromApp</code> to <code>true</code> in your add-on's manifest. Your add-on's scope list must also include <code>https://www.googleapis.com/auth/script.locale</code>. See <a href="https://developers.google.com/workspace/add-ons/how-tos/access-user-locale">Accessing user locale and timezone</a> for more details.</p></td></tr><tr><td><code>hostApp</code></td><td><p><code>enum (<code>HostApp</code>)</code></p><p>Indicates the host app the add-on is active in when the event object is generated. Possible values include the following:</p><ul><li><code>GMAIL</code></li><li><code>CALENDAR</code></li><li><code>DRIVE</code></li><li><code>DOCS</code></li><li><code>SHEETS</code></li><li><code>SLIDES</code></li><li><code>CHAT</code></li></ul></td></tr><tr><td><code>platform</code></td><td><p><code>enum (<code>Platform</code>)</code></p><p>The platform enum which indicates the platform where the event originates (<code>WEB</code>, <code>IOS</code>, or <code>ANDROID</code>). Not supported by Chat apps.</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>object (<code>TimeZone</code>)</code></p><p><strong>Disabled by default.</strong> The timezone ID and offset from Coordinated Universal Time (UTC). To turn on this field, you must set <code>addOns.common.useLocaleFromApp</code> to <code>true</code> in your add-on's manifest. Your add-on's scope list must also include <code>https://www.googleapis.com/auth/script.locale</code>. See <a href="https://developers.google.com/workspace/add-ons/how-tos/access-user-locale">Accessing user locale and timezone</a> for more details.</p><p>Only supported for the event types <a href="https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED"><code>CARD_CLICKED</code></a> and <a href="https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG"><code>SUBMIT_DIALOG</code></a>.</p></td></tr><tr><td><code>formInputs</code></td><td><p><code>map (key: string, value: object (<code>Inputs</code>))</code></p><p>A map containing the current values of the widgets in the displayed card. The map keys are the string IDs assigned with each widget.</p><p>The structure of the map value object is dependent on the widget type:</p><p><strong>Note</strong>: The following examples are formatted for Apps Script's V8 runtime. If you're using Rhino runtime, you must add <code>[""]</code> after the value. For example, instead of <code>e.commonEventObject.formInputs.employeeName.stringInputs.value[0]</code>, format the event object as <code>e.commonEventObject.formInputs.employeeName[""].stringInputs.value[0]</code>. To learn more about runtimes in Apps Script, see the <a href="https://developers.google.com/apps-script/guides/v8-runtime">V8 Runtime Overview</a>.</p><ul><li>Single-valued widgets (for example, a text box): a list of strings (only one element).</li></ul><p><strong>Example</strong>: for a text input widget with <code>employeeName</code> as its ID, access the text input value with: <code>e.commonEventObject.formInputs.employeeName.stringInputs.value[0]</code>.</p><ul><li>Multi-valued widgets (for example, checkbox groups): a list of strings.</li></ul><p><strong>Example</strong>: for a multi-value widget with <code>participants</code> as its ID, access the value array with: <code>e.commonEventObject.formInputs.participants.stringInputs.value</code>.</p><ul><li><strong>A date-time picker</strong>: a <a href="https://developers.google.com/workspace/add-ons/concepts/event-objects#date-time-input"><code>DateTimeInput
                  object</code></a>.</li></ul><p><strong>Example</strong>: For a picker with an ID of <code>myDTPicker</code>, access the <a href="https://developers.google.com/workspace/add-ons/concepts/event-objects#date-time-input"><code>DateTimeInput</code></a> object using <code>e.commonEventObject.formInputs.myDTPicker.dateTimeInput</code>.</p><ul><li><strong>A date-only picker</strong>: a <a href="https://developers.google.com/workspace/add-ons/concepts/event-objects#date-input"><code>DateInput
                  object</code></a>.</li></ul><p><strong>Example</strong>: For a picker with an ID of <code>myDatePicker</code>, access the <a href="https://developers.google.com/workspace/add-ons/concepts/event-objects#date-input"><code>DateInput</code></a> object using <code>e.commonEventObject.formInputs.myDatePicker.dateInput</code>.</p><ul><li><strong>A time-only picker</strong>: a <a href="https://developers.google.com/workspace/add-ons/concepts/event-objects#time-input"><code>TimeInput
                  object</code></a>.</li></ul><p><strong>Example</strong>: For a picker with an ID of <code>myTimePicker</code>, access the <a href="https://developers.google.com/workspace/add-ons/concepts/event-objects#time-input"><code>TimeInput</code></a> object using <code>e.commonEventObject.formInputs.myTimePicker.timeInput</code>.</p></td></tr><tr><td><code>parameters</code></td><td><p><code>map (key: string, value: string)</code></p><p>Any additional parameters you supply to an action using <a href="https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#google.apps.card.v1.Action.ActionParameter"><code>actionParameters</code></a> or <a href="https://developers.google.com/apps-script/reference/card-service/action#setparametersparameters"><code>Action.setParameters()</code></a>.</p><p><strong>Developer Preview:</strong> For <a href="https://developers.google.com/workspace/add-ons/chat">add-ons that extend Google Chat</a>, to suggest items based on what the users type in multiselect menus, use the value of the <code>"autocomplete_widget_query"</code> key (<code>event.commonEventObject.parameters["autocomplete_widget_query"]</code>). You can use this value to query a database and suggest selectable items to users as they type. For details, see <a href="https://developers.google.com/workspace/add-ons/chat/collect-information">Collect and process information from Google Chat users</a>.</p></td></tr><tr><td><code>invokedFunction</code></td><td><p><code>string</code></p><p>Name of the function to invoke.</p><p>This field doesn't populate for Google Workspace Add-ons that extend Google Chat. Instead, to receive function data like identifiers, add-ons that extend Chat should use the <code>parameters</code> field. See <a href="https://developers.google.com/workspace/add-ons/chat/build">Build interactive interfaces for Chat apps</a>.</p></td></tr></tbody></table>

## TimeZone

The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](./EventType.md#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](./DialogEventType.md#ENUM_VALUES.SUBMIT_DIALOG).

JSON representation

```
{
  "id": string,
  "offset": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The <a href="https://www.iana.org/time-zones">IANA TZ</a> time zone database code, such as "America/Toronto".</p></td></tr><tr><td><code>offset</code></td><td><p><code>integer</code></p><p>The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC).</p></td></tr></tbody></table>

## Inputs

Types of data that users can [input on cards or dialogs](../../../../read-form-data.md). The input type depends on the type of values that the widget accepts.

JSON representation

```
{

  "stringInputs": {
    object (StringInputs)
  },
  "dateTimeInput": {
    object (DateTimeInput)
  },
  "dateInput": {
    object (DateInput)
  },
  "timeInput": {
    object (TimeInput)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>inputs</code>.</p><p><code>inputs</code> can be only one of the following:</p></td></tr><tr><td><code>stringInputs</code></td><td><p><code>object (<code>StringInputs</code>)</code></p><p>A list of strings that represent the values that the user inputs in a widget.</p><p>If the widget only accepts one value, such as a <a href="https://developers.google.com/chat/api/reference/rest/v1/cards#TextInput"><code>TextInput</code></a> widget, the list contains one string object. If the widget accepts multiple values, such as a <a href="https://developers.google.com/chat/api/reference/rest/v1/cards#selectioninput"><code>SelectionInput</code></a> widget of checkboxes, the list contains a string object for each value that the user inputs or selects.</p></td></tr><tr><td><code>dateTimeInput</code></td><td><p><code>object (<code>DateTimeInput</code>)</code></p><p>Date and time input values from a <a href="https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker"><code>DateTimePicker</code></a> widget that accepts both a date and time.</p></td></tr><tr><td><code>dateInput</code></td><td><p><code>object (<code>DateInput</code>)</code></p><p>Date input values from a <a href="https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker"><code>DateTimePicker</code></a> widget that only accepts date values.</p></td></tr><tr><td><code>timeInput</code></td><td><p><code>object (<code>TimeInput</code>)</code></p><p>Time input values from a <a href="https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker"><code>DateTimePicker</code></a> widget that only accepts time values.</p></td></tr></tbody></table>

## StringInputs

Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented.

JSON representation

```
{
  "value": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value[]</code></td><td><p><code>string</code></p><p>An list of strings entered by the user.</p></td></tr></tbody></table>

## DateTimeInput

Date and time input values.

JSON representation

```
{
  "msSinceEpoch": string,
  "hasDate": boolean,
  "hasTime": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>msSinceEpoch</code></td><td><p><code>string (int64 format)</code></p><p>Time since epoch time, in milliseconds.</p></td></tr><tr><td><code>hasDate</code></td><td><p><code>boolean</code></p><p>Whether the <code>datetime</code> input includes a calendar date.</p></td></tr><tr><td><code>hasTime</code></td><td><p><code>boolean</code></p><p>Whether the <code>datetime</code> input includes a timestamp.</p></td></tr></tbody></table>

## DateInput

Date input values.

JSON representation

```
{
  "msSinceEpoch": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>msSinceEpoch</code></td><td><p><code>string (int64 format)</code></p><p>Time since epoch time, in milliseconds.</p></td></tr></tbody></table>

## TimeInput

Time input values.

JSON representation

```
{
  "hours": integer,
  "minutes": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hours</code></td><td><p><code>integer</code></p><p>The hour on a 24-hour clock.</p></td></tr><tr><td><code>minutes</code></td><td><p><code>integer</code></p><p>The number of minutes past the hour. Valid values are 0 to 59.</p></td></tr></tbody></table>

## AppCommandMetadata

JSON representation

```
{
  "appCommandId": integer,
  "appCommandType": enum (AppCommandType)
}
```
