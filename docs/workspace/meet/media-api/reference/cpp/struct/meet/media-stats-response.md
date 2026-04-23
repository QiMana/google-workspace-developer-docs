---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-stats-response
root: workspace
fetched_at: 2026-04-23T15:30:36.901Z
---

# meet::MediaStatsResponse

## meet::MediaStatsResponse

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>request_id = 0</code></td><td><div><code>int64_t</code></div></td></tr><tr><td><code>status</code></td><td><div><code>absl::Status</code></div><p>The response status from Meet servers to an incoming request.</p></td></tr><tr><td><code>upload_media_stats</code></td><td><div><code>std::optional< UploadMediaStatsResponse ></code></div></td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Structs</h3></th></tr><tr><td><a href="https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-stats-response/upload-media-stats-response">meet::MediaStatsResponse::UploadMediaStatsResponse</a></td><td></td></tr></tbody></table>

## Public attributes

### request\_id

```
int64_t meet::MediaStatsResponse::request_id = 0
```

### status

```
absl::Status meet::MediaStatsResponse::status
```

The response status from Meet servers to an incoming request.

This should be used by clients to determine the outcome of the request.

### upload\_media\_stats

```
std::optional< UploadMediaStatsResponse > meet::MediaStatsResponse::upload_media_stats
```
