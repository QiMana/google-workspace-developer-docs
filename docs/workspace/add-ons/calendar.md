---
source: https://developers.google.com/workspace/add-ons/calendar
root: workspace
fetched_at: 2026-04-23T15:22:32.047Z
---

# Extend Google Calendar with Google Workspace add-ons

## Page Summary

- Google Workspace add-ons extend Google Calendar to automate tasks and streamline workflows, saving users time and effort.
- Add-ons provide custom interfaces within Google Calendar for seamless user interaction without switching applications.
- These extensions offer non-contextual homepages, contextual interfaces triggered by event interactions, and custom conferencing solutions.
- Add-ons are built using Apps Script and configured with a manifest, allowing for flexible integration and functionality.
- Developers can build various interfaces and actions within their add-ons, enhancing the user experience within Google Calendar.

Calendar provides tools for users to create, manage, and share event and calendar details. Managing complex calendars can be time-consuming when viewing, creating, updating, and sharing individual events, especially when importing or exporting event information from other applications.

Save time and effort for your users by extending Calendar with add-ons. When you build a Google Workspace add-on, you can define interfaces inserted directly into Calendar, exactly where the user needs them. These interfaces automate calendar tasks, present additional information, or let the user interact with a third-party system without switching browser tabs.

Add-ons can define the following kinds of extensions within Calendar:

- Non-contextual [homepages](./concepts/homepages.md).
- Contextual interfaces that appear when users click an event in the calendar view.
- Contextual interfaces that appear when users open an event to view or edit it.
- Custom [conferencing solutions](./calendar/conferencing/overview.md#conference_solutions) for Calendar events (see [Third-party conferencing overview](./calendar/conferencing/overview.md) for details).

Calendar add-ons aren't supported on mobile clients.

## See what you can make

add-ons are built using [Google Apps Script](../../apps-script/index.md), and their interfaces defined using the Apps Script [Card service](../../apps-script/reference/card-service.md). See [Building add-ons](./how-tos/building-workspace-addons.md) for an overview. Add-on behavior is configured using a [manifest](./concepts/workspace-manifests.md), which includes Calendar-specific sections.

When configuring your Google Workspace add-on to extend Calendar, you must decide what interfaces to create and what actions it can take. The following guides provide more information:

- [Building Calendar interfaces](./calendar/building-calendar-interfaces.md)
- [Calendar actions](./calendar/calendar-actions.md)
- [Manifests](./concepts/workspace-manifests.md#manifest-structure)
- Try a sample:
	- [Plan travels with an AI agent accessible across Google Workspace](./samples/travel-concierge.md)
		- [Build Gemini Enterprise agents that are tightly integrated with Google Workspace data stores, APIs, and add-ons](https://codelabs.developers.google.com/ge-gws-agents)
		- [Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add-ons](https://codelabs.developers.google.com/vertexai-gws-agents)

If you maintain a conferencing system, see [Third-party conferencing overview](./calendar/conferencing/overview.md) for details on how to integrate your conference types within Calendar.
