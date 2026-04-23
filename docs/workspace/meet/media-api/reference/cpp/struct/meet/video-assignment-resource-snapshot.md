---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-assignment-resource-snapshot
root: workspace
fetched_at: 2026-04-23T15:30:39.484Z
---

# meet::VideoAssignmentResourceSnapshot

## meet::VideoAssignmentResourceSnapshot

`#include <video_assignment_resource.h>`

A resource snapshot managed by the server and replicated to the client.

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>assignment</code></td><td></td></tr><tr><td><code>id = 0</code></td><td><div><code>int64_t</code></div><p>The video assignment resource is a singleton resource.</p></td></tr></tbody></table>

## Public attributes

### assignment

```
std::optional< VideoAssignment > meet::VideoAssignmentResourceSnapshot::assignment
```

### id

```
int64_t meet::VideoAssignmentResourceSnapshot::id = 0
```

The video assignment resource is a singleton resource.

Therefore, this ID is always 0.
