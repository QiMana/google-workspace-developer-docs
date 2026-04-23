---
source: https://developers.google.com/workspace/extend
root: workspace
fetched_at: 2026-04-23T15:28:38.630Z
---

# Extend the Google Workspace UI

## Page Summary

- Extend the Google Workspace UI to integrate your apps, enhance user productivity, or add new functionalities.
- Leverage Google Workspace add-ons to embed your app within core Workspace apps like Gmail, Drive, Calendar, Docs, Sheets, and Slides, primarily using card-based or iframe UI.
- Explore options like Editor add-ons to create custom menus, dialogs, and sidebars in Docs, Sheets, Slides, and Forms using Apps Script with HTML or iframe UI.
- Utilize Chat apps to interact with users through slash commands, dialogs, and link previews within Google Chat, built with AppSheet, Apps Script, or your own tech stack.
- Consider specialized extensions such as custom functions and macros for Sheets, Drive apps for Drive integration, and Classroom add-ons for educational enhancements.

This page describes your options for extending the Google Workspace user interface (UI). You can extend the Google Workspace UI for many reasons, including:

- Integrate your app or service into Google Workspace, so that users can use the app directly from one or more Google Workspace apps. For example, build a Google Workspace add-on that creates smart chips and link previews for your service inside Google Docs.
- Help Google Workspace users be more productive or improve their workflow. For example, build a Google Chat app that lets users report weekly timesheets directly from Google Chat.
- Add capabilities that aren't natively available in Google Workspace. For example, add a custom menu in Docs, Google Sheets, or Google Slides.

You can publish most of the options for extending the Google Workspace UI to the [Google Workspace Marketplace](https://workspace.google.com/marketplace), an online store where users can find and install third-party apps that integrate with Google Workspace.

## Overview of options for extending the Google Workspace UI

The following table lists the options for extending the Google Workspace UI and compares them by these characteristics:

- **Apps extended**: Lists the Google Workspace apps that you can extend with the given option.
- **Coding options**: Lists the ways that you can build, including:
	- **[AppSheet](https://support.google.com/appsheet/answer/11581986)**: A no-code development platform.
		- **[Apps Script](https://developers.google.com/apps-script)**: A cloud-based, low-code development platform based in JavaScript.
		- **Full dev**: Your own tech stack that supports your preferred coding language.
- **UI frameworks**: Indicates the types of UI frameworks that you can use to build each option, including:
	- **Card-based**: Card interfaces are predefined widgets and cards built with either the [Card Service](https://developers.google.com/apps-script/reference/card-service) using Apps Script or by returning properly formatted JSON to render cards with your preferred tech stack (full dev). Card-based interfaces don't require knowledge of HTML or CSS, and work well on both desktop and mobile clients.
		- **HTML**: Apps Script offers an [HTML service](https://developers.google.com/apps-script/guides/html) for developing web pages that can interact with server-side Apps Script functions. Interfaces developed with the HTML service are highly customizable, but require more manual work to create a great user experience.
		- **iframe**: iframes embed external content into Google Workspace and offer the most customizability for user interfaces.

Following the table are descriptions for each option.

<table><thead><tr><th width="25%">What you can build</th><th width="5%">Preview</th><th width="24%">Apps extended</th><th width="16%">Coding options</th><th width="14%">Card-based UI</th><th width="8%">HTML UI</th><th width="8%">iframe UI</th></tr></thead><tbody><tr><td><b><a href="#google-workspace">Google Workspace add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/google-workspace-add-on.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/gmail_2020q4/v11/192px.svg"> Gmail</div><div><img src="https://www.gstatic.com/images/branding/productlogos/drive_2020q4/v10/192px.svg"> Drive</div><div><img src="https://www.gstatic.com/images/branding/productlogos/calendar_2020q4/v13/192px.svg"> Calendar</div><div><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v2/192px.svg"> Chat</div><div><img src="https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg"> Docs</div><div><img src="https://www.gstatic.com/images/branding/productlogos/meet_2020q4/v8/192px.svg"> Meet</div><div><img src="https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg"> Sheets</div><div><img src="https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg"> Slides</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div><div><img src="https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg"> Full dev</div></td><td></td><td></td><td></td></tr><tr><td><b><a href="#link-previews">Link previews and smart chips | Google Workspace add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/link-previews.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg"> Docs</div><div><img src="https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg"> Sheets</div><div><img src="https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg"> Slides</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/appsheet/v5/192px.svg"> AppSheet</div><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div><div><img src="https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg"> Full dev</div></td><td></td><td></td><td></td></tr><tr><td><b><a href="#gmail-compose">Email drafts | Google Workspace add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/compose-time-add-on.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/gmail_2020q4/v11/192px.svg"> Gmail</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div><div><img src="https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg"> Full dev</div></td><td></td><td></td><td></td></tr><tr><td><b><a href="#meet-add-ons">Meeting main stage and side panel | Google Workspace add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/meet-add-on-main.png"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/meet_2020q4/v8/192px.svg"> Meet</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg"> Full dev</div></td><td></td><td></td><td></td></tr><tr><td><b><a href="#chat-apps">Google Chat apps | Google Workspace add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/chat-app.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v2/192px.svg"> Chat</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/appsheet/v5/192px.svg"> AppSheet</div><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div><div><img src="https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg"> Full dev</div></td><td></td><td></td><td></td></tr><tr><td><b><a href="#calendar-conferencing">Calendar conferencing | Google Workspace add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/calendar-conferencing-add-on.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/calendar_2020q4/v13/192px.svg"> Calendar</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div></td><td colspan="3"><p>Uses existing UI</p></td></tr><tr><td><b><a href="#editor-add-ons">Editor add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/editor-add-on.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg"> Docs</div><div><img src="https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg"> Sheets</div><div><img src="https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg"> Slides</div><div><img src="https://www.gstatic.com/images/branding/productlogos/forms_2020q4/v6/192px.svg"> Forms</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div></td><td></td><td></td><td></td></tr><tr><td><b><a href="#custom-functions">Custom functions | Editor add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/custom-function.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg"> Sheets</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div></td><td colspan="3"><p>Uses existing UI</p></td></tr><tr><td><b><a href="#macros">Macros | Editor add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/macros.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg"> Sheets</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div></td><td colspan="3"><p>Uses existing UI</p></td></tr><tr><td><b><a href="#custom-menus">Custom menus, dialogs, and sidebars | Editor add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/menu-sidebar.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg"> Docs</div><div><img src="https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg"> Sheets</div><div><img src="https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg"> Slides</div><div><img src="https://www.gstatic.com/images/branding/productlogos/forms_2020q4/v6/192px.svg"> Forms</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg"> Apps Script</div></td><td></td><td></td><td></td></tr><tr><td><b><a href="#drive-apps">Google Drive apps</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/drive-app.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/drive_2020q4/v10/192px.svg"> Drive</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg"> Full dev</div></td><td colspan="3"><p>Uses existing UI</p></td></tr><tr><td><b><a href="#classroom-add-ons">Google Classroom add-ons</a></b></td><td><img src="https://developers.google.com/static/workspace/images/preview-icon-blue.svg"> <img src="https://developers.google.com/static/workspace/images/extensibility-examples/classroom-add-on.svg"></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/classroom/v7/192px.svg"> Classroom</div></td><td><div><img src="https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg"> Full dev</div></td><td></td><td></td><td></td></tr></tbody></table>

## Types of app integrations

The following section explains the types of app integrations that you can build to extend the Google Workspace UI.

To share your feature with other Google Workspace users, you can publish a listing on the Google Workspace Marketplace. To learn which types of app integrations can be listed together, see [List app integrations together](https://developers.google.com/workspace/marketplace/list-multiple-app-integrations) in the Marketplace documentation.

### Google Workspace add-ons

![Google Workspace add-on example showing sidebar app integration.](https://developers.google.com/static/workspace/images/extensibility-examples/google-workspace-add-on.svg)

![Google Workspace add-on example showing sidebar app integration.](https://developers.google.com/static/workspace/images/extensibility-examples/google-workspace-add-on.svg)

Google Workspace add-ons are applications that integrate with Google Workspace apps. A add-on can extend multiple Google Workspace apps. Most often, the app opens in a sidebar from within the Google Workspace app that it extends.

In addition to building sidebars, you can build the following features for a add-on:

- [Smart chips](#link-previews) that preview links from a third-party service.
- [Interfaces for composing emails](#gmail-compose) in Gmail.
- A [web conferencing option](#calendar-conferencing) from events in Calendar.

[View Google Workspace add-ons documentation](https://developers.google.com/workspace/add-ons/overview)

![Google Workspace Marketplace logo for publishing.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![Google Apps Script logo for automated coding.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

![Google Developers logo for software development.](https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg) Full dev

**Extends the following apps**:

![Gmail logo for email app integrations.](https://www.gstatic.com/images/branding/productlogos/gmail_2020q4/v11/192px.svg) Gmail

![Google Drive icon for file integrations.](https://www.gstatic.com/images/branding/productlogos/drive_2020q4/v10/192px.svg) Drive

![Google Calendar icon for scheduling app.](https://www.gstatic.com/images/branding/productlogos/calendar_2020q4/v13/192px.svg) Calendar

![Google Chat logo for conversation tools.](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v2/192px.svg) Chat

![Google Docs icon for document editing.](https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg) Docs

![Google Meet logo for video tools.](https://www.gstatic.com/images/branding/productlogos/meet_2020q4/v8/192px.svg) Meet

![Google Sheets logo representing spreadsheet apps.](https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg) Sheets

![Google Slides icon for presentation apps.](https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg) Slides

**Available UI frameworks**:

![Card Framework icon for UI design.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/content_copy/default/24px.svg) Card framework

---

#### Link previews and smart chips

![Link preview example showing a descriptive smart chip.](https://developers.google.com/static/workspace/images/extensibility-examples/link-previews.svg)

![Link preview example showing a descriptive smart chip.](https://developers.google.com/static/workspace/images/extensibility-examples/link-previews.svg)

Google Workspace add-ons that extend Docs can create custom link previews from a third-party service. Similar to smart chips that Docs generates for mentions of a person, file, calendar event, or other entity within a Google Workspace application, an add-on can generate a smart chip for a third-party link and show a preview card when someone hovers over the chip.

You can add link previews to existing Google Workspace add-ons or create a separate add-on specifically for link previews.

[View link previews and smart chips documentation](https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips)

![Google Workspace Marketplace logo for publishing.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![AppSheet logo for no-code development.](https://www.gstatic.com/images/branding/productlogos/appsheet/v5/192px.svg) AppSheet

![Google Apps Script icon for automation scripts.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

![Google Developers icon for full stack dev.](https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg) Full dev

**Extends the following apps**:

![Google Docs icon for document extension tools.](https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg) Docs

![Google Sheets icon for spreadsheet tool extension.](https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg) Sheets

![Google Slides icon for presentation tool extension.](https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg) Slides

**Available UI frameworks**:

![Card framework icon for UI components.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/content_copy/default/24px.svg) Card framework

---

#### Email drafts

![Email draft example showing a custom compose interface.](https://developers.google.com/static/workspace/images/extensibility-examples/compose-time-add-on.svg)

![Email draft example showing a custom compose interface.](https://developers.google.com/static/workspace/images/extensibility-examples/compose-time-add-on.svg)

Google Workspace add-ons that extend Gmail can provide a custom interface when the user composes new messages or replies to existing messages. To use this interface, users open the add-on from within the email draft, either at the bottom of the draft or in the **More options** menu.

[View email drafts documentation](https://developers.google.com/apps-script/add-ons/gmail/extending-compose-ui)

![Google Workspace Marketplace logo for publishing.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![Google Apps Script icon for coding tools.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

![Google Developers logo for professional development.](https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg) Full dev

**Extends the following apps**:

![Gmail logo representing email integration.](https://www.gstatic.com/images/branding/productlogos/gmail_2020q4/v11/192px.svg) Gmail

**Available UI frameworks**:

![Card framework logo for design system.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/content_copy/default/24px.svg) Card framework

---

#### Meeting main stage and side panel

![Meet add-ons example showing main stage collaboration.](https://developers.google.com/static/workspace/images/extensibility-examples/meet-add-on-main.png)

![Meet add-ons example showing main stage collaboration.](https://developers.google.com/static/workspace/images/extensibility-examples/meet-add-on-main.png)

Google Workspace add-ons that extend Meet let you embed your app into a meeting's main stage or side panel interface where users can discover, share, and collaborate in your app without leaving Meet.

Unlike other Google Workspace add-ons, Meet add-ons don't use the card framework UI. Instead, you embed your app using an iframe.

[View Meet add-ons SDK documentation](https://developers.google.com/meet/add-ons/guides/overview)

![Google Workspace Marketplace logo for publication.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![Google Developers logo for full stack tools.](https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg) Full dev

**Extends the following apps**:

![Google Meet logo for video meetings.](https://www.gstatic.com/images/branding/productlogos/meet_2020q4/v8/192px.svg) Meet

**Available UI frameworks**:

![Iframe icon for embedded web application.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/iframe/default/24px.svg) iframe

---

#### Google Chat apps

![Chat app example showing message interaction.](https://developers.google.com/static/workspace/images/extensibility-examples/chat-app.svg)

![Chat app example showing message interaction.](https://developers.google.com/static/workspace/images/extensibility-examples/chat-app.svg)

Chat apps bring resources and services into Chat. You can design Chat apps to interact with users in many ways, including:

- [Respond to commands](https://developers.google.com/workspace/add-ons/chat/commands) with a text message or card message.
- [Open a dialog](https://developers.google.com/workspace/add-ons/chat/dialogs) to help users complete multi-step processes, like filling in form data.
- [Preview links](https://developers.google.com/workspace/add-ons/chat/preview-links) by attaching cards with helpful information that let users take action directly from the conversation.

[View Chat apps documentation](https://developers.google.com/workspace/add-ons/chat)

![Google Workspace Marketplace icon for app publication.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![AppSheet logo for building no-code apps.](https://www.gstatic.com/images/branding/productlogos/appsheet/v5/192px.svg) AppSheet

![Google Apps Script icon for automated task coding.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

![Google Developers logo for professional software engineering.](https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg) Full dev

**Extends the following apps**:

![Google Chat logo for conversation extensions.](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v2/192px.svg) Chat

**Available UI frameworks**:

![Card framework icon for designing user interfaces.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/content_copy/default/24px.svg) Card framework

---

#### Calendar conferencing

![Calendar conferencing example showing integration with meeting events.](https://developers.google.com/static/workspace/images/extensibility-examples/calendar-conferencing-add-on.svg)

![Calendar conferencing example showing integration with meeting events.](https://developers.google.com/static/workspace/images/extensibility-examples/calendar-conferencing-add-on.svg)

If you're a web conferencing provider, you can build a Google Workspace add-on that extends Google Calendar with your conference solution. The add-on adds a conferencing option for Calendar events, letting users create and join those conferences directly from Calendar.

[View Calendar conferencing documentation](https://developers.google.com/apps-script/add-ons/calendar/conferencing/overview)

![Google Workspace Marketplace logo for published apps.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![Google Apps Script icon for conferencing integration shortcuts.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

**Extends the following apps**:

![Google Calendar icon for event synchronization settings.](https://www.gstatic.com/images/branding/productlogos/calendar_2020q4/v13/192px.svg) Calendar

**Available UI frameworks**:

Uses existing UI  

---

### Editor add-ons

![Editor add-on example showing Google Docs extension features.](https://developers.google.com/static/workspace/images/extensibility-examples/editor-add-on.svg)

![Editor add-on example showing Google Docs extension features.](https://developers.google.com/static/workspace/images/extensibility-examples/editor-add-on.svg)

Editor add-ons are apps that extend Docs, Sheets, Slides, or Forms. Editor add-ons can only extend one app per add-on, but you can publish multiple Editor add-ons in the same Marketplace listing. Users open Editor add-ons from the **Extensions** menu in the app that they extend.

You can build the following features for an Editor add-on:

- A [custom function](#custom-functions) or [macro](#macros) in a Google Sheets spreadsheet.
- A [dialog or sidebar](#custom-menus) within the app that it extends.
- A [menu item](#custom-menus) that runs a script.

[View Editor add-ons documentation](https://developers.google.com/apps-script/add-ons/how-tos/building-editor-addons)

![Google Workspace Marketplace icon for software publication.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![Google Apps Script icon for editor extension development.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

**Extends the following apps**:

![Google Docs icon for document editing extensions.](https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg) Docs

![Google Sheets icon for spreadsheet automation features.](https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg) Sheets

![Google Slides icon for presentation creation tools.](https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg) Slides

![Google Forms icon for survey and form tools.](https://www.gstatic.com/images/branding/productlogos/forms_2020q4/v6/192px.svg) Forms

**Available UI frameworks**:

![HTML icon representing web-based user interface development.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/code/default/24px.svg) HTML

![Iframe icon for embedding external web content.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/iframe/default/24px.svg) iframe

---

#### Custom functions

![Custom function example showing Google Sheets formula usage.](https://developers.google.com/static/workspace/images/extensibility-examples/custom-function.svg)

![Custom function example showing Google Sheets formula usage.](https://developers.google.com/static/workspace/images/extensibility-examples/custom-function.svg)

Custom functions let you add more functions in Sheets. Users can find and use them just like any of the hundreds of built-in functions available in Sheets. You can publish a custom function as an Editor add-on.

[View custom functions documentation](https://developers.google.com/apps-script/guides/sheets/functions)

![Google Workspace Marketplace logo for publication options.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

**Extends the following apps**:

![Google Sheets icon for automating spreadsheet tasks.](https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg) Sheets

**Available UI frameworks**:

Uses existing UI  

---

#### Macros

![Macro example showing recorded spreadsheet automation steps.](https://developers.google.com/static/workspace/images/extensibility-examples/macros.svg)

![Macro example showing recorded spreadsheet automation steps.](https://developers.google.com/static/workspace/images/extensibility-examples/macros.svg)

Macros are recordings in Sheets that duplicate a specific series of UI interactions that you define. You can link a macro to a keyboard shortcut or run it from the **Extensions** \> **Macros** menu.

When you record a macro, Sheets automatically creates an Apps Script function that replicates the UI interactions. You can edit macros directly within the Apps Script editor. You can write macros from scratch in Apps Script, or take functions you've already written and turn them into macros. A macro definition can be included in an Editor add-on but cannot be published.

[View macros documentation](https://developers.google.com/apps-script/guides/sheets/macros)

**Coding options**:

![Google Apps Script logo for macro recording functionality.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

**Extends the following apps**:

![](https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg) Sheets

**Available UI frameworks**:

Uses existing UI  

---

#### Custom menus, dialogs, and sidebars

![Custom menu example showing editor toolbar customization options.](https://developers.google.com/static/workspace/images/extensibility-examples/menu-sidebar.svg)

![Custom menu example showing editor toolbar customization options.](https://developers.google.com/static/workspace/images/extensibility-examples/menu-sidebar.svg)

You can add custom menus, prompts, alerts, and HTML-based dialogs and sidebars to files in Docs, Sheets, Slides, and Forms as part of an Editor add-on. Custom menus appear next to the default menus of the app they extend. Dialogs, sidebars, prompts, and alerts are typically activated by user actions like menu item clicks, or by triggers like event-driven triggers.

[View custom menus, dialogs, and sidebars documentation](https://developers.google.com/apps-script/guides/menus)

**Coding options**:

![Google Apps Script icon for developing custom menus.](https://www.gstatic.com/images/branding/productlogos/apps_script/v10/192px.svg) Apps Script

**Extends the following apps**:

![Google Docs logo for document extension integration.](https://www.gstatic.com/images/branding/productlogos/docs_2020q4/v12/192px.svg) Docs

![Google Sheets icon for spreadsheet sidebar extensions.](https://www.gstatic.com/images/branding/productlogos/sheets_2020q4/v11/192px.svg) Sheets

![Google Slides logo for presentation sidebar extensions.](https://www.gstatic.com/images/branding/productlogos/slides_2020q4/v12/192px.svg) Slides

![Google Forms logo for form dialog extensions.](https://www.gstatic.com/images/branding/productlogos/forms_2020q4/v6/192px.svg) Forms

**Available UI frameworks**:

![HTML icon for building custom user interfaces.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/code/default/24px.svg) HTML

![Iframe icon for embedding third-party web tools.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/iframe/default/24px.svg) iframe

---

### Google Drive apps

![Drive app example showing file open options.](https://developers.google.com/static/workspace/images/extensibility-examples/drive-app.svg)

![Drive app example showing file open options.](https://developers.google.com/static/workspace/images/extensibility-examples/drive-app.svg)

If your app supports Drive files, you can integrate with the Drive user interface to present your app as an option to create or open files. Your app can appear in the **New** \> **More** menu and the **Open with** menu when a user right-clicks a file in Drive. When a user selects your app from either menu, your app opens in a new window.

[View Drive apps documentation](https://developers.google.com/drive/api/guides/about-apps)

![Google Workspace Marketplace icon for app discovery.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![Google Developers logo for professional app creation.](https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg) Full dev

**Extends the following apps**:

![Google Drive icon for file storage integration.](https://www.gstatic.com/images/branding/productlogos/drive_2020q4/v10/192px.svg) Drive

**Available UI frameworks**:

Uses existing UI  

---

### Google Classroom add-ons

![Classroom add-ons example showing assignment attachments.](https://developers.google.com/static/workspace/images/extensibility-examples/classroom-add-on.svg)

![Classroom add-ons example showing assignment attachments.](https://developers.google.com/static/workspace/images/extensibility-examples/classroom-add-on.svg)

Google Classroom add-ons let educators create attachments on coursework, announcements, or coursework materials. These attachments open third-party content in iframes in Classroom. The iframes open separate URLs depending on the user type and Classroom context.

[View Classroom add-ons documentation](https://developers.google.com/classroom/add-ons)

![Google Workspace Marketplace logo for publishing integrations.](https://www.gstatic.com/images/branding/productlogos/marketplace/v5/192px.svg) Publishable

**Coding options**:

![Google Developers icon for classroom tool integration.](https://www.gstatic.com/images/branding/productlogos/google_developers/v8/192px.svg) Full dev

**Extends the following apps**:

![Google Classroom logo for educator workflow tools.](https://www.gstatic.com/images/branding/productlogos/classroom/v7/192px.svg) Classroom

**Available UI frameworks**:

![Iframe icon for embedded educational web content.](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/iframe/default/24px.svg) iframe

---

## Related topics

- [Develop on Google Workspace](https://developers.google.com/workspace/guides/get-started): Get started with building for Google Workspace.
- [Google Workspace Marketplace](https://developers.google.com/workspace/marketplace/overview): Publish your app integrations to share your solutions with Google Workspace users.
