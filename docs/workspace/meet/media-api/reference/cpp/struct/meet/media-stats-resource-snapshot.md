---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-stats-resource-snapshot
root: workspace
fetched_at: 2026-04-23T15:30:37.022Z
---

# meet::MediaStatsResourceSnapshot

## meet::MediaStatsResourceSnapshot

`#include <media_stats_resource.h>`

A resource snapshot managed by the server and replicated to the client.

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>configuration</code></td><td><div><code>MediaStatsConfiguration</code></div></td></tr><tr><td><code>id = 0</code></td><td><div><code>int64_t</code></div><p>The media stats resource is a singleton resource.</p></td></tr></tbody></table>

## Public attributes

### configuration

```
MediaStatsConfiguration meet::MediaStatsResourceSnapshot::configuration
```

### id

```
int64_t meet::MediaStatsResourceSnapshot::id = 0
```

The media stats resource is a singleton resource.

Therefore, this ID is always 0.
