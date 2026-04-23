---
source: https://developers.google.com/workspace/calendar/api/concepts/domain
root: workspace
fetched_at: 2026-04-23T15:24:46.882Z
---

# Domain resources, rooms & calendars

Calendar API offers several concepts that are primarily useful for [Google Workspace](https://workspace.google.com/) customers. These customers often have resources—rooms, projectors, and so forth—that they may wish to book for specific events. Furthermore, it’s common to build internal apps that need access to all user calendars in a domain, for example to add corporate events to them.

## Domain resources & rooms

You can book resources and rooms by adding them to events as attendees, using their email address. When they receive the invitation, they automatically accept or decline the event based on the availability and access right of the inviting user.

## Accessing domain calendars as an app

An app can access domain-owned calendars without requiring user credentials if it authenticates using a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount). The service account must have the necessary access using [domain-wide authority delegation](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority). In order to impersonate a user account, specify the email address of the user account with the `setServiceAccountUser` method of the `GoogleCredential` factory.
