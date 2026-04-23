---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Action
root: workspace
fetched_at: 2026-04-23T15:29:15.238Z
---

# Action

Type name: [Action](./Action.md)

Extends [Event](./Event.md) or [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| actionStatus | [ActionStatusType](./ActionStatusType.md) | Indicates the current disposition of the Action. |
| agent | [Organization](./Organization.md) or [Person](./Person.md) | The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book. |
| endTime | [DateTime](./DateTime.md) | The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*.   Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. |
| error | [Thing](./Thing.md) | For failed actions, more information on the cause of the failure. |
| handler | [HttpActionHandler](./HttpActionHandler.md) | Handlers supported by RSVP action. |
| instrument | [Thing](./Thing.md) | The object that helped the agent perform the action. e.g. John wrote a book with *a pen*. |
| location | [Place](./Place.md) or [PostalAddress](./PostalAddress.md) | The location of the event, organization or action. |
| name | [Text](./Text.md) | The string shown to the user on the UI element tied to the action. |
| object | [Thing](./Thing.md) | The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*. |
| participant | [Organization](./Organization.md) or [Person](./Person.md) | Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*. |
| result | [Thing](./Thing.md) | The result produced in the action. e.g. John wrote *a book*. |
| startTime | [DateTime](./DateTime.md) | The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December.   Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. |
| target | [EntryPoint](./EntryPoint.md) | Indicates a target EntryPoint for an Action. |
| url | [URL](./URL.md) | Target url to fetch in order to complete the action. |
