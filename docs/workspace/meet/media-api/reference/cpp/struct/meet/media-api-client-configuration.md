---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-api-client-configuration
root: workspace
fetched_at: 2026-04-23T15:30:35.479Z
---

# meet::MediaApiClientConfiguration

## meet::MediaApiClientConfiguration

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>enable_audio_streams = false</code></td><td><div><code>bool</code></div><p>If audio is enabled, three "receive-only" audio SRTP streams will be created, always.</p></td></tr><tr><td><code>receiving_video_stream_count = 0</code></td><td><div><code>uint32_t</code></div><p>For values greater than zero, the Meet Media API client will establish that many video SRTP streams.</p></td></tr></tbody></table>

## Public attributes

### enable\_audio\_streams

```
bool meet::MediaApiClientConfiguration::enable_audio_streams = false
```

If audio is enabled, three "receive-only" audio SRTP streams will be created, always.

After the session is initialized, no other streams will be created nor intentionally terminated. All connections will be cleaned up after the session is complete.

### receiving\_video\_stream\_count

```
uint32_t meet::MediaApiClientConfiguration::receiving_video_stream_count = 0
```

For values greater than zero, the Meet Media API client will establish that many video SRTP streams.

After the session is initialized, no other streams will be created nor intentionally terminated. All connections will be cleaned up after the session is complete. Up to three streams are supported and they are "receive-only". Attempts to set a value greater than three will result in an error.
