---
source: https://developers.google.com/workspace/events/guides/events-meet
root: workspace
fetched_at: 2026-04-23T15:28:38.749Z
---

# Subscribe to Google Meet events

## Page Summary

- This page details how to subscribe to Google Meet events using the Google Workspace Events API to receive real-time updates about conferences, participants, recordings, and transcripts.
- You can monitor events by specifying a target resource, which can be a meeting space or a user, and subscribe to specific event types, such as conference start/end or participant join/leave.
- Event data includes payloads containing information about the changed resource, like a conference record or a participant session.
- To get started, you need to create a subscription and choose the appropriate event types for your app's needs, refer to the provided links for a step-by-step guide and API documentation.

This document describes the Meet events that your app can subscribe to using the Google Workspace Events API. After you decide which types of events you need, [create a subscription](./create-subscription.md) to start receiving events from Meet.

In addition to subscribing to events, you can also query for events by calling the Google Meet REST API. Call the Meet REST API to retrieve events on a periodic basis, or catch up on events you might have missed from a subscription due to an outage. To learn about the ways you can receive and respond to Meet events, see [Respond to events from Meet](../../meet/api/guides/events-overview.md) in the Meet documentation.

To learn more about developing apps for Meet, see the [Meet REST API overview](../../meet/api/guides/overview.md).

## Supported Meet events

Google Workspace subscriptions let you receive events about the following types of changes in Meet:

- A [conference](../../meet/api/reference/rest/v2/conferenceRecords.md) starts or ends in a meeting space.
- A [participant](../../meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions.md) joins or leaves a conference.
- A [recording](../../meet/api/reference/rest/v2/conferenceRecords.recordings.md) starts, ends, or a file is generated for a conference.
- A [smart note](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1&tab=t.0#bookmark=id.os4r6sjq15hs) starts, ends, or a file is generated for a conference.
- A [transcript](../../meet/api/reference/rest/v2/conferenceRecords.transcripts.md) starts, ends, or a file is generated for a conference.

### Resources that you can monitor for events

To receive events, specify a Meet resource to monitor, which is called the *target resource* of the subscription.

The Google Workspace Events API supports the following target resources for Meet:

| **Target resource** | **Format** | **Limitations (if applicable)** |
| --- | --- | --- |
| Meeting space | `//meet.googleapis.com/spaces/SPACE`  where SPACE is the ID in the [resource name](../../meet/api/reference/rest/v2/spaces.md#Space.FIELDS.name) of the Meet REST API `spaces` resource. For details, see [How Meet identifies a meeting space](../../meet/api/guides/meeting-spaces-overview.md#identify-meeting-space). |  |
| User | `//cloudidentity.googleapis.com/users/USER`  where USER is the ID in the [`signedinUser.user`](../../meet/api/reference/rest/v2/conferenceRecords.participants.md#SignedinUser.FIELDS.user) field of the Meet REST API `participants` resource. For details, see [Work with participants](../../meet/api/guides/participants.md). | The subscription receives events about all meeting spaces where the user is the owner of the meeting space. Usually, the meeting space owner is also the [organizer](../../calendar/api/v3/reference/events.md#organizer) of the Google Calendar event associated with the meeting space. |

### Event types for creating subscriptions

When you create a subscription to a Meet resource, use the [`eventTypes[]`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.event_types) field to specify which types of events you want to receive. Event types are formatted according to the [CloudEvents](https://cloudevents.io/) specification, such as `google.workspace.APPLICATION.RESOURCE.VERSION.ACTION`.

For example, to receive events about new participants in a conference for a Meet space, specify the event type as `google.workspace.meet.participant.v2.joined`. To learn more about how events work, see [Structure of Google Workspace events](../../events.md#structure).

The following table displays which event types are supported for subscriptions to Meet resources:

| **Event type** | **Format** | **Resource data** |
| --- | --- | --- |
| A conference starts in the meeting space. | `google.workspace.meet.conference.v2.started` | `conferenceRecord` |
| A conference ends in the meeting space. | `google.workspace.meet.conference.v2.ended` | `conferenceRecord` |
| A participant joins an active conference in the meeting space. | `google.workspace.meet.participant.v2.joined` | `conferenceRecord.participantSession` |
| A participant leaves an active conference in the meeting space. | `google.workspace.meet.participant.v2.left` | `conferenceRecord.participantSession` |
| A recording starts for a conference in the meeting space. | `google.workspace.meet.recording.v2.started` | `conferenceRecord.recording` |
| A recording ends for a conference in the meeting space. | `google.workspace.meet.recording.v2.ended` | `conferenceRecord.recording` |
| A recording file is generated for a conference in the meeting space. | `google.workspace.meet.recording.v2.fileGenerated` | `conferenceRecord.recording` |
| A smart note starts for a conference in the meeting space. | `google.workspace.meet.smartNote.v2.started` | `conferenceRecord.smartNote` |
| A smart note ends for a conference in the meeting space. | `google.workspace.meet.smartNote.v2.ended` | `conferenceRecord.smartNote` |
| A smart note file is generated for a conference in the meeting space. | `google.workspace.meet.smartNote.v2.fileGenerated` | `conferenceRecord.smartNote` |
| A transcript starts for a conference in the meeting space. | `google.workspace.meet.transcript.v2.started` | `conferenceRecord.transcript` |
| A transcript ends for a conference in the meeting space. | `google.workspace.meet.transcript.v2.ended` | `conferenceRecord.transcript` |
| A transcript file is generated for a conference in the meeting space. | `google.workspace.meet.transcript.v2.fileGenerated` | `conferenceRecord.transcript` |

## Event data

This section describes event data and example payloads for events in Meet meeting spaces.

When your Google Workspace subscription receives an event from Meet, the [`data`](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#event-data) field contains the payload for the event. This payload has information about the Google Workspace resource that changed. For example, if you've subscribed to events about new transcripts in a space, the payload for these events contains information about the [`transcripts`](../../meet/api/reference/rest/v2/conferenceRecords.transcripts.md) resource that changed.

### Resource data in the event payload

The following table provides examples of JSON payloads for a subscription to a Meet meeting space. The examples use the conference record ID (for example, `conferenceRecords/kRyYx8b7vNDsLpR1tG_cNjFUQBoBRhHIMoGJAJkBCQ`) to identify the meeting space. For more information, see [How Meet identifies a meeting space](../../meet/api/guides/meeting-spaces-overview.md#identify-meeting-space).

For each event that the subscription receives, the payload appears in the `data` field of the event:

| **Event types** | **JSON payload** |
| --- | --- |
| A conference starts or ends for the Meet meeting space.  - `google.workspace.meet.conference.v2.started` - `google.workspace.meet.conference.v2.ended` | Excludes resource data:  ``` {   "conferenceRecord":   {       "name": "conferenceRecords/CONFERENCE_RECORD_ID"   } } ``` |
| A participant joins or leaves a conference in the Meet meeting space.  - `google.workspace.meet.participant.v2.joined` - `google.workspace.meet.participant.v2.left` | Excludes resource data:  ``` {   "participantSession":   {       "name": "conferenceRecords/CONFERENCE_RECORD_ID/participants/PARTICIPANT_ID/participantSessions/PARTICIPANT_SESSION_ID"   } } ``` |
| A recording starts, ends, or a file is generated for a conference in the Meet meeting space.  - `google.workspace.meet.recording.v2.started` - `google.workspace.meet.recording.v2.ended` - `google.workspace.meet.recording.v2.fileGenerated` | Excludes resource data:  ``` {   "recording":   {       "name": "conferenceRecords/CONFERENCE_RECORD_ID/recordings/RECORDING_ID"   } } ``` |
| A smart note starts, ends, or a file is generated for a conference in the Meet meeting space.  - `google.workspace.meet.smartNote.v2.started` - `google.workspace.meet.smartNote.v2.ended` - `google.workspace.meet.smartNote.v2.fileGenerated` | Excludes resource data:  ``` {   "smartNote":   {       "name": "conferenceRecords/CONFERENCE_RECORD_ID/smartNotes/SMART_NOTE_ID"   } } ``` |
| A transcript starts, ends, or a file is generated for a conference in the Meet meeting space.  - `google.workspace.meet.transcript.v2.started` - `google.workspace.meet.transcript.v2.ended` - `google.workspace.meet.transcript.v2.fileGenerated` | Excludes resource data:  ``` {   "transcript":   {       "name": "conferenceRecords/CONFERENCE_RECORD_ID/transcripts/TRANSCRIPT_ID"   } } ``` |

## Limitations

- Calendar invitees and other participants invited to a conference can only receive the following events: `google.workspace.meet.conference.v2.started` and `google.workspace.meet.transcript.v2.fileGenerated`.

## Related topics

- [Choose Google Workspace Events API scopes](./auth.md)
- [Meet REST API overview](../../meet/api/guides/overview.md)
- [Choose Meet REST API scopes](../../meet/api/guides/authenticate-authorize.md#meet-api-scopes)
- Tutorial: [Observe meeting events with Python and the Meet REST API](../../meet/api/guides/tutorial-events-python.md)
