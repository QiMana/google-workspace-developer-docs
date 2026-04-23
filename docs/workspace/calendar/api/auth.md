---
source: https://developers.google.com/workspace/calendar/api/auth
root: workspace
fetched_at: 2026-04-23T15:24:47.265Z
---

# Choose Google Calendar API scopes

This document contains Google Calendar API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](../../guides/auth-overview.md).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](../../guides/configure-oauth-consent.md) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Calendar API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

The Calendar API supports the following scopes:

| Scope | Meaning |
| --- | --- |
| `https://www.googleapis.com/auth/calendar` | See, edit, share, and permanently delete all the calendars you can access using Google Calendar. |
| `https://www.googleapis.com/auth/calendar.readonly` | See and download any calendar you can access using your Calendar. |
| `https://www.googleapis.com/auth/calendar.freebusy` | View your availability in your calendars. |
| `https://www.googleapis.com/auth/calendar.events` | View and edit events on all your calendars. |
| `https://www.googleapis.com/auth/calendar.events.readonly` | View events on all your calendars. |
| `https://www.googleapis.com/auth/calendar.settings.readonly` | View your Calendar settings. |
| `https://www.googleapis.com/auth/calendar.addons.execute` | Run as a Calendar add-on. |
| `https://www.googleapis.com/auth/calendar.addons.current.event.read` | See the events you open in Google Calendar. |
| `https://www.googleapis.com/auth/calendar.addons.current.event.write` | Edit the events you open in Google Calendar. |
| `https://www.googleapis.com/auth/calendar.events.owned` | See, create, change, and delete events on Google calendars you own. |
| `https://www.googleapis.com/auth/calendar.events.owned.readonly` | See the events on Google calendars you own. |
| `https://www.googleapis.com/auth/calendar.events.freebusy` | See the availability on Google calendars you have access to. |
| `https://www.googleapis.com/auth/calendar.app.created` | Make secondary Google calendars, and see, create, change, and delete events on them. |
| `https://www.googleapis.com/auth/calendar.calendarlist` | See, add, and remove Google calendars you're subscribed to. |
| `https://www.googleapis.com/auth/calendar.calendarlist.readonly` | See the list of Google calendars you're subscribed to. |
| `https://www.googleapis.com/auth/calendar.calendars` | See and change the properties of Google calendars you have access to, and create secondary calendars. |
| `https://www.googleapis.com/auth/calendar.calendars.readonly` | See the title, description, default time zone, and other properties of Google calendars you have access to. |
| `https://www.googleapis.com/auth/calendar.acls` | See and change the sharing permissions of Google calendars you own. |
| `https://www.googleapis.com/auth/calendar.acls.readonly` | See the sharing permissions of Google calendars you own. |
| `https://www.googleapis.com/auth/calendar.events.public.readonly` | See the events on public calendars. |
