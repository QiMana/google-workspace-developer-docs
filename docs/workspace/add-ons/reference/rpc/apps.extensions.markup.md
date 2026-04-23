---
source: https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup
root: workspace
fetched_at: 2026-04-23T15:23:03.574Z
---

# Package apps.extensions.markup

## Page Summary

- Google Workspace Add-ons utilize markup elements to define actions and data sources for interactions within various host applications like Gmail, Calendar, Drive, and Chat.
- These markup elements enable add-ons to modify data, trigger application-specific actions, handle custom function results in Sheets, and manage user interface components.
- Developers can use `GmailClientActionMarkup` to create and update drafts, `CalendarClientActionMarkup` to modify calendar events, and `ChatClientDataSourceMarkup` for selection inputs in Google Chat apps.
- `SheetsClientActionMarkup` allows add-ons to define return values for custom functions, while `HostAppDataActionMarkup`, currently in Developer Preview, enables data updates within Google Workspace.
- The structure and fields within each markup element provide a standardized way to define add-on behavior and data interactions, streamlining development across different Google Workspace applications.

## Index

- `CalendarClientActionMarkup` (message)
- `CalendarClientActionMarkup.AddAttachmentsActionMarkup` (message)
- `CalendarClientActionMarkup.AddAttachmentsActionMarkup.AddonAttachment` (message)
- `CalendarClientActionMarkup.CalendarSubscriptionActionMarkup` (message)
- `CalendarClientActionMarkup.CalendarSubscriptionActionMarkup.Operation` (enum)
- `CalendarClientActionMarkup.ConferenceDataMarkup` (message)
- `CalendarClientActionMarkup.ConferenceDataMarkup.EntryPointMarkup` (message)
- `CalendarClientActionMarkup.ConferenceDataMarkup.EntryPointMarkup.Feature` (enum)
- `CalendarClientActionMarkup.ConferenceDataMarkup.EntryPointMarkup.Type` (enum)
- `CalendarClientActionMarkup.ConferenceDataMarkup.Error` (message)
- `CalendarClientActionMarkup.ConferenceDataMarkup.Error.Type` (enum)
- `CalendarClientActionMarkup.ConferenceDataMarkup.Parameter` (message)
- `CalendarClientActionMarkup.CreateConferenceDataActionMarkup` (message)
- `CalendarClientActionMarkup.CreateConferenceSettingUrlActionMarkup` (message)
- `CalendarClientActionMarkup.EditAttendeesActionMarkup` (message)
- `CalendarClientActionMarkup.EditConferenceDataActionMarkup` (message)
- `ChatClientDataSourceMarkup` (message)
- `ChatClientDataSourceMarkup.SpaceDataSource` (message)
- `ChatDataActionMarkup` (message)
- `ChatDataActionMarkup.CreateMessageAction` (message)
- `ChatDataActionMarkup.UpdateInlinePreviewAction` (message)
- `ChatDataActionMarkup.UpdateMessageAction` (message)
- `DriveClientActionMarkup` (message)
- `DriveClientActionMarkup.RequestFileScope` (message)
- `EditorClientActionMarkup` (message)
- `EditorClientActionMarkup.RequestFileScopeForActiveDocument` (message)
- `GmailClientActionMarkup` (message)
- `GmailClientActionMarkup.AddonComposeUiActionMarkup` (message)
- `GmailClientActionMarkup.AddonComposeUiActionMarkup.AddonComposeUiActionType` (enum)
- `GmailClientActionMarkup.OpenCreatedDraftActionMarkup` (message)
- `GmailClientActionMarkup.TaskActionMarkup` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.Recipient` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBccRecipients` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.ContentType` (enum)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.EmailMimeType` (enum)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.InsertContent` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.Type` (enum)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateCcRecipients` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateSubject` (message)
- `GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateToRecipients` (message)
- `HostAppActionMarkup` (message)
- `HostAppDataActionMarkup` (message)
- `HostAppDataSourceMarkup` (message)
- `SheetsClientActionMarkup` (message)
- `SheetsClientActionMarkup.CustomFunctionReturnValueMarkup` (message)

## CalendarClientActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>editAttendeesActionMarkup</code></td><td><p><code>EditAttendeesActionMarkup</code></p><p>An action that adds attendees to the Google Calendar event.</p></td></tr><tr><td><code>editConferenceDataActionMarkup</code></td><td><p><code>EditConferenceDataActionMarkup</code></p><p>An action that adds conference data to the Google Calendar event. Third-party conferencing add-ons can only be built in <a href="https://developers.google.com/apps-script/reference/conference-data">Apps Script</a>.</p></td></tr><tr><td><code>addAttachmentsActionMarkup</code></td><td><p><code>AddAttachmentsActionMarkup</code></p><p>An action that adds attachments to the Google Calendar event.</p></td></tr><tr><td><code>createConferenceDataActionMarkup</code></td><td><p><code>CreateConferenceDataActionMarkup</code></p><p>An action that shows conference data when create a Google Calendar event.</p></td></tr><tr><td><code>createConferenceSettingUrlActionMarkup</code></td><td><p><code>CreateConferenceSettingUrlActionMarkup</code></p><p>An action that generates generate createconference setting url.</p></td></tr><tr><td><code>calendarSubscriptionActionMarkup</code></td><td><p><code>CalendarSubscriptionActionMarkup</code></p><p>An action that manages a calendar subscription. Supports subscription creation in <a href="https://developers.google.com/workspace/add-ons/guides/alternate-runtimes">HTTP endpoints add-ons</a> only. Not applicable to Apps Script add-ons.</p></td></tr></tbody></table>

## AddAttachmentsActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addonAttachments[]</code></td><td><p><code>AddonAttachment</code></p></td></tr></tbody></table>

## AddonAttachment

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resourceUrl</code></td><td><p><code>string</code></p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the attachment.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>MIME type of the content in resourceUrl.</p></td></tr><tr><td><code>iconUrl</code></td><td><p><code>string</code></p><p>Link to the resource's icon.</p></td></tr></tbody></table>

## CalendarSubscriptionActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operation</code></td><td><p><code>Operation</code></p><p>The operation to perform. Currently only CREATE is supported.</p></td></tr><tr><td><code>calendarId</code></td><td><p><code>string</code></p><p>The calendar id to subscribe to.</p></td></tr></tbody></table>

## Operation

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>OPERATION_UNSPECIFIED</code></td><td></td></tr><tr><td><code>CREATE</code></td><td></td></tr></tbody></table>

## ConferenceDataMarkup

Markup that defines conference data associated to a Google Calendar event. Third-party conferencing add-ons can only be built in [Apps Script](https://developers.google.com/apps-script/reference/conference-data).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>conferenceId</code></td><td><p><code>string</code></p><p>Unique identifier for this conference data. Maximum 512 characters long.</p></td></tr><tr><td><code>entryPoints[]</code></td><td><p><code>EntryPointMarkup</code></p><p>Entry points to the conference. Maximum 300 entry points are allowed.</p></td></tr><tr><td><code>parameters[]</code></td><td><p><code>Parameter</code></p><p>Additional add-on parameters. Maximum 300 parameters are allowed.</p></td></tr><tr><td><code>error</code></td><td><p><code>Error</code></p><p>If set, it means an error occurred during conference creation.</p></td></tr><tr><td><code>note</code></td><td><p><code>string</code></p><p>Additional notes (such as instructions from the administrator, legal notices) to display to the user. Can contain HTML. Max length 2048 characters.</p></td></tr><tr><td><code>conferenceSolutionId</code></td><td><p><code>string</code></p><p>An identifier of the conferencing solution. Must match a value from the deployment's <code>calendar.conferenceSolution.id</code> field.</p></td></tr></tbody></table>

## EntryPointMarkup

A way to join the conference. Third-party conferencing add-ons can only be built in [Apps Script](https://developers.google.com/apps-script/reference/conference-data).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>Type</code></p><p>The type of the entry point. Required.</p></td></tr><tr><td><code>uri</code></td><td><p><code>string</code></p><p>A URI for joining the conference. Supports tel: and http(s): and should be at most 1300 characters long. Required.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>The label of the entry point to display to the user. Maximum 512 characters long.</p></td></tr><tr><td><code>meetingCode</code></td><td><p><code>string</code></p><p>A meeting code for accessing the conference. Maximum 128 characters long.</p></td></tr><tr><td><code>accessCode</code></td><td><p><code>string</code></p><p>An access code for accessing the conference. Maximum 128 characters long.</p></td></tr><tr><td><code>passcode</code></td><td><p><code>string</code></p><p>A passcode for accessing the conference. Maximum 128 characters long.</p></td></tr><tr><td><code>password</code></td><td><p><code>string</code></p><p>A password for accessing the conference. Maximum 128 characters long.</p></td></tr><tr><td><code>pin</code></td><td><p><code>string</code></p><p>A PIN for accessing the conference. Maximum 128 characters long.</p></td></tr><tr><td><code>regionCode</code></td><td><p><code>string</code></p><p>The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only to <code>Type.PHONE</code>.</p></td></tr><tr><td><code>features[]</code></td><td><p><code>Feature</code></p><p>Features of the entry point, such as being toll or toll-free. One entry point can have multiple features.</p></td></tr></tbody></table>

## Feature

Features of the entry point. Some features might apply only to specific entry points.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN_FEATURE</code></td><td>Unknown feature.</td></tr><tr><td><code>TOLL</code></td><td>Applies to <code>PHONE</code> entry point. A call to a toll number is charged to the calling party. A number can't be toll and toll-free at the same time.</td></tr><tr><td><code>TOLL_FREE</code></td><td>Applies to <code>PHONE</code> entry point. For the calling party, a call to a toll-free number is free of charge. A number can't be toll and toll-free at the same time.</td></tr></tbody></table>

## Type

The type of the entry point. Third-party conferencing add-ons can only be built in [Apps Script](https://developers.google.com/apps-script/reference/conference-data).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN</code></td><td>Unknown conference type.</td></tr><tr><td><code>VIDEO</code></td><td>A video conference.</td></tr><tr><td><code>PHONE</code></td><td>A phone conference.</td></tr><tr><td><code>MORE</code></td><td>Used to provide a link to further conference joining information.</td></tr><tr><td><code>SIP</code></td><td>A conference using <a href="https://en.wikipedia.org/wiki/Session_Initiation_Protocol">Session Initiation Protocol</a></td></tr></tbody></table>

## Error

Represents an error that occurred during conference creation. Third-party conferencing add-ons can only be built in [Apps Script](https://developers.google.com/apps-script/reference/conference-data).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>Type</code></p><p>The type of error. Required.</p></td></tr><tr><td><code>authenticationUrl</code></td><td><p><code>string</code></p><p>If the error type is <code>AUTHENTICATION</code>, the add-on can provide a URL allowing users to log in. Maximum 1300 characters long.</p></td></tr></tbody></table>

## Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN</code></td><td>Unknown error.</td></tr><tr><td><code>AUTHENTICATION</code></td><td>An authentication error.</td></tr><tr><td><code>TEMPORARY</code></td><td>A temporary error.</td></tr><tr><td><code>PERMANENT</code></td><td>A permanent error.</td></tr><tr><td><code>PERMISSION_DENIED</code></td><td>The user isn't allowed to perform some action in the third-party conferencing system.</td></tr><tr><td><code>CONFERENCE_SOLUTION_FORBIDDEN</code></td><td>The user isn't allowed to use the selected conference solution (but might be allowed to use other solutions offered by the add-on).</td></tr></tbody></table>

## Parameter

Solution-specific parameters that are persisted with the event data and, if an update or delete is needed, are passed to the add-on. For example: `[{key: 'sessionKey', value: '123'}, {key: 'meetingId', value: '456'}]`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p><p>The key of the parameter. Maximum 50 characters long. Required.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value of the parameter. Maximum 1024 characters long. Required.</p></td></tr></tbody></table>

## CreateConferenceDataActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>createConferenceData</code></td><td><p><code>ConferenceDataMarkup</code></p><p>The conference data to add to a Google Calendar event when creating it.</p></td></tr></tbody></table>

## CreateConferenceSettingUrlActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>settingsUrl</code></td><td><p><code>string</code></p><p>The uri for a settings page generated by the add-on.</p></td></tr></tbody></table>

## EditAttendeesActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addAttendeeEmails[]</code></td><td><p><code>string</code></p><p>A list of attendees to add to the Google Calendar event.</p></td></tr></tbody></table>

## EditConferenceDataActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>conference</code>.</p><p><code>conference</code> can be only one of the following:</p></td></tr><tr><td><code>conferenceData</code></td><td><p><code>ConferenceDataMarkup</code></p><p>The conference data to add to the Google Calendar event. Third-party conferencing add-ons can only be built in <a href="https://developers.google.com/apps-script/reference/conference-data">Apps Script</a>.</p></td></tr></tbody></table>

## ChatClientDataSourceMarkup

For a `` `SelectionInput` `` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>source</code>. The Google Chat data source. <code>source</code> can be only one of the following:</td></tr><tr><td><code>spaceDataSource</code></td><td><p><code>SpaceDataSource</code></p><p>Google Chat spaces that the user is a member of.</p></td></tr></tbody></table>

## SpaceDataSource

A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>defaultToCurrentSpace</code></td><td><p><code>bool</code></p><p>If set to <code>true</code>, the multiselect menu selects the current Google Chat space as an item by default.</p></td></tr></tbody></table>

## ChatDataActionMarkup

Creates or updates a message in Google Chat. For details, see [Build Google Chat interfaces](https://developers.google.com/workspace/add-ons/chat/build).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>action</code>. A <a href="https://developers.google.com/workspace/add-ons/chat/build#actions">Google Chat action</a>. <code>action</code> can be only one of the following:</td></tr><tr><td><code>createMessageAction</code></td><td><p><code>CreateMessageAction</code></p><p>Sends a message as a Google Chat app.</p></td></tr><tr><td><code>updateMessageAction</code></td><td><p><code>UpdateMessageAction</code></p><p>Updates a Google Chat app's message.</p></td></tr><tr><td><code>updateInlinePreviewAction</code></td><td><p><code>UpdateInlinePreviewAction</code></p><p>To <a href="https://developers.google.com/workspace/add-ons/chat/preview-links">preview links</a>, adds one or more cards to a Google Chat user's message.</p></td></tr></tbody></table>

## CreateMessageAction

The Chat app sends a message. For details, see [Send Google Chat messages](https://developers.google.com/workspace/add-ons/chat/send-messages).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>Message</code></p><p>The Google Chat message.</p></td></tr></tbody></table>

## UpdateInlinePreviewAction

The Chat app previews a link in a message by adding or updating one or more cards. For details, see [Preview links in Google Chat messages](https://developers.google.com/workspace/add-ons/chat/preview-links).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>cardsV2[]</code></td><td><p><code>CardWithId</code></p><p>An array of one or more cards.</p></td></tr></tbody></table>

## UpdateMessageAction

The Chat app updates text or cards in a message. For details, see [Send Google Chat messages](https://developers.google.com/workspace/add-ons/chat/send-messages).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>Message</code></p><p>The updated message.</p></td></tr></tbody></table>

## DriveClientActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requestFileScope</code></td><td><p><code>RequestFileScope</code></p></td></tr></tbody></table>

## RequestFileScope

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p></td></tr></tbody></table>

## EditorClientActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>action</code>.</p><p><code>action</code> can be only one of the following:</p></td></tr><tr><td><code>requestFileScopeForActiveDocument</code></td><td><p><code>RequestFileScopeForActiveDocument</code></p></td></tr></tbody></table>

## RequestFileScopeForActiveDocument

This type has no fields.

## GmailClientActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>type</code>.</p><p><code>type</code> can be only one of the following:</p></td></tr><tr><td><code>taskAction</code></td><td><p><code>TaskActionMarkup</code></p></td></tr><tr><td><code>updateDraftActionMarkup</code></td><td><p><code>UpdateDraftActionMarkup</code></p></td></tr><tr><td><code>openCreatedDraftActionMarkup</code></td><td><p><code>OpenCreatedDraftActionMarkup</code></p></td></tr><tr><td><code>addonComposeUiActionMarkup</code></td><td><p><code>AddonComposeUiActionMarkup</code></p></td></tr></tbody></table>

## AddonComposeUiActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>AddonComposeUiActionType</code></p></td></tr></tbody></table>

## AddonComposeUiActionType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td>Default. When unspecified, no action is taken.</td></tr><tr><td><code>DISMISS</code></td><td>Dismisses the add-on compose UI.</td></tr></tbody></table>

## OpenCreatedDraftActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>draftId</code></td><td><p><code>string</code></p><p>The ID of the newly created draft in the form "r123".</p></td></tr><tr><td><code>draftStorageId</code></td><td><p><code>string</code></p><p>The server storage ID in hex format, for example,"15e9fa622ce1029d".</p></td></tr><tr><td><code>draftThreadServerPermId</code></td><td><p><code>string</code></p><p>The server permanent ID for the draft's thread. This field isn't set anywhere, and it's ignored when processing OpenCreatedDraftActionMarkup. Supply and use draftThreadStorageId instead.</p></td></tr><tr><td><code>draftThreadId</code></td><td><p><code>string</code></p><p>The ID of the thread containing the newly created draft, for example, "15e9fa622ce1029d".</p></td></tr></tbody></table>

## TaskActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reloadTasks</code></td><td><p><code>bool</code></p></td></tr></tbody></table>

## UpdateDraftActionMarkup

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateBody</code></td><td><p><code>UpdateBody</code></p><p>A field that contains a series of update actions to perform on the draft body that the user is currently editing.</p></td></tr><tr><td><code>updateToRecipients</code></td><td><p><code>UpdateToRecipients</code></p><p>If set, replaces the existing To recipients of the draft the user is currently editing.</p></td></tr><tr><td><code>updateCcRecipients</code></td><td><p><code>UpdateCcRecipients</code></p><p>If set, replaces the existing Cc recipients of the draft the user is currently editing.</p></td></tr><tr><td><code>updateBccRecipients</code></td><td><p><code>UpdateBccRecipients</code></p><p>If set, replaces the existing Bcc recipients of the draft the user is currently editing.</p></td></tr><tr><td><code>updateSubject</code></td><td><p><code>UpdateSubject</code></p><p>If set, replaces the existing subject of the draft the user is currently editing.</p></td></tr></tbody></table>

## Recipient

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p></td></tr></tbody></table>

## UpdateBccRecipients

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bccRecipients[]</code></td><td><p><code>Recipient</code></p></td></tr></tbody></table>

## UpdateBody

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>insertContents[]</code></td><td><p><code>InsertContent</code></p><p>A repeated field that contains a series of content to insert into the draft that the user is currently editing. The content can contain HTML content or plain text content.</p></td></tr><tr><td><code>type</code></td><td><p><code>Type</code></p></td></tr></tbody></table>

## ContentType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED_CONTENT_TYPE</code></td><td>Default value when nothing is set for ContentType.</td></tr><tr><td><code>TEXT</code></td><td>Specifies that the content is in plain text.</td></tr><tr><td><code>MUTABLE_HTML</code></td><td>Specifies that the content is in HTML and is mutable (can be edited).</td></tr><tr><td><code>IMMUTABLE_HTML</code></td><td>Specifies that the content is in HTML and is immutable (cannot be edited).</td></tr></tbody></table>

## EmailMimeType

EmailMimeType is deprecated. Please use ContentType.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED_EMAIL_MIME_TYPE</code></td><td>Default value when nothing is set for EmailMimeType.</td></tr><tr><td><code>PLAIN_TEXT</code></td><td>Specifies that the inserted content is in plain text.</td></tr><tr><td><code>HTML</code></td><td>Specifies that the inserted content is in HTML.</td></tr></tbody></table>

## InsertContent

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>content</code></td><td><p><code>string</code></p><p>The content to be inserted.</p></td></tr><tr><td><code>mimeType<br><b>(deprecated)</b></code></td><td><p><code>EmailMimeType</code></p></td></tr><tr><td><code>contentType</code></td><td><p><code>ContentType</code></p><p>The type of inserted content.</p></td></tr></tbody></table>

## Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED_ACTION_TYPE</code></td><td>Default value when nothing is set for Type.</td></tr><tr><td><code>IN_PLACE_INSERT</code></td><td>Indicates this action is to perform an in-place insertion. By default the content is inserted at the current cursor position, if there is selected content, it replaces the selected content.</td></tr><tr><td><code>INSERT_AT_START</code></td><td>Indicates this action is to perform insert at the start of the message body.</td></tr><tr><td><code>INSERT_AT_END</code></td><td>Indicates this action is to perform insert at the end of the message body.</td></tr><tr><td><code>REPLACE</code></td><td>Indicates this action is to replace the message body.</td></tr></tbody></table>

## UpdateCcRecipients

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ccRecipients[]</code></td><td><p><code>Recipient</code></p></td></tr></tbody></table>

## UpdateSubject

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subject</code></td><td><p><code>string</code></p></td></tr></tbody></table>

## UpdateToRecipients

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>toRecipients[]</code></td><td><p><code>Recipient</code></p></td></tr></tbody></table>

## HostAppActionMarkup

Actions handled by individual host apps.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>action</code>.</p><p><code>action</code> can be only one of the following:</p></td></tr><tr><td><code>gmailAction</code></td><td><p><code>GmailClientActionMarkup</code></p><p>Actions handled by Gmail.</p></td></tr><tr><td><code>calendarAction</code></td><td><p><code>CalendarClientActionMarkup</code></p><p>Actions handled by Calendar.</p></td></tr><tr><td><code>driveAction</code></td><td><p><code>DriveClientActionMarkup</code></p><p>Actions handled by Drive.</p></td></tr><tr><td><code>editorAction</code></td><td><p><code>EditorClientActionMarkup</code></p><p>Actions handled by Docs, Sheets, or Slides.</p></td></tr><tr><td><code>sheetsAction</code></td><td><p><code>SheetsClientActionMarkup</code></p><p>Actions handled by Sheets.</p></td></tr></tbody></table>

## HostAppDataActionMarkup

Defines how to update Google Workspace data.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>action</code>. The add-on action for a given Google Workspace host application. <code>action</code> can be only one of the following:</td></tr><tr><td><code>chatDataAction</code></td><td><p><code>ChatDataActionMarkup</code></p><p>A <a href="https://developers.google.com/workspace/add-ons/chat/build#actions">Google Chat action</a> that creates or updates text or cards in a message.</p></td></tr></tbody></table>

## HostAppDataSourceMarkup

A data source from a Google Workspace application. The data source populates available items for a widget.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>data_source</code>. The Google Workspace application that populates available items for a widget. <code>data_source</code> can be only one of the following:</td></tr><tr><td><code>chatDataSource</code></td><td><p><code>ChatClientDataSourceMarkup</code></p><p>A data source from Google Chat.</p></td></tr></tbody></table>

## SheetsClientActionMarkup

Next ID: 5.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>action</code>.</p><p><code>action</code> can be only one of the following:</p></td></tr><tr><td><code>customFunctionReturnValueMarkup</code></td><td><p><code>CustomFunctionReturnValueMarkup</code></p></td></tr></tbody></table>

## CustomFunctionReturnValueMarkup

The result of a user running a custom function.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>result</code>. The result of the custom function execution. <code>result</code> can be only one of the following:</td></tr><tr><td><code>value</code></td><td><p><code>Value</code></p><p>The value that resulted from running the custom function.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>The error message to show to the user if something went wrong.</p></td></tr></tbody></table>
