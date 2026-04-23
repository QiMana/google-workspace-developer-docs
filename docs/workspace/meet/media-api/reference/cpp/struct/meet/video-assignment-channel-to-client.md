---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-assignment-channel-to-client
root: workspace
fetched_at: 2026-04-23T15:30:39.095Z
---

# meet::VideoAssignmentChannelToClient

## meet::VideoAssignmentChannelToClient

`#include <video_assignment_resource.h>`

The top-level transport container for messages sent from server to client in the `video-assignment` data channel.

## Summary

Any combination of fields may be set, but the message is never empty.

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>resources</code></td><td><div><code>std::vector< VideoAssignmentResourceSnapshot ></code></div><p>Resource snapshots.</p></td></tr><tr><td><code>response</code></td><td><div><code>std::optional< VideoAssignmentResponse ></code></div><p>An optional response to a incoming request.</p></td></tr></tbody></table>

## Public attributes

### resources

```
std::vector< VideoAssignmentResourceSnapshot > meet::VideoAssignmentChannelToClient::resources
```

Resource snapshots.

There is no implied order between the snapshots in the list.

### response

```
std::optional< VideoAssignmentResponse > meet::VideoAssignmentChannelToClient::response
```

An optional response to a incoming request.
