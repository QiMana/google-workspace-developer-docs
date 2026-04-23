---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Event
root: workspace
fetched_at: 2026-04-23T15:29:29.608Z
---

# Event

Type name: [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event)

Extends [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| attendee | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A person or organization attending the event. |
| attendees | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A person attending the event. |
| doorTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The time admission will commence. |
| duration | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) | The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). |
| endDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). |
| eventStatus | [EventStatusType](https://developers.google.com/workspace/gmail/markup/reference/types/EventStatusType) | An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled. |
| location | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) or [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | The location of the event, organization or action. |
| offers | [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer) | An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, or give away tickets to an event. |
| organizer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | An organizer of an Event. |
| performer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A performer at the event—for example, a presenter, musician, musical group or actor. |
| performers | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The main performer or performers of the event—for example, a presenter, musician, or actor. |
| previousStartDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated. |
| recordedIn | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | The CreativeWork that captured all or part of this Event. |
| startDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). |
| subEvent | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference. |
| subEvents | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference. |
| superEvent | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent. |
| typicalAgeRange | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The typical expected age range, e.g. '7-9', '11-'. |
| workPerformed | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | A work performed in some event, for example a play performed in a TheaterEvent. |
