---
source: https://developers.google.com/workspace/add-ons/calendar/conferencing/build-conference-addons
root: workspace
fetched_at: 2026-04-23T15:22:32.262Z
---

# Build conferencing add-ons

## Page Summary

- This guide outlines the process of building a Google Workspace add-on that integrates third-party conferencing solutions into Google Calendar, primarily for conference providers.
- The development process involves enabling the Calendar advanced service, defining conference solutions within the add-on's manifest, and writing code to manage conference creation and synchronization with Google Calendar events.
- Developers need to implement code to handle conference creation based on Google Calendar event details and ensure synchronization between the third-party system and Google Calendar to reflect event updates.
- Add-ons can optionally include a settings page to allow users to customize conference parameters or add notes, enhancing user control and flexibility.
- The guide builds upon the general Google Workspace add-on development process, focusing on the conferencing-specific steps and considerations.

The procedure to build a Google Workspace add-on that provides Calendar third-party conferencing solutions is the same as the [procedure for building add-ons](https://developers.google.com/workspace/add-ons/how-tos/building-workspace-addons), with a few additional steps (shown in bold below):

1. Choose an add-ons project owner and collaborators.
2. Create an Google Apps Script project.
3. Design your add-on appearance and behavior.
4. **[Enable the Calendar advanced service](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services)**.
5. Configure the add-on project manifest.
	1. **[Define conference solutions in the manifest](#define_solutions).**
6. Write code to define the add-on's appearance and behavior, using the built-in Apps Script [Card service](https://developers.google.com/apps-script/reference/card-service/card-service).
	1. **[Write code to manage conference solutions](#add_code), using Apps Script's built-in [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data) service**.
		2. **(Optional) [Create and configure an add-on settings page](#add_settings).**
7. Verify your add-on's OAuth scopes.
8. Test the add-on within the [host applications](https://developers.google.com/workspace/add-ons/guides/glossary#host_or_host_application) it extends.
9. Publish the add-on.

This page provides a general overview of each of the new steps (see [Building add-ons](https://developers.google.com/workspace/add-ons/how-tos/building-workspace-addons) for an overview of the other steps).

## Enable the Calendar advanced service

The [Calendar advanced service](https://developers.google.com/apps-script/advanced/calendar) lets you call the [Calendar API](https://developers.google.com/workspace/calendar/overview) directly from an Apps Script project. Some standard operations such as [Calendar event syncs](#sync_calendar_changes) can only be performed using the advanced service. Before you can use the advanced service, enable it for your add-on project.

You can [enable the Calendar advanced service](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services) from the Apps Script editor. Be sure to enable the API in *both* the editor **Advanced Google Services** dialog and the Google Cloud console.

For consistency and accuracy, use either the Calendar advanced service or the [built-in Calendar service](https://developers.google.com/apps-script/reference/calendar), not both. If you enable the Calendar advanced service, use it exclusively throughout your code.

## Define conference solutions in the manifest

The add-on manifest provides the basic information that Calendar needs to display and activate the add-on conference solutions. Your add-on manifest must define (in its [`calendar` section](https://developers.google.com/apps-script/manifest/calendar-addons)) one or more conference solutions that describe the types of third-party conferences Calendar events can use.

See [Manifests](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests) for details on how to configure your add-on's manifest.

## Add code to create and sync conferences

After you create a script project, you can add code to define the add-on's conferencing-related behavior. You can use the [Calendar advanced service](https://developers.google.com/apps-script/advanced/calendar), the [ConferenceData service](https://developers.google.com/apps-script/reference/conference-data), and other Apps Script services to control this behavior.

As you add conference handling code to your add-on, add code to [create conferences](#create_conferences), [sync calendar changes](#sync_calendar_changes), and optionally [add a settings page](#sync_calendar_changes).

Refer to the [add-on style guide](https://developers.google.com/workspace/add-ons/guides/workspace-style) as you code for guidelines on how to design your add-on user experience.

### Create conferences

Your add-on must be able to take information about the Calendar event and use it to create a conference on the third-party conference system. Implement one or more `onCreateFunction` methods that execute this process, and configure these methods in your add-on manifest.

For more details, see [Create third-party conferences](https://developers.google.com/workspace/add-ons/calendar/conferencing/create-conference).

### Sync calendar changes

After a conference is created and linked to a Calendar event, the conference often needs to be updated to reflect changes in the event. For example, if a user changes the time of the event, the conference data in the third-party conferencing system needs to be updated to reflect this. The process of updating the conference data in response to event changes is called *syncing*.

For more details, see [Sync calendar changes](https://developers.google.com/workspace/add-ons/calendar/conferencing/sync-calendar-changes).

## Add settings

You may want to have optional settings that let users configure your add-on. For example, you may want to let users to set conference parameters or notes that are attached to the conference.

Whenever you want to provide users some degree of control over the add-on behavior, you can provide those options in an add-on settings page. This is a web page (either hosted by the add-on script or hosted externally) that is opened when the user accesses the add-on settings within the Calendar UI.

Creating an add-on settings page is optional. For more details, see [Add settings](https://developers.google.com/workspace/add-ons/calendar/conferencing/add-settings).
