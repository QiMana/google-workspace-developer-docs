---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.statssectiondata
root: workspace
fetched_at: 2026-04-23T15:30:55.146Z
---

# Type alias StatsSectionData

A section of media stats. Used to map the [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) to the expected structure for the data channel. All sections have an id and a type. For fields in a specific type, please see the StatTypes interface.

## Signature

```
declare type StatsSectionData = StatsSection & {
  [key in keyof StatTypes]?: StatTypes[key];
};
```
