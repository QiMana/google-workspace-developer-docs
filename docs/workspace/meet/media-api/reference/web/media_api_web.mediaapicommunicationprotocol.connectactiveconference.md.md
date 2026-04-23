---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.mediaapicommunicationprotocol.connectactiveconference.md
root: workspace
fetched_at: 2026-04-23T15:31:03.424Z
---

# Method signature MediaApiCommunicationProtocol.connectActiveConference

## Method signature MediaApiCommunicationProtocol.connectActiveConference

Connects to the active conference with the given SDP offer.

## Signature

```
connectActiveConference(
    sdpOffer: string,
  ): Promise<MediaApiCommunicationResponse>;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `sdpOffer` | `string` | No | The SDP offer to connect to the active conference. |

## Returns

`Promise<MediaApiCommunicationResponse>`

A promise that resolves to the communication response.
