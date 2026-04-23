---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Event
root: workspace
fetched_at: 2026-04-23T15:29:29.608Z
---

# Event

Type name: [Event](./Event.md)

Extends [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| attendee | [Organization](./Organization.md) or [Person](./Person.md) | A person or organization attending the event. |
| attendees | [Organization](./Organization.md) or [Person](./Person.md) | A person attending the event. |
| doorTime | [DateTime](./DateTime.md) | The time admission will commence. |
| duration | [Duration](./Duration.md) | The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). |
| endDate | [Date](./Date.md) | The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). |
| eventStatus | [EventStatusType](./EventStatusType.md) | An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled. |
| location | [Place](./Place.md) or [PostalAddress](./PostalAddress.md) | The location of the event, organization or action. |
| offers | [Offer](./Offer.md) | An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, or give away tickets to an event. |
| organizer | [Organization](./Organization.md) or [Person](./Person.md) | An organizer of an Event. |
| performer | [Organization](./Organization.md) or [Person](./Person.md) | A performer at the event—for example, a presenter, musician, musical group or actor. |
| performers | [Organization](./Organization.md) or [Person](./Person.md) | The main performer or performers of the event—for example, a presenter, musician, or actor. |
| previousStartDate | [Date](./Date.md) | Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated. |
| recordedIn | [CreativeWork](./CreativeWork.md) | The CreativeWork that captured all or part of this Event. |
| startDate | [Date](./Date.md) | The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). |
| subEvent | [Event](./Event.md) | An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference. |
| subEvents | [Event](./Event.md) | Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference. |
| superEvent | [Event](./Event.md) | An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent. |
| typicalAgeRange | [Text](./Text.md) | The typical expected age range, e.g. '7-9', '11-'. |
| workPerformed | [CreativeWork](./CreativeWork.md) | A work performed in some event, for example a play performed in a TheaterEvent. |
