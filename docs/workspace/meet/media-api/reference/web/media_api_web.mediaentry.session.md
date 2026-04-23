---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaentry.session
root: workspace
fetched_at: 2026-04-23T15:31:04.719Z
---

# Property signature MediaEntry.session

Participant session name. There should be a one to one mapping of session to Media Entry. You can use this to retrieve additional information about the participant session from the [Meet REST API - ParticipantSessions](../../../api/reference/rest/v2/conferenceRecords.participants.participantSessions.md) resource

Format is `conferenceRecords/{conference_record}/participants/{participant}/participantSessions/{participant_session}` Unused for now. Use sessionName instead.

## Signature

```
session?: string;
```

## Details

| Type | `string` |
| --- | --- |
| Optional | Yes |
| Readonly | No |
