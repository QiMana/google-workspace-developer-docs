---
source: https://developers.google.com/workspace/meet/media-api/guides/codecs
root: workspace
fetched_at: 2026-04-23T15:30:32.085Z
---

# Video codec requirements for Meet Media API

This page provides the basic requirements for Google Meet Media API client video codecs to ensure a good user experience.

## Functional requirements

This section specifies the requirements for the codec types and features.

<table><tbody><tr><th width="25%">Feature</th><th colspan="3">Requirement</th></tr><tr><td rowspan="2">Profile</td><td width="25%">AV1</td><td width="25%">VP9</td><td width="25%">VP8</td></tr><tr><td><code>Main</code></td><td><code>Profile 0</code></td><td>N/A</td></tr><tr><td>Scalability</td><td colspan="3">Decoder must support temporal scalability, spatial scalability, or both if required by the coding specification for given codec type and profile.</td></tr><tr><td>Raw video format</td><td colspan="3"><p>Codec must be capable of processing odd resolutions (such as when frame width or height are not multiple of 2; for example, 133 × 141). For subsampled chroma formats, the number of chroma samples per dimension must be rounded up when derived from the number of luma samples.</p><p>Cropping, padding, or scaling isn't allowed. Resolution of the output frame must match the resolution of the input frame.</p></td></tr></tbody></table>

## Operational requirements

This section specifies requirements for various conditions the video codec is expected to operate in. Violation of these requirements may restrict the usage of the codec to a subset of scenarios but doesn't necessarily prevent it from being used. For example, if the maximum number of codec instances is less than required, the codec can still be used together with codecs of other types or implementations.

<table><tbody><tr><th width="25%">Parameter</th><th>Requirement</th></tr><tr><td>Minimum resolution, pixels</td><td>≤ 128 × 128</td></tr><tr><td>Maximum resolution, pixels</td><td>≥ 2880 × 1800</td></tr><tr><td>Minimum frame rate, FPS</td><td>≤ 1</td></tr><tr><td>Maximum frame rate, FPS</td><td>≥ 30</td></tr><tr><td>Minimum bitrate, kbps</td><td>≤ 30</td></tr><tr><td>Maximum bitrate, kbps</td><td>≥ 5000</td></tr><tr><td>Maximum decoder instances</td><td>≥ 3</td></tr><tr><td>Maximum total decode throughput, pixels per second</td><td colspan="4">≥ 3 × 2880 × 1880 × 30</td></tr></tbody></table>

## Performance requirements

This section specifies the requirements on codec performance. Violation of these requirements may significantly impact the user experience and will almost certainly block the usage of the codec.

| Parameter | Requirement |
| --- | --- |
| Maximum inter frame processing time, seconds | ≤ `1 / max(30, encode_target_frame_rate_fps)` |
| Maximum key frame processing time, seconds | ≤ `2 / max(30, encode_target_frame_rate_fps)` |

The frame processing time is the time difference between two events: 1) codec delivers the frame and 2) codec receives the frame. The average frame processing time is calculated over a sliding window of at least **10 seconds** duration holding at least **10 frames**. The maximum frame processing time is the highest value among all individual frame processing time values.

The throughput is calculated as the number of processed frames, including dropped ones, divided by time delta between the two events: 1) codec delivers the last frame and 2) codec delivers the first frame.

## Test cases

The following are test cases you can use:

| Tests |
| --- |
| Decode throughput | Decode up to three 2880 × 1880 × 30 streams simultaneously and verify that decoders don't violate the performance requirements. |
| Decoder conformance | Decode a set of pre-encoded bitstreams. The output of the test decoder must match the output of a reference decoder (`libvpx` for VP8 & VP9, `libaom` for AV1). |
| Temporal scalability | Decode video with multiple temporal layers (2 and 3). The output of the test decoder must match the output of the reference decoder. |
| Spatial scalability | Decode video with multiple spatial layers (2 and 3). The output of the test decoder must match the output of the reference decoder. |

## Related topics

- [Get started with Meet Media API](./get-started.md)
