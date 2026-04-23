---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-entries-channel-to-client
root: workspace
fetched_at: 2026-04-23T15:30:35.932Z
---

# meet::MediaEntriesChannelToClient

## meet::MediaEntriesChannelToClient

`#include <media_entries_resource.h>`

The top-level transport container for messages sent from server to client in the `media-entries` data channel.

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>deleted_resources</code></td><td><div><code>std::vector< MediaEntriesDeletedResource ></code></div><p>The list of deleted resources.</p></td></tr><tr><td><code>resources</code></td><td><div><code>std::vector< MediaEntriesResourceSnapshot ></code></div><p>Resource snapshots.</p></td></tr></tbody></table>

## Public attributes

### deleted\_resources

```
std::vector< MediaEntriesDeletedResource > meet::MediaEntriesChannelToClient::deleted_resources
```

The list of deleted resources.

There is no order between the entries in the list.

### resources

```
std::vector< MediaEntriesResourceSnapshot > meet::MediaEntriesChannelToClient::resources
```

Resource snapshots.

There is no implied order between the snapshots in the list.
