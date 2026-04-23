---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-stats-request
root: workspace
fetched_at: 2026-04-23T15:30:36.812Z
---

# meet::MediaStatsRequest

## meet::MediaStatsRequest

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>request_id = 0</code></td><td><div><code>int64_t</code></div><p>A unique client-generated identifier for this request.</p></td></tr><tr><td><code>upload_media_stats</code></td><td><div><code>std::optional< UploadMediaStatsRequest ></code></div><p>Request payload.</p></td></tr></tbody></table>

## Public attributes

### request\_id

```
int64_t meet::MediaStatsRequest::request_id = 0
```

A unique client-generated identifier for this request.

Different requests must never have the same request ID.

### upload\_media\_stats

```
std::optional< UploadMediaStatsRequest > meet::MediaStatsRequest::upload_media_stats
```

Request payload.
