---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-assignment-response
root: workspace
fetched_at: 2026-04-23T15:30:39.226Z
---

# meet::VideoAssignmentResponse

## meet::VideoAssignmentResponse

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>request_id = 0</code></td><td><div><code>int64_t</code></div><p>The request ID in the request this is the response to.</p></td></tr><tr><td><code>set_assignment</code></td><td><div><code>std::optional< SetVideoAssignmentResponse ></code></div></td></tr><tr><td><code>status</code></td><td><div><code>absl::Status</code></div><p>The response status for this request.</p></td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Structs</h3></th></tr><tr><td><a href="https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/video-assignment-response/set-video-assignment-response">meet::VideoAssignmentResponse::SetVideoAssignmentResponse</a></td><td></td></tr></tbody></table>

## Public attributes

### request\_id

```
int64_t meet::VideoAssignmentResponse::request_id = 0
```

The request ID in the request this is the response to.

### set\_assignment

```
std::optional< SetVideoAssignmentResponse > meet::VideoAssignmentResponse::set_assignment
```

### status

```
absl::Status meet::VideoAssignmentResponse::status
```

The response status for this request.

This should be used by clients to determine the RPC result.
