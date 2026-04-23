---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.md
root: workspace
fetched_at: 2026-04-23T15:30:40.487Z
---

# Interface BaseParticipant

Singleton resource containing participant information. There will be exactly one of signedInUser, anonymousUser, or phoneUser fields set to determine the type of participant.

## Signature

```
declare interface BaseParticipant extends ResourceSnapshot
```

## Heritage

| Extends | `ResourceSnapshot` |
| --- | --- |

## Property signatures

| Name | Description |
| --- | --- |
| [`anonymousUser`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.anonymoususer.md) | If set, the participant is an anonymous user. Provides a display name. |
| [`id`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.resourcesnapshot.id.md) | The resource ID of the resource being updated. For singleton resources, this is unset.   *(Inherited from [`ResourceSnapshot`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.resourcesnapshot.md))* |
| [`name`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.name.md) | Resource name of the participant. Format: `conferenceRecords/{conferenceRecord}/participants/{participant}` |
| [`participantId`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.participantid.md) | Participant id for internal usage. |
| [`participantKey`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.participantkey.md) | Participant key of associated participant. Format is `participants/{participant}`. |
| [`phoneUser`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.phoneuser.md) | If set, the participant is a dial-in user. Provides a partially redacted phone number. |
| [`signedInUser`](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant.signedinuser.md) | If set, the participant is a signed in user. Provides a unique ID and display name. |
