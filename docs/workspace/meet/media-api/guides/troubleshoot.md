---
source: https://developers.google.com/workspace/meet/media-api/guides/troubleshoot
root: workspace
fetched_at: 2026-04-23T15:30:34.857Z
---

# Troubleshoot and fix Meet Media API errors

This guide provides instructions about how to resolve common Google Meet Media API errors.

## Troubleshoot error codes

Here are tips for troubleshooting error codes returned by the [`connectActiveConference`](../reference/rest/connectActiveConference.md) endpoint:

| Error codes |
| --- |
| `NO_ACTIVE_CONFERENCE` | Check that the Meet Media API client only attempts to connect after the authenticated user is already present in a [conference](./overview.md#conference) on the [meeting space](./overview.md#meeting-space). If you're polling for conference start, use [Conference start events](../../../events/guides/events-meet.md) instead. |
| `INVALID_OFFER` | Read through the [offer requirements](./concepts.md#flow) to check for any missing details, such as opening data required channels. You can also compare your app's offer string to the [example offer](./concepts.md#example-offer-answer) and investigate any differences. |
| `INCOMPATIBLE_DEVICE` | One or more devices in the [conference](./overview.md#conference) isn't compatible with Meet Media API clients. Your app won't be able to join, so you might communicate this to your end users. Reasons for incompatible devices include if the account associated with the device is considered under age. For more information, see [end user requirements](./get-started.md#end_user_requirements). |
| `UNSUPPORTED_PLATFORM_PRESENT` | One or more devices in the [conference](./overview.md#conference) isn't compatible with Meet Media API clients. Your app won't be able to join, so you might communicate this to your end users. Reasons for an unsupported platform include mobile apps that don't meet mobile app minimum versions and joining from unsupported platforms. For more information, see [end user requirements](./get-started.md#end_user_requirements). |
| `CONNECTIONS_EXHAUSTED` | Only one Meet Media API client may connect to a conference at a time. If your app crashes, you might see this error if it tries to reconnect. In this case, wait about 30 seconds for Meet to timeout the previous connection. Then, try again. |
| `DISABLED_BY_ADMIN` | The administrator has disabled Meet Media API for their organization. If you encounter this, this cannot change during the duration of a meeting. For more information, see Figure 3 in [Meet Media API lifecycle](./overview.md#lifecycle). |
| `DISABLED_BY_HOST_CONTROL` | The host has disabled Meet Media API for the meeting. Your app won't be able to join, so you might communicate this to your end users. For more information, see Figure 5 in [Meet Media API lifecycle](./overview.md#lifecycle). |
| `DISABLED_DUE_TO_WATERMARKING` | When watermarking is enabled, Meet Media API isn't allowed into the meeting. You might communicate this to your end users. For more information, see Figure 2 in [Meet Media API lifecycle](./overview.md#lifecycle). |
| `DISABLED_DUE_TO_ENCRYPTION` | When encryption is enabled, Meet Media API isn't allowed into the meeting. This cannot change during a Meet call. You might communicate this to your end users. For more information, see Figure 2 in [Meet Media API lifecycle](./overview.md#lifecycle). |

## Unified plan

If data channels never open and you never receive audio or video, check that only *Unified Plan* is used when configuring the local peer connection.

## Media description order error

When creating a peer-to-peer connection with a [Session Description Protocol (SDP)](./overview.md#sdp) offer, you might see the error:

```
Failed to execute 'setRemoteDescription' on 'RTCPeerConnection':
Failed to set remote answer sdp:
The order of m-lines in answer doesn't match order in offer. Rejecting answer.
```

This means the media description lines in the SDP answer don't match the media descriptions in the SDP offer:

| SDP offer | SDP answer |
| --- | --- |
| ✅ `m=audio 9 UDP/TLS/RTP/SAVPF 111` | ✅ `m=audio 9 UDP/TLS/RTP/SAVPF 111` |
| ❌ `m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99` | ❌ `m=audio 9 UDP/TLS/RTP/SAVPF 111` |
| ✅ `m=audio 9 UDP/TLS/RTP/SAVPF 111` | ✅ `m=audio 9 UDP/TLS/RTP/SAVPF 111` |
| ❌ `m=audio 9 UDP/TLS/RTP/SAVPF 111` | ❌ `m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99` |

To fix this error, make sure similar media types are configured correctly and grouped together when setting the peer connection object. Interleaved media descriptions aren't supported.

The following code sample shows how to correctly match the media descriptions:

### C++

```
rtc::scoped_refptr<webrtc::PeerConnectionInterface> peer_connection;

// Signal the entire video at once.
for (uint32_t i = 0; i < configurations.receiving_video_stream_count; ++i) {
    webrtc::RtpTransceiverInit video_init;
    video_init.direction = webrtc::RtpTransceiverDirection::kRecvOnly;
    video_init.stream_ids = {absl::StrCat("video_stream_", i)};

    webrtc::RTCErrorOr<rtc::scoped_refptr<webrtc::RtpTransceiverInterface>>
        video_result = peer_connection->AddTransceiver(
            cricket::MediaType::MEDIA_TYPE_VIDEO, video_init);
  // . . .
}
```

### JavaScript

```
pc = new RTCPeerConnection();

// Signal the entire video at once.
pc.addTransceiver(video, {'direction':'recvonly'});
pc.addTransceiver(video, {'direction':'recvonly'});
pc.addTransceiver(video, {'direction':'recvonly'});
```

## DTLS role attribute error

When setting the DTLS role attribute, you might see the error:

```
All DTLS roles must be one of [ACTIVE, ACTPASS].
```

This error happens when the `a=setup:< >` attribute isn't properly set for all media descriptions in the SDP offer.

To fix this error, make sure each media description in the SDP offer has one of the following required attributes:

- `a=setup:actpass`
- `a=setup:active`

```
v=0
o=- 4743178474630771513 3 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1
a=extmap-allow-mixed
a=msid-semantic: WMS
. . .
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101
. . .
a=setup:actpass
. . .
m=audio 39807 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126
. . .
a=setup:actpass
. . .
```

## Troubleshoot audio issues

The following sections can help resolve audio issues in your app.

### Check the logs

If you're using the web client in a Chrome browser:

1. Open a new tab and enter into the address bar: `chrome://webrtc-internals`.
2. Go to the section labeled `Stats graph for inbound-rtp`.
3. Inspect each audio graph to see if packets are being received.

If you're using the C++ reference client, check whether [`OnAudioFrame`](../reference/cpp/class/meet/media-api-client-observer-interface.md#onaudioframe) is ever called.

### Verify the OAuth scopes

Audio is only transmitted if the proper scope is supplied with the initial connection request. To resolve the error, make sure to supply the correct OAuth 2.0 scopes. For more information, see [Meet Media API scopes](./get-started.md#scopes).

### Verify the conference is correctly set up

- When the client connects with the Google Meet servers, it isn't automatically admitted to the conference. Make sure that you have received a session control resource update over the session control data channel with a state of `STATE_JOINED`.
	```
	{"sessionStatus":{"connectionState":"STATE_JOINED"}}
	```
- Confirm that there are other conference [participants](./overview.md#participant) whose audio streams are not muted.

### Verify you signal for audio

Meet only provides audio if you signal this in the [SDP offer](./overview.md#sdp-offer). There must exist [three, receive-only, audio media descriptions](./concepts.md#flow) in the offer.

```
m=audio 39807 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126
. . .
a=mid:0
. . .
a=recvonly
. . .
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
. . .
m=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126
. . .
a=mid:1
. . .
a=recvonly
. . .
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
. . .
m=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126
. . .
a=mid:2
. . .
a=recvonly
. . .
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
. . .
```

If a valid offer is received by the Meet servers, they respond with a SDP answer with three, send-only, audio media descriptions.

```
m=audio 19306 UDP/TLS/RTP/SAVPF 111
. . .
a=mid:0
. . .
a=sendonly
a=msid:virtual-6666 virtual-6666
. . .
a=rtpmap:111 opus/48000/2
a=fmtp:111 minptime=10;useinbandfec=1
. . .
m=audio 9 UDP/TLS/RTP/SAVPF 111
. . .
a=mid:1
. . .
a=sendonly
a=msid:virtual-6667 virtual-6667
. . .
a=rtpmap:111 opus/48000/2
a=fmtp:111 minptime=10;useinbandfec=1
. . .
m=audio 9 UDP/TLS/RTP/SAVPF 111
. . .
a=mid:2
. . .
a=sendonly
a=msid:virtual-6668 virtual-6668
. . .
a=rtpmap:111 opus/48000/2
a=fmtp:111 minptime=10;useinbandfec=1
. . .
```

### Check your observer implementation

Be sure to make copies of the audio data if you move data processing to a different thread. [`AudioFrame.pcm16`](../reference/cpp/struct/meet/audio-frame.md#pcm16) is effectively a reference to underlying data, so trying to access it after [`OnAudioFrame`](../reference/cpp/class/meet/media-api-client-observer-interface.md#onaudioframe) results in undefined behavior, such as a segmentation fault.

## Troubleshoot video issues

The following sections can help resolve video issues in your app.

### Check the logs

If you're using the web client in a Chrome browser:

1. Open a new tab and enter into the address bar: `chrome://webrtc-internals`.
2. Go to the section labeled `Stats graph for inbound-rtp`.
3. Inspect each video graph to see if packets are being received.

If you're using the C++ reference client, check whether [`OnVideoFrame`](../reference/cpp/class/meet/media-api-client-observer-interface.md#onvideoframe) is ever called.

### Verify the OAuth scopes

Video is only transmitted if the proper scope is supplied with the initial connection request. To resolve the error, make sure to supply the correct OAuth 2.0 scopes. For more information, see [Meet Media API scopes](./get-started.md#scopes).

### Verify the conference is correctly set up

- When the client connects with the Meet servers, it isn't automatically admitted to the conference. Make sure that you have received a session control resource update over the session control data channel with a state of `STATE_JOINED`.
	```
	{"sessionStatus":{"connectionState":"STATE_JOINED"}}
	```
- Confirm that there are other conference [participants](./overview.md#participant) whose video streams are not muted.

### Verify you signal for video

Meet only provides video if it's signaled in the [SDP offer](./overview.md#sdp-offer). There must exist up to three, receive-only, video media descriptions in the offer.

```
v=0
o=- 4743178474630771513 3 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1
a=extmap-allow-mixed
a=msid-semantic: WMS
. . .
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 35 36 37 38 102 103 104 105 106 107 108 109 127 125 39 40 41 42 43 44 45 46 47 48 112 113 114 115 116 117 118 49
. . .
a=setup:actpass
a=mid:1
. . .
a=recvonly
. . .
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
. . .
```

If Meet receives a valid offer, it responds with a SDP answer with `n` send-only video media descriptions, where `n` is the number of video media descriptions in the SDP offer.

```
v=0
o=- 0 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1
a=msid-semantic: WMS virtual-video-7777/7777
a=ice-lite
. . .
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99
. . .
a=setup:passive
a=mid:1
. . .
a=msid:virtual-video-7777/7777 virtual-video-7777/7777
a=rtcp-mux
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtcp-fb:96 goog-remb
. . .
```

#### Troubleshoot no video

- Check that `m=video …` exists in the SDP offer sent to Meet servers.
- Check that `a=recvonly` is an attribute under every `m=video` line.
- Check that an equal number of `m=video` lines exist in the SDP answer.
- Check that `a=sendonly` or `a=sendrecv` are attributes under every `m=video` line in the SDP answer.
- Check that a successful [`VideoAssignmentRequest`](../reference/dc/media_api.setvideoassignmentrequest.md.md) was sent to and received by Meet servers. Success or failure should be communicated back to the client across the same data channel.

#### Troubleshoot fewer video streams than expected

- Check that the SDP offer contains the correct number of `m=video …` lines.
- Ensure all `m=video` descriptions in the SDP answer contain either a `a=sendonly` or `a=sendrecv` attribute. Any lines marked `a=recvonly` in the answer reduces the amount of streams sent to the client by that much.

### Check your observer implementation

Be sure to make copies of the video data if you move data processing to a different thread. [`VideoFrame.frame`](../reference/cpp/struct/meet/video-frame.md#frame) is effectively a reference to underlying data, so trying to access it after [`OnVideoFrame`](../reference/cpp/class/meet/media-api-client-observer-interface.md#onvideoframe) will result in undefined behavior, such as a segmentation fault.

## Related topics

- [Meet Media API concepts](./concepts.md)
