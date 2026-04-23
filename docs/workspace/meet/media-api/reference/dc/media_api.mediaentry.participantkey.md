---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediaentry.participantkey
root: workspace
fetched_at: 2026-04-23T15:30:47.540Z
---

# Property signature MediaEntry.participantKey

Participant key of associated participant. Format is `participants/{participant}`.

You can use this to retrieve additional information about the participant from the [Meet REST API - Participants](../../../api/reference/rest/v2/conferenceRecords.participants.md) resource.

`Note`: This has to be in the format of `conferenceRecords/{conference_record}/participants/{participant}`.

You can retrieve the conference record from the [Meet REST API - Conferences](../../../api/guides/conferences.md) resource.

## Signature

```
participantKey?: string;
```

## Details

| Type | `string` |
| --- | --- |
| Optional | Yes |
| Readonly | No |
