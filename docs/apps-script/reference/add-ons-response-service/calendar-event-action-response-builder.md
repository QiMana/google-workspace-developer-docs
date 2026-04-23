---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:36.649Z
---

# Class CalendarEventActionResponseBuilder

## Detailed documentation

### addAttachments(attachments)

Specifies that the response should add the attachments to the Calendar event when the associated UI action is taken.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `attachments` | `Attachment[]` | An array of `Attachment` s to add. |

#### Return

`CalendarEventActionResponseBuilder` — This object, for chaining.

---

### addAttendees(emails)

Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emails` | `String[]` | An array of email addresses to add to the event. |

#### Return

`CalendarEventActionResponseBuilder` — This object, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — If too many attendees have been added.

---

### build()

Builds the current Calendar event action response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — If the constructed Calendar event action response isn't valid.

---

### setConferenceData(conferenceData)

Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `conferenceData` | `ConferenceData` | Conference data to set to the event, created by an add on. |

#### Return

`CalendarEventActionResponseBuilder` — This object, for chaining.
