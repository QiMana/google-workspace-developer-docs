---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Action
root: workspace
fetched_at: 2026-04-23T15:29:15.238Z
---

# Action

Type name: [Action](https://developers.google.com/workspace/gmail/markup/reference/types/Action)

Extends [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) or [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| actionStatus | [ActionStatusType](https://developers.google.com/workspace/gmail/markup/reference/types/ActionStatusType) | Indicates the current disposition of the Action. |
| agent | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book. |
| endTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*.   Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. |
| error | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | For failed actions, more information on the cause of the failure. |
| handler | [HttpActionHandler](https://developers.google.com/workspace/gmail/markup/reference/types/HttpActionHandler) | Handlers supported by RSVP action. |
| instrument | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | The object that helped the agent perform the action. e.g. John wrote a book with *a pen*. |
| location | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) or [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | The location of the event, organization or action. |
| name | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The string shown to the user on the UI element tied to the action. |
| object | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*. |
| participant | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*. |
| result | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | The result produced in the action. e.g. John wrote *a book*. |
| startTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December.   Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. |
| target | [EntryPoint](https://developers.google.com/workspace/gmail/markup/reference/types/EntryPoint) | Indicates a target EntryPoint for an Action. |
| url | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Target url to fetch in order to complete the action. |
