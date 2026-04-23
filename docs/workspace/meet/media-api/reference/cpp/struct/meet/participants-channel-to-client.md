---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participants-channel-to-client
root: workspace
fetched_at: 2026-04-23T15:30:37.602Z
---

# meet::ParticipantsChannelToClient

## meet::ParticipantsChannelToClient

`#include <participants_resource.h>`

The top-level transport container for messages converted from proto to C++ struct.

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>deleted_resources</code></td><td><div><code>std::vector< ParticipantDeletedResource ></code></div><p>The list of deleted resources.</p></td></tr><tr><td><code>resources</code></td><td><div><code>std::vector< ParticipantResourceSnapshot ></code></div><p>Resource snapshots.</p></td></tr></tbody></table>

## Public attributes

### deleted\_resources

```
std::vector< ParticipantDeletedResource > meet::ParticipantsChannelToClient::deleted_resources
```

The list of deleted resources.

There is no order between the entries in the list.

### resources

```
std::vector< ParticipantResourceSnapshot > meet::ParticipantsChannelToClient::resources
```

Resource snapshots.

There is no implied order between the snapshots in the list.
