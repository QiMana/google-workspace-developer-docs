---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-assignment-request
root: workspace
fetched_at: 2026-04-23T15:30:38.756Z
---

# meet::VideoAssignmentRequest

## meet::VideoAssignmentRequest

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>request_id = 0</code></td><td><div><code>int64_t</code></div><p>A unique client-generated identifier for this request.</p></td></tr><tr><td><code>set_video_assignment_request</code></td><td><div><code>std::optional< SetVideoAssignmentRequest ></code></div></td></tr></tbody></table>

## Public attributes

### request\_id

```
int64_t meet::VideoAssignmentRequest::request_id = 0
```

A unique client-generated identifier for this request.

Different requests must never have the same request ID.

### set\_video\_assignment\_request

```
std::optional< SetVideoAssignmentRequest > meet::VideoAssignmentRequest::set_video_assignment_request
```
