---
source: https://developers.google.com/apps-script/release-notes
root: apps-script
fetched_at: 2026-04-23T15:22:19.128Z
---

# Google Apps Script release notes

## Page Summary

- Several Apps Script services have been updated, including the Spreadsheet, Forms, Calendar, Docs, Chat, and Google Workspace Add-ons services, adding new features and capabilities.
- The Google Analytics Advanced Service and the Rhino runtime are scheduled for deprecation, requiring migration to the Google Analytics Data API Advanced Service and the V8 runtime respectively.
- The Apps Script IDE has received significant enhancements, such as improved version management, better debugging tools, and a redesigned interface.
- Several services and advanced services have been deprecated or removed, including the Contacts service, classic Google Sites service, Fusion Tables advanced service, and the UI service.
- New services and advanced services have been introduced, such as advanced services for Google Tables, Google Drive API version 3, the Chat API, and Google Workspace Events.

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/apps-script-release-notes.xml`.

This page contains release notes for features and updates to Apps Script. We recommend that Apps Script developers periodically check this list for any new announcements.

## March 12, 2026

Feature

**Generally Available:** The [`AddOnsResponseService`](./reference/add-ons-response-service.md) and its associated classes in Apps Script are now generally available. This service allows developers to create and manage interactive responses for Google Workspace Add-ons that extend Google Chat.

## March 05, 2026

Deprecated

**Deprecated:** The method [`setAuthentication(clientId, signingKey)`](./reference/maps/maps.md#setAuthentication(String,String)) has been deprecated and is scheduled for sunset in June 2026. This change is because Maps platform [client IDs were deprecated](https://developers.google.com/maps/premium/migrate-client-id#overview) on May 26, 2025, and can't be used after May 31, 2026. Instead, use [`setAuthenticationByKey(apiKey)`](./reference/maps/maps.md#setauthenticationbyapikeyapikey) or [`setAuthenticationByKey(apiKey, signingKey)`](./reference/maps/maps.md#setauthenticationbyapikeyapikey,-signingkey). To get an API key, refer to the [Client ID Migration Guide](https://developers.google.com/maps/premium/migrate-client-id).

Feature

**Generally Available:** To authenticate to the Maps service, you can now use an API key with the new methods [`setAuthenticationByKey(apiKey)`](./reference/maps/maps.md#setauthenticationbyapikeyapikey) and [`setAuthenticationByKey(apiKey, signingKey)`](./reference/maps/maps.md#setauthenticationbyapikeyapikey,-signingkey). To reset authentication to the default mode, use [`resetAuthenticationApiKey()`](./reference/maps/maps.md#resetauthenticationapikey).

## January 12, 2026

Feature

**Generally Available:** Use Apps Script's Vertex AI advanced service to call the Vertex AI API and prompt AI models to generate text, images, and more.

For details, see the [Vertex AI advanced service](./advanced/vertex-ai.md) reference documentation.

## January 07, 2026

Other

The [Apps Script samples gallery](./samples.md) now lets you find samples by use case, products, and sample type. The gallery also features the following new samples:

- [Build a Google Chat app with an ADK AI agent](../workspace/add-ons/chat/quickstart-adk-agent.md)
- [Build a Chat app with an Agent2Agent agent](../workspace/add-ons/chat/quickstart-a2a-agent.md)
- [Analyze and label Gmail messages with Gemini and Vertex AI](../workspace/add-ons/samples/gmail-sentiment-analysis-ai.md)

## June 04, 2025

Deprecated

[Google Analytics 4 has replaced Universal Analytics](https://support.google.com/analytics/answer/11583528), which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated. Use the [Google Analytics Data API Advanced Service](./advanced/analyticsdata.md) instead.

## April 23, 2025

Fixed

Between approximately September 2024 and March 2025, for Google Sheets modifications made by time-based Apps Script triggers, a bug caused incorrect OAuth App IDs and App Names to be logged in the Google Admin console.

This logging issue did not impact the functionality of Apps Script or Google Sheets. A fix was deployed on March 27, 2025, preventing future incorrect logging. Historical logs will not be corrected.

To learn more about Apps Script and audit logs, see [Monitor and control Apps Script use in your Google Workspace organization](./guides/admin/monitor-use.md).

## April 08, 2025

Feature

You can now use the [Forms Service](./reference/forms.md) to publish forms, and to have granular control over who can respond to forms.

[Learn about the `setPublished` method to publish forms](./reference/forms/form.md#setPublished(Boolean)).

## February 20, 2025

Announcement

As of February 20, 2025, the Rhino runtime is deprecated. Scripts running on Rhino will continue to function until January 31, 2026, after which they will no longer execute. Please migrate your scripts to the V8 runtime before this date. Refer to [Migrate scripts to the V8 runtime](./guides/v8-runtime/migration.md).

## January 08, 2025

Feature

**Generally Available**: Granular OAuth permissions are now supported for users executing scripts in the Apps Script IDE. The granular OAuth consent screen lets users specify which individual OAuth scopes they would like to authorize. The granular consent screen will gradually launch to the remaining Apps Script surfaces, such as add-ons and trigger executions, in the future.

For more information, refer to the Workspace Updates blog post: [Granular OAuth consent in Google Apps Script IDE executions](https://workspaceupdates.googleblog.com/2025/01/granular-oauth-consent-in-google-apps-script.html).

Feature

**Generally Available**: To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the `ScriptApp` and `AuthorizationInfo` classes to let Apps Script developers programmatically interact with the scopes granted for a script.

[`ScriptApp` class](./reference/script/script-app.md):

- [`requireScopes(authMode, oAuthScopes)`](./reference/script/script-app.md#requirescopesauthmode,-oauthscopes)
- [`requireAllScopes(authMode)`](./reference/script/script-app.md#requireallscopesauthmode)
- [`getAuthorizationInfo(authMode, oAuthScopes)`](./reference/script/script-app.md#getauthorizationinfoauthmode,-oauthscopes)

[`AuthorizationInfo` class](./reference/script/authorization-info.md):

- [`getAuthorizedScopes()`](./reference/script/authorization-info.md#getauthorizedscopes)

For more information, refer to [Handle granular OAuth permissions](./concepts/scopes.md#handle-granular).

## December 09, 2024

Deprecated

The `getUrl()` method for the `CellImage`, `CellImageBuilder`, and `OverGridImage` classes of the [Spreadsheet service](./reference/spreadsheet.md) has been deprecated. An image's source URL isn't available regardless of how the image is inserted into a spreadsheet.

Feature

**Generally available**: The [`getSheetById()`](./reference/spreadsheet/spreadsheet.md#getsheetbyidid) method has been added to the `Spreadsheet` class of the Spreadsheet service. This lets you get a sheet in a spreadsheet using its unique ID.

Feature

**Generally available**: You can now get and set the transparency of a calendar event, meaning whether the event shows as "Busy" or "Available" in Google Calendar. For more information, refer to the following documentation:

- [Enum `EventTransparency`](./reference/calendar/event-transparency.md)
- [Class `CalendarEvent`](./reference/calendar/calendar-event.md)
- [Class `CalendarEventSeries`](./reference/calendar/calendar-event-series.md)

## November 27, 2024

Feature

The Calendar service now has a `getEventType()` method that lets developers differentiate regular events from other types of events like out-of-office and working location events. For more information, see the following documentation:

- [`getEventType()` for events](./reference/calendar/calendar-event.md#getEventType())
- [`getEventType()` for event series](./reference/calendar/calendar-event-series.md#getEventType())
- [`EventType` enum](./reference/calendar/event-type.md)

## October 02, 2024

Announcement

Apps Script has rescheduled the shutdown date of the Contacts service to January 31, 2025. Refer to the [Apps Script sunset schedule](./guides/support/sunset.md).

The Apps Script Contacts service was deprecated in December 2022. Instead, use the People API advanced service. Refer to [Migrate from Contacts service to People API advanced service](./migration/contacts-people.md).

## September 03, 2024

Feature

**Generally available**: You can now use Looker in [Connected Sheets](./guides/sheets/connected-sheets.md) from Apps Script. This update lets you create a new or access existing Looker data source connections, connect a sheet to them, create pivot tables, and more.

The following updates have been made to the [`Spreadsheet` service](./reference/spreadsheet.md) to support Looker in Connected Sheets from Apps Script.

- The following new data source type has been added:
	- [`LOOKER`](./reference/spreadsheet/data-source-type.md)
- The following new classes have been added:
	- [`LookerDataSourceSpec`](./reference/spreadsheet/looker-data-source-spec.md)
		- [`LookerDataSourceSpecBuilder`](./reference/spreadsheet/looker-data-source-spec-builder.md)
- The following new methods have been added to existing classes:
	- [`DataSourceSpec.asLooker()`](./reference/spreadsheet/data-source-spec.md#aslooker)
		- [`DataSourceSpecBuilder.asLooker()`](./reference/spreadsheet/data-source-spec-builder.md#aslooker)

## August 15, 2024

Feature

**Generally Available**: You can now create and organize tabs in Google Docs documents using Apps Script's Document service. For more information, refer to [Work with tabs](./guides/docs/tabs.md).

## August 07, 2024

Change

Google Workspace administrators can now turn on an allowlist in the admin console to control which external domains users can access through Apps Script's [URL Fetch service](./reference/url-fetch.md).

- If you're using a script or add-on that accesses external domains, work with your administrator to add those URLs to the admin allowlist.
- If you've published an add-on on the Google Workspace Marketplace, it might be helpful to list the URLs that admins should add to their allowlist on your Marketplace listing.

For more information, refer to the Google Workspace Admin Help article: [Allow only certain external connections for Apps Script and Sheets](https://support.google.com/a/answer/13686736).

## July 25, 2024

Feature

(**Generally Available**): Multiselect menus are now generally available for Add-ons.

For more information refer to the following:

- [`SelectionInput` for Apps Script](./reference/card-service/selection-input.md)
- [`SelectionInput` for HTTP runtimes](../workspace/add-ons/reference/rpc/google.apps.card.v1.md#selectioninput)

Feature

(**Generally Available**): Columns are now generally available for Add-ons.

For more information refer to the following:

- [`Columns` for Apps Script](./reference/card-service/columns.md)
- [`Columns` for HTTP runtimes](../workspace/add-ons/reference/rpc/google.apps.card.v1.md#columns)

## May 02, 2024

Feature

To subscribe to events using Apps Script, you can now use the Advanced Google Workspace Events service. For details, see the [Apps Script reference documentation](./advanced/events.md).

## April 30, 2024

Feature

The `cancelDataRefresh()` method has been added to the following classes of the Spreadsheet service:

- [`DataSourceChart`](./reference/spreadsheet/data-source-chart.md#canceldatarefresh)
- [`DataSourceFormula`](./reference/spreadsheet/data-source-formula.md#canceldatarefresh)
- [`DataSourcePivotTable`](./reference/spreadsheet/data-source-pivot-table.md#canceldatarefresh)
- [`DataSourceSheet`](./reference/spreadsheet/data-source-sheet.md#canceldatarefresh)
- [`DataSourceTable`](./reference/spreadsheet/data-source-table.md#canceldatarefresh)

The `cancelDataRefresh()` method cancels the data refresh associated with the object it's called on if the refresh is currently running.

The [`cancelAllLinkedDataSourceObjectRefreshes()`](./reference/spreadsheet/data-source.md#cancelalllinkeddatasourceobjectrefreshes) method has been added to the `DataSource` class. This method cancels all currently running refreshes of data source objects linked to the data source this method is called on.

## April 22, 2024

Feature

**(Generally Available)**: Google Chat apps now support Google Apps Script's Card Service. If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs. For more information, see the [Card Service reference documentation](./reference/card-service.md).

## March 15, 2024

Change

The default property for the [`TextButtonStyle` enum](./reference/card-service/text-button-style.md) in the Apps Script [Card Service](./reference/card-service/card-service.md) has been renamed from `TEXT` to `OUTLINED` to align with the [Google Material 3 design system](https://m3.material.io/components/buttons/guidelines#3742b09f-c224-43e0-a83e-541bd29d0f05). Existing scripts that use the original default, `TEXT`, render the same as the new default, `OUTLINED`.

## March 07, 2024

Feature

**(Generally Available)**: You can now delete multiple unused versions at the same time from the Project History page. Refer to [Delete multiple versions](./guides/versions.md#bulk-delete).

## March 05, 2024

Feature

**(Generally Available)**: The [`LinkPreview`](./reference/card-service/link-preview.md) class has been added to the Apps Script Card service. This class lets you control various aspects of link previews, including the smart chip title, the link preview title, and the link preview card.

## February 29, 2024

Announcement

The 200 version limit, first announced for new scripts on [December 6, 2023](./release-notes.md#December_06_2023), has been extended to all script projects. If your existing script project already has more than 200 versions, after June 1, 2024 you won't be able to add a new version. To delete unused versions, refer to [Delete a version](./guides/versions.md#delete-version).

## February 21, 2024

Feature

(**Developer Preview**): Multiselect menus are now in Developer Preview for Add-ons.

For more information refer to the following:

- [`SelectionInput` for Apps Script](./reference/card-service/selection-input.md)
- [`SelectionInput` for other runtimes](../workspace/add-ons/reference/rpc/google.apps.card.v1.md#selectioninput)

Feature

(**Developer Preview**): Columns are now in Developer Preview for Add-ons.

For more information refer to the following:

- [`Columns` for Apps Script](./reference/card-service/columns.md)
- [`Columns` for other runtimes](../workspace/add-ons/reference/rpc/google.apps.card.v1.md#columns)

## February 20, 2024

Feature

**(Developer Preview)**: Google Chat apps now support Google Apps Script's Card Service. If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs. For more information, see the [Card Service reference documentation](./reference/card-service.md).

## January 24, 2024

Feature

(**Generally Available**): Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs. This feature is gradually rolling out over the next few weeks. To use this feature, see [Create third-party resources from the @ menu](../workspace/add-ons/guides/create-insert-resource-smart-chip.md).

## January 18, 2024

Feature

(**Generally available**): Google Workspace Add-ons now support link previews in Google Sheets and Slides. To learn more, see [Preview links with smart chips](../workspace/add-ons/guides/preview-links-smart-chips.md).

## December 13, 2023

Feature

(**Generally available**): The [`setPersistValues(persistValues)`](./reference/card-service/action.md#setpersistvaluespersistvalues) method has been added to the `Action` class of the [Card service](./reference/card-service.md). This means that you can now indicate whether form values are determined by the client's values or the server's values after an action response updates a form's card.

## December 11, 2023

Feature

(**Generally Available**): You can now call version 3 of the Google Drive API from Apps Script with the advanced Drive service. To learn more, see [Advanced Drive service](./advanced/drive.md).

## December 07, 2023

Fixed

To fix a bug that prevented events of `eventType != 'default'` from importing, we updated the code sample in [Populate a team vacation calendar](./samples/automations/vacation-calendar.md), the popular Apps Script + Calendar API solution. Review the code change in [GitHub](https://github.com/googleworkspace/apps-script-samples/pull/434/files).

## December 06, 2023

Feature

(**Generally available**): You can now delete versions in your Apps Script project from the project history page in the Apps Script IDE.

Script projects created after December 10, 2023 can have up to 200 versions. If your script reaches the versions limit, or you want to clean up your script project, delete undeployed versions that you no longer need.

To learn more, see [Delete a version](./guides/versions.md#delete-version).

## November 15, 2023

Feature

**([Developer Preview](../workspace/preview.md))**: Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs. To use this feature, see [Create third-party resources from the @ menu](../workspace/add-ons/guides/create-insert-resource-smart-chip.md).

## November 13, 2023

Feature

**(Developer Preview)**: Available as part of the [Google Workspace Developer Preview Program](../workspace/preview.md), which grants early access to certain features.

Google Workspace Add-ons now support link previews in Google Sheets and Slides. To learn more, see [Preview links with smart chips](../workspace/add-ons/guides/preview-links-smart-chips.md).

## November 06, 2023

Feature

**(Generally available)**: You can now call the Chat API from Apps Script with the Advanced Chat Service. To learn how, see [Advanced Chat Service](./advanced/chat.md) in the Apps Script reference documentation.

We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides:

- [Authenticate as an app](../workspace/chat/authenticate-authorize-chat-app.md)
- [Authenticate as a user](../workspace/chat/authenticate-authorize-chat-user.md)
- [Try it - Respond to Incidents](../workspace/add-ons/samples/tutorial-incident-response-user-auth.md)

## September 26, 2023

Change

The email address that sends notifications about [errors in triggers](./guides/triggers/installable.md#errors_in_triggers) has been updated from `apps-scripts-notifications@google.com` to `noreply-apps-scripts-notifications@google.com`.

## September 19, 2023

Deprecated

The classic Google Sites service has been deprecated due to the [transition from classic Sites to new Sites](https://support.google.com/a/answer/9958187#zippy=%2Cwhat-are-the-differences-between-classic-sites-and-new-sites%2Cwhat-happens-to-my-classic-site-after-migration). There isn't a way to connect to new Sites with Apps Script.

## August 23, 2023

Feature

You can now view previously deployed script versions and compare them to the current script version in the Apps Script IDE. Anyone who has edit permission on an Apps Script project can access the project history page. To learn more, refer to the following:

- **Google Workspace Updates blog**: [View & compare script versions with Apps Script project history](https://workspaceupdates.googleblog.com/2023/08/apps-script-project-history.html)
- **Developer documentation**: [Versions](./guides/versions.md)

## June 12, 2023

Feature

Third-party smart chips and link previews are now generally available. To build a Google Workspace Add-on that uses this feature, see [Preview links with smart chips](../workspace/add-ons/guides/preview-links-smart-chips.md).

## December 16, 2022

Deprecated

Apps Script has deprecated the [Contacts service](./reference/contacts.md). Instead, use the [People API advanced service](./advanced/people.md). Refer to [Migrate from Contacts service to People API advanced service](./migration/contacts-people.md).

The Contacts service shutdown has been rescheduled from April 2023 to January 2025. Refer to the [Apps Script sunset schedule](./guides/support/sunset.md).

## November 03, 2022

Feature

Apps Script added a new method to the [Utilities class](./reference/utilities/utilities.md). [`parseDate(date, timeZone, format`)](./reference/utilities/utilities.md#parsedatedate,-timezone,-format) parses a provided string date according to the specification described in the [Java Standard Edition SimpleDateFormat class](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

## November 01, 2022

Deprecated

Apps Script has sunset the following methods:

- [`getChatThreads()`](./reference/gmail/gmail-app.md#getChatThreads())
- [`getChatThreads(start, max)`](./reference/gmail/gmail-app.md#getChatThreads(Integer,Integer))

There isn't a replacement method to get this data with Apps Script.

[Learn about the switch from Classic Hangouts to Chat](https://support.google.com/chat/answer/9854901).

## September 27, 2022

Deprecated

Apps Script has turned down the legacy integrated development environment (IDE) in favor of the redesigned IDE that launched in December 2020.

Learn more about the IDE updates from the following blog posts:

- [Updated Apps Script integrated development environment will replace the legacy experience by Q4 2022](https://workspaceupdates.googleblog.com/2022/09/apps-script-ide-update.html).
- [Additional functionality for the Apps Script Integrated Development Environment (IDE) Script Editor](https://workspaceupdates.googleblog.com/2022/04/apps-script-integrated-development-enviornment-improvements.html).
- [Use the new Apps Script Integrated Development Environment (IDE) Script Editor](https://workspaceupdates.googleblog.com/2020/12/google-apps-script-ide-better-code-editing.html).

## July 19, 2022

Change

Apps Script now automatically deletes [default Google Cloud projects](./guides/cloud-platform-projects.md#default_google_cloud_projects) (Google Cloud projects that Apps Script creates in the background) when their associated scripts haven't run in 180 days or more. If the script runs after Apps Script deletes the default Google Cloud project, Apps Script creates one for the script.

This update doesn't affect standard Google Cloud projects (Google Cloud projects created by people).

## July 08, 2022

Deprecated

Apps Script has deprecated the following methods:

- [`getChatThreads()`](./reference/gmail/gmail-app.md#getChatThreads())
- [`getChatThreads(start, max)`](./reference/gmail/gmail-app.md#getChatThreads(Integer,Integer))

These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat. There isn't a replacement method to get this data with Apps Script.

[Learn about the switch from Classic Hangouts to Chat](https://support.google.com/chat/answer/9854901).

## June 06, 2022

Change

You can now call functions in separate files before they're parsed. Previously, the V8 runtime required a script file to be parsed before any other file could call the functions it defines.

Now, the order of files in the Apps Script editor doesn't matter. This means that you can call a function in a different file to assign a value to a global variable—the function is always defined before it's called. This behavior reflects that of the legacy Rhino runtime.

## April 13, 2022

Feature

You can now perform the following actions in the new Apps Script integrated development environment (IDE):

- [Create test deployments for Editor Add-ons](../workspace/add-ons/how-tos/testing-editor-addons.md#create_a_test_deployment).
- [Add, edit, and delete script properties from the project settings page](./guides/properties.md#manage_script_properties_manually).
- Sort files alphabetically in the editor.
- [Debug Rhino functions without migrating to the V8 runtime](./guides/support/troubleshooting.md#use_the_debugger_and_breakpoints). If your code isn't V8 compatible, you might receive errors.
- [Set the time zone for a script project](./guides/projects.md#set_the_time_zone_for_a_project).

## March 24, 2022

Feature

For Google Workspace Add-ons, an [`Attachment` class](./reference/card-service/attachment.md) has been added to the [Card Service](./reference/card-service/card-service.md) that lets you add custom attachments to Calendar events. You can also set an event trigger that fires when the user clicks on the add-on attachment provider in the Calendar dropdown menu. For more information, refer to [`EventAttachmentTrigger`](./manifest/calendar-addons.md#eventattachmenttrigger).

## March 18, 2022

Deprecated

The `get` methods for several color objects in the [Spreadsheet Service](./reference/spreadsheet.md) have been deprecated in favor of a new naming convention. The functionality remains the same. For example, the `getFontColor()` method from the Range class has been replaced with `getFontColorObject()`.

The following classes have updated `get` methods for color objects:

- [`Banding`](./reference/spreadsheet/banding.md):
	- `getFirstColumnColor()` is now `getFirstColumnColorObject()`.
		- `getFirstRowColor()` is now `getFirstRowColorObject()`.
		- `getFooterColumnColor()` is now `getFooterColumnColor()`.
		- `getFooterRowColor()` is now `getFooterRowColorObject()`.
		- `getHeaderColumnColor()` is now `getHeaderColumnColorObject()`.
		- `getHeaderRowColor()` is now `getHeaderRowColorObject()`.
		- `getSecondColumnColor()` is now `getSecondColumnColorObject()`.
		- `getSecondRowColor()` is now `getSecondRowColorObject()`.
- [`BooleanCondition`](./reference/spreadsheet/boolean-condition.md):
	- `getBackground()` is now `getBackgroundObject()`.
		- `getFontColor()` is now `getFontColorObject()`.
- [`GradientCondition`](./reference/spreadsheet/gradient-condition.md):
	- `getMaxColor()` is now `getMaxColorObject`.
		- `getMidColor()` is now `getMidColorObject`.
		- `getMinColor()` is now `getMinColorObject`.
- [`Range`](./reference/spreadsheet/range.md):
	- `getFontColor()` is now `getFontColorObject()`.
		- `getFontColors()` is now `getFontColorObjects()`.
- [`Sheet`](./reference/spreadsheet/sheet.md#methods):
	- `getTabColor()` is now `getTabColorObject`.
- [`Slicer`](./reference/spreadsheet/slicer.md):
	- `getBackgroundColor()` is now `getBackgroundColorObject()`.

## February 14, 2022

Feature

Owners receive email alerts when someone outside the owner's organization edits a script project in the new integrated development environment (IDE).

- **For container-bound scripts**: If someone outside the container owner's organization creates or edits a container-bound script project, the container owner receives an email notification.
- **For standalone scripts**: If someone outside the script project owner's organization edits a standalone script project, the script project owner receives an email notification.

## January 19, 2022

Feature

The following classes have been added to the [Spreadsheet Service](./reference/spreadsheet.md) to let you add images to cells:

- [`CellImageBuilder`](./reference/spreadsheet/cell-image-builder.md): This builder creates the image value needed to add an image to a cell.
- [`CellImage`](./reference/spreadsheet/cell-image.md): Represents an image to add to a cell.

To add an image to a cell, you must create a new image value for the image using [`SpreadsheetApp.newCellImage()`](./reference/spreadsheet/spreadsheet-app.md#newCellImage()) and [`CellImageBuilder`](./reference/spreadsheet/cell-image-builder.md). Then, use [`Range.setValue(value)`](./reference/spreadsheet/range.md#setValue(Object)) or [`Range.setValues(values)`](./reference/spreadsheet/range.md#setValues(Object)) to add the image value to the cell.

## December 15, 2021

Deprecated

Versions 1.0 and 1.1 of the TLS security protocol are disabled. To establish [JDBC](./guides/jdbc.md) connections, use TLS 1.2 or higher.

## September 01, 2021

Feature

In the HTML Service iframe sandbox, `allow-top-navigation`, which allows the content to navigate its top-level browsing context, is restricted and not set as an attribute in the sandbox. Instead, the `allow-top-navigation-by-user-activation` attribute has been added to the sandbox.

If you need to redirect your script, add a link or a button for the user to take action on.

Learn more about [HMTL Service restrictions](./guides/html/restrictions.md).

## August 31, 2021

Feature

The [Drive Service](./reference/drive.md) has added three new methods to the [file](./reference/drive/file.md) and [folder](./reference/drive/folder.md) classes to manage the use of resource keys when sharing files and folders.

- `getSecurityUpdateEligible()`: Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link.
- `getSecurityUpdateEnabled()`: Gets whether a file or folder requires a resource key for access when it's shared using a link.
- `setSecurityUpdateEnabled(enabled)`: Sets whether the file or folder requires a resource key for access when it's shared using a link.

Learn more about the [resource key security update for Drive](https://support.google.com/drive/answer/10729743).

## August 23, 2021

Feature

The [Document Service](./reference/document.md) has added support for smart chips by adding three new classes:

- [Date](./reference/document/date.md) - An element representing a formatted date.
- [Person](./reference/document/person.md) - An element representing a link to a person.
- [RichLink](./reference/document/rich-link.md) - An element representing a link to a Google resource, such as a Drive file or a YouTube video.

Learn more about [smart chips in Google Docs](https://support.google.com/docs/answer/10710316).

## August 09, 2021

Change

The Microsoft SQL Server JDBC driver was updated to version 7.2.1. If you encounter issues, [report them on the issue tracker](https://issuetracker.google.com/issues?q=componentid:191640%2B). If you're an administrator and need live support, [contact Google Workspace support](https://support.google.com/a/answer/1047213).

## June 01, 2021

Feature

A new divider widget has been added for Google Workspace Add-ons. To add a divider to an add-on card, use the [`newDivider()` method](./reference/card-service/card-service.md#newdivider) within the [Card service](./reference/card-service/card-service.md).

## May 27, 2021

Feature

A new method has been added to the [`Sheet` class](./reference/spreadsheet/sheet.md#setrowheightsforcedstartrow,-numrows,-height) of the [`Spreadsheet` service](./reference/spreadsheet.md). [`setRowHeightsForced(startRow, numRows, height)`](./reference/spreadsheet/sheet.md#setrowheightsforcedstartrow,-numrows,-height) lets you manually set the height for a row or a set of rows.

## March 15, 2021

Change

The following updates have been made to deployments in the new editor:

- You can now have more than one active deployment.
- You can now change the version associated with an active deployment.

To learn more, see [Create and manage deployments](./concepts/deployments.md).

## December 07, 2020

Announcement

The Apps Script integrated development environment, or IDE, has been fully redesigned. Along with a completely new interface, the following features have been updated:

- The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
- The editor's resources panel now includes files, advanced services, and libraries.
- Autoformatting has been added to the editor.
- Autocomplete in the editor has been enhanced to be faster, more consistent, and extends its support to user-defined functions and JavaScript language features. You can add JSDoc to your functions for better autocomplete suggestions.
- The editor now supports codeblock and function collapsing.
- Keyboard shortcuts and a Command Palette has been added to the editor. Press F1 to view the Command Palette and available keyboard shortcuts.
- The editor now includes a contextual right-click menu with options such as Go To Symbol, Rename Symbols, and Command Palette.
- Enhancements have been made to the debugger's performance and speed.
- Logs now stream in real-time as you run a script.
- The deployments dialog auto-detects the deployment types from the script project's manifest. You can change or add more types as needed.
- Deployments have been merged with versions. Each time you create a new deployment, a new version is automatically created. clasp users are unaffected by this change.
- A single deployment can be an add-on deployment, web app, library, or API executable. Any deployment can be used as a library.
- Now only one deployment can be active at a time. This change doesn't affect existing active deployments. clasp users are unaffected by this change.
- You can no longer explicitly deactivate published web apps. Instead, delete the deployment that has the web app. To reactivate the web app, deploy it again.
- The debugger is no longer supported in the Rhino runtime. To use the debugger, [migrate your script to the V8 runtime](./guides/v8-runtime/migration.md).
- Testing Editor Add-ons is not yet supported in this release and will be added in 2021. To test Editor Add-ons, switch back to the legacy IDE.

To switch back to the legacy IDE from within the editor, at the top, click **Use legacy editor**.

## October 23, 2020

Feature

An advanced service for [Google Tables](https://tables.area120.google.com/u/0/home) has been added to Apps Script. The [`Tables` service](./guides/support/sunset.md) allows scripts to programmatically read and edit rows within `Tables`.

## September 03, 2020

Feature

New classes and methods have been added to support [Connected Sheets](https://gsuiteupdates.googleblog.com/2020/08/connected-sheets-api-apps-script.html).

The following new classes have been added to the [`Spreadsheet` service](./reference/spreadsheet.md):

- `DataSourceChart`
- `DataSourceColumn`
- `DataSourceFormula`
- `DataSourcePivotTable`
- `DataSourceRefreshSchedule`
- `DataSourceRefreshScheduleFrequency`
- `DataSourceSheet`
- `DataSourceSheetFilter`
- `DataSourceTableColumn`
- `DataSourceTableFilter`
- `DateTimeGroupingRule`
- `PivotGroupLimit`
- `SortSpec`

New methods to support Connected Sheets have been added to the following classes in the [`Spreadsheet` service](./reference/spreadsheet.md):

- `BigQueryDataSourceSpecBuilder`
- `BigQueryDataSourceSpec`
- `DataExecutionStatus`
- `DataSourceTable`
- `DataSource`
- `EmbeddedChart`
- `FilterCriteriaBuilder`
- \`PivotFilter
- `PivotGroup`
- `PivotTable`
- `PivotValue`
- `Range`
- `Sheet`
- `SpreadsheetApp`
- `Spreadsheet`

## August 27, 2020

Feature

A new class called [`DecoratedText`](./reference/card-service/decorated-text.md) has been added to the [Card Service](./reference/card-service/card-service.md). `DecoratedText` adds text with optional decorations and was added to replace the [`KeyValue` class](./reference/card-service/key-value.md).

## July 27, 2020

Deprecated

The following [`Folder` class methods](./reference/drive/folder.md) have been [deprecated](./reference/drive/folder.md#expandable-1):

- `addFile(File)`
- `addFolder(Folder)`
- `removeFile(File)`
- `removeFolder(Folder)`

Announcement

To help [simplify Google Drive's folder structure and sharing models](https://cloud.google.com/blog/products/g-suite/simplifying-google-drives-folder-structure-and-sharing-models), new methods have been added to the [`Drive` service](./reference/drive.md) and some existing methods have been deprecated.

Feature

The `DriveApp` now has an `enforceSingleParent(value)` method that enables or disables `enforceSingleParent` behavior.

- The [`File` class](./reference/drive/file.md) now has the following methods:
	- `file.getTargetId()`: Gets a shortcut's file ID.
		- `file.getTargetMimeType()`: Returns the mime type of the item a shortcut points to.
		- `file.moveTo(destination)`: Moves a file to a specified destination folder.

The [`Folder` class](./reference/drive/folder.md) now has the following methods:

- `folder.createShortcut(targetId)`: Creates a shortcut to the provided Drive item ID, and returns it.
- `folder.moveTo(destination)`: Moves an item to the provided destination folder.

## June 12, 2020

Feature

New methods have been added to the [`Spreadsheet` service](./reference/spreadsheet.md):

- The [`RichTextValue` class](./reference/spreadsheet/rich-text-value.md) now has a `RichTextValue.getLinkUrl()` method that gets the URL of the specified value.
- The [`RichTextValueBuilder` class](./reference/spreadsheet/rich-text-value-builder.md) now has a `RichTextValueBuilder.setLinkUrl()` method that sets the link URL for the specified value.
- The [`PivotTable` class](./reference/spreadsheet/pivot-table.md) now has a `PivotTable.getSourceDataRange()` method that returns the source data range on which the pivot table is constructed.
- The [`PivotValue` class](./reference/spreadsheet/pivot-value.md) now has a `PivotValue.remove()` method that removes the value from the pivot table.

## April 22, 2020

Feature

A new simple trigger, [`onSelectionChange(e)`](./guides/triggers.md#onselectionchangee), has been added for Google Sheets. The `onSelectionChange(e)` trigger runs automatically when a user changes the selection in a spreadsheet.

## April 02, 2020

Feature

The following has been added to the [Spreadsheet service](./reference/spreadsheet.md):

- A new [`Drawing` class](./reference/spreadsheet/drawing.md) has been added to support drawings.
- You can now get your drawings with the [`Sheet.getDrawings()` method](./reference/spreadsheet/sheet.md#getdrawings).

The following has been added to the [Drive service](./reference/drive.md):

- There's a new `FILE_ORGANIZER` value in the [`Permission` enum](./reference/drive/permission.md). If you have `FILE_ORGANIZER` permission on a shared drive, you can edit, trash, and move content within that drive.

## February 28, 2020

Feature

The following methods have been added to the [Spreadsheet service](./reference/spreadsheet.md) to support the use of theme colors. Many of these methods duplicate the effect of existing color methods, but let you use [`Color` objects](./reference/spreadsheet/color.md) instead of strings as parameters and return types:

- The [`Banding` class](./reference/spreadsheet/banding.md) now has 16 new methods that manipulate color in the banding columns and rows using `Color` objects.
- The [`BooleanCondition` class](./reference/spreadsheet/boolean-condition.md) now has two new methods that retrieve the color of the condition's background and font as `Color` objects.
- The [`ConditionalFormatRuleBuilder` class](./reference/spreadsheet/conditional-format-rule-builder.md) now has seven new methods that set color-based format rules using `Color` objects.
- The [`GradientCondition` class](./reference/spreadsheet/gradient-condition.md) now has three new methods that retrieve condition colors as `Color` objects.
- The [`Range` class](./reference/spreadsheet/range.md) now has eight new methods that get and set font and background colors using `Color` objects.
- The [`Sheet` class](./reference/spreadsheet/sheet.md) now has two new methods that get and set tab colors using `Color` objects.
- The [`Slicer` class](./reference/spreadsheet/slicer.md) now has two new methods that get and set the background color of the slicer using `Color` objects.
- The [`TextStyleBuilder` class](./reference/spreadsheet/text-style-builder.md) now has a [`TextStyleBuilder.setForegroundColorObject(color)` method](./reference/spreadsheet/text-style-builder.md#setForegroundColorObject(Color)) that updates the foreground color of the style builder using a `Color` object.
- The [`TextStyle` class](./reference/spreadsheet/text-style.md) now has a [`TextStyle.getForegroundColorObject()` method](./reference/spreadsheet/text-style.md#getForegroundColorObject()) that gets the foreground color of the style as a `Color` object.

## February 05, 2020

Announcement

Apps Script now supports the [V8 runtime](./guides/v8-runtime.md). This enables modern JavaScript features and syntax in Apps Script. You can [migrate existing scripts](./guides/v8-runtime/migration.md) to use V8 and its features.

## January 21, 2020

Feature

To support the launch of [G Suite Add-ons](../workspace/add-ons/concepts/types.md#g_suite_add-ons), the following manifest changes, service, classes, and methods have been added to Add-ons:

- The add-ons [manifest structure](./manifest.md) has been updated to provide configuration controls for G Suite Add-ons. All add-on manifest settings are specified in the [`AddOns` object](./manifest/addons.md) in the manifest. Manifest fields that previously supported Gmail add-ons still exist, but are now deprecated. See [Upgrading your published add-ons](../workspace/add-ons/how-tos/upgrade-addons.md) for instructions on how to upgrade a Gmail add-on into a G Suite add-on.
- The [Card service](./reference/card-service.md) has been extended with the following classes and methods that provide new widgets and event responses:
	- [`CalendarEventActionResponse`](./reference/card-service/calendar-event-action-response.md)
		- [`CalendarEventActionResponseBuilder`](./reference/card-service/calendar-event-action-response-builder.md)
		- [`DatePicker`](./reference/card-service/date-picker.md)
		- [`DateTimePicker`](./reference/card-service/date-time-picker.md)
		- [`DisplayStyle`](./reference/card-service/display-style.md)
		- [`DriveItemsSelectedActionResponse`](./reference/card-service/drive-items-selected-action-response.md)
		- [`DriveItemsSelectedActionResponseBuilder`](./reference/card-service/drive-items-selected-action-response-builder.md)
		- [`FixedFooter`](./reference/card-service/fixed-footer.md)
		- [`SwitchControlType`](./reference/card-service/switch-control-type.md)
		- [`TimePicker`](./reference/card-service/time-picker.md)
		- [`CardBuilder.setDisplayStyle(displayStyle)`](./reference/card-service/card-builder.md#setDisplayStyle(DisplayStyle))
		- [`CardBuilder.setFixedFooter(fixedFooter)`](./reference/card-service/card-builder.md#setfixedfooterfixedfooter)
		- [`CardBuilder.setPeekCardHeader(peekCardHeader)`](./reference/card-service/card-builder.md#setpeekcardheaderpeekcardheader)
		- [`CardService.newCalendarEventActionResponseBuilder()`](./reference/card-service/card-service.md#newcalendareventactionresponsebuilder)
		- [`CardService.newDatePicker()`](./reference/card-service/card-service.md#newdatepicker)
		- [`CardService.newDateTimePicker()`](./reference/card-service/card-service.md#newdatetimepicker)
		- [`CardService.newDriveItemsSelectedActionResponseBuilder()`](./reference/card-service/card-service.md#newdriveitemsselectedactionresponsebuilder)
		- [`CardService.newFixedFooter()`](./reference/card-service/card-service.md#newfixedfooter)
		- [`CardService.newTimePicker()`](./reference/card-service/card-service.md#newtimepicker)
		- [`Switch.setControlType(controlType)`](./reference/card-service/switch.md#setcontroltypecontroltype)

The [Conference Data service](./reference/conference-data.md) has been added to Apps Script. The service helps G Suite Add-ons that extend Google Calendar to stay in sync with third-party conferencing applications. This service is only useful to developers who manage a conferencing application and want to make it available in Google Calendar.

## December 18, 2019

Feature

The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following class and new methods to support using color building and theme colors:

- [`Color`](./reference/spreadsheet/color.md)
- [`ColorBuilder`](./reference/spreadsheet/color-builder.md)
- [`SpreadsheetTheme`](./reference/spreadsheet/spreadsheet-theme.md)
- [`ThemeColor`](./reference/spreadsheet/theme-color.md)
- [`ThemeColorType`](./reference/spreadsheet/theme-color-type.md)
- [`SpreadsheetApp.newColor()`](./reference/spreadsheet/spreadsheet-app.md#newcolor)
- [`Spreadsheet.getPredefinedSpreadsheetThemes()`](./reference/spreadsheet/spreadsheet.md#getpredefinedspreadsheetthemes)
- [`Spreadsheet.getSpreadsheetTheme()`](./reference/spreadsheet/spreadsheet.md#getspreadsheettheme)
- [`Spreadsheet.resetSpreadsheetTheme()`](./reference/spreadsheet/spreadsheet.md#resetspreadsheettheme)
- [`Spreadsheet.setSpreadsheetTheme(theme)`](./reference/spreadsheet/spreadsheet.md#setspreadsheetthemetheme)

## December 11, 2019

Feature

The [Data Studio service](./reference/data-studio.md) has been extended with the following class and new methods to support different response types and dynamic statuses:

- [`GetDataResponse`](./reference/data-studio/get-data-response.md)
- [`GetSchemaResponse`](./reference/data-studio/get-schema-response.md)
- [`SetCredentialsResponse`](./reference/data-studio/set-credentials-response.md)
- [`Checkbox.setIsDynamic(isDynamic)`](./reference/data-studio/checkbox.md#setisdynamicisdynamic)
- [`CommunityConnector.newGetDataResponse()`](./reference/data-studio/community-connector.md#newgetdataresponse)
- [`CommunityConnector.newGetSchemaResponse()`](./reference/data-studio/community-connector.md#newgetschemaresponse)
- [`CommunityConnector.newSetCredentialsResponse()`](./reference/data-studio/community-connector.md#newsetcredentialsresponse)
- [`Config.setIsSteppedConfig(isSteppedConfig)`](./reference/data-studio/config.md#setissteppedconfigissteppedconfig)
- [`SelectMultiple.setIsDynamic(isDynamic)`](./reference/data-studio/select-multiple.md#setisdynamicisdynamic)
- [`SelectSingle.setIsDynamic(isDynamic)`](./reference/data-studio/select-single.md#setisdynamicisdynamic)
- [`TextArea.setIsDynamic(isDynamic)`](./reference/data-studio/text-area.md#setisdynamicisdynamic)
- [`TextInput.setIsDynamic(isDynamic)`](./reference/data-studio/text-input.md#setisdynamicisdynamic)

## November 06, 2019

Feature

The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables:

- [`Slicer`](./reference/spreadsheet/slicer.md)
- [`Sheet.getSlicers()`](./reference/spreadsheet/sheet.md#getslicers)
- [`Sheet.insertSlicer(range, anchorRowPos, anchorColPos)`](./reference/spreadsheet/sheet.md#insertslicerrange,-anchorrowpos,-anchorcolpos)
- [`Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY)`](./reference/spreadsheet/sheet.md#insertslicerrange,-anchorrowpos,-anchorcolpos,-offsetx,-offsety)

The [Script service](./reference/script.md) has been extended with the [`ScriptApp.getIdentityToken()` method](./reference/script/script-app.md#getidentitytoken), which returns an identity token for the effective user.

## October 28, 2019

Deprecated

You can no longer publish web apps to the Chrome Web Store. The Chrome Web Store [deprecated Chrome apps in 2016](https://blog.chromium.org/2016/08/from-chrome-apps-to-web.html) and they are now only available for ChromeOS devices. This change includes published Apps Script web apps. Previously published web apps are no longer discoverable in the Chrome Web Store. [Editor Add-ons](../workspace/add-ons/concepts/types.md#editor_add-ons) aren't affected; you can still [publish Editor Add-ons](../workspace/add-ons/how-tos/publish-add-on-overview.md) to the Chrome Web Store.

## October 23, 2019

Deprecated

Several classes and methods relating to the now shutdown [UiApp service](./guides/support/sunset.md) have been removed. Most of these methods involved interactions between the [Charts service](./reference/charts.md) and `UiApp` that were very seldom used. The following is a full list of the removed classes and methods:

- [Charts service](./reference/charts.md)
	- `CategoryFilterBuilder`
		- `Control`
		- `DashboardPanel`
		- `DashboardPanelBuilder`
		- `Chart.getId()`
		- `Chart.getType()`
		- `Charts.newCategoryFilter()`
		- `Charts.newDashboardPanel()`
		- `Charts.newNumberRangeFilter()`
		- `Charts.newStringFilter()`
		- `NumberRangeFilterBuilder.build()`
		- `NumberRangeFilterBuilder.setDataTable(tableBuilder)`
		- `NumberRangeFilterBuilder.setDataTable(table)`
		- `NumberRangeFilterBuilder.setFilterColumnIndex(columnIndex)`
		- `NumberRangeFilterBuilder.setFilterColumnLabel(columnLabel)`
		- `NumberRangeFilterBuilder.setLabel(label)`
		- `NumberRangeFilterBuilder.setLabelSeparator(labelSeparator)`
		- `NumberRangeFilterBuilder.setLabelStacking(orientation)`
		- `StringFilterBuilder.build()`
		- `StringFilterBuilder.setDataTable(tableBuilder)`
		- `StringFilterBuilder.setDataTable(table)`
		- `StringFilterBuilder.setFilterColumnIndex(columnIndex)`
		- `StringFilterBuilder.setFilterColumnLabel(columnLabel)`
		- `StringFilterBuilder.setLabel(label)`
		- `StringFilterBuilder.setLabelSeparator(labelSeparator)`
		- `StringFilterBuilder.setLabelStacking(orientation)`
- [Spreadsheet service](./reference/spreadsheet.md)
	- `EmbeddedChart.getId()`
		- `EmbeddedChart.getType()`
		- `EmbeddedChart.setId(id)`

Change

The [Slides service](./reference/slides.md) class `RgbColor` and the enumeration `ColorType have been moved from the Slides service to the [Base script service](./reference/base.md). The functionality of these classes has not changed. Moving these classes to the Base script service enables other services to make use of them in the future. You can now find the documentation for these classes at [`RgbColor`](./reference/base/rgb-color.md) and [`ColorType\`\](https://developers.google.com/apps-script/reference/base/color-type).

## September 09, 2019

Change

The [Card service](./reference/card-service.md) methods [`CardHeader.setUrl(url)`](./reference/card-service/card-header.md#setimageurlimageurl) and [`Image.setUrl(url)`](./reference/card-service/image.md#setimageurlurl) have been updated to accept an encoded image data string as an input parameter. As before, you can alternatively use a publicly-available image URL as the input parameter.

## August 07, 2019

Deprecated

Documentation for the UI service has been removed. This service was deprecated in December 2014 and officially [shut down on July 15, 2019](./guides/support/sunset.md#ui-service). To build interfaces for web apps and Editor Add-ons, use the [HTML service](./reference/html.md).

## July 26, 2019

Feature

- The [Group service](./reference/groups.md) has been updated with the [`Groups.getRoles(user)` method](./reference/groups/group.md#getrolesusers) that can determine the list of roles a specific user in a group has.
- The [Slides service](./reference/slides.md) has been extended with the following new methods to support concrete color schemes:
	- [`ColorScheme.setConcreteColor(type, color)`](./reference/slides/color-scheme.md#setconcretecolortype-color)
		- [`ColorScheme.setConcreteColor(type, red, green, blue)`](./reference/slides/color-scheme.md#setconcretecolortype-red-green-blue)
		- [`ColorScheme.setConcreteColor(type, hexColor)`](./reference/slides/color-scheme.md#setconcretecolortype-hexcolor)
- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new methods to support trimming whitespace and removing duplicate values:
	- [`RangeList.trimWhitespace()`](./reference/spreadsheet/range-list.md#trimwhitespace)
		- [`Range.removeDuplicates()`](./reference/spreadsheet/range.md#removeduplicates)
		- [`Range.removeDuplicates(columnsToCompare)`](./reference/spreadsheet/range.md#removeduplicatescolumnstocompare)
		- [`Range.trimWhitespace()`](./reference/spreadsheet/range.md#trimwhitespace)

## May 20, 2019

Feature

- The [Gmail service](./reference/gmail.md) has been updated with the [`GmailMessage.getHeader(name)` method](./reference/gmail/gmail-message.md#getheadername) that can retrieve a RFC 2822 header from a message.
- The [Optimization service](./reference/optimization.md) has been updated with the following batch methods:
	- [`LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients)`](./reference/optimization/linear-optimization-engine.md#addconstraintslowerbounds-upperbounds-variablenames-coefficients)
		- [`LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients)`](./reference/optimization/linear-optimization-engine.md#addvariablesnames-lowerbounds-upperbounds-types-objectivecoefficients)

## May 03, 2019

## April 19, 2019

Feature

The [Data Studio service](./reference/data-studio.md) has been updated to add a few values to [`FieldType` enum](./reference/data-studio/field-type.md):

- `HYPERLINK`
- `IMAGE`
- `IMAGE_LINK`

## April 08, 2019

Change

The behavior of the [Google Cloud (GCP) projects](./guides/cloud-platform-projects.md) used by scripts has been altered. Now, the [default GCP projects](./guides/cloud-platform-projects.md#default_cloud_platform_projects) that Apps Script creates for new scripts are hidden and script owners can't access them directly. Admins and domain users with the `resourcemanager.projects.list` permission on the parenting GCP folder can still access default GCP projects.

If you need access to a script's GCP project (because you wish to publish it or take a similar action), it's best to switch your script to use a [standard GCP project](./guides/cloud-platform-projects.md#standard_cloud_platform_projects).

## April 05, 2019

Feature

- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new classes and methods to support text finding, checkboxes, and other features:
	- [`TextFinder`](./reference/spreadsheet/text-finder.md)
		- [`RecalculationInterval`](./reference/spreadsheet/recalculation-interval.md)
		- [`SheetType`](./reference/spreadsheet/sheet-type.md)
		- [`DataValidationBuilder.requireCheckbox()`](./reference/spreadsheet/data-validation-builder.md#requirecheckbox)
		- [`DataValidationBuilder.requireCheckbox(checkedValue)`](./reference/spreadsheet/data-validation-builder.md#requirecheckboxcheckedvalue)
		- [`DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue)`](./reference/spreadsheet/data-validation-builder.md#requirecheckboxcheckedvalue-uncheckedvalue)
		- A `clearRanges()` method has been added to the all the embedded chart type builder classes, such as [`EmbeddedAreaChartBuilder.clearRanges()`](./reference/spreadsheet/embedded-area-chart-builder.md#clearranges)
		- [`EmbeddedChart.getChartId()`](./reference/spreadsheet/embedded-chart.md#getchartid)
		- [`RangeList.check()`](./reference/spreadsheet/range-list.md#check)
		- [`RangeList.insertCheckboxes()`](./reference/spreadsheet/range-list.md#insertcheckboxes)
		- [`RangeList.insertCheckboxes(checkedValue)`](./reference/spreadsheet/range-list.md#insertcheckboxescheckedvalue)
		- [`RangeList.insertCheckboxes(checkedValue, uncheckedValue)`](./reference/spreadsheet/range-list.md#insertcheckboxescheckedvalue-uncheckedvalue)
		- [`RangeList.removeCheckboxes()`](./reference/spreadsheet/range-list.md#removecheckboxes)
		- [`RangeList.uncheck()`](./reference/spreadsheet/range-list.md#uncheck)
		- [`Range.check()`](./reference/spreadsheet/range.md#check)
		- [`Range.createTextFinder(findText)`](./reference/spreadsheet/range.md#createtextfinderfindtext)
		- [`Range.getDataRegion()`](./reference/spreadsheet/range.md#getdataregion)
		- [`Range.getDataRegion(dimension)`](./reference/spreadsheet/range.md#getdataregiondimension)
		- [`Range.insertCheckboxes()`](./reference/spreadsheet/range.md#insertcheckboxes)
		- [`Range.insertCheckboxes(checkedValue)`](./reference/spreadsheet/range.md#insertcheckboxescheckedvalue)
		- [`Range.insertCheckboxes(checkedValue, uncheckedValue)`](./reference/spreadsheet/range.md#insertcheckboxescheckedvalue-uncheckedvalue)
		- [`Range.removeCheckboxes()`](./reference/spreadsheet/range.md#removecheckboxes)
		- [`Range.uncheck()`](./reference/spreadsheet/range.md#uncheck)
		- [`Sheet.createTextFinder(findText)`](./reference/spreadsheet/sheet.md#createtextfinderfindtext)
		- [`Sheet.getType()`](./reference/spreadsheet/sheet.md#gettype)
		- [`Spreadsheet.createTextFinder(findText)`](./reference/spreadsheet/spreadsheet.md#createtextfinderfindtext)
		- [`Spreadsheet.getIterativeCalculationConvergenceThreshold()`](./reference/spreadsheet/spreadsheet.md#getiterativecalculationconvergencethreshold)
		- [`Spreadsheet.getMaxIterativeCalculationCycles()`](./reference/spreadsheet/spreadsheet.md#getmaxiterativecalculationcycles)
		- [`Spreadsheet.getRecalculationInterval()`](./reference/spreadsheet/spreadsheet.md#getrecalculationinterval)
		- [`Spreadsheet.isIterativeCalculationEnabled()`](./reference/spreadsheet/spreadsheet.md#isiterativecalculationenabled)
		- [`Spreadsheet.moveChartToObjectSheet(chart)`](./reference/spreadsheet/spreadsheet.md#movecharttoobjectsheetchart)
		- [`Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold)`](./reference/spreadsheet/spreadsheet.md#setiterativecalculationconvergencethresholdminthreshold)
		- [`Spreadsheet.setIterativeCalculationEnabled(isEnabled)`](./reference/spreadsheet/spreadsheet.md#setiterativecalculationenabledisenabled)
		- [`Spreadsheet.setMaxIterativeCalculationCycles(maxIterations)`](./reference/spreadsheet/spreadsheet.md#setmaxiterativecalculationcyclesmaxiterations)
		- [`Spreadsheet.setRecalculationInterval(recalculationInterval)`](./reference/spreadsheet/spreadsheet.md#setrecalculationintervalrecalculationinterval)
- The [Data Studio service](./reference/data-studio.md) has been extended with the following new classes and methods that support configuring BigQuery connectors:
	- [`BigQueryConfig`](./reference/data-studio/big-query-config.md)
		- [`BigQueryParameterType`](./reference/data-studio/big-query-parameter-type.md)
		- [`CommunityConnector.newBigQueryConfig()`](./reference/data-studio/community-connector.md#newBigQueryConfig())
- The [`Notification` objects](./reference/card-service/notification.md) in the [Card service](./reference/card-service.md) no longer have a type that you must set. Calls to the now removed `Notification.setType(type)` method result in a no-op.

## February 26, 2019

Feature

- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new classes and methods to support [BigQuery data connectors in Sheets](https://cloud.google.com/blog/products/g-suite/connecting-bigquery-and-google-sheets-to-help-with-hefty-data-analysis):
	- [`BigQueryDataSourceSpec`](./reference/spreadsheet/big-query-data-source-spec.md)
		- [`BigQueryDataSourceSpecBuilder`](./reference/spreadsheet/big-query-data-source-spec-builder.md)
		- [`DataExecutionErrorCode`](./reference/spreadsheet/data-execution-error-code.md)
		- [`DataExecutionState`](./reference/spreadsheet/data-execution-state.md)
		- [`DataExecutionStatus`](./reference/spreadsheet/data-execution-status.md)
		- [`DataSourceParameterType`](./reference/spreadsheet/data-source-parameter-type.md)
		- [`DataSourceParameter`](./reference/spreadsheet/data-source-parameter.md)
		- [`DataSourceSpecBuilder`](./reference/spreadsheet/data-source-spec-builder.md)
		- [`DataSourceSpec`](./reference/spreadsheet/data-source-spec.md)
		- [`DataSourceTable`](./reference/spreadsheet/data-source-table.md)
		- [`DataSourceType`](./reference/spreadsheet/data-source-type.md)
		- [`DataSource`](./reference/spreadsheet/data-source.md)
		- [`Range.getDataSourceTables()`](./reference/spreadsheet/range.md#getdatasourcetables)
		- [`Sheet.getDataSourceTables()`](./reference/spreadsheet/sheet.md#getdatasourcetables)
		- [\`SpreadsheetApp.enableAllDataSourcesExecution()](./reference/spreadsheet/spreadsheet-app.md#enablealldatasourcesexecution)
		- [`SpreadsheetApp.enableBigQueryExecution()`](./reference/spreadsheet/spreadsheet-app.md#enablebigqueryexecution)
		- [`SpreadsheetApp.newDataSourceSpec()`](./reference/spreadsheet/spreadsheet-app.md#newdatasourcespec)
		- [`Spreadsheet.getDataSourceTables()`](./reference/spreadsheet/spreadsheet.md#getdatasourcetables)
		- [`Spreadsheet.insertSheetWithDataSourceTable(spec)`](./reference/spreadsheet/spreadsheet.md#insertsheetwithdatasourcetablespec)
- The [Data Studio service](./reference/data-studio.md) has been extended with the following new methods involving reaggregation settings:
	- [`Field.getIsReaggregatable()`](./reference/data-studio/field.md#getisreaggregatable)
		- [`Field.setIsReaggregatable(isReaggregatable)`](./reference/data-studio/field.md#setisreaggregatableisreaggregatable)

## January 22, 2019

Deprecated

The deprecated [UiApp service](./guides/support/sunset.md) will be officially shutdown on July 15th, 2019. After this date, the service will no longer function for any script project.

Feature

- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new classes and methods to support text styles and Rich Text cell formatting:
	- [`RichTextValue`](./reference/spreadsheet/rich-text-value.md)
		- [`RichTextValueBuilder`](./reference/spreadsheet/rich-text-value-builder.md)
		- [`TextStyle`](./reference/spreadsheet/text-style.md)
		- [`TextStyleBuilder`](./reference/spreadsheet/text-style-builder.md)
		- [`Range.getRichTextValue()`](./reference/spreadsheet/range.md#getrichtextvalue)
		- [`Range.getRichTextValues()`](./reference/spreadsheet/range.md#getrichtextvalues)
		- [`Range.getTextStyle()`](./reference/spreadsheet/range.md#gettextstyle)
		- [`Range.getTextStyles()`](./reference/spreadsheet/range.md#gettextstyles)
		- [`Range.setRichTextValue(value)`](./reference/spreadsheet/range.md#setrichtextvaluevalue)
		- [`Range.setRichTextValues(values)`](./reference/spreadsheet/range.md#setrichtextvaluesvalues)
		- [`Range.setTextStyle(style)`](./reference/spreadsheet/range.md#settextstylestyle)
		- [`Range.setTextStyles(styles)`](./reference/spreadsheet/range.md#settextstylesstyles)
		- [`SpreadsheetApp.newRichTextValue()`](./reference/spreadsheet/spreadsheet-app.md#newrichtextvalue)
		- [`SpreadsheetApp.newTextStyle()`](./reference/spreadsheet/spreadsheet-app.md#newtextstyle)
- The [Data Studio service](./reference/data-studio.md) has been extended with the following new classes and methods that define and support authentication types for community connectors:
	- [`GetAuthTypeResponse`](./reference/data-studio/get-auth-type-response.md)
		- [`AuthType`](./reference/data-studio/auth-type.md)
		- [`CommunityConnector,newAuthTypeResponse()`](./reference/data-studio/community-connector.md#newauthtyperesponse)

## January 04, 2019

Feature

- The [Slides service](./reference/slides.md) has been extended with the following new classes and methods that support slide linking and text box insertion:
	- [`SlideLinkingMode`](./reference/slides/slide-linking-mode.md)
		- \[`Layout.insertTextBox(text)` }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext)
		- [`Layout.insertTextBox(text, left, top, width, height)`](./reference/slides/layout.md#inserttextboxtext-left-top-width-height)
		- [`Master.insertTextBox(text)`](./reference/slides/master.md#inserttextboxtext)
		- [`Master.insertTextBox(text, left, top, width, height)`](./reference/slides/master.md#inserttextboxtext-left-top-width-height)
		- [`Page.insertTextBox(text)`](./reference/slides/page.md#inserttextboxtext)
		- [`Page.insertTextBox(text, left, top, width, height)`](./reference/slides/page.md#inserttextboxtext-left-top-width-height)
		- [`Presentation.appendSlide(slide, linkingMode)`](./reference/slides/presentation.md#appendslideslide-linkingmode)
		- [`Presentation.insertSlide(insertionIndex, slide, linkingMode)`](./reference/slides/presentation.md#insertslideinsertionindex-slide-linkingmode)
		- [`Slide.getSlideLinkingMode()`](./reference/slides/slide.md#getslidelinkingmode)
		- [`Slide.getSourcePresentationId()`](./reference/slides/slide.md#getsourcepresentationid)
		- [`Slide.getSourceSlideObjectId()`](./reference/slides/slide.md#getsourceslideobjectid)
		- [`Slide.insertTextBox(text)`](./reference/slides/slide.md#inserttextboxtext)
		- [`Slide.insertTextBox(text, left, top, width, height)`](./reference/slides/slide.md#inserttextboxtext-left-top-width-height)
		- [`Slide.refreshSlide()`](./reference/slides/slide.md#refreshslide)
		- [`Slide.unlink()`](./reference/slides/slide.md#unlink)
- The [Data Studio service](./reference/data-studio.md) has been extended with the following new classes and methods that error displays:
	- [`DebugError`](./reference/data-studio/debug-error.md)
		- [`UserError`](./reference/data-studio/user-error.md)
		- [`CommunityConnector.newDebugError()`](./reference/data-studio/community-connector.md#newdebugerror)
		- [`CommunityConnector.newUserError()`](./reference/data-studio/community-connector.md#newusererror)

## December 13, 2018

Deprecated

The [Fusion Tables advanced service](./index.md) has been deprecated and will shutdown fully on December 3rd, 2019.

Feature

The [Slides service](./reference/slides.md) has been extended with the following new classes and methods that support connector lines:

- [`ConnnectionSite`](./reference/slides/connection-site.md)
- [`Group.getConnectionSites()`](./reference/slides/group.md#getconnectionsites)
- [`Image.getConnectionSites()`](./reference/slides/image.md#getconnectionsites)
- [`Line.getConnectionSites()`](./reference/slides/line.md#getconnectionsites)
- [`Line.getEndConnection()`](./reference/slides/line.md#getendconnection)
- [`Line.getLineCategory()`](./reference/slides/line.md#getlinecategory)
- [`Line.getStartConnection()`](./reference/slides/line.md#getstartconnection)
- [`Line.isConnector()`](./reference/slides/line.md#isconnector)
- [`Line.setEndConnection(connectionSite)`](./reference/slides/line.md#setendconnectionconnectionsite)
- [`Line.setLineCategory(lineCategory)`](./reference/slides/line.md#setlinecategorylinecategory)
- [`Line.setStartConnection(connectionSite)`](./reference/slides/line.md#setstartconnectionconnectionsite)
- [`LineCategory.UNSUPPORTED`](./reference/slides/line-category.md)
- [`PageElement.getConnectionSites()`](./reference/slides/page-element.md#getconnectionsites)
- [`Shape.getConnectionSites()`](./reference/slides/shape.md#getconnectionsites)
- [`SheetsChart.getConnectionSites()`](./reference/slides/sheets-chart.md#getconnectionsites)
- [`Table.getConnectionSites()`](./reference/slides/table.md#getconnectionsites)
- [`Video.getConnectionSites()`](./reference/slides/video.md#getconnectionsites)
- [`WordArt.getConnectionSites()`](./reference/slides/word-art.md#getconnectionsites)

## November 14, 2018

Feature

- The [Card service](./reference/card-service.md) has been extended with the following new classes and methods that let you to customize the background of text button widgets:
	- [`TextButtonStyle`](./reference/card-service/text-button-style.md)
		- [`TextButton.setBackgroundColor(backgroundColor)`](./reference/card-service/text-button.md#setbackgroundcolorbackgroundcolor)
		- [`TextButton.setDisabled(disabled)`](./reference/card-service/text-button.md#setdisableddisabled)
		- [`TextButton.setTextButtonStyle(textButtonStyle)`](./reference/card-service/text-button.md#settextbuttonstyletextbuttonstyle)
- The [Slides service](./reference/slides.md) has been extended with the following new methods that let you control the Z-positioning of page elements in Slides. Other new methods let you add alt titles and alt descriptions to page elements. The following methods have been added to the [`Group`](./reference/slides/group.md), [`Image`](./reference/slides/image.md), [`Line`](./reference/slides/line.md), [`PageElement`](./reference/slides/page-element.md), [`Shape`](./reference/slides/shape.md), [`SheetsChart`](./reference/slides/sheets-chart.md), [`Table`](./reference/slides/table.md), [`Video`](./reference/slides/video.md), and [`WordArt`](./reference/slides/word-art.md) classes:
	- `bringForward()`
		- `bringToFront()`
		- `sendBackward()`
		- `sendToBack()`
		- `setDescription(description)`
		- `setTitle(title)`
- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets:
	- [`DeveloperMetadata`](./reference/spreadsheet/developer-metadata.md)
		- [`DeveloperMetadataFinder`](./reference/spreadsheet/developer-metadata-finder.md)
		- [`DeveloperMetadataLocation`](./reference/spreadsheet/developer-metadata-location.md)
		- [`DeveloperMetadataLocationType`](./reference/spreadsheet/developer-metadata-location-type.md)
		- [`DeveloperMetadataVisibility`](./reference/spreadsheet/developer-metadata-visibility.md)
		- [`Range.addDeveloperMetadata(key)`](./reference/spreadsheet/range.md#adddevelopermetadatakey)
		- [`Range.addDeveloperMetadata(key, visibility)`](./reference/spreadsheet/range.md#adddevelopermetadatakey-visibility)
		- [`Range.addDeveloperMetadata(key, value)`](./reference/spreadsheet/range.md#adddevelopermetadatakey-value)
		- [`Range.addDeveloperMetadata(key, value, visibility)`](./reference/spreadsheet/range.md#adddevelopermetadatakey-value-visibility)
		- [`Range.createDeveloperMetadataFinder()`](./reference/spreadsheet/range.md#createdevelopermetadatafinder)
		- [`Range.getDeveloperMetadata()`](./reference/spreadsheet/range.md#getdevelopermetadata)
		- [`Sheet.addDeveloperMetadata(key)`](./reference/spreadsheet/sheet.md#adddevelopermetadatakey)
		- [`Sheet.addDeveloperMetadata(key, visibility)`](./reference/spreadsheet/sheet.md#adddevelopermetadatakey-visibility)
		- [`Sheet.addDeveloperMetadata(key, value)`](./reference/spreadsheet/sheet.md#adddevelopermetadatakey-value)
		- [`Sheet.addDeveloperMetadata(key, value, visibility)`](./reference/spreadsheet/sheet.md#adddevelopermetadatakey-value-visibility)
		- [`Sheet.createDeveloperMetadataFinder()`](./reference/spreadsheet/sheet.md#createdevelopermetadatafinder)
		- [`Sheet.getDeveloperMetadata()`](./reference/spreadsheet/sheet.md#getdevelopermetadata)
		- [`Spreadsheet.addDeveloperMetadata(key)`](./reference/spreadsheet/spreadsheet.md#adddevelopermetadatakey)
		- [`Spreadsheet.addDeveloperMetadata(key, visibility)`](./reference/spreadsheet/spreadsheet.md#adddevelopermetadatakey-visibility)
		- [`Spreadsheet.addDeveloperMetadata(key, value)`](./reference/spreadsheet/spreadsheet.md#adddevelopermetadatakey-value)
		- [`Spreadsheet.addDeveloperMetadata(key, value, visibility)`](./reference/spreadsheet/spreadsheet.md#adddevelopermetadatakey-value-visibility)
		- [`Spreadsheet.createDeveloperMetadataFinder()`](./reference/spreadsheet/spreadsheet.md#createdevelopermetadatafinder)
		- [`Spreadsheet.getDeveloperMetadata()`](./reference/spreadsheet/spreadsheet.md#getdevelopermetadata)

## October 30, 2018

Feature

- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new classes and methods:
	- [`OverGridImage`](./reference/spreadsheet/over-grid-image.md)
		- [`Sheet.getImages()`](./reference/spreadsheet/sheet.md#getimages)
		- [`Sheet.isColumnHiddenByUser(columnPosition)`](./reference/spreadsheet/sheet.md#iscolumnhiddenbyusercolumnposition)
		- [`Sheet.isRowHiddenByFilter(rowPosition)`](./reference/spreadsheet/sheet.md#isrowhiddenbyfilterrowposition)
		- [`Sheet.isRowHiddenByUser(rowPosition)`](./reference/spreadsheet/sheet.md#isrowhiddenbyuserrowposition)
		- [`Spreadsheet.getImages()`](./reference/spreadsheet/spreadsheet.md#getimages)
		- [`Spreadsheet.isColumnHiddenByUser(columnPosition)`](./reference/spreadsheet/spreadsheet.md#iscolumnhiddenbyusercolumnposition)
		- [`Spreadsheet.isRowHiddenByFilter(rowPosition)`](./reference/spreadsheet/spreadsheet.md#isrowhiddenbyfilterrowposition)
		- [`Spreadsheet.isRowHiddenByUser(rowPosition)`](./reference/spreadsheet/spreadsheet.md#isrowhiddenbyuserrowposition)
- The following methods have been added to existing services:
	- console service
		- [`console.error()`](./reference/base/console.md#error())
				- [`console.info()`](./reference/base/console.md#info)
				- [`console.warn()`](./reference/base/console.md#warn)
		- DataStudio service
		- [`Field.isHidden()`](./reference/data-studio/field.md#isHidden())
				- [`Field.setIsHidden()`](./reference/data-studio/field.md#setishiddenishidden)
		- Gmail service
		- [`GmailAttachment.getHash()`](./reference/gmail/gmail-attachment.md#getHash())
				- [`GmailMessage.getAttachments(options)`](./reference/gmail/gmail-message.md#getAttachments(Object))

Change

The following methods in the [Spreadsheet service](./reference/spreadsheet.md) now return an [`OverGridImage` object](./reference/spreadsheet/over-grid-image.md) instead of void:

- [`Sheet.insertImage(blobSource, column, row)`](./reference/spreadsheet/sheet.md#insertimageblobsource-column-row)
- [`Sheet.insertImage(blobSource, column, row, offsetX, offsetY)`](./reference/spreadsheet/sheet.md#insertimageblobsource-column-row-offsetx-offsety)
- [`Sheet.insertImage(url, column, row)`](./reference/spreadsheet/sheet.md#insertimageurl-column-row)
- [`Sheet.insertImage(url, column, row, offsetX, offsetY)`](./reference/spreadsheet/sheet.md#insertimageurl-column-row-offsetx-offsety)

## October 18, 2018

## September 27, 2018

Announcement

The [Data Studio service](./reference/data-studio.md) is now available. You can use this service when building a [Data Studio Community Connector](https://developers.google.com/datastudio/connector).

## August 20, 2018

## June 19, 2018

Deprecated

The quota on total data received by `UrlFetch` per day per user has been removed.

Feature

- The [Forms service](./reference/forms.md) now has the following method:
	- [Form.deleteResponse(responseId)\`](./reference/forms/form.md#deleteresponseresponseid)
- The [Utilities service](./reference/utilities.md) now has the following methods:
	- [`Utilities.computeDigest(algorithm, value)`](./reference/utilities/utilities.md#computedigestalgorithm-value), where value is a `Byte` array
		- [`Utilities.computeHmacSha256Signature(value, key)`](./reference/utilities/utilities.md#computehmacsha256signaturevalue-key), where value and key are `Byte` arrays
		- [`Utilities.computeHmacSignature(algorithm, value, key)`](./reference/utilities/utilities.md#computehmacsignaturealgorithm-value-key), where value and key are `Byte` arrays

Change

The [quota limits](./guides/services/quotas.md#current_limitations) for [`UrlFetch`](./reference/url-fetch/url-fetch-app.md) `GET` response size and `POST` size have been increased to 50MB / call.

## April 23, 2018

Feature

- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the new [`Group`](./reference/spreadsheet/group.md) class and the [`GroupControlTogglePosition`](./reference/spreadsheet/group-control-toggle-position.md) enum. Groups are an association between an interval of contiguous rows or columns that can be expanded or collapsed as a unit.
- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new methods to support Groups:
	- [`Range.collapseGroups()`](./reference/spreadsheet/range.md#collapsegroups)
		- [`Range.expandGroups()`](./reference/spreadsheet/range.md#expandgroups)
		- [`Range.shiftColumnGroupDepth(delta)`](./reference/spreadsheet/range.md#shiftcolumngroupdepthdelta)
		- [`Range.shiftRowGroupDepth(delta)`](./reference/spreadsheet/range.md#shiftrowgroupdepthdelta)
		- [`Sheet.collapseAllColumnGroups()`](./reference/spreadsheet/sheet.md#collapseallcolumngroups)
		- [`Sheet.collapseAllRowGroups()`](./reference/spreadsheet/sheet.md#collapseallrowgroups)
		- [`Sheet.expandAllColumnGroups()`](./reference/spreadsheet/sheet.md#expandallcolumngroups)
		- [`Sheet.expandAllRowGroups()`](./reference/spreadsheet/sheet.md#expandallrowgroups)
		- [`Sheet.expandColumnGroupsUpToDepth(groupDepth)`](./reference/spreadsheet/sheet.md#expandcolumngroupsuptodepthgroupdepth)
		- [`Sheet.expandRowGroupsUpToDepth(groupDepth)`](./reference/spreadsheet/sheet.md#expandrowgroupsuptodepthgroupdepth)
		- [`Sheet.getColumnGroup(columnIndex, groupDepth)`](./reference/spreadsheet/sheet.md#getcolumngroupcolumnindex-groupdepth)
		- [`Sheet.getColumnGroupControlPosition()`](./reference/spreadsheet/sheet.md#getcolumngroupcontrolposition)
		- [`Sheet.getColumnGroupDepth(columnIndex)`](./reference/spreadsheet/sheet.md#getcolumngroupdepthcolumnindex)
		- [`Sheet.getRowGroup(rowIndex, groupDepth)`](./reference/spreadsheet/sheet.md#getrowgrouprowindex-groupdepth)
		- [`Sheet.getRowGroupControlPosition()`](./reference/spreadsheet/sheet.md#getrowgroupcontrolposition)
		- [`Sheet.getRowGroupDepth(rowIndex)`](./reference/spreadsheet/sheet.md#getrowgroupdepthrowindex)
		- [`Sheet.setColumnGroupControlPosition(position)`](./reference/spreadsheet/sheet.md#setcolumngroupcontrolpositionposition)
		- [`Sheet.setRowGroupControlPosition(position)`](./reference/spreadsheet/sheet.md#setrowgroupcontrolpositionposition)

## April 11, 2018

Announcement

[Macros for Google Sheets](./guides/sheets/macros.md) are now becoming available for users, and will finish rolling out over then next few weeks. This feature lets you record macros in the Google Sheets UI and use Apps Script to create or edit them.

Feature

The [Sheets service](./reference/spreadsheet.md) has been extended with a large number of new classes and methods. The addition of these methods make it possible to reproduce in code nearly any action a Sheets user can take at a keyboard. The new classes and methods include:

- `BandingTheme`
- `Banding`
- `BooleanCondition`
- `BooleanCriteria`
- `ConditionalFormatRuleBuilder`
- `ConditionalFormatRule`
- `Dimension`
- `Direction`
- `FilterCriteriaBuilder`
- `FilterCriteria`
- `Filter`
- `GradientCondition`
- `InterpolationType`
- `PivotFilter`
- `PivotGroup`
- `PivotTableSummarizeFunction`
- `PivotTable`
- `PivotTableDisplayType`
- `PivotValue`
- `RangeList`
- `RelativeDate`
- `Selection`
- `TextDirection`
- `TextRotation`
- `TextToColumnsDelimiter`
- `WrapStrategy`
- `EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy)` (also in each of the type-specific chart builder classes)
- `EmbeddedChartBuilder.setNumHeaders(headers)` (also in each of the type-specific chart builder classes)
- `EmbeddedChartBuilder.setMergeStrategy(mergeStrategy)` (also in each of the type-specific chart builder classes)
- `EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose)` (also in each of the type-specific chart builder classes)
- `Range.activateAsCurrentCell()`
- `Range.applyColumnBanding()`
- `Range.applyColumnBanding(bandingTheme)`
- `Range.applyColumnBanding(bandingTheme, showHeader, showFooter)`
- `Range.applyRowBanding()`
- `Range.applyRowBanding(bandingTheme)`
- `Range.applyRowBanding(bandingTheme, showHeader, showFooter)`
- `Range.createFilter()`
- `Range.createPivotTable(sourceData)`
- `Range.deleteCells(shiftDimension)`
- `Range.getBandings()`
- `Range.getNextDataCell(direction)`
- `Range.getTextDirection()`
- `Range.getTextDirections()`
- `Range.getTextRotation()`
- `Range.getTextRotations()`
- `Range.getWrapStrategies()`
- `Range.getWrapStrategy()`
- `Range.insertCells(shiftDimension)`
- `Range.setShowHyperlink(showHyperlink)`
- `Range.setTextDirection(direction)`
- `Range.setTextDirections(directions)`
- `Range.setTextRotation(degrees)`
- `Range.setTextRotation(rotation)`
- `Range.setTextRotations(rotations)`
- `Range.setVerticalText(isVertical)`
- `Range.setWrapStrategies(strategies)`
- `Range.setWrapStrategy(strategy)`
- `Range.setTextToColumns()`
- `Range.setTextToColumns(delimiter)`
- `Range.setTextToColumns(delimiter)`
- `Sheet.autoResizeColumns(startColumns, numColumns)`
- `Sheet.autoResizeRows(startRows, numRows)`
- `Sheet.clearConditionalFormatRules()`
- `Sheet.getActiveRangeList()`
- `Sheet.getBandings()`
- `Sheet.getConditionalFormatRules()`
- `Sheet.getCurrentCell()`
- `Sheet.getFilter()`
- `Sheet.getPivotTables()`
- `Sheet.getRangeList(a1Notations)`
- `Sheet.getSelection()`
- `Sheet.hasHiddenGridlines()`
- `Sheet.isRightToLeft()`
- `Sheet.setActiveRangeList(rangeList)`
- `Sheet.setColumnWidths(startColumn numColumns, width)`
- `Sheet.setConditionalFormatRules(rules)`
- `Sheet.setCurrentCell(cell)`
- `Sheet.setHiddenGridlines(hideGridlines)`
- `Sheet.setRightToLeft(rightToLeft)`
- `Sheet.setRowHeights(startRow, numRows, height)`
- `Spreadsheet.getActiveRangeList()`
- `Spreadsheet.getBandings()`
- `Spreadsheet.getCurrentCell()`
- `Spreadsheet.getRangeList(a1Notations)`
- `Spreadsheet.getSelection()`
- `Spreadsheet.setActiveRangeList(rangeList)`
- `Spreadsheet.setCurrentCell(cell)`

Feature

The [Charts service](./reference/charts.md) has been extended to support [`EmbeddedCharts`](./reference/spreadsheet/embedded-chart.md) in Google Sheets with the enums [`ChartHiddenDimensionStrategy`](./reference/charts/chart-hidden-dimension-strategy.md) and [`ChartMergeStrategy`](./reference/charts/chart-merge-strategy.md). In addition, the following [`ChartTypes`](./reference/charts/chart-type.md) have been added:

- `TIMELINE`
- `BUBBLE`
- `CANDLESTICK`
- `GAUGE`
- `GEO`
- `RADAR`
- `ORG`
- `SPARKLINE`
- `STEPPED_AREA`
- `TREEMAP`
- `WATERFALL`

## March 26, 2018

Feature

The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new methods:

- [`SpreadsheetApp.setActiveSheet(sheet, restoreSelection)`](./reference/spreadsheet/spreadsheet-app.md#setactivesheetsheet-restoreselection)
- [`Spreadsheet.setActiveSheet(sheet, restoreSelection)`](./reference/spreadsheet/spreadsheet.md#setactivesheetsheet-restoreselection)

Deprecated

- The deprecated `enable(restriction)` method of the [`ScriptApp.Service` class](./reference/script/service.md) has been sunset.
- The deprecated `Service.Restriction` enum used with the [`ScriptApp.Service` class](./reference/script/service.md) has been sunset.

## February 26, 2018

Feature

[Calendar event triggers](./guides/triggers/events.md#google_calendar_events) are now available. You can use these triggers in conjunction with the [Calendar advanced service](./advanced/calendar.md) to discover recently changed calendar events via regular sync operations.

## February 13, 2018

Feature

- The [Slides service](./reference/slides.md) has been extended with the following new methods:
	- `Layout.insertGroup(group)`
		- `Layout.insertImage(image)`
		- `Layout.insertLine(line)`
		- `Layout.insertPageElement(pageElement)`
		- `Layout.insertShape(shape)`
		- `Layout.insertSheetsChart(sheetsChart)`
		- `Layout.insertTable(table)`
		- `Layout.insertVideo(video)`
		- `Layout.insertWordArt(wordArt)`
		- `Master.insertGroup(group)`
		- `Master.insertImage(image)`
		- `Master.insertLine(line)`
		- `Master.insertPageElement(pageElement)`
		- `Master.insertShape(shape)`
		- `Master.insertSheetsChart(sheetsChart)`
		- `Master.insertTable(table)`
		- `Master.insertVideo(video)`
		- `Master.insertWordArt(wordArt)`
		- `Page.insertGroup(group)`
		- `Page.insertImage(image)`
		- `Page.insertLine(line)`
		- `Page.insertPageElement(pageElement)`
		- `Page.insertShape(shape)`
		- `Page.insertSheetsChart(sheetsChart)`
		- `Page.insertTable(table)`
		- `Page.insertVideo(video)`
		- `Page.insertWordArt(wordArt)`
		- `Presentation.appendSlide(slide)`
		- `Presentation.insertSlide(insertionIndex, slide)`
		- `Slide.insertGroup(group)`
		- `Slide.insertImage(image)`
		- `Slide.insertLine(line)`
		- `Slide.insertPageElement(pageElement)`
		- `Slide.insertShape(shape)`
		- `Slide.insertSheetsChart(sheetsChart)`
		- `Slide.insertTable(table)`
		- `Slide.insertVideo(video)`
		- `Slide.insertWordArt(wordArt)`
		- `TextRange.appendRange(textRange)`
		- `TextRange.appendRange(textRange, matchSourceFormatting)`
		- `TextRange.insertRange(startOffset, textRange)`
		- `TextRange.insertRange(startOffset, textRange, matchSourceFormatting)`
- The [Spreadsheet](./reference/spreadsheet.md) service has been extended with the following new enum class and method:
	- [`CopyPasteType`](./reference/spreadsheet/copy-paste-type.md), an enum class describing paste types.
		- [`Range.copyTo(destination, copyPasteType, transposed)`](./reference/spreadsheet/range.md#copyTo(Range,CopyPasteType,Boolean))

## January 19, 2018

## January 11, 2018

Announcement

- The [Apps Script dashboard](./guides/dashboard.md) is now available. You can use it to see, search, and monitor all your script projects. The [Apps Script API](./api/concepts.md) is now available. This API includes and extends the original Apps Script API. You can use the Apps Script API in an application to do any of the following:
	- [Create, read, and update Apps Script projects](./api/how-tos/manage-projects.md).
		- [Create and manage project versions](./api/how-tos/manage-versions.md).
		- [Create and manage project deployments](./api/how-tos/manage-deployments.md).
		- [Monitor script use and metrics](./api/how-tos/view-processes.md).
		- [Run script functions remotely](./api/how-tos/execute.md).
- The open-source [`clasp` tool](./guides/clasp.md) is now available. It lets you manage and develop Apps Script projects locally from the command line instead of the Apps Script editor.

## October 24, 2017

Feature

- The [Gmail add-ons](../workspace/add-ons/overview.md) framework is now available to all developers.
- A new [Card service](./reference/card-service.md) supports Gmail add-ons by defining several [UI widget](../workspace/add-ons/concepts/widgets.md) elements that you can use to create a Gmail add-on interface without HTML or CSS. These widgets function on both desktop and mobile. You can only use the Card service in a Gmail add-on project.
- You can now view and explicitly edit Apps Script project [manifests](./concepts/manifests.md). These files give you more direct control of project properties.
- You can now directly control the [OAuth scopes](./concepts/scopes.md) that your project requests during authorization. Use this control to prevent your script project from asking for more access than it needs.
- You can now [deploy](./concepts/deployments.md) a script project directly from the project manifest.
- We've updated the **Publish** script editor menu item to more accurately represent the various kinds of deployments a project can have, such as add-on, web app, or API executable deployments.

## October 10, 2017

Feature

- The [Calendar service](./reference/calendar.md) has been extended with the following new methods:
	- [`CalendarApp.createAllDayEvent(title, startDate, endDate)`](./reference/calendar/calendar-app.md#createAllDayEvent(String,Date,Date))
		- [`CalendarApp.createAllDayEvent(title, startDate, endDate, options)`](./reference/calendar/calendar-app.md#createAllDayEvent(String,Date,Date,Object))
		- [`CalendarApp.getEventById(iCalId)`](./reference/calendar/calendar-app.md#getEventById(String))
		- [`Calendar.createAllDayEvent(title, startDate, endDate)`](./reference/calendar/calendar.md#createAllDayEvent(String,Date,Date))
		- [`Calendar.createAllDayEvent(title, startDate, endDate, options)`](./reference/calendar/calendar.md#createAllDayEvent(String,Date,Date,Object))
		- [`Calendar.getEventById(iCalId)`](./reference/calendar/calendar.md#getEventById(String))
		- [`CalendarEvent.setAllDayDates(startDate, endDate)`](./reference/calendar/calendar-event.md#setAllDayDates(Date,Date))
- The [Groups service](./reference/groups.md) has been extended with the following new methods:
	- [`Group.getGroups()`](./reference/groups/group.md#getGroups())
		- [`Group.hasGroup(group)`](./reference/groups/group.md#hasGroup(Group))
		- [`Group.hasGroup(email)`](./reference/groups/group.md#hasGroup(String))
- The [Spreadsheet service](./reference/spreadsheet.md) has been extended with the following new methods and classes:
	- [`AutoFillSeries enumeration`](./reference/spreadsheet/auto-fill-series.md)
		- [`Range.autoFill(destination, series)`](./reference/spreadsheet/range.md#autoFill(Range,AutoFillSeries))
		- [`Range.autoFillToNeighbor(series)`](./reference/spreadsheet/range.md#autoFillToNeighbor(AutoFillSeries))
		- [`Sheet.moveColumns(columnSpec, destinationIndex)`](./reference/spreadsheet/sheet.md#moveColumns(Range,Integer))
		- [`Sheet.moveRows(rowSpec, destinationIndex)`](./reference/spreadsheet/sheet.md#moveRows(Range,Integer))

## October 06, 2017

Change

Add-ons now require [OAuth Client Verification](./guides/client-verification.md) prior to beginning the publication process. Verification no longer is conducted during the add-on review.

## September 26, 2017

Feature

Added Apps Script support for the [Google Slides service](./guides/slides.md). You can now use Apps Script to create and edit presentations and their contents; you can also build [add-ons for Google Slides](../workspace/add-ons/overview.md#slides-service).

## September 15, 2017

Feature

- Added [`GmailDraft`](./reference/gmail/gmail-draft.md) to the Gmail service. You can now create, edit, delete, and send [new draft messages](https://developers.google.com/gmail/gmail-app#createdraftrecipient-subject-body-options) or [draft replies](./reference/gmail/gmail-message.md#createdraftreplybody-options) to existing messages and threads. Drafts can reply to the original sender or "reply all".
- You can now determine if a message or thread is in your priority inbox using [`GmailMessage.isInPriorityInbox()`](./reference/gmail/gmail-message.md#isinpriorityinbox) or [`GmailThread.isInPriorityInbox()`](./reference/gmail/gmail-thread.md#isinpriorityinbox).

## July 28, 2017

Feature

- Added a [`Spreadsheet.getFormUrl()`](./reference/spreadsheet/spreadsheet.md#getformurl) method that returns the URLs of Forms send responses to this Sheet or Spreadsheet.
- Adds a [Checkbox Grid item](./reference/forms/checkbox-grid-item.md) to the Forms service.
- Enabled the collection of [exception and error reports](./guides/logging.md#exception_logging) using [Stackdriver Error Reporting](./guides/logging.md#stackdriver_error_reporting).

## July 18, 2017

Change

To protect users from abuse, [Google OAuth clients that request certain sensitive OAuth scopes are subject to review by Google](./guides/client-verification.md). Such apps may present users with a warning screen saying the app is unverified by Google. You can remove this screen from your app's authorization flow by [submitting a review request](./guides/client-verification.md#requesting_verification).

## June 23, 2017

Announcement

[Stackdriver Logging](./guides/logging.md#stackdriver_logging) has been moved out of [Early Access](./overview.md). All scripts now have access to Stackdriver logging.

## June 20, 2017

Feature

Added the method [`Range.randomize()`](./reference/spreadsheet/range.md#randomize) that randomizes the order of rows in a spreadsheet Range.

## April 26, 2017

Feature

- [Quizzes in Google Forms](https://gsuite-developers.googleblog.com/2017/04/create-quizzes-in-google-forms-with.html) is now accessible from the [Apps Script Forms service](./reference/forms.md).
- Added support for [Combo and Histogram charts](./reference/charts/chart-type.md). Like other charts, these can be embedded in a Google Sheet.
- Added ability to [`getColor()`](./reference/calendar/calendar-event.md#getcolor) and [`setColor()`](./reference/calendar/calendar-event.md#setcolorcolor) for Calendar Events. Events have their own color set: [`EventColor`](./reference/calendar/event-color.md).

## March 09, 2017

Feature

- Introduced project collaboration using [Shared drives](./guides/collaborating.md#collaborating_with_shared_drives). Files and scripts in a shared drive are owned by the group instead of individuals, allowing collaborators to develop and maintain scripts more readily.
- Script editors (in addition to script owners) can now [publish add-ons](../workspace/add-ons/how-tos/publish-add-on-overview.md) and [deploy scripts as web apps](./guides/web.md#deploying_a_script_as_a_web_app) or executables for the [Execution API](./api/how-tos/execute.md).
- For all [container-bound scripts](./guides/bound.md#access_to_bound_scripts), the container owner takes ownership of a new script project regardless of who created it.

## March 07, 2017

Announcement

- Enabled the [Slides Advanced Service](./advanced/slides.md).
- Enabled the [Sheets Advanced Service](./advanced/sheets.md).

## December 01, 2016

Announcement

Introduced the [Early Access program](./overview.md) for new G Suite Business features. These features include [App Maker](https://developers.google.com/apps-script/guides/app-maker) and [Stackdriver Logging](./guides/logging.md#stackdriver_logging).

## November 23, 2016

Feature

Added forms validation classes for [check boxes](./reference/forms/checkbox-validation.md), [generic data](./reference/forms/data-validation.md), [grid items](./reference/forms/grid-validation.md), [paragraph text items](./reference/forms/paragraph-text-validation.md), and [text items](./reference/forms/text-validation.md).

## October 19, 2016

Feature

Added X-Frame-Option header support to [`HtmlService`](./reference/html.md), allowing iframes to render Apps Script HTML and web apps.

## July 28, 2016

Feature

Added support for [Android add-ons](https://developers.google.com/gsuite/add-ons/mobile). Now you can make Google Docs and Sheets add-ons that work on Android.

## July 12, 2016

Deprecated

The use of project keys to identify scripts is now deprecated. The preferred unique identifier for a script is the [Script ID](./reference/script/script-app.md#getScriptId()). There are no plans to turn off or disable the use of project keys; code that uses project keys will continue to work for the foreseeable future.

## July 06, 2016

Deprecated

`NATIVE` [sandbox mode](./reference/html/sandbox-mode.md) is now shut down. All scripts default to `IFRAME` mode, regardless of which mode, if any, is specified. Scripts that relied on `NATIVE` mode features [may need to be migrated](./migration/iframe.md).

## April 11, 2016

Feature

Support for `PATCH` requests has been added to [`UrlFetchApp`](./reference/url-fetch/url-fetch-app.md#fetchurl-params).

## March 25, 2016

Deprecated

Deprecated the [`add(widget)` method](./reference.md#addwidget) in the [`DashboardPanel`](./reference.md) class because it takes a `UiApp.Widget` argument, and UiApp was deprecated in 2014.

## February 29, 2016

Feature

- The Spreadsheet API adds new methods for [`getTabColor()`](./reference/spreadsheet/sheet.md#gettabcolor) and [`setTabColor(color)`](./reference/spreadsheet/sheet.md#settabcolor).
- The Spreadsheet API adds a new [`NamedRange`](./reference/spreadsheet/named-range.md) type and the following related methods:
	- `NamedRange.getName()` gets the name of the named range
		- `NamedRange.setName(name)` sets the name of the named range
		- `NamedRange.getRange()` gets the underlying range associated with the named range
		- `NamedRange.setRange(range)` sets the underlying range associated with the named range
		- `NamedRange.remove()` deletes the named range
		- `Spreadsheet.getNamedRanges()` gets an array of all the named ranges in the spreadsheet
		- `Sheet.getNamedRanges()` gets an array of all the named ranges in the sheet
		- `Protection.setNamedRange(range)` associates an existing protected range with an existing named range
- The Utilities API includes a new [`getUuid()` method](./reference/utilities/utilities.md#getUuid()) that generates a unique identifier.

## December 10, 2015

Deprecated

In the [HTML service](./reference/html.md), `EMULATED` [sandbox mode](./reference/html/sandbox-mode.md) was [sunset](./guides/support/sunset.md). Any scripts that explicitly request `EMULATED` mode now default to `IFRAME` mode.

## November 12, 2015

Change

In the [HTML service](./reference/html.md), all new scripts default to `IFRAME` sandbox mode unless `NATIVE` mode is explicitly specified.

## August 10, 2015

Deprecated

Deprecated the method [`Service.enable()`](./reference/script/service.md#enable(Service.Restriction)) in the ScriptApp global object. This method is no longer useful because Apps Script's authorization model has changed since the time the method was introduced.

## August 04, 2015

Feature

Added the following methods to the Spreadsheet service to let scripts control "warning-based" protection for spreadsheet ranges (which means that every user can edit data in the area, except editing prompts the user to confirm the edit):

- [`Protection.isWarningOnly()`](./reference/spreadsheet/protection.md#iswarningonly)
- [`Protection.setWarningOnly(warningOnly)`](./reference/spreadsheet/protection.md#setwarningonlywarningonly)

## June 30, 2015

Feature

Added two variations of the [method `computeRsaSha256Signature`](./reference/utilities/utilities.md#computersasha256signaturevalue-key) to the `Utilities` global object to let scripts sign a string using the RSA SHA-256 algorithm.

## May 27, 2015

Change

Added the [method `getUserAgent()`](./reference/html/html-service.md#getuseragent) to the `HtmlService` global object to let scripts get the user-agent string for the current browser.

## May 20, 2015

Deprecated

Deprecated the following OAuth class and methods in favor of [OAuth libraries](https://gsuite-developers.googleblog.com/2015/03/changes-to-oauth-in-apps-script.html): + `OAuthConfig` + [`UrlFetchApp.addOAuthService(serviceName)`](./reference/url-fetch/url-fetch-app.md#addOAuthService(String)) + [`UrlFetchApp.removeOAuthService(serviceName)`](./reference/url-fetch/url-fetch-app.md#removeOAuthService(String))

Feature

- Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys:
	- [`InstallationSource`](./reference/script/installation-source.md)
		- [`ScriptApp.getInstallationSource()`](./reference/script/script-app.md#getInstallationSource())
		- [`ScriptApp.getProjectKey()`](./reference/script/script-app.md#getProjectKey())
- Added several new web-safe base-64 encoding and decoding methods:
	- [`Utilities.base64DecodeWebSafe(String)`](./reference/utilities/utilities.md#base64DecodeWebSafe(String))
		- [`Utilities.base64DecodeWebSafe(String, Charset)`](./reference/utilities/utilities.md#base64DecodeWebSafe(String,Charset))
		- [`Utilities.base64EncodeWebSafe(Byte)`](./reference/utilities/utilities.md#base64EncodeWebSafe(Byte))
		- [`Utilities.base64EncodeWebSafe(String)`](./reference/utilities/utilities.md#base64EncodeWebSafe(String))
		- [`Utilities.base64EncodeWebSafe(String, Charset)`](./reference/utilities/utilities.md#base64EncodeWebSafe(String,Charset))

## April 23, 2015

Announcement

- Add-ons are now out of developer preview. This means anyone can now [publish](../workspace/add-ons/how-tos/publish-add-on-overview.md) an add-on. New add-ons will still be reviewed prior to publishing, but the publishing process has been streamlined.
- Add-ons can now be developed and published from standalone scripts (as opposed to scripts bound to a Sheet, Doc, or Form). The add-on must still operate on a Sheet, Doc, or Form, but the script does not need to be bound to a single master file. Developing from a standalone script is preferred in that it makes collaboration and testing easier.
- Add-on scripts in development can be [tested](../workspace/add-ons/how-tos/testing-editor-addons.md) to ensure they behave as intended.

Deprecated

The [`DocsList` service](./guides/support/sunset.md), which was [deprecated in 2014](./guides/support/sunset.md), has been sunset and no longer functions. Users relying on `DocsList` should switch to [`DriveApp`](./reference/drive/drive-app.md).

## March 19, 2015

Feature

- Added the ability to [publish add-ons for domain-wide installation](../workspace/add-ons/how-tos/publish-add-on-overview.md). This lets an admin of a Google Apps domain install and authorize a Docs, Sheets, or Forms [add-on](../workspace/add-ons/overview.md) for all users in the domain if the add-on is published to the [Google Apps Marketplace](../workspace/marketplace.md). If the developer has already published a Google Apps Marketplace app that is closely related to their add-on, they can also choose to bundle the add-on with the Marketplace app so that admins install both the app and the add-on together.
- Added the ability to [change the Google Developers Console project](./guides/cloud-platform-projects.md#switching_to_a_different_standard_gcp_project) that a script uses for authorization. This feature is most commonly used to bundle an add-on with a Google Apps Marketplace app, as above.

## March 04, 2015

Deprecated

Deprecated the URL Fetch service's class `OAuthConfig`, which provided the ability to connect to OAuth 1.0 APIs. This has been replaced by the open source library [OAuth1 for Apps Script](https://github.com/googlesamples/apps-script-oauth1). See the [migration guide](https://developers.google.com/apps-script/migration/oauth-config) for more information.

## February 10, 2015

Deprecated

- Deprecated the following class and methods, which have been replaced by the more powerful Protection class above. Although this class and these methods are deprecated, they will remain available for compatibility with the older version of Sheets.
	- `PageProtection`
		- `Spreadsheet.getSheetProtection()`
		- `Spreadsheet.setSheetProtection(permissions)`
		- `Sheet.getSheetProtection()`
		- `Sheet.setSheetProtection(permissions)`
- Replaced the method [`SpreadsheetApp.open(file)`](./reference/spreadsheet/spreadsheet-app.md#open(File)), which takes a `File` object from the deprecated `DocsList` service as a parameter, with a version that takes a `File` object from the `Drive` service instead. The new method has the same name.
- Changed the Document service methods [`Text.getFontFamily()`](./reference/document/text.md#getFontFamily()) and [`Text.setFontFamily(fontFamilyName)`](./reference/document/text.md#setFontFamily(String)) to use string names for font families instead of the [`FontFamily` enum](./reference/document/font-family.md), and consequently deprecated `FontFamily`.

Feature

Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges:

- [`Protection`](./reference/spreadsheet/protection.md)
- [`ProtectionType`](./reference/spreadsheet/protection-type.md)
- [`Range.canEdit()`](./reference/spreadsheet/range.md#canEdit())
- [`Range.isEndColumnBounded()`](./reference/spreadsheet/range.md#isEndColumnBounded())
- [`Range.isEndRowBounded()`](./reference/spreadsheet/range.md#isEndRowBounded())
- [`Range.isStartColumnBounded()`](./reference/spreadsheet/range.md#isStartColumnBounded())
- [`Range.isStartRowBounded()`](./reference/spreadsheet/range.md#isStartRowBounded())
- [`Range.protect()`](./reference/spreadsheet/range.md#protect())
- [`Sheet.getProtections(type)`](./reference/spreadsheet/sheet.md#getProtections(ProtectionType))
- [`Sheet.protect()`](./reference/spreadsheet/sheet.md#protect())
- [`Spreadsheet.getProtections(type)`](./reference/spreadsheet/spreadsheet.md#getProtections(ProtectionType))

Fixed

[Issue 4617](https://code.google.com/p/google-apps-script-issues/issues/detail?id=4617): HTML service pages that use the new [`IFRAME` sandbox mode](./reference/html/sandbox-mode.md) now render correctly in Firefox.

Change

Changed several [`Spreadsheet` methods](./reference/spreadsheet/spreadsheet.md) that previously returned void so that they now return a `Spreadsheet` object that can be used to chain method calls.

## December 11, 2014

Deprecated

- [Deprecated](./guides/support/sunset.md) both the [UI service](https://developers.google.com/apps-script/guides/ui-service) and the [`DocsList` service](./guides/support/sunset.md). As announced in the [blog post](https://gsuite-developers.googleblog.com/2014/12/speeding-up-htmlservice.html), the `DocsList` service will be turned off on April 20, 2015, and the UI service will be turned off on June 30, 2015. To create user interfaces, use the [HTML service](./guides/html.md) instead. To replace the `DocsList` service, use the [`Drive` service](./reference/drive.md) instead.
- [Removed](./guides/support/sunset.md) the [Domain service](./migration/domain.md), as [announced earlier in the year](https://gsuite-developers.googleblog.com/2014/05/deprecating-scriptdb-and-domain-service.html).

Feature

Added a new [`IFRAME` sandbox mode](./reference/html/sandbox-mode.md) for HTML service that imposes many fewer restrictions than the other sandbox modes and runs much faster. However, `IFRAME` mode does not work at all in certain older browsers, including Internet Explorer 9.

## December 01, 2014

Feature

- Added five new `FormApp` methods:
	- [`Form.getShuffleQuestions()`](./reference/forms/form.md#getShuffleQuestions()): Determines whether the order of the questions on each page of the form is randomized.
		- [`Form.hasLimitOneResponsePerUser()`](./reference/forms/form.md#hasLimitOneResponsePerUser()): Determines whether the form allows only one response per respondent. If the value is true, the script cannot submit form responses at all.
		- [`Form.setLimitOneResponsePerUser(enabled)`](./reference/forms/form.md#setLimitOneResponsePerUser(Boolean)): Sets whether the form allows only one response per respondent. The default for new forms is false. If the value is set to true, the script cannot submit form responses at all.
		- [`Form.setShuffleQuestions(shuffle)`](./reference/forms/form.md#setShuffleQuestions(Boolean)): Sets whether the order of the questions on each page of the form is randomized.
		- [`Form.shortenFormUrl(url)`](./reference/forms/form.md#shortenFormUrl(String)): Converts a long URL for a form to a short URL.
- Added two new `SpreadsheetApp` methods:
	- [`Sheet.insertImage(blob, column, row)`](./reference/spreadsheet/sheet.md#insertImage(Blob,Integer,Integer)): Inserts a [`Blob`](./reference/base/blob.md) as an image in the sheet at a given row and column.
		- [`Sheet.insertImage(blob, column, row, offsetX, offsetY)`](./reference/spreadsheet/sheet.md#insertImage(Blob,Integer,Integer,Integer,Integer)): Inserts a [`Blob`](./reference/base/blob.md) as an image in the sheet at a given row and column, with a pixel offset.

## October 23, 2014

Announcement

[Add-ons](../workspace/add-ons/overview.md) are now [available in Google Forms](../workspace/add-ons/editors/forms/quickstart/forms-notifications.md). As with add-ons for Docs and Sheets, Forms add-ons are in developer preview, so you must [apply to publish them](../workspace/add-ons/how-tos/publish-add-on-overview.md).

Deprecated

Fixed

[Issue 3928](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3928): The `Document` method `setSelection`, the `Sheet` method `activate`, and the `Spreadsheet` methods `setActiveRange` and `setActiveSelection` now work correctly if they are called from an `onOpen` or `onEdit` trigger.

## October 14, 2014

Feature

[Add-ons](../workspace/add-ons/overview.md) for Google Sheets and Docs can now use [time-driven installable triggers](./guides/triggers/installable.md#time-driven_triggers).

## September 30, 2014

Feature

- Added the [`LinearOptimizationService`](./reference/optimization.md), which allows scripts to model and solve linear and mixed-integer linear programs.
- [Add-ons](../workspace/add-ons/overview.md) for Google Sheets and Docs can now use most [installable triggers](./guides/triggers/installable.md#installable_triggers_in_add-ons), although they still cannot use time-driven triggers (sometimes called clock triggers).
- Added an [installable open trigger](./guides/triggers/installable.md) for Google Docs. Like the installable open triggers for Sheets and Forms, this trigger is similar to the simple `onOpen()` trigger, but allows the triggered function to call services that require authorization, if the user has authorized the script ahead of time.
- Added several new `ScriptApp` methods, classes, and enums to support installable triggers in add-ons:
	- [`AuthorizationInfo`](./reference/script/authorization-info.md): An object used to determine whether the user needs to authorize this script to use one or more services, and to provide the URL for an authorization dialog. Returned by `ScriptApp.getAuthorizationInfo()`.
		- [`AuthorizationStatus`](./reference/script/authorization-status.md#getAuthorizationUrl()): An enumeration denoting the authorization status of a script. Returned by `AuthorizationInfo.getAuthorizationStatus()`.
		- [`DocumentTriggerBuilder`](./reference/script/document-trigger-builder.md): A builder for document triggers. Returned by `TriggerBuilder.forDocument(...)`.
		- [`ScriptApp.getUserTriggers(...)`](./reference/script/script-app.md#getUserTriggers(Document)): Gets all installable triggers owned by this user in the given document, spreadsheet, or form.

Change

The `UiService` widget `DocsListDialog` now requires that you call [`DocsListDialog.setOAuthToken(oAuthToken)`](./guides/support/sunset.md#setOAuthToken(String)) before calling [`DocsListDialog.showDocsPicker()`](./guides/support/sunset.md#showDocsPicker()).

## September 04, 2014

Deprecated

Replaced the `CacheService` methods `getPrivateCache()` and `getPublicCache()` and the `LockService` methods `getPrivateLock()` and `getPublicLock()` with [`getUserCache()`](./reference/cache/cache-service.md#getUserCache()), [`getScriptCache()`](./reference/cache/cache-service.md#getScriptCache()), [`getUserLock()`](./reference/lock/lock-service.md#getUserLock()), and [`getScriptLock()`](./reference/lock/lock-service.md#getScriptLock()), respectively. The old method names have been deprecated, but will continue to function. The new names follow the same conventions as `PropertiesService`.

Feature

- Added the `UiService` method [`DocsListDialog.setOAuthToken(oAuthToken)`](./guides/support/sunset.md#setOAuthToken(String)), which sets an OAuth 2.0 token to use when fetching data for the dialog, on behalf of the user whose content should be shown. This method will become mandatory before calling [`DocsListDialog.showDocsPicker()`](./guides/support/sunset.md#showDocsPicker()) on September 30, 2014.
- Added the `CacheService` method [`getDocumentCache()`](./reference/cache/cache-service.md#getDocumentCache()) and the `LockService` method [`getDocumentLock()`](./reference/lock/lock-service.md#getDocumentLock()), which get a cache and a lock that all users can access within the current document, if the script is published as an add-on. These methods are conceptually similar to the `PropertiesService` method [`getDocumentProperties()`](./reference/properties/properties-service.md#getDocumentProperties()), which was introduced for use in add-ons earlier this year.

## July 17, 2014

Feature

Added the value `ON_CHANGE` to the [`ScriptApp.EventType`](./reference/script/event-type.md) enum so that Google Sheets [change events](./guides/triggers/events.md) can be detected correctly.

## June 20, 2014

Deprecated

Deprecated the script gallery in the old version of Google Sheets. As explained in the [blog post](https://gsuite-developers.googleblog.com/2014/06/deprecating-script-gallery-in-old.html), the add-on store in the new version of Sheets gives developers wider distribution, automatic updates, and several other features not available in the script gallery.

## May 29, 2014

Change

Added the `Document` service methods [`getTextAlignment`](./reference/document/text.md#getTextAlignment()) and [`setTextAlignment`](./reference/document/text.md#setTextAlignment(Integer,Integer,TextAlignment)) as well as the enum `TextAlignment`, to support `NORMAL`, `SUPERSCRIPT`, and `SUBSCRIPT` text alignment in Google Docs.

## May 15, 2014

Deprecated

[Deprecated](./guides/support/sunset.md) both [`ScriptDB`](./guides/support/sunset.md) and the [`Domain` service](./index.md). As announced in the blog post, the services will remain available for the next six months but will be turned off on November 20, 2014. To replace `ScriptDB`, see the [migration guide](./guides/support/sunset.md) and the improved guide to [connecting to external databases through JDBC](./guides/jdbc.md). To replace the `Domain service`, see the [Admin SDK Directory](./advanced/admin-sdk-directory.md) and [Admin SDK Reports](./advanced/admin-sdk-reports.md) advanced services.

Feature

Added a source property to the [event parameter](./guides/triggers/events.md) for [form triggers](./guides/triggers.md). This makes it possible to retrieve the form that triggered the event.

Issue

- [Issue 3956](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3956): In the new version of Google Sheets, it is now possible to call methods that refer to the "active" sheet or spreadsheet even if the sheet or spreadsheet has just been created.
- [Issue 3579](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3579): The `Blob` method `getA` s can now create PDFs from spreadsheets created with the new version of Sheets.
- [Issue 3378](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3378): The documentation page for a library version now uses the same CSS styles as the Apps Script reference documentation.

## May 08, 2014

Change

The "Report an issue" dialog for [add-ons](../workspace/add-ons/overview.md) now asks users whether they would like to share their name and email address with the developer.

## May 01, 2014

Fixed

- [Issue 3963](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3963): The [Apps Script dashboard](https://script.google.com/dashboard) is available again.
- [Issue 3533](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3533): The `Trigger` methods `getEventType()` and `getTriggerSource()` no longer throw an exception if the trigger belongs to a spreadsheet created by the [new version of Google Sheets](https://support.google.com/drive/answer/3541068).

## April 24, 2014

Change

In the [new version of Google Sheets](https://support.google.com/drive/answer/3541068), the Undo command can now revert changes made by a script. This was already true in Docs, Forms, and the older version of Sheets.

Fixed

- [Issue 3891](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3891): In the new version of Sheets, custom functions now recalculate correctly if more than 100 cells are passed as an argument.
- [Issue 3859](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3859): In the new version of Sheets, setting data-validation criteria for a cell that already contains a value no longer corrupts the spreadsheet.
- [Issue 3773](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3773): In the new version of Sheets, the Browser methods `inputBox` and `msgBox` now treat newline characters (`\n`) the same way that the older version of Sheets did. Specifically, `\n` produces a space, but `\\n` (double-escaped) produces a line break.
- [Issue 2335](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2335): The fact that the ID of a `GmailThread` varies based on the messages it contains is [now documented](./reference/gmail/gmail-thread.md#getId()).
- [Issue 2288](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2288): The fact that a Google Site or page of a site cannot have more than 500 child pages is [now documented](./reference.md#createAnnouncementsPage(String,String,String)).
- [Issue 1427](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1427): The fact that the method `getAs` replaces the part of a filename that follows the last period with the new file type's extension is [now documented](./reference/base/blob.md#getAs(String)).

## April 17, 2014

Change

The `Document` method [`setSelection`](./reference/document/document.md#setSelection(Range)), the `Sheet` method [`activate`](./reference/spreadsheet/sheet.md#activate()), and the `Spreadsheet` methods [`setActiveRange`](./reference/spreadsheet/spreadsheet.md#setActiveRange(Range)) and [`setActiveSelection`](./reference/spreadsheet/spreadsheet.md#setActiveSelection(Range)) no longer have any effect if they are called from an [`onOpen` or `onEdit` trigger](./guides/triggers.md).

Issue

- [Issue 3669](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3669): In the [new version of Sheets](https://support.google.com/drive/answer/3541068), the `Range` methods `getValue()` and `getValues()` no longer throw an exception if a cell uses the built-in Sheets methods `=IMAGE(url)` or `=SPARKLINE(data)`.
- [Issue 2684](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2684): If a script relies on a deleted version of a library, it is now possible to switch to a different version.

## April 10, 2014

Fixed

- [Issue 3788](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3788): In the new version of Sheets, custom functions now calculate if they are passed an error value as an argument. This matches the behavior in the older version of Sheets.
- [Issue 3539](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3539): In the new version of Sheets, the `Range` methods `setValue` and `setValues` now automatically detect when a value should be set as a formula. This matches the behavior in the older version of Sheets.

Deprecated

The deprecated SOAP service and old XML service have now been removed from autocomplete and documentation, as announced on July 9, 2013 and documented in the [Apps Script sunset schedule](./guides/support/sunset.md). Existing scripts that use these services should still function. The UI service widgets `DeckPanel`, `DecoratedPopupPanel`, `DockLayoutPanel`, `DockPanel`, `StackLayoutPanel`, and `TabLayoutPanel` have been completely disabled, as announced on April 15, 2013.

## April 03, 2014

Feature

The Range method `getDataSourceUrl()` is now supported in the [new version of Google Sheets](https://support.google.com/drive/answer/3541068). For information on other incomplete Apps Script features in the new version of Sheets, see the [list of known issues](https://developers.google.com/apps-script/migration/sheets).

Change

- [Issue 3866](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3866): The `DocsList` methods `File.getEditors()` and `File.getViewers()` no longer throw a server error on every call.
- [Issue 3865](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3865): The `DocsList` method `File.getOwner()` no longer throws a server error on every call.
- [Issue 3845](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3845): The advanced Google services for [Drive](./advanced/drive.md) and [Calendar](./advanced/calendar.md) are now documented.
- [Issue 3624](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3624): In the new version of Sheets, the `Sheet` method `hideSheet()` can now hide sheets that have just been inserted.
- [Issue 3554](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3554): In the new version of Sheets, the `Range` method `sort()` now succeeds for ranges that do not include column A.
- [Issue 3522](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3522): In the new version of Sheets, the `SpreadsheetApp` method `getActiveSheet()` now returns the correct sheet in a single custom function call. However, `getActiveSheet()` still returns an incorrect value if the custom function is used in more than one cell with the same function arguments, or if called from an installable edit trigger in the new version of Sheets.
- [Issue 3496](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3496): In the new version of Sheets, the `SpreadsheetApp` method `getActiveRange()` now returns the correct range in a single custom function call. However, `getActiveRange()` still returns an incorrect value if the custom function is used in more than one cell with the same function arguments, or if called from an installable edit trigger in the new version of Sheets.

## March 27, 2014

Fixed

- [Issue 3691](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3691): In the new version of Google Sheets, scripts can now run for 6 minutes instead of 5 minutes.
- [Issue 3236](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3236): Google Picker, a "file-open" dialog for information stored in Google servers, including files in Google Drive, is now [supported in HTML service](./guides/dialogs.md#file-open_dialogs).

Change

When an [add-on](../workspace/add-ons/overview.md) is installed from the store, the `onInstall()` [simple trigger](./guides/triggers.md) is now passed an [event parameter](./guides/triggers/events.md), `e`, which includes an `authMode` property. This makes it easier for an add-on to [call `onOpen(e)` from `onInstall(e)`](../workspace/add-ons/concepts/editor-auth-lifecycle.md#the_complete_lifecycle).

## March 24, 2014

Change

In the [new version of Google Sheets](https://support.google.com/drive/answer/3541068), `Range.setValues()` now automatically extends the spreadsheet if the range is larger than the present size.

Fixed

- [Issue 3800](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3800): In the new version of Sheets, custom functions now accept numbers larger than 10,000,000 or smaller than 0.0001 as arguments.
- [Issue 3770](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3770): In the new version of Sheets, `Sheet.insertImage()` now inserts the image at the correct size.
- [Issue 3724](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3724): In the new version of Sheets, `Range.setValue()` now correctly sets numeric values in non-English spreadsheets.

## March 18, 2014

Fixed

[Issue 3757](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3757): The link to the Google Developers Console in the Advanced Google Services dialog now opens the correct project.

## March 11, 2014

Announcement

[Announced a developer preview](https://gsuite-developers.googleblog.com/2014/03/add-ons.html) for add-ons in Google Docs and the new version of Google Sheets, with support for Google Forms coming soon. An add-on is an Apps Script project published to a store inside Docs or Sheets, which makes it easy for users to find and install new features. Our guides cover everything you need to know to [develop](../workspace/add-ons/overview.md), [design](../workspace/add-ons/guides/editor-style.md), and [apply to publish](../workspace/add-ons/how-tos/publish-add-on-overview.md) your first add-on.

Feature

- Released a [CSS package](../workspace/add-ons/guides/css.md) to apply Google styling to fonts, buttons, and form elements in HTML service dialogs and sidebars, primarily for use in add-ons.
- Added the UI method [`createAddonMenu()`](./reference/base/ui.md#createAddonMenu()), which allows scripts to insert a sub-menu into the Add-ons menu in Google Sheets or Docs. For more information, see the [guide to menus](./guides/menus.md).
- Added the `ScriptApp` enum [`AuthMode`](./reference/script/auth-mode.md), which identifies categories of authorized services that Apps Script can execute through a triggered function. For more information, see the [guide to the add-on authorization lifecycle](../workspace/add-ons/concepts/editor-auth-lifecycle.md#authorization_modes).
- Added support for the custom JsDoc annotation [`@OnlyCurrentDoc`](./guides/services/authorization.md#manual_authorization_scopes_for_sheets_docs_and_forms), which forces the authorization dialog to ask only for access to files in which an add-on or script is used, rather than all of a user's spreadsheets, documents, or forms. An opposing annotation, `@NotOnlyCurrentDoc`, is also available.

Change

Changed the [quota](./guides/services/quotas.md) for Gmail from 10,000 reads and 10,000 writes per day (excluding sent messages) to 20,000 reads and writes combined per day.

## February 25, 2014

Change

- Replaced `ScriptProperties` and `UserProperties` with a unified [`PropertiesService`](./reference/properties/properties-service.md). For more information, see the [guide to the Properties service](./guides/properties.md).
- In Google Docs and Forms, sidebars now ignore the `setWidth()` method; they cannot be changed from the default width of 300px. This change was applied to the new version of Sheets in the previous week's release.
- In Google Docs and Forms, the Undo command can now revert changes made by a script. This is also true in the older version of Sheets, but not the new version.
- In the HTML service, the [`NATIVE` sandbox mode](./guides/html/restrictions.md#sandbox_mode) is now the default if you have not specified which mode your script should use. In a few edge cases, this may affect how existing web apps operate; if so, append [`.setSandboxMode(HtmlService.SandboxMode.EMULATED)`](./reference/html/html-output.md#setSandboxMode(SandboxMode)) to your `HtmlOutput` object to restore the old behavior.

Fixed

[Issue 3622](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3622): The title bar of a sidebar shown by a script in Google Docs, Forms, or the new version of Sheets is now the same height as in a sidebar shown by a built-in feature.

Deprecated

[Deprecated](./guides/support/sunset.md) the [Finance service](./index.md). As announced in the [blog post](https://gsuite-developers.googleblog.com/2014/02/more-apps-script-apis-and-features.html), the service will remain available for the next six months but will be turned off on September 26, 2014.

Feature

- Added the following `DocumentApp` classes and methods, which allow scripts to create bookmarks and named ranges, plus set the user's cursor position or selection.
	- `Bookmark`
		- \`NamedRange
		- \`RangeBuilder
		- \`Document.addBookmark(position)
		- \`Document.addNamedRange(name, range)
		- \`Document.getBookmark(id)
		- \`Document.getBookmarks()
		- \`Document.getNamedRangeById(id)
		- \`Document.getNamedRanges()
		- \`Document.getNamedRanges(name)
		- \`Document.newPosition(element, offset)
		- \`Document.newRange()
		- \`Document.setCursor(position)
		- \`Document.setSelection(range)
		- \`Position.insertBookmark()
- Added the following `ScriptApp` class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
	- \`StateTokenBuilder
		- \`ScriptApp.getOAuthToken()
		- \`ScriptApp.newStateToken()
- Added the method `showModalDialog(userInterface, title)` to the Ui class, and replaced the method `showDialog(userInterface)` with `showModelessDialog(userInterface, title)`. This allows scripts to specify whether a dialog in Google Docs, Forms, or the new version of Sheets should prevent the user from interacting with anything other than the dialog.
- Added the client-side HTML-service method `google.script.host.editor.focus()`, which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.

## February 18, 2014

Fixed

- [Issue 3522](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3522): In the new version of Sheets, the `SpreadsheetApp` method `getActiveSheet()` now returns the correct sheet if called from a `simple onEdit()` trigger. However, `getActiveSheet()` still returns an incorrect value if used in a custom function or an installable edit trigger in the new version of Sheets.
- [Issue 3496](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3496): In the new version of Sheets, the `SpreadsheetApp` method `getActiveRange()` now returns the correct sheet if called from a simple `onEdit()` trigger. However, `getActiveRange()` still returns an incorrect value if used in a custom function or an installable edit trigger in the new version of Sheets.
- [Issue 3332](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3332): The `DocumentApp` method `setHeading()` now applies heading styles in the same way that the Google Docs editor does.

Deprecated

Removed the Session method `getActiveUserTimeZone()`, which did not return a value for most users.

Change

- In Google Docs, Forms, and the [new version of Sheets](https://support.google.com/drive/answer/3541068), showing a dialog now automatically closes any other dialogs opened by a script. This matches the longstanding behavior in the older version of Sheets.
- In the new version of Sheets, sidebars now ignore the `setWidth()` method; they cannot be changed from the default width of 300px. This change will affect Docs and Forms soon.

## January 27, 2014

Deprecated

Renamed several classes and methods in `DocumentApp`. The old names are deprecated but will continue to work. You do not need to update your code.

- `SearchResult` and `SelectedElement` are now `RangeElement`.
- `Selection` is now `Range`.
- `Selection.getSelectedElements()` is now `Range.getRangeElements()`.

Change

The [quota](./guides/services/quotas.md) for the number of email recipients for scripts running from consumer (gmail.com) or free Google Apps accounts has been reduced from 500 to 100 per day. The quota for paid Google Apps accounts has not been changed.

Feature

Added the following `Session` methods, which allow scripts to determine the user's locale and time zone:

- `getActiveUserLocale()`
- `getActiveUserTimeZone()`

## January 21, 2014

Feature

The new `SpreadsheetApp` method `Spreadsheet.getUi()` allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars. This method is consistent with the `getUi()` methods in `DocumentApp` and `FormApp`, but only works in the new version of Google Sheets. The older version of Google Sheets continues to use the existing methods documented in the guides to dialogs and sidebars and menus.

## January 13, 2014

Deprecated

Deprecated the `SpreadsheetApp.Spreadsheet` methods `isAnonymousView()`, `isAnonymousWrite()`, `isReadable()`, `isWritable()`, and `setAnonymousAccess()`. Various methods of the [`File`](./reference/drive/file.md) class in `DriveApp` can achieve the same functionality.

Change

Renamed the `Cursor` object in `DocumentApp` to `Position`. This does not require any changes to existing code.

Feature

Added the `SpreadsheetApp` method `DataValidationBuilder.requireFormulaSatisfied(String)`, as well as an accompanying `CUSTOM_FORMULA` value in `DataValidationCriteria`. This feature can only be used in the new version of Google Sheets.

## January 06, 2014

Change

- Custom menus in Google Docs now appear in the Help menu search box.
- Custom dialogs created with the HTML service can now be [resized](./guides/html/communication.md#resizing_dialogs_in_google_apps) by calling `google.script.host.setWidth(width)` and `google.script.host.setHeight(height)` in client-side code. Sidebars cannot be resized in client side code.

Feature

Added the advanced parameter escaping to [`UrlFetchApp.fetch()`](./reference/url-fetch/url-fetch-app.md#fetch(String,Object)). If `false`, reserved characters in the URL will not be automatically escaped.

Feature

The `Maps.DirectionFinder.Mode` enum now includes the `TRANSIT` value allowing for the retrieval of public transit routes in the [`Maps` service](./reference/maps.md).

## December 16, 2013

Fixed

[Issue 3461](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3461): A yellow warning bar should no longer appear on Apps Script gadgets that are embedded in Google Sites.

Change

- [Changed the default syntax](http://googleappsdeveloper.blogspot.com/2013/12/more-google-services-available-in-apps.html) for all existing advanced services to match the underlying APIs' reference documentation. The old Apps Script getter/setter notation for these services will continue to work but will no longer appear in autocomplete.
- Renamed the menu entry **Resources > Manage libraries** to **Resources > Libraries**.
- Renamed the menu entry **Resources > Google APIs Services** to **Resources > Advanced Google services**.

Feature

[Added seven new advanced services](http://googleappsdeveloper.blogspot.com/2013/12/more-google-services-available-in-apps.html): + Admin SDK Directory service + Admin SDK Reports service + Fusion Tables service + Google+ Domains service + Mirror service + YouTube service + YouTube Analytics service

## December 02, 2013

Fixed

- [Issue 3101](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3101): Removed the `SitesApp` method `Site.deleteSite()`, which was never functional.
- [Issue 3046](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3046): `UrlFetchApp` now properly preserves RFC 3986 escaping.
- [Issue 2497](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2497): An rare edge case issue when using `UiApp` server handler callbacks and libraries no longer occurs.
- [Issue 1346](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1346): An issue in which a library's `UiApp` server handlers created new server handlers that were not able to reference non-library functions should no longer occur.

Feature

Added `TITLE` and `SUBTITLE` values to the [`DocumentApp.ParagraphHeading` enum](./reference/document/paragraph-heading.md).

## November 18, 2013

Deprecated

The Apps Script methods `Utilities.jsonParse()` and `Utilities.jsonStringify()` have been deprecated in favor of the now-standard JavaScript methods `JSON.parse()` and `JSON.stringify()`, which now appear in autocomplete.

## November 11, 2013

Fixed

[Issue 3189](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3189): A rare issue in which `LockService` failed to acquire a lock should no longer occur.

## November 04, 2013

Change

If a version of a library has been deleted by the library owner, scripts can no longer use that version.

Fixed

[Issue 2817](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2817): Sporadic errors about missing libraries should now occur less frequently.

## October 21, 2013

Fixed

[Issue 74](https://code.google.com/p/google-apps-script-issues/issues/detail?id=74): Simple `onEdit()` triggers now fire correctly when the user is not signed in to a Google account.

## October 08, 2013

Feature

Added the following `FormApp` methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + [`Form.hasProgressBar()`](./reference/forms/form.md#hasProgressBar()) + [`Form.setProgressBar(enabled)`](./reference/forms/form.md#setProgressBar(Boolean)) + [`Form.getCustomClosedFormMessage()`](./reference/forms/form.md#getCustomClosedFormMessage()) + [`Form.setCustomClosedFormMessage(message)`](./reference/forms/form.md#setCustomClosedFormMessage(String)) + [`Form.addVideoItem()`](./reference/forms/form.md#addVideoItem())

## September 23, 2013

Feature

Added the following `DriveApp` methods, which allow scripts to get the owner of a File or Folder.

- [`File.getOwner()`](./reference/drive/file.md#getOwner())
- [`Folder.getOwner()`](./reference/drive/folder.md#getOwner())

## September 16, 2013

Feature

- HTML Service now supports most CSS3 features. A notable exception is the `:nth-child()` pseudo-selector, which remains unsupported, along with a small number of obscure or non-standardized CSS3 features. To check whether the Caja security sandbox in HTML Service supports a specific feature, see the [CSS whitelist definitions in Caja's public repository](https://code.google.com/p/google-caja/source/browse/trunk/src/com/google/caja/lang/css).
- Added the following `DriveApp` methods, which allow scripts to save the state of a file or folder iterator and resume at a later time. These method are useful if processing an iterator in one execution would exceed the maximum execution time.
	- `FileIterator.getContinuationToken()`
		- `FolderIterator.getContinuationToken()`
		- `DriveApp.continueFileIterator(continuationToken)`
		- `DriveApp.continueFolderIterator(continuationToken)`

Deprecated

The `UiApp` widgets `Hyperlink`, `InlineHyperlink`, `LayoutPanel`, and `RichTextArea` have now been disabled, as announced on March 13, 2013 and documented in the [Apps Script sunset schedule](./guides/support/sunset.md).

## September 09, 2013

Deprecated

Deprecated the `DocumentApp` methods `getFootnotes()`, `getLinkUrl()`, `setLinkUrl(url)`, and `isAtDocumentEnd()` in the classes `FooterSection`, `FootnoteSection`, and `HeaderSection`, as well as the methods `getNextSibling()` and `getPreviousSibling()` in the classes `FooterSection` and `HeaderSection`. These methods were not useful.

Fixed

Issue 2621: A situation in which certain scripts did not terminate despite exceeding the execution-time limit no longer occurs.

Feature

Added the `DocumentApp` methods [`InlineImage.getLinkUrl()`](./reference/document/inline-image.md#getLinkUrl()) and [`InlineImage.setLinkUrl(url)`](./reference/document/inline-image.md#setLinkUrl(String)).

## September 03, 2013

Feature

- Added the `DriveApp` methods `DriveApp.getFoldersByName(name)` and `DriveApp.searchFolders(params)`, which return a `FolderIterator` with the requested results.
- Added the `DriveApp` methods `File.getViewers()`, `File.getEditors()`, `Folder.getViewers()`, and `Folder.getEditors()`, which return an array of `Users` with view or edit access.

Deprecated

Removed the ability to get the user's email address in [simple `onEdit()` triggers](./guides/triggers.md#simple-triggers). Because simple triggers don't request user authentication, this change was important to protect the identity of collaborators who hadn't explicitly granted permission for the script to collect their email address.

## August 19, 2013

Feature

Added the `DriveApp` methods [`File.makeCopy(destination)`](./reference/drive/file.md#makeCopy(Folder)) and [`File.makeCopy(name, destination)`](./reference/drive/file.md#makeCopy(String,Folder)), which allow scripts to specify a folder to which a file should be copied.

Fixed

[Issue 3097](https://code.google.com/p/google-apps-script-issues/issues/detail?id=3097): A performance issue that affected certain scripts no longer occurs.

## August 13, 2013

Feature

Added the method [`Spreadsheet.deleteSheet(sheet)`](./reference/spreadsheet/spreadsheet.md#deleteSheet(Sheet)), which allows deletions of sheets that are not the active sheet.

## August 05, 2013

Feature

- Added the method [`GmailMessage.getPlainBody()`](./reference/gmail/gmail-message.md#getPlainBody()), which returns the content of the message without HTML formatting.
- Launched a new feature to allow programmatic control over [data-validation rules](./reference/spreadsheet/data-validation.md) in Google Sheets.

Fixed

- [Issue 2916](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2916): HTML files inserted into a new Apps Script project using the Google Drive SDK are no longer created with the `server_js` filetype.
- [Issue 2880](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2880): Special characters (such as apostrophes) no longer need to be escaped twice when passed to `DriveApp.getFilesByName()`.
- [Issue 2780](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2780): `DriveApp` now throws a more appropriate error message if Google Drive apps are prohibited within the user's domain.

Deprecated

Deprecated the `DocsList` methods `find(query, start, max)`, `getAllFiles(start, max)`, `getAllFolders(start, max)`, `getFiles(start, max)`, `getFilesByType(fileType, start, max)`, and `getFolders(start, max)`. Instead of these methods, use [`DriveApp`](./reference/drive/drive-app.md) or one of the [`DocsList.get*ForPaging()`](./guides/support/sunset.md) methods.

## July 29, 2013

Change

All new scripts now use the [new authorization flow](./guides/services/authorization.md#grantingAccess) by default.

Fixed

[Issue 2947](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2947): Newlines are now supported in [`Ui.alert()`](./reference/base/ui.md#alert(String)) and [`Ui.prompt()`](./reference/base/ui.md#prompt(String)) dialogs.

Feature

On ChromeOS devices, it is now possible to activate autocomplete (sometimes called "content assist") with the keyboard shortcut `Ctrl + Space`.

## July 22, 2013

Feature

Added `DriveApp` and `FormApp` to the services tracked on the [Apps Script Dashboard](https://script.google.com/a/google.com/dashboard).

Fixed

[Issue 2801](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2801): Fixed an issue in which specific URL parameters did not work with `HtmlService`.

## July 09, 2013

Deprecated

[Deprecated](./guides/support/sunset.md) the old `Xml` service, `SoapService`, and support for the JavaScript feature E4X.

Feature

Added [`XmlService`](./reference/xml-service.md) to replace the old `Xml` service.

Fixed

- [Issue 2906](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2906): Chained method calls in [advanced Google services](./guides/services.md#advanced_google_services) no longer throw an exception.
- [Issue 2872](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2872): [`File.removeEditor()`](./guides/support/sunset.md#removeEditor(String)) no longer throws an exception when the editor is a group instead of an individual user.

## June 25, 2013

Fixed

- [Issue 2820](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2820): `getActiveSheet()` now properly returns the active sheet when used with an `onChange` trigger.
- [Issue 2761](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2761): When a `Document` element that contains an image is copied, the image is now also copied.

Change

- Any script that is container-bound to a Google Doc can now access the active user's `Cursor` and `Selection` by calling `Document.getCursor()` and `Document.getSelection()`, respectively.
- The **Publish > Deploy** as web app dialog now includes an option to save a version of the script, if a version has not previously been saved. Subsequent versions of the script must still be saved through the **File > Manage versions** dialog.
- Scripts now always require authorization to use the methods `Session.getEffectiveUser()` or `Session.getUser()`. Existing scripts that use those methods and were upgraded to the new authorization experience require reauthorization but will not prompt for authorization automatically. To reauthorize the script, [follow these instructions](./guides/services/authorization.md#reauth).
- `UrlFetch` requests made by scripts that run on a time-based trigger now include an `If-Modified-Since` HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.

## June 17, 2013

Fixed

- [Issue 2626](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2626): The execution transcript now correctly reports the execution time for methods that are called repeatedly.
- [Issue 2559](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2559): A sporadic issue in which `Spreadsheet.getSheetByName()` returned null for a valid sheet name no longer occurs.
- [Issue 1965](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1965): Emails forwarded using `GmailMessage.forward()` now preserve inline images.
- [Issue 1414](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1414): `Range.copyTo()` now adds additional rows as necessary, if the destination sheet does not have enough rows to accommodate the range.

Feature

- [Issue 1034](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1034): The new Drive Service methods `addCommenter()` and `removeCommenter()` allow scripts to add and remove commenters on files.
- [Issue 674](https://code.google.com/p/google-apps-script-issues/issues/detail?id=674): Mail sent with `GmailApp` now appears in the `Sent Mail` folder in Gmail.

## June 11, 2013

Fixed

- [Issue 2823](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2823): Timestamps for the start and end of script execution, including total runtime, now appear in the execution transcript (**View > Execution** transcript) instead of the log.
- [Issue 2807](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2807): A rare issue where a script could not be upgraded to the new authorization flow no longer occurs.
- [Issue 2791](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2791): Calling `Trigger.getTriggerSource()` for a Form-based trigger no longer throws an exception.
- [Issue 2734](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2734): `HtmlService` scripts that call long-running server-side functions no longer repeat the function call multiple times.

## June 03, 2013

Fixed

- [Issue 2819](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2819): `Folder.createFile(name, content, mimeType)` now creates the file in the folder on which the method was executed.
- [Issue 2776](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2776): Existing deployed web apps now properly authenticate after upgrading a script to use the new authorization experience.
- [Issue 2679](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2679): The `getAs()` method of the File class no longer throws an error when converting.docx,.pptx, or.xlsx files to PDF.
- [Issue 2643](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2643): The timestamps for a script's log messages are now in the script's timezone.
- [Issue 2597](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2597): The script editor's Find functionality no longer skips the first result.

Change

- To simplify the end user experience, function names are no longer shown in the notification message for scripts that run successfully from a spreadsheet, document, or form. Function names are still displayed when there is an error (to help with debugging) and when the script is run from the script editor.
- To simplify the Document service, the following methods were removed from the Body class: `getNextSibling()`, `getPreviousSibling()`, `isAtDocumentEnd()`, `getLinkUrl()`, `setLinkUrl()`, and `removeFromParent()`.

## May 13, 2013

Feature

- The script editor is now available within Google Docs and the Google Forms editor, and both Docs and Forms can now be [containers](./guides/bound.md) for scripts.
- Added [Forms Service](./reference/forms.md), which allows scripts to create and modify Google Forms.
- Added [Drive Service](./reference/drive.md), which allows scripts to create and modify files and folders in Google Drive. This is a newer version of the existing DocsList Service.
- Added a [`getUi` method](./reference/document/document-app.md#getUi()) to `DocumentApp` and `FormApp`, which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.
- Added the [`FormTriggerBuilder` class](./reference/script/form-trigger-builder.md) to allow scripts to respond to Forms events.
- Added a [`setSandboxMode` method](./reference/html/html-output.md#setSandboxMode(SandboxMode)) to enable a faster version of the `HtmlService` sandbox.
- Added a [`MimeType` enum](./reference/base/mime-type.md), which provides access to `MIME` -type declarations without typing the strings explicitly.
- Added an option to [upgrade to a new authorization flow](./guides/services/authorization.md#authUpgrade) that requires fewer clicks and automatically creates a Google Developers Console project for every script.

## May 09, 2013

Feature

[Issue 2158](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2158): The request object passed in to `doPost()` methods now contains the `POST` body. It can be accessed using e.postData.getDataAsString().

Fixed

[Issue 2740](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2740): `UrlFetchApp.fetch()` calls no longer fail if the advanced parameters specify a payload without specifying the request method.

## May 02, 2013

Fixed

[Issue 2585](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2585): `Xml.parse()` once again correctly parses well-structured XML and HTML documents.

Feature

[Issue 1363](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1363): Added support for spreadsheet change events. The `onChange()` event now fires when certain modifications, such as row insertions, are done to a spreadsheet.

## April 29, 2013

Fixed

- [Issue 2695](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2695): Form submits in UI Service apps once again work properly.
- [Issue 2625](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2625): The `withUserObject()` method in `Html` Service apps now works properly with Firefox 20.
- [Issue 1612](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1612): `Element.copy()` can now copy `InlineImage` elements from one document to another.
- [Issue 170](https://code.google.com/p/google-apps-script-issues/issues/detail?id=170): `Spreadsheet.addCollaborators()` now sends an email invitation to collaborators when the `emailInvitations` advanced parameter is set.

## April 22, 2013

Fixed

- [Issue 2665](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2665): `UrlFetchApp.fetch()` once again allows URLs that contain spaces.
- [Issue 2593](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2593): `Range.setValue()` now behaves correctly in a function called from an `onEdit` spreadsheet trigger.
- [Issue 941](https://code.google.com/p/google-apps-script-issues/issues/detail?id=941): The event parameter for a `ListBox` handler function now includes the value of the selected item rather than its name.
- [Issue 307](https://code.google.com/p/google-apps-script-issues/issues/detail?id=307): The event parameter for a `Tree` handler function now includes the ID of the selected item.

Change

Large scripts in the Script Gallery now install more quickly.

Feature

- [Issue 1771](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1771): Added a `clear()` method to the `Tree` and `TreeItem` classes. These methods remove all children from the object.
- [Issue 1743](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1743): Added an `autoResizeColumn()` method to the `Sheet` class. This method resizes a column to fit its contents.
- [Issue 1314](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1314): Added support for lazy loading in the `Tree` class, which reduces wait times in rendering the UI.

## April 15, 2013

Change

The following changes were made to simplify the [`Document` service](./reference/document.md):

- Renamed the `DocumentBodySection` class to `Body`.
- Renamed `Document.getActiveSection()` to `getBody()`.
- Removed methods of the `Body` class from `Document` so they only appear in one location.
- Removed `merge()` methods for various classes that cannot be merged, such as `PageBreak` and `HorizontalRule`.
- Removed text-related methods such as `isBold()` and `isUnderline()` from container elements such as `Table` while retaining them on the `Text` class. This functionality can now be achieved by calling `editAsText()` on the container element, and calling the text-related methods on the returned `Text` class.
- Removed methods which allowed appending or inserting `HorizonalRule` elements with specified attributes.

Fixed

[Issue 2565](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2565): `DocsList.createFile()` no longer allows the creation of files with invalid MIME types or Google document MIME types.

Deprecated

Deprecated `UiApp` widgets `DeckPanel`, `DecoratedPopupPanel`, `DockLayoutPanel`, `DockPanel`, `StackLayoutPanel`, and `TabLayoutPanel`, which had limited usability.

## April 08, 2013

Fixed

- [Issue 2548](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2548): Triggers created in web apps that allow for anonymous access no longer fail to fire.
- [Issue 2488](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2488): Charts dashboard components no longer throw serialization errors in certain scenarios.

Change

- Simplified the classes in the [`Document` service](./reference/document.md), removing unnecessary `.asSomething()` methods.
- Added timestamps to the log output.

## April 01, 2013

Feature

[Issue 995](https://code.google.com/p/google-apps-script-issues/issues/detail?id=995): The new methods [`Sheet.hideSheet()`](./reference/spreadsheet/sheet.md#hideSheet()), [`Sheet.isSheetHidden()`](./reference/spreadsheet/sheet.md#isSheetHidden()), and [`Sheet.showSheet()`](./reference/spreadsheet/sheet.md#showSheet()) allow scripts to control the visibility of individual sheets within a spreadsheet.

Fixed

- [Issue 2524](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2524): Scripts that rely on deleted libraries now display a clear error message.
- [Issue 2169](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2169): Installing scripts from the Script Gallery no longer results in occasional errors.
- [Issue 459](https://code.google.com/p/google-apps-script-issues/issues/detail?id=459): The event parameter for spreadsheet `onEdit()` functions now reports the affected range correctly in a variety of situations in which the `range` property was previously incorrect.

## March 25, 2013

Fixed

- [Issue 2534](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2534): Debugging into a recursive function using certain `GroupsManager` methods no longer throws an error.
- [Issue 1106](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1106): Restored the correct behavior of `Range.mergeAcross()`. This function, along with `Range.merge()` and the newly added `Range.mergeVertically()`, behave like the items under a spreadsheet's **Format > Merge cells** menu.

## March 18, 2013

Change

Renamed the action "Publish to Gallery" to "Submit to Gallery", to avoid confusion with publishing a web app.

Deprecated

[Deprecated](./guides/support/sunset.md) the GUI Builder and the `UIApp` widgets `Hyperlink`, `InlineHyperlink`, `LayoutPanel`, `RichTextArea`, and `SuggestBox`, which had limited usability.

## March 11, 2013

Fixed

[Issue 1917](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1917): It is no longer possible to install a script multiple times from the Script Gallery.

Change

- **View > Execution** transcript now shows how much time it took to execute each statement.
- If a script is shared with editors other than its owner and published as a web app, those other editors can now update the app's version and access its development URL (which ends in `/dev`).

Feature

- Added the [method `Utilities.formatString()`](./reference/utilities/utilities.md#formatString), which allows printf-like substitution of placeholders within a format string.
- Added the [property `DocsList.FileType.FORM`](./guides/support/sunset.md) to let `DocsList` access new Google Forms.

## March 04, 2013

Fixed

- [Issue 1182](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1182): `Calendar.getEvents(startTime, endTime, statusFilters)` now works properly.
- [Issue 459](https://code.google.com/p/google-apps-script-issues/issues/detail?id=459): `OnEdit` callbacks triggered by pasting to a cell now provide the correct range parameter.

## February 25, 2013

Change

When setting font colors in a spreadsheet using [`Range.setFontColor()`](./reference/spreadsheet/range.md#setFontColor) or [`Range.setFontColors()`](./reference/spreadsheet/range.md#setFontColors), color names will now automatically be converted to their corresponding hexadecimal values. For example, after calling `setFontColor('red')` the method `getFontColor()` will return "#ff0000".

Fixed

- [Issue 2435](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2435): Spreadsheet-bound scripts that use `Browser.inputBox()` no longer fail.
- [Issue 1128](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1128): Font colors set using `Range.setFontColor()` or `Range.setFontColors()` now appear correctly when printing the spreadsheet or exporting it as a PDF.
- [Issue 529](https://code.google.com/p/google-apps-script-issues/issues/detail?id=529): `SpreadsheetApp.getActiveSheet()` no longer fails to run in `onOpen()` triggers for certain spreadsheets.

## February 14, 2013

Feature

Added the [method `DocumentApp.openByUrl()`](./reference/document/document-app.md#openByUrl), which allows documents to be opened by their URL directly.

Fixed

- [Issue 2382](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2382): `File.makeCopy()` no longer produces an error when copying a new Google Form.
- [Issue 2367](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2367): The error message for invalid queries of `ScriptDbInstance.between()` is now more descriptive.
- [Issue 747](https://code.google.com/p/google-apps-script-issues/issues/detail?id=747): Error messages now specify in which code file the error occurred.

## February 11, 2013

Fixed

- [Issue 2388](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2388): The [quota dashboard](https://docs.google.com/macros/dashboard) once again displays the correct number of columns.
- [Issue 2344](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2344): Scripts that contain `onInstall()` functions no longer produce an error when installed from the Script Gallery.
- [Issue 2250](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2250): Dates are now logged in the script's time zone.
- [Issue 2021](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2021): `UiInstance.setStyleAttribute()` now properly sets the `backgroundImage` property in all supported browsers.
- [Issue 1811](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1811): The debugger can now step into libraries used in development mode.
- [Issue 1300](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1300): If a script bound to one spreadsheet uses an installable `onEdit()` trigger to monitor a separate spreadsheet, the range event parameter passed to the callback function now correctly recognizes the monitored spreadsheet as its parent.
- [Issue 1226](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1226): Client handlers for `ListBox` now fire properly in `UiApp`.
- [Issue 1030](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1030): The `setStyleAttribute()` method of various `UiApp` objects now properly sets the 'float' attribute in Firefox.
- [Issue 1014](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1014): `setFocus()` now works correctly.
- [Issue 231](https://code.google.com/p/google-apps-script-issues/issues/detail?id=231): Added `show()` and `hide()` methods to `PopupPanel`.

Feature

Added the ability to directly attach `StaticMap` objects in emails.

## January 31, 2013

Fixed

- [Issue 2317](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2317): Email address validation in `UiApp` now works correctly with uppercase input.
- [Issue 2306](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2306): The GUI Builder dialog shown for **File > Open** no longer has two "Cancel" buttons.
- [Issue 2265](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2265): Static maps can now contain many more markers.
- [Issue 2203](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2203): `CalendarEvent.getGuestList()` now returns the event creator in addition to the other guests.
- [Issue 2137](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2137): A `DateBox` containing an empty or invalid date will now have a null value when processed in a server handler or `doPost()` callback. By default, setting an empty or invalid date will not trigger a value-changed event, but you can call the method [`setFireEventsForInvalid()`](./guides/support/sunset.md#setFireEventsForInvalid) to override that behavior.
- [Issue 1795](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1795): `TextArea` widgets created using the GUI Builder now default to displaying scrollbars when the text is too long.
- [Issue 1764](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1764): `ClockTriggerBuilder.onWeekDay()` now works correctly when used in conjunction with `everyWeeks()`.
- [Issue 1695](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1695): GmailLabel.getThreads() now works correctly when the label name contains special characters.
- [Issue 1366](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1366): The methods getEditors() and getViewers() of the File class now return the full email address for entries that are groups.
- [Issue 918](https://code.google.com/p/google-apps-script-issues/issues/detail?id=918): Subsequent calls to Sheet.hideColumns() on different sheets no longer results in an error.
- [Issue 53](http://code.google.com/p/google-apps-script-issues/issues/detail?id=53): Rows containing only data-validation rules no longer count towards Sheet.getLastRow().

Feature

Added the [method `SpreadsheetApp.openByUrl()`](./reference/spreadsheet/spreadsheet-app.md#openByUrl), which allows spreadsheets to be opened by their URL directly.

Change

- Changed the behavior of `ClockTriggerBuilder` so that it now respects the time zone of the script, instead of defaulting to Pacific Time.
- The editor's Find dialog now supports searching over all files in the project.
- Improved the error message returned by `Range.setValues()` when the values fail to pass the validation on those cells.

## January 24, 2013

Feature

- [Issue 1642](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1642): When connecting to an external database with [`Jdbc.getConnection`](./reference/jdbc/jdbc.md#getConnection), you can now include the advanced argument use `JDBCCompliantTimezoneShift`.
- [Issue 619](http://code.google.com/p/google-apps-script-issues/issues/detail?id=619): `UiInstance` 's `createAnchor` method now allows links using the `mailto` scheme.
- [Issue 286](http://code.google.com/p/google-apps-script-issues/issues/detail?id=286): `UrlFetchApp` 's `fetch` method now accepts `followRedirects` as an advanced argument.

Fixed

- [Issue 1012](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1012): New calendar entries that span a time change (for example, the start of daylight saving time in that time zone) are now created with the correct duration.
- [Issue 912](http://code.google.com/p/google-apps-script-issues/issues/detail?id=912): It is now possible to display non-public images in a `UiApp` or `HtmlService` user interface, so long as the images are shared with the app's users.
- [Issue 815](http://code.google.com/p/google-apps-script-issues/issues/detail?id=815): `UiInstance` 's `createToggleButton(upText, downText)` method now functions correctly.
- [Issue 155](http://code.google.com/p/google-apps-script-issues/issues/detail?id=155): `Calendar.createAllDayEvent` now always sets the event to the correct date.

## January 17, 2013

Fixed

- [Issue 2155](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2155): The `Uninstall` link emailed to a user after authorizing a script embedded within a Google Site now works correctly.
- [Issue 1882](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1882): Icons in the Script Editor now display correctly on Macs with Retina displays.

Feature

Added the method [`after(durationMilliseconds)`](./reference/script/clock-trigger-builder.md#after) to class `ClockTriggerBuilder` to simplify the creation of one-off triggers.

## January 15, 2013

Change

[Issue 2204](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2204): `Utilities.formatDate` no longer rejects certain time-zone formats, such as EST, CST, etc.

## December 17, 2012

Fixed

- [Issue 2131](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2131): The timezone offset for "Europe/Moscow" is now correct.
- [Issue 2124](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2124): `ScriptDb` no longer throws an error when storing a float value.
- [Issue 2021](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2021): Setting the background image of a `UiApp` panel now works correctly.
- [Issue 1856](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1856): The Jdbc service now resolves host names correctly.
- [Issue 1312](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1312): The error message shown when the rate limit for spreadsheet creation is exceeded is now more readable.
- [Issue 949](http://code.google.com/p/google-apps-script-issues/issues/detail?id=949): Typing the character `}` on a Spanish keyboard now works correctly.

## December 11, 2012

Feature

Added extra validation to the datasource URLs used in charts. Custom datasource URLs that rely on non-Google authentication will no longer work.

Fixed

- [Issue 2100](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2100): `ScriptProperties.setProperties()` now respects the `deleteAllOthers` parameter.
- [Issue 2052](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2052): `UiApp'` s `setStyleAttribute()` method no longer rejects certain style attributes.
- [Issue 2041](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2041): The native `Date` methods `toLocaleDateString()` and `toLocaleTimeString()` now return the correct values.
- [Issue 1972](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1972): Web apps published from a domain, but available to everyone, now use the normal Google login page instead of domain's login page.
- [Issue 1876](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1876): The authorize link for scripts embedded in a Google Sites gadget now opens in a new tab/window.
- [Issue 1870](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1870): `CalendarEvent.getVisibility()` now returns the correct value.
- [Issue 1528](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1528): Using `ContactsApp` to modify multiple fields of a contact in quick succession no longer causes an etags mismatch error.
- [Issue 1502](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1502): Logs are now saved correctly for scripts that run as a web app, from a spreadsheet menu, or due to a trigger.
- [Issue 1275](https://code.google.com/p/google-apps-script-issues/issues/detail?id=1275): Deleting a script now deletes any associated triggers.

## November 28, 2012

Fixed

- Fixed an issue where `onFormSubmit` trigger's callback range was incorrect if the submit triggered a formula recalculation.
- Fixed an issue where `XmlDocument` properties and functions did not autocomplete when generating an XmlDocument with the Soap service.

Change

- Added an [enhancement](http://code.google.com/p/google-apps-script-issues/issues/detail?id=872) to `GmailApp` to allow retrieval of bcc addresses via `GmailMessage.getBcc()`.
- [Tree](./guides/support/sunset.md#addOpenHandler) widgets now allow specifying open handlers as well as close handlers.

## November 21, 2012

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2074) where public locks are not correctly released.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2080) to allow multiple comma-delimited `replyTo` addresses in `MailApp.sendEmail()`.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1929) with auto-complete for library functions not working when that library contained HTML files.

## November 13, 2012

Feature

Added the ability to disable SSL certificate validation in the [`SoapService`](./reference/xml-service.md#wsdl), in response to a feature request.

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=2004) where `MailApp` 's and `GmailApp` 's `sendEmail` function ignored the advanced parameter `name`.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1791) where new library versions took a long time to propagate to other scripts.

## November 06, 2012

Change

Updated some icons to match icons of other Google Drive applications.

Fixed

- Fixed an issue where a script failure notice would refer to the script as "Not Found" in cases where the failure is caused by an auth issue.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1275) where it was not possible to save scripts with more than ~1 million characters.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1920) where `LockService` did not work correctly when called from a `UiApp`.

Feature

Added options to [`EmbeddedChartBuilder`](./reference/spreadsheet/embedded-chart-builder.md) to make it easier to configure embedded charts. `EmbeddedChartBuilder` now contains the methods `asAreaChart()`, `asBarChart()`, `asColumnChart()`, `asLineChart()`, `asPieChart()`, `asScatterChart()` and `asTableChart()` as replacements for calls to `setChartType()`.

## October 26, 2012

Fixed

- Fixed an issue where the `DocsList` service was unable to retrieve more than 2000 files. Several new methods were added to the `DocsList` class (`getFilesForPaging,` etc.) that use continuation tokens as described in the documentation.
- Fixed an issue where placing a null value via data table's `addRow` method produced an error.
- Fixed an issue where the debugger would throw an exception when using `ScriptDb`.
- Fixed an issue where `ScriptDb` 's `saveBatch()` method was returning the incorrect number of result objects.
- Fixed an issue where `UiApp` 's `setStyleAttribute()` method failed when using the attribute `backgroundImage`.
- Fixed an issue where the last modified date for standalone wasn't updating.
- Fixed an issue where `GmailThread` 's `moveToArchive()` method wasn't working on threads in the trash.
- Fixed an issue where ampersands in `UiApp` 's `Hidden` widgets were being escaped incorrectly.
- Fixed an issue where `UiApp` 's `validateOptions()` method always threw an error.

Feature

- Added the ability to list alternate sender addresses using `GmailApp.getAliases()` and use them in `GmailApp.sendEmail()` with the advanced option "from".
- Created the class `GmailAttachment`, which is the same as a `Blob` but provides a `getSize()` method that isn't subject to quota restrictions.
- Added the ability to set a custom app icon for web apps published to the Chrome Web Store. This is the icon that shows up on Chrome's New Tab Page. More information on the [Publishing to the Chrome Web Store page](./guides/support/sunset.md#publishing-1).
- Added the ability to close containing dialogs from `HtmlService` pages. More information on the [Html Service page](./guides/html.md#closing-dialogs).

Change

- Improved JavaScript execution performance.
- Removed the "File -> New -> From Script Template" option in the script editor.
- Limited the ability to programmatically submit a form in JavaScript served by the `HtmlService`. Calling `form.submit()` is only allowed when done in the callback for a user-generated click or keypress event.

## September 28, 2012

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=874) where certain files could not be copied via `DocsList.copy()`.

## September 21, 2012

Feature

- Fixed an issue where arrays retrieved from `ScriptDb` didn't behave properly.
- Fixed an issue where the execution transcript would stop recording after `Browser.msgBox()` was called.
- Fixed an issue where scriptlet tags in `HtmlTemplates` behaved strangely when in attribute values.
- Fixed a problem that prevented scripts from sending `POST` requests to other scripts that used the `ContentService`.

Deprecated

Updated `DocsList.getFilesByType()` to accept values from the [`DocsList.FileType`](./guides/support/sunset.md) enumeration. Passing in string values for the document type is deprecated but still functional. (Issue 1755)

Change

Enabled SSL certificate validation for UrlFetchApp requests. If you wish to disable this behavior you can set the advanced option validateHttpsCertificates to "false".

Feature

Added a `setLabelSeparator()` method to [`CategoryFilterBuilder`](./reference.md#setLabelSeparator), to allow for label separator strings to be used.

## September 07, 2012

Change

- Fixed an issue where selecting a value from a `DateBox` would cause the value changed handler to fire twice.
- Fixed an issue where Chart dashboard `StringFilters` ignored the `MatchType` that was set.

Feature

Added an `isDeleted()` method to `SitesApp` 's [`Page` class](./reference.md#isDeleted).

## August 30, 2012

Feature

- Added methods to delete [`ScriptProperties`](./reference/properties/script-properties.md) and [`UserProperties`](./reference/properties/user-properties.md). Additional methods were also added to set multiple properties, get all properties, etc.
- Added a [`setOption` method](./reference/charts/area-chart-builder.md#setOption) to the various chart builders to make it possible to set advanced options for Charts.

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=712) with scrolling in the script editor so that line numbers will be displayed even when horizontally scrolling on long lines.

## August 22, 2012

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1750) where only one project was copied when making a copy of a Spreadsheet with multiple projects.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1742) where scripts were not installing properly from the Script Gallery.

## August 20, 2012

Feature

- `UiApp` widgets now have a [`setStyleAttributes` method](./guides/support/sunset.md#setStyleAttributes) which allow you to set multiple attributes at once.
- Added a new [`log` method](./reference/base/logger.md#log) to the Logger service which accepts a format string and a variable number of values to insert.

Change

- Increased the allowed file upload size in web apps to 50MB, to match the limit in the `DocsList` service.
- Streamlined the process for [publishing web apps to the Chrome Web Store](./guides/support/sunset.md) so that developers no longer need to manually verify web app URLs via Webmaster Central.

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1623) where the `DatePicker` widget returned strange values for dates before 1970.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1012) where all day event series weren't scheduled correctly in certain timezones.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1660) that prevented an HTML form element from being set in a `google.script.run` callback.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1539) where embedded charts were returned with the wrong data type.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1304) where Charts ignored advanced parameters of data source URLs.

## August 03, 2012

Fixed

- Fixed an issue where the "parameter" field in the `doGet()` event argument was missing if no parameters were passed in the URL.
- Fixed two issues where the `DatePicker` and `DateBox` UI components didn't have a `setName()` method, preventing them from being used as callback elements in UI apps.
- Fixed an issue where the `DatePicker` part of a `DateBox` didn't inherit the z-index style.
- Fixed an issue where `HtmlTemplates` could not be loaded within other templates.
- Fixed an issue where users would receive "Summary of failures for Apps Script" error for a failed trigger, even after the script was deleted.
- Fixed an issue where incorrect JsDoc comments in a library would prevent auto-complete from working on it.

Feature

Added a `getThumbnail()` method to the `DocsList` service's [`File` class](./guides/support/sunset.md#getThumbnail).

## July 26, 2012

Fixed

- Fixed an error in the Gmail script template from the welcome screen.
- Fixed an issue where saving an object in `ScriptDb` with an empty string key causes errors.
- Fixed an issue where scripts were not being copied when a Site was copied.
- Fixed an issue with `DatePicker.setValue`.

Feature

- Added support for chatting with script collaborators in the Script Editor. When two or more people are collaborating on a script, a chat panel will be visible on the right-hand side of the Script Editor.
- Added the ability to support autocomplete for included libraries when they are included in development mode.
- Added `UiInstance.remove` methods to remove widgets from `UiInstance`.
- Added support for Google Analytics via the `Analytics` Service.

Change

Made improvements to the speed of handling large batches of data in `ScriptDb`.

## July 19, 2012

Change

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1519) where setting an empty key in `Script` Properties or `User` Properties resulted in a "Data storage error" message.

## July 16, 2012

Change

Updated the link to the support page on the [Google Apps Script Dashboard](https://script.google.com/a/google.com/dashboard).

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1523) where the script editor could not be accessed for some container-bound scripts.

## June 27, 2012

Feature

- Launched [script.google.com](https://script.google.com/) and the ability to create [standalone scripts](./guides/bound.md) that are not bound to a container like Google Sheets or Google Sites.
- Launched the [`Html` Service](./guides/html.md), which you can use to create web apps using HTML, CSS, and JavaScript. The [reference documentation is here](./reference/html.md).
- Launched the [`Content` Service](./reference/content.md), which you can use to serve text in various forms, such as text, XML, RSS, or JSON.
- Launched [`ScriptDb`](./guides/support/sunset.md), a JavaScript object database for Apps Script. The [reference documentation is here](./guides/support/sunset.md).
- Added the ability to [publish web apps](./guides/web.md#deploying) with versioning and with the option to have them execute as the user accessing the app.
- Added support for [registering Apps Script web apps in the Chrome Web Store](./guides/support/sunset.md), making it quick and simple to publish and distribute your web apps.

## June 19, 2012

Change

Added a scrollbar to the file panel in the Script Editor,

## June 18, 2012

Change

- The Script Editor's user interface has been updated.
- **Publish > Publish as service** is now **Publish > Deploy as web app**. Additionally, for new scripts, before you can deploy them as a web app, you must first save a version of the script. You can then choose which version should be served when the script is deployed as a web app. For existing scripts that were already published as a service, you will still be able to access the published URL from the **Deploy as web app** dialog, but to make additional changes, you will need to save a version of the script.

## June 14, 2012

Feature

- Added the ability to create, modify, and remove [Embedded Charts](./reference/spreadsheet/embedded-chart.md) in Google Sheets. Embedded Charts are charts that live solely within Spreadsheets and use multiple ranges of data for their datasource.
- Added support to the [`Domain` Service](./index.md) for `NicknameManager` and `GroupsManager`.

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1400) where PDF documents uploaded and saved to Google Drive were being saved as blank files.

## June 08, 2012

Change

Simplified sharing settings for scripts. For new script projects, the script will inherit the permissions of its parent. For example, if a script is associated with a Spreadsheet, and user1@example.com has edit access to the Spreadsheet, then user1@example.com will have edit access to the script. The extra blue Share button will no longer be present on these newly created scripts, since the permissions are tied to those of the parent. For scripts created prior to June 8, 2012, the Share button will remain if the checkbox to "Allow document collaborators to edit project" or "Allow site collaborators and owners to edit project" was not selected for that script. For more information see [Security](./guides/services/authorization.md). If you would like to have script source that cannot be modified by the editors of your Spreadsheet or Site, then you can use [Script Libraries](./guides/libraries.md).

## May 21, 2012

Feature

- Launched [Script Libraries](./guides/libraries.md) and [Versions](./guides/versions.md) in response to this [feature request](http://code.google.com/p/google-apps-script-issues/issues/detail?id=40).
- Added `getDescription()` and `setDescription()` methods to `File` and `Folder`.

Change

- Updated the **Help > Support** link in the Script Editor to point to this [support page](./support.md).
- Set a limit of 20 triggers per script. This limit takes effect as of May 21. For scripts created prior to that date, which already have more than 20 triggers, they will keep the existing triggers, but cannot add new ones without removing existing triggers.

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1320) with `ClockTriggerBuilder.nearMinute`, where invalid minute values were sometimes created.

## May 11, 2012

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1267) with the debugger, so that it no longer fails when a breakpoint is set on certain classes from the JDBC service.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=910) with `UiApp`, so that modifying a spreadsheet cell from a submit handler no longer causes an empty file to be downloaded.

## May 04, 2012

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1295) with `Site.getOwners()`, `Site.getReaders()`, `Site.getEditors()`, where the methods were failing in some cases.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1290) with `ScriptApp.getService().getUrl()` so that the method can be called by users other than just the script owner.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1285) with the Script Editor, where developers were prompted to recover a draft version of another file in the same project, rather than the one being edited.
- Fixed an issue with resuming continuations (such as in a script that waits for user input via message box), so that the scripts correctly honor the 6 minute script execution limit.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=967) with `UiApp.ClientHandler.setValue()` so that it doesn't return errors and also works for checkboxes.

Feature

Added a [`DocumentApp.HorizontalAlignment.JUSTIFY`](./reference/document/horizontal-alignment.md) value to the `DocumentApp.HorizontalAlignment` enumeration.

Announcement

Launched the [Google Apps Script Dashboard](https://docs.google.com/macros/dashboard) so that developers can view service health and quota limits.

## April 19, 2012

Feature

- Added the [method `everyMinutes()`](./reference/script/clock-trigger-builder.md#everyMinutes) to `Script` Service.

Change

- Items in the Help menu in the Script Editor now open in a new tab instead of a new window.
- Made some modifications to the calculation of CPU time for scripts running on triggers, so that time spent waiting on certain processes is not counted toward that limi

## April 16, 2012

Fixed

- Fixed an issue in the Script Editor where the debugger would not terminate after executing the last statement of a script.
- Fixed an issue where an embedded image would not copy properly in a Google Document.
- Fixed an issue where a shared folder would not show up in "Collections shared with me".

Change

- Increased the size of the files that can be created via `DocsListApp.createFile()` from 2MB to 50MB.
- Increased the allowed argument value for `Utilities.sleep()` from 5000 (5 seconds) to 300000 (5 minutes).
- Updated the script failure notification emails to include the name and a link of the spreadsheet that contains the failed script in response to this issue
- Increased the allowed attachment size for emails sent via `GmailApp` and `MailApp` from 5MB to 25MB.

Feature

- Added method to `DocsList` service to [`getRootFolder()`](./guides/support/sunset.md#getRootFolder).
- Added method to `File` and `Folder` classes to check whether the item [`isTrashed()`](./guides/support/sunset.md#isTrashed).

## April 11, 2012

Change

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=924) where files and collections in Google Docs could not be shared with groups.

## April 04, 2012

Change

Modified document collaboration and sharing rules to make them consistent with what is possible in the user interface.

Feature

Launched the [`Script` service](./reference/script.md) in response to this [feature request](http://code.google.com/p/google-apps-script-issues/issues/detail?id=147), which allows developers to [programmatically set triggers](./guides/triggers/events.md#ScriptService) and manage the publishing of scripts as a service.

## March 20, 2012

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1050) where `Spreadsheet.insertSheet()` failed to properly copy a sheet when given a `{template:sheet_obj}` parameter.

## March 13, 2012

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1110) where functions in the `Utilities` Service were not handling UTF-8 strings correctly.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1115) where text in a `ListBox` widget was being unnecessarily HTML-encoded.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1180) where `Anchor.setWordWrap()` was throwing errors.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=310) with `UiApp` panels that launch from a Google Spreadsheet, where the **X** to close was not displaying if the title of the application was not set.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=675) in the GUI Builder where setting the visibility for a widget to false was not working.

Feature

Added the ability to set the subject line via the `subject` field in the advanced arguments for [`GmailMessage.forward()`](./reference/gmail/gmail-message.md#forward).

## March 07, 2012

Feature

- Added the ability to set the target for an [Anchor](./guides/support/sunset.md) in UI app, in response to this [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=828).
- Added the ability to include a limited set of HTML tags when working with UiApp widgets, in response to this [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=175). Here is the list of HTML tags that are permitted: `B`, `BLOCKQUOTE`, `BODY`, `BR`, `CENTER`, `CAPTION`, `CITE`, `CODE`, `DIV`, `EM`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `HR`, `I`, `LABEL`, `LEGEND`, `LI`, `OL`, `P`, `SPAN`, `STRONG`, `SUB`, `SUP`, `TABLE`, `TBODY`, `TD`, `THEAD`, `TITLE`, `TR`, `TT`, `UL`
- Added support for sheet protection, in reference to this [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=123). Introduced two new methods: `Sheet.getSheetProtection` and `Sheet.setSheetProtection`, as well as a new `PageProtection` class.

Change

- Added documentation for [`DocsListDialog`](./guides/support/sunset.md). "Unexpected error" is no longer thrown when trying to display it.
- The Script Editor's menus have been updated:
	- A new Resources menu is added.
		- The Share menu is renamed to Publish.
		- Triggers' management is moved to Resources menu.
		- Google API Services console is moved to Resources menu.
		- Links under the Help menu now open in a new tab rather than a new window in Firefox 9.x and Chrome.
- Changed the window that appears after Authorization to the script has been granted. It is now displayed in a new tab rather than a pop-up. This tab will no longer close automatically after 5 seconds.
- Updated the appearance of the warning bar that is displayed when running a script that is published as a service by a user other than the owner, in response to this issue.

## February 12, 2012

Feature

- Added methods to the `Document` class to [`addHeader()`](./reference/document/document.md#addHeader) and [`addFooter()`](./reference/document/document.md#addFooter).
- Added a [`merge()` method](./reference/spreadsheet/range.md#merge) to the `Range` class.

Fixed

- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1069) with using tab key to format code in the script editor.
- Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1036) where email quotas were too restrictive when executed by an anonymous user from a script running as a service.

## February 06, 2012

Feature

- Added a [feature](http://code.google.com/p/google-apps-script-issues/issues/detail?id=60) to cancel running scripts, when the script is run from the script editor.
- Added [`getEventSeriesById()`](./reference/calendar/calendar.md#getEventSeriesById) to Calendar.

## January 31, 2012

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=1020) where `Anchor.setWordWrap()` was not working.

## January 24, 2012

Fixed

- Fixed some issues where autocomplete stopped working after certain statements were typed in the script editor.
- Fixed an issue with the sizing of images when using `Document.appendImage()`.
- Fixed an issue where an error occurred when opening a document after the `Document.saveAndClose()` method had previously been called.

## January 11, 2012

Change

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=925) with `Paragraph.setHeading()` where text was not formatted as expected.

## December 14, 2011

Fixed

Fixed an [issue](http://code.google.com/p/google-apps-script-issues/issues/detail?id=930) with the debugger, where it would close when stepping into a function that is located in a different file.

Feature

- Enabled `Spreadsheet.show()` in autocomplete.
- Added the ability to copy and paste from the Revision History.
- Added support for the [`Groups` Services](./reference/groups.md).
- Added support for the [`Domain` Services](./index.md).
- Added support for the [`AdSense` Services](./advanced/adsense.md).

## November 07, 2011

Fixed

- Fixed an issue with `Session.getTimezone()` returning incorrect values.
- Fixed an issue with the **Edit > Find** feature in the script editor.

Feature

- Added the [`Lock`](./reference/lock.md) and [`Cache`](./reference/cache.md) services.
- Added support for [client handlers and validators](./guides/support/sunset.md).

## September 26, 2011

Feature

- Added support for `inlineImages` when sending emails with [`MailApp.sendEmail()`](./reference/mail/mail-app.md#sendEmail).
- Added the [Charts Services](./reference/charts.md), which allow users to dynamically create charts and embed them in emails, UiApp, or export them as images.
- Added the [Prediction Services](./index.md), which allow users to access a cloud hosted machine learning service that makes it easy to build smart apps. Added the [Tasks Services](./advanced/tasks.md), which allow users to manage tasks and task lists. Added the [`UrlShortener` Services](https://developers.google.com/apps-script/service_urlshortener), which let you create, inspect, and manage goo.gl short URLs.

Fixed

Fixed an issue where an error occurred if an empty `ListBox` was used as a `callback` element.

## August 04, 2011

Feature

Added support for `ScrollPanel` to the GUI Builder.

## July 25, 2011

Feature

Added supports for projects in Apps Script.

Feature

Fixed an issue where `Xml.element` failed if the child elements were `XmlElements`.

## July 14, 2011

Fixed

Fixed an issue where [`GmailApp.getUserLabelByName()`](./reference/gmail/gmail-app.md#getUserLabelByName) failed for label names that contained spaces.

## May 04, 2011

Feature

- Added the [`Gmail` service](./reference/gmail.md).
- Added the [`Document` service](./reference/document.md).
- Introduced the [GUI Builder](./guides/support/sunset.md).

## April 15, 2011

Feature

Added an `appendRow()` method to Spreadsheet.

Fixed

Fixed an issue with [`UiApp.getActiveApplication().setStyleAttribute()`](./guides/support/sunset.md#setStyleAttribute) for 'cursor.'

## March 21, 2011

Change

- Improved performance of the script editor. The editor can now handle large scripts without any issues in most major browsers.
- Improved the internal error handling of the Spreadsheet Service, so that fewer errors are received by users.
- Increased the timeout of `UrlFetch` to 30 seconds.

Feature

- Binary files can be uploaded using `FileUpload`.
- Enhanced `ListBox` to function as a multi-select `ListBox`.

Fixed

- Fixed a minor bug Script as a Service related to expired tokens.
- Breakpoint in debugger now clears as expected.
- [`SpreadsheetApp.getActiveSheet()`](./reference/spreadsheet/spreadsheet-app.md#getActiveSheet) when executed in `Installable onEdit` returns the correct sheet name.

## March 08, 2011

Fixed

- Fixed an issue which improves performance of various Services.
- Fixed an issue with Authorization of scripts.

Feature

Added a method in `Utilities` class that parses CSV text.

## January 21, 2011

Announcement

Introducing the Debugger! The debugger significantly enhances the ability of Apps Script users to debug their scripts. With the debugger, users can set breakpoints, inspect variables, step-in and step-out of functions.

## October 21, 2010

Feature

Added integration with Google Sites, so that Apps Script can now be run from within Google Sites. [Read more here.](./overview.md)

## October 16, 2010

Feature

- Added ability for users to create new recurring calendar events through [`CalendarApp.newRecurrence()`](./reference/calendar/calendar-app.md#newRecurrence) and [`Calendar.createEventSeries()`](./reference/calendar/calendar.md#createEventSeries).
- Added ability to access existing event series through [`CalendarEvent.getEventSeries()`](./reference/calendar/calendar-event.md#getEventSeries).
- Added ability for users to modify or delete an entire event series through [`CalendarEventSeries`](./reference/calendar/calendar-event-series.md).

## September 17, 2010

Feature

- Added new methods to `CalendarEvent` to get the creation date and the date the event was last updated: [`getDateCreated()`](./reference/calendar/calendar-event.md#getDateCreated) and [`getLastUpdated()`](./reference/calendar/calendar-event.md#getLastUpdated).
- Added a new method to `Contact` to get the date a contact was last updated: [`getLastUpdated()`](./reference/contacts/contact.md#getLastUpdated).

Change

- Fixed two issues with `Calendar.getEvents()`. `GetEvents` previously returned only the first instance of a recurring event in a given time range. Now it returns all instances of the recurring event in the given time range. Additionally, editing the instance of the recurring event previously would edit the entire series. Now, editing an instance of a recurring event edits only the particular instance.
- Fixed an issue where the unpublished version of `onInstall` was being run for scripts in the Script Gallery.
- Fixed an issue where users could not type `(` in the script editor when the autocomplete popup was visible.
- Fixed an issue where `getActiveSheet` was not working when called from `onEdit` events. Fixed an issue with UiApp where the UI panels were not displayed properly and an "Error encountered: An unexpected error occurred" error message was displayed.

## August 16, 2010

Feature

- Added `Spreadsheet.show()` to the script editor autocomplete and the documentation.
- Clarified the use of `Session.getUser()` and added two new methods: `Session.getActiveUser()` and `Session.getEffectiveUser()`.
- Added support for persistent storage in scripts via `UserProperties` and `ScriptProperties`. Script Properties and User Properties are also available from **File > Properties** in the script editor.
- Added several new methods to the `Contact` class: `Contact.getGivenName()`, `Contact.setGivenName()`, `Contact.getMiddleName()`, `Contact.setMiddleName()`, `Contact.getFamilyName()`, `Contact.setFamilyName()`, `Contact.getMaidenName()`, `Contact.setMaidenName()`, `Contact.getNickname()`, `Contact.setNickname()`.
- Major improvements to the Sites service, fixing many issues and adding new functionality.
- Added support for find and replace in the script editor.
- `UiApp` is now available to all users. Previously, it was only available to Google Apps Premier domains.
- The timezone for a script can now be set from **File > Properties** in the script editor.
- The user interface for time-based triggers has been updated to make it more clear that the events are triggered between N and N+1 hours.
- The script timezone is now visible in the script triggers dialog.
- Revision history for scripts is now available from **File > See revision history** in the script editor.
- Added two new methods to the Utilities class provide JSON support: `Utilities.jsonParse()` and `Utilities.jsonStringify()`.
- Added support for outbound OAuth requests. See `UrlFetchApp.addOAuthService()`.
- Added a new method to class `Spreadsheet` to get the form URL: `Spreadsheet.getFormUrl()`.
- Added a new `Blob` class to simplify moving data between different Google Apps Script services.

## August 01, 2010

Fixed

Fixed an issue with the `Sheet.getFrozenRows`, where an error was returned in some cases.

Feature

- Added two new methods to the `Sheet` class for getting frozen rows and columns: `Sheet.getFrozenRows()` and `Sheet.getFrozenColumns()`.
- Added sorting methods: `Sheet.sort()` and `Range.sort()`.
- Added methods to get row height and column width in a Sheet: `Sheet.getRowHeight()` and `Sheet.getColumnWidth()`.

## July 12, 2010

Change

- Added two new methods to the Soap service for setting and getting the SOAP endpoint: `WsdlService.getEndpointOverride()` and `WsdlService.setEndpointOverride()`.
- Added a method to check if there is remaining quota for sending emails for the current day: `MailApp.getRemainingDailyQuota()`.

Fixed

- Fixed an issue with the `Contacts` service, where a 'Mismatch: etags' error was thrown when a contact was modified more than once.
- Fixed an issue where a popup dialog with the text "Error encountered: An unexpected error occurred" was displayed when the change handler for a `ListBox was called`, but no app was returned by the change handler.
- Fixed an issue where `ListBox.addItem` wasn't working after calling `getElementById`.
- Fixed an issue with `Utilities.formatDate`, where it was previously always formatting the date into GMT.

Change

Line numbers in error messages are now denoted with (line nnn), rather than (# nnn), where nnn is the line number.
