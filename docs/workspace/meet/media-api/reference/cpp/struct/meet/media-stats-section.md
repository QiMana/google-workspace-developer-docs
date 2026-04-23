---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-stats-section
root: workspace
fetched_at: 2026-04-23T15:30:37.224Z
---

# meet::MediaStatsSection

## meet::MediaStatsSection

`#include <media_stats_resource.h>`

This type represents an `RTCStats` -derived dictionary which is returned by calling `RTCPeerConnection::getStats`.

## Summary

**See also:** [WebRTC Stats](https://w3c.github.io/webrtc-pc/#mandatory-to-implement-stats)

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>id</code></td><td><div><code>std::string</code></div><p>The WebRTC-generated ID of the section.</p></td></tr><tr><td><code>type</code></td><td><div><code>std::string</code></div><p>The <a href="https://www.w3.org/TR/webrtc-stats/#rtcstatstype-str*">RTCStatsType</a> of the section.</p></td></tr><tr><td><code>values</code></td><td><div><code>absl::flat_hash_map< std::string, std::string ></code></div><p>The stats and their values for this section.</p></td></tr></tbody></table>

## Public attributes

### id

```
std::string meet::MediaStatsSection::id
```

The WebRTC-generated ID of the section.

### type

```
std::string meet::MediaStatsSection::type
```

The [RTCStatsType](https://www.w3.org/TR/webrtc-stats/#rtcstatstype-str*) of the section.

For example, `codec` or `candidate-pair`.

### values

```
absl::flat_hash_map< std::string, std::string > meet::MediaStatsSection::values
```

The stats and their values for this section.

**See also:** [WebRTC Stats](https://w3c.github.io/webrtc-pc/#mandatory-to-implement-stats)
