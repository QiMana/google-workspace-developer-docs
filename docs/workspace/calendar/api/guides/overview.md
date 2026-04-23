---
source: https://developers.google.com/workspace/calendar/api/guides/overview
root: workspace
fetched_at: 2026-04-23T15:24:48.183Z
---

# Google Calendar API overview

The Google Calendar API is a RESTful API that can be accessed through explicit HTTP calls or using the Google Client Libraries. The API exposes most of the features available in the Google Calendar Web interface.

Following is a list of common terms used in the Google Calendar API:

*[Event](../v3/reference/events.md)*

An event on a calendar containing information such as the title, start and end times, and attendees. Events can be either single events or [recurring events](../concepts/events-calendars.md#recurring_events). An event is represented by an [Event resource](../v3/reference/events.md#resource-representations).

*[Calendar](../v3/reference/calendars.md)*

A collection of events. Each calendar has associated metadata, such as calendar description or default calendar time zone. The metadata for a single calendar is represented by a [Calendar resource](../v3/reference/calendars.md).

*[Calendar List](../v3/reference/calendarList.md)*

A list of all calendars on a user's calendar list in the Calendar UI. The metadata for a single calendar that appears on the calendar list is represented by a [CalendarListEntry resource](../v3/reference/calendarList.md). This metadata includes user-specific properties of the calendar, such as its color or notifications for new events.

*[Setting](../v3/reference/settings.md)*

A user preference from the Calendar UI, such as the user's time zone. A single user preference is represented by a [Setting Resource](../v3/reference/settings.md).

*[ACL](../v3/reference/acl.md)*

An access control rule granting a user (or a group of users) a specified level of access to a calendar. A single access control rule is represented by an [ACL resource](../v3/reference/acl.md).

## Related topics

- To learn about developing with Google Workspace APIs, including handling authentication and authorization, refer to [Get started as a Google Workspace developer](../../../guides/get-started.md).
- To learn how to configure and run a simple Google Calendar API app, read the [Quickstarts overview](../quickstart/js.md).

| ![](https://fonts.gstatic.com/s/i/productlogos/youtube/v9/192px.svg) | Want to see the Google Calendar API in action?  The Google Workspace Developers channel offers videos about tips, tricks, and the latest features. |
| --- | --- |
