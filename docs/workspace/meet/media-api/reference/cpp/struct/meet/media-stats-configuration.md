---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-stats-configuration
root: workspace
fetched_at: 2026-04-23T15:30:36.745Z
---

# meet::MediaStatsConfiguration

## meet::MediaStatsConfiguration

`#include <media_stats_resource.h>`

The configuration for the media stats upload.

## Summary

This will be sent by the server to the client when the data channel is opened. The client is then expected to start uploading media stats at the specified interval.

This configuration is immutable and a singleton and will only be sent once when the data channel is opened.

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>allowlist</code></td><td><div><code>absl::flat_hash_map< std::string, absl::flat_hash_set< std::string > ></code></div><div>A map of allowlisted <code>RTCStats</code> sections.</div></td></tr><tr><td><code>upload_interval_seconds = 0</code></td><td><div><code>int32_t</code></div><p>The interval between each upload of media stats.</p></td></tr></tbody></table>

## Public attributes

### allowlist

```
absl::flat_hash_map< std::string, absl::flat_hash_set< std::string > > meet::MediaStatsConfiguration::allowlist
```

A map of allowlisted `RTCStats` sections.

The key is the section type, and the value is a vector of the names of data that are allowlisted for that section.

Allowlisted sections and section data are expected to be uploaded by the client. Other data will be ignored by the server and can be safely omitted.

**See also:** [WebRTC Stats](https://w3c.github.io/webrtc-pc/#mandatory-to-implement-stats)

### upload\_interval\_seconds

```
int32_t meet::MediaStatsConfiguration::upload_interval_seconds = 0
```

The interval between each upload of media stats.

If this is zero, the client should not upload any media stats.
