---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.baseparticipant
root: workspace
fetched_at: 2026-04-23T15:31:01.537Z
---

# Interface BaseParticipant

Base participant type. Only one of signedInUser, anonymousUser, or phoneUser fields will be set to determine the type of participant.

## Signature

```
interface BaseParticipant
```

## Property signatures

| Name | Description |
| --- | --- |
| [`anonymousUser`](./media_api_web.baseparticipant.anonymoususer.md.md) | If set, the participant is an anonymous user. Provides a display name. |
| [`name`](./media_api_web.baseparticipant.name.md.md) | Resource name of the participant. Format: `conferenceRecords/{conferenceRecord}/participants/{participant}` |
| [`participantKey`](./media_api_web.baseparticipant.participantkey.md.md) | Participant key of associated participant. Format is `participants/{participant}`. |
| [`phoneUser`](./media_api_web.baseparticipant.phoneuser.md.md) | If set, the participant is a dial-in user. Provides a partially redacted phone number. |
| [`signedInUser`](./media_api_web.baseparticipant.signedinuser.md.md) | If set, the participant is a signed in user. Provides a unique ID and display name. |
