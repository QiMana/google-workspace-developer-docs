---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-stats-channel-to-client
root: workspace
fetched_at: 2026-04-23T15:30:36.482Z
---

# meet::MediaStatsChannelToClient

## meet::MediaStatsChannelToClient

`#include <media_stats_resource.h>`

The top-level transport container for messages sent from server to client in the `media-stats` data channel.

## Summary

Any combination of fields may be set, but the message is never empty.

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>resources</code></td><td><div><code>std::optional< std::vector< MediaStatsResourceSnapshot > ></code></div><p>Resource snapshots.</p></td></tr><tr><td><code>response</code></td><td><div><code>std::optional< MediaStatsResponse ></code></div><p>An optional response to an incoming request.</p></td></tr></tbody></table>

## Public attributes

### resources

```
std::optional< std::vector< MediaStatsResourceSnapshot > > meet::MediaStatsChannelToClient::resources
```

Resource snapshots.

### response

```
std::optional< MediaStatsResponse > meet::MediaStatsChannelToClient::response
```

An optional response to an incoming request.
