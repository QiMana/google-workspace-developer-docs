---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.baseparticipant.participantkey.md
root: workspace
fetched_at: 2026-04-23T15:31:00.805Z
---

# Property signature BaseParticipant.participantKey

Participant key of associated participant. Format is `participants/{participant}`.

You can use this to retrieve additional information about the participant from the [Meet REST API - Participants](https://developers.google.com/meet/api/reference/rest/v2/conferenceRecords.participants) resource.

`Note`: This has to be in the format of `conferenceRecords/{conference_record}/participants/{participant}`.

You can retrieve the conference record from the [Meet REST API - Conferences](https://developers.google.com/meet/api/guides/conferences) resource.

## Signature

```
participantKey?: string;
```

## Details

| Type | `string` |
| --- | --- |
| Optional | Yes |
| Readonly | No |
