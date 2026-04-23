---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.baseparticipant
root: workspace
fetched_at: 2026-04-23T15:30:39.988Z
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
| [`anonymousUser`](./media_api.baseparticipant.anonymoususer.md.md) | If set, the participant is an anonymous user. Provides a display name. |
| [`id`](./media_api.resourcesnapshot.id.md.md) | The resource ID of the resource being updated. For singleton resources, this is unset.   *(Inherited from [`ResourceSnapshot`](./media_api.resourcesnapshot.md.md))* |
| [`name`](./media_api.baseparticipant.name.md.md) | Resource name of the participant. Format: `conferenceRecords/{conferenceRecord}/participants/{participant}` |
| [`participantId`](./media_api.baseparticipant.participantid.md.md) | Participant id for internal usage. |
| [`participantKey`](./media_api.baseparticipant.participantkey.md.md) | Participant key of associated participant. Format is `participants/{participant}`. |
| [`phoneUser`](./media_api.baseparticipant.phoneuser.md.md) | If set, the participant is a dial-in user. Provides a partially redacted phone number. |
| [`signedInUser`](./media_api.baseparticipant.signedinuser.md.md) | If set, the participant is a signed in user. Provides a unique ID and display name. |
