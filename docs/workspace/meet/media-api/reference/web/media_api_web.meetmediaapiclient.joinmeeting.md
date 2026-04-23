---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.meetmediaapiclient.joinmeeting
root: workspace
fetched_at: 2026-04-23T15:31:07.066Z
---

# Method signature MeetMediaApiClient.joinMeeting

## Method signature MeetMediaApiClient.joinMeeting

Joins the meeting.

## Signature

```
joinMeeting(
    communicationProtocol?: MediaApiCommunicationProtocol,
  ): Promise<void>;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `communicationProtocol` | `` `MediaApiCommunicationProtocol` `` | Yes | The communication protocol to use. If not provided, a default [MediaApiCommunicationProtocol](./media_api_web.mediaapicommunicationprotocol.md) will be used. |

## Returns

`Promise<void>`
