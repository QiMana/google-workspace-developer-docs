---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.sessionname.md
root: workspace
fetched_at: 2026-04-23T15:30:48.362Z
---

# Property signature MediaEntry.sessionName

The session ID of the media entry.

Format is `participants/{participant}/participantSessions/{participant_session}`

You can use this to retrieve additional information about the participant session from the [Meet REST API - ParticipantSessions](https://developers.google.com/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions) resource.

`Note`: This has to be in the format of `conferenceRecords/{conference_record}/participants/{participant}/participantSessions/{participant_session}`.

You can retrieve the conference record from the [Meet REST API - Conferences](https://developers.google.com/meet/api/guides/conferences) resource.

## Signature

```
sessionName?: string;
```

## Details

| Type | `string` |
| --- | --- |
| Optional | Yes |
| Readonly | No |
