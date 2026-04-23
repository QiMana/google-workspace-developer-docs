---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.mediastatsconfiguration.md
root: workspace
fetched_at: 2026-04-23T15:30:50.557Z
---

# Interface MediaStatsConfiguration

Configuration for media stats. Provided by the server and has to be used by the client to upload media stats.

## Signature

```
declare interface MediaStatsConfiguration
```

## Property signatures

| Name | Description |
| --- | --- |
| [`allowlist`](./media_api.mediastatsconfiguration.allowlist.md.md) | A map of allow listed sections. The key is the section type, and the value is the keys that are allow listed for that section. Fields can be found in [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) |
| [`uploadIntervalSeconds`](./media_api.mediastatsconfiguration.uploadintervalseconds.md.md) | The interval between each upload of media stats. If this is zero, the client should not upload any media stats. |
