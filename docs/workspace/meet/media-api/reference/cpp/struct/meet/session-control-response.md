---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/session-control-response
root: workspace
fetched_at: 2026-04-23T15:30:38.190Z
---

# meet::SessionControlResponse

## meet::SessionControlResponse

`#include <session_control_resource.h>`

An optional response from Meet servers to an incoming request.

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>leave_response</code></td><td><div><code>LeaveResponse</code></div></td></tr><tr><td><code>request_id</code></td><td><div><code>int64_t</code></div></td></tr><tr><td><code>status</code></td><td><div><code>absl::Status</code></div><p>The response status from Meet servers to an incoming request.</p></td></tr></tbody></table>

## Public attributes

### leave\_response

```
LeaveResponse meet::SessionControlResponse::leave_response
```

### request\_id

```
int64_t meet::SessionControlResponse::request_id
```

### status

```
absl::Status meet::SessionControlResponse::status
```

The response status from Meet servers to an incoming request.

This should be used by clients to determine the outcome of the request.
