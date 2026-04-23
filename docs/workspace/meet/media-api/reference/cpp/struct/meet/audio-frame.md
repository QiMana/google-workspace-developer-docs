---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/audio-frame
root: workspace
fetched_at: 2026-04-23T15:30:36.050Z
---

# meet::AudioFrame

## meet::AudioFrame

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>bits_per_sample</code></td><td><div><code>int</code></div></td></tr><tr><td><code>contributing_source</code></td><td><div><code>uint32_t</code></div><p>Contributing source (CSRC) of the current audio frame.</p></td></tr><tr><td><code>is_from_loudest_speaker</code></td><td><div><code>bool</code></div></td></tr><tr><td><code>number_of_channels</code></td><td><div><code>size_t</code></div></td></tr><tr><td><code>number_of_frames</code></td><td><div><code>size_t</code></div></td></tr><tr><td><code>pcm16</code></td><td><div><code>absl::Span< const int16_t ></code></div></td></tr><tr><td><code>sample_rate</code></td><td><div><code>int</code></div></td></tr><tr><td><code>synchronization_source</code></td><td><div><code>uint32_t</code></div><p>Synchronization source (SSRC) of the audio frame.</p></td></tr></tbody></table>

## Public attributes

### bits\_per\_sample

```
int meet::AudioFrame::bits_per_sample
```

### contributing\_source

```
uint32_t meet::AudioFrame::contributing_source
```

Contributing source (CSRC) of the current audio frame.

This ID is used to identify which participant in the conference generated the frame. Integrators can cross reference this value with values pushed from Meet servers to the client via `MediaEntriesToClient` resource updates.

**See also:** [WebRTC Contributing Source](https://www.w3.org/TR/webrtc/#dom-rtcrtpcontributingsource)

### is\_from\_loudest\_speaker

```
bool meet::AudioFrame::is_from_loudest_speaker
```

### number\_of\_channels

```
size_t meet::AudioFrame::number_of_channels
```

### number\_of\_frames

```
size_t meet::AudioFrame::number_of_frames
```

### pcm16

```
absl::Span< const int16_t > meet::AudioFrame::pcm16
```

### sample\_rate

```
int meet::AudioFrame::sample_rate
```

### synchronization\_source

```
uint32_t meet::AudioFrame::synchronization_source
```

Synchronization source (SSRC) of the audio frame.

This ID identifies which media stream the audio frame originated from. The SSRC is for debugging purposes only.

**See also:** [WebRTC Synchronization Source](https://www.w3.org/TR/webrtc/#dom-rtcrtpsynchronizationsource)
